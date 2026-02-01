import ContactClient from "@/components/pages/ContactClient";
import { Metadata } from "next";

export const metadata = {
  title: "Erectile Dysfunction & P-Shot Clinic Birmingham | Contact Us",
  description: "Discreet medical treatment for Erectile Dysfunction (ED) in Birmingham. Book a private consultation for P-Shot® and regenerative wellness in Edgbaston.",
  keywords: [
    "Erectile Dysfunction treatment Birmingham",
    "ED clinic West Midlands",
    "P-Shot Birmingham",
    "Priapus Shot Edgbaston",
    "Men's sexual health Birmingham",
    "Shockwave therapy ED Birmingham",
    "Regenerative medicine for ED",
    "Private urology consultation Birmingham"
  ],
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/contact", 
  },
};

export default function BirminghamContactPage() {
  return <ContactClient />;
}
