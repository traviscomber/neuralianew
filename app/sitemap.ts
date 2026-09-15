import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'
import { coreSitemapRoutes } from '@/lib/sitemap-routes-core'
import { solutionSitemapRoutes } from '@/lib/sitemap-routes-solutions'
import { knowledgeSitemapRoutes } from '@/lib/sitemap-routes-knowledge'
import { contentSitemapRoutes } from '@/lib/sitemap-routes-content'

type SitemapItem = MetadataRoute.Sitemap[number]
type ChangeFrequency = NonNullable<SitemapItem['changeFrequency']>
type LocalizedRoute = {
  es: string
  en: string
  priority: number
  changeFrequency: ChangeFrequency
}

const updated = new Date('2026-09-15T00:00:00.000Z')

// Keep the public sitemap intentionally conservative. Pages with legacy SEO
// copy, unsupported quantified claims, or highly templated geographic content
// remain crawlable through internal links, but are not proactively submitted
// until their content and metadata pass the current quality bar.
const temporarilyExcludedSamePathRoutes = new Set([
  '/agentes-ia-logistica-chile',
  '/agentes-ia-manufactura-chile',
  '/agentes-ia-retail-chile',
  '/agentes-ia-turismo-chile',
])

const samePathRoutes = [
  ...coreSitemapRoutes,
  ...solutionSitemapRoutes,
  ...knowledgeSitemapRoutes,
  ...contentSitemapRoutes,
].filter(([path]) => !temporarilyExcludedSamePathRoutes.has(path))

const localizedRoutes: LocalizedRoute[] = [
  { es: '/soluciones', en: '/solutions', priority: 0.95, changeFrequency: 'weekly' },
  { es: '/proyectos', en: '/projects', priority: 0.95, changeFrequency: 'weekly' },
  { es: '/productos', en: '/products', priority: 0.95, changeFrequency: 'weekly' },
  { es: '/reconocimiento', en: '/recognition', priority: 0.9, changeFrequency: 'monthly' },
  { es: '/como-trabajamos', en: '/how-we-work', priority: 0.75, changeFrequency: 'monthly' },
]

function normalizePath(path: string) {
  if (!path || path === '/') return ''
  return path.startsWith('/') ? path : `/${path}`
}

function toPair(route: readonly [string, number, ChangeFrequency]): LocalizedRoute {
  const path = normalizePath(route[0])
  return {
    es: path,
    en: path,
    priority: route[1],
    changeFrequency: route[2],
  }
}

function createEntries(route: LocalizedRoute): MetadataRoute.Sitemap {
  const esPath = `/es${normalizePath(route.es)}`
  const enPath = `/en${normalizePath(route.en)}`
  const esUrl = absoluteUrl(esPath)
  const enUrl = absoluteUrl(enPath)
  const languages = {
    'es-CL': esUrl,
    es: esUrl,
    en: enUrl,
    'en-US': enUrl,
    'x-default': enUrl,
  }

  return [
    {
      url: esUrl,
      lastModified: updated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages },
    },
    {
      url: enUrl,
      lastModified: updated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages },
    },
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  const canonicalPairs = [
    ...samePathRoutes.map((route) => toPair(route)),
    ...localizedRoutes,
  ]

  const seen = new Set<string>()
  const entries: MetadataRoute.Sitemap = []

  for (const pair of canonicalPairs) {
    const key = `${normalizePath(pair.es)}|${normalizePath(pair.en)}`
    if (seen.has(key)) continue
    seen.add(key)
    entries.push(...createEntries(pair))
  }

  return entries
}
