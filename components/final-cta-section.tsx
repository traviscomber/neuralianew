"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"

export function FinalCTASection({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const { finalCta } = d.home

  return (
    <section className="py-24 px-4 bg-primary/5 border-b border-primary/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          {finalCta.headline}
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {finalCta.subheadline}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1"
        >
          {finalCta.cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
