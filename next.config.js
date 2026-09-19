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
          source: '/images/solutions/section02/:asset*.png',
          destination:
            'https://dptblcvifavtbvngivkb.supabase.co/storage/v1/object/public/site-assets/solutions/section02/:asset*.png',
        },
        {
          source: '/images/solutions/section04/:asset*.png',
          destination:
            'https://dptblcvifavtbvngivkb.supabase.co/storage/v1/object/public/site-assets/solutions/section04/:asset*.png',
        },
        {
          source: '/images/solutions/section02/visibility.webp',
          destination:
            'https://dptblcvifavtbvngivkb.supabase.co/storage/v1/object/public/site-assets/solutions/section02/visibility.png',
        },
        {
          source: '/images/solutions/section02/manual-coordination.webp',
          destination:
            'https://dptblcvifavtbvngivkb.supabase.co/storage/v1/object/public/site-assets/solutions/section02/workflow-automation.png',
        },
        {
          source: '/images/solutions/section02/slow-response.webp',
          destination:
            'https://dptblcvifavtbvngivkb.supabase.co/storage/v1/object/public/site-assets/solutions/section02/decision-intelligence.png',
        },
        {
          source: '/images/solutions/section02/traceability.webp',
          destination:
            'https://dptblcvifavtbvngivkb.supabase.co/storage/v1/object/public/site-assets/solutions/section02/durable-systems.png',
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
      // Canonical bilingual route aliases.
      { source: '/en/soluciones', destination: '/en/solutions', permanent: true },
      { source: '/es/solutions', destination: '/es/soluciones', permanent: true },
      { source: '/en/como-trabajamos', destination: '/en/how-we-work', permanent: true },
      { source: '/es/how-we-work', destination: '/es/como-trabajamos', permanent: true },
      { source: '/en/como-funcionamos', destination: '/en/how-we-work', permanent: true },
      { source: '/es/como-funcionamos', destination: '/es/como-trabajamos', permanent: true },
      { source: '/en/nuestro-enfoque', destination: '/en/how-we-work', permanent: true },
      { source: '/es/nuestro-enfoque', destination: '/es/como-trabajamos', permanent: true },
      { source: '/en/contacto', destination: '/en/contact', permanent: true },
      { source: '/es/contacto', destination: '/es/contact', permanent: true },
      { source: '/contacto', destination: '/es/contact', permanent: true },

      // Collapse duplicate knowledge architecture into the canonical platform tree.
      { source: '/:locale(en|es)/nodes', destination: '/:locale/platform/nodes', permanent: true },
      { source: '/:locale(en|es)/patterns', destination: '/:locale/platform/patterns', permanent: true },
      { source: '/:locale(en|es)/security', destination: '/:locale/platform/security', permanent: true },

      // Retire unsupported legacy acquisition surfaces into their real canonical parents.
      { source: '/en/automatizacion-para-empresas', destination: '/en/solutions', permanent: true },
      { source: '/es/automatizacion-para-empresas', destination: '/es/soluciones', permanent: true },
      { source: '/en/automatizacion-ventas-leads', destination: '/en/solutions', permanent: true },
      { source: '/es/automatizacion-ventas-leads', destination: '/es/soluciones', permanent: true },
      { source: '/:locale(en|es)/automatizacion-ia-empresas-chile', destination: '/:locale/agentes-ia-chile', permanent: true },
      { source: '/:locale(en|es)/soluciones-agenticas-chile', destination: '/:locale/agentic-systems', permanent: true },

      // Remove thin geographic doorway pages while preserving the canonical Chile pillar.
      { source: '/:locale(en|es)/agentes-ia-chile/ciudades', destination: '/:locale/agentes-ia-chile', permanent: true },
      { source: '/:locale(en|es)/agentes-ia-:scope-chile', destination: '/:locale/agentes-ia-chile', permanent: true },

      // Studies and Playbooks were withheld for evidence/localization gaps. Consolidate them now.
      { source: '/:locale(en|es)/studies/ai-memory', destination: '/:locale/platform/patterns', permanent: true },
      { source: '/:locale(en|es)/studies', destination: '/:locale/learning-hub', permanent: true },
      { source: '/:locale(en|es)/studies/:path*', destination: '/:locale/learning-hub', permanent: true },
      { source: '/:locale(en|es)/playbooks', destination: '/:locale/learning-hub', permanent: true },

      // Historic content/assets.
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
