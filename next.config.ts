import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimize output for modern browsers
  experimental: {
    // Enable optimized CSS with inlining
    optimizeCss: true,
    // Optimize package imports
    optimizePackageImports: ["react", "react-dom"],
  },

  // Enable compression
  compress: true,

  // Production source maps (disabled for smaller bundle)
  productionBrowserSourceMaps: false,

  // Rewrites for Snake 4D and Telemetry
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
      {
        source: "/telemetry",
        destination: "https://kart-telemetry.netlify.app",
      },
      {
        source: "/telemetry/:path*",
        destination: "https://kart-telemetry.netlify.app/:path*",
      },
    ];
  },

  // Headers for performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
