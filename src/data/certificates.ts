export interface CertificateItem {
  src: string;
  title: string;
  issuer: string;
  year: string;
  alt: string;
}

export const certificates: CertificateItem[] = [
  {
    src: "/images/sertif-gccf.webp",
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    year: "2024",
    alt: "Google Cloud Certificate",
  },
  {
    src: "/images/sertif-cyberops.webp",
    title: "CyberOps Associate Certification",
    issuer: "Cisco Networking Academy",
    year: "2024",
    alt: "Cisco CyberOps Certificate",
  },
  {
    src: "/images/sertif-ifws.webp",
    title: "Informatics Webinar Series",
    issuer: "UNPAR Informatics",
    year: "2024",
    alt: "UNPAR Informatics Certificate",
  },
  {
    src: "/images/sertif-devnet.webp",
    title: "DevNet Associate Certification",
    issuer: "Cisco Networking Academy",
    year: "2024",
    alt: "Cisco DevNet Certificate",
  },
];
