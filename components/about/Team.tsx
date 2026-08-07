"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

const team = [
  { role: "App Developer", image: "/images/team-riya.svg" },
  { role: "Data Science & Analytics Member", image: "/images/team-dev.svg" },
  { role: "Quant Developer", image: "/images/team-karan.svg" },
];

const linkedinProfileUrl = "https://www.linkedin.com/in/sh-global-0aa939427/?skipRedirect=true";

export function Team() {
  return (
    <AnimatedSection className="py-20 sm:py-24">
      <motion.div variants={childReveal} className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Team</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl">
          Small team, senior attention
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted">
          Placeholder profiles can be replaced with your real team photos and roles later.
        </p>
      </motion.div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {team.map((member) => (
          <motion.article
            key={member.role}
            variants={childReveal}
            whileHover={{ y: -8, rotateX: 2 }}
            className="depth-card rounded-md border border-border bg-white p-5 text-center shadow-sm"
          >
            <div className="relative mx-auto h-56 overflow-hidden rounded-md bg-surface">
              <Image
                src={member.image}
                alt={`${member.role} placeholder portrait`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-primary">{member.role}</h3>
            <p className="mt-1 text-muted">SH Global team</p>
            <div className="mt-5 flex justify-center gap-3">
              <a
                href={linkedinProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.role} LinkedIn profile`}
                className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted transition-colors hover:bg-primary hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
