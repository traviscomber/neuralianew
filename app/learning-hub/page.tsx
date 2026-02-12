import Link from "next/link"
import { ArrowRight, BookOpen, Code, CaseSensitive, Archive } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Centro de Aprendizaje | N3uralia - Guías y Conceptos de IA",
  description:
    "Aprende sobre Agentic AI, sistemas inteligentes y arquitectura moderna de inteligencia artificial. Conceptos, guías técnicas, casos de estudio y recursos.",
  keywords: "learning hub, agentic ai, technical guides, case studies, ai architecture, n3uralia",
  openGraph: {
    title: "Centro de Aprendizaje | N3uralia",
    description: "Recursos educativos sobre sistemas inteligentes y IA",
    type: "website",
    locale: "es_CL",
    url: "https://n3uralia.com/learning-hub",
  },
}

const hubSections = [
  {
    id: "concepts",
    title: "Conceptos Fundamentales",
    description: "Entiende la base teórica de los sistemas inteligentes con contenido especializado",
    icon: BookOpen,
    href: "/learning-hub/concepts",
    color: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    id: "guides",
    title: "Guías Técnicas",
    description: "Tutoriales paso a paso y mejores prácticas para implementar soluciones",
    icon: Code,
    href: "/learning-hub/guides",
    color: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    id: "case-studies",
    title: "Casos de Estudio",
    description: "Ejemplos reales de cómo empresas han transformado sus operaciones",
    icon: CaseSensitive,
    href: "/learning-hub/case-studies",
    color: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
  {
    id: "resources",
    title: "Recursos",
    description: "Documentación, referencias, descargas y herramientas útiles",
    icon: Archive,
    href: "/learning-hub/resources",
    color: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800",
  },
]

export default function LearningHubPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Centro de Aprendizaje</span>
          </div>

          <h1 className="h1-light mb-6 text-foreground">Aprende sobre Sistemas Inteligentes</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mb-8">
            Recursos educativos completos sobre Agentic AI, arquitectura de sistemas inteligentes y mejores prácticas
            en implementación. Desde conceptos fundamentales hasta casos de estudio reales.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/learning-hub/concepts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium transition-colors"
            >
              Explorar Conceptos
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/learning-hub/guides"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 font-medium transition-colors"
            >
              Ver Guías Técnicas
            </Link>
          </div>
        </div>
      </section>

      {/* Hub Sections Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hubSections.map((section) => {
              const Icon = section.icon
              return (
                <Link
                  key={section.id}
                  href={section.href}
                  className="group p-8 border border-border rounded-lg hover:border-primary/40 transition-all bg-card hover:shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="h3 text-foreground mb-2">{section.title}</h3>
                  <p className="body text-muted-foreground mb-6">{section.description}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    Acceder
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 px-4 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 text-foreground mb-12 text-center">Ruta de Aprendizaje Sugerida</h2>

          <div className="space-y-6">
            {/* Beginner */}
            <div className="p-6 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-sm font-bold text-blue-700 dark:text-blue-300">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="h4 text-foreground mb-2">Principiante: Fundamentos</h3>
                  <p className="body text-muted-foreground mb-4">
                    Comienza con los conceptos fundamentales de Agentic AI, memoria en sistemas inteligentes y cómo
                    funcionan los agentes autónomos.
                  </p>
                  <Link href="/learning-hub/concepts" className="text-primary text-sm font-medium hover:underline">
                    Ir a Conceptos Fundamentales →
                  </Link>
                </div>
              </div>
            </div>

            {/* Intermediate */}
            <div className="p-6 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 text-sm font-bold text-green-700 dark:text-green-300">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="h4 text-foreground mb-2">Intermedio: Implementación</h3>
                  <p className="body text-muted-foreground mb-4">
                    Aprende a implementar sistemas inteligentes con guías técnicas, patrones de arquitectura y mejores
                    prácticas probadas.
                  </p>
                  <Link href="/learning-hub/guides" className="text-primary text-sm font-medium hover:underline">
                    Ir a Guías Técnicas →
                  </Link>
                </div>
              </div>
            </div>

            {/* Advanced */}
            <div className="p-6 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-sm font-bold text-purple-700 dark:text-purple-300">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="h4 text-foreground mb-2">Avanzado: Casos Reales</h3>
                  <p className="body text-muted-foreground mb-4">
                    Estudia casos reales de empresas que han transformado sus operaciones. Entiende desafíos, soluciones
                    y resultados.
                  </p>
                  <Link href="/learning-hub/case-studies" className="text-primary text-sm font-medium hover:underline">
                    Ver Casos de Estudio →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2 text-foreground mb-6">¿Listo para construir?</h2>
          <p className="body-lg text-muted-foreground mb-8">
            Con los conceptos claros, explora nuestras capacidades y soluciones para llevar estos conocimientos a la
            práctica.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium transition-colors"
            >
              Ver Capacidades
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 font-medium transition-colors"
            >
              Contactar Equipo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
