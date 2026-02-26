'use client'

import { Zap, Shield, Users, Target } from "lucide-react"
import type { Locale } from "@/lib/get-locale"
import { Footer } from "@/components/layout/footer"

interface AboutPageClientProps {
  locale: Locale
}

export function AboutPageClient({ locale }: AboutPageClientProps) {
  const isES = locale === 'es'

  const values = {
    es: [
      {
        icon: Zap,
        title: "Ingeniería Rigurosa",
        description: "La IA es ingeniería, no magia. Sistemas predecibles, rastreables, gobernados. Cada decisión es auditable.",
      },
      {
        icon: Users,
        title: "Expansión Humana",
        description: "Tecnología que amplifica capacidades humanas. Ayuda a equipos a hacer más, no menos. Colaboración, no reemplazo.",
      },
      {
        icon: Shield,
        title: "Responsabilidad Radical",
        description: "Cada agente, cada decisión, completamente rastreable. Gobernanza no es fricción—es requisito no-negociable.",
      },
      {
        icon: Target,
        title: "Resultados Medibles",
        description: "No evangelizamos IA. Medimos impacto real: eficiencia, ingresos, satisfacción. Resultados concretos, no promesas.",
      },
    ],
    en: [
      {
        icon: Zap,
        title: "Rigorous Engineering",
        description: "AI is engineering, not magic. Predictable, traceable, governed systems. Every decision is auditable.",
      },
      {
        icon: Users,
        title: "Human Expansion",
        description: "Technology that amplifies human capabilities. Helps teams do more, not less. Collaboration, not replacement.",
      },
      {
        icon: Shield,
        title: "Radical Responsibility",
        description: "Every agent, every decision, completely traceable. Governance is not friction—it's non-negotiable requirement.",
      },
      {
        icon: Target,
        title: "Measurable Results",
        description: "We don't evangelize AI. We measure real impact: efficiency, revenue, satisfaction. Concrete results, not promises.",
      },
    ],
  }

  const currentValues = isES ? values.es : values.en

  const labels = {
    whoWeAre: isES ? "Quiénes Somos" : "Who We Are",
    mission: isES ? "Nuestra Misión" : "Our Mission",
    missionText: isES 
      ? "Construimos arquitecturas de inteligencia autónoma que amplifican capacidades humanas. No es IA que reemplaza. Es IA que expande. Sistemas que funcionan con humanos, no contra ellos."
      : "We build autonomous intelligence architectures that amplify human capabilities. It's not AI that replaces. It's AI that expands. Systems that work with humans, not against them.",
    values: isES ? "Valores" : "Values",
  }

  return (
    <>
      <main className="min-h-screen pt-16 bg-background">
        {/* Hero Section */}
        <section className="py-24 bg-background border-b border-border">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
              {labels.whoWeAre}
            </p>
            <h1 className="text-5xl font-bold mb-8 text-foreground">N3uralia</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {labels.missionText}
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30 border-b border-border px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-16">{labels.values}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {currentValues.map((value, i) => {
                const Icon = value.icon
                return (
                  <div key={i} className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
