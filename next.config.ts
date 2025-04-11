import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-335ea302502b4be883413e4c10afa703.r2.dev', // Remove 'https://' here
        port: '',
        pathname: '/images/**', // This is fine, it matches all paths under /images/
      },
    ],
  },
};

export default nextConfig;
