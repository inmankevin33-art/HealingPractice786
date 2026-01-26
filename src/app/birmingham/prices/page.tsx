import type { Metadata } from "next";
import PricesClient from "@/components/pages/PricesClient";

// SEO: Specific to Birmingham & West Midlands
export const metadata: Metadata = {
  title: "Clinic Prices & Packages", // Becomes "Clinic Prices & Packages | Birmingham Clinic"
  description: "View competitive pricing for P-Shot, O-Shot, and PRP therapy in Birmingham. Doctor-led treatments in Edgbaston, Solihull, and the West Midlands.",
  openGraph: {
    title: "Healing-PRP Clinics | Birmingham Price List",
    description: "Transparent pricing for specialist regenerative medicine in Birmingham. GMC-registered doctors.",
    url: "https://www.healing-prp.co.uk/birmingham/prices",
  },
};

export default function BirminghamPricesPage() {
  return <PricesClient isBirmingham={true} />;
}
