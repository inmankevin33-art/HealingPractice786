import type { Metadata } from "next";
import PenisEnlargementClient from "@/components/pages/PenisEnlargementClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Penis Filler Clinic | Doctor-Led HA Girth Enhancement",
  },

  description:
    "Private doctor-led penis filler using premium HA filler for non-surgical girth enhancement. Discreet consultations and tailored treatment plans.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/penis-enlargement",
  },

  openGraph: {
    title: "Penis Filler Clinic | Doctor-Led HA Girth Enhancement",
    description:
      "Private doctor-led penis filler using premium HA filler for non-surgical girth enhancement. Discreet consultations and tailored treatment plans.",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Non-Surgical Penis Enlargement St Albans | Healing-PRP Clinics",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Penis Filler Clinic | Doctor-Led HA Girth Enhancement",
    description:
      "Private doctor-led penis filler using premium HA filler for non-surgical girth enhancement. Discreet consultations and tailored treatment plans.",
    images: ["/hero_img.png"],
  },
};

// --- SEO RICH FAQS (St Albans & Hertfordshire Focus) ---
const stAlbansFaqs = [
  {
    question: "What is penis filler treatment in St Albans?",
    answer: "Penis filler treatment in St Albans is a non-surgical procedure using hyaluronic acid (HA) filler to increase penile girth. At Healing PRP in Hertfordshire, treatment is doctor-led, discreet and planned around your anatomy, goals and suitability.",
  },
  {
    question: "Is penis filler the same as non-surgical penis enlargement?",
    answer: "Yes. Penis filler, also known as penile filler or penile dermal filler, is a form of non-surgical penis enlargement. It does not involve surgery, implants or fat transfer. Instead, HA filler is carefully placed beneath the skin of the penile shaft to support girth enhancement.",
  },
  {
    question: "Do you offer penis filler for men across Hertfordshire?",
    answer: "Yes. Our St Albans clinic is suitable for men from across Hertfordshire, including Harpenden, Hatfield, Watford, Hemel Hempstead, Welwyn Garden City, Stevenage and surrounding areas. Consultations are private, discreet and confidential.",
  },
  {
    question: "Is St Albans convenient for men from North London?",
    answer: "Yes. St Albans is easily accessible from parts of North London and nearby Hertfordshire towns by road and rail. Many patients prefer a discreet clinic outside central London while still receiving doctor-led care in a private clinical setting.",
  },
  {
    question: "Who is suitable for penile filler in Hertfordshire?",
    answer: "Penile filler may be suitable for men who want discreet girth enhancement without surgery. Suitability depends on your medical history, anatomy, expectations and examination findings. Dr Abdi will assess this carefully during your private consultation before advising whether treatment is appropriate.",
  },
  {
    question: "Is the penis filler procedure painful?",
    answer: "Comfort is prioritised throughout the appointment. A strong local anaesthetic is used before treatment, and most men describe the procedure as very tolerable, with pressure or brief discomfort rather than significant pain.",
  },
  {
    question: "How long does penis filler treatment take in St Albans?",
    answer: "The appointment usually takes around 45 to 60 minutes, including consultation, preparation, treatment and aftercare advice. As this is a non-surgical treatment, most patients can return to normal daily activities shortly afterwards, provided they follow their aftercare instructions.",
  },
  {
    question: "How long do HA penis filler results last?",
    answer: "Results commonly last around 12 to 18 months, although this varies from person to person. Factors such as metabolism, lifestyle, anatomy, filler volume and individual response can all affect longevity. Maintenance treatment may be considered over time.",
  },
  {
    question: "Can penis filler be adjusted or dissolved?",
    answer: "One advantage of hyaluronic acid filler is that it can often be adjusted, refined or dissolved in appropriate circumstances using a dissolving enzyme. This makes HA filler a more flexible option compared with permanent fillers or some surgical approaches.",
  },
  {
    question: "How does HA filler compare with surgical penis enlargement?",
    answer: "HA filler is a non-surgical option that avoids liposuction, implants, general anaesthetic and a surgical recovery period. It allows controlled volume placement and may be adjusted if required. Surgical options may involve more downtime, swelling and a different risk profile.",
  },
  {
    question: "What aftercare is needed after penile filler?",
    answer: "Aftercare is important for smooth and even results. You may be advised to avoid sex, masturbation, heavy exercise, hot baths, saunas and alcohol for a short period. You may also be shown how to perform gentle massage if appropriate. Your exact aftercare plan will be explained after treatment.",
  },
  {
    question: "How much does penis filler cost in St Albans?",
    answer: "The cost depends on the amount of HA filler required and the treatment plan agreed during consultation. At Healing PRP St Albans, pricing is discussed clearly before treatment so you understand the recommended volume, expected outcome and total cost before deciding.",
  },
];

// --- UPGRADED JSON-LD SCHEMA ---
const enlargementSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/penis-enlargement#clinic",
      "name": "Healing-PRP Clinics St Albans",
      "url": "https://www.healing-prp.co.uk/penis-enlargement",
      "description": "Doctor-led private clinic in St Albans providing non-surgical penis enlargement using premium HA fillers.",
      "telephone": "+447990364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "21 Victoria St",
        "addressLocality": "St Albans",
        "addressRegion": "Hertfordshire",
        "postalCode": "AL1 3JJ",
        "addressCountry": "GB"
      },
      "areaServed": [
        { "@type": "City", "name": "St Albans" },
        { "@type": "City", "name": "Luton" },
        { "@type": "AdministrativeArea", "name": "Hertfordshire" }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        { "@id": "https://www.healing-prp.co.uk/penis-enlargement#therapy" }
      ],
      "employee": [
        { "@id": "https://www.healing-prp.co.uk/penis-enlargement#dr" }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/penis-enlargement#dr",
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
        "@id": "https://www.healing-prp.co.uk/penis-enlargement#clinic" 
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/penis-enlargement#therapy",
      "name": "Penis Filler St Albans",
      "alternateName": [
        "Penile Filler St Albans",
        "HA Penis Filler",
        "Penile Dermal Filler",
        "Non-Surgical Penis Enlargement",
        "Non-Surgical Penoplasty",
        "Penile Girth Enhancement",
        "Penile Enhancement St Albans"
      ],
      "url": "https://www.healing-prp.co.uk/penis-enlargement",
      "description": "Doctor-led penis filler treatment in St Albans using premium hyaluronic acid (HA) filler for men seeking discreet, non-surgical penile girth enhancement. Suitable for patients from Hertfordshire, North London and surrounding areas.",
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
      "name": "Non-Surgical Penis Enlargement",
      "item": "https://www.healing-prp.co.uk/penis-enlargement"
    }
  ]
};

export default function PenisEnlargementPage() {
  // --- GENERATE JSON-LD SCHEMA FOR FAQS ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": stAlbansFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(enlargementSchema) }}
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
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
        faqs={stAlbansFaqs}
      />
    </main>
  );
}
