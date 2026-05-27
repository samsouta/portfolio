import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samsouta | Full-Stack Developer",
  description:
    "Full-Stack Developer building AI-powered Telegram and SaaS products.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
  },
  openGraph: {
    title: "Samsouta | Full-Stack Developer",
    description:
      "Full-Stack Developer building AI-powered Telegram and SaaS products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
