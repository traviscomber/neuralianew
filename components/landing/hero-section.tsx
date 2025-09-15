"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Zap, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Advanced AI Solutions",
      title: "Transform Your Business with Intelligent AI Agents",
      subtitle:
        "Deploy custom AI agents that understand your business, automate processes, and deliver exceptional customer experiences across all channels.",
      cta: "Start Your AI Journey",
      demo: "Watch Demo",
      features: [
        { icon: MessageCircle, text: "Natural Conversations" },
        { icon: Zap, text: "Instant Deployment" },
        { icon: Shield, text: "Enterprise Security" },
      ],
    },
    es: {
      badge: "Soluciones Avanzadas de IA",
      title: "Transforma Tu Negocio con Agentes de IA Inteligentes",
      subtitle:
        "Despliega agentes de IA personalizados que entienden tu negocio, automatizan procesos y brindan experiencias excepcionales al cliente en todos los canales.",
      cta: "Inicia Tu Viaje con IA",
      demo: "Ver Demo",
      features: [
        { icon: MessageCircle, text: "Conversaciones Naturales" },
        { icon: Zap, text: "Despliegue Instantáneo" },
        { icon: Shield, text: "Seguridad Empresarial" },
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
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-8">
            <span className="text-sm font-medium text-black">{t.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">{t.title}</h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {t.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              {t.demo}
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {t.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm"
              >
                <feature.icon className="h-4 w-4 text-black" />
                <span className="text-sm font-medium text-black">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-black/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-black/5 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  )
}
