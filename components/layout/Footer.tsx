import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { personalInfo } from "@/lib/constants";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const iconClassName = "size-4";

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    external: true,
    icon: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.37 9.37 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: personalInfo.telegram,
    external: true,
    icon: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m21 4-7 16-4-7-7-3 18-6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m10 13 4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    external: true,
    icon: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.98H3.82v10.2h3.12V8.98ZM5.38 4.82c-1 0-1.8.8-1.8 1.77 0 .99.8 1.78 1.8 1.78s1.8-.79 1.8-1.78c0-.97-.8-1.77-1.8-1.77ZM20.42 13.34c0-2.98-1.59-4.36-3.71-4.36-1.71 0-2.48.94-2.91 1.61V8.98h-3.12c.04.95 0 10.2 0 10.2h3.12v-5.7c0-.3.02-.61.11-.83.24-.61.8-1.24 1.73-1.24 1.22 0 1.7.94 1.7 2.31v5.46h3.12l-.04-5.84Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6.5h16v11H4v-11Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m5 7.5 7 5.25 7-5.25"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

type FooterLinkProps = {
  href: string;
  label: string;
};

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="w-fit rounded-md text-sm text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      {label}
    </a>
  );
}

type SocialIconLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
  external?: boolean;
};

function SocialIconLink({
  href,
  icon,
  label,
  external = false,
}: SocialIconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="grid size-10 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-300 transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-sky-300/10 hover:text-white hover:shadow-[0_0_28px_rgba(56,189,248,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      {icon}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] py-8 sm:py-10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/50 to-violet-400/0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.12),transparent_24rem),radial-gradient(circle_at_82%_0%,rgba(139,92,246,0.1),transparent_22rem)]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid min-w-0 gap-8 border-b border-white/[0.06] pb-8 md:grid-cols-[1.45fr_0.75fr_1fr] md:items-start">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-4">
              <div
                className="grid size-12 shrink-0 place-items-center rounded-lg border border-sky-300/20 bg-gradient-to-br from-sky-300/20 via-slate-900 to-violet-400/20 text-base font-semibold text-white shadow-[0_0_34px_rgba(56,189,248,0.14)]"
                aria-hidden="true"
              >
                SS
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-white">Sam Souta</p>
                <p className="mt-1 text-sm font-medium text-sky-300">
                  Full-Stack Developer & Product Builder
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Building modern applications, scalable systems, and digital products.
            </p>
          </div>

          <nav className="min-w-0" aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Navigate
            </p>
            <div className="mt-4 grid gap-3">
              {footerLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </nav>

          <div className="min-w-0 md:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Connect
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <SocialIconLink
                  key={link.label}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                  external={link.external}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-2 pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="break-words">© {new Date().getFullYear()} Sam Souta. All rights reserved.</p>
          <p className="break-words">Built with Next.js & Supabase</p>
        </div>
      </Container>
    </footer>
  );
}
