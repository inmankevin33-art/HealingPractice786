import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Treatment Prices",
    template: "%s | Birmingham Clinic", // Automatically appends location to sub-pages
  },
  description: "Transparent pricing for doctor-led PRP, Joint Injections, and Sexual Health treatments in Birmingham.",
};

export default function BirminghamPricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* This wraps your Birmingham PricesClient */}
      {children}
    </>
  );
}
