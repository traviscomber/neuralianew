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
          <span className="text-sm font-medium text-gray-700">
            {language === "es" ? "Plataforma de IA Empresarial de Chile" : "Chile's Enterprise AI Platform"}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
          {t.orchestration}
          <br />
          <span className="text-gray-600">{t.simplified}</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          {language === "es"
            ? "Conecta agentes inteligentes, automatiza procesos y escala sistemas de IA en minutos. Soluciones completas para empresas chilenas."
            : "Connect intelligent agents, automate processes and scale AI systems in minutes. Complete solutions for Chilean companies."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="px-8 bg-black text-white hover:bg-gray-900 rounded-lg font-semibold gap-2">
            {language === "es" ? "Comenzar Gratis" : "Start Free"}
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 border-gray-300 text-black hover:bg-gray-50 rounded-lg font-semibold bg-transparent"
          >
            {language === "es" ? "Hablar con Equipo" : "Talk to Team"}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto border-t border-gray-200 pt-12">
          <div>
            <div className="text-3xl font-bold text-black mb-2">50+</div>
            <p className="text-sm text-gray-600">{language === "es" ? "Empresas en Chile" : "Companies in Chile"}</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">99.8%</div>
            <p className="text-sm text-gray-600">{language === "es" ? "Disponibilidad" : "Availability"}</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">24/7</div>
            <p className="text-sm text-gray-600">{language === "es" ? "Soporte Local" : "Local Support"}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
