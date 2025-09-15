"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Enterprise AI Solutions",
      subtitle: "Transform Your Business with Intelligent Automation",
      description:
        "We develop custom AI agents and automation systems that integrate seamlessly with your existing infrastructure, delivering measurable results and competitive advantages.",
      stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "50%", label: "Cost Reduction" },
        { value: "24/7", label: "Support" },
        { value: "100+", label: "Clients" },
      ],
      cta: {
        primary: "Start Your AI Journey",
        secondary: "Schedule Consultation",
      },
    },
    es: {
      title: "Soluciones de IA Empresarial",
      subtitle: "Transforma Tu Negocio con Automatización Inteligente",
      description:
        "Desarrollamos agentes de IA personalizados y sistemas de automatización que se integran perfectamente con tu infraestructura existente, entregando resultados medibles y ventajas competitivas.",
      stats: [
        { value: "99.9%", label: "Disponibilidad" },
        { value: "50%", label: "Reducción de Costos" },
        { value: "24/7", label: "Soporte" },
        { value: "100+", label: "Clientes" },
      ],
      cta: {
        primary: "Inicia Tu Viaje con IA",
        secondary: "Agendar Consulta",
      },
    },
  }

  const t = content[language]

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 tracking-tight">{t.title}</h1>
          <h2 className="text-2xl lg:text-3xl text-gray-600 mb-8 font-light">{t.subtitle}</h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">{t.description}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold" asChild>
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20iniciar%20mi%20viaje%20con%20IA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.cta.primary}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold bg-transparent"
              asChild
            >
              <a
                href="mailto:contacto@n3uralia.com?subject=Consulta%20sobre%20soluciones%20de%20IA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t.cta.secondary}
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
