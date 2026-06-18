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
    default: "Shree Hari Hardware Mart | Secure Web and App Development",
    template: "%s | Shree Hari Hardware Mart",
  },
  description:
    "Shree Hari Hardware Mart builds privacy-first websites, applications, fintech interfaces, and custom software for growing businesses.",
  openGraph: {
    title: "Shree Hari Hardware Mart",
    description: "Privacy-first web and app development services for ambitious teams.",
    url: "https://shreeharihardwaremart.com",
    siteName: "Shree Hari Hardware Mart",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Hari Hardware Mart",
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
