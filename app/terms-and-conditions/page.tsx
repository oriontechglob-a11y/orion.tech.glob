import type { Metadata } from "next";

import { TermsContent } from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the SH Global website and requesting professional services.",
  openGraph: {
    title: "Terms & Conditions | SH Global",
    description: "Clear terms for secure, professional project communication and delivery.",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsContent />;
}
