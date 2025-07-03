import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
  // Disable static optimization for pages that use B3 SDK
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
