import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["example.com", "logo.clearbit.com"]
  }
};

export default nextConfig;
