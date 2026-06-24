"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GitBranch,
  LockKeyhole,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const buildLinks = [
  "Secure Websites",
  "Private Applications",
  "Web3.0 Interfaces",
  "Fintech Interfaces",
  "Analytics Dashboards",
];

const principles = [
  { icon: ShieldCheck, label: "Privacy-first" },
  { icon: LockKeyhole, label: "Secure delivery" },
  { icon: BriefcaseBusiness, label: "Business-ready" },
];

export function Footer() {
  return (
    <motion.footer
      className="border-t border-border bg-surface text-primary"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="depth-card grid gap-10 rounded-md border border-border bg-white p-6 sm:p-8 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
          <div>
            <div className="mb-5 flex items-center gap-3 text-lg font-black">
              <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-primary transition-transform duration-300 ease-out hover:scale-105">
                <Image
                  src="/images/orion-mark.png"
                  alt="Shree Hari Hardware Mart logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </span>
              Shree Hari Hardware Mart
            </div>
            <p className="max-w-md text-sm leading-7 text-muted">
              Web3-style websites, secure applications, fintech interfaces, and dashboards designed
              with calm motion, trust-first flows, and dependable engineering discipline.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {principles.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-md border border-border bg-surface p-3 text-sm font-black"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-white text-accent">
                    <item.icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-muted">
              Build
            </h2>
            <div className="grid gap-3 text-sm">
              {buildLinks.map((label) => (
                <span key={label} className="text-muted">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-muted">
              Navigate
            </h2>
            <div className="grid gap-3 text-sm">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-muted">
              Connect
            </h2>
            <a
              href="mailto:shreeharihardwaremart@gmail.com"
              className="depth-card mb-5 flex items-center gap-3 rounded-md border border-border bg-surface p-4 text-sm font-black text-primary transition-colors hover:bg-white"
            >
              <Mail className="h-4 w-4 text-accent" /> shreeharihardwaremart@gmail.com
            </a>
            <div className="flex gap-3" aria-label="Social links">
              {[GitBranch, BriefcaseBusiness, MessageCircle].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social profile placeholder"
                  className="grid h-10 w-10 place-items-center rounded-md border border-border bg-white text-muted transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-muted">
              Share only what you are comfortable sharing. We keep project inquiries focused,
              private, and practical.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center">
          <p>Copyright {new Date().getFullYear()} Shree Hari Hardware Mart. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {companyLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
