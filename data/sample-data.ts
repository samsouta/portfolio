import { Profile, Project, Skill, Experience, Education, Contact } from '@/types';

export const sampleProfile: Profile = {
  id: '1',
  name: 'Samsouta',
  bio: 'Full-stack developer passionate about building AI-powered applications and modern web experiences.',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=samsouta',
  github: 'https://github.com/samsouta',
  linkedin: 'https://linkedin.com/in/samsouta'
};

export const sampleContact: Contact = {
  id: '1',
  email: 'samsouta@example.com',
  phone: '+1 234 567 8900',
  location: 'Bangkok, Thailand',
  website: 'https://samsouta.dev'
};

export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'AI Portfolio Assistant',
    description: 'An intelligent portfolio website powered by AI that responds to user queries about the developer.',
    tech_stack: ['Next.js', 'TypeScript', 'OpenAI', 'Supabase'],
    github_url: 'https://github.com/samsouta/ai-portfolio',
    live_url: 'https://ai-portfolio.demo',
    image: 'https://placehold.co/600x400/2563eb/white?text=AI+Portfolio',
    category: 'AI'
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and admin dashboard.',
    tech_stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github_url: 'https://github.com/samsouta/ecommerce',
    live_url: 'https://shop.demo',
    image: 'https://placehold.co/600x400/16a34a/white?text=E-Commerce',
    category: 'Full Stack'
  },
  {
    id: '3',
    title: 'Real-time Chat App',
    description: 'A real-time messaging application with websockets and end-to-end encryption.',
    tech_stack: ['Next.js', 'Socket.io', 'Redis', 'MongoDB'],
    github_url: 'https://github.com/samsouta/chat-app',
    live_url: 'https://chat.demo',
    image: 'https://placehold.co/600x400/9333ea/white?text=Chat+App',
    category: 'Full Stack'
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with forecasts and interactive maps.',
    tech_stack: ['React', 'OpenWeather API', 'Leaflet'],
    github_url: 'https://github.com/samsouta/weather',
    live_url: 'https://weather.demo',
    image: 'https://placehold.co/600x400/f59e0b/white?text=Weather',
    category: 'Frontend'
  }
];

export const sampleSkills: Skill[] = [
  { id: '1', name: 'TypeScript', level: 90, category: 'Language' },
  { id: '2', name: 'React / Next.js', level: 95, category: 'Framework' },
  { id: '3', name: 'Node.js', level: 85, category: 'Backend' },
  { id: '4', name: 'Python', level: 75, category: 'Language' },
  { id: '5', name: 'PostgreSQL', level: 80, category: 'Database' },
  { id: '6', name: 'Docker', level: 70, category: 'DevOps' },
  { id: '7', name: 'AI/LLM Integration', level: 85, category: 'AI' },
  { id: '8', name: 'Tailwind CSS', level: 95, category: 'Styling' }
];

export const sampleExperience: Experience[] = [
  {
    id: '1',
    company: 'TechCorp',
    role: 'Senior Full Stack Developer',
    description: 'Leading development of AI-powered features and mentoring junior developers.',
    start_date: '2023-01',
    end_date: null
  },
  {
    id: '2',
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    description: 'Built the entire frontend architecture and API services.',
    start_date: '2021-06',
    end_date: '2022-12'
  },
  {
    id: '3',
    company: 'Freelance',
    role: 'Web Developer',
    description: 'Delivered 20+ projects for clients worldwide.',
    start_date: '2019-01',
    end_date: '2021-05'
  }
];

export const sampleEducation: Education[] = [
  {
    id: '1',
    school: 'Chulalongkorn University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    start_date: '2015-08',
    end_date: '2019-05'
  },
  {
    id: '2',
    school: 'Coursera / Udemy',
    degree: 'Certificates',
    field: 'Full Stack Development, AI/ML',
    start_date: '2019-01',
    end_date: '2020-12'
  }
];

export const sampleData = {
  profile: sampleProfile,
  contact: sampleContact,
  projects: sampleProjects,
  skills: sampleSkills,
  experience: sampleExperience,
  education: sampleEducation
};