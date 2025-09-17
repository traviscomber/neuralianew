"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Transform Your Business with Intelligent AI Agents",
      subtitle:
        "Deploy custom AI agents that understand your business, automate processes, and deliver exceptional customer experiences across all channels.",
      exploreButton: "Explore Solutions",
      contactButton: "Contact WA",
    },
    es: {
      title: "Transforma Tu Negocio con Agentes de IA Inteligentes",
      subtitle:
        "Despliega agentes de IA personalizados que entienden tu negocio, automatizan procesos y brindan experiencias excepcionales al cliente en todos los canales.",
      exploreButton: "Explorar Soluciones",
      contactButton: "Contactar WA",
    },
  }

  const t = content[language]

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/56940946660", "_blank")
  }

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">{t.title}</h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={scrollToServices}
              size="lg"
              className="px-12 py-4 text-lg bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all duration-300 hover:scale-105"
            >
              {t.exploreButton}
            </Button>

            <Button
              onClick={openWhatsApp}
              variant="outline"
              size="lg"
              className="px-12 py-4 text-lg border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              {t.contactButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
