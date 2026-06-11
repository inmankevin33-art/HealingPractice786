import type { Metadata } from "next";
import PricesClient from "@/components/pages/PricesClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Treatment Prices Hampstead | Doctor-Led Clinic London",
  },
  description: "Transparent, doctor-led pricing for PRP Hair Restoration, Joint Pain Injections, and Sexual Rejuvenation in Hampstead. No hidden costs. Serving North West London.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/prices",
  },
  openGraph: {
    title: "Healing-PRP Clinics | Hampstead Price List",
    description: "View our full price list for regenerative medical treatments. Specialist care by GMC-registered doctors in Hampstead and North West London.",
    url: "https://www.healing-prp.co.uk/hampstead/prices",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Doctor-Led Treatment Prices Hampstead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healing-PRP Clinics | Hampstead Price List",
    description: "View our full price list for regenerative medical treatments in Hampstead, North West London.",
    images: ["/hero_img.png"],
  },
};

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Local Pricing ---
const priceSchemaHampstead = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/prices#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "url": "https://www.healing-prp.co.uk/hampstead/prices",
      "description": "Doctor-led regenerative medicine prices for Hampstead and North West London.",
      "telephone": "+447990364147",
      "image": "https://www.healing-prp.co.uk/Logo2.png",
      "priceRange": "£150 - £4000",
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
        { "@type": "City", "name": "Belsize Park" }
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
      "name": "Hampstead Clinic",
      "item": "https://www.healing-prp.co.uk/hampstead"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Treatment Prices",
      "item": "https://www.healing-prp.co.uk/hampstead/prices"
    }
  ]
};

export default function HampsteadPricesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(priceSchemaHampstead) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <PricesClient isBirmingham={false} isHampstead={true} />
    </main>
  );
}
