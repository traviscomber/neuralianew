'use client'

import type { Locale } from '@/content/dictionaries'
import { getDict } from '@/content/dictionaries'
import { Brain, Zap, Users, Shield, Repeat2 } from 'lucide-react'

const ICONS = [Brain, Zap, Users, Shield, Repeat2]

export function HowWeThinkSection({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const isES = locale === 'es'

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {isES ? 'Cómo Pensamos Diferente' : 'How We Think Differently'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isES 
              ? 'La IA es una capa dentro de un sistema. No es la solución en sí misma. Estos cinco principios guían todo lo que construimos.'
              : 'AI is one layer within a system. It\'s not the solution itself. These five principles guide everything we build.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {d.about.philosophy.map((item, idx) => {
            const Icon = ICONS[idx]
            return (
              <div key={idx} className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.num}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
