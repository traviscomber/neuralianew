import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: "/studies/context-engineering",
    type: "article",
    title: "What is Context Engineering? | N3uralia Studies",
    description: "Context Engineering is the systematic design of persistent context that enables intelligent systems to understand who you are, your world, and how to assist effectively.",
  })
}

export default function ContextEngineeringPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Link href="/studies" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Volver a Estudios
          </Link>
          <span className="inline-block text-xs font-medium text-primary uppercase tracking-wide mb-4 bg-primary/10 px-3 py-1 rounded-full">
            Concepto Fundamental
          </span>
          <h1 className="h1-light mb-6 text-foreground">Context Engineering</h1>
          <p className="body-lg text-muted-foreground">
            Diseño sistemático de contexto persistente que permite a sistemas inteligentes entender quién eres, tu mundo
            y cómo asistir de manera personalizada y efectiva.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert max-w-none">
          <div className="p-8 border border-primary/30 bg-primary/5 rounded-lg mb-12">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Definición</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Context Engineering es la disciplina de diseñar, capturar, mantener y evolucionar el contexto persistente que
              permite a un sistema inteligente comprender a quién está sirviendo, en qué entorno opera, y cómo puede
              asistir de manera genuinamente personalizada.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Por Qué Importa</h2>
            <div className="space-y-4 text-muted-foreground body">
              <p>
                Los sistemas genéricos no sirven a nadie. Un asistente que no te entiende es como un empleado que olvida
                todo de ti cada conversación.
              </p>
              <p>
                Context Engineering es lo que convierte un chatbot en un verdadero asistente. Es la diferencia entre "dame
                recomendaciones" y "dame recomendaciones basadas en mis preferencias, industria, objetivos y restricciones".
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Los 3 Pilares del Contexto</h2>
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="h3 text-primary font-semibold mb-2">1. Perfil Cognitivo</h3>
                <p className="text-muted-foreground body">Quién eres: objetivos, preferencias, estilo de trabajo, restricciones, historial de decisiones.</p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="h3 text-primary font-semibold mb-2">2. Inteligencia de Dominio</h3>
                <p className="text-muted-foreground body">Tu mundo: industria, mercado, competencia, tendencias, regulaciones aplicables.</p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="h3 text-primary font-semibold mb-2">3. Asistencia Adaptativa</h3>
                <p className="text-muted-foreground body">Cómo ayudar: soluciones contextualizadas, no genéricas. Automatización inteligente. Optimización continua.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Cómo Se Construye</h2>
            <div className="space-y-4 text-muted-foreground body">
              <p>
                <span className="font-semibold text-foreground">Captura Inicial:</span> El sistema formula preguntas
                inteligentes para entender tu contexto sin ser invasivo.
              </p>
              <p>
                <span className="font-semibold text-foreground">Aprendizaje Continuo:</span> Cada interacción refina el
                contexto. Errores son lecciones.
              </p>
              <p>
                <span className="font-semibold text-foreground">Evolución:</span> A medida que cambias (objetivos, mercado),
                el contexto se adapta.
              </p>
            </div>
          </div>

          <div className="mb-16 p-8 border border-primary/20 bg-primary/5 rounded-lg">
            <h2 className="h3 text-foreground mb-4">Conceptos Relacionados</h2>
            <div className="space-y-3">
              <Link href="/studies/agentic-ai" className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">Agentic AI</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link href="/studies/ai-memory" className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">AI Memory</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link href="/studies/world-engine" className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">World Engine</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>

          <div className="p-8 border border-border rounded-lg bg-card">
            <h3 className="h3 text-foreground mb-3">En N3uralia</h3>
            <p className="text-muted-foreground body mb-6">
              Nuestro Motor de Contexto Inteligente implementa estos principios. Cada proyecto comienza con ingeniería
              contextual profunda.
            </p>
            <Link href="/capabilities" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Ver Capacidades
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
