import { Check } from "lucide-react"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"

export function ArchitectureSection({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  return (
    <section className="py-16 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{d.home.architecture.title}</h2>
          <p className="text-lg text-muted-foreground">{d.home.architecture.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {d.home.architecture.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-card/50">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
