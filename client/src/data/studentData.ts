export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  linkUrl: string;
  linkLabel?: string;
  isExternalWeb?: boolean;
  status?: string;
  highlight?: boolean;
}

export const PROFILE = {
  name: "Akash Katageri",
  handle: "Akashkatageri",
  bio: "Developer building Kletaq. I use AI to build and ship software fast.",
  location: "Bangalore, India",
  email: "kletaq.dev@gmail.com",
  github: "https://github.com/Akashkatageri",
  linkedin: "https://linkedin.com/in/akashkatageri",
  portfolioUrl: "https://akashkatageri.github.io/my-portfolio/",
  kletaqUrl: "https://trykletaq.cv"
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "kletaq",
    title: "Kletaq",
    description: "My sole active project. Built using modern full-stack web technologies and AI-accelerated development workflows.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Active Project"],
    linkUrl: "https://trykletaq.cv",
    linkLabel: "trykletaq.cv",
    isExternalWeb: true,
    status: "Active Development",
    highlight: true
  },
  {
    id: "mongodb-json-importer",
    title: "MongoDB JSON Stream Importer",
    description: "A high-performance Python utility for memory-efficiently streaming and bulk-inserting multi-gigabyte JSON files into MongoDB with ijson parsing, PyMongo bulk writes, and resume capability.",
    tags: ["Python", "MongoDB", "ijson", "PyMongo", "Data Streaming"],
    linkUrl: "https://github.com/Akashkatageri/mongodb-json-stream-importer",
    linkLabel: "View Repository",
    isExternalWeb: false,
    status: "Completed",
    highlight: true
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Minimalist dark portfolio built with React, Vite, Tailwind CSS, and Aceternity meteors background.",
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    linkUrl: "https://github.com/Akashkatageri/my-portfolio",
    linkLabel: "View Repository",
    isExternalWeb: false,
    status: "Live",
    highlight: false
  }
];

export const SKILLS = [
  "TypeScript",
  "JavaScript",
  "React",
  "Python",
  "MongoDB",
  "Tailwind CSS",
  "AI Coding & Agents",
  "Git & GitHub",
  "Linux"
];

// Backwards compatibility exports
export const STUDENT_PROFILE = {
  name: "Akash",
  fullName: "Akash Katageri",
  role: "Developer",
  location: "Bangalore, India",
  tagline: "Developer building Kletaq. I use AI to develop software fast.",
  shortBio: "Developer from Bangalore building Kletaq using AI and modern web tools.",
  email: PROFILE.email,
  github: PROFILE.github,
  linkedin: PROFILE.linkedin,
  portfolioUrl: PROFILE.portfolioUrl
};

export const KLETAQ_DATA = {
  title: "Kletaq",
  url: "https://trykletaq.cv"
};
