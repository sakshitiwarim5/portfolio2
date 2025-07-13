import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { Header, Footer, ThemeSwitch } from "@/components";
import { EXTRA_LINKS } from "@/constants";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

import "./globals.css";

// Load Inter font
const inter = Inter({ subsets: ["latin"] });

// Viewport settings
export const viewport: Viewport = {
  themeColor: "#CCD6E0",
};

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Sakshi | Personal Portfolio",
  description:
    "Sakshi is a full-stack developer passionate about building scalable and innovative web applications using the MERN stack, FastAPI, and AI technologies.",
  authors: [{ name: "Sakshi Tiwari", url: EXTRA_LINKS.github }],
  keywords: [
    "sakshi tiwari",
    "mern stack",
    "reactjs",
    "nextjs",
    "typescript",
    "fastapi",
    "mongodb",
    "tailwindcss",
    "vercel",
    "azure ai",
    "langchain",
    "huggingface",
    "sqlite",
    "full-stack developer",
    "portfolio",
    "ai powered apps",
  ],
  manifest: "/manifest.json",
  other: {
    "google-site-verification":
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY!,
  },
};

// Main layout function
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36`}
      >
        {/* Decorative blurred background circles */}
        <div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

        {/* Providers */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* Header */}
            <Header />

            {/* Main content */}
            {children}

            {/* Footer */}
            <Footer />

            {/* Notifications */}
            <aside>
              <Toaster
                position="top-right"
                toastOptions={{
                  className: "dark:bg-white/10 dark:text-white/80",
                }}
              />
            </aside>

            {/* Theme Switch */}
            <aside>
              <ThemeSwitch />
            </aside>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        {/* Analytics */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
