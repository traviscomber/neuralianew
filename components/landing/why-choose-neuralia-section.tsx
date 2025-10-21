"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Zap, Shield, TrendingUp } from "lucide-react"

export function WhyChooseNeuraliaSection() {
  const { t, language } = useLanguage()

  const features = [
    {
      icon: <Bot className="w-12 h-12 text-purple-400" />,
      title: { es: "Agentes Inteligentes", en: "Intelligent Agents" },
      description: {
        es: "IA avanzada que aprende y se adapta a tu negocio",
        en: "Advanced AI that learns and adapts to your business",
      },
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: { es: "Automatización Total", en: "Total Automation" },
      description: {
        es: "Procesos automatizados que ahorran tiempo y costos",
        en: "Automated processes that save time and costs",
      },
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: { es: "Seguridad Garantizada", en: "Guaranteed Security" },
      description: {
        es: "Datos protegidos con los más altos estándares",
        en: "Data protected with the highest standards",
      },
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-400" />,
      title: { es: "Resultados Medibles", en: "Measurable Results" },
      description: {
        es: "Analytics y métricas en tiempo real",
        en: "Real-time analytics and metrics",
      },
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("why.title")}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("why.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title[language]}</h3>
                <p className="text-gray-400">{feature.description[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
