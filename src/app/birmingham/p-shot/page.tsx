import type { Metadata } from "next";
import PShotClient from "@/components/pages/PShotClient";

export const metadata: Metadata = {
  title: {
    // FIX: Strictly focused on Birmingham P-Shot for SEO
    absolute: "P-Shot Treatment Birmingham | Priapus Shot® | Healing-PRP",
  },
  
  description:
    "Official P-Shot® (Priapus Shot) clinic in Birmingham. GMC-registered doctor offering PRP therapy for erectile rejuvenation and performance. Private clinic in Edgbaston.",
  
  keywords: [
    // Core Service Keywords
    "P-Shot Birmingham",
    "Priapus Shot Birmingham",
    "PRP injection for ED Birmingham",
    "Male enhancement Birmingham",
    "Peyronies disease treatment Birmingham",
    
    // Hyper-Local Keywords
    "P-Shot clinic Edgbaston",
    "Private PRP clinic Solihull",
    "Mens health Sutton Coldfield",
    "Priapus Shot West Midlands",
    
    // Intent Keywords
    "P-Shot cost Birmingham",
    "GMC registered P-Shot doctor",
    "Non-surgical penile rejuvenation"
  ],
  
  alternates: {
    canonical: "https://healing-practice.co.uk/birmingham/p-shot",
  },
  
  openGraph: {
    title: "P-Shot Treatment (Priapus Shot) | Birmingham",
    description: "Doctor-led P-Shot clinic in Birmingham. PRP therapy for performance and rejuvenation.",
    url: "https://healing-practice.co.uk/birmingham/p-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/p-shot-consultation.webp", // Ensure you have a relevant image or use default
        width: 1200,
        height: 630,
        alt: "P-Shot Treatment Birmingham",
      },
    ],
  },
};

export default function BirminghamPShotPage() {
  return (
    <PShotClient
      // 1. DYNAMIC HEADING: "Healing-PRP Clinics, Birmingham"
      locationName="Birmingham"
      
      // 2. DYNAMIC BADGE: "Serving: Edgbaston • Solihull..."
      servingAreas="Edgbaston • Solihull • Sutton Coldfield"
    />
  );
}
