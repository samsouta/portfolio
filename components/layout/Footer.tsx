import { Container } from "@/components/layout/Container";
import { personalInfo } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <Container className="flex min-w-0 flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="break-words">© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js and Supabase.</p>
        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-white" href={personalInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-white" href={`mailto:${personalInfo.email}`}>
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
