"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.08 },
  },
};

export const childReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export const childRevealLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export const childRevealRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "footer";
  id?: string;
};

export function AnimatedSection({ children, className, as = "section", id }: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "div" ? motion.div : as === "footer" ? motion.footer : motion.section;

  return (
    <Component
      id={id}
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={reduceMotion ? undefined : container}
    >
      {children}
    </Component>
  );
}
