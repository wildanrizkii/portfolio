"use client";
import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { Layout, Database, Sparkles, PenTool } from "lucide-react";
import { useTransitionState } from "../PageTransition";
import { CropMarks, RisoText } from "../BroadsheetHelpers";
import { skillCategories, SkillCategoryIcon } from "@/data/skills";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const getCategoryIcon = (iconType: SkillCategoryIcon): ReactNode => {
  switch (iconType) {
    case "layout":
      return <Layout className="w-5 h-5" />;
    case "database":
      return <Database className="w-5 h-5" />;
    case "pentool":
      return <PenTool className="w-5 h-5" />;
    case "sparkles":
      return <Sparkles className="w-5 h-5" />;
  }
};

const BroadsheetTechTools = () => {
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();

  return (
    <div className="relative justify-center bg-transparent w-full max-w-5xl mx-auto py-16 px-6 z-10 min-h-screen">
      <CropMarks />

      <motion.section
        key={pathname}
        initial="hidden"
        animate={isTransitioning ? "hidden" : "visible"}
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerChildren}
        className="space-y-12 pt-28"
      >
          <div>
            <motion.p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2" variants={fadeInUp}>
              Competencies
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-display font-black uppercase text-foreground leading-none"
              variants={fadeInUp}
            >
              <RisoText className="text-4xl md:text-6xl font-display font-black uppercase leading-none">Tech & Tools</RisoText>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 border border-foreground/30 -mr-px -mt-px bg-white/10 dark:bg-white/2 hover:bg-(--accent-teal) hover:text-white transition-all duration-200 rounded-none flex flex-col justify-between group h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-foreground/30 flex items-center justify-center bg-transparent group-hover:border-white group-hover:text-white transition-colors">
                      <span>{getCategoryIcon(category.iconType)}</span>
                    </div>
                    <h3 className="text-xl font-serif italic text-foreground group-hover:text-white transition-colors">{category.title}</h3>
                  </div>
                  <p className="text-sm font-serif text-muted-foreground font-normal leading-relaxed group-hover:text-white/80 transition-colors">
                    {category.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-foreground/20 group-hover:border-white/20 transition-colors">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-foreground bg-white/40 dark:bg-white/5 hover:bg-foreground hover:text-background px-2.5 py-1 border border-foreground/20 transition-colors duration-200 rounded-none group-hover:border-white/30 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
  );
};

export default BroadsheetTechTools;
