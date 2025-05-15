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
        destination: "/bio",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "bio.paularies.ca",
          },
        ],
        destination: "/bio/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;