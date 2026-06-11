 import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampstead Clinic",
    default: "Doctor-Led Treatment Prices | Hampstead Clinic",
  },
  description: "Transparent, doctor-led pricing for PRP, Sexual Rejuvenation, and Joint Injections serving Hampstead, Belsize Park & North West London.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
