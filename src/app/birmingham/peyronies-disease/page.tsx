import type { Metadata } from "next";
import PeyroniesClient from "@/components/pages/PeyroniesClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  // Absolute ignores parent layout templates to ensure precise local matching
  title: {
    absolute: "Peyronie's Disease Treatment Birmingham | Clinic in Edgbaston",
  },

  description:
    "Doctor led Peyronie's disease treatment in Birmingham (Edgbaston). Non-surgical P-Shot and Shockwave therapy to improve curvature, pain, and function. Private doctor-led care.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/peyronies-disease",
  },

  openGraph: {
    title: "Peyronie's Disease Treatment Birmingham | Clinic in Edgbaston",
    description:
      "Specialist non-surgical care for Peyronie's disease. PRP and Shockwave therapy at our private Birmingham clinic.",
    url: "https://www.healing-prp.co.uk/birmingham/peyronies-disease",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Peyronie's Disease Treatment Birmingham",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Peyronie's Disease Treatment Birmingham | Clinic in Edgbaston",
    description: "Expert Peyronie's disease treatment in Edgbaston, Birmingham. Non-surgical options to improve curvature and function.",
    images: ["/hero_img.png"],
  },
};

// --- UNIQUE SEO RICH FAQS (Birmingham Focus) ---
const faqs = [
  {
    question: "Where is your Birmingham clinic for Peyronie's Disease treatment located?",
    answer: "Our private clinic is located at 38 Harborne Rd in Edgbaston, Birmingham (B15 3EB). We offer a highly discreet setting with accessible parking nearby, ensuring your visit is confidential and stress-free.",
  },
  {
    question: "Who will conduct my Peyronie's consultation in Birmingham?",
    answer: "All consultations and treatments at our Edgbaston clinic are personally led by our Medical Director, Dr Syed Abdi, a GMC-registered doctor with extensive experience in intimate health and regenerative medicine.",
  },
  {
    question: "What treatments do you offer for Peyronie's in the West Midlands?",
    answer: "We focus on advanced, non-surgical interventions. Depending on your assessment, treatment typically involves Platelet-Rich Plasma (P-Shot) and Low-Intensity Shockwave Therapy to help soften plaques and improve curvature.",
  },
  {
    question: "Is there any downtime after the treatment?",
    answer: "No. Both the P-Shot and Shockwave therapy are outpatient procedures with zero downtime. You can drive yourself home to Solihull, Sutton Coldfield, or anywhere in the Midlands immediately after your appointment.",
  }
];

// --- UPGRADED JSON-LD SCHEMA: Compliant & Corrected ---
const peyroniesSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/peyronies-disease#clinic",
      "name": "Healing-PRP Clinics",
      "url": "https://www.healing-prp.co.uk/birmingham/peyronies-disease",
      "description": "Doctor-led private clinic in Edgbaston, Birmingham providing non-surgical consultation and treatment options for Peyronie's Disease.",
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
          "@id": "https://www.healing-prp.co.uk/birmingham/shockwave-therapy-erectile-dysfunction#therapy"
        },
        {
          "@id": "https://www.healing-prp.co.uk/birmingham/p-shot#therapy"
        }
      ],
      "employee": [
        { 
          "@id": "https://www.healing-prp.co.uk/birmingham/peyronies-disease#dr" 
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/birmingham/peyronies-disease#dr",
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
        "@id": "https://www.healing-prp.co.uk/birmingham/peyronies-disease#clinic" 
      }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/birmingham/peyronies-disease#condition",
      "name": "Peyronie's Disease",
      "alternateName": ["Penile Curvature", "Induratio penis plastica"],
      "url": "https://www.healing-prp.co.uk/birmingham/peyronies-disease",
      "description": "A condition resulting from fibrous scar tissue that develops on the penis and causes curved, painful erections.",
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/birmingham/shockwave-therapy-erectile-dysfunction#therapy" 
        },
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
      "name": "Peyronie's Disease Treatment",
      "item": "https://www.healing-prp.co.uk/birmingham/peyronies-disease"
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
      {/* 1. Inject Medical Entity Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(peyroniesSchemaBirmingham) }}
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

      {/* 4. Render Client Component with Birmingham props */}
      <PeyroniesClient
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        pShotLink="/birmingham/p-shot"
        faqs={faqs}
      />
    </main>
  );
}
