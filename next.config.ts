import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/quiz',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/store',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/community',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/podcast',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/privacy',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/terms',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/disclaimer',
        destination: '/coming-soon',
        permanent: false,
      },
    ];
  },
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
