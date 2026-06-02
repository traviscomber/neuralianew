"use client"

import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"

export function IndustriesGrid({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const { industries } = d.home

  return (
    <section className="py-24 px-4 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {industries.title}
          </h2>
          <p className="text-muted-foreground text-lg">{industries.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.sectors.map((sector, idx) => (
            <div
              key={idx}
              className="p-6 bg-primary/5 border border-primary/20 rounded-lg hover:border-primary/60 hover:bg-primary/10 transition-all"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {sector.name}
              </h3>
              <p className="text-sm text-muted-foreground">{sector.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
