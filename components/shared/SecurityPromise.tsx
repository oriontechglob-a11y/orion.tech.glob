"use client";

import { EyeOff, LockKeyhole, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

const promises = [
  {
    icon: ShieldCheck,
    title: "Privacy-first builds",
    description:
      "We collect only what a feature needs and keep sensitive information out of unnecessary workflows.",
  },
  {
    icon: LockKeyhole,
    title: "Secure by default",
    description:
      "Forms, dashboards, APIs, and admin surfaces are planned with validation, access control, and safe deployment habits.",
  },
  {
    icon: EyeOff,
    title: "Clear data handling",
    description:
      "You know what data is used, why it is used, and how the product can protect customer trust over time.",
  },
];

type SecurityPromiseProps = {
  compact?: boolean;
  id?: string;
};

export function SecurityPromise({ compact = false, id }: SecurityPromiseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection id={id} className={compact ? "py-14 sm:py-16" : "py-20 sm:py-24"}>
      <div className="depth-card-dark relative overflow-hidden rounded-md bg-primary p-6 text-white shadow-2xl shadow-primary/15 sm:p-8 lg:p-10">
        <motion.span
          className="absolute right-6 top-6 h-20 w-20 rounded-md border border-white/15"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div variants={childReveal} className="relative z-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">
            Privacy & Security
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Human software should protect people first.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
            Shree Hari Hardware Mart builds websites and applications with a simple motto: earn
            trust before scale. Every project is shaped around privacy, secure data flow, and a calm
            user experience.
          </p>
        </motion.div>

        <div className="relative z-10 mt-10 grid gap-4 md:grid-cols-3">
          {promises.map((promise, index) => (
            <motion.article
              key={promise.title}
              variants={childReveal}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="rounded-md border border-white/10 bg-white p-5 text-primary shadow-xl shadow-primary/10"
            >
              <motion.div
                className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-surface text-accent"
                animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                transition={{ duration: 3.2 + index, repeat: Infinity, ease: "easeInOut" }}
              >
                <promise.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="text-lg font-black">{promise.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{promise.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
