import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'dl.dropboxusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', 
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com', 
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com', 
      },
    ],
  },
};

export default nextConfig;