import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampstead Clinic",
    default: "Penis Filler Hampstead",
  },
  description:
    "Doctor-led private clinic in Hampstead, London providing discreet intimate health and penile filler treatments for patients across North West London.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
