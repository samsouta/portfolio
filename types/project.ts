export type ProjectStatus = "live" | "in progress" | "private";

export type Project = {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  tech_stack: string[] | null;
  category: string | null;
  status: ProjectStatus | string | null;
  live_url: string | null;
  github_url: string | null;
  metric: string | null;
  featured: boolean;
  created_at: string;
};
