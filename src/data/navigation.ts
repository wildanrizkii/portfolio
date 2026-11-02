export interface NavLinkItem {
  href: string;
  label: string;
}

export interface SocialLinkItem {
  title: string;
  href: string;
  iconName: "github" | "mail" | "linkedin" | "instagram";
}

export const navLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About me" },
];

export const socialLinks: SocialLinkItem[] = [
  {
    title: "GitHub",
    href: "https://github.com/wildanrizkii",
    iconName: "github",
  },
  {
    title: "Email",
    href: "mailto:wildanrizki9560@gmail.com",
    iconName: "mail",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/wildanrizkii/",
    iconName: "linkedin",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/wildanrizkii/",
    iconName: "instagram",
  },
];
