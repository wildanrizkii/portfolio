"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { projectList } from "@/data/projects";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export interface BroadsheetProjectsProps {
  className?: string;
  [key: string]: unknown;
}

export default function BroadsheetProjects({ className = "" }: BroadsheetProjectsProps) {
  return (
    <motion.section
      className={`bg-transparent py-12 md:py-16 w-full ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={staggerChildren}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projectList.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className={project.featured ? "md:col-span-2 h-full" : "md:col-span-1 h-full"}
            >
              <Link href={project.href} className="block group h-full cursor-none clickable">
                <div className="p-8 border border-foreground/30 -mr-px -mt-px bg-white/10 dark:bg-white/2 backdrop-blur-sm flex flex-col justify-between hover:bg-white/20 transition-all duration-200 cursor-none clickable rounded-none group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-none active:translate-y-px min-h-115">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono text-white bg-(--accent-teal) px-2 py-0.5 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {(() => {
                          const slug = project.href.split("/").pop();
                          if (slug === "adora-saas") return "2026";
                          if (slug === "sparepart" || slug === "cashflow") return "2025";
                          return "2024";
                        })()}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground leading-none group-hover:text-(--accent-vermilion) transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-sm font-serif text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
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
        </div>
      </div>
    </motion.section>
  );
}
