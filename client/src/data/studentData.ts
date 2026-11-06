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
  handle: "akashk",
  bio: "Developer building Kletaq. I use AI to build and ship software fast.",
  location: "Bangalore, India",
  email: "kletaq.dev@gmail.com",
  github: "https://github.com/Akashkatageri",
  linkedin: "https://linkedin.com/in/akashkatageri",
  portfolioUrl: "https://akashkat.cv",
  kletaqUrl: "https://trykletaq.cv"
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "kletaq",
    title: "Kletaq",
    description: "My sole active project. An AI-accelerated platform and modern software engine built using cutting-edge full-stack web technologies and autonomous coding workflows.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Active Project", "AI Workflows"],
    linkUrl: "https://trykletaq.cv",
    linkLabel: "trykletaq.cv",
    isExternalWeb: true,
    status: "Active Development",
    highlight: true
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
