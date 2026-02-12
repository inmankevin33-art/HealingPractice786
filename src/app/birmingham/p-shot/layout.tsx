import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "P-Shot® Treatment | Birmingham Clinic",
  },
  description: "Official P-Shot® provider serving Birmingham, Edgbaston & West Midlands.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
