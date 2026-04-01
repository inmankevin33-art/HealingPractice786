import type { Metadata } from "next";
import PShotClient from "@/components/pages/PShotClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  // Absolute ignores parent layout templates to ensure precise local matching
  title: {
    absolute: "P-Shot (PRP) in Birmingham | Doctor-Led Priapus Shot | Edgbaston",
  },
  
  description:
    "Private, doctor-led consultation for PRP-based P-Shot options in Edgbaston, Birmingham. Suitability is assessed individually and outcomes vary.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/p-shot",
  },
  
  openGraph: {
    title: "Doctor-Led P-Shot Treatment (Priapus Shot) | Birmingham",
    description: "Doctor-led consultation for P-Shot options in Birmingham. Suitability is assessed individually and outcomes vary.",
    url: "https://www.healing-prp.co.uk/birmingham/p-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        // Relying on metadataBase in root layout to resolve this to an absolute URL
        url: "/p-shot-consultation.webp",
        width: 1200,
        height: 630,
        alt: "P-Shot Treatment Consultation Birmingham",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Doctor-Led P-Shot Treatment (Priapus Shot) | Birmingham",
    description: "Private, doctor-led consultation for PRP-based P-Shot options in Edgbaston, Birmingham. Suitability assessed; outcomes vary.",
    images: ["/p-shot-consultation.webp"],
  },
};

// --- SEO RICH FAQS (Birmingham & West Midlands Focus) ---
// NOTE: Kept for visual rendering in PShotClient, but removed from JSON-LD to prevent cross-page duplication penalty
const faqs = [
  {
    question: "What is the P-Shot and is it available in Birmingham?",
    answer: "Yes, the P-Shot (Priapus Shot) is available at our private Birmingham clinic. It is a doctor-led treatment using platelet-rich plasma (PRP), discussed during consultation for suitable men seeking support for erectile dysfunction, reduced firmness, or penile rejuvenation.",
  },
  {
    question: "Where can I get the P-Shot in Birmingham?",
    answer: "We offer private doctor-led P-Shot treatment in Birmingham, with consultation and treatment carried out in a discreet clinical setting. Our clinic welcomes patients from Edgbaston, Solihull, Sutton Coldfield, and the wider West Midlands.",
  },
  {
    question: "Is the P-Shot painful?",
    answer: "A local anaesthetic cream is applied before treatment to improve comfort. Most patients find the P-Shot well tolerated, although individual experience can vary.",
  },
  {
    question: "How long does the P-Shot appointment take?",
    answer: "A P-Shot appointment usually takes around 45 to 60 minutes. This includes the consultation, blood draw, PRP preparation, and treatment.",
  },
  {
    question: "Is there any downtime after the P-Shot?",
    answer: "Most men can return to normal daily activities shortly after their P-Shot appointment. You will be given personalised aftercare advice based on your treatment plan.",
  },
  {
    question: "Can the P-Shot be used for erectile dysfunction?",
    answer: "The P-Shot may be considered for some men with erectile dysfunction, depending on the underlying cause, severity of symptoms, and overall health. A private consultation is important to assess suitability and discuss whether PRP treatment is appropriate for you.",
  },
  {
    question: "Can the P-Shot help with Peyronie’s disease?",
    answer: "Some men ask about the P-Shot as part of treatment planning for Peyronie’s disease. Suitability depends on your symptoms, examination findings, and overall goals, so this is assessed individually during consultation.",
  },
  {
    question: "How long do P-Shot results last?",
    answer: "Results vary from person to person. Duration can depend on baseline vascular health, underlying medical conditions, lifestyle factors, and whether additional treatment sessions are recommended.",
  },
  {
    question: "Do I need a consultation before getting the P-Shot in Birmingham?",
    answer: "Yes. A private doctor-led consultation is required before P-Shot treatment in Birmingham to review your medical history, symptoms, and goals, and to assess whether the treatment is suitable for you.",
  },
];

// --- UPGRADED JSON-LD SCHEMA: Compliant & Corrected ---
const pShotSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/p-shot#clinic",
      "name": "Healing-PRP Clinics",
      "url": "https://www.healing-prp.co.uk/birmingham/p-shot",
      "description": "Doctor-led private clinic in Edgbaston, Birmingham providing PRP-based P-Shot consultation and related services.",
      "telephone": "+447990364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "38 Harborne Rd",
        "addressLocality": "Birmingham",
        "addressRegion": "West Midlands",
        "postalCode": "B15 3EB",
        "addressCountry": "GB"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Birmingham"
        },
        {
          "@type": "City",
          "name": "Edgbaston"
        },
        {
          "@type": "AdministrativeArea",
          "name": "West Midlands"
        }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/birmingham/p-shot#therapy"
        }
      ],
      "employee": [
        { 
          "@id": "https://www.healing-prp.co.uk/birmingham/p-shot#dr" 
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/birmingham/p-shot#dr",
      "name": "Dr Syed Abdi",
      "jobTitle": "Medical Director",
      "telephone": "+447990364147",
      "url": "https://www.healing-prp.co.uk/our-doctor",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "GMC Reference Number",
        "value": "6083294"
      },
      "sameAs": [
        "https://www.gmc-uk.org/registrants/6083294"
      ],
      "worksFor": { 
        "@id": "https://www.healing-prp.co.uk/birmingham/p-shot#clinic" 
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/birmingham/p-shot#therapy",
      "name": "P-Shot (Priapus Shot)",
      "alternateName": ["Priapus Shot", "P-Shot", "Platelet Rich Plasma P-Shot"],
      "url": "https://www.healing-prp.co.uk/birmingham/p-shot",
      "description": "Doctor-led consultation and PRP-based P-Shot procedure option in Birmingham. Suitability is assessed individually and outcomes vary.",
      "relevantSpecialty": "Urologic",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "price": "995",
        "url": "https://www.healing-prp.co.uk/birmingham/prices",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#condition",
      "name": "Erectile Dysfunction",
      "url": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/birmingham/p-shot#therapy" 
        }
      ]
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/peyronies-disease#condition",
      "name": "Peyronie's Disease",
      "url": "https://www.healing-prp.co.uk/peyronies-disease",
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/birmingham/p-shot#therapy" 
        }
      ]
    }
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
      "name": "Birmingham Clinic",
      "item": "https://www.healing-prp.co.uk/birmingham"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "P-Shot Treatment",
      "item": "https://www.healing-prp.co.uk/birmingham/p-shot"
    }
  ]
};

export default function BirminghamPShotPage() {
  return (
    <main>
      {/* 1. Inject Medical Entity Schema safely via plain script per Next.js best practices */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(pShotSchemaBirmingham) }}
      />
      
      {/* 2. Inject Breadcrumb Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      {/* 3. Render Client Component (Visual FAQs are passed down to be visible to humans) */}
      <PShotClient
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={faqs}
      />
    </main>
  );
}
