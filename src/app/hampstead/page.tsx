import type { Metadata } from "next";
import HampsteadHomeClient from "@/components/pages/HampsteadHomeClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

// --- SEO RICH FAQS (Hampstead Intimate Health Focus) ---
const hampsteadFaqs = [
  {
    question: "Do I need a GP referral for treatment at your Hampstead clinic?",
    answer: "No, a GP referral is not required. You can book a private, confidential consultation directly with Dr Syed Abdi at our Hampstead clinic for any of our intimate health treatments."
  },
  {
    question: "Who will perform my consultation and treatment in London?",
    answer: "All consultations and treatments are performed exclusively by Dr Syed Abdi, our GMC-registered Medical Director who brings over 10 years of clinical experience in private and NHS settings."
  },
  {
    question: "What intimate health treatments do you offer in Hampstead?",
    answer: "Our Hampstead clinic specializes exclusively in male and female intimate wellness. This includes doctor-led protocols for Erectile Dysfunction (ED), Premature Ejaculation, Peyronie's Disease, Vaginal Dryness, as well as the official P-Shot and O-Shot therapies."
  },
  {
    question: "How long does a consultation take?",
    answer: "A comprehensive private medical review and treatment (if appropriate) usually takes between 45 to 60 minutes. This ensures plenty of time to discuss your symptoms, treatment options, and answer any questions."
  },
  {
    question: "Where exactly is your Hampstead clinic located?",
    answer: "Our discreet private clinic is located at 2 Hampstead High St, London (NW3 1PR). Detailed arrival and access instructions will be provided via WhatsApp upon booking to ensure your absolute privacy."
  }
];

export const metadata: Metadata = {
  title: {
    absolute: "Doctor-Led Intimate Health & ED Clinic in Hampstead, London",
  },
  
  description:
    "Private, doctor-led clinic in Hampstead, London. Expert regenerative treatments for Erectile Dysfunction (ED), Premature Ejaculation, Vaginal Dryness, and the P-Shot.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead",
  },
  
  openGraph: {
    title: "Doctor-Led Intimate Health Clinic in Hampstead, London",
    description:
      "Doctor-led regenerative treatments and intimate health solutions in Hampstead. Serving Belsize Park, West Hampstead & North West London.",
    url: "https://www.healing-prp.co.uk/hampstead",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Healing-PRP Clinics Hampstead, London",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Doctor-Led Intimate Health Clinic in Hampstead, London",
    description: "Doctor-led regenerative treatments and intimate health solutions in Hampstead, North West London.",
    images: ["/hero_img.png"],
  },
};

// --- UPGRADED JSON-LD SCHEMA: Master Medical Clinic (Hampstead) ---
const hampsteadHomeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "alternateName": "Healing-PRP London",
      "description": "Leading private doctor-led clinic in Hampstead specialising in men's and women's intimate health, including Erectile Dysfunction, Vaginal Dryness, and Regenerative Medicine.",
      "url": "https://www.healing-prp.co.uk/hampstead",
      "logo": "https://www.healing-prp.co.uk/Logo2.png",
      "image": "https://www.healing-prp.co.uk/hero_img.png",
      "telephone": "+44 7990 364147", 
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2 Hampstead High St",
        "addressLocality": "London",
        "postalCode": "NW3 1PR",
        "addressRegion": "Greater London",
        "addressCountry": "GB"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "16:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "15:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "London" },
        { "@type": "Neighborhood", "name": "Hampstead" },
        { "@type": "Neighborhood", "name": "Belsize Park" }
      ],
      "medicalSpecialty": ["Urologic", "Gynecologic"],
      "employee": [
        {
          "@id": "https://www.healing-prp.co.uk/hampstead#dr"
        }
      ],
      // Focused exclusively on Intimate Health
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Erectile Dysfunction Treatment",
          "alternateName": "P-Shot & Shockwave Therapy",
          "url": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction",
          "description": "Doctor-led restorative treatments for ED including Li-ESWT and PRP (P-Shot) in London.",
          "relevantSpecialty": "Urologic"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Female Intimate Rejuvenation",
          "alternateName": "O-Shot & Vaginal Rehydration",
          "url": "https://www.healing-prp.co.uk/hampstead/vaginal-dryness",
          "description": "Doctor-led treatments for vaginal dryness and intimate wellness in Hampstead.",
          "relevantSpecialty": "Gynecologic"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/hampstead#dr",
      "name": "Dr Syed Abdi",
      "jobTitle": "Medical Director",
      "telephone": "+44 7990 364147",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "GMC Reference Number",
        "value": "6083294"
      },
      "url": "https://www.healing-prp.co.uk/our-doctor",
      "sameAs": [
        "https://www.gmc-uk.org/registrants/6083294"
      ],
      "worksFor": {
        "@id": "https://www.healing-prp.co.uk/hampstead#clinic"
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
      "name": "Hampstead Clinic",
      "item": "https://www.healing-prp.co.uk/hampstead"
    }
  ]
};

export default function HampsteadPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": hampsteadFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(hampsteadHomeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      
      <HampsteadHomeClient faqs={hampsteadFaqs} />
    </>
  );
}
