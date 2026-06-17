"use client";

import { motion } from "framer-motion";

import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

type PrivacySection = {
  id: string;
  title: string;
  body: string;
};

export function PrivacyContent({ sections }: { sections: PrivacySection[] }) {
  return (
    <AnimatedSection className="pt-36 pb-20 sm:pt-40 sm:pb-24">
      <motion.div variants={childReveal} className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Legal</p>
        <h1 className="mt-4 text-[clamp(2.5rem,7vw,4.8rem)] font-black leading-none tracking-[-0.05em] text-primary">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          Privacy and security are not afterthoughts at Orion Tech. This page explains how we treat
          project inquiries, contact details, and website data with care.
        </p>
        <p className="mt-4 text-sm font-semibold text-accent">Last updated: June 17, 2026</p>
      </motion.div>

      <motion.div variants={childReveal} className="mt-14 grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav
            className="mb-6 flex gap-2 overflow-x-auto rounded-3xl border border-border bg-surface p-3 lg:hidden"
            aria-label="Privacy policy sections"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-muted"
              >
                {section.title}
              </a>
            ))}
          </nav>
          <nav
            className="hidden rounded-3xl border border-border bg-surface p-4 lg:block"
            aria-label="Privacy policy sections"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-muted transition-colors hover:bg-white hover:text-accent"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <article className="rounded-[2rem] border border-border bg-white p-5 shadow-sm sm:p-10">
          {sections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              variants={childReveal}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="scroll-mt-28 border-b border-border py-8 first:pt-0 last:border-b-0 last:pb-0"
            >
              <h2 className="text-2xl font-black text-primary">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-muted">{section.body}</p>
            </motion.section>
          ))}
        </article>
      </motion.div>
    </AnimatedSection>
  );
}
