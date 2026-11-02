"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { useTransitionState } from "../../PageTransition";
import {
  Pill,
  ClipboardList,
  BarChart3,
  ShieldCheck,
  Building2,
  Database,
  Bell,
  Layers,
  Zap,
} from "lucide-react";

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

interface MetaItem {
  label: string;
  value: string;
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
  { label: "Client", value: "PT Adora Cipta Medika" },
  { label: "Project Type", value: "SaaS Platform" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Year", value: "2026" },
];

const techStack: TechStackGroup[] = [
  {
    cat: "Front-End",
    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"],
  },
  {
    cat: "UI & UX",
    items: ["Shadcn UI", "Radix UI", "Framer Motion", "Lucide React"],
  },
  {
    cat: "Back-End",
    items: ["NestJS", "Node.js", "REST API", "Swagger"],
  },
  {
    cat: "Data & Auth",
    items: ["PostgreSQL", "Prisma ORM", "JWT", "Passport.js"],
  },
  {
    cat: "State & Query",
    items: ["TanStack Query", "Axios", "Zod", "Class Validator"],
  },
  {
    cat: "DevOps & Tools",
    items: ["Docker", "GitHub Actions", "Vercel", "Biome"],
  },
];

const features: FeatureItem[] = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multi-Tenant SaaS Architecture",
    desc: "Each pharmacy client operates in a fully isolated tenant environment with dedicated data scopes—true enterprise SaaS scalability built on NestJS.",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Prescription Management",
    desc: "Digital prescription processing with doctor verification, patient records, and dispensing history logs—fully integrated into the cashier workflow.",
  },
  {
    icon: <Pill className="w-6 h-6" />,
    title: "Drug & Inventory Catalog",
    desc: "Comprehensive pharmacy inventory with drug information, batch tracking, expiry management, and automated restock alerts.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Sales & Revenue Analytics",
    desc: "Interactive dashboards built with Recharts displaying daily revenue, top-selling products, and monthly growth trends per branch.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Role-Based Access Control",
    desc: "Granular permission system for pharmacists, cashiers, managers, and super-admins with full audit trail—powered by Passport.js and JWT.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Low Stock & Expiry Alerts",
    desc: "Automated notifications delivered via email (Nodemailer) when products hit minimum stock levels or approach expiration dates.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Multi-Branch Management",
    desc: "Centralized admin panel to manage all pharmacy branches, staff, inventory, and reports from one unified dashboard.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Export & Reporting",
    desc: "Generate financial summaries, inventory snapshots, and prescription logs exportable to Excel (xlsx) and PDF formats.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Optimistic UI & Fast UX",
    desc: "Built with TanStack Query for server-state management, providing instant optimistic updates and background data synchronization.",
  },
];

const highlights: HighlightItem[] = [
  { num: "Multi", label: "Tenant SaaS" },
  { num: "NestJS", label: "API Backend" },
  { num: "RBAC", label: "Access Control" },
  { num: "React 19", label: "Frontend" },
];

const AdoraSaaSNew = () => {
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
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--muted-foreground) 1px, transparent 1px),
            linear-gradient(to bottom, var(--muted-foreground) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 min-h-screen">
        <Navbar />

        <motion.section
          className="relative pt-36 sm:pt-44 md:pt-52 pb-20 px-6 max-w-5xl mx-auto"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          variants={staggerChildren}
        >
          <motion.button
            variants={fadeInUp}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-250 mb-10 group cursor-none clickable"
            onClick={() => router.back()}
          >
            <FiArrowLeft className="text-sm" />
            Back
          </motion.button>

          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground bg-white/40 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 px-3 py-1.5 rounded-none">
              <Layers className="w-4 h-4" />
              Project Case Study
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl font-serif font-normal text-foreground leading-[1.05] tracking-tight mb-8"
          >
            Adora<br />
            <span className="text-neutral-400">SaaS</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground font-normal max-w-2xl leading-relaxed mb-12"
          >
            A multi-tenant cloud SaaS pharmacy platform rebuilt from the ground up
            with NestJS and Next.js 16—delivering true enterprise multi-tenancy,
            branch inventory sync, and cashier POS in real time.
          </motion.p>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 border-y border-neutral-300 dark:border-neutral-800 py-8 gap-6"
          >
            {meta.map((m, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </span>
                <span className="text-base font-semibold text-foreground">{m.value}</span>
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
          <motion.div
            variants={fadeInUp}
            className="relative rounded-none overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-sm mb-4 group cursor-none"
          >
            <img
              src="/images/adora-saas/adora-1.webp"
              alt="Adora SaaS - Landing Page & Dashboard Preview"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-5 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white bg-black border border-white/20 px-3 py-1.5 rounded-none">
                Landing Page & Dashboard
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[
              { src: "/images/adora-saas/adora-5.webp", label: "Pharmacy Dashboard" },
              { src: "/images/adora-saas/adora-4.webp", label: "Super Admin Panel" },
              { src: "/images/adora-saas/adora-3.webp", label: "Login Page" },
              { src: "/images/adora-saas/adora-6.webp", label: "Subscription Plans" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative rounded-none overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-sm group cursor-none aspect-video"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white bg-black border border-white/10 px-2.5 py-1 rounded-none">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/adora-saas/adora-2.webp", label: "Customer-Facing Portal" },
              { src: "/images/adora-saas/adora-7.webp", label: "AI Chatbot Management" },
              { src: "/images/adora-saas/adora-8.webp", label: "Server Monitoring" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative rounded-none overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-sm group cursor-none aspect-video"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white bg-black border border-white/10 px-2.5 py-1 rounded-none">
                    {img.label}
                  </span>
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
              Overview
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground max-w-3xl leading-snug">
              Scaling pharmacy operations to true multi-tenancy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-normal leading-relaxed font-sans"
            >
              <p>
                Adora SaaS is the second-generation rebuild of the Adora pharmacy platform.
                While the 2024 system proved the core business logic, this version is
                re-architected from the foundation up as a true multi-tenant SaaS application
                using NestJS for the modular backend and Next.js 16 with React 19 for the frontend.
              </p>
              <p>
                Each pharmacy organization operates as a distinct tenant with isolated
                data scopes, custom subscription tiers, and independent branch configurations,
                all running on shared, scalable infrastructure.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-normal leading-relaxed font-sans"
            >
              <p>
                The backend is built with strict DDD (Domain-Driven Design) principles in
                NestJS, utilizing Prisma ORM with PostgreSQL, JWT-based tenant authentication,
                and comprehensive Swagger documentation for all endpoints.
              </p>
              <p>
                The client interface leverages Shadcn UI and Radix primitives with Tailwind CSS v4,
                giving pharmacists and cashiers an ultra-fast, keyboard-friendly POS and
                inventory experience.
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
          <div className="grid grid-cols-2 md:grid-cols-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 border border-neutral-300 dark:border-neutral-800 -mr-px bg-white/10 dark:bg-white/2 flex flex-col items-center justify-center text-center hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-colors duration-300 rounded-none cursor-none clickable"
              >
                <span className="text-3xl md:text-4xl font-serif italic text-foreground mb-2">
                  {h.num}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{h.label}</span>
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
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground">
              Enterprise multi-tenant architecture
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 border border-neutral-300 dark:border-neutral-800 -mr-px -mt-px bg-white/10 dark:bg-white/2 flex flex-col gap-6 hover:bg-neutral-100/30 dark:hover:bg-neutral-900/30 transition-all duration-300 rounded-none cursor-none clickable group"
              >
                <div className="w-12 h-12 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-foreground bg-transparent">
                  {f.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-serif italic text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground font-normal leading-relaxed">{f.desc}</p>
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
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground">
              Built with modern enterprise tools
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((group, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 border border-neutral-300 dark:border-neutral-800 -mr-px bg-white/10 dark:bg-white/2 rounded-none hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-colors duration-300 cursor-none clickable"
              >
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-neutral-300/60 dark:border-neutral-800/60 pb-3 mb-6">
                  {group.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono text-foreground bg-white/40 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 px-2.5 py-1 rounded-none transition-colors duration-200"
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
            className="relative overflow-hidden border border-neutral-300 dark:border-neutral-800 py-16 md:py-20 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center w-full px-8 bg-white/10 dark:bg-white/2"
          >
            <div className="relative z-10">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Let's Work Together
              </p>
              <h2 className="text-3xl md:text-5xl font-serif italic text-foreground leading-tight">
                Have a project in mind?
              </h2>
            </div>
            <motion.a
              href="mailto:wildanrizki9560@gmail.com"
              className="px-8 py-4 border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground text-xs font-mono uppercase tracking-widest transition-colors duration-200 rounded-none cursor-none clickable font-semibold whitespace-nowrap z-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Write an Email
            </motion.a>
          </motion.div>
        </motion.section>

        <motion.footer
          className="w-full py-12 bg-transparent border-t border-neutral-300/40 dark:border-neutral-800/40 mt-12 text-center"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Designed & developed by wildanrizkii
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default AdoraSaaSNew;
