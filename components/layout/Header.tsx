import { Container } from "@/components/layout/Container";
import { personalInfo } from "@/lib/constants";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050816]/78 backdrop-blur-xl">
      <Container className="flex h-16 min-w-0 items-center justify-between gap-3">
        <a href="#top" className="min-w-0 truncate text-sm font-semibold tracking-wide text-white">
          <span>{personalInfo.name}</span>
          <span className="ml-2 hidden text-sky-300 sm:inline">/ builder</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-lg border border-white/10 px-2.5 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-300/40 hover:text-white sm:px-3"
        >
          GitHub
        </a>
      </Container>
    </header>
  );
}
