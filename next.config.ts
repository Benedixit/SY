import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-335ea302502b4be883413e4c10afa703.r2.dev',
        port: '',
        pathname: '/images/**',
      },

       {
        protocol: 'https',
        hostname: 'sabiyou2025.wordpress.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
        pathname: '/sabiyou/**',
      },
    ],
  },
};

export default nextConfig;
