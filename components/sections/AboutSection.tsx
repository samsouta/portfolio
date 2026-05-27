import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10">
          <SectionHeading
            eyebrow="About"
            title="Building useful software, not just polished interfaces."
            description="I enjoy turning ideas into practical products through engineering, product thinking, and execution."
          />
          <div className="surface-card min-w-0 rounded-lg p-5 sm:p-8">
            <div className="space-y-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              <p>
                I build modern applications focused on usability, performance, and real-world value. My work includes web platforms, automation tools, scalable backend systems, and SaaS-style products designed for practical use.
              </p>

              <p>
                I enjoy the full product process from planning and architecture to development, launch, and iteration. I care about creating software that not only looks clean, but also works reliably and solves meaningful problems.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
