"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return window.localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const updateTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
  };

  return (
    <div className="theme-toggle" aria-label="Theme">
      <button
        aria-pressed={theme === "light"}
        className="theme-toggle__button"
        onClick={() => updateTheme("light")}
        type="button"
      >
        Light
      </button>
      <button
        aria-pressed={theme === "dark"}
        className="theme-toggle__button"
        onClick={() => updateTheme("dark")}
        type="button"
      >
        Dark
      </button>
    </div>
  );
}
