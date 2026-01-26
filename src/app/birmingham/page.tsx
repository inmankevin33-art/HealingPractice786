import type { Metadata } from "next";
import BirminghamHomeClient from "@/components/pages/BirminghamHomeClient";

export const metadata: Metadata = {
  // REDUCED TITLE: The layout will now add " | Birmingham Clinic" automatically
  title: "Healing-PRP Clinics", 
  description:
    "Leading private clinic in Birmingham for PRP Hair Restoration, Joint Injections & Sexual Rejuvenation. Specialist Erectile Dysfunction (ED) solutions and P-Shot® therapy. Doctor-led care serving Birmingham, Solihull & Sutton Coldfield.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham",
  },
  keywords: [
    "PRP Clinic Birmingham",
    "Private Doctor Birmingham",
    "Regenerative Medicine Birmingham",
    "Hair Loss Treatment Birmingham",
    "Joint Pain Clinic Birmingham",
    "P-Shot Birmingham",
    "Erectile Dysfunction treatment Birmingham", 
    "ED clinic West Midlands",                    
    "PRP therapy Solihull",                      
    "Joint injections Sutton Coldfield",         
    "Hair restoration Wolverhampton",             
    "Vampire Facial Dudley",                     
  ],
  openGraph: {
    title: "Healing-PRP Clinics | Birmingham Location",
    description:
      "Doctor-led regenerative treatments and Erectile Dysfunction (ED) solutions in Birmingham. Serving Solihull, Sutton Coldfield & West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamPage() {
  return <BirminghamHomeClient />;
}
