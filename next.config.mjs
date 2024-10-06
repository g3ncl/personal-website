/* eslint-disable prefer-arrow/prefer-arrow-functions */
/** @type {import('next').NextConfig} */
const nextConfig = {
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
