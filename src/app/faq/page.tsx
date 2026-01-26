import type { Metadata } from "next";
import FaqClient from "@/components/pages/FaqClient";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Treatment FAQs | St Albans & Hertfordshire | Healing-PRP Clinics", 
  description: "Expert answers on PRP Hair Restoration, Joint Injections, and Sexual Rejuvenation. Find information on parking and specialist doctor-led treatments in St Albans.",
};

export default function MainFaqPage() {
  const mainFaqs = [
    {
      question: "Are the results of the P-Shot® permanent?",
      answer: "While results are long-lasting, they are not permanent as the natural aging process continues. The P-Shot® stimulates natural tissue and blood vessel growth that typically lasts 12-18 months, with many St Albans patients opting for annual maintenance to sustain peak performance."
    },
    {
      question: "Is PRP better than a steroid injection for knee pain?",
      answer: "Steroids provide fast, temporary anti-inflammatory relief but can weaken tendons over time. PRP is a regenerative therapy at our St Albans clinic that uses your own growth factors to promote long-term healing and lasting pain relief. View our [Joint Injection prices](/prices) for more details."
    },
    {
      question: "Does PRP work for advanced 'bone-on-bone' arthritis?",
      answer: "PRP is most effective for early to moderate osteoarthritis. For advanced 'bone-on-bone' cases, our St Albans-based doctor will assess your joint during a consultation to see if regenerative therapy can still provide meaningful pain management for you."
    },
    {
      question: "How long do the results of a P-Shot® or O-Shot® last?",
      answer: "Most patients enjoy improved sensitivity and performance for 12 to 18 months. The regenerative effects are cumulative, and many of our Hertfordshire patients choose a single annual top-up to maintain optimal results."
    },
    {
      question: "Do you offer a consultation before treatment?",
      answer: "Yes — every client receives a personal consultation with our GMC-registered doctor in St Albans to tailor a safe, effective plan specifically for your medical needs."
    },
    {
      question: "Can treatments be combined?",
      answer: "Yes. Many regenerative treatments, such as Microneedling and Skin Boosters, can be safely combined or staged to achieve superior aesthetic results."
    },
    {
      question: "Is there any downtime after treatment?",
      answer: "Most treatments involve minimal downtime. For sexual rejuvenation, we recommend 2-3 days of rest; for facial aesthetics, mild redness usually settles within 24–48 hours."
    },
    {
      question: "How many sessions will I need?",
      answer: "This depends on the condition. Hair restoration usually requires a course of 3-6 sessions, while joint injections may provide relief in 1-3 sessions. Visit our [Prices page](/prices) to see session bundles."
    },
    {
      question: "Are your products safe and approved?",
      answer: "We use only high-quality, CE-marked products and follow strict medical sterility protocols under the direct supervision of a GMC-registered doctor."
    },
    {
      question: "Can I drive home after a PRP joint injection?",
      answer: "Yes, you can drive home to Watford, Harpenden, or surrounding Hertfordshire areas immediately. You may feel slight stiffness for 24 hours, but it does not interfere with operating a vehicle."
    },
    {
      question: "Are clinical results guaranteed?",
      answer: "No medical procedure can guarantee results. Regenerative medicine relies on your body’s unique healing response; factors like age and lifestyle influence the outcome, which we discuss during your St Albans consultation."
    },
    {
      question: "Where exactly is the St Albans clinic located?",
      answer: "Our main clinic is located in St Albans, Hertfordshire. We are perfectly positioned for patients traveling from Harpenden, Watford, Luton, and North London."
    },
    {
      question: "Is there parking available at the St Albans location?",
      answer: "Yes, there is convenient parking available for patients. We provide specific parking directions and arrival instructions when your appointment is confirmed via WhatsApp."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainFaqs.map((faq) => ({
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
        id="faq-schema-main"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <FaqClient 
        title="Frequently Asked Questions"
        description="Clear answers about consultations, treatments, and what to expect at our St Albans clinic."
        locationBadge="GMC-Registered | CE-Marked | St Albans & Hertfordshire"
        faqs={mainFaqs}
      />
      <Footer />
    </>
  );
}
