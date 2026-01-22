import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatment Prices in Birmingham | Healing-PRP Clinics",
  description:
    "Transparent prices for PRP, facial aesthetics, hair restoration, joint injections and sexual rejuvenation in Birmingham. Doctor-led, private care.",
};

export default function PricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
