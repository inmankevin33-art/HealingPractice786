import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatment Prices | Healing PRP",
  description:
    "Transparent, doctor-led pricing for PRP and regenerative treatments. View prices for skin, hair, sexual wellness and joint PRP.",
};

export default function PricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
