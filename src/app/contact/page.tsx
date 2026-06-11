import type { Metadata } from "next";
import ContactClient from "@/components/pages/ContactClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Contact Our St Albans Clinic | Healing-PRP",
  },
  description: "Get in touch with our St Albans clinic for doctor-led PRP, Joint Injections, and Sexual Rejuvenation. Book your private, confidential consultation today.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/contact",
  },
  openGraph: {
    title: "Contact Healing-PRP Clinics | St Albans",
    description: "Book a consultation at our St Albans clinic for specialist, doctor-led regenerative medicine.",
    url: "https://www.healing-prp.co.uk/contact",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Healing-PRP Clinics | St Albans",
    description: "Book a consultation at our St Albans clinic for specialist, doctor-led regenerative medicine.",
  },
};

// --- UPGRADED JSON-LD SCHEMA: Contact Page & Medical Clinic ---
const contactSchemaStAlbans = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.healing-prp.co.uk/contact#webpage",
      "url": "https://www.healing-prp.co.uk/contact",
      "name": "Contact Healing-PRP Clinics St Albans",
      "description": "Contact page for Healing-PRP Clinics in St Albans, Hertfordshire."
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/contact#clinic",
      "name": "Healing-PRP Clinics St Albans",
      "url": "https://www.healing-prp.co.uk/",
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
      "name": "Contact Us",
      "item": "https://www.healing-prp.co.uk/contact"
    }
  ]
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(contactSchemaStAlbans) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <ContactClient locationName="St Albans" />
    </main>
  );
}
