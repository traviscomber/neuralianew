import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import type { Metadata } from "next"

import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === "es"

  const titles = {
    es: "Blog N3uralia | Neuralia - Agentes AI, Orquestación, Sistemas Agénticos en Producción",
    en: "N3uralia Blog | Neuralia - AI Agents, Orchestration, Agentic Systems in Production",
  }

  const descriptions = {
    es: "Blog técnico N3uralia: artículos sobre agentes IA, orquestación multiagente, living agents, sistemas agénticos production-ready y arquitectura fullstack.",
    en: "N3uralia technical blog: articles on AI agents, multi-agent orchestration, living agents, production-ready agentic systems and fullstack architecture.",
  }

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
  }
}

export default function BlogPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === "es"
  const href = (path: string) => `/${locale}${path}`

  const blogPosts = [
    {
      slug: "orquestacion-agentes-produccion",
      titleES: "Orquestación de Agentes en Producción",
      titleEN: "Agent Orchestration in Production",
      excerptES:
        "Cómo coordinar múltiples agentes IA en entornos empresariales con governance total. Patrones, arquitectura y mejores prácticas.",
      excerptEN:
        "How to coordinate multiple AI agents in enterprise environments with total governance. Patterns, architecture and best practices.",
      categoryES: "Técnico",
      categoryEN: "Technical",
      author: "N3uralia Team",
      date: "2026-02-10",
      readTime: "8 min",
    },
    {
      slug: "living-agents-ia-que-aprende",
      titleES: "Living Agents: IA que Aprende Continuamente",
      titleEN: "Living Agents: AI That Learns Continuously",
      excerptES:
        "Sistemas que evolucionan con cada interacción. Descubre la arquitectura, implementación y resultados reales de Living Agents.",
      excerptEN:
        "Systems that evolve with each interaction. Discover the architecture, implementation and real results of Living Agents.",
      categoryES: "Innovación",
      categoryEN: "Innovation",
      author: "N3uralia Team",
      date: "2026-02-09",
      readTime: "10 min",
    },
    {
      slug: "integracion-ia-legacy-systems",
      titleES: "Integración IA con Legacy Systems",
      titleEN: "AI Integration with Legacy Systems",
      excerptES:
        "Estrategias para modernizar sin disrupciones. Patrones probados en producción para empresas con infraestructura existente.",
      excerptEN:
        "Strategies to modernize without disruptions. Production-proven patterns for companies with existing infrastructure.",
      categoryES: "Caso de Estudio",
      categoryEN: "Case Study",
      author: "N3uralia Team",
      date: "2026-02-08",
      readTime: "7 min",
    },
    {
      slug: "governance-ai-empresarial",
      titleES: "Gobernanza de IA Empresarial",
      titleEN: "Enterprise AI Governance",
      excerptES:
        "Marco completo de gobernanza para sistemas agénticos. Auditoría, seguridad, compliance y control de decisiones automáticas.",
      excerptEN:
        "A full governance framework for agentic systems. Auditability, security, compliance and controlled automated decisions.",
      categoryES: "Gobernanza",
      categoryEN: "Governance",
      author: "N3uralia Team",
      date: "2026-02-07",
      readTime: "12 min",
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="mb-16 px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-5xl font-light tracking-tight">
            {isES ? "Blog N3uralia" : "N3uralia Blog"}
          </h1>
          <p className="text-xl text-muted-foreground">
            {isES
              ? "Insights técnicos sobre sistemas agénticos, IA en producción y arquitectura empresarial"
              : "Technical insights on agentic systems, AI in production and enterprise architecture"}
          </p>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-3xl space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={href(`/blog/${post.slug}`)}
              className="group block rounded-lg border border-border p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {isES ? post.categoryES : post.categoryEN}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString(isES ? "es-CL" : "en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className="mb-2 text-2xl font-light text-foreground transition-colors group-hover:text-primary">
                    {isES ? post.titleES : post.titleEN}
                  </h2>

                  <p className="mb-4 text-muted-foreground">
                    {isES ? post.excerptES : post.excerptEN}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <span>
                      {post.readTime} {isES ? "lectura" : "read"}
                    </span>
                  </div>
                </div>

                <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
