import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    default: "Doctor-Led Vaginal Dryness Treatment | St Albans Clinic",
  },
  description: "Private doctor-led treatments for vaginal dryness serving St Albans, Harpenden, Luton & Hertfordshire. Explore non-hormonal options like HA and Polynucleotides.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
