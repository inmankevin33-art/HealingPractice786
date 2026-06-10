import type { Metadata } from "next";
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Doctor-Led Sexual Rejuvenation Hampstead, London | Healing-PRP",
  },
  description:
    "Private doctor-led sexual rejuvenation clinic in Hampstead, North West London. Evidence-based regenerative treatments including P-Shot, O-Shot, and ED management.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/sexual-rejuvenation",
  },

  openGraph: {
    title: "Doctor-Led Sexual Rejuvenation Hampstead, London | Healing-PRP Clinics",
    description:
      "Private doctor-led sexual rejuvenation clinic in Hampstead, North West London. Evidence-based regenerative treatments including P-Shot, O-Shot, and ED management.",
    url: "https://www.healing-prp.co.uk/hampstead/sexual-rejuvenation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/personalised-meds-hero.webp",
        width: 1200,
        height: 630,
        alt: "Private Sexual Rejuvenation Consultation Hampstead",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Doctor-Led Sexual Rejuvenation Hampstead, London",
    description: "Private doctor-led sexual rejuvenation clinic in Hampstead, North West London. P-Shot, O-Shot, and ED treatments.",
    images: ["/personalised-meds-hero.webp"],
  },
};

// --- SEO RICH FAQS (Hampstead & North West London Focus) ---
const faqs = [
  {
    question: "What is sexual rejuvenation at your Hampstead clinic?",
    answer: "Sexual rejuvenation encompasses non-surgical, regenerative treatments designed to restore natural function, improve blood flow, and enhance sensitivity. At our Hampstead clinic, Dr Abdi uses advanced therapies like PRP (P-Shot and O-Shot) and Shockwave Therapy to support tissue health for both men and women.",
  },
  {
    question: "Do I need a referral to visit the Hampstead clinic?",
    answer: "No GP referral is necessary. We offer direct access to strictly 1:1, private medical consultations. Our clinic provides a highly discreet environment for patients travelling from Hampstead, Belsize Park, West Hampstead, and across North West London.",
  },
  {
    question: "Are these treatments safe?",
    answer: "Yes. Our core regenerative treatments, such as Platelet-Rich Plasma (PRP), use your body's own natural growth factors, meaning there is no risk of allergic reaction. All procedures are doctor-led to ensure the highest standards of clinical safety and hygiene.",
  },
  {
    question: "Is there any downtime after sexual rejuvenation treatments?",
    answer: "Most of our regenerative therapies are walk-in, walk-out procedures taking under an hour. Because they are non-surgical, there is minimal to no downtime, allowing you to return to your normal daily activities in London immediately.",
  },
  {
    question: "How do I know which treatment is right for me?",
    answer: "Because every patient is unique, all treatments begin with a private, in-depth medical consultation with Dr Abdi. We will assess your symptoms, medical history, and goals before recommending a tailored pathway, whether that is the P-Shot, Shockwave Therapy, or personalised medication.",
  },
];

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Therapies ---
const sexualRejuvenationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/sexual-rejuvenation#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "description": "Doctor-led private clinic in Hampstead, London providing evidence-based sexual rejuvenation, PRP therapies, and intimate health treatments.",
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
      "medicalSpecialty": ["Urologic", "Gynecologic"],
      "availableService": [
        { "@id": "https://www.healing-prp.co.uk/hampstead/sexual-rejuvenation#therapy" }
      ],
      "employee": [
        { "@id": "https://www.healing-prp.co.uk/hampstead/sexual-rejuvenation#dr" }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/hampstead/sexual-rejuvenation#dr",
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
        "@id": "https://www.healing-prp.co.uk/hampstead/sexual-rejuvenation#clinic"
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/hampstead/sexual-rejuvenation#therapy",
      "name": "Sexual Rejuvenation Hampstead",
      "alternateName": ["Intimate Health Treatments", "Regenerative Sexual Health"],
      "url": "https://www.healing-prp.co.uk/hampstead/sexual-rejuvenation",
      "description": "Doctor-led regenerative therapies including Platelet-Rich Plasma (PRP) and Shockwave Therapy to support vascular health and tissue regeneration.",
      "relevantSpecialty": ["Urologic", "Gynecologic"]
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
      "name": "Sexual Rejuvenation",
      "item": "https://www.healing-prp.co.uk/hampstead/sexual-rejuvenation"
    }
  ]
};

export default function HampsteadSexualRejuvenationPage() {
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(sexualRejuvenationSchema) }}
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
      <SexualRejuvenationClient 
        locationName="Hampstead"
        faqs={faqs}
      />
    </main>
  );
}
