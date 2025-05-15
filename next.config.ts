import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  async rewrites() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "bio.paularies.ca",
          },
        ],
        destination: "/bio",
      },
    ];
  },
};

export default nextConfig;
