import Link from "next/link"
import { ArrowRight, Brain, Database, Zap, Layers, Lightbulb } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

type StudyItem = {
  id: string
  title: string
  subtitle: string
  description: string
  icon: typeof Brain
  slug: string
}

const pageCopy = {
  es: {
    badge: "Base de conocimiento",
    title: "Estudios de Inteligencia Artificial",
    intro:
      "Conceptos fundamentales de sistemas inteligentes.",
    cta: "Leer estudio",
    closing: "Estos conceptos forman la base de la arquitectura de N3uralia.",
    closingLink: "sección de Capacidades",
    closingPrefix: "Para aplicarlos en la práctica, visita nuestra",
  },
  en: {
    badge: "Knowledge base",
    title: "Artificial Intelligence Studies",
    intro:
      "Core concepts for intelligent systems.",
    cta: "Read study",
    closing: "These concepts form the foundation of N3uralia's architecture.",
    closingLink: "Capabilities section",
    closingPrefix: "To apply these concepts in practice, visit our",
  },
} as const

const studies: Record<Locale, StudyItem[]> = {
  es: [
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
        "Diseño sistemático de contexto persistente que permite a los sistemas inteligentes entender quién eres, tu mundo y cómo asistir.",
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
  ],
  en: [
    {
      id: "agentic-ai",
      title: "Agentic AI",
      subtitle: "Autonomous Intelligence",
      description:
        "Architecture where autonomous agents plan, act, evaluate outcomes, and adapt using memory and tools.",
      icon: Brain,
      slug: "/studies/agentic-ai",
    },
    {
      id: "agentic-brainstorming",
      title: "Agentic AI Brainstorming",
      subtitle: "Creative Intelligence",
      description:
        "Multiple creative agents collaborating to generate ideas, synthesize perspectives, and produce breakthrough thinking with persistent memory.",
      icon: Lightbulb,
      slug: "/studies/agentic-brainstorming",
    },
    {
      id: "ai-memory",
      title: "AI Memory",
      subtitle: "Memory Operating System",
      description:
        "Memory layers that let the system capture, process, learn, and evolve persistently.",
      icon: Database,
      slug: "/studies/ai-memory",
    },
    {
      id: "context-engineering",
      title: "Context Engineering",
      subtitle: "Context Engineering",
      description:
        "Systematic design of persistent context that allows intelligent systems to understand who you are, your world, and how to help.",
      icon: Layers,
      slug: "/studies/context-engineering",
    },
    {
      id: "world-engine",
      title: "World Engine",
      subtitle: "World Engine",
      description:
        "A system that builds and maintains dynamic models of the real environment to make intelligent, contextual decisions.",
      icon: Zap,
      slug: "/studies/world-engine",
    },
  ],
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: "/studies",
    title: locale === "es" ? "Estudios | N3uralia" : "Studies | N3uralia",
    description:
      locale === "es"
        ? "Base de conocimiento sobre agentes, memoria, context engineering y sistemas inteligentes aplicada a operaciones reales."
        : "Knowledge base on agents, memory, context engineering, and intelligent systems applied to real operations.",
  })
}

export default function StudiesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const text = pageCopy[locale]

  return (
    <main className="min-h-screen bg-background">
      <SectionBackground section="hero">
        <section className="pt-40 pb-20 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">{text.badge}</span>
            </div>

            <h1 className="h1-light mb-6 text-foreground">{text.title}</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mb-8">{text.intro}</p>
          </div>
        </section>
      </SectionBackground>

      <SectionBackground section="capabilities">
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studies[locale].map((study) => {
                const Icon = study.icon
                return (
                  <Link
                    key={study.id}
                    href={`/${locale}${study.slug}`}
                    className="group p-8 border border-border rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-all bg-card"
                  >
                    <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="h3 text-foreground mb-1">{study.title}</h3>
                    <p className="text-sm font-medium text-primary mb-4">{study.subtitle}</p>
                    <p className="body text-muted-foreground mb-6">{study.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      {text.cta}
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
        <section className="py-16 px-4 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <p className="body text-muted-foreground mb-6">{text.closing}</p>
            <p className="text-sm text-muted-foreground">
              {text.closingPrefix}{" "}
              <Link href={`/${locale}/capabilities`} className="text-primary hover:text-primary/80 font-medium">
                {text.closingLink}
              </Link>
              .
            </p>
          </div>
        </section>
      </SectionBackground>

      <Footer locale={locale} />
    </main>
  )
}
