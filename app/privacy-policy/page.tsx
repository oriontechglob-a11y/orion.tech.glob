import type { Metadata } from "next";

import { PrivacyContent } from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description:
    "Read SH Global's privacy policy and terms for website visitors and project inquiries.",
  openGraph: {
    title: "Privacy Policy & Terms | SH Global",
    description: "How SH Global protects information and defines service terms.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
