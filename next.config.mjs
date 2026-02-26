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

    // Legacy routes that existed before locale migration
    // These redirect to Spanish version with 301 (permanent) redirects for SEO
    const legacyRoutes = [
      { source: '/para-empresas', destination: '/soluciones' },
      { source: '/para-startups', destination: '/soluciones' },
      { source: '/para-desarrolladores', destination: '/soluciones' },
      { source: '/nuestro-enfoque', destination: '/como-trabajamos' },
    ]

    // Add legacy route redirects for all locales
    legacyRoutes.forEach(({ source, destination }) => {
      locales.forEach((locale) => {
        redirects.push({
          source: `/${locale}${source}`,
          destination: `/${locale}${destination}`,
          permanent: true, // 301 redirect for SEO
        })
      })
    })

    // Redirect root to Spanish (default locale)
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

    // Optimize chunks to prevent loading errors
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20
            },
            // Common chunk
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        }
      }
    }

    return config
  },
  // Disable static optimization to prevent chunk errors
  experimental: {
    optimizeCss: false,
  },
}

export default nextConfig
