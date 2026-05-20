import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10">
          <SectionHeading
            eyebrow="About"
            title="Building useful systems, not just polished screens."
            description="My work sits between engineering, product thinking, and fast execution."
          />
          <div className="surface-card min-w-0 rounded-lg p-5 sm:p-8">
            <div className="space-y-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              <p>
                I focus on building real products that solve practical problems:
                Telegram bots that help users find information faster, SaaS-style
                systems with clear usage rules, and automation workflows that
                reduce manual effort.
              </p>
              <p>
                I care about the full path from idea to launch. That means
                understanding the user problem, shaping the product flow, building
                the backend, designing a clean interface, and improving the system
                after real usage.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
