"use client";

import Image from "next/image";
import { ArrowRight, Code2, LockKeyhole, ShieldCheck, Smartphone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/shared/Button";

const words = "Build secure digital products people can trust".split(" ");
const floatingNodes = [
  "left-[8%] top-28 h-3 w-3 bg-accent",
  "left-[18%] top-[72%] h-4 w-4 bg-accent-secondary",
  "right-[12%] top-32 h-3 w-3 bg-accent-secondary",
  "right-[6%] top-[62%] h-5 w-5 bg-accent",
];
const wallCells = Array.from({ length: 45 }, (_, index) => index);
const wallMarks = [
  { className: "left-[10%] top-[18%]", icon: ShieldCheck, label: "Protected layer" },
  { className: "right-[18%] top-[24%]", icon: LockKeyhole, label: "Encrypted layer" },
  { className: "left-[42%] bottom-[18%]", icon: ShieldCheck, label: "Privacy layer" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white pt-28 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 overflow-hidden bg-surface/50" aria-hidden="true">
        <div className="absolute -right-28 top-16 hidden h-[620px] w-[820px] [perspective:1100px] md:block">
          <motion.div
            className="grid grid-cols-9 gap-3 [transform-style:preserve-3d]"
            initial={reduceMotion ? false : { opacity: 0, rotateX: 64, rotateZ: -34, y: 42 }}
            animate={{ opacity: 1, rotateX: 64, rotateZ: -34, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {wallCells.map((cell) => (
              <motion.span
                key={cell}
                className={`relative h-20 border border-primary/10 shadow-[10px_10px_0_#E5E7EB] ${
                  cell % 11 === 0
                    ? "bg-primary"
                    : cell % 7 === 0
                      ? "bg-accent"
                      : cell % 5 === 0
                        ? "bg-accent-secondary"
                        : "bg-white"
                }`}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, cell % 3 === 0 ? -6 : 4, 0],
                      }
                }
                transition={{
                  duration: 4 + (cell % 5),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: cell * 0.025,
                }}
              />
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-x-0 top-0 mx-auto grid max-w-7xl grid-cols-5 opacity-55 md:hidden">
          {wallCells.map((cell) => (
            <motion.span
              key={cell}
              className="h-14 border border-border/70 bg-white"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: cell % 5 === 0 ? 0.65 : 0.35, scale: 1 }}
              transition={{ delay: cell * 0.015, duration: 0.35 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 mx-auto max-w-7xl">
          {wallMarks.map((mark, index) => (
            <motion.div
              key={mark.label}
              className={`absolute hidden h-14 w-14 place-items-center border border-primary/15 bg-white/80 text-accent shadow-sm sm:grid ${mark.className}`}
              animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
            >
              <mark.icon className="h-6 w-6" aria-label={mark.label} />
            </motion.div>
          ))}
          <motion.span
            className="absolute left-0 top-1/2 hidden h-1 w-full bg-accent/35 sm:block"
            animate={reduceMotion ? undefined : { x: ["-100%", "100%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            className="absolute left-1/2 top-0 hidden h-full w-1 bg-accent-secondary/35 sm:block"
            animate={reduceMotion ? undefined : { y: ["-100%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
      {floatingNodes.map((node, index) => (
        <motion.span
          key={node}
          className={`absolute hidden rounded-md opacity-70 sm:block ${node}`}
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
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <div>
          <motion.p
            className="mb-5 inline-flex rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-accent"
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
            Shree Hari Hardware Mart designs and ships human-friendly websites, applications, and
            fintech interfaces where privacy, security, and user trust come first.
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
          className="depth-card relative min-h-[360px] rounded-md border border-border bg-surface p-3 sm:min-h-[420px] sm:p-5"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
        >
          <motion.div
            className="absolute left-8 top-8 h-28 w-28 rounded-md border border-primary/15"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute right-8 top-8 h-20 w-20 rounded-md bg-accent"
            animate={reduceMotion ? undefined : { y: [0, 12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 left-8 h-24 w-24 rounded-md bg-accent-secondary"
            animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10 grid h-full min-h-[340px] place-items-center rounded-md bg-white p-4 shadow-xl shadow-primary/5 sm:min-h-[380px] sm:p-8">
            <div className="depth-card-dark w-full max-w-sm rounded-md border border-border bg-primary p-4 text-white sm:p-5">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-md bg-accent-secondary" />
                  <span className="h-3 w-3 rounded-md bg-accent" />
                  <span className="h-3 w-3 rounded-md bg-white/60" />
                </div>
                <Image
                  src="/images/orion-mark.png"
                  alt="Shree Hari Hardware Mart brand mark"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-md object-cover"
                  priority
                />
              </div>
              <motion.div
                className="mb-8 rounded-md bg-white p-4"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/orion-mark.png"
                  alt="Animated Shree Hari Hardware Mart brand mark"
                  width={220}
                  height={220}
                  className="mx-auto h-32 w-32 object-contain sm:h-48 sm:w-48"
                  priority
                />
              </motion.div>
              <div className="space-y-3 break-words font-mono text-xs text-white/80 sm:text-sm">
                <p>const trust = await ShreeHariHardwareMart.build(&#123;</p>
                <p className="pl-5 text-white">strategy: &quot;clear&quot;,</p>
                <p className="pl-5 text-white">privacy: &quot;first&quot;,</p>
                <p className="pl-5 text-white">security: &quot;default&quot;,</p>
                <p>&#125;);</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-md bg-white p-4 text-primary">
                  <Code2 className="mb-3 h-5 w-5 text-accent" />
                  Web Apps
                </div>
                <div className="rounded-md bg-white p-4 text-primary">
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
