import Link from "next/link"
import { ArrowRight, Calendar, User, ArrowLeft } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog N3uralia | Agentes IA, Orquestación y Sistemas en Producción",
  description:
    "Blog técnico sobre n3uralia agents, agentes IA, orquestación de agentes, living agents, sistemas agenticos en producción. Guías, casos de estudio y arquitectura de sistemas inteligentes.",
  keywords:
    "blog n3uralia, agentes IA, n3uralia agents, agentes n3uralia, orquestación, living agents, sistemas agenticos, integración IA, arquitectura agentica, IA en producción",
  openGraph: {
    title: "Blog N3uralia - Agentes IA y Sistemas Agenticos",
    description: "Recursos técnicos sobre n3uralia agents, orquestación y IA empresarial",
    type: "website",
    locale: "es_CL",
  },
}

const blogPosts = [
  {
    slug: "orquestacion-agentes-produccion",
    title: "Orquestación de Agentes en Producción",
    excerpt: "Cómo coordinar múltiples agentes IA en entornos empresariales con governance total. Patrones, arquitectura y mejores prácticas.",
    category: "Técnico",
    author: "N3uralia Team",
    date: "2026-02-10",
    readTime: "8 min",
  },
  {
    slug: "living-agents-ia-que-aprende",
    title: "Living Agents: IA que Aprende Continuamente",
    excerpt: "Sistemas que evolucionan con cada interacción. Descubre la arquitectura, implementación y resultados reales de Living Agents.",
    category: "Innovación",
    author: "N3uralia Team",
    date: "2026-02-09",
    readTime: "10 min",
  },
  {
    slug: "integracion-ia-legacy-systems",
    title: "Integración IA con Legacy Systems",
    excerpt: "Estrategias para modernizar sin disrupciones. Patrones probados en producción para empresas con infraestructura existente.",
    category: "Caso de Estudio",
    author: "N3uralia Team",
    date: "2026-02-08",
    readTime: "7 min",
  },
  {
    slug: "governance-ai-empresarial",
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
        {/* Hero */}
        <section className="py-20 border-b border-border px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="h1-light mb-4">Blog N3uralia</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Artículos técnicos, guías prácticas y casos de estudio sobre agentes IA y sistemas inteligentes en producción.
            </p>
          </div>
        </section>

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

      <Footer />
    </>
  )
}
