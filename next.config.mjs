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
    ],
  },
  redirects: async () => {
    return [
      // Legacy solution routes redirect to /soluciones
      {
        source: '/para-empresas',
        destination: '/soluciones#para-empresas',
        permanent: true, // 301 redirect
      },
      {
        source: '/para-startups',
        destination: '/soluciones#para-startups',
        permanent: true,
      },
      {
        source: '/para-desarrolladores',
        destination: '/soluciones#para-desarrolladores',
        permanent: true,
      },
      // Legacy methodology route redirects to /como-trabajamos
      {
        source: '/nuestro-enfoque',
        destination: '/como-trabajamos',
        permanent: true,
      },
      // Legacy capabilities routes redirect to /capabilities with anchors
      {
        source: '/living-agents',
        destination: '/capabilities#living-agents',
        permanent: true,
      },
      {
        source: '/studies/production-grade-agentic-systems',
        destination: '/capabilities#produccion',
        permanent: true,
      },
    ]
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
