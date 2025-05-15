import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "bio.paularies.ca",
            },
          ],
          destination: "/bio/:path*",
        },
      ],
    };
  },
};

export default nextConfig;