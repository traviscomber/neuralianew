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
