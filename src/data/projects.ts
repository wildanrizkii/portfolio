export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tech: string[];
  img: string;
  imgFit?: "contain" | "cover";
  href: string;
  categoryFilter: string;
  featured?: boolean;
  year: string;
  client: string;
}

export interface ProjectCategory {
  id: string;
  label: string;
}

export const projectCategories: ProjectCategory[] = [
  { id: "all", label: "All Works" },
  { id: "full-stack", label: "Full-Stack" },
  { id: "saas", label: "Healthcare SaaS" },
  { id: "finance", label: "Finance" },
];

export const projectList: ProjectItem[] = [
  {
    title: "Adelle Apps",
    category: "SaaS · Healthcare ERP",
    description: "A cloud-native, multi-tenant SaaS healthcare platform built for PT Adora Cipta Medika — managing prescriptions, drug inventory, staff roles, and branch analytics across multiple tenants with NestJS & Next.js 16.",
    tech: ["Next.js 16", "NestJS", "React 19", "Shadcn UI", "PostgreSQL"],
    img: "/images/adora-saas/adora-1.webp",
    imgFit: "contain",
    href: "/projects/adelle-apps",
    categoryFilter: "saas",
    featured: true,
    year: "2026",
    client: "PT Adora Cipta Medika",
  },
  {
    title: "Cash Flow Tracking Application",
    category: "Financial Dashboard",
    description: "A tracking application with clean analytics, charts, and transaction history filters for personal financial management.",
    tech: ["Next.js", "Recharts", "PostgreSQL", "Supabase"],
    img: "/images/Cashify.png",
    href: "/projects/cashflow",
    categoryFilter: "finance",
    featured: false,
    year: "2025",
    client: "Personal Project",
  },
  {
    title: "Adora Pharmacy Management System",
    category: "Healthcare · Management System",
    description: "A full-featured pharmacy management system built for PT Adora Cipta Medika (2024) — managing prescriptions, drug inventory, staff roles, and financial reporting from a centralized dashboard.",
    tech: ["Next.js", "Express.js", "Ant Design", "PostgreSQL"],
    img: "/images/Apotek.jpg",
    href: "/projects/adora",
    categoryFilter: "saas",
    featured: false,
    year: "2024",
    client: "PT Adora Cipta Medika",
  },
  {
    title: "Spare Part Information System",
    category: "Full-Stack Sales Platform",
    description: "An intuitive web platform designed to manage complex spare part hierarchies, vendor specifications, materials, and automated order generation.",
    tech: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    img: "",
    href: "/projects/sparepart",
    categoryFilter: "full-stack",
    featured: false,
    year: "2025",
    client: "Automotive Vendor",
  },
];
