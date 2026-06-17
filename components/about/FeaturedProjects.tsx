"use client";

import {
  ArrowUpRight,
  BarChart3,
  BookOpenCheck,
  Calculator,
  LineChart,
  LockKeyhole,
  WalletCards,
} from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

const projects = [
  {
    title: "Wealth Edu",
    href: "https://wealth-edu.vercel.app/",
    eyebrow: "Finance education platform",
    description:
      "A wealth-building learning experience with practical finance education and calculator-led decision tools.",
    icon: BookOpenCheck,
    highlights: ["Finance lessons", "Interactive calculators", "Learning-first UX"],
    chips: [Calculator, WalletCards, BarChart3],
  },
  {
    title: "QuantDesk",
    href: "https://jame-street.vercel.app/",
    eyebrow: "Trading desk dashboard",
    description:
      "A fintech dashboard concept for quant-style workflows, authentication entry, desk loading states, and premium product UI.",
    icon: LineChart,
    highlights: ["Dashboard interface", "Auth-ready flow", "Market-style product UI"],
    chips: [LineChart, LockKeyhole, BarChart3],
  },
];

export function FeaturedProjects() {
  return (
    <AnimatedSection className="py-20 sm:py-24">
      <motion.div variants={childReveal} className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Featured Work</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl">
          Fresh fintech projects with product polish
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted">
          A combination of finance education and dashboard-style fintech interfaces built to feel
          clean, useful, and launch-ready.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            variants={childReveal}
            whileHover={{ y: -10, scale: 1.015, boxShadow: "0 28px 70px rgba(11,31,58,0.14)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group depth-card relative overflow-hidden rounded-md border border-border bg-white p-6 shadow-sm sm:p-8"
          >
            <motion.span
              className="absolute right-6 top-6 h-24 w-24 rounded-md bg-surface"
              animate={{ scale: [1, 1.12, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10 flex items-start justify-between gap-6">
              <div className="grid h-16 w-16 place-items-center rounded-md bg-primary text-white shadow-lg shadow-primary/15">
                <project.icon className="h-7 w-7" />
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border text-primary transition-colors group-hover:bg-accent group-hover:text-white">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>

            <div className="relative z-10 mt-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                {project.eyebrow}
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-primary">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-muted">{project.description}</p>
            </div>

            <div className="relative z-10 mt-7 flex flex-wrap gap-3">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-8 grid grid-cols-3 gap-3">
              {project.chips.map((Icon, chipIndex) => (
                <motion.span
                  key={`${project.title}-${chipIndex}`}
                  className="grid h-20 place-items-center rounded-md bg-surface text-accent"
                  animate={{ y: [0, chipIndex % 2 === 0 ? -6 : 6, 0] }}
                  transition={{ duration: 3.5 + chipIndex, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon className="h-6 w-6" />
                </motion.span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </AnimatedSection>
  );
}
