import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampstead Clinic",
    default: "Treatment & Clinic FAQs | Hampstead Clinic",
  },
  description: "Find expert answers to frequently asked questions about our doctor-led treatments, consultations, and clinic policies in Hampstead, North West London.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
