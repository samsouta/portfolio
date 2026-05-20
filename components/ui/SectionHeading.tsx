type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl min-w-0">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300 sm:text-sm sm:tracking-[0.18em]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
