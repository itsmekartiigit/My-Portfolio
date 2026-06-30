export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  features?: string[];
  learningOutcomes?: string[];
  author?: string;
  status?: string;
  detailedCategory?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; level: number; iconName: string }[];
}

export interface Metric {
  id: string;
  label: string;
  value: number;
  suffix: string;
}
