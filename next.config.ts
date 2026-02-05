import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  async redirects() {
    return [
      // 1. Redirect old Skin/Face blog -> Facial Aesthetics Page
      {
        source: "/blog/platelet-rich-plasma-and-injectable-skin-boosters-a-collaborative-approach",
        destination: "/facial-aesthetics",
        permanent: true,
      },
      // 2. Redirect old ED/P-Shot blog -> Sexual Rejuvenation Page
      {
        source: "/blog/erectile-dysfunction-prp-treatment-exo-p-shot",
        destination: "/sexual-rejuvenation",
        permanent: true,
      },
      // 3. Redirect old "What is PRP" blog -> Main Blog Page
      {
        source: "/blog/what-is-prp-platelet-rich-plasma",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
