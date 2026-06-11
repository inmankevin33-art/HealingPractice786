import type { Metadata } from "next";
import ContactClient from "@/components/pages/ContactClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Contact Our Birmingham Clinic | Healing-PRP",
  },
  description: "Get in touch with our Edgbaston clinic in Birmingham for doctor-led PRP, Joint Injections, and Sexual Rejuvenation. Book your private consultation today.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/contact",
  },
  openGraph: {
    title: "Contact Healing-PRP Clinics | Birmingham",
    description: "Book a consultation at our Edgbaston clinic for specialist, doctor-led regenerative medicine in the West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham/contact",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Healing-PRP Clinics | Birmingham",
    description: "Book a consultation at our Edgbaston clinic for specialist, doctor-led regenerative medicine.",
  },
};

// --- UPGRADED JSON-LD SCHEMA: Contact Page & Medical Clinic ---
const contactSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.healing-prp.co.uk/birmingham/contact#webpage",
      "url": "https://www.healing-prp.co.uk/birmingham/contact",
      "name": "Contact Healing-PRP Clinics Birmingham",
      "description": "Contact page for Healing-PRP Clinics in Edgbaston, Birmingham."
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/contact#clinic",
      "name": "Healing-PRP Clinics Birmingham",
      "url": "https://www.healing-prp.co.uk/birmingham",
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
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+447990364147",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "English"
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
      "name": "Contact Us",
      "item": "https://www.healing-prp.co.uk/birmingham/contact"
    }
  ]
};

export default function BirminghamContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(contactSchemaBirmingham) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <ContactClient locationName="Birmingham" />
    </main>
  );
}
