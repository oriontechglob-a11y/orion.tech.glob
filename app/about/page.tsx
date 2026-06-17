import type { Metadata } from "next";

import { FeaturedProjects } from "@/components/about/FeaturedProjects";
import { Story } from "@/components/about/Story";
import { Team } from "@/components/about/Team";
import { Values } from "@/components/about/Values";
import { CTABanner } from "@/components/home/CTABanner";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SecurityPromise } from "@/components/shared/SecurityPromise";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Orion Tech, a modern software studio building apps, websites, and custom software.",
  openGraph: {
    title: "About Orion Tech",
    description: "A modern software studio for premium app and web development.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AnimatedSection className="pt-36 pb-16 text-center sm:pt-40">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
          About Orion Tech
        </p>
        <h1 className="mx-auto mt-4 max-w-4xl text-[clamp(2.6rem,7vw,5rem)] font-black leading-none tracking-[-0.05em] text-primary">
          We build software with clarity, craft, and reliable execution.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          Our mission is to help businesses launch polished digital products without losing the
          engineering rigor needed for long-term growth.
        </p>
      </AnimatedSection>
      <Story />
      <SecurityPromise compact />
      <Values />
      <FeaturedProjects />
      <Team />
      <CTABanner />
    </>
  );
}
