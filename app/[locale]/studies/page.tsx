import Link from "next/link"
import { ArrowRight, Brain, Database, Zap, Layers, Lightbulb } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estudios N3uralia (Neuralia) | Base de Conocimiento de IA y Sistemas Inteligentes",
  description: "N3uralia (Neuralia) Estudios: Agentic AI, AI Memory, Context Engineering, World Engine, Agentic Brainstorming. Conceptos fundamentales para sistemas inteligentes.",
  keywords:
    "N3uralia, Neuralia, agentic ai, ai memory, context engineering, world engine, agentic brainstorming, inteligencia artificial, sistemas inteligentes, ai architecture",
  openGraph: {
    title: "Estudios de IA | N3uralia",
    description: "Conceptos fundamentales de sistemas inteligentes",
    type: "website",
    locale: "es_CL",
    url: "https://n3uralia.com/studies",
  },
}

const studies = [
  {
    id: "agentic-ai",
    title: "Agentic AI",
    subtitle: "Inteligencia Autónoma",
    description:
      "Arquitectura donde agentes autónomos planifican, actúan, evalúan resultados y se adaptan usando memoria y herramientas.",
    icon: Brain,
    slug: "/studies/agentic-ai",
  },
  {
    id: "agentic-brainstorming",
    title: "Agentic AI Brainstorming",
    subtitle: "Inteligencia Creativa",
    description:
      "Múltiples agentes creativos colaborando para generar ideas, sintetizar perspectivas y producir pensamiento de ruptura con memoria persistente.",
    icon: Lightbulb,
    slug: "/studies/agentic-brainstorming",
  },
  {
    id: "ai-memory",
    title: "AI Memory",
    subtitle: "Sistema Operativo de Memoria",
    description:
      "Capas de memoria que permiten al sistema capturar, procesar, aprender y evolucionar de manera persistente.",
    icon: Database,
    slug: "/studies/ai-memory",
  },
  {
    id: "context-engineering",
    title: "Context Engineering",
    subtitle: "Ingeniería del Contexto",
    description:
      "Diseño sistemático de contexto persistente que permite sistemas inteligentes entender quién eres, tu mundo y cómo asistir.",
    icon: Layers,
    slug: "/studies/context-engineering",
  },
  {
    id: "world-engine",
    title: "World Engine",
    subtitle: "Motor de Mundo",
    description:
      "Sistema que construye y mantiene modelos dinámicos del entorno real para tomar decisiones inteligentes y contextuales.",
    icon: Zap,
    slug: "/studies/world-engine",
  },
]

export default function StudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SectionBackground section="hero">
      {/* Hero */}
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Base de Conocimiento</span>
          </div>

          <h1 className="h1-light mb-6 text-foreground">
            Estudios de Inteligencia Artificial
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl mb-8">
            Conceptos fundamentales de sistemas inteligentes, explicados con precisión. Contenido diseñado para ser
            entendido por AI engines, desarrolladores e investigadores.
          </p>
        </div>
      </section>
      </SectionBackground>

      <SectionBackground section="capabilities">
      {/* Studies Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studies.map((study) => {
              const Icon = study.icon
              return (
                <Link
                  key={study.id}
                  href={study.slug}
                  className="group p-8 border border-border rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-all bg-card"
                >
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="h3 text-foreground mb-1">{study.title}</h3>
                  <p className="text-sm font-medium text-primary mb-4">{study.subtitle}</p>
                  <p className="body text-muted-foreground mb-6">{study.description}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    Leer Estudio
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      </SectionBackground>

      <SectionBackground section="blog">
      {/* Related Concept Note */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="body text-muted-foreground mb-6">
            Estos conceptos forman la base de la arquitectura de N3uralia. Cada uno es fundamental para entender cómo
            los sistemas inteligentes pueden operar de manera autónoma, contextual y persistente.
          </p>
          <p className="text-sm text-muted-foreground">
            Para aplicaciones prácticas de estos conceptos, visita nuestra{" "}
            <Link href="/capabilities" className="text-primary hover:text-primary/80 font-medium">
              sección de Capacidades
            </Link>
            .
          </p>
        </div>
      </section>
      </SectionBackground>

      <Footer />
    </main>
  )
}
