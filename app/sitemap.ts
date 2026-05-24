import type { MetadataRoute } from "next"

const SITE_URL = "https://n3uralia.com"

// Production routes - ONLY include routes that actually exist in [locale] directory
// All routes are language-agnostic; Next.js handles locale routing via [locale] param
const ROUTES = [
  { slug: "", priority: 1.0, changeFreq: "daily" as const },
  { slug: "/capabilities", priority: 0.95, changeFreq: "weekly" as const },
  { slug: "/solutions", priority: 0.95, changeFreq: "weekly" as const },
  { slug: "/agent-matrix", priority: 0.9, changeFreq: "weekly" as const },
  { slug: "/agent-operations", priority: 0.9, changeFreq: "weekly" as const },
  { slug: "/case-studies", priority: 0.85, changeFreq: "monthly" as const },
  { slug: "/agentic-systems", priority: 0.85, changeFreq: "monthly" as const },
  { slug: "/faq", priority: 0.75, changeFreq: "monthly" as const },
  { slug: "/about", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "/contact", priority: 0.85, changeFreq: "monthly" as const },
  { slug: "/platform", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "/patterns", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "/nodes", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "/blog", priority: 0.8, changeFreq: "weekly" as const },
  { slug: "/labs", priority: 0.6, changeFreq: "monthly" as const },
  { slug: "/how-we-work", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "/conversational-intelligence", priority: 0.75, changeFreq: "monthly" as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const locales = ["es", "en"]

  // Generate sitemap entries for each route and locale
  ROUTES.forEach(({ slug, priority, changeFreq }) => {
    locales.forEach((locale) => {
      const url = slug === "" ? `${SITE_URL}/${locale}` : `${SITE_URL}/${locale}${slug}`
      const alternateLocale = locale === "es" ? "en" : "es"
      const alternateUrl =
        slug === ""
          ? `${SITE_URL}/${alternateLocale}`
          : `${SITE_URL}/${alternateLocale}${slug}`

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

