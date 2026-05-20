export function EmptyState() {
  return (
    <div className="surface-card rounded-lg p-8 text-center">
      <p className="text-base font-semibold text-white">No projects found</p>
      <p className="mt-2 text-sm text-slate-400">
        Try a different search term or category filter.
      </p>
    </div>
  );
}
