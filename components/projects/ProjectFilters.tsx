type ProjectFiltersProps = {
  categories: string[];
  activeCategory: string;
  search: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (search: string) => void;
};

export function ProjectFilters({
  categories,
  activeCategory,
  search,
  onCategoryChange,
  onSearchChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex min-w-0 flex-col gap-4 rounded-lg border border-white/[0.08] bg-white/[0.03] p-3 sm:p-4 md:flex-row md:items-center md:justify-between">
      <input
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search projects, tech, or description"
        className="min-h-11 w-full min-w-0 rounded-lg border border-white/[0.08] bg-slate-950/60 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/50 sm:px-4 md:max-w-sm"
      />
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`min-h-10 shrink-0 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition ${
                isActive
                  ? "bg-sky-300 text-slate-950"
                  : "border border-white/[0.08] bg-white/[0.04] text-slate-300 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
