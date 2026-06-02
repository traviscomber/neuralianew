"use client"

import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { TrendingUp, Users, Zap } from "lucide-react"

export function WhyNowSection({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const { whyNow } = d.home

  const icons = [TrendingUp, Users, Zap]

  return (
    <section className="py-24 px-4 bg-primary/5 border-b border-primary/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {whyNow.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tres razones por las que la automatización es urgente ahora, no en 2027
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {whyNow.reasons.map((reason, idx) => {
            const Icon = icons[idx]
            return (
              <div key={idx} className="p-6 rounded-lg border border-primary/20 bg-background hover:border-primary/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-foreground">{reason.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="bg-primary/10 border border-primary/40 rounded-lg p-8 text-center">
          <p className="text-lg font-semibold text-foreground">
            {whyNow.urgency}
          </p>
        </div>
      </div>
    </section>
  )
}
