import Link from "next/link"
import { ArrowRight, ArrowLeft, Calendar, User } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guías Técnicas | Centro de Aprendizaje N3uralia",
  description: "Guías y tutoriales técnicos sobre implementación de sistemas inteligentes, Agentic AI y arquitectura moderna.",
  keywords: "guías técnicas, tutoriales, agentic ai, arquitectura, implementación, n3uralia",
  openGraph: {
    title: "Guías Técnicas | N3uralia",
    description: "Tutoriales y mejores prácticas para implementación",
    type: "website",
    locale: "es_CL",
  },
}

const guides = [
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
    excerpt: "Control, seguridad y cumplimiento normativo para sistemas IA en producción. Frameworks para asegurar calidad y confiabilidad.",
    category: "Governance",
    author: "N3uralia Team",
    date: "2026-02-07",
    readTime: "9 min",
  },
  {
    slug: "memoria-persistente-agents",
    title: "Memoria Persistente en Agentes IA",
    excerpt: "Arquitectura de memoria que permite a los agentes aprender y mejorar. Capas de memoria, persistencia y evolución continua.",
    category: "Técnico",
    author: "N3uralia Team",
    date: "2026-02-06",
    readTime: "11 min",
  },
  {
    slug: "context-engineering-practica",
    title: "Context Engineering en la Práctica",
    excerpt: "Técnicas avanzadas para diseñar contexto efectivo. Del diseño teórico a implementación que mejora significativamente el desempeño.",
    category: "Técnico",
    author: "N3uralia Team",
    date: "2026-02-05",
    readTime: "10 min",
  },
]

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link href="/learning-hub" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Volver al Centro de Aprendizaje
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Guías Técnicas</span>
          </div>

          <h1 className="h1-light mb-6 text-foreground">Aprende a Implementar</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mb-8">
            Tutoriales paso a paso, mejores prácticas y patrones probados en producción. Desde configuración inicial hasta
            sistemas complejos en escala empresarial.
          </p>
        </div>
      </section>

      {/* Guides List */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="block p-8 border border-border rounded-lg hover:border-primary/40 bg-card hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      {guide.category}
                    </span>
                    <h3 className="h3 text-foreground group-hover:text-primary transition-colors mb-2">{guide.title}</h3>
                  </div>
                </div>

                <p className="body text-muted-foreground mb-6">{guide.excerpt}</p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {guide.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(guide.date).toLocaleDateString("es-CL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Leer
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <span>{guide.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-20 px-4 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2 text-foreground mb-6">¿Necesitas ayuda en tu proyecto?</h2>
          <p className="body-lg text-muted-foreground mb-8">
            Nuestro equipo está disponible para ayudarte a implementar estas soluciones en tu infraestructura específica.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium transition-colors"
          >
            Contactar Equipo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
