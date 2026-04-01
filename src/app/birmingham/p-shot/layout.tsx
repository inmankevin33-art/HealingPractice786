import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "Birmingham Clinic",
  },
  description:
    "Doctor-led private clinic in Edgbaston, Birmingham serving patients across the West Midlands.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
