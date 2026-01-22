import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatment Prices in St Albans | Healing-PRP Clinics",
  description:
    "Clear, transparent pricing for doctor-led regenerative treatments available at our St Albans clinic, serving patients across Hertfordshire.",
};

export default function PricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
