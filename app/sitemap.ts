import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/site"

const LOCALES = ["es", "en"] as const

const marketingRoutes = [
  "",
  "/about",
  "/contact",
  "/soluciones",
  "/como-trabajamos",
  "/faq",
  "/capabilities",
  "/services",
  "/agentic-systems",
  "/ai-infrastructure",
  "/api-docs",
  "/coordination",
  "/error-tracking",
  "/performance",
  "/security",
  "/playbooks",
  "/platform",
  "/patterns",
  "/nodes",
  "/labs",
  "/learning-hub",
  "/nuestro-enfoque",
  "/outcomes",
  "/para-empresas",
  "/para-startups",
  "/para-desarrolladores",
  "/automatizacion-para-empresas",
  "/automatizacion-ventas-leads",
  "/operaciones-autonomas",
  "/integraciones-empresariales",
  "/conversational-intelligence",
  "/living-agents",
  "/vibe-selling",
  "/studies",
  "/case-studies",
  "/blog",
] as const

const studyRoutes = [
  "/studies/agentic-ai",
  "/studies/agentic-brainstorming",
  "/studies/ai-memory",
  "/studies/context-engineering",
  "/studies/production-grade-agentic-systems",
  "/studies/world-engine",
] as const

const blogRoutes = [
  "/blog/governance-ai-empresarial",
  "/blog/integracion-ia-legacy-systems",
  "/blog/living-agents-ia-que-aprende",
  "/blog/orquestacion-agentes-produccion",
] as const

const caseStudyRoutes = [
  "/case-studies/blackswan-facility-core",
  "/case-studies/despega-tu-carrera",
  "/case-studies/ecosuelolab",
] as const

const allRoutes = [
  ...marketingRoutes,
  ...studyRoutes,
  ...blogRoutes,
  ...caseStudyRoutes,
] as const

function getPriority(route: string) {
  if (route === "") return 1
  if (["/soluciones", "/contact", "/case-studies", "/blog"].includes(route)) return 0.9
  if (route.startsWith("/case-studies/") || route.startsWith("/blog/") || route.startsWith("/studies/")) return 0.8
  return 0.7
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return allRoutes.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(`/${locale}${route}`),
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: getPriority(route),
      alternates: {
        languages: {
          es: absoluteUrl(`/es${route}`),
          en: absoluteUrl(`/en${route}`),
        },
      },
    })),
  )
}
