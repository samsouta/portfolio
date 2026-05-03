import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            // Handle error
          }
        },
      },
    }
  );
}

export async function fetchPortfolioData() {
  const supabase = await createSupabaseServerClient();

  const [profileRes, contactRes, projectsRes, skillsRes, experienceRes, educationRes] = await Promise.all([
    supabase.from('profiles').select('*').limit(1).single(),
    supabase.from('contact').select('*').limit(1).single(),
    supabase.from('projects').select('*'),
    supabase.from('skills').select('*'),
    supabase.from('experience').select('*'),
    supabase.from('education').select('*')
  ]);

  return {
    profile: profileRes.data,
    contact: contactRes.data,
    projects: projectsRes.data || [],
    skills: skillsRes.data || [],
    experience: experienceRes.data || [],
    education: educationRes.data || []
  };
}