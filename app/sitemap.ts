import { MetadataRoute } from 'next'
import { CASE_STUDIES } from '@/content/caseStudies'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://n3uralia.com'
const locales = ['es', 'en']

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date('2026-02-27'),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date('2026-02-27'),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date('2026-02-27'),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // Pillar pages for both locales
  const pillarPages = [
    'platform',
    'agentic-systems',
    'ai-infrastructure',
    'playbooks',
    'labs',
    'nodes',
    'patterns',
    'security',
    'case-studies',
  ]

  const pillarSitemapEntries: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    pillarPages.forEach((page) => {
      pillarSitemapEntries.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date('2026-02-27'),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
    })
  })

  // Case study detail pages for both locales
  const caseStudySitemapEntries: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    CASE_STUDIES.forEach((caseStudy) => {
      caseStudySitemapEntries.push({
        url: `${baseUrl}/${locale}/case-studies/${caseStudy.slug}`,
        lastModified: new Date('2026-02-27'),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    })
  })

  return [...basePages, ...pillarSitemapEntries, ...caseStudySitemapEntries]
}
