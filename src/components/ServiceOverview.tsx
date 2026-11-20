"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaSyringe,
  FaVenusMars,
  FaRunning,
  FaSmile,
  FaMapMarkerAlt,
} from "react-icons/fa";

type FeaturedTreatment = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

type AdditionalTreatment = {
  title: string;
  description: string;
  href: string;
  icon: IconType;
  iconStyle: string;
};

// Flagship treatment displayed as a wide horizontal card on desktop
const flagshipTreatment: FeaturedTreatment = {
  title: "Penile Filler",
  image: "Pfiller.webp",
  imageAlt: "Doctor-led hyaluronic acid penile filler treatment in Birmingham",
  description:
    "Doctor-led hyaluronic acid (HA) penile filler with individual assessment, proportionate volume planning, careful placement and structured aftercare.",
  href: "/birmingham/penis-enlargement",
};

// Remaining 4 core treatments arranged in a balanced 2x2 grid below
const featuredTreatments: FeaturedTreatment[] = [
  {
    title: "Erectile Dysfunction",
    image: "P-SHOT.webp",
    imageAlt: "Private doctor-led erectile dysfunction consultation in Birmingham",
    description:
      "Private medical assessment of erection difficulties, including possible contributing factors, medication review and tailored treatment options.",
    href: "/birmingham/erectile-dysfunction",
  },
  {
    title: "Peyronie's Disease",
    image: "Peyronies.webp",
    imageAlt: "Clinical assessment for Peyronie's disease in Birmingham",
    description:
      "Individual assessment of penile curvature, plaque and erectile function, including discussion of HA plaque injections, PRP and shockwave where appropriate.",
    href: "/birmingham/peyronies-disease",
  },
  {
    title: "P-Shot (PRP Treatment)",
    image: "PShot.webp",
    imageAlt: "Platelet-rich plasma P-Shot treatment in Birmingham",
    description:
      "Doctor-led platelet-rich plasma (PRP) treatment prepared from your own blood, discussed following individual clinical assessment and suitability review.",
    href: "/birmingham/p-shot",
  },
  {
    title: "Shockwave Therapy",
    image: "Shockwave.webp",
    imageAlt: "Low-intensity shockwave therapy for erectile dysfunction in Birmingham",
    description:
      "Non-invasive acoustic wave therapy used within selected erectile dysfunction and Peyronie's disease pathways to support vascular health.",
    href: "/birmingham/shockwave-therapy-erectile-dysfunction",
  },
];

const additionalTreatments: AdditionalTreatment[] = [
  {
    title: "Women's Intimate Health",
    description:
      "Consultations for vaginal dryness and other intimate health concerns, with treatment options discussed according to clinical suitability.",
    href: "/birmingham/sexual-rejuvenation",
    icon: FaVenusMars,
    iconStyle: "bg-rose-50 text-rose-600",
  },
  {
    title: "Hair Restoration",
    description:
      "Individual hair-loss and scalp assessment, with PRP and selected scalp-injection options discussed where appropriate.",
    href: "/birmingham/hair-restoration",
    icon: FaSyringe,
    iconStyle: "bg-teal-50 text-teal-700",
  },
  {
    title: "Joint Injections",
    description:
      "Assessment and selected injection options for joint pain, including PRP or corticosteroid injections when clinically appropriate.",
    href: "/birmingham/joint-injections",
    icon: FaRunning,
    iconStyle: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Facial Aesthetics",
    description:
      "Personalised facial aesthetics consultations, including skin boosters, polynucleotides and selected regenerative treatments.",
    href: "/birmingham/facial-aesthetics",
    icon: FaSmile,
    iconStyle: "bg-amber-50 text-amber-700",
  },
];

export default function BirminghamServiceOverview() {
  return (
    <div className="w-full font-inter">
      {/* Featured treatments: 1 flagship card + 2x2 grid on brand navy */}
      <section
        aria-labelledby="birmingham-featured-services-heading"
        className="relative isolate overflow-hidden bg-[#0A1128] py-20 text-white md:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-36 h-[28rem] w-[28rem] rounded-full bg-[#4041d1]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 -left-32 h-[26rem] w-[26rem] rounded-full bg-blue-700/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-300/25 bg-indigo-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-200">
              <FaMapMarkerAlt aria-hidden="true" /> Birmingham · Edgbaston
            </span>
            <h2
              id="birmingham-featured-services-heading"
              className="mb-5 font-raleway text-3xl font-bold tracking-tight text-white md:text-5xl"
            >
              Featured Treatments in Birmingham
            </h2>
            <p className="text-base leading-relaxed text-slate-200 md:text-lg">
              Private, discreet, doctor-led consultations and treatment options,
              with individual assessment, careful planning and personalised care.
            </p>
          </motion.div>

          {/* Compact max-w-4xl container keeps desktop cards sleek while staying full-width on mobile */}
          <div className="mx-auto max-w-4xl space-y-6 lg:space-y-7">
            {/* 1. Flagship Wide Card (stacked on mobile, horizontal on desktop) */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white text-slate-900 shadow-lg shadow-black/15 transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/30"
            >
              <Link
                href={flagshipTreatment.href}
                className="group grid grid-cols-1 md:grid-cols-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4041d1]"
              >
                {/* Left (~60% on desktop) / Top (mobile) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 md:col-span-7 md:aspect-auto md:min-h-[300px]">
                  <Image
                    src={flagshipTreatment.image}
                    alt={flagshipTreatment.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 520px"
                    quality={75}
                    loading="lazy"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                  />
                </div>

                {/* Right (~40% on desktop) / Bottom (mobile) */}
                <div className="flex flex-col justify-center p-6 md:col-span-5 md:p-8">
                  <h3 className="mb-3 font-raleway text-2xl font-bold text-slate-900 transition-colors group-hover:text-[#4041d1]">
                    {flagshipTreatment.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">
                    {flagshipTreatment.description}
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#4041d1] px-5 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-[#2a2bb8]">
                      Explore treatment
                      <FaArrowRight
                        aria-hidden="true"
                        className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>

            {/* 2. Balanced 2x2 Grid Below */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
              {featuredTreatments.map((treatment, index) => (
                <motion.article
                  key={treatment.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white text-slate-900 shadow-lg shadow-black/15 transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/30"
                >
                  <Link
                    href={treatment.href}
                    className="group flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4041d1]"
                  >
                    {/* Upper ~2/3: full-bleed treatment image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={treatment.image}
                        alt={treatment.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, 440px"
                        quality={75}
                        loading="lazy"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                      />
                    </div>

                    {/* Lower ~1/3: title, description, and single CTA cue */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="mb-2 font-raleway text-xl font-bold text-slate-900 transition-colors group-hover:text-[#4041d1] md:text-2xl">
                          {treatment.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600">
                          {treatment.description}
                        </p>
                      </div>

                      <div className="mt-5">
                        <span className="inline-flex items-center gap-2 rounded-xl bg-[#4041d1] px-4 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-[#2a2bb8]">
                          Explore treatment
                          <FaArrowRight
                            aria-hidden="true"
                            className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supporting treatments: single link per card */}
      <section
        aria-labelledby="birmingham-additional-services-heading"
        className="bg-white py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center md:mb-12">
            <h2
              id="birmingham-additional-services-heading"
              className="mb-3 font-raleway text-2xl font-bold text-slate-900 md:text-3xl"
            >
              More Services at Our Birmingham Clinic
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Our broader treatment range includes women’s intimate health, hair,
              joints and facial aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {additionalTreatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <motion.article
                  key={treatment.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <Link
                    href={treatment.href}
                    className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4041d1]"
                  >
                    <span
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-xl ${treatment.iconStyle}`}
                    >
                      <Icon aria-hidden="true" />
                    </span>
                    <h3 className="mb-3 font-raleway text-xl font-bold text-slate-900 transition-colors group-hover:text-[#4041d1]">
                      {treatment.title}
                    </h3>
                    <p className="mb-6 flex-grow text-sm leading-6 text-slate-600">
                      {treatment.description}
                    </p>
                    <span className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#4041d1] group-hover:text-[#2a2bb8]">
                      View treatment
                      <FaArrowRight
                        aria-hidden="true"
                        className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </motion.article>
              );
            })}
          </div>

          <p className="mx-auto mt-9 max-w-3xl text-center text-xs leading-relaxed text-slate-500">
            All treatments are subject to an individual consultation and suitability
            assessment. Benefits, risks, alternatives and evidence limitations are
            discussed before treatment; results vary.
          </p>
        </div>
      </section>
    </div>
  );
}
