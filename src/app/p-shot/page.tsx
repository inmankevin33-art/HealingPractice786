import type { Metadata } from "next";
import PShotClient from "@/components/pages/PShotClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "P-Shot (PRP) in St Albans | Doctor-Led Priapus Shot",
  },
  
  description:
    "Doctor-led P-Shot (Priapus Shot) PRP treatment in St Albans, serving Hertfordshire & Luton. Discreet consultation, realistic expectations, clear pricing. Book today.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/p-shot",
  },
  
  openGraph: {
    title: "P-Shot (PRP) in St Albans | Doctor-Led Priapus Shot",
    description: "Doctor-led consultation for P-Shot options in St Albans. Suitability is assessed individually and outcomes vary.",
    url: "https://www.healing-prp.co.uk/p-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        // Relying on metadataBase in root layout to resolve this to an absolute URL
        url: "/p-shot-consultation.webp",
        width: 1200,
        height: 630,
        alt: "P-Shot Treatment Consultation St Albans",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "P-Shot (PRP) in St Albans | Doctor-Led Priapus Shot",
    description: "Doctor-led consultation for P-Shot options in St Albans. Suitability assessed; outcomes vary.",
    images: ["/p-shot-consultation.webp"],
  },
};

// --- SEO RICH FAQS (St Albans & Hertfordshire Focus) ---
const faqs = [
  {
    question: "What is the P-Shot (Priapus Shot) and how does it work?",
    answer: "The P-Shot, available at our St Albans clinic, is a doctor-led regenerative treatment. It uses your body's own Platelet-Rich Plasma (PRP) to stimulate tissue repair, increase blood flow, and support enhanced sensitivity and erectile function.",
  },
  {
    question: "Is the P-Shot painful?",
    answer: "We prioritise patient comfort at our Hertfordshire clinic. A potent local anaesthetic cream is applied before the procedure, meaning most men find the P-Shot virtually painless and highly tolerable.",
  },
  {
    question: "How long does the P-Shot procedure take?",
    answer: "The entire appointment takes approximately 45 to 60 minutes. This includes a private medical consultation, blood draw, PRP preparation, and the treatment itself. You can return to your normal daily activities in Harpenden, Luton, or Watford immediately.",
  },
  {
    question: "When will I notice the effects of the P-Shot?",
    answer: "Because the P-Shot relies on natural tissue regeneration, results develop gradually. Some men report initial improvements within a few weeks, with optimal benefits in erectile quality and sensitivity typically appearing 8 to 12 weeks after treatment.",
  },
  {
    question: "Can the P-Shot help with Peyronie’s disease?",
    answer: "Yes, the regenerative properties of PRP can support tissue quality in certain cases of Peyronie’s disease. Our GMC-registered doctors provide comprehensive assessments in St Albans to determine if the P-Shot is the right approach for your specific symptoms.",
  },
  {
    question: "How long do the results of the P-Shot last?",
    answer: "Results vary depending on your age, baseline vascular health, and lifestyle. Many men experience sustained improvements for up to 12 to 18 months. We often discuss maintenance protocols and personalised medication for ED treatment alongside the P-Shot to maximise longevity.",
  },
  {
    question: "Is a consultation required before getting the P-Shot?",
    answer: "Yes. We require a thorough, discreet medical consultation at our St Albans clinic to review your medical history, discuss your goals, and ensure the P-Shot or other regenerative therapies are perfectly suited to your needs.",
  },
];

// --- UPGRADED JSON-LD SCHEMA: Compliant & Corrected ---
const pShotSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/p-shot#clinic",
      "name": "Healing-PRP Clinics St Albans",
      "url": "https://www.healing-prp.co.uk/p-shot",
      "description": "Doctor-led private clinic in St Albans providing PRP-based P-Shot consultation and related services.",
      "telephone": "+447990364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "21 Victoria St",
        "addressLocality": "St Albans",
        "addressRegion": "Hertfordshire",
        "postalCode": "AL1 3JJ",
        "addressCountry": "GB"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "St Albans"
        },
        {
          "@type": "City",
          "name": "Luton"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Hertfordshire"
        }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/p-shot#therapy"
        }
      ],
      "employee": [
        { 
          "@id": "https://www.healing-prp.co.uk/p-shot#dr" 
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/p-shot#dr",
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
        "@id": "https://www.healing-prp.co.uk/p-shot#clinic" 
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/p-shot#therapy",
      "name": "P-Shot (Priapus Shot)",
      "alternateName": ["Priapus Shot", "P-Shot", "Platelet Rich Plasma P-Shot"],
      "url": "https://www.healing-prp.co.uk/p-shot",
      "description": "Doctor-led consultation and PRP-based P-Shot procedure option in St Albans. Suitability is assessed individually and outcomes vary.",
      "relevantSpecialty": "Urologic",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "price": "995",
        "url": "https://www.healing-prp.co.uk/prices",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/erectile-dysfunction#condition",
      "name": "Erectile Dysfunction",
      "url": "https://www.healing-prp.co.uk/erectile-dysfunction",
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/p-shot#therapy" 
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
      "name": "P-Shot Treatment",
      "item": "https://www.healing-prp.co.uk/p-shot"
    }
  ]
};

export default function Page() {
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(pShotSchema) }}
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
      
      {/* 4. Render Client Component */}
      <PShotClient 
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
        faqs={faqs}
      />
    </main>
  );
}
