import type { Metadata } from "next";

import { PrivacyContent } from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description:
    "Read Shree Hari Hardware Mart's privacy policy and terms for website visitors and project inquiries.",
  openGraph: {
    title: "Privacy Policy & Terms | Shree Hari Hardware Mart",
    description: "How Shree Hari Hardware Mart protects information and defines service terms.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
