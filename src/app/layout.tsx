import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./global.scss";
const inter = Inter({ subsets: ["latin"] });
import logo from "@/assets/logo.svg";
export const metadata: Metadata = {
  title: "Donquix",
  description:
    "A visionary creative studio that brings brands, stories, and experiences to life through art, design, and animation.",
  icons: logo,
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
