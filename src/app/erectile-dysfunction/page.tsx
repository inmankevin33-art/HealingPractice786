import type { Metadata } from "next";
import ErectileDysfunctionClient from "@/components/pages/ErectileDysfunctionClient";

export const metadata: Metadata = {
  title: {
    // FIX: Use 'absolute' to prevent layout conflicts and ensure exact SEO title
    absolute: "Erectile Dysfunction Treatment St Albans | Healing-PRP",
  },

  description:
    "Doctor-led Erectile Dysfunction (ED) clinic serving Luton & St Albans. We restore natural function using Shockwave Therapy and PRP (P-Shot®). Private, non-pharmaceutical ED solutions.",

  alternates: {
    // NOTE: Check if your domain is 'healing-prp.co.uk' or 'healing-practice.co.uk'
    canonical: "https://www.healing-prp.co.uk/erectile-dysfunction",
  },

  keywords: [
    // High-Priority Location Terms (Luton Focus)
    "Erectile dysfunction treatment Luton",
    "Private ED clinic Luton",
    "Shockwave therapy Luton",
    "Men's health clinic near Luton",
    "Impotence treatment Bedfordshire",
    
    // Core Clinical Terms (St Albans/Herts Base)
    "Erectile dysfunction treatment St Albans",
    "P-Shot for erectile dysfunction",
    "Vascular ED treatment",
    "Shockwave therapy Hertfordshire",
    "Non-surgical impotence cure",
    
    // Specific Long-Tail
    "Viagra alternative Luton",
    "Private ED doctor Harpenden",
    "Restorative sexual medicine",
    "Male performance clinic Watford",
    "Low intensity shockwave therapy London"
  ],

  openGraph: {
    title: "Erectile Dysfunction Treatment | Luton & St Albans",
    description:
      "Restore spontaneity and confidence. Doctor-led Shockwave & PRP therapy for ED. Conveniently serving Luton, St Albans, and Hertfordshire.",
    url: "https://www.healing-prp.co.uk/erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function Page() {
  return (
    <ErectileDysfunctionClient 
      // 1. HEADLINE: "Healing-PRP Clinics, St Albans & Luton"
      locationName="St Albans"
      
      // 2. BADGE: Local catchment areas
      servingAreas="St Albans • Luton • Harpenden • Hertfordshire"
      
      // 3. LINK: Points to your main P-Shot page (src/app/p-shot/page.tsx)
      pShotLink="/p-shot"
    />
  );
}
