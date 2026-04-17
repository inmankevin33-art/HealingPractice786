import type { Metadata } from "next";
import PenisEnlargementClient from "@/components/pages/PenisEnlargementClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Non-Surgical Penis Enlargement St Albans | Doctor-Led HA Fillers",
  },

  description:
    "Private doctor-led non-surgical penis enlargement in St Albans using premium hyaluronic acid (HA) fillers. Designed to enhance penis girth with immediate visible results and minimal downtime.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/penis-enlargement",
  },

  openGraph: {
    title: "Non-Surgical Penis Enlargement St Albans | Healing-PRP Clinics",
    description:
      "Private doctor-led non-surgical penis enlargement in St Albans using hyaluronic acid (HA) fillers. Designed to enhance penis girth with immediate visible results and minimal downtime.",
    url: "https://www.healing-prp.co.uk/penis-enlargement",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Non-Surgical Penis Enlargement St Albans | Healing-PRP Clinics",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Non-Surgical Penis Enlargement St Albans | Doctor-Led HA Fillers",
    description:
      "Doctor-led non-surgical penis enlargement in St Albans using hyaluronic acid (HA) fillers with minimal downtime.",
    images: ["/hero_img.png"],
  },
};

// --- SEO RICH FAQS (St Albans & Hertfordshire Focus) ---
const faqs = [
  {
    question: "What is non-surgical penis enlargement?",
    answer: "At our St Albans clinic, non-surgical penis enlargement is a doctor-led procedure using premium hyaluronic acid (HA) filler to increase penis girth. In some men, the added volume and weight may also contribute to a fuller flaccid appearance.",
  },
  {
    question: "Is the procedure painful?",
    answer: "We prioritise comfort throughout the procedure. A strong local anaesthetic cream is applied before treatment, so most men describe the injections as very tolerable, with only mild pressure or brief discomfort.",
  },
  {
    question: "How long does the treatment take and is there downtime?",
    answer: "The appointment usually takes around 45 to 60 minutes. As this is a non-surgical treatment performed with a cannula technique, most patients can return to normal daily activities shortly afterwards, although specific aftercare advice should be followed.",
  },
  {
    question: "How long do HA filler results last?",
    answer: "Results commonly last around 12 to 18 months, depending on factors such as metabolism, lifestyle, and the amount of filler used. Because hyaluronic acid is gradually broken down by the body, maintenance treatments may be considered over time.",
  },
  {
    question: "How do HA fillers compare with surgical fat transfer?",
    answer: "HA filler treatment is a non-surgical option that avoids liposuction and a surgical recovery period. It can offer a more controlled and predictable approach to penis enlargement, and in experienced hands it also allows adjustment or reversal if required.",
  },
  {
    question: "What aftercare is required after non-surgical penis enlargement?",
    answer: "Aftercare is an important part of treatment. You may be advised to carry out gentle massage as instructed and avoid sexual activity for a short period. Following your personalised aftercare plan helps support even filler distribution and the best possible outcome.",
  }
];

// --- UPGRADED JSON-LD SCHEMA ---
const enlargementSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/penis-enlargement#clinic",
      "name": "Healing-PRP Clinics St Albans",
      "url": "https://www.healing-prp.co.uk/penis-enlargement",
      "description": "Doctor-led private clinic in St Albans providing non-surgical penis enlargement using premium HA fillers.",
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
        { "@type": "City", "name": "St Albans" },
        { "@type": "City", "name": "Luton" },
        { "@type": "AdministrativeArea", "name": "Hertfordshire" }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        { "@id": "https://www.healing-prp.co.uk/penis-enlargement#therapy" }
      ],
      "employee": [
        { "@id": "https://www.healing-prp.co.uk/penis-enlargement#dr" }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/penis-enlargement#dr",
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
        "@id": "https://www.healing-prp.co.uk/penis-enlargement#clinic" 
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/penis-enlargement#therapy",
      "name": "Non-Surgical Penis Enlargement (HA Fillers)",
      "alternateName": ["Penis Enlargement", "Penis Fillers", "Non-Surgical Phalloplasty"],
      "url": "https://www.healing-prp.co.uk/penis-enlargement",
      "description": "Doctor-led procedure using Hyaluronic Acid (HA) dermal fillers for safe non-surgical penis enlargement.",
      "relevantSpecialty": "Urologic",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "url": "https://www.healing-prp.co.uk/prices",
        "availability": "https://schema.org/InStock"
      }
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
      "name": "Non-Surgical Penis Enlargement",
      "item": "https://www.healing-prp.co.uk/penis-enlargement"
    }
  ]
};

export default function PenisEnlargementPage() {
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(enlargementSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
      
      <PenisEnlargementClient 
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
        faqs={faqs}
      />
    </main>
  );
}
