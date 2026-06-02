"use client"

import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { CheckCircle2 } from "lucide-react"

export function SecurityControl({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const { security } = d.home

  return (
    <section className="py-24 px-4 bg-primary/5 border-b border-primary/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {security.title}
          </h2>
          <p className="text-muted-foreground text-lg">{security.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {security.pillars.map((pillar, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
