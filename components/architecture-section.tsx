'use client'

import type { Locale } from '@/content/dictionaries'
import { getDict } from '@/content/dictionaries'
import { Layers, GitBranch, Settings2, Zap } from 'lucide-react'

export function ArchitectureSection({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const isES = locale === 'es'

  const pillars = [
    {
      icon: Layers,
      titleES: d.pillars.platformTitle,
      titleEN: 'Platform',
      descES: d.pillars.platformDesc,
      descEN: d.pillars.platformDesc,
    },
    {
      icon: GitBranch,
      titleES: d.pillars.agenticTitle,
      titleEN: 'Agentic Systems',
      descES: d.pillars.agenticDesc,
      descEN: d.pillars.agenticDesc,
    },
    {
      icon: Settings2,
      titleES: 'Automatización',
      titleEN: 'Automation',
      descES: 'Procesos end-to-end escalables con costo controlado y latencia optimizada',
      descEN: 'Scalable end-to-end processes with controlled costs and optimized latency',
    },
    {
      icon: Zap,
      titleES: d.pillars.infraTitle,
      titleEN: 'AI Infrastructure',
      descES: d.pillars.infraDesc,
      descEN: d.pillars.infraDesc,
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {isES ? 'La Arquitectura N3uralia' : 'N3uralia Architecture'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isES
              ? 'Cuatro capas que trabajan juntas para llevar inteligencia a producción'
              : 'Four layers working together to bring intelligence to production'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            const title = isES ? pillar.titleES : pillar.titleEN
            const desc = isES ? pillar.descES : pillar.descEN
            return (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 rounded-lg border border-primary/20 bg-primary/5">
          <p className="text-center text-foreground text-lg leading-relaxed">
            {isES
              ? 'Cada capa es modular, escalable y diseñada para producción. La orquestación central garantiza que todas trabajen como un sistema coherente, no como partes aisladas.'
              : 'Each layer is modular, scalable, and production-ready. Central orchestration ensures they all work as one coherent system, not isolated parts.'}
          </p>
        </div>
      </div>
    </section>
  )
}
