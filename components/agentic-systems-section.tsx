"use client"

import type { Locale } from "@/content/dictionaries"
import { AgenticGridCard } from "./agentic-grid-card"

interface AgenticSystemsSectionProps {
  locale: Locale
}

export function AgenticSystemsSection({ locale }: AgenticSystemsSectionProps) {
  const isES = locale === "es"

  const content = {
    es: {
      title: "Sistemas Agénticos a Escala",
      subtitle:
        "La mayoría de sistemas IA fallan en producción. Diseñamos arquitecturas que sobreviven el mundo real.",
      cards: [
        {
          title: "Orquestación",
          description: "Coordinación estructurada multi-agente con capas de planificación, routing y ejecución.",
        },
        {
          title: "Observabilidad",
          description: "Trazabilidad completa de decisiones, uso de herramientas y rutas de ejecución.",
        },
        {
          title: "Inteligencia de Costos",
          description: "Routing dinámico de modelos, caché y límites de ejecución para controlar gastos.",
        },
        {
          title: "Evaluación",
          description: "Testing basado en simulación para sistemas no-determinísticos.",
        },
        {
          title: "Gobernanza",
          description: "Acciones permisionadas, human-in-the-loop y logs auditables.",
        },
      ],
    },
    en: {
      title: "Agentic Systems at Scale",
      subtitle: "Most AI systems fail in production. We design architectures built to survive real-world conditions.",
      cards: [
        {
          title: "Orchestration",
          description:
            "Structured multi-agent coordination with planner, router, and execution layers.",
        },
        {
          title: "Observability",
          description: "Full traceability of decisions, tool usage, and execution paths.",
        },
        {
          title: "Cost Intelligence",
          description: "Dynamic model routing, caching, and execution limits to control costs.",
        },
        {
          title: "Evaluation",
          description: "Simulation-based testing for non-deterministic systems.",
        },
        {
          title: "Governance",
          description: "Permissioned actions, human-in-the-loop, and audit-ready logs.",
        },
      ],
    },
  }

  const texts = content[isES ? "es" : "en"]

  return (
    <section className="py-16 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-foreground mb-4 text-balance">{texts.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {texts.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {texts.cards.map((card, idx) => (
            <AgenticGridCard
              key={idx}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            {isES ? "Construido en la" : "Built on the"}{" "}
            <span className="font-semibold text-foreground">
              N3uralia Agent Matrix™
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
