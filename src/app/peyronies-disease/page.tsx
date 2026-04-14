import type { Metadata } from "next";
import PeyroniesClient from "@/components/pages/PeyroniesClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Peyronie's Disease Treatment St Albans | Non-Surgical Options",
  },
  
  description:
     "Private doctor-led consultation for Peyronie's Disease in St Albans. Non-surgical treatment options including Shockwave Therapy and P-Shot to address curvature and pain.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/peyronies-disease",
  },
  
  openGraph: {
    title: "Peyronie's Disease Treatment St Albans | Healing-PRP Clinics",
    description: "Doctor-led consultation for Peyronie's Disease in St Albans. Explore non-surgical treatment options including Shockwave Therapy and P-Shot.",
    url: "https://www.healing-prp.co.uk/peyronies-disease",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Peyronie's Disease Treatment Consultation St Albans",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Peyronie's Disease Treatment St Albans | Healing-PRP Clinics",
    description: "Private, doctor-led consultation for non-surgical Peyronie's Disease options in St Albans.",
    images: ["/hero_img.png"],
  },
};

// --- UNIQUE SEO RICH FAQS ---
const faqs = [
  {
    question: "How many sessions will I need?",
    answer:
      "A course of 6 or more shockwave sessions is commonly recommended, along with PRP treatments, tailored to curvature angle, plaque characteristics, pain, and erectile function.",
  },
  {
    question: "When should I start treatment?",
    answer:
      "Early intervention during the active phase can help with pain and may limit progression; we assess phase status during consultation.",
  },
  {
    question: "Is there downtime?",
    answer:
      "PRP (P-Shot) and LiSWT are outpatient treatments with minimal downtime. Most people resume normal activity the same day.",
  },
  {
    question: "Will it fully straighten my penis?",
    answer:
      "Responses vary. Many notice functional improvements and curvature reduction; complete straightening cannot be guaranteed. We'll discuss additional options if indicated.",
  },
];

// --- UPGRADED JSON-LD SCHEMA: Compliant & Corrected ---
const peyroniesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/peyronies-disease#clinic",
      "name": "Healing-PRP Clinics",
      "url": "https://www.healing-prp.co.uk/peyronies-disease",
      "description": "Doctor-led private clinic in St Albans providing non-surgical consultation and treatment options for Peyronie's Disease.",
      "telephone": "+447990364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "The Albany Centre",
        "addressLocality": "St Albans",
        "addressRegion": "Hertfordshire",
        "postalCode": "AL1 3PE",
        "addressCountry": "GB"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "St Albans"
        },
        {
          "@type": "City",
          "name": "Harpenden"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Hertfordshire"
        }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction#therapy"
        },
        {
          "@id": "https://www.healing-prp.co.uk/p-shot#therapy"
        }
      ],
      "employee": [
        { 
          "@id": "https://www.healing-prp.co.uk/peyronies-disease#dr" 
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/peyronies-disease#dr",
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
        "@id": "https://www.healing-prp.co.uk/peyronies-disease#clinic" 
      }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/peyronies-disease#condition",
      "name": "Peyronie's Disease",
      "alternateName": ["Penile Curvature", "Induratio penis plastica"],
      "url": "https://www.healing-prp.co.uk/peyronies-disease",
      "description": "A condition resulting from fibrous scar tissue that develops on the penis and causes curved, painful erections.",
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction#therapy" 
        },
        { 
          "@id": "https://www.healing-prp.co.uk/p-shot#therapy" 
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
      "name": "Peyronie's Disease Treatment",
      "item": "https://www.healing-prp.co.uk/peyronies-disease"
    }
  ]
};

export default function PeyroniesPage() {
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(peyroniesSchema) }}
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

      {/* 4. Render Client Component */}
      <PeyroniesClient
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
        faqs={faqs}
      />
    </main>
  );
}
