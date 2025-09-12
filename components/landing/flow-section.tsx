"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Brain, Zap, Target, BarChart3, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const flowSteps = [
  {
    step: "01",
    title: "Recepción Inteligente",
    description: "El usuario inicia conversación por cualquier canal digital",
    icon: MessageSquare,
    details: [
      "Detección automática de idioma",
      "Análisis de intención inicial",
      "Clasificación de prioridad",
      "Enrutamiento inteligente",
    ],
  },
  {
    step: "02",
    title: "Procesamiento IA",
    description: "Análisis profundo del contexto y generación de respuesta personalizada",
    icon: Brain,
    details: [
      "Comprensión de lenguaje natural",
      "Análisis de sentimientos",
      "Búsqueda en base de conocimiento",
      "Generación de respuesta contextual",
    ],
  },
  {
    step: "03",
    title: "Respuesta Instantánea",
    description: "Entrega de solución precisa en menos de 2 segundos",
    icon: Zap,
    details: [
      "Respuesta en tiempo real",
      "Formato optimizado por canal",
      "Personalización por usuario",
      "Seguimiento de satisfacción",
    ],
  },
  {
    step: "04",
    title: "Optimización Continua",
    description: "Aprendizaje automático para mejorar futuras interacciones",
    icon: Target,
    details: [
      "Análisis de efectividad",
      "Actualización de modelos",
      "Refinamiento de respuestas",
      "Mejora de precisión",
    ],
  },
]

const multipleOutputs = [
  {
    name: "WhatsApp Business",
    icon: "/tech-icons/whatsapp-logo.png",
    fallback: "/placeholder.svg?height=48&width=48&text=WA",
    description: "Integración nativa con WhatsApp Business API",
  },
  {
    name: "Telegram",
    icon: "/tech-icons/telegram-logo.png",
    fallback: "/placeholder.svg?height=48&width=48&text=TG",
    description: "Bot inteligente para Telegram",
  },
  {
    name: "Meta Messenger",
    icon: "/tech-icons/meta-logo.png",
    fallback: "/placeholder.svg?height=48&width=48&text=FB",
    description: "Chatbot para Facebook Messenger",
  },
  {
    name: "Web Chat",
    icon: "/placeholder.svg?height=48&width=48&text=WEB",
    fallback: "/placeholder.svg?height=48&width=48&text=WEB",
    description: "Widget de chat para sitios web",
  },
  {
    name: "API REST",
    icon: "/placeholder.svg?height=48&width=48&text=API",
    fallback: "/placeholder.svg?height=48&width=48&text=API",
    description: "Integración directa via API",
  },
  {
    name: "Zapier",
    icon: "/tech-icons/zapier-logo.png",
    fallback: "/placeholder.svg?height=48&width=48&text=ZAP",
    description: "Automatización con Zapier",
  },
]

export function FlowSection() {
  const { language } = useLanguage()

  return (
    <section id="flow" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            <BarChart3 className="w-5 h-5 mr-2" />
            {language === "en" ? "Intelligent Process" : "Proceso Inteligente"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-6">
            {language === "en" ? "How our" : "Cómo funciona"}
            <br />
            <span className="font-bold">{language === "en" ? "AI works" : "nuestra IA"}</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {language === "en"
              ? "From message reception to intelligent response, discover the advanced process that makes our AI understand and respond like a human expert."
              : "Desde la recepción del mensaje hasta la respuesta inteligente, descubre el proceso avanzado que hace que nuestra IA comprenda y responda como un experto humano."}
          </p>
        </motion.div>

        {/* Flow Steps - Monochrome */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {flowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 group h-full rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-black group-hover:bg-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="bg-gray-100 text-gray-700 border-0 font-bold text-lg px-4 py-2">
                      {step.step}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 font-light">{step.description}</p>

                  {/* Details */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 font-medium text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Multiple Outputs Section - Monochrome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Badge className="bg-gray-100 text-gray-700 border-0 text-sm px-4 py-2 font-medium mb-4">
              {language === "en" ? "Multi-Channel" : "Multi-Canal"}
            </Badge>
            <h3 className="text-3xl font-bold text-black mb-4">
              {language === "en" ? "One AI, Multiple Channels" : "Una IA, Múltiples Canales"}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              {language === "en"
                ? "Deploy your intelligent assistant across all digital touchpoints your customers use"
                : "Despliega tu asistente inteligente en todos los puntos de contacto digitales que usan tus clientes"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {multipleOutputs.map((output, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 group text-center rounded-2xl">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <img
                        src={output.icon || "/placeholder.svg"}
                        alt={output.name}
                        className="w-full h-full object-contain filter grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement
                          if (target.src !== output.fallback) {
                            target.src = output.fallback
                          }
                        }}
                      />
                    </div>
                    <h4 className="font-semibold text-black text-sm mb-2 group-hover:text-gray-900 transition-colors duration-300">
                      {output.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{output.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Stats - Monochrome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-black text-white border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{"<2s"}</div>
                  <div className="text-gray-300 font-semibold text-base">
                    {language === "en" ? "Response Time" : "Tiempo Respuesta"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-gray-300 font-semibold text-base">
                    {language === "en" ? "Accuracy" : "Precisión"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-gray-300 font-semibold text-base">
                    {language === "en" ? "Availability" : "Disponibilidad"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">∞</div>
                  <div className="text-gray-300 font-semibold text-base">
                    {language === "en" ? "Scalability" : "Escalabilidad"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section - Monochrome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20ver%20una%20demostración%20del%20proceso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {language === "en" ? "See Live Demo" : "Ver demostración en vivo"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
