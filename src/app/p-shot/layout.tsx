import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    default: "P-Shot® Male Rejuvenation | St Albans Clinic",
  },
  description: "Official P-Shot® (Priapus Shot) provider serving Luton, St Albans & Hertfordshire.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
