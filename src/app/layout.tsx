import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./global.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donquix",
  description:
    "A visionary creative studio that brings brands, stories, and experiences to life through art, design, and animation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
