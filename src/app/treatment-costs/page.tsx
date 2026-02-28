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
  // Enhanced UK-wide SEO title
  title: "Bespoke ED & PE Treatment Costs UK | Online Men's Health Clinic",
  description: "Get a customised quote for bespoke Erectile Dysfunction (ED) and Premature Ejaculation (PE) treatments. Discreet, online GMC doctor reviews with direct delivery across the United Kingdom.",
  
  // Canonical tag tells Google this is the master version of the page
  alternates: {
    canonical: "https://www.healing-prp.co.uk/treatment-costs", // Change to your actual live domain if different
  },
  
  keywords: [
    "ED treatment cost UK", 
    "Premature ejaculation treatment price", 
    "Online ED clinic United Kingdom", 
    "Bespoke ED medication UK", 
    "Discreet PE treatment delivery",
    "GMC registered online doctor urology"
  ],
  openGraph: {
    title: "Bespoke ED & PE Treatment Costs UK | Online Men's Health Clinic",
    description: "Discreet, online GMC doctor reviews and direct medication delivery across the United Kingdom. Get your customised quote today.",
    locale: "en_GB",
    type: "website",
    url: "https://www.healing-prp.co.uk/treatment-costs", // Added url to OpenGraph for complete metadata
  },
};

export default function TreatmentCostsPage() {
  
  // 2. Medical Clinic Schema
  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics",
    "medicalSpecialty": ["Urology", "Men's Health"],
    "description": "UK-wide online medical clinic specialising in bespoke Erectile Dysfunction and Premature Ejaculation treatments.",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
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

  // 3. Generate FAQ Schema dynamically from the array above
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
      {/* Injecting JSON-LD directly into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Passing the FAQs to the visual component */}
      <TreatmentCostsClient faqs={pricingFaqs} />
    </>
  );
}
