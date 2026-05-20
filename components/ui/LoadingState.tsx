export function LoadingState() {
  return (
    <div className="grid min-w-0 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          className="surface-card min-h-72 animate-pulse rounded-lg p-4 sm:min-h-80 sm:p-5"
        >
          <div className="h-36 rounded-md bg-white/[0.06]" />
          <div className="mt-5 h-4 w-1/2 rounded bg-white/[0.08]" />
          <div className="mt-4 h-3 w-full rounded bg-white/[0.06]" />
          <div className="mt-2 h-3 w-4/5 rounded bg-white/[0.06]" />
        </div>
      ))}
    </div>
  );
}
