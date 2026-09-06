/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Keep Supabase's dependency graph external on the server. This prevents
    // Next 14 dev rebuilds from referencing partially emitted vendor chunks.
    serverComponentsExternalPackages: [
      '@supabase/ssr',
      '@supabase/supabase-js',
      '@supabase/auth-js',
    ],
  },
  redirects: async () => {
    return [
      // Canonicalize legacy brand/icon endpoints so old browser/search caches
      // resolve to the current source-of-truth assets instead of a locale route.
      {
        source: '/icon.svg',
        destination: '/favicon.svg',
        permanent: true,
      },
      {
        source: '/apple-icon.png',
        destination: '/apple-touch-icon.png',
        permanent: true,
      },
      {
        source: '/manifest.json',
        destination: '/site.webmanifest',
        permanent: true,
      },
      {
        source: '/n3uralia-logo-new.png',
        destination: '/n3uralia-brand/n3uralia-sign-canonical.svg',
        permanent: true,
      },
      {
        source: '/n3uralia-logo-horizontal.jpg',
        destination: '/n3uralia-brand/n3uralia-logo-canonical.svg',
        permanent: true,
      },
      // www redirect (non-www -> www) — handled in middleware too, belt-and-suspenders
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'n3uralia.com' }],
        destination: 'https://www.n3uralia.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
