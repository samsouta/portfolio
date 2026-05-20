"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/constants";

export function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${name || "visitor"}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Contact"
              title="Have a product, bot, or automation idea?"
              description="Reach out for practical full-stack execution with a product-builder mindset."
            />
            <div className="mt-8 space-y-3 text-sm text-slate-300">
              <p className="break-words">
                Email: <a className="text-sky-300 hover:text-sky-200" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </p>
              <p className="break-words">
                Telegram: <a className="text-sky-300 hover:text-sky-200" href={personalInfo.telegram} target="_blank" rel="noreferrer">@samsouta</a>
              </p>
              <p className="break-words">
                GitHub: <a className="text-sky-300 hover:text-sky-200" href={personalInfo.github} target="_blank" rel="noreferrer">github.com/samsouta</a>
              </p>
              <p className="break-words">
                LinkedIn: <a className="text-sky-300 hover:text-sky-200" href={personalInfo.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/samsouta</a>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="surface-card min-w-0 rounded-lg p-5 sm:p-8">
            <label className="block text-sm font-medium text-slate-200" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 min-h-11 w-full rounded-lg border border-white/[0.08] bg-slate-950/70 px-4 text-white outline-none transition focus:border-sky-300/50"
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
              className="mt-2 w-full resize-none rounded-lg border border-white/[0.08] bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/50"
              placeholder="Tell me what you want to build."
            />

            <button
              type="submit"
              className="mt-5 min-h-11 w-full rounded-lg bg-sky-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
