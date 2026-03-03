import type { MetadataRoute } from "next"

const SITE_URL = "https://n3uralia.com"

// Production routes - each locale has its own set
const ROUTES = {
  es: [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/capacidades", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/soluciones", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/casos-de-exito", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/preguntas-frecuentes", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/acerca-de", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/contactar", priority: 0.8, changeFreq: "monthly" as const },
  ],
  en: [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/capabilities", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/solutions", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/case-studies", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/about", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
  ],
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Add root domain
  entries.push({
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  })

  // Add Spanish routes
  ROUTES.es.forEach((route) => {
    const url = route.path === "" ? `${SITE_URL}/es` : `${SITE_URL}/es${route.path}`
    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: route.changeFreq,
      priority: route.priority,
      alternates: {
        languages: {
          es: url,
          en: `${SITE_URL}/en${route.path === "" ? "" : ROUTES.en[ROUTES.es.indexOf(route)].path}`,
          "x-default": `${SITE_URL}${route.path}`,
        },
      },
    })
  })

  // Add English routes
  ROUTES.en.forEach((route) => {
    const url = route.path === "" ? `${SITE_URL}/en` : `${SITE_URL}/en${route.path}`
    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: route.changeFreq,
      priority: route.priority,
      alternates: {
        languages: {
          en: url,
          es: `${SITE_URL}/es${ROUTES.es[ROUTES.en.indexOf(route)].path === "" ? "" : ROUTES.es[ROUTES.en.indexOf(route)].path}`,
          "x-default": `${SITE_URL}${route.path}`,
        },
      },
    })
  })

  return entries
}

