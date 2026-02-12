import Link from "next/link"
import { ArrowRight, ArrowLeft, Brain, Database, Zap, Layers, Lightbulb } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conceptos Fundamentales | Centro de Aprendizaje N3uralia",
  description:
    "Conceptos fundamentales de sistemas inteligentes: Agentic AI, AI Memory, Context Engineering, World Engine, Agentic Brainstorming.",
  keywords:
    "conceptos fundamentales, agentic ai, ai memory, context engineering, world engine, sistemas inteligentes",
  openGraph: {
    title: "Conceptos Fundamentales | N3uralia",
    description: "Base teórica de sistemas inteligentes y IA",
    type: "website",
    locale: "es_CL",
  },
}

const concepts = [
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
  {
    id: "agentic-brainstorming",
    title: "Agentic AI Brainstorming",
    subtitle: "Inteligencia Creativa",
    description:
      "Múltiples agentes creativos colaborando para generar ideas, sintetizar perspectivas y producir pensamiento de ruptura con memoria persistente.",
    icon: Lightbulb,
    slug: "/studies/agentic-brainstorming",
  },
]

export default function ConceptsPage() {
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
            <span className="text-sm font-medium text-primary">Conceptos Fundamentales</span>
          </div>

          <h1 className="h1-light mb-6 text-foreground">Base Teórica de Sistemas Inteligentes</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mb-8">
            Conceptos fundamentales explicados con precisión. Contenido diseñado para ser entendido por desarrolladores,
            investigadores e ingenieros de sistemas.
          </p>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concepts.map((concept) => {
              const Icon = concept.icon
              return (
                <Link
                  key={concept.id}
                  href={concept.slug}
                  className="group p-8 border border-border rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-all bg-card"
                >
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="h3 text-foreground mb-1">{concept.title}</h3>
                  <p className="text-sm font-medium text-primary mb-4">{concept.subtitle}</p>
                  <p className="body text-muted-foreground mb-6">{concept.description}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    Leer Concepto
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Context Note */}
      <section className="py-16 px-4 border-t border-border bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="body text-muted-foreground mb-6">
            Estos conceptos forman la base de la arquitectura de N3uralia. Cada uno es fundamental para entender cómo
            los sistemas inteligentes pueden operar de manera autónoma, contextual y persistente.
          </p>
          <Link href="/learning-hub/guides" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
            Ir a Guías Técnicas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
