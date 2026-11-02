"use client";
import React, { useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion, Variants } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import {
  Search,
  FileSpreadsheet,
  PackageSearch,
  Users,
  Database,
  ShieldCheck,
} from "lucide-react";
import { useTransitionState } from "../../PageTransition";
import { CropMarks, RisoText } from "../../BroadsheetHelpers";
import { GiAutoRepair } from "react-icons/gi";

interface MetaItem {
  label: string;
  value: string;
  note?: string;
}

interface HighlightItem {
  num: string;
  label: string;
}

interface FeatureItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface TechStackGroup {
  cat: string;
  items: string[];
}

const BroadsheetSparepart = () => {
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta: MetaItem[] = [
    { label: "Company", value: "PT XXX", note: "* Company requested anonymity" },
    { label: "Project Type", value: "Sales Support System" },
    { label: "Role", value: "Full Stack Developer" },
    { label: "Year", value: "2025" },
  ];

  const highlights: HighlightItem[] = [
    { num: "500+", label: "Parts Catalogued" },
    { num: "3", label: "User Roles" },
    { num: "100%", label: "Web-Based" },
    { num: "Excel", label: "Export Ready" },
  ];

  const features: FeatureItem[] = [
    {
      icon: <PackageSearch className="w-5 h-5" />,
      title: "Part Hierarchy Explorer",
      desc: "Visualize parent–child relationships between spare parts with intuitive nested tree navigation.",
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Advanced Search & Filter",
      desc: "Find any spare part instantly using smart filters by serial number, material, supplier, or manufacturer.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Comprehensive Part Database",
      desc: "Centralized repository with complete specifications: material grade, dimensions, origin, and lifecycle data.",
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5" />,
      title: "Excel Report Generator",
      desc: "Generate structured Excel files of selected parts for streamlined ordering and documentation workflows.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Client-Facing Presentation",
      desc: "Clean, professional interface designed to impress clients and prospects during sales engagements.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Role-Based Access Control",
      desc: "Granular permission levels for sales reps, admins, and managers to keep data secure and relevant.",
    },
  ];

  const techStack: TechStackGroup[] = [
    { cat: "Front-End", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
    { cat: "Back-End", items: ["Node.js", "Express.js", "REST API"] },
    { cat: "Database", items: ["PostgreSQL", "Prisma ORM"] },
    { cat: "Tools", items: ["Git", "GitHub", "Figma", "Vercel"] },
  ];

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

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden min-h-screen pb-12">
        <CropMarks />
        <Navbar />

        <motion.section
          className="relative pt-36 sm:pt-44 md:pt-52 pb-20 px-6 max-w-5xl mx-auto"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          variants={staggerChildren}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-(--accent-vermilion) transition-colors duration-150 mb-10 group cursor-none clickable focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <FiArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground bg-white/40 dark:bg-white/5 border border-foreground/20 px-3 py-1.5 rounded-none">
              <GiAutoRepair className="w-4 h-4" />
              Project Case Study
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl font-display font-black uppercase text-foreground leading-[0.95] tracking-tight mb-8"
          >
            <RisoText className="text-5xl sm:text-7xl md:text-8xl font-display font-black uppercase leading-[0.95] tracking-tight">
              Spare Part
            </RisoText>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground font-serif font-normal max-w-2xl leading-relaxed mb-12"
          >
            A high-performance sales support platform built for a private manufacturer—
            enabling sales engineers to explore parts, query specifications, and generate
            client-ready quotes in seconds.
          </motion.p>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 border-y border-foreground/20 py-8 gap-6"
          >
            {meta.map((m, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </span>
                <span className="text-base font-serif italic text-foreground font-semibold">{m.value}</span>
                {m.note && (
                  <span className="text-[9px] font-mono text-muted-foreground/80 italic">{m.note}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
              Overview
            </p>
            <h2 className="text-3xl md:text-5xl font-serif italic text-foreground max-w-3xl leading-snug">
              Transforming complex engineering catalogs into sales momentum
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-serif leading-relaxed"
            >
              <p>
                In the industrial manufacturing sector, spare part data is notoriously
                complex—hundreds of SKUs, intricate parent–child subassembly hierarchies,
                multiple supplier codes, and critical material specifications that sales
                engineers need on demand.
              </p>
              <p>
                The client was relying on fragmented paper catalogs and clunky desktop
                software that slowed down quote turnaround times during live client meetings.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-serif leading-relaxed"
            >
              <p>
                We built a responsive, web-based sales enablement system that puts the
                entire 500+ component hierarchy at the sales rep's fingertips with
                instant sub-second search and filtered navigation.
              </p>
              <p>
                The system enables immediate Excel export of configured part packages,
                drastically cutting proposal preparation time and presenting an agile,
                modern brand face to prospective buyers.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 border border-foreground/30">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 border-r last:border-r-0 border-foreground/20 bg-white/10 dark:bg-white/2 flex flex-col items-center justify-center text-center hover:bg-(--accent-teal) hover:text-white transition-colors duration-200 rounded-none cursor-none clickable group"
              >
                <span className="text-3xl md:text-4xl font-display font-black text-foreground group-hover:text-white mb-2 transition-colors">
                  {h.num}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground group-hover:text-white/80 transition-colors">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
              Features
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground leading-none">
              <RisoText className="text-3xl md:text-5xl font-display font-black uppercase leading-none">Logistics Solution</RisoText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 border border-foreground/30 -mr-px -mt-px bg-white/10 dark:bg-white/2 flex flex-col gap-6 hover:bg-(--accent-teal) hover:text-white transition-colors duration-200 rounded-none cursor-none clickable group"
              >
                <div className="w-12 h-12 border border-foreground/30 flex items-center justify-center text-foreground bg-transparent group-hover:border-white group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-serif italic text-foreground group-hover:text-white transition-colors">{f.title}</h3>
                  <p className="text-sm font-serif text-muted-foreground font-normal leading-relaxed group-hover:text-white/80 transition-colors">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
              Tech Stack
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground leading-none">
              <RisoText className="text-3xl md:text-5xl font-display font-black uppercase leading-none">Built with modern tools</RisoText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 border border-foreground/30 -mr-px bg-white/10 dark:bg-white/2 rounded-none hover:bg-(--accent-teal) hover:text-white transition-colors duration-200 group cursor-none clickable"
              >
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-foreground/20 pb-3 mb-6 group-hover:text-white group-hover:border-white/20 transition-colors">
                  {group.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono text-foreground bg-white/40 dark:bg-white/5 border border-foreground/20 px-2.5 py-1 rounded-none group-hover:border-white/30 group-hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-20"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden border border-foreground/30 py-16 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center w-full px-8 bg-white/10 dark:bg-white/2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] rounded-none"
          >
            <div className="relative z-10">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Let's Work Together
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground leading-none">
                <RisoText className="text-3xl md:text-5xl font-display font-black uppercase leading-none">Have a project in mind?</RisoText>
              </h2>
            </div>
            <motion.a
              href="mailto:wildanrizki9560@gmail.com"
              className="px-8 py-4 border-2 border-foreground bg-(--accent-vermilion) text-white hover:bg-foreground hover:text-background text-xs font-mono uppercase tracking-widest transition-all duration-150 rounded-none cursor-none clickable font-semibold whitespace-nowrap z-10 shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-none active:translate-y-px"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Write an Email
            </motion.a>
          </motion.div>
        </motion.section>

        <motion.footer
          className="w-full py-12 bg-transparent border-t border-foreground/20 text-center z-10 relative"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Designed & developed by wildanrizkii • broadsheet c-04
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default BroadsheetSparepart;
