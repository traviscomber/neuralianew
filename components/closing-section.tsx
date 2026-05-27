import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"

export function ClosingSection({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const isES = locale === "es"
  
  return (
    <section className="py-24 px-4 border-t border-border/50 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          {d.home.closing.title}
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          {d.home.closing.subtitle}
        </p>

        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold mb-8"
        >
          {d.home.closing.ctaText}
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="text-sm text-muted-foreground">
          {d.home.closing.microcopy}
        </p>
      </div>
    </section>
  )
}
