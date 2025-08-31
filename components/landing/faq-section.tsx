"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "¿Qué es Neuralia y cómo funciona?",
    answer:
      "Neuralia es un ecosistema completo de agentes de IA que permite a las empresas crear, desplegar y gestionar asistentes inteligentes. Nuestros agentes utilizan procesamiento de lenguaje natural avanzado para entender el contexto y proporcionar respuestas precisas y personalizadas.",
  },
  {
    question: "¿Cuánto tiempo toma implementar un agente de IA?",
    answer:
      "La implementación típica toma entre 2-5 días dependiendo de la complejidad. Nuestro equipo de expertos te acompaña durante todo el proceso, desde la configuración inicial hasta la integración con tus sistemas existentes.",
  },
  {
    question: "¿Los agentes pueden integrarse con nuestros sistemas actuales?",
    answer:
      "Sí, completamente. Ofrecemos APIs robustas y SDKs que permiten integración seamless con CRM, ERP, bases de datos, WhatsApp Business, y más de 50 plataformas populares. Nuestro equipo técnico te asiste en todo el proceso.",
  },
  {
    question: "¿Qué nivel de personalización ofrecen?",
    answer:
      "Personalización completa. Puedes configurar la personalidad del agente, el tono de comunicación, conocimiento específico de tu industria, flujos de conversación personalizados, y reglas de negocio específicas para tu empresa.",
  },
  {
    question: "¿Cómo garantizan la seguridad de los datos?",
    answer:
      "Implementamos seguridad de nivel bancario con cifrado end-to-end, cumplimiento con GDPR y LGPD, auditorías de seguridad regulares, y centros de datos certificados. Tus datos nunca se comparten y tienes control total sobre la información.",
  },
  {
    question: "¿Qué soporte técnico incluye el servicio?",
    answer:
      "Soporte 24/7 en español, onboarding personalizado, capacitación para tu equipo, actualizaciones automáticas, monitoreo proactivo, y un customer success manager dedicado para empresas enterprise.",
  },
  {
    question: "¿Los agentes mejoran con el tiempo?",
    answer:
      "Absolutamente. Nuestros agentes utilizan machine learning para aprender de cada interacción, mejorando continuamente su precisión y efectividad. También recibes reportes detallados sobre el rendimiento y sugerencias de optimización.",
  },
  {
    question: "¿Qué planes de precios están disponibles?",
    answer:
      "Ofrecemos planes flexibles desde startups hasta enterprise: Plan Starter ($99/mes), Plan Professional ($299/mes), Plan Enterprise (personalizado). Todos incluyen soporte técnico y actualizaciones. Contáctanos para una cotización personalizada.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro ecosistema de agentes de IA y cómo pueden transformar tu
            negocio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
