"use client"

import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function CommercialFAQ({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const { faq } = d.home
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="py-24 px-4 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {faq.title}
          </h2>
          <p className="text-muted-foreground text-lg">{faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {faq.items.map((item, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/60 transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-primary/5 transition-colors"
              >
                <span className="text-left font-semibold text-foreground">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 bg-primary/5 border-t border-primary/20">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
