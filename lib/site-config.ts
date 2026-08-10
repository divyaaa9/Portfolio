export const siteConfig = {
  name: "Divya Sree",
  role: "Computer Science & Systems Engineering Student",
  tagline:
    "Third-year CS & Systems Engineering undergraduate who builds practical software, AI-powered applications, and full-stack projects from scratch.",
  email: "divya.nirvana04@gmail.com",
  location: "Vizianagaram, Andhra Pradesh",
  resumeUrl: "/resume.pdf",
  heroImage: "/images/profile/hero.jpeg",
  aboutImage: "/images/profile/about.jpeg",
  social: {
    github: "https://github.com/divyaaa9",
    linkedin: "https://www.linkedin.com/in/divya-sree23/",
    leetcode: "https://leetcode.com/u/TWipt8N93b/",
    gfg: "https://www.geeksforgeeks.org/profile/divyanirxusa",
    linkedinCertifications: "https://www.linkedin.com/in/divya-sree23/details/certifications/",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
