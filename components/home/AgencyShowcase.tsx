"use client";

import { Code2, LockKeyhole, MousePointer2, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import {
  AnimatedSection,
  childReveal,
  childRevealLeft,
  childRevealRight,
} from "@/components/shared/AnimatedSection";

const showcaseCards = [
  {
    title: "Privacy-led strategy",
    description:
      "We shape the product around trust, clear data handling, and secure user journeys before interface polish begins.",
    icon: ShieldCheck,
    meta: "01 / Trust",
  },
  {
    title: "Motion with purpose",
    description:
      "Animated sections, hover states, and transitions guide attention without making the site feel noisy or gimmicky.",
    icon: MousePointer2,
    meta: "02 / Motion",
  },
  {
    title: "Secure engineering",
    description:
      "Forms, APIs, dashboards, and deployments are planned with validation, access boundaries, and maintainable structure.",
    icon: LockKeyhole,
    meta: "03 / Secure",
  },
  {
    title: "Launch-ready systems",
    description:
      "From websites to applications, we build modular pages and flows that feel premium across mobile, tablet, and desktop.",
    icon: Workflow,
    meta: "04 / Launch",
  },
];

const rails = ["Strategy", "Design", "Build", "Secure", "Launch"];

export function AgencyShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection id="showcase" className="py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div variants={childRevealLeft} className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
            Animated Agency System
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl">
            Premium motion, engineered with restraint.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Inspired by modern animated agency templates, this website uses directional reveals, 3D
            depth, and crisp sections to feel official, polished, and easy to trust.
          </p>

          <motion.div variants={childReveal} className="mt-8 grid gap-3 sm:grid-cols-2">
            {rails.map((rail, index) => (
              <motion.div
                key={rail}
                className="depth-card flex items-center justify-between rounded-md border border-border bg-white p-4"
                whileHover={{ y: -5, x: index % 2 === 0 ? 5 : -5 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <span className="text-sm font-black text-primary">{rail}</span>
                <span className="grid h-8 w-8 place-items-center rounded-md bg-surface text-accent">
                  <Sparkles className="h-4 w-4" />
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={childRevealRight} className="relative [perspective:1200px]">
          <motion.div
            className="depth-card relative overflow-hidden rounded-md border border-border bg-white p-4 sm:p-6"
            initial={reduceMotion ? false : { rotateX: 8, rotateY: -8 }}
            whileInView={reduceMotion ? undefined : { rotateX: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-white">
                  <Code2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-black text-primary">Shree Hari Secure Systems</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Live build system
                  </p>
                </div>
              </div>
              <span className="rounded-md bg-surface px-3 py-2 text-xs font-black text-accent">
                3D UI
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {showcaseCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  className="relative overflow-hidden rounded-md border border-border bg-surface p-5"
                  variants={index % 2 === 0 ? childRevealLeft : childRevealRight}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <motion.span
                    className="absolute right-4 top-4 h-12 w-12 rounded-md border border-border bg-white"
                    animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                    transition={{ duration: 3.4 + index, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-accent">
                        <card.icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-black uppercase tracking-[0.16em] text-muted">
                        {card.meta}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-primary">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
