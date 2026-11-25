
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vincent Ace Racoma | Personal Site",
  description: "BS Information Technology Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900">

        {/* Navigation Bar */}
        <nav className="w-full border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">

            <Link
              href="/"
              className="text-xl font-bold text-gray-900 hover:text-blue-600"
            >
              Vincent Ace
            </Link>

            <div className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/"
                className="text-gray-700 transition-colors hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-700 transition-colors hover:text-blue-600"
              >
                About
              </Link>

              <Link
                href="/projects"
                className="text-gray-700 transition-colors hover:text-blue-600"
              >
                Projects
              </Link>
            </div>

          </div>
        </nav>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
