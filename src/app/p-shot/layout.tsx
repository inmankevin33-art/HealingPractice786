import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    default: "P-Shot® Male Rejuvenation | St Albans Clinic",
  },
  description: "Official P-Shot® (Priapus Shot) provider serving Luton, St Albans & Hertfordshire.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
