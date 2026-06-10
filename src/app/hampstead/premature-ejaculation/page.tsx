import type { Metadata } from "next";
import PrematureEjaculationClient from "@/components/pages/PrematureEjaculationClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  // Absolute ignores parent layout templates to ensure precise local matching
  title: {
    absolute: "Premature Ejaculation Treatment Hampstead, London",
  },

  description:
    "Doctor-led Premature Ejaculation (PE) treatment in Hampstead, London. Advanced formulations, bespoke medication, and behavioural therapies to restore confidence.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/premature-ejaculation",
  },

  openGraph: {
    title: "Premature Ejaculation Treatment Hampstead, London | Clinic",
    description:
      "Expert medical care for Premature Ejaculation. Custom formulations and doctor-led therapies at our private Hampstead clinic in North West London.",
    url: "https://www.healing-prp.co.uk/hampstead/premature-ejaculation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/ed-doctor-consultation.webp",
        width: 1200,
        height: 630,
        alt: "Premature Ejaculation Treatment Hampstead",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Premature Ejaculation Treatment Hampstead | London Clinic",
    description: "Expert Premature Ejaculation treatment in Hampstead, London. Doctor-led formulations and therapies to regain control.",
    images: ["/ed-doctor-consultation.webp"],
  },
};

// --- UNIQUE SEO RICH FAQS (Hampstead & London Focus) ---
const faqs = [
  {
    question: "Where is your London clinic for Premature Ejaculation treatment located?",
    answer: "Our private clinic is located at 2 Hampstead High St, London (NW3 1PR). We offer a highly discreet setting, easily accessible for patients across North West London including Belsize Park and West Hampstead.",
  },
  {
    question: "Who will conduct my consultation in Hampstead?",
    answer: "All consultations and treatments at our Hampstead clinic are personally led by our Medical Director, Dr Syed Abdi, a GMC-registered doctor with extensive experience in intimate health.",
  },
  {
    question: "What treatments do you offer for Premature Ejaculation?",
    answer: "We focus on a comprehensive, patient-centred approach. Depending on your assessment, treatment may involve custom numbing creams, bespoke oral medication regimens, behavioural coaching, and pelvic floor strengthening.",
  },
  {
    question: "Can this be treated alongside Erectile Dysfunction?",
    answer: "Absolutely. Premature Ejaculation and Erectile Dysfunction frequently co-exist. During your consultation, our doctor will assess the root causes of both and can prescribe a combined, holistic management plan.",
  }
];

// --- UPGRADED JSON-LD SCHEMA: Compliant & Corrected ---
const peSchemaHampstead = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/premature-ejaculation#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "url": "https://www.healing-prp.co.uk/hampstead/premature-ejaculation",
      "description": "Doctor-led private clinic in Hampstead, London providing consultation and targeted treatment plans for Premature Ejaculation.",
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
        },
        {
          "@type": "City",
          "name": "Belsize Park"
        }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/hampstead/premature-ejaculation#therapy"
        }
      ],
      "employee": [
        { 
          "@id": "https://www.healing-prp.co.uk/hampstead/premature-ejaculation#dr" 
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/hampstead/premature-ejaculation#dr",
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
        "@id": "https://www.healing-prp.co.uk/hampstead/premature-ejaculation#clinic" 
      }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/hampstead/premature-ejaculation#condition",
      "name": "Premature Ejaculation",
      "alternateName": ["PE", "Rapid Ejaculation"],
      "url": "https://www.healing-prp.co.uk/hampstead/premature-ejaculation",
      "description": "A condition characterized by reaching climax sooner than desired, often leading to performance anxiety and relationship strain.",
      "possibleTreatment": [
        { 
          "@type": "MedicalTherapy",
          "@id": "https://www.healing-prp.co.uk/hampstead/premature-ejaculation#therapy",
          "name": "Premature Ejaculation Management Protocol",
          "description": "Doctor-prescribed topical creams, custom oral medication, and behavioural coaching designed to delay climax.",
          "relevantSpecialty": "Urologic"
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
      "name": "Premature Ejaculation Treatment",
      "item": "https://www.healing-prp.co.uk/hampstead/premature-ejaculation"
    }
  ]
};

export default function HampsteadPrematureEjaculationPage() {
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
      {/* 1. Inject Medical Entity Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(peSchemaHampstead) }}
      />
      
      {/* 2. Inject Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      {/* 3. Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />

      {/* 4. Render Client Component with Hampstead props */}
      <PrematureEjaculationClient
        locationName="Hampstead"
        servingAreas="Hampstead • Belsize Park • West Hampstead • North West London"
        faqs={faqs}
      />
    </main>
  );
}
