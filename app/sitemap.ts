import type { MetadataRoute } from "next"

const SITE_URL = "https://n3uralia.com"

// ONLY verified routes that exist in app/[locale]/ directory
// No duplicates, no non-existent routes
const ROUTES = [
  // Core pages
  { slug: "", priority: 1.0, changeFreq: "daily" as const },
  
  // Main product pages
  { slug: "/capabilities", priority: 0.95, changeFreq: "weekly" as const },
  { slug: "/solutions", priority: 0.95, changeFreq: "weekly" as const },
  { slug: "/soluciones", priority: 0.95, changeFreq: "weekly" as const },
  { slug: "/case-studies", priority: 0.85, changeFreq: "monthly" as const },
  
  // Agent/system pages
  { slug: "/agent-matrix", priority: 0.9, changeFreq: "weekly" as const },
  { slug: "/agent-operations", priority: 0.9, changeFreq: "weekly" as const },
  { slug: "/living-agents", priority: 0.85, changeFreq: "monthly" as const },
  
  // Spanish-named pages (methodology & approach)
  { slug: "/como-trabajamos", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "/para-empresas", priority: 0.85, changeFreq: "monthly" as const },
  { slug: "/para-desarrolladores", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "/para-startups", priority: 0.8, changeFreq: "monthly" as const },
  
  // English equivalents
  { slug: "/how-we-work", priority: 0.7, changeFreq: "monthly" as const },
  
  // Reference pages
  { slug: "/faq", priority: 0.75, changeFreq: "monthly" as const },
  { slug: "/about", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "/contact", priority: 0.85, changeFreq: "monthly" as const },
  
  // Technical pages
  { slug: "/platform", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "/patterns", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "/nodes", priority: 0.7, changeFreq: "monthly" as const },
  
  // Resource centers
  { slug: "/blog", priority: 0.8, changeFreq: "weekly" as const },
  
  // Feature pages
  { slug: "/conversational-intelligence", priority: 0.75, changeFreq: "monthly" as const },
  { slug: "/integraciones-empresariales", priority: 0.7, changeFreq: "monthly" as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const locales = ["es", "en"]

  // Generate sitemap entries for each route and locale
  ROUTES.forEach(({ slug, priority, changeFreq }) => {
    locales.forEach((locale) => {
      const url = slug === "" ? `${SITE_URL}/${locale}` : `${SITE_URL}/${locale}${slug}`

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: changeFreq,
        priority: priority,
        alternates: {
          languages: {
            es: slug === "" ? `${SITE_URL}/es` : `${SITE_URL}/es${slug}`,
            en: slug === "" ? `${SITE_URL}/en` : `${SITE_URL}/en${slug}`,
          },
        },
      })
    })
  })

  return entries
}

