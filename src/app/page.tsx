import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/Hero";
import ServiceOverview from "@/components/ServiceOverview";
import PRPExplanationSection from "@/components/PRPExplanationSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";

// --- SEO OPTIMISATION ---
export const metadata: Metadata = {
  // Title: Keywords + Location + Brand
  title: "Healing-PRP Clinics St Albans | Doctor-Led Hair, Joint & Sexual Health",
  
  // Description: A compelling pitch that includes primary keywords and catchment areas
  description:
    "Specialist private clinic in St Albans, Hertfordshire. Expert doctor-led treatments for PRP Hair Restoration, Joint Pain injections, P-Shot®, O-Shot® & Vampire Facials. Serving Watford, Harpenden & London.",
  
  // Keywords: Variations of what people search for
  keywords: [
    "PRP Clinic St Albans",
    "Private Doctor Hertfordshire",
    "Hair Loss Treatment St Albans",
    "Joint Injection Clinic",
    "P-Shot UK",
    "O-Shot UK",
    "Vampire Facial Hertfordshire",
    "Regenerative Medicine London",
    "Erectile Dysfunction Treatment St Albans",
  ],

  // OpenGraph: How your link looks when shared on WhatsApp/Facebook/LinkedIn
  openGraph: {
    title: "Healing-PRP Clinics | The Regenerative Medicine Specialists",
    description:
      "Doctor-led private care for Hair Restoration, Sexual Wellness & Pain Relief. Clinics in St Albans & Birmingham.",
    url: "https://www.healing-prp.co.uk",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "Doctor at Healing-PRP Clinics",
      },
    ],
  },
  
  // Twitter Card data
  twitter: {
    card: "summary_large_image",
    title: "Healing-PRP Clinics St Albans",
    description: "Doctor-led regenerative treatments for Hair, Joints & Sexual Health.",
    images: ["/hero_img.png"],
  },
  
  // Robots: Ensure Google knows to index this page
  robots: {
    index: true,
    follow: true,
  },
  
  // Canonical: Prevents duplicate content issues
  alternates: {
    canonical: "https://www.healing-prp.co.uk",
  },
};

export default function Home() {
  // JSON-LD Schema for Local SEO (Medical Clinic)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics St Albans",
    "image": "https://www.healing-prp.co.uk/logo.png",
    "url": "https://www.healing-prp.co.uk",
    "telephone": "+447990364147",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "St Albans",
      "addressRegion": "Hertfordshire",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.7527, 
      "longitude": -0.3394
    },
    "medicalSpecialty": ["Regenerative Medicine", "Dermatology", "Orthopedics"],
    "priceRange": "$$",
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
      {/* Inject Structured Data for Google */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <Hero />
        
        {/* Core Services Hub */}
        <ServiceOverview />
        
        {/* Educational Content */}
        <PRPExplanationSection />
        
        {/* Map & Reviews */}
        <LocationSection />
        
        {/* Trust & Answers */}
        <FAQSection />
        
        {/* Final Call to Action */}
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
