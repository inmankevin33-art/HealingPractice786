import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampstead Clinic",
    default: "Doctor-Led P-Shot Treatment | Hampstead Clinic",
  },
  description: "Private doctor-led P-Shot treatment serving Hampstead, Belsize Park, West Hampstead & North West London.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
