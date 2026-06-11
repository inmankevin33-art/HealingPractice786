import type { Metadata } from "next";
import PricesClient from "@/components/pages/PricesClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Treatment Prices St Albans | Doctor-Led Clinic Hertfordshire",
  },
  description: "Transparent, doctor-led pricing for PRP Hair Restoration, Joint Pain Injections, and Sexual Rejuvenation in St Albans. No hidden costs. Serving Hertfordshire.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/prices",
  },
  openGraph: {
    title: "Healing-PRP Clinics | St Albans Price List",
    description: "View our full price list for regenerative medical treatments. Specialist care by GMC-registered doctors in St Albans and Hertfordshire.",
    url: "https://www.healing-prp.co.uk/prices",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Doctor-Led Treatment Prices St Albans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healing-PRP Clinics | St Albans Price List",
    description: "View our full price list for regenerative medical treatments. Specialist care by GMC-registered doctors in St Albans.",
    images: ["/hero_img.png"],
  },
};

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Local Pricing ---
const priceSchemaStAlbans = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/prices#clinic",
      "name": "Healing-PRP Clinics St Albans",
      "url": "https://www.healing-prp.co.uk/prices",
      "description": "Doctor-led regenerative medicine prices for St Albans and Hertfordshire.",
      "telephone": "+447990364147",
      "image": "https://www.healing-prp.co.uk/Logo2.png",
      "priceRange": "£150 - £4000",
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
      "employee": [
        { 
          "@type": "Person",
          "name": "Dr Syed Abdi",
          "jobTitle": "Medical Director",
          "url": "https://www.healing-prp.co.uk/our-doctor"
        }
      ]
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
      "name": "Treatment Prices",
      "item": "https://www.healing-prp.co.uk/prices"
    }
  ]
};

export default function PricesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(priceSchemaStAlbans) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <PricesClient isBirmingham={false} isHampstead={false} />
    </main>
  );
}
