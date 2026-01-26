import type { Metadata } from "next";
import PricesClient from "@/components/pages/PricesClient";

// SEO: Specific to St Albans & Hertfordshire
export const metadata: Metadata = {
  title: "Treatment Prices | PRP, Hair & Joint Injections",
  description: "Transparent, doctor-led pricing for PRP Hair Restoration, Joint Pain Injections, and Sexual Rejuvenation in St Albans. No hidden costs. Serving Hertfordshire.",
  openGraph: {
    title: "Healing-PRP Clinics | St Albans Price List",
    description: "View our full price list for regenerative medical treatments. Specialist care by GMC-registered doctors.",
    url: "https://www.healing-prp.co.uk/prices",
  },
};

export default function PricesPage() {
  return <PricesClient isBirmingham={false} />;
}
