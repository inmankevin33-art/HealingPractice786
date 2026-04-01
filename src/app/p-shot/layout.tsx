import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    default: "St Albans Clinic",
  },
  description:
    "Doctor-led private clinic in St Albans serving patients across Hertfordshire, Luton, and Watford.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
