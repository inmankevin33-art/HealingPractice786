import type { Metadata } from "next";
import PricesClient from "@/components/pages/PricesClient";

export const metadata: Metadata = {
  title: "Clinic Prices & Packages | Birmingham Clinic", 
  description: "View competitive pricing for P-Shot, O-Shot, and PRP therapy in Birmingham. Doctor-led treatments in Edgbaston, Solihull, and the West Midlands.",
  // ADDED CANONICAL TAG HERE
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/prices",
  },
  openGraph: {
    title: "Healing-PRP Clinics | Birmingham Price List",
    description: "Transparent pricing for specialist regenerative medicine in Birmingham. GMC-registered doctors.",
    url: "https://www.healing-prp.co.uk/birmingham/prices",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamPricesPage() {
  return <PricesClient isBirmingham={true} />;
}
