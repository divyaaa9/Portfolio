// Central content store. Replace copy and asset paths as needed —
// every section pulls from here, so this is the only place to edit.

export type Education = {
  id: string;
  level: string;
  institution: string;
  detail: string;
  score?: string;
  years?: string;
  logo: string;
};

export const education: Education[] = [
  {
    id: "btech",
    level: "B.Tech, Computer Science & Systems Engineering",
    institution: "Lendi Institute of Engineering and Technology (LIET)",
    detail: "Ongoing",
    score: "CGPA 8.7 / 10",
    years: "2024 — 2028",
    logo: "/images/education/liet.png",
  },
  {
    id: "intermediate",
    level: "Intermediate",
    institution: "BNR Excellence Academy",
    detail: "Kharagpur, West Bengal",
    logo: "/images/education/bnr.png",
  },
  {
    id: "tenth",
    level: "SSC / 10th",
    institution: "St Agnes School",
    detail: "Kharagpur, West Bengal",
    logo: "/images/education/stagnes.png",
  },
];

export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    skills: ["C", "Python", "Java", "JavaScript"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Python", "PHP", "APIs"],
  },
  {
    id: "database",
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    id: "tools",
    title: "Tools & Development",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "pong",
    name: "Pong Game",
    description:
      "A browser-based Pong game built from scratch with interactive gameplay, responsive controls, and a simple arcade-style interface.",
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/images/projects/pong.png",
    liveUrl: "https://divyaaa9.github.io/pong_game/",
    githubUrl: "https://github.com/divyaaa9/pong_game",
  },
  {
    id: "quizem",
    name: "QuizEm",
    description:
      "An AI-powered quiz generation application designed to generate quizzes dynamically and provide an interactive learning experience.",
    stack: ["TypeScript", "JavaScript", "CSS", "PostgreSQL"],
    image: "/images/projects/quizem.png",
    liveUrl: "https://quiz-em-ten.vercel.app/",
    githubUrl: "https://github.com/divyaaa9/QuizEm",
  },
  {
    id: "educore",
    name: "EduCore",
    description:
      "An education-focused application designed to manage and organize academic information using a backend-driven architecture and structured data.",
    stack: ["Python", "PostgreSQL", "APIs"],
    image: "/images/projects/educore.png",
    // No live deployment or GitHub repo provided yet.
  },
  {
    id: "vocalforlocal",
    name: "VocalForLocal",
    description:
      "A digital commerce platform created to promote local products and support the idea of connecting local sellers with customers through an online marketplace.",
    stack: ["PHP"],
    image: "/images/projects/vocalforlocal.png",
    githubUrl: "https://github.com/divyaaa9/vocalforlocal",
    // No live deployment provided.
  },
  {
    id: "iscandid",
    name: "isCandid",
    description:
      "A browser-based website genuineness analysis tool designed to help identify potentially fake or suspicious shopping websites.",
    stack: ["Python", "HTML", "JavaScript", "CSS"],
    image: "/images/projects/iscandid.png",
    githubUrl: "https://github.com/divyaaa9/isCandid-Browser-Based-Website-Genuineness-Analysis-Software",
    // No live deployment provided.
  },
];

export type Achievement = {
  id: string;
  title: string;
  organization: string;
  date?: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    id: "ecell-president",
    title: "President — National Entrepreneurship Cell (E-Cell), IIT Bombay",
    organization: "LIET Chapter",
    description:
      "Leading the National Entrepreneurship Cell at LIET, contributing to entrepreneurial initiatives, student engagement, and activities that encourage innovation and entrepreneurship on campus.",
  },
  {
    id: "chess-trials-winner",
    title: "Winner — Inter Collegiate Chess Selection Trials",
    organization: "JNTU-GV, held at AITAM College",
    description:
      "Secured first place in the Inter Collegiate Chess Selection Trials under JNTU-GV, representing Lendi Institute of Engineering and Technology (LIET) at the selection trials held at AITAM College.",
  },
  {
    id: "aiu-chess",
    title: "Selected — AIU South Zone Inter-University Chess Championship",
    organization: "GITAM University",
    description:
      "Represented and led the JNTU-GV chess team at the AIU South Zone Inter-University Chess Championship held at GITAM University.",
  },
  {
    id: "lendi-writes",
    title: "Editorial & Literary Team",
    organization: "Lendi Writes Club",
    description:
      "Contributing to the Lendi Writes Club through writing, editing, and collaborative literary and communication initiatives.",
  },
  {
    id: "csse-magazine",
    title: "Editorial Board",
    organization: "CSSE Magazine",
    description:
      "Contributing to the CSSE branch magazine/newsletter as a member of the editorial board, supporting content development, editing, and publication.",
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { id: "aws-cca", name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { id: "meta-frontend", name: "Meta Front-End Developer", issuer: "Meta" },
  { id: "google-ux", name: "Google UX Design Certificate", issuer: "Google" },
  { id: "dsa-gfg", name: "Data Structures & Algorithms", issuer: "GeeksforGeeks" },
  { id: "sql-hackerrank", name: "SQL (Advanced)", issuer: "HackerRank" },
  { id: "system-design", name: "System Design Fundamentals", issuer: "Educative" },
];

export const galleryImages = Array.from({ length: 15 }, (_, i) => {
  const index = String(i + 1).padStart(2, "0");
  return {
    id: index,
    src: `/images/gallery/${index}.jpg`,
    alt: `Gallery photo ${index}`,
  };
});
