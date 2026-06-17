import type { Metadata } from "next";

import { PrivacyContent } from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description:
    "Read Orion Tech's privacy policy and terms for website visitors and project inquiries.",
  openGraph: {
    title: "Privacy Policy & Terms | Orion Tech",
    description: "How Orion Tech protects information and defines service terms.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
