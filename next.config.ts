import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      '@rainbow-me/rainbowkit',
      '@walletconnect/core',
      'thirdweb',
      '@b3dotfun/sdk'
    ]
  },
  transpilePackages: [
    '@rainbow-me/rainbowkit',
    '@walletconnect/core',
    'thirdweb',
    '@b3dotfun/sdk'
  ]
};

export default nextConfig;
