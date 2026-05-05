import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " samsouta | Landing Page ",
  description: " portfolio website where you can chat to learn about the developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" data-theme="light">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
