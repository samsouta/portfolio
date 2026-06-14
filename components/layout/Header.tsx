"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/constants";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.div
      className="fixed z-50 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl"
      style={{
        top: "max(1rem, env(safe-area-inset-top, 1rem))",
        willChange: "transform",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Main header bar */}
      <motion.header
        className="relative rounded-2xl border border-white/8 px-4 sm:px-5"
        animate={{
          backgroundColor: scrolled
            ? "rgba(15, 23, 42, 0.82)"
            : "rgba(15, 23, 42, 0.55)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
          boxShadow: scrolled
            ? "0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)"
            : "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div
          className={`flex min-w-0 items-center justify-between gap-3 transition-all duration-300 ${
            scrolled ? "h-12" : "h-14"
          }`}
        >
          {/* Logo / name */}
          <a
            href="#top"
            className="min-w-0 shrink-0 text-sm font-semibold tracking-wide text-white"
            onClick={closeMenu}
          >
            <span className="truncate">{personalInfo.name}</span>
            <span className="ml-2 hidden text-sky-300 sm:inline">/ builder</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative rounded-lg px-3 py-1.5 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.15 }}
              >
                {item.label}
                <motion.span
                  className="absolute inset-0 rounded-lg bg-white/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Right side: GitHub + hamburger */}
          <div className="flex shrink-0 items-center gap-2">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-sky-400/40 hover:text-white"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              GitHub
            </motion.a>

            {/* Hamburger — mobile/tablet only */}
            <motion.button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors duration-200 hover:text-white lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.1 }}
            >
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                className="h-4.5 w-4.5"
                animate={menuOpen ? "open" : "closed"}
              >
                {menuOpen ? (
                  <>
                    <motion.line
                      x1="18" y1="6" x2="6" y2="18"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    />
                    <motion.line
                      x1="6" y1="6" x2="18" y2="18"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    />
                  </>
                ) : (
                  <>
                    <motion.line
                      x1="4" y1="7" x2="20" y2="7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    />
                    <motion.line
                      x1="4" y1="12" x2="20" y2="12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    />
                    <motion.line
                      x1="4" y1="17" x2="20" y2="17"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    />
                  </>
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex max-h-[calc(100vh-6rem)] flex-col gap-1 overflow-y-auto border-t border-white/6 pb-3 pt-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center rounded-xl px-3 py-3 text-sm text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white active:bg-white/8"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </motion.div>
  );
}
