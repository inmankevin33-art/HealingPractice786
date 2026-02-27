import type { Metadata } from "next";
import OShotClient from "@/components/pages/OShotClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    // Strong, location-first title for Google ranking
    absolute: "O-Shot Birmingham | Doctor-Led PRP (Orgasm Shot®) | Healing-PRP Clinics",
  },
  description:
    "Official O-Shot® (Orgasm Shot) clinic in Birmingham. GMC-registered doctor offering PRP & Exo-O therapy for female intimate rejuvenation. Private clinic in Edgbaston.",
  keywords: [
    // Core Service Keywords
    "O-Shot Birmingham",
    "Orgasm Shot Birmingham",
    "Vaginal PRP injection Birmingham",
    "Female intimate wellness Birmingham",
    
    // Advanced/New Options (Matches your new Exo-O section)
    "Exo-O Shot Birmingham",
    "Exosome vaginal therapy West Midlands",

    // Specific Conditions
    "Stress urinary incontinence treatment Birmingham",
    "Female rejuvenation Birmingham",
    "Natural vaginal dryness treatment Birmingham",

    // Hyper-Local & Regional Locations
    "O-Shot clinic Edgbaston",
    "Private women's PRP clinic Solihull",
    "Female sexual health Sutton Coldfield",
    "Orgasm Shot West Midlands",
    "O-Shot Wolverhampton",

    // User Intent (Cost/Doctor)
    "O-Shot cost Birmingham",
    "GMC registered O-Shot doctor",
    "Non-surgical female rejuvenation"
  ],
  alternates: {
    // NOTE: Ensure this matches your actual live domain
    canonical: "https://www.healing-prp.co.uk/birmingham/o-shot",
  },
  openGraph: {
    title: "O-Shot Treatment (Orgasm Shot) | Birmingham",
    description: "Doctor-led O-Shot & Exo-O clinic in Birmingham. Advanced PRP therapy for female intimate wellness and rejuvenation.",
    url: "https://www.healing-prp.co.uk/birmingham/o-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/o-shot-consultation.webp",
        width: 1200,
        height: 630,
        alt: "O-Shot Treatment Consultation Birmingham",
      },
    ],
  },
};

// --- SEO RICH FAQS (Birmingham & West Midlands Focus) ---
const faqs = [
  {
    question: "What is the O-Shot and is it available at your Birmingham clinic?",
    answer: "Yes, the official O-Shot (Orgasm Shot) is available at our private Edgbaston clinic. It is a doctor-led regenerative treatment for women that uses your own Platelet-Rich Plasma (PRP) to stimulate tissue repair, increase blood flow, and support enhanced sensitivity and natural lubrication.",
  },
  {
    question: "Is the Orgasm Shot painful?",
    answer: "We prioritise patient comfort at our West Midlands clinic. A highly effective local anaesthetic cream is applied to the intimate area before the procedure, meaning most women find the O-Shot virtually painless and highly tolerable.",
  },
  {
    question: "How long does the O-Shot procedure take?",
    answer: "The entire appointment takes approximately 45 to 60 minutes. This includes a discreet medical consultation, blood draw, PRP preparation, and the treatment itself. You can return to your normal daily activities in Solihull, Sutton Coldfield, or central Birmingham immediately.",
  },
  {
    question: "What is the Exo-O Shot?",
    answer: "The Exo-O Shot is an advanced option available at our Birmingham clinic. It combines your autologous PRP with exosome-derived regenerative signalling to further support cellular communication, tissue repair, and intimate wellness.",
  },
  {
    question: "Can the O-Shot help with urinary incontinence?",
    answer: "Yes, the regenerative properties of PRP can provide structural support to the anterior vaginal wall, which frequently helps alleviate symptoms of mild stress urinary incontinence. Our GMC-registered doctors provide comprehensive assessments in Edgbaston to determine if the O-Shot is the right approach for you.",
  },
  {
    question: "How long do O-Shot results last?",
    answer: "Results vary depending on your age, baseline hormonal health, and lifestyle. Many women experience sustained improvements in sensation and urinary control for 12 to 18 months. We often discuss maintenance protocols with our Birmingham patients to help maximise longevity.",
  },
  {
    question: "Is a consultation required before getting the O-Shot in Birmingham?",
    answer: "Yes. We require a thorough, strictly 1:1 private medical consultation at our Edgbaston clinic to review your medical history, discuss your specific wellness goals, and ensure the O-Shot or Exo-O Shot is perfectly suited to your needs.",
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const oShotSchemaBirmingham = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics Birmingham",
    "description": "Doctor-led clinic in Edgbaston, Birmingham providing the official O-Shot® (Orgasm Shot) and advanced Exo-O female rejuvenation therapies.",
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
    "medicalSpecialty": ["Women's Health", "Gynecology", "Aesthetic Medicine"]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "O-Shot® (Orgasm Shot) & Exo-O Shot",
    "alternateName": ["Platelet-Rich Plasma (PRP) Female Rejuvenation", "Exosome Vaginal Therapy", "Vaginal PRP Injection"],
    "description": "Advanced autologous Platelet-Rich Plasma (PRP) and Exosome injection therapies designed to improve female intimate health, natural lubrication, urinary control, and sexual sensitivity in Birmingham.",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Women's Health"
    }
  }
];

export default function BirminghamOShotPage() {
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
        id="oshot-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(oShotSchemaBirmingham) }}
      />
      
      {/* 2. Inject FAQ Schema */}
      <Script
        id="oshot-faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 3. Render Client Component */}
      <OShotClient
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={faqs} // <--- Pass the local FAQs here!
      />
    </main>
  );
}
