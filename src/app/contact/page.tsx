import ContactClient from "@/components/pages/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erectile Dysfunction (ED) & P-Shot Clinic St Albans | Near Luton",
  description: "Private medical treatment for Erectile Dysfunction (ED) and P-Shot® in St Albans. Expert regenerative care serving patients from Luton, Dunstable, and Hertfordshire.",
  keywords: [
    "Erectile Dysfunction treatment Luton",
    "P-Shot clinic Bedfordshire",
    "ED treatment Hertfordshire",
    "Erectile Dysfunction clinic St Albans",
    "Men's sexual health Luton",
    "Priapus Shot St Albans",
    "Private ED clinic Hertfordshire",
    "Regenerative medicine St Albans",
    "GMC registered doctor Luton",
    "P-Shot Luton"
  ],
  alternates: {
    canonical: "https://healing-prp.co.uk/contact", 
  },
};

export default function Page() {
  return <ContactClient />;
}
