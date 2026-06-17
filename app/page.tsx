import dynamic from "next/dynamic";

import { CTABanner } from "@/components/home/CTABanner";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { SecurityPromise } from "@/components/shared/SecurityPromise";

const Testimonials = dynamic(() => import("@/components/home/Testimonials"));

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SecurityPromise />
      <Process />
      <Testimonials />
      <CTABanner />
    </>
  );
}
