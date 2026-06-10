import type { Metadata } from "next";
import PenisEnlargementClient from "@/components/pages/PenisEnlargementClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Penis Filler Hampstead, London | Non-Surgical Girth Enhancement",
  },
  description:
    "Doctor-led penis filler treatment in Hampstead, London using hyaluronic acid filler. Discreet private consultation in North West London. Fees apply.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/penis-filler",
  },
    
  openGraph: {
    title: "Penis Filler Hampstead, London | Non-Surgical Girth Enhancement",
    description:
      "Doctor-led penis filler treatment in Hampstead, London using hyaluronic acid filler. Discreet private consultation in North West London. Fees apply.",
    url: "https://www.healing-prp.co.uk/hampstead/penis-filler",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Doctor-Led Penis Filler Hampstead, London | Healing-PRP Clinics",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Penis Filler Hampstead, London | Non-Surgical Girth Enhancement",
    description: "Doctor-led penis filler treatment in Hampstead, London using hyaluronic acid filler. Discreet private consultation in North West London. Fees apply.",
    images: ["/hero_img.png"],
  },
};

// --- SEO RICH FAQS (Hampstead & North West London Focus) ---
const hampsteadFaqs = [
  {
    question: "What is penis filler treatment in Hampstead?",
    answer: "Penis filler treatment is a non-surgical procedure using hyaluronic acid (HA) filler to increase penile girth. At our Hampstead clinic, treatment is strictly doctor-led, discreet, and planned around your anatomy, goals, and medical suitability.",
  },
  {
    question: "Is penis filler the same as non-surgical penis enlargement?",
    answer: "Yes. Penis filler, also known as penile dermal filler or non-surgical penoplasty, is an option for non-surgical girth enhancement. It avoids surgery, implants, or fat transfer. Instead, dissolvable HA filler is carefully placed beneath the skin of the penile shaft.",
  },
  {
    question: "Do you offer penis filler for men across North West London?",
    answer: "Yes. Our discreet Hampstead setting is convenient for men from across North West London, including Belsize Park, West Hampstead, Highgate, Golders Green, St John's Wood, Swiss Cottage, and Camden. All consultations are strictly private and confidential.",
  },
  {
    question: "Is the Hampstead clinic easily accessible?",
    answer: "Yes. Located in North West London, the clinic is easily accessible by road and public transport. Many patients prefer our discreet clinical setting as it offers a highly private medical environment suitable for intimate health treatments.",
  },
  {
    question: "Who is suitable for penile filler?",
    answer: "Penile filler may be suitable for men seeking discreet girth enhancement without the longer recovery associated with surgery. Suitability depends on your medical history, anatomy, and examination findings. Dr Abdi will assess this carefully during your private consultation.",
  },
  {
    question: "Is the penis filler procedure painful?",
    answer: "Patient comfort is our priority. A strong local anaesthetic is applied before treatment begins, and the premium HA fillers we use also contain an anaesthetic. Most men describe the procedure as very tolerable, experiencing mild pressure rather than pain.",
  },
  {
    question: "How long does the treatment take?",
    answer: "The appointment usually takes under an hour, which includes your consultation, preparation, the treatment itself, and aftercare advice. As this is a non-surgical treatment with minimal downtime, most patients can return to normal daily activities shortly afterwards.",
  },
  {
    question: "How long do HA penis filler results last?",
    answer: "Results typically last around 12 to 18 months, although this varies. Factors such as your natural metabolism, lifestyle, starting anatomy, and the volume of filler used can all affect longevity. Top-up maintenance treatments can be considered over time.",
  },
  {
    question: "Can penis filler be adjusted or dissolved?",
    answer: "One of the major clinical advantages of using premium hyaluronic acid (HA) filler is that it is fully dissolvable. It can be safely adjusted, refined, or completely reversed if required using a specific medical enzyme called hyaluronidase.",
  },
  {
    question: "How does HA filler compare with surgical fat transfer?",
    answer: "HA filler is a non-surgical option that avoids the need for liposuction and general anaesthesia. Surgical options, such as fat transfer, usually involve longer recovery times, swelling, and carry a higher risk of the fat settling unevenly or unpredictably.",
  },
  {
    question: "What aftercare is needed after treatment?",
    answer: "Proper aftercare is essential for smooth results. You will be advised to avoid sexual activity, heavy exercise, hot baths, and saunas for a temporary period. You will also be instructed on how to perform daily gentle massage to help the filler settle. A full aftercare plan is provided.",
  },
  {
    question: "How much does penis filler cost in Hampstead?",
    answer: "The cost depends entirely on the volume (in millilitres) of premium HA filler required to meet your goals. Pricing starts from £995 for 10ml. All costs will be confirmed with you in writing before any procedure takes place, and all treatment is subject to consultation.",
  },
];

// --- UPGRADED JSON-LD SCHEMA ---
const enlargementSchemaHampstead = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/penis-filler#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "url": "https://www.healing-prp.co.uk/hampstead/penis-filler",
      "description": "Doctor-led private clinic in Hampstead, London providing non-surgical girth enhancement using premium hyaluronic acid (HA) fillers.",
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
        { "@type": "City", "name": "London" },
        { "@type": "City", "name": "Hampstead" },
        { "@type": "City", "name": "North West London" },
        { "@type": "City", "name": "Belsize Park" },
        { "@type": "City", "name": "St John's Wood" }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        { "@id": "https://www.healing-prp.co.uk/hampstead/penis-filler#therapy" }
      ],
      "employee": [
        { "@id": "https://www.healing-prp.co.uk/hampstead/penis-filler#dr" }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/hampstead/penis-filler#dr",
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
        "@id": "https://www.healing-prp.co.uk/hampstead/penis-filler#clinic" 
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/hampstead/penis-filler#therapy",
      "name": "Penis Filler Hampstead",
      "alternateName": [
        "Penile Filler Hampstead",
        "HA Penis Filler",
        "Penile Dermal Filler",
        "Penile Girth Enhancement",
        "Non-Surgical Penis Enlargement",
        "Non-Surgical Penoplasty",
        "Penile Enhancement London"
      ],
      "url": "https://www.healing-prp.co.uk/hampstead/penis-filler",
      "description": "Doctor-led penis filler treatment in Hampstead, London using premium hyaluronic acid (HA) filler for men seeking discreet, non-surgical penile girth enhancement. Suitable for patients from North West London and surrounding areas.",
      "relevantSpecialty": "Urologic",
      "bodyLocation": "Penis",
      "procedureType": "Non-surgical",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "url": "https://www.healing-prp.co.uk/prices",
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
      "name": "Hampstead Clinic",
      "item": "https://www.healing-prp.co.uk/hampstead"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Penis Filler Treatment",
      "item": "https://www.healing-prp.co.uk/hampstead/penis-filler"
    }
  ]
};

export default function HampsteadPenisFillerPage() {
  // --- GENERATE JSON-LD SCHEMA FOR FAQS ---
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(enlargementSchemaHampstead) }}
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
        locationName="Hampstead"
        servingAreas="Hampstead, Belsize Park, West Hampstead, Highgate, Golders Green, St John’s Wood, Swiss Cottage and North West London"
        faqs={hampsteadFaqs}
      />
    </main>
  );
}
