export const siteConfig = {
  name: "Divya Sree",
  role: "Computer Science & Systems Engineering Student",
  tagline:
    "Third-year CS & Systems Engineering undergraduate who builds practical software, AI-powered applications, and full-stack projects from scratch.",
  email: "hello@divyasree.dev",
  phone: "+91 90000 00000",
  location: "Vijayawada, Andhra Pradesh, India",
  resumeUrl: "/resume.pdf",
  heroImage: "/images/profile/hero.jpeg",
  aboutImage: "/images/profile/about.jpeg",
  social: {
    github: "https://github.com/divyasree",
    linkedin: "https://www.linkedin.com/in/divyasree",
    leetcode: "https://leetcode.com/divyasree",
    gfg: "https://www.geeksforgeeks.org/user/divyasree",
    linkedinCertifications: "https://www.linkedin.com/in/divyasree/details/certifications/",
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
