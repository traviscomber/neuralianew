import type { MetadataRoute } from "next"

const SITE_URL = "https://n3uralia.com"
const LOCALES = ["es", "en"]

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

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Add localized routes
  LOCALES.forEach((locale) => {
    ROUTES.forEach((route) => {
      const cleanRoute = route === "/" ? "" : route

      entries.push({
        url: `${SITE_URL}/${locale}${cleanRoute}`,
        lastModified: new Date(),
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: getPriority(route),
        alternates: {
          languages: {
            es: `${SITE_URL}/es${cleanRoute}`,
            en: `${SITE_URL}/en${cleanRoute}`,
            "x-default": `${SITE_URL}${cleanRoute}`,
          },
        },
      })
    })

    // Add case study detail pages
    CASE_STUDY_SLUGS.forEach((slug) => {
      entries.push({
        url: `${SITE_URL}/${locale}/case-studies/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            es: `${SITE_URL}/es/case-studies/${slug}`,
            en: `${SITE_URL}/en/case-studies/${slug}`,
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
