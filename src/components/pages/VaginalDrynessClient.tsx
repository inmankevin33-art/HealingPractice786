"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaDroplet,
  FaEnvelope,
  FaHeartbeat,
  FaLeaf,
  FaShieldAlt,
  FaStethoscope,
  FaUserMd,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";

interface VaginalDrynessClientProps {
  oShotHref: string;
  vaginalHaHref: string;
  consultationHref?: string;
  locationName?: string;
  locationLabel?: string;
}

export default function VaginalDrynessClient({
  oShotHref,
  vaginalHaHref,
  consultationHref = "/contact",
  locationName,
  locationLabel,
}: VaginalDrynessClientProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const displayLocation = locationLabel ?? locationName;
  const isBirmingham = locationName?.toLowerCase() === "birmingham";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <>
      <section className="relative min-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
          <img
            src="/vaginal-dryness-treatment.webp"
            alt="Doctor-led consultation for vaginal dryness"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <motion.div
            custom={0}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-block px-4 py-1.5 mb-5 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm"
          >
            <span className="text-blue-100 text-xs font-bold tracking-widest uppercase font-inter">
              Doctor-Led • Discreet • Non-Hormonal Options
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="text-3xl md:text-5xl font-bold font-raleway text-white leading-tight mb-5"
          >
            Vaginal Dryness Support
            {displayLocation ? (
              <span className="block text-xl md:text-3xl text-blue-100 mt-2">in {displayLocation}</span>
            ) : null}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="text-base md:text-xl text-blue-50/95 font-inter leading-relaxed max-w-3xl mx-auto mb-8"
          >
            If dryness, reduced lubrication, or discomfort during intimacy is affecting confidence,
            we offer a careful medical assessment and personalised treatment plan. Options may
            include the O-Shot and vaginal hyaluronic acid treatment for selected patients.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={consultationHref}
              className="px-8 py-3.5 bg-[#4041d1] hover:bg-[#2f30bd] text-white rounded-xl font-bold transition-all duration-300 shadow-xl shadow-[#4041d1]/20"
            >
              Book Confidential Consultation
            </Link>
            <Link
              href={vaginalHaHref}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold border border-white/25 transition-all duration-300"
            >
              Explore Vaginal HA Treatment
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6 text-center">
            Understanding Vaginal Dryness
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Vaginal dryness can be linked to hormonal change, life stage, stress, medication,
            and changes in tissue quality. Symptoms may include irritation, tightness, reduced
            lubrication, and discomfort during intimacy. A doctor-led assessment helps identify
            likely causes and the most appropriate next step.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 font-inter">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-10 text-center">Common Causes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Perimenopause and menopause-related tissue changes",
              "Postpartum recovery and breastfeeding-associated dryness",
              "Contraception or medication-related lubrication changes",
              "Stress, lifestyle factors, and recurrent local irritation",
            ].map((item) => (
              <div key={item} className="bg-white rounded-2xl border border-slate-200 p-6 flex items-start gap-3">
                <FaCheckCircle className="text-[#4041d1] mt-1" />
                <p className="text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0f172a] rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-raleway font-bold mb-5">Our Doctor-Led Approach</h2>
            <p className="text-slate-200 leading-relaxed mb-8">
              We focus on medically responsible care: thorough history, symptom review,
              discussion of non-procedural options, and treatment planning only when clinically
              appropriate. We do not promise guaranteed outcomes, and suitability varies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-2xl p-5"><FaUserMd className="mb-3" />1:1 doctor consultation</div>
              <div className="bg-white/10 rounded-2xl p-5"><FaStethoscope className="mb-3" />Assessment-first safety checks</div>
              <div className="bg-white/10 rounded-2xl p-5"><FaClipboardCheck className="mb-3" />Personalised recommendations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 font-inter">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-10 text-center">Treatment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4"><FaHeartbeat /></div>
              <h3 className="text-2xl font-bold font-raleway text-slate-900 mb-3">O-Shot</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                The O-Shot uses platelet-rich plasma and may help support tissue quality,
                sensitivity, and intimate comfort for selected patients following assessment.
              </p>
              <Link href={oShotHref} className="inline-flex items-center gap-2 text-[#4041d1] font-bold hover:underline">
                Learn about O-Shot <FaArrowRight />
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4"><FaDroplet /></div>
              <h3 className="text-2xl font-bold font-raleway text-slate-900 mb-3">Vaginal Hyaluronic Acid Treatment</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Hyaluronic acid treatment is a non-hormonal option designed to support hydration
                and tissue comfort in the intimate area, with personalised dosing and review.
              </p>
              <Link href={vaginalHaHref} className="inline-flex items-center gap-2 text-[#4041d1] font-bold hover:underline">
                Explore vaginal HA <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white font-inter">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold font-raleway text-slate-900 mb-4">Personalised Planning</h3>
            <p className="text-slate-600 leading-relaxed">
              Your plan is tailored to symptom pattern, tissue health, goals, and comfort level.
              Some patients start with conservative care and progress only if needed.
            </p>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold font-raleway text-slate-900 mb-4">Suitability</h3>
            <p className="text-slate-600 leading-relaxed">
              Treatments are suitable for selected patients after medical assessment. Where
              symptoms suggest another condition, we advise appropriate onward investigation or referral.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A1128] text-white font-inter">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold mb-10 text-center">Consultation, Benefits, and Recovery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2"><FaEnvelope /> Consultation</h3>
              <p className="text-slate-200">Confidential consultation, symptom review, and clear discussion of options and expected timelines.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2"><FaLeaf /> Benefits</h3>
              <p className="text-slate-200">Potential improvements may include hydration, comfort, confidence, and reduced friction. Results vary.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2"><FaShieldAlt /> Recovery</h3>
              <p className="text-slate-200">Most patients return to normal routine quickly, with brief aftercare guidance from the clinical team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
            <div className="border border-slate-200 rounded-2xl p-6">
              <FaUserMd className="mx-auto text-[#4041d1] mb-3 text-2xl" />
              <p className="font-semibold text-slate-900">Doctor-led care pathway</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6">
              <FaShieldAlt className="mx-auto text-[#4041d1] mb-3 text-2xl" />
              <p className="font-semibold text-slate-900">Discreet and clinically responsible</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6">
              <FaHeartbeat className="mx-auto text-[#4041d1] mb-3 text-2xl" />
              <p className="font-semibold text-slate-900">Personalised intimate health support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4">Take the Next Step with Confidence</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Book a confidential consultation to discuss vaginal dryness symptoms and available
            non-hormonal options. We will advise what is suitable for you, with clear and honest guidance.
          </p>
          <Link
            href={consultationHref}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4041d1] hover:bg-[#2f30bd] text-white rounded-xl font-bold transition-all duration-300"
          >
            Book Consultation <FaArrowRight />
          </Link>
        </div>
      </section>

      <TrustReviews
        widgetUrl={
          isBirmingham
            ? "https://cdn.trustindex.io/loader.js?e2cf4a365239367f2a3607c0513"
            : "https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586"
        }
      />
      <ContactCTASection />
      <LocationSection />
      <Footer />
    </>
  );
}
