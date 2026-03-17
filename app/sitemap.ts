import type { MetadataRoute } from "next"

const SITE_URL = "https://n3uralia.com"

// Production routes with comprehensive coverage including new Agent Systems pages
const ROUTE_PAIRS = [
  { es: "", en: "", priority: 1.0, changeFreq: "daily" as const },
  { es: "/capacidades", en: "/capabilities", priority: 0.95, changeFreq: "weekly" as const },
  { es: "/soluciones", en: "/solutions", priority: 0.95, changeFreq: "weekly" as const },
  { es: "/agent-matrix", en: "/agent-matrix", priority: 0.9, changeFreq: "weekly" as const },
  { es: "/agent-operations", en: "/agent-operations", priority: 0.9, changeFreq: "weekly" as const },
  { es: "/casos-de-exito", en: "/case-studies", priority: 0.85, changeFreq: "monthly" as const },
  { es: "/agentic-systems", en: "/agentic-systems", priority: 0.85, changeFreq: "monthly" as const },
  { es: "/preguntas-frecuentes", en: "/faq", priority: 0.75, changeFreq: "monthly" as const },
  { es: "/acerca-de", en: "/about", priority: 0.8, changeFreq: "monthly" as const },
  { es: "/contactar", en: "/contact", priority: 0.85, changeFreq: "monthly" as const },
  { es: "/platform", en: "/platform", priority: 0.8, changeFreq: "monthly" as const },
  { es: "/patterns", en: "/patterns", priority: 0.7, changeFreq: "monthly" as const },
  { es: "/nodes", en: "/nodes", priority: 0.7, changeFreq: "monthly" as const },
  { es: "/blog", en: "/blog", priority: 0.8, changeFreq: "weekly" as const },
  { es: "/labs", en: "/labs", priority: 0.6, changeFreq: "monthly" as const },
  { es: "/como-trabajamos", en: "/how-we-work", priority: 0.7, changeFreq: "monthly" as const },
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
          "es-CL": esUrl,
          en: enUrl,
          "en-US": enUrl,
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
          "es-CL": esUrl,
          en: enUrl,
          "en-US": enUrl,
        },
      },
    })
  })

  return entries
}

