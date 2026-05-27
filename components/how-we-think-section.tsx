import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"

export function HowWeThinkSection({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  return (
    <section className="py-16 px-4 border-t border-border/50 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-4">{d.home.howWeThink.title}</h2>
        <p className="text-xl font-semibold text-primary mb-6">{d.home.howWeThink.description}</p>
        <p className="text-lg text-muted-foreground leading-relaxed">{d.home.howWeThink.insight}</p>
      </div>
    </section>
  )
}
