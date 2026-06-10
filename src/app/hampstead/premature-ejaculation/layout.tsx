import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampstead Clinic",
    default: "Doctor-Led Premature Ejaculation Treatment | Hampstead Clinic",
  },
  description: "Private doctor-led Premature Ejaculation (PE) treatment serving Hampstead, Belsize Park, West Hampstead & North West London.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
