import type { Metadata } from "next";
import PShotClient from "@/components/pages/PShotClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  // Absolute ignores parent layout templates to ensure precise local matching
  title: {
    absolute: "P-Shot Hampstead, London | Priapus Shot & ED Treatment",
  },
  
  description:
     "Private doctor-led P-Shot (Priapus Shot) consultation in Hampstead, North West London. PRP-based treatment to support Erectile Dysfunction (ED) and sexual performance. Outcomes vary.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/p-shot",
  },
  
  openGraph: {
    title: "P-Shot Treatment Hampstead, London | ED Clinic",
    description: "Doctor-led consultation for P-Shot options in Hampstead, London. Autologous PRP therapy for Erectile Dysfunction (ED) and sexual performance.",
    url: "https://www.healing-prp.co.uk/hampstead/p-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        // Relying on metadataBase in root layout to resolve this to an absolute URL
        url: "/p-shot-consultation.webp",
        width: 1200,
        height: 630,
        alt: "P-Shot Treatment Consultation Hampstead, London",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "P-Shot Treatment Hampstead, London | ED Clinic",
    description: "Private, doctor-led consultation for PRP-based P-Shot options in Hampstead, North West London to support Erectile Dysfunction (ED).",
    images: ["/p-shot-consultation.webp"],
  },
};

// --- UNIQUE SEO RICH FAQS (Hampstead & North West London Focus) ---
// Safely marked up with JSON-LD below since these are unique to the Hampstead clinic
const faqs = [
  {
    question: "Where exactly is your London P-Shot clinic located?",
    answer: "Our London clinic is located in Hampstead, providing a highly discreet and private medical setting. It is easily accessible for patients travelling from Belsize Park, West Hampstead, Highgate, Golders Green, St John's Wood, and across North West London.",
  },
  {
    question: "Who administers the P-Shot at the Hampstead clinic?",
    answer: "All P-Shot consultations and treatments in Hampstead are personally conducted by our Medical Director, Dr. Syed Abdi. He is a GMC-registered doctor with extensive experience in private regenerative and sexual health treatments.",
  },
  {
    question: "How quickly can I get a consultation in North West London?",
    answer: "We strive to accommodate our London patients as efficiently as possible. We often have same-week availability for private P-Shot assessments at our Hampstead clinic. Please use our booking portal or call our direct line to secure the earliest slot.",
  },
  {
    question: "Can I take public transport or drive home immediately after the procedure?",
    answer: "Yes. Because the P-Shot only requires a topical local anaesthetic cream (no general sedation or gas), you are perfectly safe to drive or use the London Underground network to travel home immediately following your appointment.",
  }
];

// --- UPGRADED JSON-LD SCHEMA: Compliant & Corrected ---
const pShotSchemaHampstead = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/p-shot#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "url": "https://www.healing-prp.co.uk/hampstead/p-shot",
      "description": "Doctor-led private clinic in Hampstead, North West London providing PRP-based P-Shot consultation and related services for Erectile Dysfunction.",
      "telephone": "+447990364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2 Hampstead High St",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "NW3 1PR",
        "addressCountry": "GB"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "London"
        },
        {
          "@type": "City",
          "name": "Hampstead"
        },
        {
          "@type": "City",
          "name": "North West London"
        }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/hampstead/p-shot#therapy"
        }
      ],
      "employee": [
        { 
          "@id": "https://www.healing-prp.co.uk/hampstead/p-shot#dr" 
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/hampstead/p-shot#dr",
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
        "@id": "https://www.healing-prp.co.uk/hampstead/p-shot#clinic" 
      }
    },
    {
      "@type": ["MedicalTherapy", "MedicalProcedure"],
      "@id": "https://www.healing-prp.co.uk/hampstead/p-shot#therapy",
      "name": "P-Shot (Priapus Shot)",
      "alternateName": ["Priapus Shot", "P-Shot", "Platelet Rich Plasma P-Shot", "ED Injection"],
      "url": "https://www.healing-prp.co.uk/hampstead/p-shot",
      "description": "Doctor-led consultation and PRP-based P-Shot procedure option in Hampstead, London to support Erectile Dysfunction (ED) and tissue health.",
      "relevantSpecialty": "Urologic",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "price": "995",
        "url": "https://www.healing-prp.co.uk/hampstead/prices",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction#condition",
      "name": "Erectile Dysfunction",
      "alternateName": ["ED", "Impotence"],
      "url": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction",
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/hampstead/p-shot#therapy" 
        }
      ]
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/hampstead/peyronies-disease#condition",
      "name": "Peyronie's Disease",
      "url": "https://www.healing-prp.co.uk/hampstead/peyronies-disease",
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/hampstead/p-shot#therapy" 
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
      "name": "Hampstead Clinic",
      "item": "https://www.healing-prp.co.uk/hampstead"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "P-Shot Treatment",
      "item": "https://www.healing-prp.co.uk/hampstead/p-shot"
    }
  ]
};

export default function HampsteadPShotPage() {
  // --- GENERATE JSON-LD SCHEMA FOR FAQS ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <main>
      {/* 1. Inject Medical Entity Schema safely via plain script per Next.js best practices */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(pShotSchemaHampstead) }}
      />
      
      {/* 2. Inject Breadcrumb Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      {/* 3. Inject FAQ Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />

      {/* 4. Render Client Component (Visual FAQs are passed down to be visible to humans) */}
      <PShotClient
        locationName="Hampstead"
        servingAreas="Hampstead • Belsize Park • West Hampstead • North West London"
        faqs={faqs}
      />
    </main>
  );
}
