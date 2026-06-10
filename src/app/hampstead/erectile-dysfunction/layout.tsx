import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampstead Clinic",
    default: "Doctor-Led Erectile Dysfunction Treatment | Hampstead Clinic",
  },
  description: "Private doctor-led, non-surgical Erectile Dysfunction treatment serving Hampstead, Belsize Park, West Hampstead & North West London.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
