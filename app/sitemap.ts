import type { MetadataRoute } from "next"

const SITE_URL = "https://n3uralia.com"

// Production routes with path mappings
const ROUTE_PAIRS = [
  { es: "", en: "", priority: 1.0, changeFreq: "weekly" as const },
  { es: "/capacidades", en: "/capabilities", priority: 0.9, changeFreq: "monthly" as const },
  { es: "/soluciones", en: "/solutions", priority: 0.9, changeFreq: "monthly" as const },
  { es: "/casos-de-exito", en: "/case-studies", priority: 0.9, changeFreq: "monthly" as const },
  { es: "/preguntas-frecuentes", en: "/faq", priority: 0.7, changeFreq: "monthly" as const },
  { es: "/acerca-de", en: "/about", priority: 0.8, changeFreq: "monthly" as const },
  { es: "/contactar", en: "/contact", priority: 0.8, changeFreq: "monthly" as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Generate sitemap entries for each route pair
  ROUTE_PAIRS.forEach(({ es, en, priority, changeFreq }) => {
    const esUrl = es === "" ? `${SITE_URL}/es` : `${SITE_URL}/es${es}`
    const enUrl = en === "" ? `${SITE_URL}/en` : `${SITE_URL}/en${en}`

    // Add Spanish entry
    entries.push({
      url: esUrl,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority: priority,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
        },
      },
    })

    // Add English entry
    entries.push({
      url: enUrl,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority: priority,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
        },
      },
    })
  })

  return entries
}

