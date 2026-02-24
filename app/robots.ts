import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/capabilities',
          '/case-studies',
          '/roi-calculator',
          '/ia-santiago',
          '/ia-valparaiso',
          '/ia-concepcion',
          '/como-trabajamos',
          '/about',
        ],
        disallow: [
          '/admin',
          '/api',
          '/.git',
          '/node_modules',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://n3uralia.com/sitemap.xml',
    host: 'https://n3uralia.com',
  }
}
