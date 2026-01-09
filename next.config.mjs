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
};

export default nextConfig;
