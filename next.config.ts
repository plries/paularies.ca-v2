import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "bio.paularies.ca",
          },
        ],
        destination: "https://paularies.ca/bio",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
