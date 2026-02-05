"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function RefundPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#4041d1] transition-colors duration-300 group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium font-inter">Back to Home</span>
          </Link>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="prose prose-slate max-w-none font-inter"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl font-raleway font-bold text-slate-900 mb-2">
              Refund & Cancellation Policy
            </h1>
            <p className="text-slate-600 text-sm mb-2 font-inter">
              Healing-PRP Clinics – healing-prp.co.uk
            </p>
            <p className="text-slate-600 text-sm font-inter">
              Last updated: {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-slate-700 leading-relaxed">
              This Refund & Cancellation Policy explains how Healing-PRP Clinics
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) handles deposits, cancellations, and
              refunds for consultations and treatments.
            </p>
          </motion.div>

          {/* Section 1 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              1. Consultations and Deposits
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Some appointments may require a deposit to secure your booking. The
              deposit amount and any specific terms will be confirmed at the time of
              booking.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              2. Cancellations and Rescheduling
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                We require at least 48 hours&apos; notice if you need to cancel or
                reschedule your appointment.
              </li>
              <li>
                If you cancel or reschedule with less than 48 hours&apos; notice, we
                reserve the right to retain your deposit or charge a cancellation fee.
              </li>
              <li>
                Failure to attend (a &quot;no-show&quot;) may result in loss of your deposit
                and/or a charge for the missed appointment.
              </li>
            </ul>
          </motion.section>

          {/* Section 3 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              3. Refunds for Completed Treatments
            </h2>
            <p className="text-slate-700 mb-4">
              Due to the nature of medical and aesthetic procedures, results cannot
              be guaranteed and will vary between individuals. For this reason:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                No refunds are offered on completed treatments where the service has
                been carried out as agreed.
              </li>
              <li>
                Dissatisfaction with the outcome alone, in the absence of clinical
                concerns, does not usually entitle you to a refund.
              </li>
              <li>
                If you have any concerns about side effects or complications, you
                should contact us as soon as possible so that we can review and advise.
              </li>
            </ul>
          </motion.section>

          {/* Section 4 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              4. Prepaid Courses and Packages
            </h2>
            <p className="text-slate-700 mb-4">
              If you purchase a course of treatments or a package:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                Any sessions that have already been taken are non-refundable.
              </li>
              <li>
                Refunds for unused sessions may be considered at our discretion and
                will usually be calculated based on the full, non-discounted price of
                the sessions already used, plus a reasonable administration fee if
                applicable.
              </li>
              <li>
                Courses and packages may have an expiry date, which will be explained
                at the time of purchase.
              </li>
            </ul>
          </motion.section>

          {/* Section 5 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              5. If We Need to Cancel
            </h2>
            <p className="text-slate-700 mb-4">
              In rare cases, we may need to cancel or reschedule your appointment
              (for example, due to clinician illness or clinic issues). If this
              happens:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                We will contact you as soon as reasonably possible to rearrange your
                appointment.
              </li>
              <li>
                Any deposits paid for a cancelled appointment will be transferred to
                a new appointment date or, if a suitable alternative cannot be found,
                may be refunded.
              </li>
            </ul>
          </motion.section>

          {/* Section 6 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              6. Adverse Events or Clinical Concerns
            </h2>
            <p className="text-slate-700 mb-4">
              Your safety is our priority. If you experience an adverse reaction or
              complication following treatment, we will offer a review and follow-up
              care as clinically appropriate.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Where a genuine clinical issue is identified that relates directly to
              the treatment provided, we will discuss appropriate next steps, which
              may include further treatment or partial refund, on a case-by-case basis.
            </p>
          </motion.section>

          {/* Section 7 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              7. Consumer Rights
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Nothing in this policy affects your statutory rights under UK consumer
              law. Where applicable, we will comply with any legal obligations
              regarding refunds or cancellations.
            </p>
          </motion.section>

          {/* Section 8 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              8. How to Contact Us
            </h2>
            <p className="text-slate-700 mb-4">
              If you have questions about this Refund & Cancellation Policy or wish
              to discuss a potential refund, please contact:
            </p>
            <div className="space-y-2 text-slate-700">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@healing-prp.co.uk"
                  // BRAND COLOR LOCK: #4041d1
                  className="text-[#4041d1] hover:text-[#2a2bb8] underline transition-colors"
                >
                  info@healing-prp.co.uk
                </a>
              </p>
              <p>
                <strong>Address:</strong> 21 Victoria Street, St Albans, AL1 3JJ
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
