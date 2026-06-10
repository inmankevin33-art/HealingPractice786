import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampstead Clinic",
    default: "Doctor-Led Peyronie's Disease Treatment | Hampstead London",
  },
  description: "Private doctor-led Peyronie's disease treatment serving Hampstead, Belsize Park, West Hampstead & North West London.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
