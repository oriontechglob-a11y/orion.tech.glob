"use client";

import { motion } from "framer-motion";

import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

const steps = ["Discover", "Design", "Develop", "Deploy", "Support"];

export function Process() {
  return (
    <AnimatedSection className="py-20 sm:py-24">
      <motion.div variants={childReveal} className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Workflow</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl">
          A process built for clarity
        </h2>
      </motion.div>
      <div className="relative mt-16 grid gap-6 lg:grid-cols-5">
        <motion.div className="absolute left-8 top-8 hidden h-1 rounded-full bg-border lg:left-0 lg:right-0 lg:top-9 lg:block" />
        <motion.div
          className="absolute left-8 top-8 hidden h-1 origin-left rounded-full bg-accent lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{ right: 0 }}
        />
        {steps.map((step, index) => (
          <motion.article
            key={step}
            variants={childReveal}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 50px rgba(11,31,58,0.1)" }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-sm"
          >
            <motion.span
              className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-surface"
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            />
            <motion.div
              className="mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-primary text-xl font-black text-white"
              whileHover={{ rotate: -6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 340, damping: 18 }}
            >
              {index + 1}
            </motion.div>
            <h3 className="text-xl font-bold text-primary">{step}</h3>
            <p className="mt-3 leading-7 text-muted">
              {step === "Discover"
                ? "We map goals, users, constraints, and success metrics before writing code."
                : step === "Design"
                  ? "We turn strategy into polished screens, journeys, and interaction details."
                  : step === "Develop"
                    ? "We build with clean architecture, fast feedback loops, and strict quality gates."
                    : step === "Deploy"
                      ? "We launch on reliable infrastructure with monitoring and release confidence."
                      : "We keep improving your product with support, maintenance, and iteration."}
            </p>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
