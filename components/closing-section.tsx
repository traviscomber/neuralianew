import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"

export function ClosingSection({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  return (
    <section className="py-20 px-4 border-t border-border/50 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-8">{d.home.closing.title}</h2>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          {d.home.closing.ctaText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
