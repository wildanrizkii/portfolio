"use client";
import React, { useState, useEffect, useRef, useMemo, MouseEvent, ChangeEvent } from "react";
import { useMotionValue, motion, useSpring, useTransform, AnimatePresence, Variants } from "framer-motion";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CircleAnimatedBackground from "@/components/AnimatedBackground/CircleAnimatedBackground";
import { useTransitionState } from "../../PageTransition";
import useDebounce from "@/hooks/useDebounce";
import { useAesthetic } from "@/context/AestheticContext";

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tech: string[];
  img: string;
  imgFit?: string;
  href: string;
  categoryFilter: string;
}

const projectList: ProjectItem[] = [
  {
    title: "Adora SaaS",
    category: "SaaS · Healthcare ERP",
    description: "A cloud-native, multi-tenant SaaS pharmacy platform rebuilt with NestJS & Next.js 16 — managing prescriptions, drug inventory, staff roles, and branch analytics across multiple tenants.",
    tech: ["Next.js 16", "NestJS", "React 19", "Shadcn UI"],
    img: "/images/adora-saas/adora-1.webp",
    imgFit: "contain",
    href: "/projects/adora-saas",
    categoryFilter: "saas",
  },
  {
    title: "Cash Flow Tracking Application",
    category: "Financial Dashboard",
    description: "A tracking application with clean analytics, charts, and transaction history filters for personal financial management.",
    tech: ["Next.js", "Recharts", "PostgreSQL", "Supabase"],
    img: "/images/Cashify.png",
    href: "/projects/cashflow",
    categoryFilter: "finance",
  },
  {
    title: "Adora Pharmacy Management System",
    category: "Healthcare · Management System",
    description: "A full-featured pharmacy management system built for PT Adora Cipta Medika (2024) — managing prescriptions, drug inventory, staff roles, and financial reporting from a centralized dashboard.",
    tech: ["Next.js", "Express.js", "Ant Design", "PostgreSQL"],
    img: "/images/Apotek.jpg",
    href: "/projects/adora",
    categoryFilter: "saas",
  },
  {
    title: "Spare Part Information System",
    category: "Full-Stack Sales Platform",
    description: "An intuitive web platform designed to manage complex spare part hierarchies, vendor specifications, materials, and automated order generation.",
    tech: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    img: "",
    href: "/projects/sparepart",
    categoryFilter: "full-stack",
  },
];

interface CategoryItem {
  id: string;
  label: string;
}

const categories: CategoryItem[] = [
  { id: "all", label: "All Works" },
  { id: "full-stack", label: "Full-Stack" },
  { id: "saas", label: "Healthcare SaaS" },
  { id: "finance", label: "Finance" },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const backgroundFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  },
};

const ProjectList = () => {
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();
  const { aesthetic } = useAesthetic();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 600);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const isHallmark = aesthetic === "hallmark";

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setIsInitialLoad(false);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsInitialLoad(false);
  };

  const filteredProjects = useMemo(() => {
    return projectList.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" ||
        project.categoryFilter === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        project.category.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        project.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(debouncedSearch.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [debouncedSearch, selectedCategory]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative overflow-hidden min-h-screen flex flex-col justify-between">
        {isHallmark ? (
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] dark:opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--muted-foreground) 1px, transparent 1px),
                linear-gradient(to bottom, var(--muted-foreground) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        ) : (
          <motion.section
            className="absolute top-0 left-0 w-screen h-screen overflow-hidden"
            initial="hidden"
            animate={isTransitioning ? "hidden" : "visible"}
            variants={backgroundFadeIn}
          >
            <CircleAnimatedBackground />
          </motion.section>
        )}

        <Navbar />

        <div className={`relative w-full max-w-5xl mx-auto pt-36 md:pt-48 pb-12 grow z-10 ${isHallmark ? "px-6" : "px-4 md:px-8"}`}>
          <motion.section
            initial="hidden"
            animate={isTransitioning ? "hidden" : "visible"}
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
            className="space-y-12 pb-12"
          >
            <div>
              <p className={isHallmark ? "text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2" : "text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"}>
                Portfolio
              </p>
              <h1 className={isHallmark ? "text-4xl md:text-6xl font-serif font-normal text-foreground leading-none" : "text-4xl md:text-6xl font-medium text-dark-gray"}>
                Selected Works
              </h1>
            </div>

            <motion.div variants={fadeInUp} className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b pb-8 ${isHallmark ? "border-neutral-300/60 dark:border-neutral-800/60" : "border-neutral-200 dark:border-neutral-800"}`}>
              <div className="relative w-full md:max-w-xs">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className={isHallmark
                    ? "w-full bg-white/40 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 px-4 py-2.5 pl-10 focus:outline-none focus:border-foreground rounded-none text-sm font-mono placeholder-muted-foreground cursor-none"
                    : "w-full bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 px-4 py-2.5 pl-10 focus:outline-none focus:border-neutral-400 rounded-xl text-sm placeholder-gray-400 backdrop-blur-md cursor-none"
                  }
                />
                <FiSearch className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              </div>

              <div className={isHallmark ? "flex flex-wrap border border-neutral-300 dark:border-neutral-800 bg-white/20 dark:bg-white/5 rounded-none" : "flex flex-wrap gap-2"}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={isHallmark
                      ? `px-4 py-2 text-xs font-mono tracking-wider transition-colors duration-200 rounded-none cursor-none clickable border-r last:border-r-0 border-neutral-300/60 dark:border-neutral-800/60 uppercase ${
                          selectedCategory === cat.id
                            ? "bg-foreground text-background font-semibold"
                            : "text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 hover:text-foreground"
                        }`
                      : `px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 cursor-none clickable ${
                          selectedCategory === cat.id
                            ? "bg-foreground text-background shadow-md"
                            : "bg-white/40 dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-800"
                        }`
                    }
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="relative z-10 mb-20">
              <AnimatePresence mode="popLayout">
                {filteredProjects.length > 0 ? (
                  <motion.div
                    layout
                    className={isHallmark ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "grid grid-cols-1 md:grid-cols-2 gap-8"}
                    key="grid"
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredProjects.map((project, index) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 45, scale: 0.96 }}
                          animate={isTransitioning 
                            ? { opacity: 0, y: 45, scale: 0.96 }
                            : { 
                                opacity: 1, 
                                y: 0, 
                                scale: 1, 
                                transition: { 
                                  type: "spring", 
                                  stiffness: 90, 
                                  damping: 15,
                                  delay: isInitialLoad ? 0.55 + index * 0.12 : 0
                                } 
                              }
                          }
                          exit={{ 
                            opacity: 0, 
                            scale: 0.96, 
                            y: 20, 
                            transition: { duration: 0.25, ease: "easeInOut" } 
                          }}
                          key={project.title}
                          className="h-full"
                        >
                          <ProjectCard project={project} isHallmark={isHallmark} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className={isHallmark
                      ? "text-center py-20 border border-dashed border-neutral-300 dark:border-neutral-800"
                      : "text-center py-20 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl"
                    }
                    key="empty"
                  >
                    <p className={isHallmark ? "font-serif italic text-muted-foreground" : "text-gray-500 font-medium"}>No projects match your search criteria.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, isHallmark }: { project: ProjectItem; isHallmark: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { damping: 25, stiffness: 180 });

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);

    spotlightX.set(mouseX);
    spotlightY.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <Link href={project.href} className="block group h-full cursor-none clickable">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={isHallmark
          ? "relative overflow-hidden rounded-none border border-neutral-300 dark:border-neutral-800 bg-white/10 dark:bg-white/2 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between h-full hover:border-foreground transition-all duration-300 min-h-115 cursor-none clickable"
          : "relative overflow-hidden rounded-2xl border-2 border-neutral-300/60 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between h-full hover:border-foreground transition-colors duration-500 min-h-115 cursor-none clickable"
        }
      >
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: useTransform(
              [spotlightX, spotlightY],
              ([sx, sy]) => `radial-gradient(400px circle at ${sx}px ${sy}px, ${isHallmark ? "rgba(0, 0, 0, 0.02)" : "rgba(0, 0, 0, 0.03)"}, transparent 80%)`
            ),
          }}
        />

        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span className={isHallmark
                ? "inline-block text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-white/40 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/85 px-3 py-1 rounded-none backdrop-blur-xs mb-2"
                : "inline-block text-xs font-semibold uppercase tracking-widest text-gray-500 bg-white/80 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1 rounded-full backdrop-blur-xs mb-2"
              }>
                {project.category}
              </span>
              <h2 className={isHallmark ? "text-2xl font-serif italic text-foreground leading-tight" : "text-xl md:text-2xl font-bold text-dark-gray leading-tight"}>
                {project.title}
              </h2>
            </div>
            <motion.div
              className={isHallmark
                ? "bg-transparent text-foreground border border-neutral-300 dark:border-neutral-800 p-3 rounded-none flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-250 shrink-0"
                : "bg-foreground text-background p-3 rounded-full flex items-center justify-center shadow-lg group-hover:bg-foreground/80 transition-colors duration-300 shrink-0"
              }
              whileHover={{ scale: isHallmark ? 1.05 : 1.1 }}
              whileTap={{ scale: isHallmark ? 0.95 : 0.9 }}
            >
              <FiArrowRight className={isHallmark ? "text-sm" : "text-lg"} />
            </motion.div>
          </div>

          <p className={isHallmark ? "text-sm text-muted-foreground font-normal leading-relaxed" : "text-sm md:text-base text-gray-600 font-medium group-hover:text-foreground transition-colors duration-300 leading-relaxed"}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className={isHallmark
                  ? "text-[10px] font-mono text-foreground bg-white/40 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 px-2.5 py-1 rounded-none"
                  : "text-xs font-semibold text-neutral-700 bg-neutral-200/50 hover:bg-neutral-200/80 px-2.5 py-1 rounded-md transition-colors"
                }
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          className={isHallmark
            ? "relative w-full rounded-none overflow-hidden mt-8 border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-100/50 dark:bg-neutral-900/50 grow flex items-center justify-center min-h-50 max-h-65 shadow-inner"
            : "relative w-full rounded-xl overflow-hidden mt-8 border border-neutral-200/50 bg-neutral-100 grow flex items-center justify-center min-h-50 max-h-65 shadow-inner"
          }
          style={{ transform: "translateZ(30px)" }}
        >
          {project.img ? (
            <motion.img
              src={project.img}
              alt={project.title}
              className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-103 ${
                isHallmark ? "rounded-none" : "rounded-xl"
              } ${project.imgFit === "contain" ? "object-cover object-top" : "object-cover"}`}
            />
          ) : (
            <div className={isHallmark ? "text-muted-foreground font-mono text-xs uppercase tracking-wider" : "text-gray-400 font-medium text-sm"}>Preview Unavailable</div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectList;
