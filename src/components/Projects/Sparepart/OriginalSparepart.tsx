"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useTransitionState } from "../../PageTransition";
import {
  Search,
  FileSpreadsheet,
  PackageSearch,
  Users,
  Database,
  ShieldCheck,
} from "lucide-react";
import { GiAutoRepair } from "react-icons/gi";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const navbarFadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
  },
};

interface MetaItem {
  label: string;
  value: string;
  note?: string;
}

interface TechStackGroup {
  cat: string;
  items: string[];
}

interface FeatureItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface HighlightItem {
  num: string;
  label: string;
}

const meta: MetaItem[] = [
  { label: "Company", value: "PT XXX", note: "* Company requested anonymity" },
  { label: "Project Type", value: "Sales Support System" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Year", value: "2025" },
];

const techStack: TechStackGroup[] = [
  { cat: "Front-End", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
  { cat: "Back-End", items: ["Node.js", "Express.js", "REST API"] },
  { cat: "Database", items: ["PostgreSQL", "Prisma ORM"] },
  { cat: "Tools", items: ["Git", "GitHub", "Figma", "Vercel"] },
];

const features: FeatureItem[] = [
  {
    icon: <PackageSearch className="w-6 h-6" />,
    title: "Part Hierarchy Explorer",
    desc: "Visualize parent–child relationships between spare parts with intuitive nested tree navigation.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Advanced Search & Filter",
    desc: "Find any spare part instantly using smart filters by serial number, material, supplier, or manufacturer.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Comprehensive Part Database",
    desc: "Centralized repository with complete specifications: material grade, dimensions, origin, and lifecycle data.",
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6" />,
    title: "Excel Report Generator",
    desc: "Generate structured Excel files of selected parts for streamlined ordering and documentation workflows.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client-Facing Presentation",
    desc: "Clean, professional interface designed to impress clients and prospects during sales engagements.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Role-Based Access Control",
    desc: "Granular permission levels for sales reps, admins, and managers to keep data secure and relevant.",
  },
];

const highlights: HighlightItem[] = [
  { num: "500+", label: "Parts Catalogued" },
  { num: "3", label: "User Roles" },
  { num: "100%", label: "Web-Based" },
  { num: "Excel", label: "Export Ready" },
];

const Sparepart = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative min-h-screen">
        <motion.nav
          className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-xs z-50"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          variants={navbarFadeDown}
        >
          <Navbar />
        </motion.nav>

        <motion.section
          className="relative pt-36 sm:pt-44 md:pt-52 pb-20 px-4 md:px-8 max-w-6xl mx-auto"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          variants={staggerChildren}
        >
          <motion.button
            variants={fadeInUp}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-foreground transition-colors duration-200 mb-10 group cursor-none clickable"
            onClick={() => router.back()}
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </motion.button>

          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
              <GiAutoRepair className="w-4 h-4" />
              Project Case Study
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl font-black text-black dark:text-foreground leading-[1.05] tracking-tight mb-8"
          >
            Spare Part<br />
            <span className="text-gray-400">System</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-gray-600 dark:text-neutral-400 font-medium max-w-3xl leading-relaxed mb-12"
          >
            A high-performance sales support platform built for a private manufacturer—
            enabling sales engineers to explore parts, query specifications, and generate
            client-ready quotes in seconds.
          </motion.p>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 border-y border-neutral-200 dark:border-neutral-800 py-8 gap-6"
          >
            {meta.map((m, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {m.label}
                </span>
                <span className="text-base md:text-lg font-bold text-foreground">{m.value}</span>
                {m.note && (
                  <span className="text-xs text-gray-400 italic">{m.note}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
              Overview
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 max-w-3xl leading-snug">
              Transforming complex engineering catalogs into sales momentum
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed"
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
              className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed"
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
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:border-foreground transition-all duration-300 cursor-none clickable"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                  {h.num}
                </span>
                <span className="text-sm font-semibold text-gray-500">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
              Features
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">
              Built for sales engineers on the go
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-sm flex flex-col gap-4 hover:border-foreground transition-all duration-300 cursor-none clickable group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center group-hover:bg-foreground dark:group-hover:bg-foreground group-hover:text-background dark:group-hover:text-background group-hover:border-foreground transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-400 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
              Tech Stack
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">
              Built with modern tools
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((group, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-sm hover:border-foreground transition-colors duration-300 cursor-none clickable"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4">
                  {group.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-foreground hover:text-background px-3 py-1 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-200"
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
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-20"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#f3eae1] via-[#f7eade] to-[#eedcd0] dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 border border-neutral-300/40 dark:border-neutral-800/80 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm"
          >
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>
            <div className="relative z-10">
              <p className="text-gray-500 dark:text-neutral-400 text-sm font-bold uppercase tracking-widest mb-3">
                Let's Work Together
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-black dark:text-foreground leading-tight">
                Have a project in mind?
              </h2>
            </div>
            <motion.a
              href="mailto:wildanrizki9560@gmail.com"
              className="relative z-10 flex items-center gap-2 px-7 py-4 bg-foreground text-background text-base font-bold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap cursor-none clickable group"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Write an Email
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.section>

        <motion.footer
          className="w-full py-8 bg-transparent text-center text-gray-500 text-sm font-medium"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Designed and developed by me
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Sparepart;
