"use client";

import { motion } from "framer-motion";

import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

export function Story() {
  return (
    <AnimatedSection className="grid gap-10 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center sm:py-24">
      <motion.div variants={childReveal}>
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Our Story</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl">
          Built for teams that need more than code.
        </h2>
      </motion.div>
      <motion.div variants={childReveal} className="space-y-5 text-lg leading-8 text-muted">
        <p>
          Shree Hari Hardware Mart is a service-based software studio focused on app development,
          web development, and custom digital products. We partner with businesses that want
          thoughtful strategy, polished design, and dependable engineering in one team.
        </p>
        <p>
          Our work blends modern product thinking with practical delivery. That means clean
          interfaces, maintainable architecture, transparent communication, and software that can
          keep evolving after launch.
        </p>
      </motion.div>
    </AnimatedSection>
  );
}
