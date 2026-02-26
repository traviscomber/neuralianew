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
    title: "Governance: El Pilar de la IA Empresarial",
    excerpt: "Por qué la auditabilidad no es opcional. Framework completo para governance en agentes IA, compliance y trazabilidad.",
    category: "Governance",
    author: "N3uralia Team",
    date: "2026-02-07",
    readTime: "9 min",
  },
  {
    slug: "rai-vs-ai-produccion",
    title: "RAI vs. Raw AI: Qué Funciona en Producción",
    excerpt: "Comparativa de Retrieval-Augmented Intelligence vs. sistemas raw. Cuándo usar cada uno y por qué.",
    category: "Técnico",
    author: "N3uralia Team",
    date: "2026-02-06",
    readTime: "6 min",
  },
  {
    slug: "costos-reales-agentes-ia",
    title: "Costos Reales de Desplegar Agentes IA",
    excerpt: "Desglose honesto de inversión, infraestructura y TCO. Cálculos de ROI para empresas chilenas.",
    category: "Negocio",
    author: "N3uralia Team",
    date: "2026-02-05",
    readTime: "5 min",
  },
]

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <SectionBackground section="blog" className="border-b border-border">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="h1-light mb-4">Blog N3uralia</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Artículos técnicos, guías prácticas y casos de estudio sobre agentes IA y sistemas inteligentes en producción.
            </p>
          </div>
        </section>
        </SectionBackground>

        {/* Blog Posts Grid */}
        <section className="py-16 sm:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group border border-border rounded-lg p-8 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10">
                        <span className="text-xs font-semibold text-primary">{post.category}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{post.readTime}</div>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-6 border-t border-border/50">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("es-CL")}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        Leer <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 p-8 border border-primary/30 rounded-lg bg-primary/5">
              <h3 className="text-xl font-bold text-foreground mb-2">Suscribirse a Actualizaciones</h3>
              <p className="text-muted-foreground mb-6">
                Recibe nuevos artículos técnicos, guías y recursos sobre IA en producción directamente en tu bandeja.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@empresa.cl"
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BlogPageClient />
    </>
  )
}
