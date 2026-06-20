import PenisFillerLandingClient from "@/components/pages/PenisFillerLandingClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Penis Filler Consultation Hampstead, London | Healing-PRP Clinics"
  },
  description: "Book your private girth enhancement consultation with Dr Syed Abdi at our Hampstead, London clinic.",
};

export default function HampsteadCampaignPage() {
  return (
    <PenisFillerLandingClient 
      locationName="Hampstead, London" 
      servingAreas="Hampstead • Camden • Highgate • North London"
    />
  );
}
