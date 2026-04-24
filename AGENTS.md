# AGENTS.md

## Project
This repository powers the Healing-PRP Clinics website built with Next.js.

The site often uses:
- shared client components for reusable page content
- location-specific `page.tsx` files for metadata, canonicals, FAQs, and FAQ schema

Typical shared pages serve:
- St Albans
- Birmingham

Keep the brand tone:
- doctor-led
- discreet
- clinically credible
- clear
- reassuring
- conversion-focused
- compliant

---

## Architecture Rules

### Shared client components
Use shared client components for:
- reusable section content
- page layouts shared across locations
- treatment explanations
- trust blocks
- CTA sections

Shared client components must:
- stay location-neutral unless location text is passed by prop
- avoid hardcoded St Albans or Birmingham wording
- use prop-based internal links where needed

### Location `page.tsx`
Keep these in location-specific `page.tsx` files:
- metadata
- title
- meta description
- canonical URL
- FAQ array
- FAQ JSON-LD schema
- location-specific SEO tweaks
- location-specific internal link paths

Do not move FAQ schema into shared client components unless explicitly requested.

---

## Content Rules

All medical website copy should be:
- professional
- warm
- calm
- discreet
- easy to understand
- medically responsible
- conversion-aware

Avoid:
- exaggerated claims
- guaranteed outcomes
- sensational wording
- spammy or generic marketing language

Prefer phrases like:
- may help support
- for selected patients
- following assessment
- doctor-led
- non-hormonal option
- results vary
- suitability varies

---

## SEO Rules

Write pages for:
- search intent
- real patient conversion

Preferred page flow:
1. symptom or problem
2. explanation
3. treatment options
4. suitability
5. process
6. benefits
7. recovery
8. CTA

Use prop-based internal links in shared components when location URLs differ.

Avoid keyword cannibalisation:
- symptom pages should introduce treatments
- dedicated treatment pages should contain deeper treatment detail

---

## Medical Safety Rules

This is a healthcare website. Content must stay careful and clinically responsible.

Always:
- describe treatments as suitable only after assessment
- acknowledge that results vary
- avoid promising outcomes
- avoid overstating evidence
- distinguish standard care from newer regenerative options where relevant

Prefer benefit wording such as:
- hydration
- comfort
- tissue support
- symptom improvement
- improved confidence
- improved comfort during intimacy

---

## Vaginal Dryness Page Rules

This page is a symptom-led page, not a dedicated treatment page.

It should:
- explain vaginal dryness clearly
- discuss possible causes
- mention O-Shot
- mention vaginal hyaluronic acid treatment
- guide users toward consultation
- stay reusable for both St Albans and Birmingham

It should not:
- hardcode location-specific wording in the shared client component
- include FAQ schema in the shared client component
- go so deep into O-Shot or vaginal HA that it cannibalises the dedicated pages

Keep:
- shared content in the client component
- FAQs and FAQ schema in location `page.tsx`
- treatment links passed by props

---

## Intimate Health Content Rules

For intimate treatment pages:
- keep tone respectful and discreet
- avoid explicit or sensational language
- keep wording patient-friendly and dignified
- prioritise privacy, reassurance, and clarity

Use terms like:
- intimate comfort
- vaginal dryness
- reduced lubrication
- discomfort during intimacy
- tissue quality
- non-hormonal support
- confidential consultation

---

## If Unsure

If the change affects:
- metadata
- local SEO
- FAQ schema
- canonical URLs
- location-specific links

put it in the location `page.tsx`.

If the change affects:
- layout
- shared medical content
- reusable sections
- common CTA blocks
- shared treatment explanation

put it in the shared client component.
