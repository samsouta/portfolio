type ProjectStatusBadgeProps = {
  status: string | null;
};

const statusStyles: Record<string, string> = {
  live: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  "in progress": "border-sky-300/30 bg-sky-300/10 text-sky-200",
  private: "border-violet-300/30 bg-violet-300/10 text-violet-200",
};

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const label = status || "private";
  const style = statusStyles[label.toLowerCase()] ?? statusStyles.private;

  return (
    <span className={`w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-semibold capitalize ${style}`}>
      {label}
    </span>
  );
}
