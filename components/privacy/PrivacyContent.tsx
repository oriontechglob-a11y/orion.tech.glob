"use client";

import { motion } from "framer-motion";

import { AnimatedSection, childReveal } from "@/components/shared/AnimatedSection";

export function PrivacyContent() {
  return (
    <AnimatedSection className="pt-36 pb-20 sm:pt-40 sm:pb-24">
      <motion.div variants={childReveal} className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Legal</p>
        <h1 className="mt-4 text-[clamp(2.5rem,7vw,4.8rem)] font-black leading-none tracking-[-0.05em] text-primary">
          Privacy Policy & Terms
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          We keep this page direct and human. Orion Tech builds websites, applications, analytics
          products, and fintech interfaces, and we treat privacy, security, and clear expectations
          as part of the work from day one.
        </p>
      </motion.div>

      <motion.article
        variants={childReveal}
        className="mx-auto mt-14 max-w-4xl rounded-md border border-border bg-white p-5 text-base leading-8 text-muted shadow-sm sm:p-10 sm:text-lg"
      >
        <p>
          When you use this website or contact Orion Tech, we may receive the information you choose
          to share with us, such as your name, email address, subject, project message, and a small
          amount of technical request information that helps us keep the website safe. We ask only
          for the details needed to understand your request, reply to you, prevent misuse, and plan
          a responsible next step.
        </p>

        <p className="mt-6">
          We do not sell your personal information. We do not use project inquiries for unrelated
          advertising. If you send us a business idea, technical detail, product plan, or private
          context, we handle it with care and treat it as confidential unless we are required by law
          to disclose it, need to share it with a trusted service provider to complete the requested
          work, or you give written permission.
        </p>

        <p className="mt-6">
          Orion Tech may use trusted third-party services for hosting, deployment, email delivery,
          security, analytics, or communication. These services may process limited information only
          for the purpose of making the website and our communication work properly. We choose tools
          with privacy and reliability in mind, but no internet service can be promised to be
          perfect or risk-free.
        </p>

        <p className="mt-6">
          We use reasonable technical and organizational safeguards to protect information. That
          includes form validation, basic abuse prevention, security headers, limited data
          collection, and careful handling of project communication. At the same time, you agree not
          to misuse the website, attempt unauthorized access, scrape content, test security without
          permission, send spam, impersonate others, or use our forms and systems for harmful or
          unlawful activity.
        </p>

        <p className="mt-6">
          Using this website does not automatically create a client relationship. Project work
          begins only after scope, deliverables, pricing, timeline, responsibilities,
          confidentiality expectations, and payment terms are agreed in writing. Any request outside
          the approved scope may require updated pricing, a new timeline, or a separate agreement.
        </p>

        <p className="mt-6">
          Unless a written agreement says otherwise, client-specific final deliverables transfer
          after full payment is received. Orion Tech may still keep general knowledge, reusable
          methods, internal tools, development patterns, and non-confidential experience gained
          during the work. Deposits, milestone payments, and final payments must be completed as
          agreed, and delivery may be paused if required approvals, materials, or payments are
          delayed.
        </p>

        <p className="mt-6">
          To the fullest extent allowed by law, Orion Tech is not responsible for indirect,
          incidental, special, consequential, business-interruption, or third-party service losses.
          We are also not responsible for issues caused by unauthorized edits, misuse, client-side
          changes, external outages, or access granted to people outside our control.
        </p>

        <p className="mt-6">
          You may ask us to access, correct, or delete personal information you have shared with us.
          Some records may need to be retained for security, legal, payment, dispute, or legitimate
          business reasons. If this policy changes, the updated version will be posted on this page.
          For privacy, security, or terms questions, contact us at
          <a className="font-semibold text-accent" href="mailto:oriontech.glob@gmail.com">
            {" "}
            oriontech.glob@gmail.com
          </a>
          .
        </p>
      </motion.article>
    </AnimatedSection>
  );
}
