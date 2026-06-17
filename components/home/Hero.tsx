"use client";

import Image from "next/image";
import { ArrowRight, Code2, Smartphone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/shared/Button";

const words = "Build secure digital products people can trust".split(" ");
const floatingNodes = [
  "left-[8%] top-28 h-3 w-3 bg-accent",
  "left-[18%] top-[72%] h-4 w-4 bg-accent-secondary",
  "right-[12%] top-32 h-3 w-3 bg-accent-secondary",
  "right-[6%] top-[62%] h-5 w-5 bg-accent",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white pt-28 sm:pt-36 lg:pt-40">
      {floatingNodes.map((node, index) => (
        <motion.span
          key={node}
          className={`absolute hidden rounded-full opacity-70 sm:block ${node}`}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, index % 2 === 0 ? 16 : -16, 0],
                  x: [0, index % 2 === 0 ? 8 : -8, 0],
                  scale: [1, 1.18, 1],
                }
          }
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.25,
          }}
        />
      ))}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <div>
          <motion.p
            className="mb-5 inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-accent"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Privacy-first app and web engineering studio
          </motion.p>
          <h1 className="max-w-5xl text-[clamp(2.35rem,12vw,5.8rem)] font-black leading-[0.95] tracking-[-0.06em] text-primary">
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="mr-[0.22em] inline-block"
                initial={
                  reduceMotion ? false : { opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" }
                }
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                transition={{ delay: index * 0.035, duration: 0.5, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Orion Tech designs and ships human-friendly websites, applications, and fintech
            interfaces where privacy, security, and user trust come first.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.5 }}
          >
            <Button href="/contact" size="lg">
              Start a Project <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              View Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative min-h-[360px] rounded-[2rem] border border-border bg-surface p-3 shadow-2xl shadow-primary/10 sm:min-h-[420px] sm:p-5"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
        >
          <motion.div
            className="absolute left-8 top-8 h-28 w-28 rounded-full border border-primary/15"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute right-8 top-8 h-20 w-20 rounded-3xl bg-accent"
            animate={reduceMotion ? undefined : { y: [0, 12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 left-8 h-24 w-24 rounded-full bg-accent-secondary"
            animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10 grid h-full min-h-[340px] place-items-center rounded-[1.5rem] bg-white p-4 shadow-xl shadow-primary/5 sm:min-h-[380px] sm:p-8">
            <div className="w-full max-w-sm rounded-2xl border border-border bg-primary p-4 text-white shadow-xl sm:p-5">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-accent-secondary" />
                  <span className="h-3 w-3 rounded-full bg-accent" />
                  <span className="h-3 w-3 rounded-full bg-white/60" />
                </div>
                <Image
                  src="/images/orion-mark.png"
                  alt="Orion constellation mark"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-2xl object-cover"
                  priority
                />
              </div>
              <motion.div
                className="mb-8 rounded-3xl bg-white p-4"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/orion-mark.png"
                  alt="Animated Orion brand mark"
                  width={220}
                  height={220}
                  className="mx-auto h-32 w-32 object-contain sm:h-48 sm:w-48"
                  priority
                />
              </motion.div>
              <div className="space-y-3 break-words font-mono text-xs text-white/80 sm:text-sm">
                <p>const trust = await OrionTech.build(&#123;</p>
                <p className="pl-5 text-white">strategy: &quot;clear&quot;,</p>
                <p className="pl-5 text-white">privacy: &quot;first&quot;,</p>
                <p className="pl-5 text-white">security: &quot;default&quot;,</p>
                <p>&#125;);</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white p-4 text-primary">
                  <Code2 className="mb-3 h-5 w-5 text-accent" />
                  Web Apps
                </div>
                <div className="rounded-xl bg-white p-4 text-primary">
                  <Smartphone className="mb-3 h-5 w-5 text-accent" />
                  Mobile Apps
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
