import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"

export function DifferentiatorSection({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  return (
    <section className="py-16 px-4 border-t border-border/50 bg-primary/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8">{d.home.differentiator.title}</h2>
        <div className="space-y-6">
          <p className="text-xl font-semibold text-foreground">{d.home.differentiator.statement1}</p>
          <p className="text-lg text-muted-foreground leading-relaxed">{d.home.differentiator.statement2}</p>
        </div>
      </div>
    </section>
  )
}
