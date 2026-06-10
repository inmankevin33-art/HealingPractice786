import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampstead Clinic",
    default: "Doctor-Led Sexual Rejuvenation | Hampstead Clinic",
  },
  description: "Private doctor-led sexual rejuvenation clinic serving Hampstead, Belsize Park, West Hampstead & North West London.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
