import { ThemeToggle } from "@/ui/ThemeToggle";
import { BgCard } from "./BgCard";

export const Landing = () => {
  return (
    <div className="min-h-dvh w-full px-4 py-24 sm:px-6 md:px-10">
      <ThemeToggle />
      <main className="flex min-h-[calc(100dvh-12rem)] items-center justify-center">
        <BgCard />
      </main>
    </div>
  );
};
