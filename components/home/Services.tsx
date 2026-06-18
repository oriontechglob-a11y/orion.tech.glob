"use client";

import { Cloud, Code2, Headphones, Layers3, Palette, Smartphone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

const services = [
  {
    icon: Smartphone,
    title: "Make an Application",
    description:
      "Custom mobile and web applications built for your users, workflow, and business goals.",
  },
  {
    icon: Code2,
    title: "Make a Website",
    description: "Professional, responsive websites that feel polished, fast, and easy to manage.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Product interfaces that feel clear, deliberate, and easy to use across every screen.",
  },
  {
    icon: Layers3,
    title: "Custom Software",
    description:
      "Dashboards, admin panels, internal tools, and workflows tailored to your business.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deployments, infrastructure, automation, and observability for stable production systems.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description: "Ongoing improvements, bug fixes, monitoring, and technical support after launch.",
  },
];

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection id="services" className="py-16 sm:py-24">
      <motion.div variants={childReveal} className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Services</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl">
          End-to-end product engineering
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted">
          From the first product conversation to launch and support, Shree Hari Hardware Mart covers
          the full delivery path.
        </p>
        <motion.div
          className="mx-auto mt-7 h-1 w-24 origin-left rounded-md bg-accent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </motion.div>
      <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            variants={childReveal}
            whileHover={{
              y: -10,
              scale: 1.015,
              boxShadow: "0 24px 60px rgba(11,31,58,0.12)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group depth-card relative overflow-hidden rounded-md border border-border bg-white p-5 shadow-sm transition-shadow sm:p-7"
          >
            <motion.span
              className="absolute right-5 top-5 h-3 w-3 rounded-md bg-accent-secondary opacity-70"
              animate={reduceMotion ? undefined : { scale: [1, 1.8, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.18,
              }}
            />
            <motion.div
              whileHover={{ rotate: -8, scale: 1.12 }}
              transition={{ type: "spring", stiffness: 360, damping: 18 }}
              className="mb-6 grid h-14 w-14 place-items-center rounded-md bg-surface text-accent"
            >
              <service.icon className="h-6 w-6" />
            </motion.div>
            <h3 className="text-xl font-bold text-primary">{service.title}</h3>
            <p className="mt-3 leading-7 text-muted">{service.description}</p>
            <motion.div
              className="mt-6 h-1 w-12 rounded-md bg-accent"
              initial={{ width: 48 }}
              whileHover={{ width: 96 }}
              transition={{ duration: 0.25 }}
            />
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
