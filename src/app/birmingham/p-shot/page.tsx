import type { Metadata } from "next";
import PShotClient from "@/components/pages/PShotClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    // Strong, location-first title for Google ranking
    absolute: "P-Shot Birmingham | Doctor-Led PRP (Priapus Shot®) | Healing-PRP Clinics",
  },
  description:
    "Official P-Shot® (Priapus Shot) clinic in Birmingham. GMC-registered doctor offering PRP & Exo-P therapy for erectile rejuvenation. Private clinic in Edgbaston.",
  keywords: [
    // Core Service Keywords
    "P-Shot Birmingham",
    "Priapus Shot Birmingham",
    "PRP injection for ED Birmingham",
    "Male enhancement Birmingham",
    
    // Advanced/New Options (Matches your new Exo-P section)
    "Exo-P Shot Birmingham",
    "Exosome therapy for ED West Midlands",

    // Specific Conditions
    "Peyronies disease treatment Birmingham",
    "Penile rejuvenation Birmingham",

    // Hyper-Local & Regional Locations
    "P-Shot clinic Edgbaston",
    "Private PRP clinic Solihull",
    "Mens health Sutton Coldfield",
    "Priapus Shot West Midlands",
    "P-Shot Wolverhampton",

    // User Intent (Cost/Doctor)
    "P-Shot cost Birmingham",
    "GMC registered P-Shot doctor",
    "Non-surgical erectile treatment"
  ],
  alternates: {
    // NOTE: Ensure this matches your actual live domain
    canonical: "https://www.healing-prp.co.uk/birmingham/p-shot",
  },
  openGraph: {
    title: "P-Shot Treatment (Priapus Shot) | Birmingham",
    description: "Doctor-led P-Shot & Exo-P clinic in Birmingham. Advanced PRP therapy for performance and rejuvenation.",
    url: "https://www.healing-prp.co.uk/birmingham/p-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/p-shot-consultation.webp",
        width: 1200,
        height: 630,
        alt: "P-Shot Treatment Consultation Birmingham",
      },
    ],
  },
};

// --- SEO RICH FAQS (Birmingham & West Midlands Focus) ---
const faqs = [
  {
    question: "What is the P-Shot and is it available at your Birmingham clinic?",
    answer: "Yes, the official P-Shot (Priapus Shot) is available at our private Edgbaston clinic. It is a doctor-led regenerative treatment that uses your own Platelet-Rich Plasma (PRP) to stimulate tissue repair, increase blood flow, and support enhanced sensitivity and erectile function.",
  },
  {
    question: "Is the Priapus Shot painful?",
    answer: "We prioritise patient comfort at our West Midlands clinic. A potent local anaesthetic cream is applied before the procedure, meaning most men find the P-Shot virtually painless and highly tolerable.",
  },
  {
    question: "How long does the P-Shot procedure take?",
    answer: "The entire appointment takes approximately 45 to 60 minutes. This includes a discreet medical consultation, blood draw, PRP preparation, and the treatment itself. You can return to your normal daily activities in Solihull, Sutton Coldfield, or central Birmingham immediately.",
  },
  {
    question: "What is the Exo-P Shot?",
    answer: "The Exo-P Shot is an advanced option available at our Birmingham clinic. It combines your autologous PRP with exosome-derived regenerative signalling to further support tissue repair, cellular communication, and blood flow associated with erectile performance.",
  },
  {
    question: "Can the P-Shot treat Peyronie’s disease?",
    answer: "Yes, the regenerative properties of PRP can support tissue quality in certain cases of Peyronie’s disease. Our GMC-registered doctors provide comprehensive assessments in Edgbaston to determine if the P-Shot is the most appropriate approach for your specific symptoms.",
  },
  {
    question: "How long do P-Shot results last?",
    answer: "Results vary depending on your age, baseline vascular health, and lifestyle. Many men experience sustained improvements for 12 to 18 months. We often discuss maintenance protocols with our Birmingham patients to help maximise the longevity of the results.",
  },
  {
    question: "Is a consultation required before getting the P-Shot in Birmingham?",
    answer: "Yes. We require a thorough, strictly 1:1 private medical consultation at our Edgbaston clinic to review your medical history, discuss your goals, and ensure the P-Shot or Exo-P Shot is perfectly suited to your needs.",
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const pShotSchemaBirmingham = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics Birmingham",
    "description": "Doctor-led clinic in Edgbaston, Birmingham providing the official P-Shot® (Priapus Shot) and advanced Exo-P male rejuvenation therapies.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "UK"
    },
    // The "Power Move" for Local SEO:
    "areaServed": {
      "@type": "City",
      "name": "Birmingham"
    },
    "medicalSpecialty": ["Urology", "Men's Health"]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "P-Shot® (Priapus Shot) & Exo-P Shot",
    "alternateName": ["Platelet-Rich Plasma (PRP) Male Rejuvenation", "Exosome Penile Therapy", "Peyronie's Disease PRP Treatment"],
    "description": "Advanced autologous Platelet-Rich Plasma (PRP) and Exosome injection therapies designed to improve penile health, tissue regeneration, blood flow, and treat conditions like Peyronie's disease and Erectile Dysfunction in Birmingham.",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Urology"
    }
  }
];

export default function BirminghamPShotPage() {
  // --- GENERATE JSON-LD SCHEMA FOR FAQS ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      {/* 1. Inject Medical Entity Schema */}
      <Script
        id="pshot-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pShotSchemaBirmingham) }}
      />
      
      {/* 2. Inject FAQ Schema */}
      <Script
        id="pshot-faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 3. Render Client Component */}
      <PShotClient
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={faqs} // <--- Pass the FAQs here!
      />
    </main>
  );
}
