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



      <Footer />
    </main>
  )
}
