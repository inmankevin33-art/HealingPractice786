import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Prevent the practice website from being indexed */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ];
  },

  // The previous blog redirects are no longer required because
  // the blog has been removed from this practice website.
};

export default nextConfig;
