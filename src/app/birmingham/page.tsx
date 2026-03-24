import type { Metadata } from "next";
import BirminghamHomeClient from "@/components/pages/BirminghamHomeClient";
import Script from "next/script";

// --- SEO RICH FAQS (Birmingham Focus) ---
const birminghamFaqs = [
  {
    question: "Do I need a GP referral for treatment at your Birmingham clinic?",
    answer: "No, a GP referral is not required. You can book a private, confidential consultation directly with Dr Syed Abdi at our Birmingham clinic for any of our regenerative treatments."
  },
  {
    question: "Who will perform my consultation and treatment in Birmingham?",
    answer: "All consultations and treatments are performed exclusively by Dr Syed Abdi, our GMC-registered Medical Director who brings over 10 years of NHS and private clinical experience."
  },
  {
    question: "Is the P-Shot® available at the Birmingham location?",
    answer: "Yes, Dr Abdi is an officially licensed and CMA-certified provider of the P-Shot® and O-Shot®, and regularly performs these regenerative procedures at our Birmingham clinic."
  },
  {
    question: "How long does a PRP procedure take?",
    answer: "Most PRP treatments, including the P-Shot and joint injections, take between 45 to 60 minutes. This includes a thorough medical review, blood draw, premium double-spin centrifugation, and the treatment itself."
  },
  {
    question: "What areas does the Birmingham clinic serve?",
    answer: "Our Birmingham clinic is conveniently located in Edgbaston to serve patients across the West Midlands, including Solihull, Sutton Coldfield, Wolverhampton, and Dudley."
  }
];

export const metadata: Metadata = {
  // FIXED TITLE: Using absolute ensures the layout doesn't override it.
  title: {
    absolute: "Doctor-Led PRP & ED Clinic Birmingham | Healing-PRP Clinics",
  },
  
  description:
    "Private, doctor-led clinic in Birmingham for sexual rejuvenation and P-Shot® (PRP), plus PRP hair restoration and PRP joint injections. Discreet consultations in Edgbaston.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham",
  },
  
  keywords: [
    "PRP Clinic Birmingham",
    "Private Doctor Birmingham",
    "Regenerative Medicine Birmingham",
    "Private medical clinic Edgbaston",
    "Erectile Dysfunction treatment Birmingham", 
    "ED clinic West Midlands",                    
    "P-Shot Birmingham",
    "O-Shot Birmingham",
    "Hair Loss Treatment Birmingham",
    "Joint Pain Clinic Birmingham",
    "Polynucleotides Birmingham",
    "Edgbaston Medical Quarter clinic"
  ],
  
  openGraph: {
    title: "Healing-PRP Clinics | Birmingham Location",
    description:
      "Doctor-led regenerative treatments and Erectile Dysfunction (ED) solutions in Birmingham. Serving Solihull, Sutton Coldfield & West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- UPGRADED JSON-LD SCHEMA: Master Medical Clinic (Birmingham) ---
const birminghamHomeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/#clinic",
      "name": "Healing-PRP Clinics",
      "alternateName": "Healing-PRP Birmingham",
      "description": "Leading private doctor-led clinic in Birmingham specialising in regenerative medicine, PRP, Erectile Dysfunction, Joint Injections, and Hair Restoration.",
      "url": "https://www.healing-prp.co.uk/birmingham",
      "logo": "https://www.healing-prp.co.uk/Logo2.png",
      "image": "https://www.healing-prp.co.uk/Logo2.png",
      "telephone": "+44 7990 364147", 
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "38 Harborne Rd",
        "addressLocality": "Birmingham",
        "postalCode": "B15 3EB",
        "addressRegion": "West Midlands",
        "addressCountry": "UK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.4674,
        "longitude": -1.9275
      },
      "areaServed": [
        { "@type": "City", "name": "Birmingham" },
        { "@type": "AdministrativeArea", "name": "West Midlands" },
        { "@type": "Neighborhood", "name": "Edgbaston" }
      ],
      "medicalSpecialty": [
        "Urology", 
        "Men's Health", 
        "Women's Health", 
        "Dermatology", 
        "Orthopaedic"
      ],
      "medicalDirector": {
        "@type": "Physician",
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
        ]
      },
      // --- THE NEW MASTER HUB SERVICES ARRAY (BIRMINGHAM ROUTES) ---
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Erectile Dysfunction Treatment",
          "alternateName": "P-Shot & Shockwave Therapy",
          "url": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
          "description": "Doctor-led restorative treatments for ED including Li-ESWT and PRP (P-Shot) in Birmingham.",
          "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Urology" }
        },
        {
          "@type": "MedicalTherapy",
          "name": "Women's Sexual Wellness",
          "alternateName": "O-Shot",
          "url": "https://www.healing-prp.co.uk/birmingham/o-shot",
          "description": "Regenerative PRP treatments for female sexual health and rejuvenation in Birmingham.",
          "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Urology" }
        },
        {
          "@type": "MedicalTherapy",
          "name": "PRP & HA Joint Injections",
          "alternateName": "Hyaluronic Acid & Ostenil Injections",
          "url": "https://www.healing-prp.co.uk/birmingham/joint-injections",
          "description": "Non-surgical PRP, Hyaluronic Acid (HA), and steroid injections for arthritis and sports injuries in Birmingham.",
          "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Orthopaedic" }
        },
        {
          "@type": "MedicalTherapy",
          "name": "PRP Hair Restoration",
          "url": "https://www.healing-prp.co.uk/birmingham/hair-restoration",
          "description": "Advanced PRP and Exosome therapy to stimulate natural hair regrowth in Birmingham.",
          "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Dermatology" }
        },
        {
          "@type": "MedicalTherapy",
          "name": "Facial Aesthetics",
          "alternateName": "Vampire Facial & Polynucleotides",
          "url": "https://www.healing-prp.co.uk/birmingham/facial-aesthetics",
          "description": "Natural skin rejuvenation using Platelet-Rich Plasma, Polynucleotides, and Botox in Birmingham.",
          "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Dermatology" }
        }
      ]
    }
  ]
};

export default function BirminghamPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": birminghamFaqs.map((faq) => ({
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
      <Script
        id="home-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(birminghamHomeSchema) }}
      />
      <Script
        id="faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <BirminghamHomeClient faqs={birminghamFaqs} />
    </>
  );
}
