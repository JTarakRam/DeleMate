import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Increase from default 1mb to 10mb
    },
  },
};

export default nextConfig;