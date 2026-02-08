import type { Metadata } from "next";
import ErectileDysfunctionClient from "@/components/pages/ErectileDysfunctionClient";

export const metadata: Metadata = {
  title: {
    // FIX: Strictly focused on Birmingham for the browser tab
    absolute: "Erectile Dysfunction Treatment Birmingham | Healing-PRP",
  },
  
  description:
    "Specialist erectile dysfunction clinic in Birmingham. GMC-registered doctor offering non-surgical Shockwave Therapy & P-Shot (PRP). Confidential ED treatment in Edgbaston.",
  
  // KEYWORDS: Manchester & Midlands are hidden here for Google ranking
  keywords: [
    // Core Birmingham Keywords
    "Erectile dysfunction treatment Birmingham",
    "ED clinic Birmingham",
    "P-Shot Birmingham",
    "Shockwave therapy Birmingham",
    
    // Hidden Reach Keywords (Manchester / Midlands)
    "Mens health clinic Manchester",
    "ED treatment Manchester",
    "Erectile dysfunction clinic Midlands",
    "Shockwave therapy West Midlands",
    
    // Hyper-Local Keywords
    "Private ED clinic Edgbaston",
    "Erectile dysfunction clinic Solihull",
    "ED treatment Sutton Coldfield",
    
    // Intent Keywords
    "Non-surgical impotence treatment",
    "GMC registered male health doctor",
  ],
  
  alternates: {
    canonical: "https://healing-practice.co.uk/birmingham/erectile-dysfunction",
  },
  
  openGraph: {
    title: "Erectile Dysfunction Treatment | Birmingham",
    description: "Confidential, doctor-led ED treatments in Birmingham. Shockwave & PRP therapy.",
    url: "https://healing-practice.co.uk/birmingham/erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/ed-doctor-consultation.webp",
        width: 1200,
        height: 630,
        alt: "Private ED Consultation Birmingham",
      },
    ],
  },
};

export default function BirminghamEDPage() {
  return (
    <ErectileDysfunctionClient
      locationName="Birmingham"
      servingAreas="Edgbaston • Solihull • Sutton Coldfield"
      
      // VERIFIED: Correct link to 'src/app/birmingham/p-shot/page.tsx'
      pShotLink="/birmingham/p-shot"
    />
  );
}
