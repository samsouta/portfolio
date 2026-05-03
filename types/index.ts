export interface Profile {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  github: string;
  linkedin: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  github_url: string;
  live_url: string;
  image: string;
  category: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  start_date: string;
  end_date: string | null;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  start_date: string;
  end_date: string | null;
}

export interface Contact {
  id: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  type?: 'text' | 'projects' | 'skills' | 'experience' | 'mixed';
  data?: {
    projects?: Project[];
    skills?: Skill[];
    experience?: Experience[];
  };
}

export interface AIResponse {
  message: string;
  type: 'text' | 'projects' | 'skills' | 'experience' | 'mixed';
  data?: {
    projects?: Project[];
    skills?: Skill[];
    experience?: Experience[];
  };
}