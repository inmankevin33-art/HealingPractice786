import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Treatment Prices | Healing PRP",
  description:
    "Transparent, doctor-led pricing for regenerative treatments. View prices for skin, hair, sexual wellness and joint injections.",
};

type PriceItem = {
  name: string;
  price: string;
  note?: string;
};

type PriceSection = {
  title: string;
  subtitle?: string;
  items: PriceItem[];
};

const PRICE_SECTIONS: PriceSection[] = [
  {
    title: "Skin & Face",
    subtitle: "Natural skin regeneration, glow and texture support.",
    items: [
      { name: "PRP Facial (Vampire Facial)", price: "£350" },
      { name: "PRP + Microneedling", price: "From £150" },
      { name: "PRP for Acne Scars", price: "£450", note: "Case-dependent" },
    ],
  },
  {
    title: "Hair Restoration",
    subtitle: "Doctor-led PRP for thinning hair and hairline support.",
    items: [
      { name: "PRP Hair Treatment (Single Session)", price: "£350" },
      { name: "Course of 3 PRP Hair Sessions", price: "£950", note: "Best value" },
    ],
  },
  {
    title: "Sexual Wellness",
    subtitle: "Regenerative treatments to support confidence and wellbeing.",
    items: [
      { name: "P-Shot (PRP for Erectile Dysfunction)", price: "£700" },
      { name: "O-Shot (Female Sexual Wellness)", price: "£650" },
    ],
  },
  {
    title: "Joint & Orthopaedic",
    subtitle: "PRP for tendon and joint support (assessment required).",
    items: [
      { name: "PRP Joint Injection (Single Joint)", price: "£450" },
      { name: "PRP for Tennis Elbow", price: "£400" },
    ],
  },
];

const FAQS = [
  {
    q: "Are the prices fixed?",
    a: "Prices are indicative. Final pricing is confirmed after a doctor-led assessment based on the area treated, clinical suitability, and the treatment plan.",
  },
  {
    q: "Do I need a consultation before booking?",
    a: "Yes. A consultation helps confirm suitability, set expectations, and tailor your plan. In some cases we can do consultation and treatment on the same day.",
  },
  {
    q: "Why do some treatments have a course option?",
    a: "Many regenerative treatments work best as a planned course. Courses are priced to reflect better value and a structured approach to results.",
  },
  {
    q: "Is PRP safe?",
    a: "PRP uses your own blood-derived platelets. As with any injectable procedure, there are risks such as bruising, swelling, discomfort, or infection, which are discussed during consent.",
  },
];

// Minimal variants (so your motion code works)
const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.35, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function PricesPage() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/447990364147", "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      {/* Hero Section (copied style from Facial Aesthetics) */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/hero_img.png"
            alt="Healing PRP background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative w-full z-20 flex h-full">
          <div className="w-full max-w-7xl mt-10 md:mt-0 mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div
                  className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
                  variants={itemVariants}
                >
                  GMC-registered | CE-marked | Transparent Pricing
                </motion.div>

                <motion.h1
                  className="text-2xl lg:text-4xl text-gray-700 font-raleway leading-tight mb-2"
                  variants={itemVariants}
                >
                  Treatment Prices
                </motion.h1>

                <motion.p
                  className="text-sm font-inter text-gray-500 leading-relaxed max-w-3xl"
                  variants={itemVariants}
                >
                  Clear pricing for PRP and regenerative treatments. Final costs
                  are confirmed after a doctor-led assessment based on suitability
                  and your personalised plan.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col mt-3 sm:flex-row gap-4"
                >
                  {isDesktop ? (
                    <button
                      onClick={handleWhatsAppClick}
                      className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 gap-2"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Book on WhatsApp
                    </button>
                  ) : (
                    <a
                      href="https://wa.me/447990364147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 gap-2"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Book on WhatsApp
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="px-6 w-full md:w-max inline-flex items-center justify-center md:text-sm text-xs gap-2 py-3 cursor-pointer border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] rounded-lg font-inter bg-white font-medium transition-all duration-300 hover:bg-[var(--brand-blue-50)]"
                  >
                    <FaEnvelope className="w-5 h-5" />
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content wrapper (your existing page content unchanged) */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Prices */}
        <section className="space-y-8">
          {PRICE_SECTIONS.map((section) => (
            <div key={section.title} className="border rounded-2xl p-6 md:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                {section.subtitle ? (
                  <p className="text-gray-600">{section.subtitle}</p>
                ) : null}
              </div>

              <div className="divide-y">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-6 py-4"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {item.note ? (
                        <p className="text-sm text-gray-500 mt-1">{item.note}</p>
                      ) : null}
                    </div>
                    <p className="font-semibold whitespace-nowrap">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Packages / notes */}
        <section className="mt-10 border rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-3">Important notes</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              • Prices are indicative and may vary based on clinical assessment and
              the treatment plan.
            </li>
            <li>
              • Courses are often recommended for best outcomes; we’ll discuss the
              right schedule for you.
            </li>
            <li>
              • If you have a medical condition or take regular medication, please
              mention this during booking.
            </li>
          </ul>
        </section>

        {/* CTA band */}
        <section className="mt-12 border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Not sure which treatment you need?
            </h3>
            <p className="text-gray-600">
              Book a consultation and we’ll recommend a safe, personalised plan.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="btn-link btn-link-primary"
            >
              Book consultation
            </Link>
            <Link
              href="/contact"
              className="btn-link btn-link-outline"
            >
              Message us
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="border rounded-2xl p-5">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="text-gray-600 mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="text-xs text-gray-500 mt-12">
          Prices are indicative. A doctor-led consultation is required to confirm
          suitability and agree a personalised plan.
        </p>
      </div>
    </main>
  );
}
