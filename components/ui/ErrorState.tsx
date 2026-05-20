type ErrorStateProps = {
  message: string;
};

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-red-400/20 bg-red-950/20 p-6">
      <p className="text-sm font-semibold text-red-200">Project data error</p>
      <p className="mt-2 text-sm text-red-100/75">{message}</p>
    </div>
  );
}
