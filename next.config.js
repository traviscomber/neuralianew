/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    '@supabase/ssr',
    '@supabase/supabase-js',
    '@supabase/auth-js',
  ],
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/images/solutions/section03/:asset*.png',
          destination:
            'https://dptblcvifavtbvngivkb.supabase.co/storage/v1/object/public/site-assets/solutions/:asset*.png',
        },
        {
          source: '/images/solutions/selector-decision-map.webp',
          destination: '/images/solutions/selector-map.webp',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  redirects: async () => {
    return [
      { source: '/en/soluciones', destination: '/en/solutions', permanent: true },
      { source: '/es/solutions', destination: '/es/soluciones', permanent: true },
      { source: '/en/contacto', destination: '/en/contact', permanent: true },
      { source: '/es/contacto', destination: '/es/contact', permanent: true },
      { source: '/contacto', destination: '/es/contact', permanent: true },
      { source: '/es/blog/agentes-ia-mineria-casos-exito', destination: '/es/agentes-ia-chile', permanent: true },
      { source: '/en/blog/agentes-ia-mineria-casos-exito', destination: '/en/agentes-ia-chile', permanent: true },
      { source: '/icon.svg', destination: '/favicon.svg', permanent: true },
      { source: '/apple-icon.png', destination: '/apple-touch-icon.png', permanent: true },
      { source: '/manifest.json', destination: '/site.webmanifest', permanent: true },
      { source: '/n3uralia-logo-new.png', destination: '/n3uralia-brand/n3uralia-sign-canonical.svg', permanent: true },
      { source: '/n3uralia-logo-horizontal.jpg', destination: '/n3uralia-brand/n3uralia-logo-canonical.svg', permanent: true },
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
