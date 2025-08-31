"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, Cog } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "IA que Te Entiende",
    description:
      "No es ChatGPT genérico. Sistemas especializados que comprenden tu negocio específico y hablan tu idioma empresarial.",
  },
  {
    icon: Zap,
    title: "Integración Real",
    description:
      "Se conecta directamente con tus sistemas existentes. No es un chatbot flotante, es parte de tu infraestructura.",
  },
  {
    icon: Cog,
    title: "Sistema Completo",
    description:
      "Full stack IA: desde la conversación hasta la base de datos. Una solución integral, no parches separados.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por qué Neuralia es diferente?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistemas de IA conversacional empresarial diseñados específicamente para tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-2 hover:border-purple-200"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
