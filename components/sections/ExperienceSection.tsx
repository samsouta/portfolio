import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="journey" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience across frontend, backend, and full-stack delivery."
          description="A focused timeline of hands-on development roles, moving from interface work to backend systems and complete product execution."
        />

        <div className="relative mt-8 sm:mt-12">
          <div
            className="absolute left-6 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-sky-300 via-violet-500 to-sky-300/20 md:block"
            aria-hidden="true"
          />

          <div className="space-y-4 sm:space-y-5 md:space-y-7">
            {experiences.map((experience) => {
              const isCurrent = experience.date.toLowerCase().includes("present");

              return (
                <div
                  key={`${experience.companyName}-${experience.date}`}
                  className="relative md:grid md:grid-cols-[3rem_1fr] md:gap-6"
                >
                  <div className="relative hidden md:block">
                    <span
                      className={`absolute left-[1.06rem] top-6 size-3 rounded-full ring-8 ${
                        isCurrent
                          ? "bg-emerald-300 ring-emerald-300/10 shadow-[0_0_28px_rgba(110,231,183,0.45)]"
                          : "bg-sky-300 ring-sky-300/10"
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  <ExperienceCard
                    title={experience.title}
                    companyName={experience.companyName}
                    date={experience.date}
                    iconBg={experience.iconBg}
                    isCurrent={isCurrent}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
