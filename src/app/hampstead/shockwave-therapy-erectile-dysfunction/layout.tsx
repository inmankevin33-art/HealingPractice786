import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampstead Clinic",
    default: "Doctor-Led Shockwave Therapy for ED | Hampstead Clinic",
  },
  description: "Private doctor-led Shockwave Therapy (Li-ESWT) for Erectile Dysfunction and Peyronie's disease in Hampstead, Belsize Park, and North West London.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
