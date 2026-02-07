import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    default: "Erectile Dysfunction Treatment | St Albans Clinic",
  },
  description: "Non-surgical Erectile Dysfunction treatment serving Luton, St Albans & Hertfordshire.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
