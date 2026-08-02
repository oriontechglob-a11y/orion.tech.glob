import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreeharihardwaremart.com"),
  title: {
    default: "SH Global | Secure Web and App Development",
    template: "%s | SH Global",
  },
  description:
    "SH Global builds privacy-first websites, applications, fintech interfaces, and custom software for growing businesses.",
  openGraph: {
    title: "SH Global",
    description: "Privacy-first web and app development services for ambitious teams.",
    url: "https://shreeharihardwaremart.com",
    siteName: "SH Global",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SH Global",
    description: "Privacy-first web and app development services for ambitious teams.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
