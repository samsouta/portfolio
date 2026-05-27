import { createSupabaseClient } from "@/lib/supabase";
import type { Experience, ExperienceRow } from "@/types/experience";

export type ExperiencesResult = {
  data: Experience[];
  error: string | null;
};

function normalizeError(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unable to load experience right now.";
}

function normalizeExperience(row: ExperienceRow): Experience {
  return {
    id: row.id,
    title: row.title,
    companyName: row.company_name,
    iconBg: row.icon_bg ?? "#333333",
    startDate: row.start_date,
    endDate: row.end_date,
    dateLabel: row.date_label,
    sortOrder: row.sort_order ?? 0,
    current: row.current ?? false,
    createdAt: row.created_at,
  };
}

export async function getExperiences(): Promise<ExperiencesResult> {
  try {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
      .from("experiences")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) {
      return { data: [], error: error.message };
    }

    return {
      data: ((data ?? []) as ExperienceRow[]).map(normalizeExperience),
      error: null,
    };
  } catch (error) {
    return { data: [], error: normalizeError(error) };
  }
}
