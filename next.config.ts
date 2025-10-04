import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com", "images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
