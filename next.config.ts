import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    
    module.exports = {
      experimental: {
        optimizePackageImports: ["@phosphor-icons/react"],
      },
    }

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
