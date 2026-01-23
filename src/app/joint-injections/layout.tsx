import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Joint Injections in St Albans",
    template: "%s | Healing-PRP Clinics",
  },
  description:
    "PRP and steroid joint injections in St Albans by a GMC-registered doctor. Options for joint pain, arthritis, and sports injuries with clear pricing and tailored plans.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
