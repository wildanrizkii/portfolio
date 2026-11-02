export type SkillCategoryIcon = "layout" | "database" | "pentool" | "sparkles";

export interface SkillCategoryItem {
  title: string;
  description: string;
  skills: string[];
  iconType: SkillCategoryIcon;
}

export const skillCategories: SkillCategoryItem[] = [
  {
    title: "Front-End Development",
    description: "Pixel-perfect interfaces, complex user flows, performance optimization, reactive design models.",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "React Query", "Framer Motion", "GSAP"],
    iconType: "layout",
  },
  {
    title: "Back-End & Architecture",
    description: "REST APIs, schema configurations, scalable routing controllers, secure authentication guidelines.",
    skills: ["Node.js", "NestJS", "Express.js", "Prisma ORM", "PostgreSQL", "Supabase", "Docker", "REST APIs"],
    iconType: "database",
  },
  {
    title: "Aesthetics & Systems",
    description: "Figma component sheets, custom typography, micro-interactions, high-fidelity prototypes.",
    skills: ["Figma Design", "Typography", "Color Theory", "Responsive Layouts", "Aesthetic Switchers", "Micro-Animations"],
    iconType: "pentool",
  },
  {
    title: "Tools & Deployments",
    description: "Workflow automations, git logs management, static page optimizations, web vitals audits.",
    skills: ["Git & GitHub", "Vercel", "Netlify", "SEO Rules", "Accessibility", "Performance Audits"],
    iconType: "sparkles",
  },
];
