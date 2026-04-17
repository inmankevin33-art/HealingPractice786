import type { Metadata } from "next";
import PenisEnlargementClient from "@/components/pages/PenisEnlargementClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Non-Surgical Penis Enlargement St Albans | HA Fillers",
  },
  
  description:
    "Private doctor-led non-surgical penis enlargement in St Albans. Premium Hyaluronic Acid (HA) fillers for immediate girth enhancement. Zero downtime. Serving Hertfordshire.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/penis-enlargement",
  },
  
  openGraph: {
    title: "Non-Surgical Penis Enlargement in St Albans | Healing-PRP Clinics",
    description: "Doctor-led consultation for HA Filler penile girth enhancement in St Albans. Immediate, natural-feeling results with zero surgical downtime.",
    url: "https://www.healing-prp.co.uk/penis-enlargement",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Non-Surgical Penis Enlargement Consultation St Albans",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Non-Surgical Penis Enlargement St Albans | Doctor-Led Clinic",
    description: "Doctor-led HA filler girth enhancement in St Albans. Safe, reversible, and natural-feeling results.",
    images: ["/hero_img.png"],
  },
};

// --- SEO RICH FAQS (St Albans & Hertfordshire Focus) ---
const faqs = [
  {
    question: "What is non-surgical penis enlargement?",
    answer: "Available at our St Albans clinic, this is a doctor-led procedure that uses premium, bio-compatible Hyaluronic Acid (HA) fillers to instantly increase the girth (thickness) of the penis. The added weight can also support increased flaccid length.",
  },
  {
    question: "Is the procedure painful?",
    answer: "Not at all. We prioritise your comfort by applying a highly effective local anaesthetic cream before the procedure begins. Most men report feeling only mild pressure during the injection.",
  },
  {
    question: "How long does the treatment take and is there downtime?",
    answer: "The entire appointment takes less than an hour. Because this is a non-surgical procedure using a blunt cannula technique, there is zero clinical downtime. You can walk out of our Hertfordshire clinic and resume your normal daily activities immediately.",
  },
  {
    question: "How long do the HA filler results last?",
    answer: "Results typically last up to 18 months, though this depends on your individual metabolism and lifestyle. Because HA is naturally broken down by the body over time, the results are completely reversible if desired.",
  },
  {
    question: "Are HA fillers safer than surgical fat transfer?",
    answer: "Yes. Surgical fat transfer requires liposuction, carries surgical risks, has a long recovery period, and can result in permanent, lumpy fat necrosis. HA fillers are non-surgical, provide smooth and predictable volume, require no downtime, and can be dissolved instantly if needed.",
  },
  {
    question: "What aftercare is required to ensure smooth results?",
    answer: "Success is a two-part process. Dr Abdi ensures precision placement, but you must follow our prescribed daily massage routine and briefly abstain from sexual activity to ensure the filler integrates smoothly into the tissue without irregularities.",
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
      "description": "Doctor-led private clinic in St Albans providing non-surgical penile girth enhancement using premium HA fillers.",
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
      "alternateName": ["Penile Girth Enhancement", "Penis Fillers", "Non-Surgical Phalloplasty"],
      "url": "https://www.healing-prp.co.uk/penis-enlargement",
      "description": "Doctor-led procedure using Hyaluronic Acid (HA) dermal fillers to safely increase penile girth and support flaccid length.",
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
