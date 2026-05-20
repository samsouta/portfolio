import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-sky-400 text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.22)] hover:bg-sky-300",
  secondary:
    "border border-white/12 bg-white/[0.06] text-white hover:border-sky-300/40 hover:bg-white/[0.09]",
  ghost: "text-slate-300 hover:text-white",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  href = "#",
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 max-w-full items-center justify-center rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition duration-200 sm:px-5 ${variants[variant]} ${className}`;

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
