import type { Metadata } from "next";
import FaqClient from "@/components/pages/FaqClient";
import Footer from "@/components/Footer";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Treatment & Clinic FAQs | St Albans Clinic",
  },
  description: "Expert answers on PRP Hair Restoration, Joint Injections, and Sexual Rejuvenation. Find information on parking and specialist doctor-led treatments in St Albans.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/faq",
  },
  openGraph: {
    title: "PRP & Regenerative Medicine FAQs | St Albans",
    description: "Doctor-led answers for Hair, Joints, and Sexual Wellness treatments in St Albans and Hertfordshire.",
    url: "https://www.healing-prp.co.uk/faq",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Doctor-Led Treatment FAQs St Albans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRP & Regenerative Medicine FAQs | St Albans",
    description: "Doctor-led answers for Hair, Joints, and Sexual Wellness treatments in St Albans.",
    images: ["/hero_img.png"],
  },
};

const mainFaqs = [
  {
    question: "Are the results of the P-Shot® permanent?",
    answer: "While results are long-lasting, they are not permanent as the natural aging process continues. The P-Shot® stimulates natural tissue growth typically lasting 12-18 months; details are on our [Sexual Rejuvenation](/sexual-rejuvenation) page."
  },
  {
    question: "Is PRP better than a steroid injection for knee pain?",
    answer: "Steroids provide fast relief but can weaken tendons over time. PRP is a regenerative therapy at our St Albans clinic that promotes long-term healing. View details on our [Joint Injections](/joint-injections) page."
  },
  {
    question: "Can I get PRP Hair Restoration in Hertfordshire?",
    answer: "Yes, we offer advanced PRP and Exosome therapy at our St Albans branch. This treatment stimulates natural follicle growth. Read about our protocols on the [Hair Restoration](/hair-restoration) page."
  },
  {
    question: "Does PRP work for advanced 'bone-on-bone' arthritis?",
    answer: "PRP is most effective for early to moderate osteoarthritis. For advanced cases, our St Albans-based doctor will assess if regenerative therapy can still provide relief. See our [Joint Injections](/joint-injections) section for more."
  },
  {
    question: "How long do the results of a P-Shot® or O-Shot® last?",
    answer: "Most patients enjoy improved sensitivity and performance for 12 to 18 months. To see how these treatments work, visit our [Sexual Rejuvenation](/sexual-rejuvenation) section."
  },
  {
    question: "Is there any downtime after Hair Restoration?",
    answer: "There is minimal downtime; you can return to work in St Albans immediately. We advise waiting 24 hours before washing hair. Recovery tips are on our [Hair Restoration](/hair-restoration) page."
  },
  {
    question: "Do you offer a consultation before treatment?",
    answer: "Yes — every client receives a personal consultation with our GMC-registered doctor in St Albans to tailor a safe, effective plan."
  },
  {
    question: "Are your products safe and approved?",
    answer: "We use only high-quality, CE-marked products and follow strict medical sterility protocols under the direct supervision of a GMC-registered doctor."
  },
  {
    question: "Can I drive home after a PRP joint injection?",
    answer: "Yes, you can drive home to Watford, Harpenden, or surrounding Hertfordshire areas immediately. Check our [Joint Injections](/joint-injections) FAQ for post-care."
  },
  {
    question: "Where exactly is the St Albans clinic located?",
    answer: "Our main clinic is located in St Albans, Hertfordshire. We are perfectly positioned for patients traveling from Harpenden, Watford, Luton, and North London."
  },
  {
    question: "Is there parking available at the St Albans location?",
    answer: "Yes, there is convenient parking available for patients. We provide specific parking directions via WhatsApp once your appointment is confirmed."
  }
];

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & FAQ ---
const faqSchemaStAlbans = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": mainFaqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/\[(.*?)\]\((.*?)\)/g, '$1'),
        },
      })),
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/faq#clinic",
      "name": "Healing-PRP Clinics St Albans",
      "url": "https://www.healing-prp.co.uk/faq",
      "description": "Doctor-led regenerative medicine clinic serving St Albans and Hertfordshire.",
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
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "jobTitle": "GMC Registered Doctor",
        "url": "https://www.healing-prp.co.uk/our-doctor",
        "knowsAbout": ["PRP Therapy", "Regenerative Medicine", "Sexual Health"]
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
      "name": "Treatment & Clinic FAQs",
      "item": "https://www.healing-prp.co.uk/faq"
    }
  ]
};

export default function StAlbansFaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchemaStAlbans) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <FaqClient 
        title="Frequently Asked Questions"
        description="Clear answers about consultations, treatments, and what to expect at our St Albans clinic."
        locationBadge="GMC-Registered | CE-Marked | St Albans & Hertfordshire"
        locationName="St Albans"
        faqs={mainFaqs}
      />
      <Footer />
    </main>
  );
}
