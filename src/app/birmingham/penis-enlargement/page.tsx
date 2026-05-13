import type { Metadata } from "next";
import PenisEnlargementClient from "@/components/pages/PenisEnlargementClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Penis Filler Birmingham | Doctor-Led HA Treatment",
  },
    description: "Private doctor-led penis filler in Birmingham using premium HA filler for girth enhancement. Discreet consultation, pricing from £995.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/penis-enlargement",
  },
    
    openGraph: {
    title: "Penis Filler Birmingham | Doctor-Led HA Treatment",
    description:
      "Private doctor-led penis filler in Birmingham using premium HA filler for girth enhancement. Discreet consultation, pricing from £995.",
    url: "https://www.healing-prp.co.uk/birmingham/penis-enlargement",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Non-Surgical Penis Enlargement Birmingham | Healing-PRP Clinics",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Penis Filler Birmingham | Doctor-Led HA Treatment",
    description: "Private doctor-led penis filler in Birmingham using premium HA filler for girth enhancement. Discreet consultation, pricing from £995.",
    images: ["/hero_img.png"],
  },
};

// --- SEO RICH FAQS (Birmingham & West Midlands Focus) ---
const faqs = [
  {
    question: "What is penis filler treatment?",
    answer:
      "Penis filler, also called penile filler or penile dermal filler, is a non-surgical treatment using hyaluronic acid (HA) filler to increase penile girth. At our Edgbaston clinic in Birmingham, treatment is doctor-led and planned carefully around your anatomy, goals and suitability.",
  },
  {
    question: "Is penis filler the same as non-surgical penis enlargement?",
    answer:
      "Yes, penis filler is one form of non-surgical penis enlargement. It does not involve surgery, implants or fat transfer. Instead, premium HA filler is placed beneath the skin of the penile shaft to support girth enhancement and, in some men, a fuller flaccid appearance.",
  },
  {
    question: "Who is suitable for penile filler in Birmingham?",
    answer:
      "Penile filler may be suitable for men looking for discreet girth enhancement without surgery. Suitability depends on your medical history, anatomy, expectations and examination findings. Dr Abdi will assess this during your private consultation before advising whether treatment is appropriate.",
  },
  {
    question: "Is the penis filler procedure painful?",
    answer:
      "Comfort is prioritised throughout the appointment. A strong local anaesthetic is used before treatment, and most men describe the procedure as very tolerable, with pressure or brief discomfort rather than significant pain.",
  },
  {
    question: "How long does penis filler treatment take?",
    answer:
      "The appointment usually takes around 45 to 60 minutes, including consultation, preparation, treatment and aftercare advice. As this is a non-surgical procedure, most patients can return to normal day-to-day activities shortly afterwards, provided they follow the aftercare guidance.",
  },
  {
    question: "How long do HA penis filler results last?",
    answer:
      "Results commonly last around 12 to 18 months, although this varies from person to person. Factors such as metabolism, lifestyle, anatomy, filler volume and individual response can all influence longevity. Maintenance treatment may be considered if you wish to preserve the result.",
  },
  {
    question: "Can penis filler be adjusted or reversed?",
    answer:
      "One advantage of hyaluronic acid filler is that it can often be adjusted, refined or dissolved in appropriate circumstances using a dissolving enzyme. This is one reason HA filler is commonly preferred over permanent fillers or surgical options for men seeking a more flexible approach.",
  },
  {
    question: "How does HA filler compare with surgical fat transfer?",
    answer:
      "HA filler is a non-surgical option that avoids liposuction, general anaesthetic and a surgical recovery period. It allows more controlled volume placement and may be adjusted if required. Fat transfer is a surgical procedure and may involve more downtime, swelling and variability in fat survival.",
  },
  {
    question: "What aftercare is needed after penile filler?",
    answer:
      "Aftercare is important for smooth and even results. You may be advised to avoid sex, masturbation, heavy exercise, hot baths, saunas and alcohol for a short period. You may also be shown how to perform gentle massage if appropriate. Your exact aftercare plan will be explained after treatment.",
  },
  {
    question: "How much does penis filler cost in Birmingham?",
    answer:
      "The cost depends on the amount of HA filler required and the treatment plan agreed during consultation. At Healing PRP Birmingham, pricing is discussed clearly before treatment so you understand the recommended volume, expected outcome and total cost before deciding.",
  },
];

// --- UPGRADED JSON-LD SCHEMA ---
const enlargementSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#clinic",
      "name": "Healing-PRP Clinics Birmingham",
      "url": "https://www.healing-prp.co.uk/birmingham/penis-enlargement",
      "description": "Doctor-led private clinic in Edgbaston, Birmingham providing non-surgical penis enlargement using premium hyaluronic acid (HA) fillers.",
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
        { "@type": "City", "name": "Birmingham" },
        { "@type": "City", "name": "Edgbaston" },
        { "@type": "AdministrativeArea", "name": "West Midlands" }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        { "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#therapy" }
      ],
      "employee": [
        { "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#dr" }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#dr",
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
        "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#clinic" 
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#therapy",
      "name": "Non-Surgical Penis Enlargement (HA Fillers)",
      "alternateName": ["Penile Girth Enhancement", "Penis Fillers", "Non-Surgical Phalloplasty"],
      "url": "https://www.healing-prp.co.uk/birmingham/penis-enlargement",
      "description": "Doctor-led non-surgical penis enlargement in Edgbaston, Birmingham using hyaluronic acid (HA) fillers to enhance penile girth. In some men, the added volume may also contribute to a fuller flaccid appearance.",
      "relevantSpecialty": "Urologic",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "url": "https://www.healing-prp.co.uk/birmingham/prices",
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
      "name": "Birmingham Clinic",
      "item": "https://www.healing-prp.co.uk/birmingham"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Non-Surgical Penis Enlargement",
      "item": "https://www.healing-prp.co.uk/birmingham/penis-enlargement"
    }
  ]
};

export default function BirminghamPenisEnlargementPage() {
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(enlargementSchemaBirmingham) }}
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
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={faqs}
      />
    </main>
  );
}
