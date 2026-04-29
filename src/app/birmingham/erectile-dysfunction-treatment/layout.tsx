import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Doctor-Led Clinic",
    default: "Erectile Dysfunction Treatment Birmingham",
  },
  description:
    "Discreet, doctor-led erectile dysfunction treatment in Birmingham. We offer advanced non-surgical options including Shockwave Therapy and Plasma Shots.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
