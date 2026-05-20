import type { Project } from "@/types/project";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";

type ProjectCardProps = {
  project: Project;
};

const fallbackImage = "/projects/featureshop.svg";

function getProjectImageUrl(imageUrl: string | null) {
  const trimmedUrl = imageUrl?.trim();

  if (!trimmedUrl) {
    return fallbackImage;
  }

  if (
    trimmedUrl.startsWith("/") ||
    trimmedUrl.startsWith("https://") ||
    trimmedUrl.startsWith("http://")
  ) {
    return trimmedUrl;
  }

  return fallbackImage;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardClass = project.featured
    ? "gradient-border"
    : "border border-white/[0.08] bg-slate-950/50";
  const imageUrl = getProjectImageUrl(project.image_url);

  return (
    <article className={`${cardClass} group flex h-full min-w-0 flex-col overflow-hidden rounded-lg transition duration-200 hover:-translate-y-1`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        {/* Project images are Supabase content and may come from any public domain. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          onError={(event) => {
            event.currentTarget.src = fallbackImage;
          }}
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
              {project.category || "Project"}
            </p>
            <h3 className="mt-2 break-words text-lg font-semibold text-white sm:text-xl">{project.title}</h3>
          </div>
          <ProjectStatusBadge status={project.status} />
        </div>
        <p className="mt-4 break-words text-sm leading-6 text-slate-400">
          {project.description || "Project details are being updated."}
        </p>
        {project.metric ? (
          <p className="mt-4 rounded-md border border-sky-300/15 bg-sky-300/10 px-3 py-2 text-sm text-sky-100">
            {project.metric}
          </p>
        ) : null}
        <div className="mt-5 flex min-w-0 flex-wrap gap-2">
          {(project.tech_stack ?? []).map((tech) => (
            <span
              key={tech}
              className="max-w-full break-words rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-xs text-slate-300 sm:px-2.5"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.live_url ? (
            <a className="text-sm font-semibold text-sky-300 hover:text-sky-200" href={project.live_url} target="_blank" rel="noreferrer">
              Live demo
            </a>
          ) : null}
          {project.github_url ? (
            <a className="text-sm font-semibold text-slate-300 hover:text-white" href={project.github_url} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
          {!project.live_url && !project.github_url ? (
            <span className="text-sm text-slate-500">Links available on request</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
