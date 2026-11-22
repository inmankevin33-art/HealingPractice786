"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaGoogle,
  FaLock,
  FaMapMarkerAlt,
  FaUserMd,
} from "react-icons/fa";

// The ED questionnaire is only downloaded if a visitor opens it.
const OnlineAssessmentModal = dynamic(
  () => import("./OnlineAssessmentModal"),
  { ssr: false }
);

const treatmentLinks = [
  { label: "Penile filler", href: "/birmingham/penis-enlargement" },
  { label: "Erectile dysfunction", href: "/birmingham/erectile-dysfunction" },
  { label: "Peyronie's disease", href: "/birmingham/peyronies-disease" },
  { label: "P-Shot (PRP)", href: "/birmingham/p-shot" },
  { label: "Women's intimate health", href: "/birmingham/o-shot" },
] as const;

export default function BirminghamHero() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  // Preserve the contact-drawer integration used by the existing Hero.
  const handleConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    document
      .getElementById("contact-form-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToReviews = () => {
    document
      .getElementById("reviews-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="birmingham-hero"
      aria-labelledby="birmingham-hero-heading"
      className="relative isolate overflow-hidden bg-[#0A1128] font-inter text-white"
    >
      {/* Lightweight CSS background accents; no full-screen background image. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 16% 18%, rgba(64,65,209,0.20), transparent 44%), radial-gradient(ellipse at 90% 82%, rgba(35,89,160,0.12), transparent 42%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-7 px-4 pb-8 pt-7 sm:gap-10 sm:px-6 sm:pb-12 sm:pt-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-20">
        {/* Concise introduction and actions first for mobile visitors. */}
        <div className="min-w-0 lg:py-4">
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#8086fa]/35 bg-[#4041d1]/15 px-3 py-1.5 text-[10px] font-bold uppercase leading-4 tracking-[0.09em] text-[#C5CBFF] sm:mb-6 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.13em]">
            <FaMapMarkerAlt aria-hidden="true" className="shrink-0" />
            <span>Birmingham · Edgbaston Medical Quarter</span>
          </div>

          <h1
            id="birmingham-hero-heading"
            className="max-w-[680px] font-raleway text-[clamp(2.1rem,8.4vw,2.7rem)] font-bold leading-[1.12] tracking-tight text-white sm:text-[clamp(2.5rem,5.2vw,4.35rem)] sm:leading-[1.10]"
          >
            Doctor-Led Intimate Health in{" "}
            <span className="text-[#A9B6FF]">Birmingham</span>
          </h1>

          <p className="mt-4 max-w-[610px] text-[15px] leading-6 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
            Discreet, personalised consultations for men&apos;s and women&apos;s intimate
            health with Dr Syed Abdi, a GMC-registered GP.
          </p>

          <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <button
              type="button"
              onClick={handleConsultation}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#4041d1] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_36px_rgba(32,35,138,0.26)] transition-colors hover:bg-[#5152e6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Request Private Consultation
              <FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setIsAssessmentOpen(true)}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/30 bg-white/[0.07] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/[0.13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Take Free ED Assessment
            </button>
          </div>

          <div
            aria-label="Explore Birmingham treatments"
            className="mt-5 hidden flex-wrap gap-2 lg:mt-6 lg:flex"
          >
            {treatmentLinks.map((treatment) => (
              <Link
                key={treatment.href}
                href={treatment.href}
                prefetch={false}
                className="rounded-full border border-[#777CF5]/70 bg-[#4041d1]/55 px-3 py-1.5 text-[12px] font-semibold leading-5 text-white transition-colors hover:border-[#A9B6FF] hover:bg-[#4041d1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-3.5 sm:py-2 sm:text-sm"
              >
                {treatment.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 hidden flex-wrap items-center gap-x-5 gap-y-2 text-sm lg:mt-5 lg:flex">
            <a
              href="#treatments"
              className="inline-flex items-center gap-2 font-semibold text-[#BEC8FF] underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
            >
              Explore all treatments
              <FaArrowRight aria-hidden="true" className="h-3 w-3" />
            </a>
            <span className="text-xs text-slate-400">
              Consultation and suitability assessment required
            </span>
          </div>
        </div>

        {/* One genuine doctor portrait. Mobile 4:3 crop with extra headroom, portrait on larger screens. */}
        <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] lg:mx-0 lg:max-w-none">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 rounded-[2.2rem] bg-[#4041d1]/15 blur-2xl sm:-inset-5"
          />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#1E293B] shadow-[0_26px_70px_rgba(0,0,0,0.28)] sm:aspect-[4/5] sm:rounded-[1.75rem]">
            <Image
              src="birmingham-doctor-hero.webp"
              alt="Dr Syed Abdi, GMC-registered doctor and medical director of Healing PRP Clinics"
              fill
              priority
              sizes="(max-width: 639px) min(380px, calc(100vw - 32px)), (max-width: 1023px) 440px, 42vw"
              quality={80}
              className="object-cover object-[center_16%] sm:object-top lg:object-[center_22%]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A1128]/75 via-transparent to-transparent"
            />

            <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-xl border border-white/20 bg-[#0A1128]/90 px-3.5 py-2 sm:bottom-5 sm:left-5 sm:right-5 sm:px-5 sm:py-3.5 lg:bottom-6 lg:left-6 lg:right-6 lg:py-4">
              <p className="font-raleway text-base font-bold text-white sm:text-lg">
                Dr Syed Abdi
              </p>
              <p className="mt-0.5 text-xs text-slate-200 sm:text-sm">
                Medical Director
              </p>
              <Link
                href="/our-doctor"
                prefetch={false}
                className="mt-1 inline-flex items-center gap-2 text-xs font-semibold text-[#BFC9FF] underline decoration-white/25 underline-offset-4 transition-colors hover:text-white sm:mt-2"
              >
                Meet your doctor
                <FaArrowRight aria-hidden="true" className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile only: place the treatment links after the doctor photograph.
            On desktop the original links remain beside the portrait. */}
        <nav aria-label="Explore Birmingham treatments" className="min-w-0 lg:hidden">
          <div className="flex flex-wrap gap-2">
            {treatmentLinks.map((treatment) => (
              <Link
                key={treatment.href}
                href={treatment.href}
                prefetch={false}
                className="rounded-full border border-[#777CF5]/70 bg-[#4041d1]/55 px-3 py-1.5 text-[12px] font-semibold leading-5 text-white transition-colors hover:border-[#A9B6FF] hover:bg-[#4041d1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-3.5 sm:py-2 sm:text-sm"
              >
                {treatment.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a
              href="#treatments"
              className="inline-flex items-center gap-2 font-semibold text-[#BEC8FF] underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
            >
              Explore all treatments
              <FaArrowRight aria-hidden="true" className="h-3 w-3" />
            </a>
            <span className="text-xs text-slate-400">
              Consultation and suitability assessment required
            </span>
          </div>
        </nav>
      </div>

      {/* Compact trust strip. No fixed or unverified star rating. */}
      <div className="relative border-t border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-4 lg:gap-6 lg:px-8">
          <button
            type="button"
            onClick={scrollToReviews}
            className="group flex min-w-0 items-center gap-3 text-left focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#4285F4]">
              <FaGoogle aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold text-white group-hover:underline sm:text-sm">
                Patient Reviews
              </span>
              <span className="mt-0.5 block text-[11px] text-slate-300">
                Read experiences
              </span>
            </span>
          </button>

          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4041d1]/35 text-xs font-bold text-white">
              10+
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold text-white sm:text-sm">
                Years of GP Experience
              </span>
              <span className="mt-0.5 block text-[11px] text-slate-300">
                UK clinical care
              </span>
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4041d1]/35 text-white">
              <FaUserMd aria-hidden="true" className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold text-white sm:text-sm">
                GMC-Registered Doctor
              </span>
              <span className="mt-0.5 block text-[11px] text-slate-300">
                Doctor-led consultations
              </span>
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4041d1]/35 text-white">
              <FaLock aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold text-white sm:text-sm">
                Discreet Private Care
              </span>
              <span className="mt-0.5 block text-[11px] text-slate-300">
                Confidential appointments
              </span>
            </span>
          </div>
        </div>
      </div>

      {isAssessmentOpen && (
        <OnlineAssessmentModal
          isOpen={isAssessmentOpen}
          onClose={() => setIsAssessmentOpen(false)}
        />
      )}
    </section>
  );
}
