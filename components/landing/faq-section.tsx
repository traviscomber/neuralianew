"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function FAQSection() {
  const { language } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question:
        language === "en"
          ? "How long does it take to deploy an AI agent?"
          : "¿Cuánto tiempo toma desplegar un agente IA?",
      answer:
        language === "en"
          ? "We can deploy a fully functional AI agent in 48 hours. This includes initial setup, configuration, and basic training."
          : "Podemos desplegar un agente IA completamente funcional en 48 horas. Esto incluye configuración inicial, configuración y entrenamiento básico.",
    },
    {
      question: language === "en" ? "What industries do you serve?" : "¿Qué industrias atienden?",
      answer:
        language === "en"
          ? "We work with healthcare, finance, e-commerce, manufacturing, and technology companies. Our solutions are adaptable to any industry."
          : "Trabajamos con empresas de salud, finanzas, e-commerce, manufactura y tecnología. Nuestras soluciones son adaptables a cualquier industria.",
    },
    {
      question: language === "en" ? "Do you provide ongoing support?" : "¿Proporcionan soporte continuo?",
      answer:
        language === "en"
          ? "Yes, we offer 24/7 support and maintenance for all our AI solutions. Our team is always available to help."
          : "Sí, ofrecemos soporte y mantenimiento 24/7 para todas nuestras soluciones IA. Nuestro equipo siempre está disponible para ayudar.",
    },
    {
      question:
        language === "en" ? "Can you integrate with existing systems?" : "¿Pueden integrarse con sistemas existentes?",
      answer:
        language === "en"
          ? "Absolutely. Our solutions are designed to integrate seamlessly with your existing infrastructure and workflows."
          : "Absolutamente. Nuestras soluciones están diseñadas para integrarse perfectamente con su infraestructura y flujos de trabajo existentes.",
    },
  ]

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 px-4 leading-tight">
            {language === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-300 rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <Button
                    variant="ghost"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-4 sm:p-6 text-left justify-between hover:bg-gray-50 rounded-none h-auto border-0 min-h-[60px] sm:min-h-[72px]"
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900 pr-4 leading-tight">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                  </Button>
                  {openIndex === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
