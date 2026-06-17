import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SecurityPromise } from "@/components/shared/SecurityPromise";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Orion Tech to start a web development, app development, or custom software project.",
  openGraph: {
    title: "Contact Orion Tech",
    description: "Start your next web, app, or software project with Orion Tech.",
  },
};

const faqs = [
  {
    q: "What types of projects do you take on?",
    a: "We build marketing websites, SaaS apps, dashboards, mobile apps, internal tools, and custom software systems.",
  },
  {
    q: "Can you work with an existing codebase?",
    a: "Yes. We can audit, stabilize, redesign, refactor, or extend existing products depending on the project goals.",
  },
  {
    q: "How soon can we start?",
    a: "Share your project details through the form and we will respond with availability, next steps, and a practical kickoff path.",
  },
  {
    q: "How do you handle privacy and security?",
    a: "We keep project information limited to the work, validate form data, avoid unnecessary data collection, and plan secure user flows from the first conversation.",
  },
];

export default function ContactPage() {
  return (
    <>
      <AnimatedSection className="pt-36 pb-14 text-center sm:pt-40">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Contact Us</p>
        <h1 className="mx-auto mt-4 max-w-4xl text-[clamp(2.6rem,7vw,5rem)] font-black leading-none tracking-[-0.05em] text-primary">
          Tell us what you want to build securely.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          Share only what you are comfortable sharing. Orion Tech will use your details to
          understand the project and reply at oriontech.glob@gmail.com.
        </p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-8 pb-20 md:grid-cols-[0.9fr_1.1fr] sm:pb-24">
        <ContactInfo />
        <ContactForm />
      </AnimatedSection>

      <SecurityPromise compact />

      <AnimatedSection className="pb-20 sm:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">FAQ</p>
            <h2 className="mt-3 text-3xl font-black text-primary">Common questions</h2>
          </div>
          <div className="rounded-[2rem] border border-border bg-white px-6 shadow-sm">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`item-${index}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
