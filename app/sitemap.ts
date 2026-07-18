import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'
import { coreSitemapRoutes } from '@/lib/sitemap-routes-core'
import { solutionSitemapRoutes } from '@/lib/sitemap-routes-solutions'
import { knowledgeSitemapRoutes } from '@/lib/sitemap-routes-knowledge'
import { contentSitemapRoutes } from '@/lib/sitemap-routes-content'

const locales = ['es', 'en'] as const
const updated = new Date('2026-07-18T00:00:00.000Z')
const routes = [...coreSitemapRoutes, ...solutionSitemapRoutes, ...knowledgeSitemapRoutes, ...contentSitemapRoutes]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(([route, priority, changeFrequency]) =>
    locales.map((locale) => ({
      url: absoluteUrl(`/${locale}${route}`),
      lastModified: updated,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          es: absoluteUrl(`/es${route}`),
          en: absoluteUrl(`/en${route}`),
          'x-default': absoluteUrl(`/es${route}`),
        },
      },
    })),
  )
}
