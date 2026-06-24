"use client";

import { FileCheck2, LockKeyhole, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import {
  AnimatedSection,
  childRevealLeft,
  childRevealRight,
} from "@/components/shared/AnimatedSection";

const terms = [
  {
    title: "Clear agreement before work begins",
    body: "A project starts only after the scope, deliverables, pricing, timeline, responsibilities, and payment terms are confirmed in writing. Conversations, messages, or website visits do not automatically create a client relationship.",
    icon: FileCheck2,
  },
  {
    title: "Privacy and confidentiality",
    body: "Business ideas, product details, technical notes, and private communication shared with Shree Hari Hardware Mart are handled carefully. We do not sell inquiry information or use private project context for unrelated advertising.",
    icon: ShieldCheck,
  },
  {
    title: "Secure and respectful use",
    body: "You may not misuse this website, submit spam, attempt unauthorized access, scrape content, test security without permission, impersonate others, or disrupt the service. We may block or ignore abusive requests.",
    icon: LockKeyhole,
  },
];

export function TermsContent() {
  return (
    <AnimatedSection className="pt-36 pb-20 sm:pt-40 sm:pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div variants={childRevealLeft} className="lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
            Legal Framework
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,7vw,4.8rem)] font-black leading-none tracking-[-0.05em] text-primary">
            Terms & Conditions
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            These terms explain how we work, what users can expect, and what is required before any
            professional service begins. The goal is simple: clear expectations, respectful use, and
            secure delivery.
          </p>
        </motion.div>

        <motion.div variants={childRevealRight} className="space-y-5">
          <div className="depth-card rounded-md border border-border bg-white p-5 sm:p-8">
            <p className="text-base leading-8 text-muted sm:text-lg">
              By using this website or contacting Shree Hari Hardware Mart, you agree to use our
              content, forms, and communication channels lawfully. Any project work, consulting,
              design, development, analytics, or technical delivery is governed by the written scope
              agreed for that work.
            </p>
          </div>

          {terms.map((item, index) => (
            <motion.article
              key={item.title}
              variants={index % 2 === 0 ? childRevealLeft : childRevealRight}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="depth-card rounded-md border border-border bg-white p-5 sm:p-7"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-surface text-accent">
                  <item.icon className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-black text-primary">{item.title}</h2>
              </div>
              <p className="leading-8 text-muted">{item.body}</p>
            </motion.article>
          ))}

          <div className="depth-card-dark rounded-md bg-primary p-5 text-white sm:p-7">
            <h2 className="text-xl font-black">Payments, delivery, and liability</h2>
            <p className="mt-4 leading-8 text-white/75">
              Deposits, milestones, and final payments must follow the written agreement. Delivery
              may pause if required materials, approvals, or payments are delayed. To the fullest
              extent permitted by law, Shree Hari Hardware Mart is not responsible for indirect
              losses, third-party outages, unauthorized changes, misuse, or issues caused by access
              granted outside our control.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
