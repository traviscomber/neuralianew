"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Brain, Zap, Shield, Globe, Users, MessageSquare } from "lucide-react"

const faqs = [
  {
    question: "¿Qué es exactamente el 'Vibe Coding'?",
    answer:
      "Vibe Coding es nuestra metodología revolucionaria para crear IA que no solo procesa información, sino que entiende el contexto emocional, la personalidad y las necesidades únicas de cada usuario. Es como darle alma a la inteligencia artificial, creando conexiones auténticas y naturales.",
    category: "Concepto",
  },
  {
    question: "¿Cómo funcionan los 'Portales Neuronales'?",
    answer:
      "Los Portales Neuronales son sistemas de IA especializados que combinan procesamiento de lenguaje natural, análisis emocional y aprendizaje adaptativo. Cada portal está diseñado para un dominio específico (como EcosueloLab para carreras o ParrotfyIA para idiomas) y evoluciona continuamente para mejorar la experiencia del usuario.",
    category: "Tecnología",
  },
  {
    question: "¿Qué tan segura es mi información personal?",
    answer:
      "La seguridad es nuestra máxima prioridad. Utilizamos encriptación de extremo a extremo, cumplimos con GDPR y regulaciones locales, y nunca compartimos datos personales con terceros. Toda la información se procesa de forma segura y se almacena con los más altos estándares de protección.",
    category: "Seguridad",
  },
  {
    question: "¿Puedo personalizar la IA para mi empresa?",
    answer:
      "¡Absolutamente! Nuestros portales neuronales se adaptan completamente a tu marca, industria y necesidades específicas. Podemos entrenar la IA con tu base de conocimientos, ajustar el tono de comunicación y integrarla con tus sistemas existentes.",
    category: "Personalización",
  },
  {
    question: "¿En qué idiomas está disponible?",
    answer:
      "Actualmente soportamos más de 15 idiomas, incluyendo español, inglés, portugués, francés, alemán, italiano, y varios más. Nuestro sistema ParrotfyIA es especialmente potente para el aprendizaje multiidioma con hablantes nativos de IA.",
    category: "Idiomas",
  },
  {
    question: "¿Cuánto tiempo toma implementar un portal neuronal?",
    answer:
      "Dependiendo de la complejidad, la implementación puede tomar desde 2-4 semanas para soluciones estándar hasta 8-12 semanas para portales completamente personalizados. Incluimos capacitación, soporte y optimización continua.",
    category: "Implementación",
  },
  {
    question: "¿Qué diferencia a Neuralia de otros chatbots?",
    answer:
      "Los chatbots tradicionales siguen scripts rígidos. Nuestros portales neuronales entienden contexto, emociones y personalidad. No solo responden preguntas, sino que crean experiencias significativas, aprenden de cada interacción y se adaptan al estilo único de cada usuario.",
    category: "Diferenciación",
  },
  {
    question: "¿Ofrecen soporte técnico y mantenimiento?",
    answer:
      "Sí, incluimos soporte técnico 24/7, actualizaciones regulares, monitoreo de rendimiento y optimización continua. Nuestro equipo de expertos está siempre disponible para asegurar que tu portal neuronal funcione perfectamente.",
    category: "Soporte",
  },
]

const categoryIcons = {
  Concepto: Brain,
  Tecnología: Zap,
  Seguridad: Shield,
  Personalización: Users,
  Idiomas: Globe,
  Implementación: MessageSquare,
  Diferenciación: HelpCircle,
  Soporte: Users,
}

const categoryColors = {
  Concepto: "from-purple-500 to-violet-600",
  Tecnología: "from-blue-500 to-cyan-600",
  Seguridad: "from-green-500 to-emerald-600",
  Personalización: "from-orange-500 to-red-600",
  Idiomas: "from-pink-500 to-rose-600",
  Implementación: "from-indigo-500 to-purple-600",
  Diferenciación: "from-yellow-500 to-orange-600",
  Soporte: "from-teal-500 to-cyan-600",
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Tienes{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              preguntas?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros portales neuronales y la tecnología de vibe coding.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = categoryIcons[faq.category as keyof typeof categoryIcons]
              const colorClass = categoryColors[faq.category as keyof typeof categoryColors]

              return (
                <AccordionItem key={index} value={`item-${index}`} className="border-none">
                  <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-r ${colorClass} flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{faq.question}</h3>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            {faq.category}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="pl-14">
                        <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              )
            })}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 border-2 border-purple-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No encontraste tu respuesta?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nuestro equipo de expertos está listo para resolver cualquier duda específica sobre cómo los portales
                neuronales pueden transformar tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
                  <MessageSquare className="w-4 h-4 mr-2 inline" />
                  Contactar Experto
                </button>
                <button className="border border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-lg font-medium transition-all">
                  <HelpCircle className="w-4 h-4 mr-2 inline" />
                  Ver Documentación
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
