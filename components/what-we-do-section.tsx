import { Code2, Bot, Zap, Shield } from "lucide-react"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"

export function WhatWeDoSection({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const pillars = [
    { icon: Code2, key: "engineering" },
    { icon: Bot, key: "aiSystems" },
    { icon: Zap, key: "automation" },
    { icon: Shield, key: "infrastructure" },
  ] as const

  return (
    <section className="py-16 px-4 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{d.home.whatWeDo.title}</h2>
          <p className="text-lg text-muted-foreground">{d.home.whatWeDo.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map(({ icon: Icon, key }) => {
            const pillar = d.home.whatWeDo[key]
            return (
              <div key={key} className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/40 transition-colors">
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
