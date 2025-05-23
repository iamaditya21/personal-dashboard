import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"
// import ThemeToggle from "./components/ThemeToggle"; // optional, if implemented

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya's Dashboard",
  description: "Personal dashboard built with Next.js & Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300`}
      >
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
        {/* <ThemeToggle /> ← Optional: Dark mode toggle */}
      </body>
    </html>
  );
}
