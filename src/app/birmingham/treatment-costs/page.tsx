import { Metadata } from "next";
import TreatmentCostsClient from "@/components/pages/TreatmentCostsClient";

// 1. Define the FAQs here on the server so we can use them for both UI and SEO Schema
const pricingFaqs = [
  {
    question: "What does my treatment cost include?",
    answer: "Your bespoke cost covers everything: your comprehensive online review by a GMC-registered doctor, your custom-formulated medication, ongoing dosage adjustments, and secure, discreet direct-to-door shipping."
  },
  {
    question: "Are there any hidden prescription fees?",
    answer: "Absolutely not. We believe in complete transparency. The quote you receive includes both the medical consultation and the physical medication. There are no surprise pharmacy dispensing fees."
  },
  {
    question: "Am I locked into a long-term contract?",
    answer: "No. Every man's needs are different, and your treatment plan is completely flexible. We do not lock you into rigid long-term contracts; your treatment is managed according to your ongoing progress."
  },
  {
    question: "Is the billing and shipping discreet?",
    answer: "Yes, your privacy is our highest priority. All packages arrive in unbranded, plain packaging, and your bank statements will show a discreet billing name that does not mention ED or PE."
  }
];

export const metadata: Metadata = {
  // Region-specific title incorporating your preferred keywords
  title: "ED & PE Treatment Prices Midlands & North | Online Men's Clinic",
  
  // Localized description mentioning Birmingham and the wider regions
  description: "Get a customised quote for bespoke Erectile Dysfunction (ED) and Premature Ejaculation (PE) treatments. Discreet, online GMC doctor reviews with direct delivery across Birmingham, the Midlands, and the North.",
  
  // Important: Canonical tag pointing to this specific regional route
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/treatment-costs", 
  },
  
  // Hyper-localized keywords for regional ranking
  keywords: [
    "ED treatment prices Birmingham", 
    "Premature ejaculation cost Midlands", 
    "Online ED clinic North UK", 
    "Bespoke ED medication Birmingham", 
    "Discreet PE treatment delivery Midlands",
    "GMC registered online doctor urology"
  ],
  openGraph: {
    title: "ED & PE Treatment Prices Midlands & North | Online Men's Clinic",
    description: "Discreet, online GMC doctor reviews and direct medication delivery across Birmingham, the Midlands, and the North. Get your customised quote today.",
    locale: "en_GB",
    type: "website",
    url: "https://www.healing-prp.co.uk/birmingham/treatment-costs", 
  },
};

export default function BirminghamTreatmentCostsPage() {
  
  // 2. Localized Medical Clinic Schema
  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics",
    "medicalSpecialty": ["Urology", "Men's Health"],
    "description": "Online medical clinic specialising in bespoke Erectile Dysfunction and Premature Ejaculation treatments, serving Birmingham, the Midlands, and the North of England.",
    
    // Explicitly telling Google exactly which regions this specific page targets
    "areaServed": [
      {
        "@type": "City",
        "name": "Birmingham"
      },
      {
        "@type": "AdministrativeArea",
        "name": "West Midlands"
      },
      {
        "@type": "AdministrativeArea",
        "name": "North West England"
      }
    ],
    "knowsAbout": ["Erectile Dysfunction", "Premature Ejaculation", "Sexual Rejuvenation"],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Bespoke Erectile Dysfunction (ED) Treatment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Premature Ejaculation (PE) Treatment"
        }
      }
    ]
  };

  // 3. Generate FAQ Schema dynamically
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pricingFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Injecting Localized JSON-LD directly into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Reusing the exact same visual client component */}
      <TreatmentCostsClient faqs={pricingFaqs} />
    </>
  );
}
