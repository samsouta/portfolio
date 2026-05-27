"use client";

import { FormEvent, ReactNode, useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/constants";

type ContactCardProps = {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  ariaLabel: string;
  external?: boolean;
};

function ContactCard({
  href,
  icon,
  label,
  value,
  ariaLabel,
  external = false,
}: ContactCardProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group relative min-w-0 overflow-hidden rounded-lg border border-white/[0.08] bg-slate-950/50 p-4 transition duration-300 hover:border-sky-300/45 hover:bg-slate-900/70 hover:shadow-[0_0_34px_rgba(56,189,248,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-violet-400/0 opacity-0 transition group-hover:opacity-100" />
      <span className="flex min-w-0 items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-sky-300/20 bg-gradient-to-br from-sky-300/14 to-violet-400/14 text-sky-200 transition group-hover:border-sky-300/40 group-hover:text-white">
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 transition group-hover:text-sky-200">
            {label}
          </span>
          <span className="mt-1 block truncate text-sm font-medium text-slate-200 transition group-hover:text-white">
            {value}
          </span>
        </span>
      </span>
    </a>
  );
}

const iconClassName = "size-5";

const contactItems = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    ariaLabel: `Email ${personalInfo.email}`,
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
  {
    label: "Telegram",
    value: "@samsouta",
    href: personalInfo.telegram,
    ariaLabel: "Message Samsouta on Telegram",
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
    label: "GitHub",
    value: "github.com/samsouta",
    href: personalInfo.github,
    ariaLabel: "View Samsouta on GitHub",
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
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/sam-souta-a28384321/",
    href: personalInfo.linkedin,
    ariaLabel: "View Samsouta on LinkedIn",
    external: true,
    icon: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.98H3.82v10.2h3.12V8.98ZM5.38 4.82c-1 0-1.8.8-1.8 1.77 0 .99.8 1.78 1.8 1.78s1.8-.79 1.8-1.78c0-.97-.8-1.77-1.8-1.77ZM20.42 13.34c0-2.98-1.59-4.36-3.71-4.36-1.71 0-2.48.94-2.91 1.61V8.98h-3.12c.04.95 0 10.2 0 10.2h3.12v-5.7c0-.3.02-.61.11-.83.24-.61.8-1.24 1.73-1.24 1.22 0 1.7.94 1.7 2.31v5.46h3.12l-.04-5.84Z" />
      </svg>
    ),
  },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatusMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (!response.ok) {
        throw new Error("Unable to send message.");
      }

      setMessage("");
      setStatusMessage("Message sent. I’ll get back to you soon.");
    } catch {
      setErrorMessage("Something went wrong. Please try again or reach out on Telegram.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something useful."
              description="Have a project, product idea, or collaboration in mind? Send me a message and I’ll get back to you."
            />

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Pick the fastest channel for you, or use the form if you want to send a little more context.
            </p>

            <div className="mt-8 grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
              {contactItems.map((item) => (
                <ContactCard key={item.label} {...item} />
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="gradient-border min-w-0 overflow-hidden rounded-lg p-5 shadow-[0_24px_80px_rgba(0,0,0,0.3),0_0_45px_rgba(56,189,248,0.08)] sm:p-8"
          >
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                Start a conversation
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                Tell me what you want to build.
              </h3>
            </div>

            <label className="block text-sm font-medium text-slate-200" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 min-h-11 w-full rounded-lg border border-white/[0.08] bg-slate-950/75 px-4 text-white outline-none transition placeholder:text-slate-500 hover:border-white/[0.14] focus:border-sky-300/60 focus:ring-2 focus:ring-sky-300/15"
              placeholder="Your name"
            />

            <label className="mt-5 block text-sm font-medium text-slate-200" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={6}
              className="mt-2 w-full resize-none rounded-lg border border-white/[0.08] bg-slate-950/75 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 hover:border-white/[0.14] focus:border-sky-300/60 focus:ring-2 focus:ring-sky-300/15"
              placeholder="Tell me what you want to build."
            />

            <button
              type="submit"
              disabled={isSending}
              className="mt-5 min-h-11 w-full rounded-lg bg-gradient-to-r from-sky-300 to-violet-300 px-5 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(56,189,248,0.18)] transition hover:from-sky-200 hover:to-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {statusMessage ? (
              <p className="mt-4 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100" role="status">
                {statusMessage}
              </p>
            ) : null}

            {errorMessage ? (
              <p className="mt-4 rounded-lg border border-rose-300/20 bg-rose-300/10 px-4 py-3 text-sm text-rose-100" role="alert">
                {errorMessage}
              </p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}
