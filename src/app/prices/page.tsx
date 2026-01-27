import type { Metadata } from "next";
import PricesClient from "@/components/pages/PricesClient";

export const metadata: Metadata = {
  // 1. Optimized Title: Clean and ready for the Layout Template
  title: "Treatment Prices & Packages",
  
  description: "Transparent, doctor-led pricing for PRP Hair Restoration, Joint Pain Injections, and Sexual Rejuvenation in St Albans. No hidden costs. Serving Hertfordshire.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/prices",
  },

  // 2. Expanded Local & Pricing Keywords
  keywords: [
    "PRP treatment cost St Albans",
    "Hair restoration prices Hertfordshire",
    "Joint injection cost Harpenden",
    "P-Shot price Watford",
    "O-Shot cost Radlett",
    "Vampire Facial price list St Albans",
    "Private doctor consultation fees",
    "Polynucleotide treatment cost Hemel Hempstead",
    "Affordable PRP therapy North London",
    "Regenerative medicine prices Berkhamsted"
  ],

  openGraph: {
    title: "Healing-PRP Clinics | St Albans Price List",
    description: "View our full price list for regenerative medical treatments. Specialist care by GMC-registered doctors in St Albans and Hertfordshire.",
    url: "https://www.healing-prp.co.uk/prices",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function PricesPage() {
  // We pass isBirmingham={false} to ensure the St Albans specific 
  // pricing or address info is displayed.
  return <PricesClient isBirmingham={false} />;
}
