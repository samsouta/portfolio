type ExperienceCardProps = {
  title: string;
  companyName: string;
  date: string;
  iconBg: string;
  isCurrent: boolean;
  description?: string;
};

export function ExperienceCard({
  title,
  companyName,
  date,
  iconBg,
  isCurrent,
  description,
}: ExperienceCardProps) {
  const initials = companyName
    .split(/[\s-]+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="group relative min-w-0 rounded-lg border border-white/[0.08] bg-white/[0.03] p-4 transition duration-200 hover:-translate-y-1 hover:border-sky-300/35 hover:bg-white/[0.05] hover:shadow-[0_20px_70px_rgba(56,189,248,0.12)] sm:p-6">
      <div className="absolute -inset-px -z-10 rounded-lg bg-gradient-to-br from-sky-300/0 via-violet-500/0 to-sky-300/0 opacity-0 blur-xl transition duration-300 group-hover:opacity-25" />

      <div className="flex min-w-0 items-start gap-3 sm:gap-4">
        <div
          className="grid size-12 shrink-0 place-items-center rounded-lg border border-white/10 text-sm font-semibold text-white shadow-[0_0_34px_rgba(56,189,248,0.12)]"
          style={{ backgroundColor: iconBg }}
          aria-hidden="true"
        >
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h3 className="break-words text-base font-semibold tracking-tight text-white sm:text-lg">
                {title}
              </h3>
              <p className="mt-1 break-words text-sm font-medium text-sky-300">
                {companyName}
              </p>
            </div>

            {isCurrent ? (
              <span className="w-fit rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                Present
              </span>
            ) : null}
          </div>

          <p className="mt-4 break-words text-sm font-medium text-slate-400">{date}</p>

          {description ? (
            <p className="mt-4 text-sm leading-6 text-slate-400">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
