import type { Metadata } from "next";
import OurDoctorClient from "@/components/pages/OurDoctorClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Dr Syed Abdi | GP & Medical Director | Healing-PRP Clinics",
  },
  description:
    "Meet Dr Syed Abdi, GMC-registered GP and Medical Director of Healing-PRP Clinics, with experience in regenerative medicine and intimate health.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/our-doctor",
  },
  openGraph: {
    title: "Dr Syed Abdi | GP & Medical Director | Healing-PRP Clinics",
    description:
      "Meet Dr Syed Abdi, GMC-registered GP and Medical Director of Healing-PRP Clinics, with experience in regenerative medicine and intimate health.",
    url: "https://www.healing-prp.co.uk/our-doctor",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "profile",
    images: [
      {
        url: "/DrAbdi.webp",
        width: 800,
        height: 800,
        alt: "Dr Syed Abdi - Medical Director of Healing-PRP Clinics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Syed Abdi | GP & Medical Director",
    description:
      "GMC-registered GP and Medical Director of Healing-PRP Clinics, with experience in regenerative medicine and intimate health.",
    images: ["/DrAbdi.webp"],
  },
};

// --- E-E-A-T DOCTOR PROFILE SCHEMA ---
const doctorSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://www.healing-prp.co.uk/our-doctor#dr-syed-abdi",
  "name": "Dr Syed Abdi",
  "jobTitle": "Medical Director",
  "medicalSpecialty": ["Intimate Health", "Regenerative Medicine", "General Practice", "Orthopaedics"],
  "identifier": [
    {
      "@type": "PropertyValue",
      "propertyID": "GMC Registration Number",
      "value": "6083294"
    }
  ],
  "sameAs": [
    "https://www.gmc-uk.org/registrants/6083294",
    "https://www.linkedin.com/in/syed-abdi-056b28b9"
  ],
  "worksFor": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics",
      "url": "https://www.healing-prp.co.uk"
    },
    {
      "@type": "Hospital",
      "name": "East & North Herts NHS Trust"
    }
  ],
  "knowsAbout": [
    "Erectile Dysfunction", 
    "Peyronie's Disease",
    "Penis Filler",
    "Vaginal Dryness",
    "PRP Joint Injections", 
    "Medical Ozone Therapy", 
    "Shockwave Therapy", 
    "Hair Restoration"
  ]
};

// --- BREADCRUMB SCHEMA ---
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.healing-prp.co.uk/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Our Doctor",
      "item": "https://www.healing-prp.co.uk/our-doctor"
    }
  ]
};

export default function OurDoctorPage() {
  return (
    <main>
      {/* 1. Inject Profile Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(doctorSchema) }}
      />

      {/* 2. Inject Breadcrumb Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      
      {/* 3. Render Client Component */}
      <OurDoctorClient />
    </main>
  );
}
