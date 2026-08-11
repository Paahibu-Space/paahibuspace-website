/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/v1/programs/:slug/waitlist',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'}/api/v1/programs/:slug/waitlist`,
      },
      {
        source: '/api/v1/newsletter/subscribe',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'}/api/v1/newsletter/subscribe`,
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Local backend (127.0.0.1/localhost) resolves to a private IP; Next.js blocks
    // optimizing images from private IPs by default (SSRF protection). Only relax
    // this outside production, where the API is expected to be a public domain.
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== 'production',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'updates.paahibuspace.org',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
