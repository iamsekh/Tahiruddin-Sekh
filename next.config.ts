import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local static images from /img/ directory
    remotePatterns: [],
    // For local dev with images in /img (not /public), we unoptimize
    // Images in /public/img are served directly without Next.js optimization issues
  },
};

export default nextConfig;
