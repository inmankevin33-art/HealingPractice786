import type { Metadata } from "next";
import VaginalDrynessClient from "@/components/pages/VaginalDrynessClient";

const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Vaginal Dryness Treatment St Albans | Non-Hormonal Solutions Hertfordshire",
  },
  description:
    "Doctor-led treatments for vaginal dryness in St Albans & Hertfordshire. Advanced injectable options including HA Skin Boosters, Polynucleotides, and the O-Shot. Private specialist care.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/vaginal-dryness",
  },
  openGraph: {
    title: "Vaginal Dryness Treatment St Albans | Healing-PRP Clinics",
    description: "Expert relief for intimate dryness. Doctor-led injectable hydration and regenerative therapies serving St Albans, Luton, and Watford.",
    url: "https://www.healing-prp.co.uk/vaginal-dryness",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/vaginal-dryness-treatment.webp", width: 1200, height: 630, alt: "Vaginal Dryness Treatment St Albans" }],
  },
};

const faqs = [
  {
    question: "How do injectable treatments help with vaginal dryness?",
    answer: "Unlike topical creams that sit on the surface, injectable treatments like Hyaluronic Acid (HA) and Polynucleotides deliver hydration directly into the deeper tissue layers. This helps restore natural moisture and improves tissue elasticity.",
  },
  {
    question: "What is the difference between HA and Polynucleotides for dryness?",
    answer: "HA acts as a powerful 'water magnet' for immediate rehydration. Polynucleotides are DNA-derived biostimulators that trigger cellular repair. In St Albans, we often combine both for the best results.",
  },
  {
    question: "Is this treatment a vaginal filler?",
    answer: "No. We use non-crosslinked Hyaluronic Acid. It does not add volume or change the shape of the area; it is purely used as an 'intimate skin booster' to restore hydration.",
  },
  {
    question: "Can I have these treatments if I cannot use HRT?",
    answer: "Yes. Our treatments are entirely non-hormonal, making them an excellent option for women who cannot use vaginal oestrogen or prefer hormone-free care.",
  },
];

// --- COMPLETE SCHEMA: CLINIC, DOCTOR, THERAPY & BREADCRUMBS ---
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.healing-prp.co.uk/vaginal-dryness#breadcrumb",
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
          "name": "Vaginal Dryness Treatment",
          "item": "https://www.healing-prp.co.uk/vaginal-dryness"
        }
      ]
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/vaginal-dryness#clinic",
      "name": "Healing-PRP Clinics St Albans",
      "url": "https://www.healing-prp.co.uk/vaginal-dryness",
      "description": "Doctor-led private clinic in St Albans providing advanced treatment for vaginal dryness and female intimate wellness.",
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
      "medicalSpecialty": ["Gynecologic"],
      "employee": [{ "@id": "https://www.healing-prp.co.uk/o-shot#dr" }]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/o-shot#dr",
      "name": "Dr Syed Abdi",
      "jobTitle": "Medical Director",
      "url": "https://www.healing-prp.co.uk/our-doctor",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "GMC Reference Number",
        "value": "6083294"
      },
      "sameAs": ["https://www.gmc-uk.org/registrants/6083294"],
      "worksFor": { "@id": "https://www.healing-prp.co.uk/vaginal-dryness#clinic" }
    },
    {
      "@type": ["MedicalTherapy", "MedicalProcedure"],
      "@id": "https://www.healing-prp.co.uk/vaginal-dryness#therapy",
      "name": "Vaginal Rehydration Therapy",
      "alternateName": ["HA Intimate Skin Booster", "Vaginal Polynucleotides", "Non-Hormonal Dryness Treatment"],
      "description": "Doctor-led injectable hydration using non-crosslinked Hyaluronic Acid and Polynucleotides to treat vaginal dryness and tissue atrophy.",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Gynecologic" }
    }
  ]
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(combinedSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <VaginalDrynessClient 
        locationName="St Albans" 
        servingAreas="Harpenden • Luton • Watford • Hertfordshire" 
        faqs={faqs} 
      />
    </main>
  );
}
