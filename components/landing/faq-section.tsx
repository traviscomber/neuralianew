"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sparkles } from "lucide-react"

const faqs = [
  {
    question: "¿Qué es Vibe Coding?",
    answer:
      "Es como darle alma a la inteligencia artificial para que conecte contigo de verdad. Creamos IA que no solo responde, sino que entiende tu forma de ser y se adapta a ti.",
  },
  {
    question: "¿Es seguro usar estos portales neuronales?",
    answer:
      "¡Por supuesto! Todo se procesa de forma segura y tus datos están protegidos. Usamos las mejores prácticas de seguridad para que puedas conversar con tranquilidad.",
  },
  {
    question: "¿Puedo personalizar la IA para mi negocio?",
    answer:
      "¡Claro que sí! Cada portal neuronal se adapta completamente a tu marca, tu forma de hablar y tus necesidades específicas. Es como tener un empleado que conoce perfectamente tu negocio.",
  },
  {
    question: "¿Qué tan difícil es implementarlo?",
    answer:
      "Súper fácil. No necesitas ser técnico. Te ayudamos en todo el proceso, desde la configuración hasta el entrenamiento. En pocos días tienes tu IA funcionando.",
  },
  {
    question: "¿Funciona en español?",
    answer:
      "¡Perfectamente! Nuestra IA entiende y habla español de forma natural, incluyendo modismos y expresiones locales. Se siente como hablar con alguien de tu país.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Tenemos planes flexibles que se adaptan a tu presupuesto. Desde opciones para emprendedores hasta soluciones empresariales. Hablemos para encontrar lo que mejor te funcione.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            ¿Tienes{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">dudas</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Aquí están las respuestas a las preguntas más comunes sobre nuestros portales neuronales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-2 border-gray-100 rounded-lg px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-700 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
