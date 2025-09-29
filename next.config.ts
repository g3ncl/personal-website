import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/snake4d",
        destination: "https://snake4d.netlify.app",
      },
      {
        source: "/snake4d/:path*",
        destination: "https://snake4d.netlify.app/:path*",
      },
    ];
  },
};

export default nextConfig;
