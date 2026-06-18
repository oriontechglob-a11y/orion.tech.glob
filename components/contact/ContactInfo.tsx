"use client";

import { BriefcaseBusiness, GitBranch, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { childReveal } from "@/components/shared/AnimatedSection";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "shreeharihardwaremart@gmail.com",
    href: "mailto:shreeharihardwaremart@gmail.com",
  },
];

export function ContactInfo() {
  return (
    <motion.aside
      variants={childReveal}
      className="depth-card-dark rounded-md bg-primary p-7 text-white shadow-2xl shadow-primary/15 sm:p-8"
    >
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">Contact Details</p>
      <h2 className="mt-4 text-3xl font-black tracking-tight">
        Let&apos;s talk about your project.
      </h2>
      <p className="mt-4 leading-7 text-white/75">
        Share your idea, timeline, and goals. We keep inquiries focused, private, and used only to
        plan the right next step with you.
      </p>
      <div className="mt-8 space-y-4">
        {details.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            className="flex gap-4 rounded-md border border-white/10 bg-white p-4 text-primary"
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-surface text-accent">
              <item.icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted">
                {item.label}
              </span>
              <span className="mt-1 block font-semibold">{item.value}</span>
            </span>
          </motion.a>
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        {[GitBranch, BriefcaseBusiness, MessageCircle].map((Icon, index) => (
          <a
            key={index}
            href="#"
            aria-label="Social profile placeholder"
            className="grid h-11 w-11 place-items-center rounded-md border border-white/20 text-white/75 transition-colors hover:bg-white hover:text-primary"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </motion.aside>
  );
}
