import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getExperiences } from "@/lib/experiences";

export async function ExperienceSection() {
  const result = await getExperiences();
  const experiences = result.data;

  return (
    <section id="experience" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Work experience across frontend, backend, and full-stack development."
          description="A timeline of hands-on roles building interfaces, backend systems, and complete web products."
        />

        {result.error ? (
          <div className="mt-8 rounded-lg border border-red-400/20 bg-red-950/20 p-6 sm:mt-12">
            <p className="text-sm font-semibold text-red-200">Experience data error</p>
            <p className="mt-2 text-sm text-red-100/75">{result.error}</p>
          </div>
        ) : null}

        {!result.error && experiences.length === 0 ? (
          <div className="surface-card mt-8 rounded-lg p-8 text-center sm:mt-12">
            <p className="text-base font-semibold text-white">No experience found</p>
            <p className="mt-2 text-sm text-slate-400">
              Work experience will appear here once it is added in Supabase.
            </p>
          </div>
        ) : null}

        {!result.error && experiences.length > 0 ? (
          <div className="relative mt-8 sm:mt-12">
            <div
              className="absolute left-6 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-sky-300 via-violet-500 to-sky-300/20 md:block"
              aria-hidden="true"
            />

            <div className="space-y-4 sm:space-y-5 md:space-y-7">
              {experiences.map((experience) => {
                const isCurrent = experience.current;

                return (
                  <div
                    key={experience.id}
                    className="relative md:grid md:grid-cols-[3rem_1fr] md:gap-6"
                  >
                    <div className="relative hidden md:block">
                      <span
                        className={`absolute left-[1.06rem] top-6 size-3 rounded-full ring-8 ${isCurrent
                          ? "bg-emerald-300 ring-emerald-300/10 shadow-[0_0_28px_rgba(110,231,183,0.45)]"
                          : "bg-sky-300 ring-sky-300/10"
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    <ExperienceCard
                      title={experience.title}
                      companyName={experience.companyName}
                      date={experience.dateLabel}
                      iconBg={experience.iconBg}
                      isCurrent={isCurrent}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
