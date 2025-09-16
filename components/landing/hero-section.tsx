"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ArrowRight, Play } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "AI-Powered Business Transformation",
      title: "Transform Your Business with Intelligent AI Agents",
      subtitle:
        "Deploy custom AI agents that automate customer service, boost sales, and streamline operations. Get enterprise-grade AI solutions that scale with your business.",
      cta: "Start Your AI Journey",
      demo: "Watch Demo",
      stats: [
        { value: "500+", label: "Businesses Transformed" },
        { value: "60%", label: "Cost Reduction" },
        { value: "24/7", label: "AI Availability" },
        { value: "50+", label: "Languages Supported" },
      ],
    },
    es: {
      badge: "Transformación Empresarial con IA",
      title: "Transforma Tu Negocio con Agentes de IA Inteligentes",
      subtitle:
        "Despliega agentes de IA personalizados que automatizan el servicio al cliente, impulsan las ventas y optimizan las operaciones. Obtén soluciones de IA de nivel empresarial que escalan con tu negocio.",
      cta: "Inicia Tu Viaje con IA",
      demo: "Ver Demo",
      stats: [
        { value: "500+", label: "Empresas Transformadas" },
        { value: "60%", label: "Reducción de Costos" },
        { value: "24/7", label: "Disponibilidad IA" },
        { value: "50+", label: "Idiomas Soportados" },
      ],
    },
  }

  const t = content[language]

  const whatsappMessage =
    language === "es"
      ? "Hola, me interesa conocer más sobre las soluciones de IA de N3uralia"
      : "Hello, I'm interested in learning more about N3uralia's AI solutions"

  const whatsappUrl = `https://wa.me/56944444649?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200"
          >
            {t.badge}
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">{t.title}</h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              {t.demo}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-green-100 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  )
}
