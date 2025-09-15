"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, MessageCircle, ArrowRight, Bot, Zap, Shield, Users, TrendingUp, Clock, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "🚀 Leading AI Innovation",
      title: "Transform Your Business with Intelligent AI Agents",
      subtitle: "Enterprise-Grade Automation Solutions",
      description:
        "Deploy sophisticated AI agents that understand your business, automate complex processes, and deliver exceptional customer experiences. From customer service to data analysis, our AI solutions scale with your needs.",
      cta: {
        primary: "Start Free Trial",
        secondary: "Watch Demo",
        whatsapp: "Get Started on WhatsApp",
      },
      stats: {
        clients: "500+ Clients",
        automation: "95% Automation Rate",
        support: "24/7 Support",
        integration: "50+ Integrations",
      },
      features: [
        { icon: Bot, text: "Intelligent Automation" },
        { icon: Zap, text: "Real-time Processing" },
        { icon: Shield, text: "Enterprise Security" },
        { icon: Users, text: "Multi-channel Support" },
        { icon: TrendingUp, text: "Advanced Analytics" },
        { icon: Clock, text: "24/7 Operation" },
      ],
    },
    es: {
      badge: "🚀 Liderando la Innovación en IA",
      title: "Transforma Tu Negocio con Agentes de IA Inteligentes",
      subtitle: "Soluciones de Automatización Empresarial",
      description:
        "Despliega agentes de IA sofisticados que entienden tu negocio, automatizan procesos complejos y brindan experiencias excepcionales al cliente. Desde atención al cliente hasta análisis de datos, nuestras soluciones de IA escalan con tus necesidades.",
      cta: {
        primary: "Prueba Gratuita",
        secondary: "Ver Demo",
        whatsapp: "Comenzar en WhatsApp",
      },
      stats: {
        clients: "500+ Clientes",
        automation: "95% Automatización",
        support: "Soporte 24/7",
        integration: "50+ Integraciones",
      },
      features: [
        { icon: Bot, text: "Automatización Inteligente" },
        { icon: Zap, text: "Procesamiento en Tiempo Real" },
        { icon: Shield, text: "Seguridad Empresarial" },
        { icon: Users, text: "Soporte Multicanal" },
        { icon: TrendingUp, text: "Análisis Avanzado" },
        { icon: Clock, text: "Operación 24/7" },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10"
            >
              {t.badge}
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">{t.title}</h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">{t.subtitle}</p>

            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">{t.description}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold">
                {t.cta.primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold bg-transparent"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                {t.cta.secondary}
              </Button>
            </div>

            {/* WhatsApp CTA */}
            <div className="mb-16">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20comenzar%20con%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.cta.whatsapp}
                </a>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-black mb-2">{t.stats.clients}</div>
                <div className="text-sm text-gray-600">Trusted Worldwide</div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-black mb-2">{t.stats.automation}</div>
                <div className="text-sm text-gray-600">Process Efficiency</div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-black mb-2">{t.stats.support}</div>
                <div className="text-sm text-gray-600">Always Available</div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-black mb-2">{t.stats.integration}</div>
                <div className="text-sm text-gray-600">Platform Connections</div>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:border-black transition-colors">
                <CardContent className="p-4 text-center">
                  <feature.icon className="h-8 w-8 mx-auto mb-3 text-black" />
                  <div className="text-sm font-medium text-black">{feature.text}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="N3uralia Demo Video"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
