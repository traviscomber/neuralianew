/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blob.v0.app',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  redirects: async () => {
    const locales = ['es', 'en']
    const redirects = []

    // ==========================================
    // LEGACY URLS - Clean up old indexed pages
    // ==========================================
    // These are URLs that Google still has indexed from old site versions
    // Redirect to relevant current pages with 301 (permanent) for SEO cleanup
    const legacyRootRoutes = [
      { source: '/clients', destination: '/es/case-studies' },
      { source: '/clients/', destination: '/es/case-studies' },
      { source: '/services', destination: '/es/soluciones' },
      { source: '/services/', destination: '/es/soluciones' },
    ]
    
    legacyRootRoutes.forEach(({ source, destination }) => {
      redirects.push({
        source,
        destination,
        permanent: true, // 301 redirect for SEO cleanup
      })
    })

    // ==========================================
    // DUPLICATE URL CANONICALIZATION
    // ==========================================
    // Redirect English-named slugs to Spanish canonical versions
    // This consolidates SEO signals to single canonical URLs
    const canonicalRoutes = [
      { source: '/solutions', destination: '/soluciones' },
      { source: '/how-we-work', destination: '/como-trabajamos' },
    ]

    canonicalRoutes.forEach(({ source, destination }) => {
      locales.forEach((locale) => {
        redirects.push({
          source: `/${locale}${source}`,
          destination: `/${locale}${destination}`,
          permanent: true, // 301 redirect for SEO
        })
      })
    })

    // ==========================================
    // LEGACY LOCALE ROUTES
    // ==========================================
    // Routes that existed before locale migration
    const legacyLocaleRoutes = [
      { source: '/para-empresas', destination: '/soluciones' },
      { source: '/para-startups', destination: '/soluciones' },
      { source: '/para-desarrolladores', destination: '/soluciones' },
      { source: '/nuestro-enfoque', destination: '/como-trabajamos' },
    ]

    legacyLocaleRoutes.forEach(({ source, destination }) => {
      locales.forEach((locale) => {
        redirects.push({
          source: `/${locale}${source}`,
          destination: `/${locale}${destination}`,
          permanent: true, // 301 redirect for SEO
        })
      })
    })

    // ==========================================
    // ROOT REDIRECT
    // ==========================================
    // Redirect root to Spanish (default locale for Chile)
    redirects.push({
      source: '/',
      destination: '/es',
      permanent: false, // 307 temporary redirect
    })

    return redirects
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    }

    return config
  },
  // Disable problematic optimizations to prevent vendor chunk corruption
  experimental: {
    optimizeCss: false,
    optimizePackageImports: [],
  },
}

export default nextConfig
