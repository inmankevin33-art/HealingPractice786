import type { Metadata } from "next";
import { ReactNode } from "react"; // <--- This import is required!

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    default: "Erectile Dysfunction Treatment | St Albans Clinic",
  },
  description: "Non-surgical Erectile Dysfunction treatment serving Luton, St Albans & Hertfordshire.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
