import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"

export function ForWhoSection({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  return (
    <section className="py-16 px-4 border-t border-border/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-6">{d.home.forWho.title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{d.home.forWho.description}</p>
      </div>
    </section>
  )
}
