import type { MetadataRoute } from "next"

const SITE_URL = "https://n3uralia.com"
const LOCALES = ["es", "en"]

// Geographic regions with locale variants
const REGIONAL_LOCALES = {
  es: ["es", "es-CL", "es-AR", "es-MX", "es-CO"],
  en: ["en"],
}

// All available routes in the application
const ROUTES = [
  "/",
  "/about",
  "/capabilities",
  "/case-studies",
  "/soluciones",
  "/contact",
  "/platform",
  "/platform/security",
  "/platform/patterns",
  "/platform/nodes",
  "/agentic-systems",
  "/living-agents",
  "/living-agents/evolution",
  "/living-agents/constellation-demo",
  "/living-agents/demo",
  "/conversational-intelligence",
  "/coordination",
  "/nodes",
  "/patterns",
  "/labs",
  "/outcomes",
  "/performance",
  "/security",
  "/playbooks",
  "/services",
  "/blog",
  "/faq",
  "/learning-hub",
  "/error-tracking",
  "/ai-infrastructure",
  "/api-docs",
  "/nuestro-enfoque",
  "/operaciones-autonomas",
  "/integraciones-empresariales",
  "/automatizacion-para-empresas",
  "/automatizacion-ventas-leads",
  "/como-trabajamos",
  "/vibe-selling",
  "/studies",
  "/studies/world-engine",
  "/studies/production-grade-agentic-systems",
  "/studies/context-engineering",
  "/studies/ai-memory",
  "/studies/agentic-brainstorming",
  "/studies/agentic-ai",
]

// Case study slugs (add these based on your content)
const CASE_STUDY_SLUGS = [
  "retail-automation",
  "manufacturing-excellence",
  "financial-intelligence",
  "healthcare-coordination",
  "legal-automation",
  "logistics-optimization",
]

// Geo-specific routes mapping
const GEO_ROUTES: Record<string, string[]> = {
  CL: ["/", "/about", "/capabilities", "/case-studies", "/soluciones", "/contact"],
  AR: ["/", "/about", "/capabilities", "/case-studies", "/contact"],
  MX: ["/", "/about", "/capabilities", "/case-studies", "/contact"],
  CO: ["/", "/about", "/capabilities", "/case-studies", "/contact"],
  GLOBAL: ["/", "/about", "/capabilities", "/case-studies", "/contact"],
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Add main localized routes (es, en)
  LOCALES.forEach((locale) => {
    ROUTES.forEach((route) => {
      const cleanRoute = route === "/" ? "" : route
      const changeFreq = route === "/" ? "weekly" : route.includes("blog") ? "daily" : "monthly"

      entries.push({
        url: `${SITE_URL}/${locale}${cleanRoute}`,
        lastModified: new Date(),
        changeFrequency: changeFreq as any,
        priority: getPriority(route),
        alternates: {
          languages: {
            es: `${SITE_URL}/es${cleanRoute}`,
            "es-CL": `${SITE_URL}/es-CL${cleanRoute}`,
            "es-AR": `${SITE_URL}/es-AR${cleanRoute}`,
            "es-MX": `${SITE_URL}/es-MX${cleanRoute}`,
            "es-CO": `${SITE_URL}/es-CO${cleanRoute}`,
            en: `${SITE_URL}/en${cleanRoute}`,
            "x-default": `${SITE_URL}${cleanRoute}`,
          },
        },
      })
    })

    // Add case study detail pages with geo variants
    CASE_STUDY_SLUGS.forEach((slug) => {
      entries.push({
        url: `${SITE_URL}/${locale}/case-studies/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            es: `${SITE_URL}/es/case-studies/${slug}`,
            "es-CL": `${SITE_URL}/es-CL/case-studies/${slug}`,
            en: `${SITE_URL}/en/case-studies/${slug}`,
          },
        },
      })
    })
  })

  // Add regional locale variants (es-CL, es-AR, es-MX, es-CO)
  Object.entries(GEO_ROUTES).forEach(([region, regionRoutes]) => {
    if (region === "GLOBAL") return // Skip global marker

    regionRoutes.forEach((route) => {
      const cleanRoute = route === "/" ? "" : route
      const regionLocale = `es-${region}`

      entries.push({
        url: `${SITE_URL}/${regionLocale}${cleanRoute}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: region === "CL" ? getPriority(route) : getPriority(route) * 0.95, // Slight priority reduction for secondary regions
        alternates: {
          languages: {
            es: `${SITE_URL}/es${cleanRoute}`,
            "es-CL": `${SITE_URL}/es-CL${cleanRoute}`,
            "es-AR": `${SITE_URL}/es-AR${cleanRoute}`,
            "es-MX": `${SITE_URL}/es-MX${cleanRoute}`,
            en: `${SITE_URL}/en${cleanRoute}`,
          },
        },
      })
    })
  })

  // Add root pages without locale prefix (for redirect)
  entries.push({
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  })

  return entries
}

function getPriority(route: string): number {
  // Prioritize key pages
  const priorities: Record<string, number> = {
    "/": 1.0,
    "/about": 0.9,
    "/capabilities": 0.9,
    "/case-studies": 0.85,
    "/soluciones": 0.85,
    "/platform": 0.85,
    "/agentic-systems": 0.8,
    "/living-agents": 0.8,
    "/contact": 0.75,
    "/services": 0.7,
    "/blog": 0.7,
    "/faq": 0.65,
    "/security": 0.65,
    "/learning-hub": 0.6,
  }

  return priorities[route] || 0.5
}
