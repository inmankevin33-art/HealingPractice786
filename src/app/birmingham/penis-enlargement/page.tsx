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
const birminghamFaqs = [
  {
    question: "What is penis filler treatment in Birmingham?",
    answer: "Penis filler treatment in Birmingham is a non-surgical procedure using hyaluronic acid (HA) filler to increase penile girth. At our Healing PRP Edgbaston clinic, treatment is doctor-led, discreet, and planned strictly around your anatomy, goals, and suitability.",
  },
  {
    question: "Is penis filler the same as non-surgical penis enlargement?",
    answer: "Yes. Penis filler, also known as penile filler or penile dermal filler, is a highly effective form of non-surgical penis enlargement. It does not involve surgery, implants, or fat transfer. Instead, premium HA filler is carefully placed beneath the skin of the penile shaft to support proportionate girth enhancement.",
  },
  {
    question: "Do you offer penis filler for men across the West Midlands?",
    answer: "Yes. Our discreet Edgbaston clinic is convenient for men from across Birmingham and the wider West Midlands, including Solihull, Sutton Coldfield, Wolverhampton, Coventry, and surrounding areas. All consultations are strictly private and confidential.",
  },
  {
    question: "Is the Birmingham clinic easily accessible?",
    answer: "Yes. Located in Edgbaston, the clinic is easily accessible by road and rail for men travelling from across the Midlands and beyond. Many patients prefer our discreet, premium clinical setting as it offers a private medical environment away from busy city-centre high streets.",
  },
  {
    question: "Who is suitable for penile filler at the Birmingham clinic?",
    answer: "Penile filler may be suitable for men seeking discreet girth enhancement without the downtime of surgery. Suitability depends on your medical history, anatomy, expectations, and examination findings. Dr Abdi will assess this carefully during your private consultation before advising whether treatment is appropriate.",
  },
  {
    question: "Is the penis filler procedure painful?",
    answer: "Patient comfort is a priority throughout the appointment. A strong local anaesthetic is applied before treatment begins, and most men describe the procedure as very tolerable, experiencing a feeling of pressure rather than significant pain.",
  },
  {
    question: "How long does penis filler treatment take in Birmingham?",
    answer: "The appointment usually takes around 45 to 60 minutes, which includes your consultation, preparation, the treatment itself, and aftercare advice. As this is a walk-in, walk-out non-surgical treatment, most patients can return to normal daily activities shortly afterwards.",
  },
  {
    question: "How long do HA penis filler results last?",
    answer: "Results typically last around 12 to 18 months, although this varies from person to person. Factors such as your natural metabolism, lifestyle, starting anatomy, the volume of filler used, and your individual response can all affect longevity. Top-up maintenance treatments can be considered over time.",
  },
  {
    question: "Can penis filler be adjusted or dissolved?",
    answer: "One of the major clinical advantages of using premium hyaluronic acid (HA) filler is that it is 100% reversible. It can be safely adjusted, refined, or completely dissolved in appropriate circumstances using a specific medical enzyme (hyaluronidase).",
  },
  {
    question: "How does HA filler compare with surgical penis enlargement?",
    answer: "HA filler is a non-surgical option that avoids the need for liposuction, silicone implants, general anaesthesia, and a lengthy surgical recovery period. It allows for highly controlled volume placement. Surgical options, such as fat transfer, often involve significant downtime, swelling, and a much higher risk of permanent lumps or irregularities.",
  },
  {
    question: "What aftercare is needed after penile filler?",
    answer: "Proper aftercare is essential for achieving smooth, even results. You will be advised to avoid sexual activity, masturbation, heavy exercise, hot baths, saunas, and alcohol for a temporary period. You will also be instructed on how to perform daily gentle massage. Your exact aftercare plan will be explained in detail after your treatment.",
  },
  {
    question: "How much does penis filler cost in Birmingham?",
    answer: "The cost depends entirely on the volume (in millilitres) of premium HA filler required to meet the treatment plan agreed upon during your consultation. At Healing PRP Birmingham, pricing starts from £995, and all costs are discussed transparently with you before any procedure takes place.",
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
      "name": "Penis Filler Birmingham",
      "alternateName": [
        "Penile Filler Birmingham",
        "HA Penis Filler",
        "Penile Dermal Filler",
        "Penile Girth Enhancement",
        "Non-Surgical Penis Enlargement",
        "Non-Surgical Penoplasty",
        "Penile Enhancement Birmingham",
        "Penis Fillers Birmingham"
      ],
      "url": "https://www.healing-prp.co.uk/birmingham/penis-enlargement",
      "description": "Doctor-led penis filler treatment in Edgbaston, Birmingham using premium hyaluronic acid (HA) filler for men seeking discreet, non-surgical penile girth enhancement. Suitable for patients from Birmingham, the West Midlands and surrounding Midlands areas.",
      "relevantSpecialty": "Urologic",
      "bodyLocation": "Penis",
      "procedureType": "Non-surgical",
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
        faqs={birminghamFaqs}
      />
    </main>
  );
}
