import type { Metadata } from "next";
import ErectileDysfunctionClient from "@/components/pages/ErectileDysfunctionClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Doctor-Led Erectile Dysfunction (ED) Treatment | Birmingham",
  },

  description:
    "Specialist erectile dysfunction clinic in Birmingham. GMC-registered doctor offering non-surgical Shockwave Therapy & P-Shot (PRP). Confidential ED treatment in Edgbaston.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
  },

  openGraph: {
    title: "Doctor-Led Erectile Dysfunction Treatment | Birmingham & Midlands",
    description:
      "Confidential, doctor-led ED treatments in Birmingham. Shockwave & PRP therapy. Conveniently serving Edgbaston, Solihull & Sutton Coldfield.",
    url: "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/ed-doctor-consultation.webp",
        width: 1200,
        height: 630,
        alt: "Private ED Consultation Birmingham",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Doctor-Led Erectile Dysfunction Treatment | Birmingham",
    description: "Confidential, doctor-led ED treatments in Birmingham. Shockwave & PRP therapy in Edgbaston.",
    images: ["/ed-doctor-consultation.webp"],
  },
};

// --- SEO RICH FAQS (Birmingham & Midlands Focus) ---
const faqs = [
  {
    question: "What are the main treatments for Erectile Dysfunction at your Birmingham clinic?",
    answer: "At our Birmingham clinic in Edgbaston, we offer a comprehensive, doctor-led approach to ED. This includes advanced regenerative options like Low-Intensity Shockwave Therapy and the P-Shot (PRP), as well as prescribing personalised medication for ED treatment tailored to your specific cardiovascular and metabolic profile.",
  },
  {
    question: "Is Shockwave Therapy painful?",
    answer: "Most men visiting our West Midlands clinic find Shockwave Therapy very tolerable. You may feel a mild tapping sensation, but anaesthetic is not usually required. There is no downtime, allowing you to drive home to Solihull, Sutton Coldfield, or central Birmingham immediately after your session.",
  },
  {
    question: "How is this different from standard Viagra or Cialis?",
    answer: "Standard tablets only provide a temporary, symptom-based increase in blood flow. While we do prescribe personalised medication for ED treatment when appropriate, our core focus is on restorative therapies like Shockwave and PRP that aim to support long-term vascular function and tissue health.",
  },
  {
    question: "How quickly will I see results from ED treatments?",
    answer: "Tissue healing and vascular regeneration take time. While some men notice changes after just a few sessions, optimal improvements usually develop gradually in the weeks following your complete treatment course at our Birmingham clinic.",
  },
  {
    question: "Can I treat ED if I have diabetes or high blood pressure?",
    answer: "Yes. Erectile dysfunction related to diabetes or vascular issues is incredibly common. During your private consultation at our Edgbaston clinic, our doctor will thoroughly assess your cardiovascular health and may recommend a combination of regenerative therapy alongside personalised medication for ED treatment.",
  },
  {
    question: "Do I need a GP referral to visit your Birmingham ED clinic?",
    answer: "No GP referral is required. We offer direct access to discreet, strictly 1:1 private consultations with our GMC-registered doctors for men across Birmingham, Solihull, and the wider West Midlands area.",
  },
  {
    question: "Is this treatment suitable for everyone?",
    answer: "Suitability highly depends on the root cause of your erectile dysfunction, your overall health, and current medications. A thorough medical assessment at our Birmingham clinic ensures we recommend the safest and most effective protocol for your specific needs.",
  },
];

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic, Condition & Interconnected Therapies ---
const edSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#clinic",
      "name": "Healing-PRP Clinics Birmingham",
      "description": "Specialist erectile dysfunction clinic in Birmingham offering Shockwave Therapy, PRP, and personalised medication for ED treatment.",
      "telephone": "+44 7990 364147",
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
          "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#therapy"
        }
      ],
      "employee": [
        {
          "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#dr"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#dr",
      "name": "Dr Syed Abdi",
      "jobTitle": "Medical Director",
      "telephone": "+44 7990 364147",
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
        "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#clinic"
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#therapy",
      "name": "Erectile Dysfunction Treatment",
      "url": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
      "relevantSpecialty": "Urologic"
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#condition",
      "name": "Erectile Dysfunction",
      "alternateName": ["ED", "Impotence"],
      "url": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Penis"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalTherapy",
          "name": "Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT)",
          "url": "https://www.healing-prp.co.uk/birmingham/shockwave-therapy-erectile-dysfunction",
          "description": "Non-surgical acoustic wave therapy to improve blood flow and vascular health.",
          "relevantSpecialty": "Urologic"
        },
        {
          "@type": "MedicalTherapy",
          "name": "P-Shot (Priapus Shot)",
          "alternateName": "Platelet-Rich Plasma (PRP) for ED",
          "url": "https://www.healing-prp.co.uk/birmingham/p-shot",
          "description": "Regenerative injection therapy using the patient's own platelet-rich plasma to stimulate tissue repair.",
          "relevantSpecialty": "Urologic"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Personalised ED Medication",
          "url": "https://www.healing-prp.co.uk/birmingham/personalised-ed-medication",
          "description": "Bespoke pharmacological treatment plans tailored to the patient's specific cardiovascular and metabolic profile.",
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
      "name": "Birmingham Clinic",
      "item": "https://www.healing-prp.co.uk/birmingham"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Erectile Dysfunction Treatment",
      "item": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction"
    }
  ]
};

export default function BirminghamEDPage() {
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
      {/* 1. Inject Clinic & Therapy Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(edSchemaBirmingham) }}
      />
      
      {/* 2. Inject Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      {/* 3. Inject FAQ Schema (Safe due to unique local content) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />

      <ErectileDysfunctionClient 
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        pShotLink="/birmingham/p-shot"
        faqs={faqs}
      />
    </main>
  );
}
