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
  "/studies",
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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return allRoutes.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(`/${locale}${route}`),
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route.startsWith("/soluciones") || route.startsWith("/contact") ? 0.9 : 0.7,
      alternates: {
        languages: {
          es: absoluteUrl(`/es${route}`),
          en: absoluteUrl(`/en${route}`),
        },
      },
    })),
  )
}
