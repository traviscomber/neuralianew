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
      // www redirect (non-www -> www)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'n3uralia.com',
          },
        ],
        destination: 'https://www.n3uralia.com/:path*',
        permanent: true,
      },
      // Deprecated agent routes - redirect to home
      {
        source: '/:locale/agent-matrix',
        destination: '/:locale/',
        permanent: true,
      },
      {
        source: '/:locale/agent-operations',
        destination: '/:locale/',
        permanent: true,
      },
      // Deprecated Chile industry pages - redirect to main solutions
      {
        source: '/:locale/agentes-ia-santiago-chile',
        destination: '/:locale/soluciones',
        permanent: true,
      },
      {
        source: '/:locale/agentes-ia-chile',
        destination: '/:locale/soluciones',
        permanent: true,
      },
      {
        source: '/:locale/agentes-ia-retail-chile',
        destination: '/:locale/soluciones',
        permanent: true,
      },
      {
        source: '/:locale/agentes-ia-mineria-chile',
        destination: '/:locale/soluciones',
        permanent: true,
      },
      {
        source: '/:locale/agentes-ia-manufactura-chile',
        destination: '/:locale/soluciones',
        permanent: true,
      },
      {
        source: '/:locale/agentes-ia-turismo-chile',
        destination: '/:locale/soluciones',
        permanent: true,
      },
      {
        source: '/:locale/agentes-ia-logistica-chile',
        destination: '/:locale/soluciones',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
