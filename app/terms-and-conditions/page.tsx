import type { Metadata } from "next";

import { TermsContent } from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Shree Hari Hardware Mart website and requesting professional services.",
  openGraph: {
    title: "Terms & Conditions | Shree Hari Hardware Mart",
    description: "Clear terms for secure, professional project communication and delivery.",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsContent />;
}
