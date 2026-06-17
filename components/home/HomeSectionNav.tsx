"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LockKeyhole, MessageSquare, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

const sections = [
  { href: "#showcase", label: "Showcase", icon: Sparkles },
  { href: "#services", label: "Services", icon: Sparkles },
  { href: "#security", label: "Security", icon: ShieldCheck },
  { href: "#workflow", label: "Workflow", icon: Workflow },
  { href: "#reviews", label: "Reviews", icon: MessageSquare },
  { href: "#start", label: "Start", icon: LockKeyhole },
];

export function HomeSectionNav() {
  return (
    <AnimatedSection className="-mt-8 pb-10 sm:-mt-10">
      <motion.nav
        variants={childReveal}
        aria-label="Home sections"
        className="depth-card mx-auto flex max-w-5xl gap-2 overflow-x-auto rounded-md border border-border bg-white p-2 shadow-sm"
      >
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group flex min-h-12 shrink-0 items-center gap-2 rounded-md border border-border bg-surface px-4 text-sm font-black text-primary transition-colors hover:bg-primary hover:text-white"
          >
            <section.icon className="h-4 w-4 text-accent transition-colors group-hover:text-white" />
            {section.label}
          </Link>
        ))}
      </motion.nav>
    </AnimatedSection>
  );
}
