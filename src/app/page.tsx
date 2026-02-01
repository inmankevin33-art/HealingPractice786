import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/Hero";
import ServiceOverview from "@/components/ServiceOverview";
import PRPExplanationSection from "@/components/PRPExplanationSection";
import FAQSection from "@/components/FAQSection";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";

// --- SEO OPTIMISATION ---
export const metadata: Metadata = {
  // 1. Optimized Title: The Root Layout template appends "| Healing-PRP Clinics"
  title: "Doctor-Led PRP & ED Treatments St Albans",
  
  description:
    "Private specialist clinic in St Albans. Expert doctor-led treatments for PRP Hair Restoration, Joint Pain injections, P-Shot®, O-Shot® & ED solutions. Serving Hertfordshire, London, Watford & Harpenden.",
  
  keywords: [
    "PRP Clinic St Albans",
    "Private Doctor Hertfordshire",
    "Regenerative Medicine UK",
    "Erectile Dysfunction Treatment St Albans",
    "ED clinic Hertfordshire",
    "P-Shot London",
    "P-Shot Watford",
    "Erectile dysfunction help Harpenden",
    "O-Shot treatment Radlett",
    "Sexual health clinic St Albans",
    "Hair Loss Treatment St Albans",
    "Joint Injection Clinic Hemel Hempstead",
    "Vampire Facial Hertfordshire",
    "Arthritis injections Berkhamsted",
    "Sports injury clinic Watford",
  ],

  openGraph: {
    title: "Healing-PRP Clinics | St Albans & Birmingham",
    description:
      "Doctor-led private care for Hair Restoration, Sexual Wellness & Pain Relief. Specialists in P-Shot and PRP therapy.",
    url: "https://www.healing-prp.co.uk",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Healing-PRP Clinics - Regenerative Medicine Specialists",
      },
    ],
  },
  
  // FIXED CANONICAL LOGIC FOR MAIN HOME PAGE
  alternates: {
    canonical: "https://www.healing-prp.co.uk",
  },
};

export default function Home() {
  // Enhanced JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics",
    "alternateName": "Healing-PRP St Albans",
    "image": "https://www.healing-prp.co.uk/hero_img.png",
    "url": "https://www.healing-prp.co.uk",
    "telephone": "+447990364147",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "St Albans",
      "addressRegion": "Hertfordshire",
      "postalCode": "AL1", 
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.7527, 
      "longitude": -0.3394
    },
    "medicalSpecialty": ["RegenerativeMedicine", "Urology", "Orthopaedic", "Dermatology"],
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ]
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <Hero />
        <ServiceOverview />
        <PRPExplanationSection />
        <FAQSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
