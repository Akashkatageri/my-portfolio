export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    icon: string;
  }[];
}
