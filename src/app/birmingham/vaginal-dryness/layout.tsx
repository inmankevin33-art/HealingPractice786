import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "Doctor-Led Vaginal Dryness Treatment | Birmingham Clinic",
  },
  description: "Private doctor-led treatments for vaginal dryness serving Edgbaston, Solihull & the West Midlands. Explore non-hormonal options like HA and Polynucleotides.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
