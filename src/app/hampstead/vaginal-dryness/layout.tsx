import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampstead Clinic",
    default: "Doctor-Led Vaginal Dryness Treatment | Hampstead Clinic",
  },
  description: "Private doctor-led treatments for vaginal dryness serving Hampstead, Belsize Park & North West London. Explore non-hormonal options like HA and Polynucleotides.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
