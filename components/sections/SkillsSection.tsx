import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I use to build modern applications."
          description="Experience across frontend, backend, databases, infrastructure, automation, and product-focused development."
        />
        <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {skills.map((group) => (
            <article key={group.title} className="surface-card min-w-0 rounded-lg p-4 sm:p-5 lg:p-6">
              <h3 className="break-words text-base font-semibold text-white sm:text-lg">{group.title}</h3>
              <div className="mt-4 flex min-w-0 flex-wrap gap-2 sm:mt-5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="max-w-full break-words rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-xs leading-5 text-slate-300 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
