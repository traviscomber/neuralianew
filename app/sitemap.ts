import type { MetadataRoute } from "next"

const SITE_URL = "https://n3uralia.com"
const LOCALES = ["es", "en"]

// Core routes that exist in the application
const ROUTES = [
  "/",
  "/capabilities",
  "/soluciones",
  "/case-studies",
  "/contact",
  "/faq",
  "/studies",
  "/automatizacion-para-empresas",
  "/automatizacion-ventas-leads",
  "/operaciones-autonomas",
  "/integraciones-empresariales",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Add main root URL
  entries.push({
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1.0,
  })

  // Add localized routes (es, en)
  LOCALES.forEach((locale) => {
    ROUTES.forEach((route) => {
      const cleanRoute = route === "/" ? "" : route
      let changeFreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "monthly"

      // Set different change frequencies for different route types
      if (route === "/") {
        changeFreq = "weekly"
      } else if (route === "/blog") {
        changeFreq = "daily"
      } else if (route === "/faq" || route === "/contact") {
        changeFreq = "monthly"
      }

      let priority = 0.7 // Default priority
      if (route === "/") priority = 1.0
      else if (["/capabilities", "/soluciones", "/case-studies"].includes(route)) priority = 0.9
      else if (route === "/contact") priority = 0.8
      else if (["/faq", "/studies"].includes(route)) priority = 0.7

      entries.push({
        url: `${SITE_URL}/${locale}${cleanRoute}`,
        lastModified: new Date(),
        changeFrequency: changeFreq,
        priority: priority,
        alternates: {
          languages: {
            es: `${SITE_URL}/es${cleanRoute}`,
            en: `${SITE_URL}/en${cleanRoute}`,
            "x-default": `${SITE_URL}${cleanRoute}`,
          },
        },
      })
    })
  })

  return entries
}

