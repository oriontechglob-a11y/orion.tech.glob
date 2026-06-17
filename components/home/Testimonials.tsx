"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

const testimonials = [
  {
    quote:
      "Orion Tech delivered a clean, professional fintech experience with strong attention to UI quality, performance, and practical product flow.",
    name: "BSJ Infotech",
    role: "Fintech Project Review",
  },
  {
    quote:
      "Orion Tech translated our rough product idea into a clean, reliable platform faster than we expected.",
    name: "FinOps Studio",
    role: "Product Platform Review",
  },
  {
    quote:
      "The team brought strong engineering judgment and a design eye. The final site feels custom and premium.",
    name: "Nova Retail",
    role: "Website Project Review",
  },
  {
    quote:
      "They cared about performance, accessibility, and maintainability from day one. That made launch calm.",
    name: "ScaleBase",
    role: "Product Delivery Review",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % testimonials.length),
      4500,
    );
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <AnimatedSection className="py-20 sm:py-24">
      <motion.div variants={childReveal} className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Testimonials</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl">
          Trusted delivery, polished results
        </h2>
      </motion.div>
      <motion.div
        variants={childReveal}
        className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-border bg-white p-8 shadow-2xl shadow-primary/10 sm:p-12"
      >
        <Quote className="h-10 w-10 text-accent" />
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            <p className="mt-8 text-2xl font-bold leading-snug text-primary sm:text-3xl">
              &quot;{testimonials[active].quote}&quot;
            </p>
            <div className="mt-8">
              <p className="font-bold text-primary">{testimonials[active].name}</p>
              <p className="text-sm text-muted">{testimonials[active].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              aria-label={`Show testimonial from ${item.name}`}
              className={`h-2.5 rounded-full transition-all ${index === active ? "w-9 bg-accent" : "w-2.5 bg-border"}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
