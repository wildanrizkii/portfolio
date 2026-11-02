"use client";
import React, { useEffect, ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CircleAnimatedBackground from "@/components/AnimatedBackground/CircleAnimatedBackground";
import AnimatedScrollMouse from "../AnimatedScrollMouse";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import Projects from "../Projects/Featured";
import { Palette, Code2, Globe } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import { useTransitionState } from "../PageTransition";
import { useAesthetic } from "@/context/AestheticContext";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 1.4 },
  },
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const backgroundFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.7 },
  },
};

const Portfolio = () => {
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();
  const { aesthetic } = useAesthetic();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isHallmark = aesthetic === "hallmark";

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative overflow-hidden min-h-screen">
        {isHallmark ? (
          <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] dark:opacity-[0.05]"
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
            className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-0"
            initial="hidden"
            animate={isTransitioning ? "hidden" : "visible"}
            variants={backgroundFadeIn}
          >
            <CircleAnimatedBackground />
          </motion.section>
        )}

        <Navbar />

        <motion.section
          className={isHallmark 
            ? "relative max-w-5xl mx-auto px-6 pt-44 md:pt-56 pb-24 grid gap-8 z-10"
            : "relative max-w-5xl mx-auto px-4 md:px-12 py-48 md:py-56 grid gap-16 z-10"
          }
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            className="w-full grid gap-4 md:gap-3"
            variants={staggerChildren}
          >
            <motion.div
              variants={fadeInUp}
              className={isHallmark
                ? "flex items-center gap-2 px-3 py-1 border border-neutral-300 dark:border-neutral-800 bg-white/40 dark:bg-white/5 text-foreground text-xs font-mono uppercase tracking-widest w-fit select-none mb-2"
                : "flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-transparent text-foreground text-sm font-semibold w-fit select-none mb-2"
              }
            >
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full opacity-75 ${isHallmark ? "bg-neutral-400 dark:bg-neutral-600 rounded-none" : "bg-neutral-400 dark:bg-neutral-600 rounded-full"}`}></span>
                <span className={`relative inline-flex h-2 w-2 bg-foreground ${isHallmark ? "rounded-none" : "rounded-full"}`}></span>
              </span>
              Available for Freelance Projects
            </motion.div>

            <motion.h1
              className={isHallmark 
                ? "text-4xl md:text-7xl font-serif font-normal text-foreground leading-tight tracking-tight"
                : "text-3xl md:text-7xl font-medium text-dark-gray"
              }
              variants={fadeInUp}
            >
              Hi, I'm Wildan
            </motion.h1>

            <motion.h1
              className={isHallmark
                ? "text-4xl md:text-7xl font-serif font-normal text-foreground leading-tight tracking-tight italic"
                : "text-4xl md:text-7xl font-semibold text-dark-gray"
              }
              variants={fadeInUp}
            >
              I'm turning my mind into magic
            </motion.h1>

            <motion.p
              className={isHallmark
                ? "text-base md:text-lg font-normal text-muted-foreground pt-4 max-w-2xl leading-relaxed"
                : "text-xl md:text-2xl font-medium text-dark-gray pt-4"
              }
              variants={fadeInUp}
            >
              I am a Web Designer and Full Stack Web Developer specializing in
              creating web applications with clean user interfaces, robust architectures, and
              optimized user experiences.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-2">
              <Link
                href="/about"
                className={isHallmark
                  ? "mt-4 inline-block px-6 py-3.5 border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground rounded-none text-xs font-mono uppercase tracking-wider transition-colors duration-200 cursor-none clickable font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
                  : "mt-2 md:mt-8 inline-flex items-center justify-center px-4 py-4 bg-foreground text-background rounded-md text-lg md:text-xl w-37.5 md:w-45 cursor-none clickable font-medium transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2"
                }
              >
                About me
              </Link>
            </motion.div>
          </motion.div>

          {!isHallmark && (
            <motion.div
              className="w-full flex justify-center"
              variants={fadeIn}
            >
              <AnimatedScrollMouse />
            </motion.div>
          )}
        </motion.section>

        <AboutBrief />
        <Services />

        <motion.div
          className={`w-full mx-auto overflow-hidden ${isHallmark ? "max-w-5xl px-6 py-12 z-10 relative" : "max-w-6xl"}`}
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {isHallmark && (
            <div className="mb-12">
              <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">Portfolio</p>
              <h2 className="text-4xl md:text-6xl font-serif font-normal text-foreground">Selected Works</h2>
            </div>
          )}
          <Projects className={isHallmark ? "max-w-5xl" : undefined} />
        </motion.div>

        <TechShowcase />
        <Workflow />

        <motion.section
          className={`w-full max-w-5xl mx-auto overflow-hidden z-10 relative ${isHallmark ? "py-16 md:py-24 px-6" : "py-16 md:py-24"}`}
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            className={isHallmark
              ? "border-y border-neutral-300 dark:border-neutral-800 py-16 md:py-20 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center w-full px-6 bg-white/10 dark:bg-white/2"
              : "relative flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-start w-full px-4"
            }
            variants={fadeInUp}
          >
            <h1 className={isHallmark ? "text-4xl md:text-6xl font-serif italic text-foreground leading-tight" : "text-3xl md:text-5xl font-medium text-dark-gray"}>
              Let's work together
            </h1>

            {isHallmark ? (
              <motion.a
                href="mailto:wildanrizki9560@gmail.com"
                className="px-8 py-4 border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground text-xs font-mono uppercase tracking-widest transition-colors duration-200 rounded-none cursor-none clickable font-semibold whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Write an Email
              </motion.a>
            ) : (
              <motion.a
                href="mailto:wildanrizki9560@gmail.com"
                className="w-45 h-14 md:h-16 flex items-center justify-center rounded-sm bg-foreground text-background mt-4 md:mt-0 font-semibold cursor-none clickable transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Write an Email
              </motion.a>
            )}
          </motion.div>
        </motion.section>

        <motion.footer
          className={`w-full py-12 bg-transparent mt-12 z-10 relative ${isHallmark ? "border-t border-neutral-300/40 dark:border-neutral-800/40" : ""}`}
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex flex-col md:flex-row justify-center items-center gap-1 text-center">
            {isHallmark ? (
              <span>Designed & developed by wildanrizkii</span>
            ) : (
              <div className="text-gray-500 flex flex-col md:flex-row justify-center items-center gap-1 text-center font-medium">
                <span>Designed and developed by me</span>
              </div>
            )}
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

interface StatItem {
  number: string;
  label: string;
}

const AboutBrief = () => {
  const { isTransitioning } = useTransitionState();
  const { aesthetic } = useAesthetic();
  const isHallmark = aesthetic === "hallmark";

  const stats: StatItem[] = [
    { number: "10+", label: "Projects Completed" },
    { number: "UNPAR", label: "Informatics Graduate" },
    { number: "2+", label: "Years Programming" },
    { number: "100%", label: "Responsive Design" },
  ];

  return (
    <motion.section
      className={isHallmark
        ? "w-full max-w-5xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative"
        : "w-full max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      }
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <motion.div className="lg:col-span-7 space-y-6" variants={fadeInUp}>
        <p className={isHallmark ? "text-xs font-mono tracking-widest text-muted-foreground uppercase" : "text-sm font-semibold tracking-widest text-gray-500 uppercase"}>
          Who I Am
        </p>
        <h2 className={isHallmark ? "text-3xl md:text-5xl font-serif italic text-foreground leading-tight" : "text-3xl md:text-5xl font-medium text-dark-gray leading-tight"}>
          Crafting web experiences that blend aesthetic beauty with robust performance.
        </h2>
        <p className={isHallmark ? "text-base text-muted-foreground font-normal leading-relaxed font-sans" : "text-lg text-gray-600 font-medium leading-relaxed"}>
          I am a Web Designer and Full Stack Web Developer. With a solid computer
          science foundation, I specialize in building reactive user interfaces,
          optimized backend systems, and responsive layout architectures using modern
          frameworks like React and Next.js.
        </p>
        <motion.div className="pt-4">
          <Link
            href="/about"
            className={isHallmark
              ? "inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground text-xs font-mono uppercase tracking-wider transition-colors duration-200 rounded-none cursor-none clickable font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
              : "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background rounded-md text-base font-semibold group cursor-none clickable transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2"
            }
          >
            Read my story
            <FiArrowRight className={isHallmark ? "" : "transition-transform group-hover:translate-x-1"} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div className={isHallmark ? "lg:col-span-5 grid grid-cols-2" : "lg:col-span-5 grid grid-cols-2 gap-6"} variants={staggerChildren}>
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className={isHallmark
              ? "p-6 border border-neutral-300 dark:border-neutral-800 -mr-px -mt-px bg-white/10 dark:bg-white/2 backdrop-blur-xs flex flex-col justify-center text-center rounded-none cursor-none clickable hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-colors duration-300"
              : "p-6 rounded-xl border-2 border-neutral-300 bg-white/20 backdrop-blur-xs flex flex-col justify-center text-center cursor-none clickable hover:border-black transition-colors duration-300"
            }
            variants={fadeInUp}
            whileHover={isHallmark ? undefined : { y: -5 }}
          >
            <h3 className={isHallmark ? "text-3xl md:text-4xl font-serif font-normal text-foreground mb-1" : "text-3xl md:text-4xl font-extrabold text-foreground mb-1"}>
              {stat.number}
            </h3>
            <p className={isHallmark ? "text-xs text-muted-foreground font-mono uppercase tracking-wider" : "text-sm text-gray-500 font-semibold"}>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

interface ServiceItem {
  icon: ReactNode;
  title: string;
  desc: string;
  deliverables: string[];
}

const Services = () => {
  const { isTransitioning } = useTransitionState();
  const { aesthetic } = useAesthetic();
  const isHallmark = aesthetic === "hallmark";

  const serviceList: ServiceItem[] = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      desc: "Creating high-fidelity wireframes, interactive user flows, and modern design systems that captivate and convert.",
      deliverables: ["User Research", "Wireframing & Prototyping", "Aesthetic Light Themes", "Design Systems in Figma"],
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Front-End Engineering",
      desc: "Building pixel-perfect interfaces with smooth animations, optimized core web vitals, and structured accessibility.",
      deliverables: ["React.js & Next.js Builds", "Tailwind CSS & Modern Styling", "Framer Motion Animations", "Responsive Mobile-First CSS"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Development",
      desc: "Architecting backend integrations, relational databases, REST/GraphQL APIs, and secure application rules.",
      deliverables: ["Node.js & Express API Routes", "Supabase & Firebase Integration", "PostgreSQL & Schema Layouts", "Secure Authentication & Roles"],
    },
  ];

  return (
    <motion.section
      className={isHallmark
        ? "w-full max-w-5xl mx-auto px-6 py-24 z-10 relative"
        : "w-full max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28"
      }
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <div className="mb-12">
        <motion.p
          className={isHallmark ? "text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2" : "text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"}
          variants={fadeInUp}
        >
          Capabilities
        </motion.p>
        <motion.h2
          className={isHallmark ? "text-4xl md:text-6xl font-serif font-normal text-foreground" : "text-3xl md:text-5xl font-medium text-dark-gray"}
          variants={fadeInUp}
        >
          Services I Provide
        </motion.h2>
      </div>

      <div className={isHallmark ? "grid grid-cols-1 md:grid-cols-3" : "grid grid-cols-1 md:grid-cols-3 gap-8"}>
        {serviceList.map((service, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={isHallmark ? undefined : { y: -8 }}
            className={isHallmark
              ? "p-8 border border-neutral-300 dark:border-neutral-800 -mr-px bg-white/10 dark:bg-white/2 backdrop-blur-md flex flex-col justify-between hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-colors duration-300 rounded-none cursor-none clickable group"
              : "p-8 rounded-2xl border-2 border-neutral-300 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-md flex flex-col justify-between hover:border-foreground transition-all duration-500 cursor-none clickable group"
            }
          >
            <div className="space-y-6">
              <div className={isHallmark
                ? "w-12 h-12 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-foreground bg-transparent"
                : "w-16 h-16 rounded-xl bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center group-hover:bg-foreground dark:group-hover:bg-foreground group-hover:text-background dark:group-hover:text-background transition-colors duration-500"
              }>
                <span className={isHallmark ? "" : "transition-colors duration-500 [&>svg]:group-hover:text-background"}>
                  {service.icon}
                </span>
              </div>
              <h3 className={isHallmark ? "text-2xl font-serif italic text-foreground" : "text-2xl font-bold text-foreground"}>{service.title}</h3>
              <p className={isHallmark ? "text-sm text-muted-foreground leading-relaxed font-normal" : "text-base text-gray-600 font-medium leading-relaxed"}>
                {service.desc}
              </p>
            </div>

            <div className={isHallmark
              ? "mt-8 pt-6 border-t border-neutral-300/60 dark:border-neutral-800/60"
              : "mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800"
            }>
              <ul className={isHallmark ? "space-y-2 text-xs font-mono uppercase tracking-wider text-muted-foreground" : "space-y-2 text-sm font-semibold text-neutral-600"}>
                {service.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <span className={isHallmark ? "w-1.5 h-1.5 border border-neutral-400 bg-transparent" : "w-1.5 h-1.5 rounded-full bg-neutral-400"} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

interface TechGroup {
  name: string;
  skills: string[];
}

const TechShowcase = () => {
  const { isTransitioning } = useTransitionState();
  const { aesthetic } = useAesthetic();
  const isHallmark = aesthetic === "hallmark";

  const groups: TechGroup[] = [
    {
      name: "Front-End",
      skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "React Query", "Shadcn UI", "Radix UI", "Ant Design"],
    },
    {
      name: "Back-End & DB",
      skills: ["Node.js", "NestJS", "Express.js", "Prisma ORM", "PostgreSQL", "Supabase", "Docker", "REST APIs", "Swagger OpenAPI"],
    },
    {
      name: "Tools & Motion",
      skills: ["Git & GitHub", "Framer Motion", "GSAP", "Lenis Scroll", "Figma", "Adobe XD"],
    },
  ];

  return (
    <motion.section
      className={isHallmark
        ? "w-full max-w-5xl mx-auto px-6 py-24 z-10 relative"
        : "w-full max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28"
      }
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <div className="mb-12">
        <motion.p
          className={isHallmark ? "text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2" : "text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"}
          variants={fadeInUp}
        >
          Stack
        </motion.p>
        <motion.h2
          className={isHallmark ? "text-4xl md:text-6xl font-serif font-normal text-foreground" : "text-3xl md:text-5xl font-medium text-dark-gray"}
          variants={fadeInUp}
        >
          Tech & Tools
        </motion.h2>
      </div>

      <div className={isHallmark ? "grid grid-cols-1 md:grid-cols-3" : "grid grid-cols-1 md:grid-cols-3 gap-8"}>
        {groups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className={isHallmark
              ? "p-8 border border-neutral-300 dark:border-neutral-800 -mr-px bg-white/10 dark:bg-white/2 rounded-none cursor-none clickable flex flex-col justify-start hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-colors duration-300"
              : "p-8 rounded-2xl border-2 border-neutral-300 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-md hover:border-foreground transition-colors duration-500 cursor-none clickable flex flex-col justify-start"
            }
          >
            <h3 className={isHallmark ? "text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-neutral-300/60 dark:border-neutral-800/60 pb-3 mb-6" : "text-lg font-bold uppercase tracking-wider text-gray-500 border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4"}>
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={isHallmark
                    ? "text-xs font-mono text-foreground bg-white/40 dark:bg-white/5 hover:bg-foreground hover:text-background px-2.5 py-1 border border-neutral-300 dark:border-neutral-800 transition-colors duration-200 rounded-none"
                    : "text-sm font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-200/50 dark:bg-neutral-800/50 hover:bg-foreground hover:text-background px-3.5 py-1.5 rounded-lg border border-neutral-200/60 dark:border-neutral-700 transition-all duration-300"
                  }
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

interface StepItem {
  num: string;
  title: string;
  desc: string;
}

const Workflow = () => {
  const { isTransitioning } = useTransitionState();
  const { aesthetic } = useAesthetic();
  const isHallmark = aesthetic === "hallmark";

  const steps: StepItem[] = [
    {
      num: "01",
      title: "Research & Concept",
      desc: "Analyzing user needs, domain research, planning site architecture, and wireframing UX pathways.",
    },
    {
      num: "02",
      title: "UI/UX Design",
      desc: "Designing responsive interfaces, modern typography scales, layouts, and high-fidelity Figma prototypes.",
    },
    {
      num: "03",
      title: "Development",
      desc: "Writing componentized Next.js/React code, database integrations, backend APIs, and responsive styles.",
    },
    {
      num: "04",
      title: "Launch & Audits",
      desc: "Performing SEO updates, core web vital speed audits, testing accessibility rules, and product release.",
    },
  ];

  return (
    <motion.section
      className={isHallmark
        ? "w-full max-w-5xl mx-auto px-6 py-24 z-10 relative"
        : "w-full max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28"
      }
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <div className="mb-12">
        <motion.p
          className={isHallmark ? "text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2" : "text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"}
          variants={fadeInUp}
        >
          Workflow
        </motion.p>
        <motion.h2
          className={isHallmark ? "text-4xl md:text-6xl font-serif font-normal text-foreground" : "text-3xl md:text-5xl font-medium text-dark-gray"}
          variants={fadeInUp}
        >
          Development Process
        </motion.h2>
      </div>

      <div className={isHallmark ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"}>
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={isHallmark ? undefined : { y: -6 }}
            className={isHallmark
              ? "relative p-6 border border-neutral-300 dark:border-neutral-800 -mr-px bg-white/10 dark:bg-white/2 rounded-none flex flex-col gap-6 justify-between hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-colors duration-300 cursor-none clickable overflow-hidden group h-full"
              : "relative p-6 rounded-2xl border-2 border-neutral-300 dark:border-neutral-800 bg-white/20 dark:bg-white/5 backdrop-blur-xs flex flex-col gap-4 justify-between hover:border-foreground transition-colors duration-500 cursor-none clickable overflow-hidden group"
            }
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 z-0">
              <span className={isHallmark ? "text-7xl font-serif italic text-foreground select-none" : "text-7xl font-black text-foreground select-none"}>
                {step.num}
              </span>
            </div>

            <div className="space-y-4 relative z-10">
              <span className={isHallmark
                ? "text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-transparent border border-neutral-300/80 dark:border-neutral-800/80 px-2.5 py-1"
                : "text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-widest bg-neutral-200/50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 px-2 py-0.5 rounded-md"
              }>
                Step {step.num}
              </span>
              <h3 className={isHallmark ? "text-xl font-serif italic text-foreground pt-2" : "text-xl font-bold text-foreground pt-2"}>{step.title}</h3>
              <p className={isHallmark ? "text-sm text-muted-foreground font-normal leading-relaxed" : "text-sm text-gray-600 font-medium leading-relaxed"}>
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
