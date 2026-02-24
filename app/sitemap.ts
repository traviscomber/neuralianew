import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://n3uralia.com'

  // Static routes
  const staticRoutes = [
    '',
    '/capabilities',
    '/automatizacion-para-empresas',
    '/soluciones',
    '/como-trabajamos',
    '/case-studies',
    '/services',
    '/about',
    '/roi-calculator',
    '/ia-santiago',
    '/ia-valparaiso',
    '/ia-concepcion',
    '/contact',
    '/diagnosis',
  ]

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('ia-') ? 0.9 : 0.8,
  }))

  return staticPages
}
