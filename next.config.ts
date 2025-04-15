import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
