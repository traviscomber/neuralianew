/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['n3uralia.com', 'www.n3uralia.com', 'blob.v0.dev'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'n3uralia.com',
      },
      {
        protocol: 'https',
        hostname: 'www.n3uralia.com',
      },
      {
        protocol: 'https',
        hostname: 'blob.v0.dev',
      },
    ],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/www.n3uralia.com/:path*',
        destination: 'https://n3uralia.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
