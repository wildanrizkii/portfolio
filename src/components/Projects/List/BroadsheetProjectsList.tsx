"use client";
import React, { useState, useEffect, useMemo, ChangeEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { useTransitionState } from "../../PageTransition";
import useDebounce from "@/hooks/useDebounce";
import { CropMarks, RisoText } from "../../BroadsheetHelpers";
import { projectList, projectCategories as categories, ProjectItem } from "@/data/projects";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const BroadsheetProjectsList = () => {
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();
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
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

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
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden min-h-screen flex flex-col justify-between">
        <CropMarks />
        <Navbar />

        <div className="relative w-full max-w-5xl mx-auto pt-36 md:pt-44 pb-12 grow z-10 px-6">
          <motion.section
            initial="hidden"
            animate={isTransitioning ? "hidden" : "visible"}
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
            className="space-y-12 pb-12"
          >
            <div>
              <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
                Catalog
              </p>
              <h1 className="text-4xl md:text-6xl font-display font-black uppercase text-foreground leading-none">
                <RisoText className="text-4xl md:text-6xl font-display font-black uppercase leading-none">Selected Works</RisoText>
              </h1>
            </div>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-foreground/20 pb-8">
              <div className="relative w-full md:max-w-xs">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full bg-white/40 dark:bg-white/5 border border-foreground/30 px-4 py-2.5 pl-10 focus:outline-none focus:border-foreground rounded-none text-sm font-mono placeholder-muted-foreground cursor-none"
                />
                <FiSearch className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
              </div>

              <div className="flex flex-wrap border border-foreground/30 bg-transparent rounded-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-2 text-xs font-mono tracking-wider transition-colors duration-150 rounded-none cursor-none clickable border-r last:border-r-0 border-foreground/20 uppercase font-semibold ${
                      selectedCategory === cat.id
                        ? "bg-(--accent-vermilion) text-white"
                        : "text-foreground hover:bg-foreground hover:text-background"
                    }`}
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
                    className="grid grid-cols-1 md:grid-cols-2"
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
                            transition: { duration: 0.2, ease: "easeInOut" } 
                          }}
                          key={project.title}
                          className="h-full"
                        >
                          <Link
                            href={project.href}
                            className="block h-full cursor-none clickable focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                          >
                            <div
                              className="p-8 border border-foreground/30 -mr-px -mt-px bg-white/10 dark:bg-white/2 backdrop-blur-sm flex flex-col justify-between hover:bg-white/20 transition-all duration-200 rounded-none group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-none active:translate-y-px min-h-115 h-full"
                            >
                              <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono text-white bg-(--accent-teal) px-2 py-0.5 uppercase tracking-wider">
                                    {project.category}
                                  </span>
                                  <span className="text-xs font-mono text-muted-foreground">
                                    {project.year}
                                  </span>
                                </div>

                                <div className="space-y-2">
                                  <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-foreground leading-none group-hover:text-(--accent-vermilion) transition-colors">
                                    {project.title}
                                  </h2>
                                  <p className="text-sm font-serif text-muted-foreground leading-relaxed">
                                    {project.description}
                                  </p>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <div className="flex flex-wrap gap-2 pt-2">
                                  {project.tech.map((t) => (
                                    <span
                                      key={t}
                                      className="text-[10px] font-mono text-foreground bg-white/40 dark:bg-white/5 border border-foreground/20 px-2.5 py-1 rounded-none"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>

                                <div className="pt-4 border-t border-foreground/10 flex justify-between items-center group-hover:border-foreground/30 transition-colors">
                                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                                    Case Study
                                  </span>
                                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-(--accent-vermilion)" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="text-center py-20 border border-dashed border-foreground/20"
                    key="empty"
                  >
                    <p className="font-serif italic text-muted-foreground">No projects match your search guidelines.</p>
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

export default BroadsheetProjectsList;
