"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ArrowRight, Zap, Shield, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "AI-Powered Business Solutions",
      title: "Transform Your Business with Intelligent AI Agents",
      subtitle:
        "Automate customer service, streamline operations, and boost productivity with custom AI solutions that understand your business and deliver results 24/7.",
      cta: {
        primary: "Get Started Free",
        secondary: "View Demo",
      },
      stats: [
        { icon: Zap, value: "10x", label: "Faster Response Times" },
        { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
        { icon: Users, value: "500+", label: "Happy Clients" },
      ],
      features: [
        "Custom AI training on your business data",
        "Multi-channel deployment (WhatsApp, Web, Email)",
        "Real-time analytics and performance insights",
        "Enterprise-grade security and compliance",
      ],
    },
    es: {
      badge: "Soluciones Empresariales Impulsadas por IA",
      title: "Transforma Tu Negocio con Agentes de IA Inteligentes",
      subtitle:
        "Automatiza el servicio al cliente, optimiza operaciones y aumenta la productividad con soluciones de IA personalizadas que entienden tu negocio y entregan resultados 24/7.",
      cta: {
        primary: "Comenzar Gratis",
        secondary: "Ver Demo",
      },
      stats: [
        { icon: Zap, value: "10x", label: "Tiempos de Respuesta Más Rápidos" },
        { icon: Shield, value: "99.9%", label: "Garantía de Disponibilidad" },
        { icon: Users, value: "500+", label: "Clientes Satisfechos" },
      ],
      features: [
        "Entrenamiento de IA personalizado con tus datos empresariales",
        "Despliegue multicanal (WhatsApp, Web, Email)",
        "Análisis en tiempo real e insights de rendimiento",
        "Seguridad y cumplimiento de nivel empresarial",
      ],
    },
  }

  const t = content[language]

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10">
              {t.badge}
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">{t.title}</h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">{t.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20comenzar%20con%20sus%20servicios%20de%20IA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.cta.primary}
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold bg-transparent"
                asChild
              >
                <a href="#demo">
                  {t.cta.secondary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {t.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center text-left">
                  <div className="w-2 h-2 bg-black rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
