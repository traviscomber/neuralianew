"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Brain, MessageSquare, ArrowRight, Cloud, Layers } from "lucide-react"

const layers = [
  {
    icon: Database,
    title: "Backend & Data",
    description: "Infraestructura robusta",
    color: "from-blue-500 to-blue-600",
    examples: ["PostgreSQL", "APIs REST", "Microservicios"],
  },
  {
    icon: Brain,
    title: "IA & Processing",
    description: "Inteligencia artificial",
    color: "from-purple-500 to-purple-600",
    examples: ["GPT-4", "ML Models", "Analytics"],
  },
  {
    icon: MessageSquare,
    title: "Frontend & UX",
    description: "Interfaces de usuario",
    color: "from-green-500 to-green-600",
    examples: ["React", "WhatsApp", "Dashboards"],
  },
]

export function ArchitectureSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Badge
            variant="secondary"
            className="mb-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 transition-colors duration-300"
          >
            <Layers className="w-4 h-4 mr-2" />
            Arquitectura Full Stack
          </Badge>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Ecosistema Tecnológico Completo
            </span>{" "}
            en 3 Capas
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Desarrollamos cada componente del stack: desde la base de datos hasta la interfaz de usuario, con IA
            integrada en cada capa
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
              <Card className="bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 w-full lg:w-64">
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${layer.color} flex items-center justify-center shadow-lg`}
                  >
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white transition-colors duration-300">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
                    {layer.description}
                  </p>

                  <div className="flex justify-center gap-1 flex-wrap">
                    {layer.examples.map((example) => (
                      <Badge
                        key={example}
                        variant="outline"
                        className="text-xs px-2 py-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-colors duration-300"
                      >
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
                  <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-lg font-semibold mb-2 flex items-center justify-center gap-2">
              <Cloud className="w-5 h-5" />
              Backend + IA + Frontend = Solución Completa
            </div>
            <p className="text-sm opacity-90 mb-4">Cada componente desarrollado y optimizado por nuestro equipo</p>

            <a
              href={`https://wa.me/56940946660?text=${encodeURIComponent(
                "¡Hola! Quiero conocer más sobre las soluciones full stack de N3uralia.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Ver Arquitectura Completa
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
