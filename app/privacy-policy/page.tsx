import type { Metadata } from "next";

import { PrivacyContent } from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Orion Tech's privacy policy for website visitors and project inquiries.",
  openGraph: {
    title: "Privacy Policy | Orion Tech",
    description: "How Orion Tech collects, uses, and protects information.",
  },
};

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    body: "This Privacy Policy explains how Orion Tech collects, uses, stores, and protects information submitted through our website and contact channels.",
  },
  {
    id: "information",
    title: "Information We Collect",
    body: "We may collect your name, email address, subject, message, project details, and basic technical information such as browser type or website usage data.",
  },
  {
    id: "use",
    title: "How We Use Your Information",
    body: "We use information to respond to inquiries, understand project requirements, improve our services, maintain website security, and communicate with you about requested services.",
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    body: "Our website may use essential cookies and privacy-conscious analytics to understand performance and improve the visitor experience.",
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    body: "We may use trusted third-party services for hosting, analytics, form processing, and email delivery. These providers process data according to their own privacy commitments.",
  },
  {
    id: "security",
    title: "Data Security",
    body: "We use reasonable technical and organizational safeguards to protect information. No internet transmission is fully secure, so we cannot guarantee absolute security.",
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: "Our services are not directed to children under 13. We do not knowingly collect personal information from children.",
  },
  {
    id: "rights",
    title: "Your Rights & Choices",
    body: "You may request access, correction, or deletion of personal information by contacting us. We will respond according to applicable privacy laws.",
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised last updated date.",
  },
  {
    id: "contact",
    title: "Contact Us",
    body: "For privacy questions, contact Orion Tech at oriontech.glob@gmail.com.",
  },
];

export default function PrivacyPolicyPage() {
  return <PrivacyContent sections={sections} />;
}
