"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Brain, MessageSquare, ArrowRight, Code } from "lucide-react"

const layers = [
  {
    icon: Database,
    title: "Datos",
    description: "Tu información",
    color: "from-blue-500 to-blue-600",
    examples: ["CRM", "ERP"],
  },
  {
    icon: Brain,
    title: "IA",
    description: "Procesamiento",
    color: "from-purple-500 to-purple-600",
    examples: ["GPT-4", "Análisis"],
  },
  {
    icon: MessageSquare,
    title: "Chat",
    description: "Conversación",
    color: "from-green-500 to-green-600",
    examples: ["WhatsApp", "Web"],
  },
]

export function ArchitectureSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Badge variant="secondary" className="mb-3 bg-blue-50 text-blue-700 border-blue-200">
            <Code className="w-4 h-4 mr-2" />
            Full Stack IA
          </Badge>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sistema Completo
            </span>{" "}
            en 3 Pasos
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Conectamos tus datos con IA para crear conversaciones inteligentes
          </p>
        </motion.div>

        {/* Horizontal Architecture */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 max-w-4xl mx-auto">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 lg:gap-8"
            >
              <Card className="bg-white border-2 border-gray-200 hover:shadow-md transition-all duration-300 w-full lg:w-64">
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${layer.color} flex items-center justify-center shadow-lg`}
                  >
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-1">{layer.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{layer.description}</p>

                  <div className="flex justify-center gap-1 flex-wrap">
                    {layer.examples.map((example) => (
                      <Badge key={example} variant="outline" className="text-xs px-2 py-1">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow - only show between cards, not after last one */}
              {index < layers.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="hidden lg:block"
                >
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Simple Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-lg font-semibold mb-2">📊 Datos → 🧠 IA → 💬 Chat = Sistema Completo</div>
            <p className="text-sm opacity-90 mb-4">Todo integrado, funcionando en tiempo real</p>

            <a
              href={`https://wa.me/56940946660?text=${encodeURIComponent(
                "¡Hola! Quiero ver cómo funciona el sistema Full Stack IA de Neuralia.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Ver Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
