import PenisFillerLandingClient from "@/components/PenisFillerLandingClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor Led Penis Filler Consultation Hampstead London",
  description: "Book your private girth enhancement consultation with Dr Syed Abdi in Hampstead.",
};

export default function HampsteadCampaignPage() {
  return (
    <PenisFillerLandingClient 
      locationName="Hampstead" 
      servingAreas="Camden • Highgate • Finchley • North London"
    />
  );
}
