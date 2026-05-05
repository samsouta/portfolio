export const BgCard = () => {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center px-4 py-6 sm:px-8">
      <section className="glass-card relative h-[min(88dvh,46rem)] w-full max-w-[74rem] px-5 py-5 sm:px-8 sm:py-7 md:px-10 md:py-9">
        <div className="relative z-10 flex h-full flex-col gap-5 sm:gap-7">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <p className="text-[clamp(1.5rem,3vw,3.1rem)] font-black leading-none tracking-[0] text-black/85 dark:text-white/90">
                Liquid Glass
              </p>
              <p className="mt-2 text-sm font-medium tracking-[0] text-black/45 dark:text-white/55 sm:text-base">
                Bright glassmorphism interface
              </p>
            </div>

            <button
              className="liquid-icon mt-1 grid size-11 shrink-0 place-items-center sm:size-12"
              type="button"
              aria-label="Open menu"
            >
              <span className="h-0.5 w-5 rounded-full bg-current shadow-[0_7px_0_current,0_-7px_0_current]" />
            </button>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-5 lg:grid-cols-12">
            <div className="liquid-pill col-span-1 flex min-h-16 items-center justify-center px-7 text-base font-bold text-white sm:col-span-3 lg:col-span-4 lg:min-h-20 lg:text-lg">
              Start project
            </div>

            <div className="liquid-pill liquid-pill--mint col-span-1 flex min-h-16 items-center justify-center px-7 text-base font-bold text-white sm:col-span-3 lg:col-span-4 lg:min-h-20 lg:text-lg">
              Secondary
            </div>

            <div className="liquid-avatar col-span-1 mx-auto grid size-28 place-items-center sm:col-span-2 lg:col-span-2 lg:size-34">
              <div className="grid size-16 place-items-center rounded-full bg-white/45 text-3xl shadow-[inset_0_1px_2px_rgba(255,255,255,.9)] lg:size-20">
                <span aria-hidden="true">●</span>
              </div>
            </div>

            <div className="liquid-search col-span-1 flex min-h-16 items-center gap-3 px-4 sm:col-span-4 lg:col-span-7">
              <span className="grid size-9 shrink-0 place-items-center rounded-full text-black/65 dark:text-white/70">
                <span className="size-4 rounded-full border-2 border-current after:ml-3 after:mt-3 after:block after:h-2 after:w-0.5 after:-rotate-45 after:rounded-full after:bg-current" />
              </span>
              <span className="min-w-0 flex-1 truncate text-base font-semibold text-black/75 dark:text-white/80">
                Search files...
              </span>
              <button
                className="liquid-icon grid size-11 shrink-0 place-items-center text-white"
                type="button"
                aria-label="Search"
              >
                <span className="size-4 rounded-full border-2 border-current after:ml-3 after:mt-3 after:block after:h-2 after:w-0.5 after:-rotate-45 after:rounded-full after:bg-current" />
              </button>
            </div>

            <div className="liquid-control col-span-1 flex min-h-16 items-center justify-between gap-3 px-4 sm:col-span-2 lg:col-span-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white/70 text-lg font-black text-black/75">
                ✓
              </span>
              <span className="min-w-0 flex-1 truncate text-base font-semibold text-black/75 dark:text-white/80">
                titch
              </span>
              <span className="text-2xl leading-none text-black/40 dark:text-white/50">→</span>
            </div>

            <div className="liquid-control liquid-control--warm col-span-1 flex min-h-18 items-center gap-4 px-5 sm:col-span-3 lg:col-span-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/75 text-xl font-black text-black/80">
                ✓
              </span>
              <span className="text-lg font-bold text-black/80 dark:text-white/85">
                Add user
              </span>
            </div>

            <div className="liquid-toggle col-span-1 flex min-h-18 items-center justify-between px-5 sm:col-span-3 lg:col-span-4">
              <span className="grid size-10 place-items-center text-white/85">
                □
              </span>
              <span className="liquid-toggle__knob size-17 rounded-full" />
            </div>

            <div className="liquid-mini-card col-span-1 flex min-h-24 flex-col justify-between p-4 sm:col-span-3 lg:col-span-3">
              <span className="text-base font-black text-black/85 dark:text-white/90">
                Add user
              </span>
              <button
                className="liquid-pill flex min-h-11 items-center justify-center px-4 text-sm font-bold text-white"
                type="button"
              >
                Subscribe now
              </button>
            </div>

            <div className="liquid-folder col-span-1 min-h-36 sm:col-span-3 lg:col-span-4" />

            <div className="liquid-folder liquid-folder--flat col-span-1 min-h-36 sm:col-span-3 lg:col-span-4" />

            <div className="liquid-mini-card liquid-mini-card--toast col-span-1 flex min-h-36 flex-col gap-3 p-4 sm:col-span-3 lg:col-span-3">
              <span className="text-base font-black text-black/85 dark:text-white/90">
                Toast!
              </span>
              <div className="min-h-11 rounded-2xl bg-white/35 px-4 py-3 text-sm font-semibold text-black/35 dark:text-white/45">
                Icons
              </div>
              <button
                className="liquid-pill flex min-h-11 items-center justify-center px-4 text-sm font-bold text-white"
                type="button"
              >
                Modal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
