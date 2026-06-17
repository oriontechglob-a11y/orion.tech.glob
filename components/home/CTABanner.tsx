"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/shared/Button";
import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

export function CTABanner() {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection className="py-20">
      <motion.div
        variants={childReveal}
        className="relative overflow-hidden rounded-[2rem] bg-accent px-6 py-14 text-center text-white shadow-2xl shadow-accent/20 sm:px-10"
      >
        <motion.span
          className="absolute left-8 top-8 h-6 w-6 rounded-full bg-white/25"
          animate={reduceMotion ? undefined : { y: [0, 14, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute bottom-8 right-10 h-10 w-10 rounded-2xl bg-white/20"
          animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
          Ready to build something exceptional?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
          Tell us what you want to launch. We will help shape the path, estimate the work, and start
          with clarity.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact" variant="dark" size="lg">
            Get a Quote <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
