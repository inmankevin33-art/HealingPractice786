import type { Metadata } from "next";
import ShockwaveClient from "@/components/pages/ShockwaveTherapyClient"; 

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  // Absolute ignores parent layout templates to ensure precise local matching
  title: {
    absolute: "Shockwave Therapy ED Treatment Hampstead | London Clinic",
  },
  
  description:
    "Private doctor-led Low-Intensity Shockwave Therapy (LiSWT) for Erectile Dysfunction in Hampstead, London. Non-invasive treatment to improve blood flow.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction",
  },
  
  openGraph: {
    title: "Shockwave Therapy for ED in Hampstead | Healing-PRP Clinics",
    description: "Doctor-led consultation for Shockwave Therapy options in Hampstead, London. Non-surgical acoustic wave therapy to support blood flow and erectile function.",
    url: "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png", 
        width: 1200,
        height: 630,
        alt: "Shockwave Therapy Consultation Hampstead",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shockwave Therapy for ED in Hampstead | Doctor-Led Clinic",
    description: "Doctor-led consultation for Shockwave Therapy (LiSWT) in Hampstead, London. Non-invasive treatment to support Erectile Dysfunction.",
    images: ["/hero_img.png"],
  },
};

// --- UNIQUE SEO RICH FAQS (Hampstead & North West London Focus) ---
const faqs = [
  {
    question: "Where is your London clinic for Shockwave Therapy located?",
    answer: "Our private London clinic is located in Hampstead. We offer a highly discreet and comfortable medical setting, easily accessible for patients travelling from Belsize Park, West Hampstead, Highgate, Golders Green, and St John's Wood.",
  },
  {
    question: "What is Shockwave Therapy (LiSWT) and how does it work?",
    answer: "Low-Intensity Extracorporeal Shockwave Therapy (LiSWT) uses acoustic waves to stimulate the growth of new blood vessels (angiogenesis). This improves penile blood flow and supports natural erectile function, treating the underlying vascular cause of ED.",
  },
  {
    question: "Does the shockwave treatment hurt?",
    answer: "No. Shockwave therapy is a completely non-invasive and pain-free procedure. Most men simply feel a mild tapping or vibrating sensation during their session at our Hampstead clinic.",
  },
  {
    question: "How many shockwave sessions will I need in Hampstead?",
    answer: "A standard treatment protocol typically consists of 6 sessions, usually performed once or twice a week. During your initial consultation, Dr Abdi will recommend a tailored plan based on your specific vascular health.",
  },
  {
    question: "Is there any downtime after the procedure?",
    answer: "There is zero downtime. Each session takes roughly 20 to 30 minutes, and you can immediately drive or take public transport home across North West London and resume your normal daily activities.",
  },
  {
    question: "Can Shockwave Therapy be combined with the P-Shot?",
    answer: "Yes, frequently. Many patients choose to combine the vascular benefits of Shockwave Therapy with the tissue-regenerating properties of the P-Shot (PRP) for a comprehensive approach to ED and Peyronie's disease.",
  }
];

// --- UPGRADED JSON-LD SCHEMA: Compliant & Corrected ---
const shockwaveSchemaHampstead = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "url": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction",
      "description": "Doctor-led private clinic in Hampstead, London providing Low-Intensity Shockwave Therapy (LiSWT) for Erectile Dysfunction.",
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
      "medicalSpecialty": "Urologic",
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction#therapy"
        }
      ],
      "employee": [
        { 
          "@id": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction#dr" 
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction#dr",
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
        "@id": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction#clinic" 
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction#therapy",
      "name": "Low-Intensity Shockwave Therapy (LiSWT)",
      "alternateName": ["Shockwave Therapy for ED", "Acoustic Wave Therapy", "Extracorporeal Shockwave Therapy"],
      "url": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction",
      "description": "A non-invasive procedure using low-intensity acoustic waves to improve penile blood flow and support erectile function in Hampstead, London.",
      "relevantSpecialty": "Urologic",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "url": "https://www.healing-prp.co.uk/hampstead/prices",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction#condition",
      "name": "Erectile Dysfunction",
      "url": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction",
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction#therapy" 
        }
      ]
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/hampstead/peyronies-disease#condition",
      "name": "Peyronie's Disease",
      "url": "https://www.healing-prp.co.uk/hampstead/peyronies-disease",
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction#therapy" 
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
      "name": "Shockwave Therapy",
      "item": "https://www.healing-prp.co.uk/hampstead/shockwave-therapy-erectile-dysfunction"
    }
  ]
};

export default function HampsteadShockwavePage() {
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(shockwaveSchemaHampstead) }}
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
      
      {/* 4. Render Client Component with Hampstead props */}
      <ShockwaveClient 
        locationName="Hampstead"
        servingAreas="Hampstead • Belsize Park • West Hampstead • North West London"
        faqs={faqs}
      />
    </main>
  );
}
