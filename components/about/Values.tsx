"use client";

import { BadgeCheck, Eye, Lightbulb, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

const values = [
  {
    icon: BadgeCheck,
    title: "Quality",
    description: "We treat performance, accessibility, and maintainability as product features.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear scope, regular communication, and no mystery around delivery tradeoffs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern tools and patterns, applied with restraint and purpose.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "Stable releases, careful testing, and support after your product is live.",
  },
];

export function Values() {
  return (
    <AnimatedSection className="py-20 sm:py-24">
      <motion.div variants={childReveal} className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[2rem] bg-primary p-8 text-white shadow-2xl shadow-primary/15">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">Mission</p>
          <h2 className="mt-4 text-3xl font-black">
            Make premium software delivery accessible to ambitious teams.
          </h2>
        </div>
        <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Vision</p>
          <h2 className="mt-4 text-3xl font-black text-primary">
            Become the trusted technology partner behind products people love using.
          </h2>
        </div>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <motion.article
            key={value.title}
            variants={childReveal}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-border bg-white p-6 shadow-sm"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-surface text-accent">
              <value.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-primary">{value.title}</h3>
            <p className="mt-3 leading-7 text-muted">{value.description}</p>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
