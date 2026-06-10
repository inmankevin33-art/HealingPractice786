import type { Metadata } from "next";
import ErectileDysfunctionClient from "@/components/pages/ErectileDysfunctionClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Doctor-Led Erectile Dysfunction Treatment Hampstead, London",
  },
  description:
    "Doctor-led Erectile Dysfunction (ED) clinic in Hampstead, North West London. We restore natural function using Shockwave Therapy and PRP (P-Shot). Private, non-pharmaceutical ED solutions.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction",
  },

  openGraph: {
    title: "Doctor-Led Erectile Dysfunction Treatment Hampstead | Healing-PRP Clinics",
    description:
      "Restore spontaneity and confidence. Doctor-led Shockwave & PRP therapy for ED. Conveniently serving Hampstead, Belsize Park, and North West London.",
    url: "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/ed-doctor-consultation.webp",
        width: 1200,
        height: 630,
        alt: "Private ED Consultation Hampstead",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Doctor-Led Erectile Dysfunction Treatment Hampstead",
    description: "Restore spontaneity and confidence. Doctor-led Shockwave & PRP therapy for ED in Hampstead, London.",
    images: ["/ed-doctor-consultation.webp"],
  },
};

// --- SEO RICH FAQS (Hampstead & North West London Focus) ---
const faqs = [
  {
    question: "What are the main treatments for Erectile Dysfunction at your Hampstead clinic?",
    answer: "At our Hampstead clinic, we offer a comprehensive, doctor-led approach to ED. This includes advanced regenerative options like Low-Intensity Shockwave Therapy and the P-Shot (PRP), as well as prescribing personalised medication for ED treatment tailored to your specific cardiovascular and metabolic profile.",
  },
  {
    question: "Is Shockwave Therapy painful?",
    answer: "Most men visiting our North West London clinic find Shockwave Therapy very tolerable. You may feel a mild tapping sensation, but anaesthetic is not usually required. There is no downtime, allowing you to drive home or commute back across London immediately after your session.",
  },
  {
    question: "How is this different from standard Viagra or Cialis?",
    answer: "Standard tablets only provide a temporary, symptom-based increase in blood flow. While we do prescribe personalised medication for ED treatment when appropriate, our core focus is on restorative therapies like Shockwave and PRP that aim to support long-term vascular function and tissue health.",
  },
  {
    question: "How quickly will I see results from ED treatments?",
    answer: "Tissue healing and vascular regeneration take time. While some men notice changes after just a few sessions, optimal improvements usually develop gradually in the weeks following your complete treatment course at our Hampstead clinic.",
  },
  {
    question: "Can I treat ED if I have diabetes or high blood pressure?",
    answer: "Yes. Erectile dysfunction related to diabetes or vascular issues is incredibly common. During your private consultation at our Hampstead clinic, our doctor will thoroughly assess your cardiovascular health and may recommend a combination of regenerative therapy alongside personalised medication for ED treatment.",
  },
  {
    question: "Do I need a GP referral to visit your Hampstead ED clinic?",
    answer: "No GP referral is required. We offer direct access to discreet, strictly 1:1 private consultations with our GMC-registered doctors for men across Hampstead, Belsize Park, West Hampstead, and the wider North West London area.",
  },
  {
    question: "Is this treatment suitable for everyone?",
    answer: "Suitability highly depends on the root cause of your erectile dysfunction, your overall health, and current medications. A thorough medical assessment at our clinic ensures we recommend the safest and most effective protocol for your specific needs.",
  },
];

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic, Condition & Interconnected Therapies ---
const edSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "description": "Doctor-led Erectile Dysfunction (ED) clinic offering Shockwave Therapy, PRP, and personalised medication for ED treatment.",
      "telephone": "+44 7990 364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2 Hampstead High St",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "NW3 1PR",
        "addressCountry": "GB"
      },
      "areaServed": [
        { "@type": "City", "name": "London" },
        { "@type": "City", "name": "Hampstead" },
        { "@type": "City", "name": "North West London" },
        { "@type": "City", "name": "Belsize Park" }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        { "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction#therapy" }
      ],
      "employee": [
        { "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction#dr" }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction#dr",
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
        "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction#clinic"
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction#therapy",
      "name": "Erectile Dysfunction Treatment",
      "url": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction",
      "relevantSpecialty": "Urologic"
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction#condition",
      "name": "Erectile Dysfunction",
      "alternateName": ["ED", "Impotence"],
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Penis"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalTherapy",
          "name": "Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT)",
          "url": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction",
          "description": "Non-surgical acoustic wave therapy to improve blood flow and vascular health.",
          "relevantSpecialty": "Urologic"
        },
        {
          "@type": "MedicalTherapy",
          "name": "P-Shot (Priapus Shot)",
          "alternateName": "Platelet-Rich Plasma (PRP) for ED",
          "url": "https://www.healing-prp.co.uk/hampstead/p-shot",
          "description": "Regenerative injection therapy using the patient's own platelet-rich plasma to stimulate tissue repair.",
          "relevantSpecialty": "Urologic"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Personalised ED Medication",
          "url": "https://www.healing-prp.co.uk/hampstead/personalised-ed-medication",
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
      "name": "Hampstead Clinic",
      "item": "https://www.healing-prp.co.uk/hampstead"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Erectile Dysfunction Treatment",
      "item": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction"
    }
  ]
};

export default function HampsteadErectileDysfunctionPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(edSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
      
      <ErectileDysfunctionClient 
        locationName="Hampstead"
        servingAreas="Hampstead • Belsize Park • West Hampstead • North West London"
        pShotLink="/hampstead/p-shot"
        faqs={faqs}
      />
    </main>
  );
}
