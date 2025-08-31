"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Qué hace diferente a Neuralia de otros chatbots?",
    answer:
      "No somos un chatbot genérico. Creamos sistemas de IA especializados que se integran completamente con tu negocio. Cada agente está entrenado específicamente para tu industria, conoce tu terminología y se conecta directamente con tus sistemas existentes.",
  },
  {
    question: "¿Cómo funciona la integración con mis sistemas actuales?",
    answer:
      "Nuestros sistemas se conectan directamente con tus APIs, bases de datos y herramientas existentes. Por ejemplo, EcosueloLab se integra con APIs de análisis de suelo, Parrotfy con sistemas ERP, y todos pueden funcionar vía WhatsApp usando Twilio. No necesitas cambiar tu infraestructura.",
  },
  {
    question: "¿Realmente tienen cobertura 24/7?",
    answer:
      "Sí. Tenemos ingenieros reales en Chile, Rusia, Vietnam y Singapur, más sistemas de IA que nunca duermen. Siempre hay alguien (humano o IA) monitoreando y trabajando en tu proyecto, sin importar la hora.",
  },
  {
    question: "¿Qué tan rápido pueden implementar una solución?",
    answer:
      "Depende de la complejidad, pero típicamente entre 2-4 semanas para una implementación completa. Comenzamos con un análisis de tus necesidades, luego desarrollamos el agente especializado, lo integramos con tus sistemas y realizamos pruebas exhaustivas antes del lanzamiento.",
  },
  {
    question: "¿Los sistemas aprenden y mejoran con el tiempo?",
    answer:
      "Absolutamente. Nuestros agentes de IA analizan cada conversación, aprenden de los patrones de uso y se optimizan continuamente. Además, nuestro equipo humano revisa el rendimiento regularmente y hace ajustes para mejorar la efectividad.",
  },
  {
    question: "¿Qué tipo de soporte técnico ofrecen?",
    answer:
      "Ofrecemos soporte técnico completo con nuestro equipo global. Desde Chile manejamos desarrollo y soporte general, desde Rusia el backend y sistemas de IA, Vietnam se encarga del frontend y testing, y Singapur maneja DevOps y deployment. Siempre hay alguien disponible.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
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
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            ¿Tienes{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">dudas?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respuestas a las preguntas más frecuentes sobre nuestros sistemas de IA conversacional empresarial.
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
                className="bg-white border-2 border-gray-100 rounded-lg px-6 hover:border-purple-200 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Tienes más preguntas?</h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está disponible 24/7 para resolver cualquier duda específica sobre tu proyecto.
            </p>
            <a
              href="https://wa.me/56940946660?text=¡Hola!%20Tengo%20algunas%20preguntas%20sobre%20los%20sistemas%20de%20IA%20de%20Neuralia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <HelpCircle className="w-5 h-5" />
              Pregúntanos por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
