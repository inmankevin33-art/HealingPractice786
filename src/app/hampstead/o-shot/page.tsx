import type { Metadata } from "next";
import OShotClient from "@/components/pages/OShotClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  // Absolute ignores parent layout templates to ensure precise local matching
  title: {
    absolute: "Doctor-Led O-Shot Hampstead, London",
  },

  description:
    "Doctor-led O-Shot treatment Hampstead, London. Advanced PRP therapy to enhance sensitivity, natural lubrication, and intimate wellness. Book your private consultation.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/o-shot",
  },

  openGraph: {
    title: "Doctor-Led O-Shot Hampstead, London",
    description: "Enhance intimate wellness, sensitivity, and comfort with the O-Shot. Doctor-led PRP therapy serving patients in Hampstead and North West London.",
    url: "https://www.healing-prp.co.uk/hampstead/o-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/o-shot-consultation.webp",
        width: 1200,
        height: 630,
        alt: "O-Shot Treatment Consultation Hampstead, London",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "O-Shot Treatment Hampstead | Orgasm Shot Clinic London",
    description: "Private, doctor-led consultation for PRP-based O-Shot therapies in Hampstead and North West London.",
    images: ["/o-shot-consultation.webp"],
  },
};

// --- SEO RICH FAQS (Hampstead & London Focus) ---
const faqs = [
  {
    question: "What is the O-Shot (Orgasm Shot) and how does it work?",
    answer: "The O-Shot, available at our Hampstead clinic, is a doctor-led regenerative treatment for women. It uses your body's own Platelet-Rich Plasma (PRP) to stimulate tissue repair, increase blood flow, and support enhanced sensitivity and natural lubrication in the vaginal and clitoral areas.",
  },
  {
    question: "Is the O-Shot painful?",
    answer: "We prioritise patient comfort at our London clinic. A highly effective local anaesthetic cream is applied to the intimate area before the procedure, meaning most women find the O-Shot virtually painless and very tolerable.",
  },
  {
    question: "How long does the O-Shot procedure take?",
    answer: "The entire appointment takes approximately 45 to 60 minutes. This includes a private medical consultation, blood draw, PRP preparation, and the treatment itself. You can return to your normal daily activities in Belsize Park, Highgate, or across London immediately.",
  },
  {
    question: "When will I notice the effects of the O-Shot?",
    answer: "Because the O-Shot relies on natural tissue regeneration, results develop gradually. Some women report initial improvements in sensitivity and natural moisture within a few weeks, with optimal benefits typically appearing 8 to 12 weeks after treatment.",
  },
  {
    question: "Can the O-Shot help with urinary incontinence?",
    answer: "Yes, the regenerative properties of PRP can provide structural support to the anterior vaginal wall, which frequently helps alleviate symptoms of mild stress urinary incontinence. Our GMC-registered doctors provide comprehensive assessments in Hampstead to determine if the O-Shot is right for you.",
  },
  {
    question: "How long do O-Shot results last?",
    answer: "Results vary from person to person depending on age, hormonal health, baseline symptoms, and lifestyle factors. Many women experience improvements in sensitivity, sexual wellness, or urinary symptoms for around 12 to 18 months. At our Hampstead clinic, we can also discuss maintenance treatment where appropriate to help support longevity."
  },
  {
    question: "Is a consultation required before getting the O-Shot?",
    answer: "Yes. We require a thorough, discreet medical consultation at our Hampstead clinic to review your medical history, discuss your specific wellness goals, and ensure the O-Shot is a safe and suitable therapy for you.",
  },
];

// --- UPGRADED JSON-LD SCHEMA: Compliant & Corrected ---
const oShotSchemaHampstead = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/o-shot#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "url": "https://www.healing-prp.co.uk/hampstead/o-shot",
      "description": "Doctor-led private clinic in Hampstead, London providing the official O-Shot® (Orgasm Shot) and female intimate wellness therapies.",
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
      "medicalSpecialty": ["Gynecologic"],
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/hampstead/o-shot#therapy"
        }
      ],
      "employee": [
        { 
          "@id": "https://www.healing-prp.co.uk/hampstead/o-shot#dr" 
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/hampstead/o-shot#dr",
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
        "@id": "https://www.healing-prp.co.uk/hampstead/o-shot#clinic" 
      }
    },
    {
      "@type": ["MedicalTherapy", "MedicalProcedure"],
      "@id": "https://www.healing-prp.co.uk/hampstead/o-shot#therapy",
      "name": "O-Shot (Orgasm Shot)",
      "alternateName": ["Orgasm Shot", "O-Shot®", "Vaginal PRP Injection", "Platelet-Rich Plasma Female Rejuvenation"],
      "url": "https://www.healing-prp.co.uk/hampstead/o-shot",
      "description": "Doctor-led consultation and PRP-based O-Shot procedure option in Hampstead, London to support female intimate health, natural lubrication, urinary control, and sexual sensitivity.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Gynecologic"
      },
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
      "@id": "https://www.healing-prp.co.uk/hampstead/stress-urinary-incontinence#condition",
      "name": "Stress Urinary Incontinence",
      "alternateName": ["SUI", "Bladder Leakage"],
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/hampstead/o-shot#therapy" 
        }
      ]
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/hampstead/female-sexual-dysfunction#condition",
      "name": "Female Sexual Dysfunction",
      "alternateName": ["Vaginal Dryness", "Decreased Libido", "Dyspareunia"],
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/hampstead/o-shot#therapy" 
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
      "name": "O-Shot Treatment",
      "item": "https://www.healing-prp.co.uk/hampstead/o-shot"
    }
  ]
};

export default function HampsteadOShotPage() {
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
      {/* 1. Inject Medical Entity Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(oShotSchemaHampstead) }}
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

      {/* 4. Render Client Component with Hampstead Props */}
      <OShotClient 
        locationName="Hampstead"
        servingAreas="Hampstead • Belsize Park • West Hampstead • North West London"
        faqs={faqs} 
      />
    </main>
  );
}
