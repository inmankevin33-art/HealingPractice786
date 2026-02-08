import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "Erectile Dysfunction Treatment | Birmingham Clinic", // Fallback for other pages
  },
  description: "Non-surgical Erectile Dysfunction treatment serving Birmingham, Edgbaston & West Midlands.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
