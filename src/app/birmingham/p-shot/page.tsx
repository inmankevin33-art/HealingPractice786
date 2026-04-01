import type { Metadata } from "next";
import PShotClient from "@/components/pages/PShotClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  // Absolute ignores parent layout templates to ensure precise local matching
  title: {
    absolute: "P-Shot Birmingham | Doctor-Led Priapus Shot in Edgbaston",
  },
  
  description:
     "Private doctor-led P-Shot consultation in Edgbaston, Birmingham. PRP-based treatment options discussed for suitable men. Consultation required. Outcomes vary.",
  
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

// --- UNIQUE SEO RICH FAQS (Birmingham & West Midlands Focus) ---
// Safely marked up with JSON-LD below since these are unique to the Birmingham clinic
const faqs = [
  {
    question: "Where exactly is your Birmingham P-Shot clinic located, and is parking discreet?",
    answer: "Our clinic is located at 38 Harborne Rd in Edgbaston (B15 3EB). We offer a highly discreet, private setting with accessible parking nearby, ensuring your visit from anywhere in the West Midlands is stress-free and confidential.",
  },
  {
    question: "Who administers the P-Shot at the Edgbaston clinic?",
    answer: "All P-Shot consultations and treatments in Birmingham are personally conducted by our Medical Director, Dr. Syed Abdi. He is a GMC-registered doctor with experience in private regenerative and sexual health treatments.",
  },
  {
    question: "How quickly can I get a consultation in Birmingham?",
    answer: "We strive to accommodate our West Midlands patients as efficiently as possible. We often have same-week availability for private P-Shot assessments at our Edgbaston clinic. Please call our direct line to secure the earliest slot.",
  },
  {
    question: "Can I drive home to Solihull or Sutton Coldfield immediately after the procedure?",
    answer: "Yes. Because the P-Shot only requires a topical local anaesthetic cream (no general sedation or gas), you are perfectly safe to drive yourself home anywhere in the Birmingham area immediately following your appointment.",
  }
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(pShotSchemaBirmingham) }}
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
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={faqs}
      />
    </main>
  );
}
