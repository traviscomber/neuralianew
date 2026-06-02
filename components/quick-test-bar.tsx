"use client"

import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"

export function QuickTestBar({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const { quickTest } = d.home

  return (
    <section className="py-16 px-4 bg-primary/5 border-b border-primary/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {quickTest.title}
          </h2>
          <p className="text-muted-foreground text-lg">{quickTest.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quickTest.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-8 bg-background border border-primary/20 rounded-lg text-center hover:border-primary/60 hover:shadow-md transition-all"
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-3">
                {metric.value}
              </div>
              <p className="text-muted-foreground text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
