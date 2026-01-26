import type { Metadata } from "next";
import FaqClient from "@/components/pages/FaqClient";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PRP Treatment FAQs Birmingham | Edgbaston Clinic | Healing-PRP", 
  description: "Patient FAQs for our Birmingham Edgbaston clinic. Specialist answers on PRP for joint pain, hair loss, and sexual health. Expert doctor-led care in the West Midlands.",
};

export default function BirminghamFaqPage() {
  const birminghamFaqs = [
    {
      question: "Are P-Shot® results permanent?",
      answer: "Results are long-lasting but not permanent as the body continues to age naturally. At our Birmingham clinic, patients typically enjoy improvements for 12-18 months, with many opting for annual maintenance to sustain peak performance."
    },
    {
      question: "Is PRP better than a steroid injection for knee pain?",
      answer: "Steroids offer fast, temporary relief but can weaken joint tissue over time. PRP is a regenerative therapy used at our Edgbaston clinic to promote long-term healing using your own growth factors. View our [Birmingham treatment prices](/prices) for more details."
    },
    {
      question: "Does PRP work for advanced 'bone-on-bone' arthritis?",
      answer: "PRP is most effective for early to moderate osteoarthritis. For advanced cases, our Birmingham-based doctor will assess your joint during a consultation to determine if PRP can still provide meaningful pain management for you."
    },
    {
      question: "How long do the results of a P-Shot® or O-Shot® last?",
      answer: "Most patients experience improved sensitivity and performance for 12 to 18 months. The effects are cumulative, and many of our West Midlands patients choose a single annual top-up to maintain optimal results."
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
      answer: "There is virtually no downtime; you can return to your daily routine in Birmingham immediately. We recommend 2-3 days of pelvic rest before resuming sexual activity to ensure injection sites heal perfectly."
    },
    {
      question: "Can I drive home after a PRP joint injection?",
      answer: "Yes, you can drive home to Solihull, Wolverhampton, or beyond immediately after treatment. You may feel slight stiffness for 24 hours, but it does not typically interfere with operating a vehicle."
    },
    {
      question: "Are your doctors GMC-registered?",
      answer: "Yes, all treatments at Healing-PRP Clinics are delivered by a GMC-registered doctor with over 10 years of medical experience, ensuring the highest standards of safety and care."
    },
    {
      question: "Can I combine different PRP treatments?",
      answer: "Absolutely. Many patients combine hair restoration with facial aesthetics or joint treatments. Visit our [Prices page](/prices) to see our range of regenerative services."
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
