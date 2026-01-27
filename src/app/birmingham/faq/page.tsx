import type { Metadata } from "next";
import FaqClient from "@/components/pages/FaqClient";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Optimized Title: Result will be "Treatment & Clinic FAQs | Birmingham Clinic"
  title: "Treatment & Clinic FAQs", 
  
  description: "Patient FAQs for our Birmingham Edgbaston clinic. Specialist answers on PRP for joint pain, hair loss, and sexual health. Expert doctor-led care in the West Midlands.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/faq",
  },

  // 2. Added Regional Keywords
  keywords: [
    "PRP treatment FAQ Birmingham",
    "Is PRP safe for joints",
    "P-Shot results Birmingham",
    "PRP hair loss questions West Midlands",
    "Edgbaston medical quarter PRP clinic",
    "Joint injection recovery time Solihull",
    "Private PRP doctor Wolverhampton",
    "O-Shot safety Sutton Coldfield",
    "Healing-PRP Birmingham parking",
    "GMC registered doctor Edgbaston"
  ],
};

export default function BirminghamFaqPage() {
  const birminghamFaqs = [
    {
      question: "Are P-Shot® results permanent?",
      answer: "Results are long-lasting but not permanent as the body continues to age naturally. At our Birmingham clinic, patients enjoy improvements for months; you can find full details on our [Sexual Rejuvenation](/birmingham/sexual-rejuvenation) page."
    },
    {
      question: "Is PRP better than a steroid injection for knee pain?",
      answer: "Steroids offer fast, temporary relief but can weaken joint tissue over time. PRP is a regenerative therapy at our Edgbaston clinic that promotes long-term healing. View full details on our [Joint Injections](/birmingham/joint-injections) page."
    },
    {
      question: "Can I get PRP Hair Restoration in the West Midlands?",
      answer: "Absolutely. We offer advanced PRP and Exosome therapy at our Birmingham clinic for both men and women. Read about our specialized protocols on the [Hair Restoration](/birmingham/hair-restoration) page."
    },
    {
      question: "Does PRP work for advanced 'bone-on-bone' arthritis?",
      answer: "PRP is most effective for early to moderate osteoarthritis. For advanced cases, our Birmingham-based doctor will assess if regenerative therapy is still a viable option. See our [Joint Injections](/birmingham/joint-injections) section for more."
    },
    {
      question: "How long do the results of a P-Shot® or O-Shot® last?",
      answer: "Most patients experience improved sensitivity and performance for months or more depending upon individual case. To see how these treatments work, visit our [Sexual Rejuvenation](/birmingham/sexual-rejuvenation) section."
    },
    {
      question: "Where exactly is the Birmingham clinic located?",
      answer: "Our clinic is situated in the prestigious Edgbaston Medical Quarter. It is easily accessible for patients traveling from Birmingham City Centre, Solihull, and Sutton Coldfield."
    },
    {
      question: "Is there parking available at the Birmingham location?",
      answer: "Yes, we have dedicated parking for patients. There is also ample, low-cost street parking available in the immediate vicinity of our Edgbaston clinic."
    },
    {
      question: "Is there any downtime after Sexual Rejuvenation treatments?",
      answer: "There is virtually no downtime; you can return to your Birmingham routine immediately. We recommend 2-3 days of rest before resuming sexual activity; see more recovery tips on our [Sexual Rejuvenation](/birmingham/sexual-rejuvenation) page."
    },
    {
      question: "Can I drive home after a PRP joint injection?",
      answer: "Yes, you can drive home to Solihull, Wolverhampton, or beyond immediately after treatment. Any mild stiffness usually subsides within 24 hours. Check our [Joint Injections](/birmingham/joint-injections) FAQ for post-care."
    },
    {
      question: "Are your doctors GMC-registered?",
      answer: "Yes, all treatments at Healing-PRP Clinics are delivered by a GMC-registered doctor with over 10 years of medical experience. This ensures the highest standards of safety for our West Midlands patients."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": birminghamFaqs.map((faq) => ({
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
        id="faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <FaqClient 
        title="Birmingham Clinic FAQs"
        description="Specific information about our Edgbaston location, parking, and specialist regenerative treatments in Birmingham."
        locationBadge="Birmingham • Edgbaston • West Midlands"
        faqs={birminghamFaqs}
      />
      <Footer />
    </>
  );
}
