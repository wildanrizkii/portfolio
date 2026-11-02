export type MilestoneIconType = "graduation" | "award" | "briefcase";

export interface MilestoneItem {
  year: string;
  title: string;
  institution: string;
  iconType: MilestoneIconType;
  description: string;
}

export const milestones: MilestoneItem[] = [
  {
    year: "2019",
    title: "Informatics Graduate",
    institution: "Parahyangan Catholic University",
    iconType: "graduation",
    description:
      "Specialized in Software Engineering, database systems, and web frameworks. Built strong foundations in computing algorithms, system design, and cooperative software engineering.",
  },
  {
    year: "2023",
    title: "CyberOps & DevNet Associate",
    institution: "Cisco Networking Academy",
    iconType: "award",
    description:
      "Gained core hands-on experience in networking automation scripts, cloud API security protocols, threat detection procedures, and infrastructure-as-code structures.",
  },
  {
    year: "2024",
    title: "Google Cloud Computing Foundations",
    institution: "Google Cloud Academic Program",
    iconType: "award",
    description:
      "Completed comprehensive practical training in cloud infrastructure, container orchestration, cloud application deployments, and virtualization engines.",
  },
  {
    year: "2024",
    title: "Full-Stack Freelance Developer",
    institution: "Apotek Adora",
    iconType: "briefcase",
    description:
      "Developed and launched custom high-performance web systems (e.g. Sales support tools, inventory dashboards, cash monitors) using Next.js, PostgreSQL, and Supabase.",
  },
  {
    year: "2025 - Present",
    title: "Web Developer",
    institution: "PT Ganesha Operation",
    iconType: "briefcase",
    description:
      "Developing and maintaining internal web applications to support academic operations and digital learning management systems at one of Indonesia's leading educational institutions.",
  },
];
