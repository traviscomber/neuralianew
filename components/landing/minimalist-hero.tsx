"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function MinimalistHero() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  return (
    <section className="min-h-screen bg-white flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 mb-8 bg-gray-50">
          <span className="w-2 h-2 rounded-full bg-black" />
          <span className="text-sm font-medium text-gray-700">{t.trustedBy}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
          {t.orchestration}
          <br />
          <span className="text-gray-600">{t.simplified}</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">{t.heroDescription}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="px-8 bg-black text-white hover:bg-gray-900 rounded-lg font-semibold gap-2">
            {t.startFree}
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 border-gray-300 text-black hover:bg-gray-50 rounded-lg font-semibold bg-transparent"
          >
            {t.viewDemo}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto border-t border-gray-200 pt-12">
          <div>
            <div className="text-3xl font-bold text-black mb-2">500+</div>
            <p className="text-sm text-gray-600">{t.companies}</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">99.8%</div>
            <p className="text-sm text-gray-600">{t.availability}</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">24/7</div>
            <p className="text-sm text-gray-600">{t.support}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
