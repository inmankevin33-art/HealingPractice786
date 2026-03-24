import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Hero from "@/components/Hero";
import EDFeatureBlock from "@/components/EDFeatureBlock"; // <-- IMPORTED ED FEATURE BLOCK
import ServiceOverview from "@/components/ServiceOverview";
import PRPExplanationSection from "@/components/PRPExplanationSection";
import DynamicFAQ from "@/components/DynamicFAQ";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import TrustReviews from "@/components/TrustReviews";

// --- SEO OPTIMISATION ---
export const metadata: Metadata = {
  // Title reduced to 57 characters to prevent truncation!
  title: {
    absolute: "Doctor-Led PRP, P-Shot & ED Clinic St Albans | Healing-PRP",
  },
  description:
    "Doctor-led private medical clinic in St Albans. Expert doctor-led treatments for Erectile Dysfunction (ED), P-Shot®, Joint Injections, and PRP Hair Restoration.",
  keywords: [
    // --- CORE CLINIC & REGENERATIVE MEDICINE ---
    "PRP Clinic St Albans",
    "Private Doctor Hertfordshire",
    "Regenerative Medicine Hertfordshire",
    "Private medical clinic St Albans",
    "Regenerative Medicine UK",
    
    // --- MEN'S HEALTH, ED, PE & PEYRONIE'S (Primary Focus) ---
    "Erectile Dysfunction Treatment St Albans",
    "ED clinic Hertfordshire",
    "Erectile dysfunction help Harpenden",
    "Premature ejaculation treatment Hertfordshire",
    "PE treatment clinic St Albans",
    "Peyronies disease treatment London",
    "Curved penis treatment St Albans",
    "P-Shot London",
    "P-Shot Watford",
    "Shockwave therapy for ED Hertfordshire",
    "Sexual health clinic St Albans",
    "Mens health clinic Watford",
    
    // --- WOMEN'S HEALTH ---
    "O-Shot treatment Radlett",
    "O-Shot St Albans",
    "Womens sexual wellness clinic Hertfordshire",
    
    // --- HAIR RESTORATION ---
    "Hair Loss Treatment St Albans",
    "PRP hair therapy Hertfordshire",
    "Hair restoration clinic Watford",
    
    // --- JOINT PAIN & ORTHOPAEDICS ---
    "Joint Injection Clinic Hemel Hempstead",
    "Arthritis injections Berkhamsted",
    "Sports injury clinic Watford",
    "PRP for joint pain St Albans",
    
    // --- SKIN & AESTHETICS ---
    "Vampire Facial Hertfordshire",
    "Polynucleotides St Albans",
    "Exosome therapy London"
  ],
  openGraph: {
    title: "Doctor-Led PRP, P-Shot & ED Clinic St Albans | Healing-PRP",
    description:
      "Expert private care for Hair Restoration, Sexual Wellness & Pain Relief. Specialists in P-Shot and PRP therapy.",
    url: "https://www.healing-prp.co.uk",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Healing-PRP Clinics - Regenerative Medicine Specialists",
      },
    ],
  },
  alternates: {
    canonical: "https://www.healing-prp.co.uk",
  },
};

// --- SEO RICH FAQS (St Albans Focus) ---
const faqs = [
  {
    question: "Do I need a GP referral before booking treatment?",
    answer: "No. You can book a private, confidential consultation directly with Healing-PRP Clinics without a GP referral for erectile dysfunction treatment, intimate health concerns, PRP treatments, and other doctor-led services."
  },
  {
    question: "Who carries out the consultation and treatment at Healing-PRP Clinics?",
    answer: "All consultations and treatments at Healing-PRP Clinics are doctor-led and carried out by Dr Syed Abdi, GMC-registered Medical Director of the clinic."
  },
  {
    question: "Do you offer treatment for erectile dysfunction and men’s intimate health concerns?",
    answer: "Yes. We provide doctor-led assessment and treatment for erectile dysfunction, Peyronie’s disease, premature ejaculation, and other men’s intimate health concerns, depending on individual suitability."
  },
  {
    question: "What happens during the first consultation for erectile dysfunction or intimate health treatment?",
    answer: "Your first consultation includes a confidential discussion about your symptoms, medical history, goals, and possible contributing factors. Where appropriate, treatment options such as PRP-based treatment, shockwave therapy, or personalised medical care will be explained."
  },
  {
    question: "Is treatment at Healing-PRP Clinics confidential?",
    answer: "Yes. Healing-PRP Clinics provides discreet, private, doctor-led care for sensitive concerns including erectile dysfunction, intimate health, PRP treatment, and related regenerative medicine services."
  }
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics",
    "alternateName": "Healing-PRP St Albans",
    "image": "https://www.healing-prp.co.uk/hero_img.png",
    "url": "https://www.healing-prp.co.uk",
    "telephone": "+44 7990 364147",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "21 Victoria St",
      "addressLocality": "St Albans",
      "addressRegion": "Hertfordshire",
      "postalCode": "AL1 3JJ", 
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.7527, 
      "longitude": -0.3394
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "St Albans"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Hertfordshire"
      }
    ],
    "medicalSpecialty": ["RegenerativeMedicine", "Urology", "Orthopaedic", "Dermatology"],
    "medicalDirector": {
      "@type": "Physician",
      "name": "Dr Syed Abdi",
      "jobTitle": "Medical Director",
      "telephone": "+44 7990 364147",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "GMC Reference Number",
        "value": "6083294"
      },
      "url": "https://www.healing-prp.co.uk/our-doctor",
      "sameAs": [
        "https://www.gmc-uk.org/registrants/6083294"
      ]
    },
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Script
        id="home-faq-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* FIXED: Added flex flex-col w-full to prevent layout collapse */}
      <main className="flex flex-col w-full">
        <Hero />
        
        {/* --- INJECTED ED FEATURE BLOCK --- */}
        <EDFeatureBlock />

        <ServiceOverview />
        <PRPExplanationSection />

        <section className="py-12 bg-white border-t border-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
            
            <Link
              href="/our-doctor"
              className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-[#0A1128] hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2"
            >
              Meet Your Doctor
            </Link>

            <Link
              href="/prices"
              className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2"
            >
              View Treatment Prices
            </Link>
            
            <Link
              href="/faq"
              className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white rounded-xl font-bold transition-all active:scale-95 gap-2"
            >
              View Clinic FAQs
            </Link>
          </div>
        </section>

        <DynamicFAQ faqs={faqs} locationName="St Albans" />
        
        {/* --- GOOGLE REVIEWS SECTION ADDED HERE --- */}
        <div id="reviews-section" className="bg-white">
          <TrustReviews widgetUrl="https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586" />
        </div>

        <ContactCTASection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
