import Link from "next/link"
import { ArrowRight, Calendar, User, ArrowLeft } from "lucide-react"
import { BlogPageClient } from "@/components/blog/blog-page-client"
import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import { SectionBackground } from "@/components/section-background"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'

  const titles = {
    es: "Blog N3uralia | Neuralia - Agentes AI, Orquestación, Sistemas Agenticos en Producción",
    en: "N3uralia Blog | Neuralia - AI Agents, Orchestration, Agentic Systems in Production",
  }

  const descriptions = {
    es: "Blog técnico N3uralia: artículos sobre agentes IA, orquestación multi-agente, living agents, sistemas agenticos production-ready, fullstack architecture.",
    en: "N3uralia technical blog: articles on AI agents, multi-agent orchestration, living agents, production-ready agentic systems, fullstack architecture.",
  }

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
  }
}

export default function BlogPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'
  const href = (path: string) => `/${locale}${path}`

  const blogPosts = [
    {
      slug: "orquestacion-agentes-produccion",
      titleES: "Orquestación de Agentes en Producción",
      titleEN: "Agent Orchestration in Production",
      excerptES: "Cómo coordinar múltiples agentes IA en entornos empresariales con governance total. Patrones, arquitectura y mejores prácticas.",
      excerptEN: "How to coordinate multiple AI agents in enterprise environments with total governance. Patterns, architecture and best practices.",
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
      excerptES: "Sistemas que evolucionan con cada interacción. Descubre la arquitectura, implementación y resultados reales de Living Agents.",
      excerptEN: "Systems that evolve with each interaction. Discover the architecture, implementation and real results of Living Agents.",
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
      excerptES: "Estrategias para modernizar sin disrupciones. Patrones probados en producción para empresas con infraestructura existente.",
      excerptEN: "Strategies to modernize without disruptions. Production-proven patterns for companies with existing infrastructure.",
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
      excerptES: "Marco completo de gobernanza para sistemas agenticos. Auditoría, seguridad, compliance y control de decisiones automáticas.",
      excerptEN: "Complete governance framework for agentic systems. Audit, security, compliance and automated decision control.",
      categoryES: "Gobernanza",
      categoryEN: "Governance",
      author: "N3uralia Team",
      date: "2026-02-07",
      readTime: "12 min",
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            {isES ? "Blog N3uralia" : "N3uralia Blog"}
          </h1>
          <p className="text-xl text-muted-foreground">
            {isES
              ? "Insights técnicos sobre sistemas agenticos, IA en producción y arquitectura empresarial"
              : "Technical insights on agentic systems, AI in production and enterprise architecture"}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={href(`/blog/${post.slug}`)}
              className="block p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {isES ? post.categoryES : post.categoryEN}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString(isES ? 'es-ES' : 'en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {isES ? post.titleES : post.titleEN}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {isES ? post.excerptES : post.excerptEN}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span>{post.readTime} {isES ? 'lectura' : 'read'}</span>
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
