import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'
import { coreSitemapRoutes } from '@/lib/sitemap-routes-core'
import { solutionSitemapRoutes } from '@/lib/sitemap-routes-solutions'
import { knowledgeSitemapRoutes } from '@/lib/sitemap-routes-knowledge'
import { contentSitemapRoutes } from '@/lib/sitemap-routes-content'

const locales = ['es', 'en'] as const
const updated = new Date('2026-09-04T00:00:00.000Z')
const routes = [...coreSitemapRoutes, ...solutionSitemapRoutes, ...knowledgeSitemapRoutes, ...contentSitemapRoutes]

const localizedCommercialRoutes = [
  { es: '/proyectos', en: '/projects', priority: 0.95, changeFrequency: 'weekly' },
  { es: '/productos', en: '/products', priority: 0.95, changeFrequency: 'weekly' },
  { es: '/reconocimiento', en: '/recognition', priority: 0.9, changeFrequency: 'monthly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const sharedRoutes: MetadataRoute.Sitemap = routes.flatMap(([route, priority, changeFrequency]) =>
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

  const localizedRoutes: MetadataRoute.Sitemap = localizedCommercialRoutes.flatMap((route) => [
    {
      url: absoluteUrl(`/es${route.es}`),
      lastModified: updated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          es: absoluteUrl(`/es${route.es}`),
          en: absoluteUrl(`/en${route.en}`),
          'x-default': absoluteUrl(`/es${route.es}`),
        },
      },
    },
    {
      url: absoluteUrl(`/en${route.en}`),
      lastModified: updated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          es: absoluteUrl(`/es${route.es}`),
          en: absoluteUrl(`/en${route.en}`),
          'x-default': absoluteUrl(`/es${route.es}`),
        },
      },
    },
  ])

  return [...sharedRoutes, ...localizedRoutes]
}
