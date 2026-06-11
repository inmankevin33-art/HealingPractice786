import type { Metadata } from "next";
import VaginalDrynessClient from "@/components/pages/VaginalDrynessClient";

const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Vaginal Dryness Treatment Birmingham | Clinic in Edgbaston",
  },
  description:
    "Doctor-led treatments for vaginal dryness in Edgbaston, Birmingham. Advanced injectable options including HA Skin Boosters, combined Polynucleotide + HA, and the O-Shot.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/vaginal-dryness",
  },
  openGraph: {
    title: "Vaginal Dryness Treatment Birmingham | Healing-PRP Clinics",
    description: "Expert relief for intimate dryness. Doctor-led injectable hydration and regenerative therapies serving Edgbaston and the West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham/vaginal-dryness",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/vaginal-dryness-treatment.webp", width: 1200, height: 630, alt: "Vaginal Dryness Treatment Birmingham" }],
  },
};

const faqs = [
  {
    question: "How do injectable treatments help with vaginal dryness?",
    answer: "Unlike topical creams that sit on the surface, injectable treatments like Hyaluronic Acid (HA) deliver hydration directly into the deeper tissue layers. This helps restore natural moisture and improves tissue elasticity.",
  },
  {
    question: "What is the difference between HA and Polynucleotide treatment for dryness?",
    answer: "HA acts as a powerful 'water magnet' for immediate rehydration. Polynucleotides are DNA-derived molecules that support tissue repair. In Birmingham, we combine Polynucleotides with HA to support both hydration and tissue quality simultaneously.",
  },
  {
    question: "Is this treatment a vaginal filler?",
    answer: "No. We use non-crosslinked Hyaluronic Acid. It does not add volume or change the shape of the area; it is purely used as an 'intimate skin booster' to support tissue comfort and hydration.",
  },
  {
    question: "Can I have these treatments if I cannot use HRT?",
    answer: "Yes. Our injectable hydration and regenerative treatments are entirely non-hormonal, making them an excellent option for women who cannot use vaginal oestrogen or prefer hormone-free care.",
  },
];

// --- COMPLETE SCHEMA: CLINIC, DOCTOR, THERAPY & BREADCRUMBS ---
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.healing-prp.co.uk/birmingham/vaginal-dryness#breadcrumb",
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
          "name": "Vaginal Dryness Treatment",
          "item": "https://www.healing-prp.co.uk/birmingham/vaginal-dryness"
        }
      ]
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/vaginal-dryness#clinic",
      "name": "Healing-PRP Clinics Birmingham",
      "url": "https://www.healing-prp.co.uk/birmingham/vaginal-dryness",
      "description": "Doctor-led private clinic in Edgbaston, Birmingham providing advanced treatment for vaginal dryness and female intimate wellness.",
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
      "medicalSpecialty": ["Gynecologic"],
      "employee": [{ "@id": "https://www.healing-prp.co.uk/birmingham/vaginal-dryness#dr" }]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/birmingham/vaginal-dryness#dr",
      "name": "Dr Syed Abdi",
      "jobTitle": "Medical Director",
      "url": "https://www.healing-prp.co.uk/our-doctor",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "GMC Reference Number",
        "value": "6083294"
      },
      "sameAs": ["https://www.gmc-uk.org/registrants/6083294"],
      "worksFor": { "@id": "https://www.healing-prp.co.uk/birmingham/vaginal-dryness#clinic" }
    },
    {
      "@type": ["MedicalTherapy", "MedicalProcedure"],
      "@id": "https://www.healing-prp.co.uk/birmingham/vaginal-dryness#therapy",
      "name": "Vaginal Rehydration Therapy",
      "alternateName": ["HA Intimate Skin Booster", "Polynucleotide & HA Therapy", "Non-Hormonal Dryness Treatment"],
      "description": "Doctor-led injectable hydration using non-crosslinked Hyaluronic Acid and Polynucleotides to treat vaginal dryness and support tissue comfort in Birmingham.",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Gynecologic" }
    }
  ]
};

export default function BirminghamPage() {
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
        locationName="Birmingham" 
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands" 
        faqs={faqs} 
      />
    </main>
  );
}
