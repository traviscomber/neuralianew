import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/site"

const LOCALES = ["es", "en"] as const

const primaryRoutes = [
  "",
  "/contact",
  "/soluciones",
  "/services",
  "/platform",
  "/capabilities",
  "/como-trabajamos",
  "/case-studies",
  "/blog",
  "/faq",
  "/about",
] as const

const solutionRoutes = [
  "/agentic-systems",
  "/ai-infrastructure",
  "/automatizacion-para-empresas",
  "/automatizacion-ventas-leads",
  "/conversational-intelligence",
  "/integraciones-empresariales",
  "/operaciones-autonomas",
] as const

const audienceRoutes = [
  "/para-empresas",
  "/para-startups",
  "/para-desarrolladores",
] as const

const platformRoutes = [
  "/platform/nodes",
  "/platform/patterns",
  "/platform/security",
] as const

const knowledgeRoutes = [
  "/studies",
  "/studies/agentic-ai",
  "/studies/agentic-brainstorming",
  "/studies/ai-memory",
  "/studies/context-engineering",
  "/studies/production-grade-agentic-systems",
  "/studies/world-engine",
  "/learning-hub",
  "/living-agents",
  "/nodes",
  "/nuestro-enfoque",
  "/outcomes",
  "/patterns",
  "/playbooks",
  "/security",
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
  ...primaryRoutes,
  ...solutionRoutes,
  ...audienceRoutes,
  ...platformRoutes,
  ...knowledgeRoutes,
  ...blogRoutes,
  ...caseStudyRoutes,
] as const

function getPriority(route: string) {
  if (route === "") return 1
  if (["/soluciones", "/contact", "/case-studies", "/blog", "/services", "/platform", "/capabilities"].includes(route)) return 0.9
  if (route.startsWith("/case-studies/") || route.startsWith("/blog/") || route.startsWith("/studies/")) return 0.8
  if (route.startsWith("/platform/")) return 0.75
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
          "x-default": absoluteUrl(`/en${route}`),
        },
      },
    })),
  )
}
