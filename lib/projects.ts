import { createSupabaseClient } from "@/lib/supabase";
import type { Project } from "@/types/project";

export type ProjectsResult = {
  data: Project[];
  error: string | null;
};

function normalizeError(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unable to load projects right now.";
}

export async function getProjects(): Promise<ProjectsResult> {
  try {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
      .from("projects")
      .select(
        "id,title,description,image_url,tech_stack,category,status,live_url,github_url,metric,featured,created_at",
      )
      .order("created_at", { ascending: false });

    if (error) {
      return { data: [], error: error.message };
    }

    return { data: (data ?? []) as Project[], error: null };
  } catch (error) {
    return { data: [], error: normalizeError(error) };
  }
}
