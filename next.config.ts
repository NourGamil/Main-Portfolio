import type { NextConfig } from "next";

const nextConfig: NextConfig = {
output: 'export', // Add this line
  images: {
    unoptimized: true, // Required for static export
  },
  // Add this block to ignore TypeScript checks completely
  typescript: {
    ignoreBuildErrors: true,
  },
  // Also good to ignore ESLint for a faster build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
