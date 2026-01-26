import type { Metadata } from "next";
import BirminghamHomeClient from "@/components/pages/BirminghamHomeClient";

export const metadata: Metadata = {
  title: "Healing-PRP Clinics Birmingham | Private Doctor-Led Clinic",
  description:
    "Leading private clinic in Birmingham for PRP Hair Restoration, Joint Injections & Sexual Rejuvenation. Serving Solihull, Sutton Coldfield, West Bromwich & Dudley.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham",
  },
  keywords: [
    "PRP Clinic Birmingham",
    "Private Doctor Edgbaston",
    "Regenerative Medicine West Midlands",
    "Hair Loss Treatment Solihull",
    "Joint Pain Clinic Sutton Coldfield",
    "P-Shot Wolverhampton",
    "Erectile Dysfunction treatment Stourbridge", 
    "ED clinic Halesowen",                    
    "PRP therapy Bromsgrove",                      
    "Joint injections Walsall",         
    "Hair restoration West Bromwich",             
    "Vampire Facial Dudley",
    "Sports injury clinic Harborne",
    "Arthritis treatment Moseley",                   
  ],
  openGraph: {
    title: "Healing-PRP Clinics | Birmingham & West Midlands",
    description:
      "Doctor-led regenerative treatments in Birmingham. Serving patients across Solihull, Sutton Coldfield, and the wider West Midlands area.",
    url: "https://www.healing-prp.co.uk/birmingham",
    siteName: "Healing-PRP Clinics Birmingham",
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamPage() {
  return <BirminghamHomeClient />;
}
