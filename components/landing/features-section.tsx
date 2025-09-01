"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, TrendingUp, CheckCircle, ArrowRight, MessageCircle } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: "¿Las tareas manuales te tienen chato?",
      problem: "Tu equipo se la pasa 20+ horas por semana en tareas repetitivas",
      solution: "Automatizamos facturas, seguimiento de clientes y carga de datos",
      result: "Te ahorras 15-25 horas semanales para cosas importantes",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: DollarSign,
      title: "¿No sabes dónde se va la plata?",
      problem: "Gastos altos y no tienes visibilidad de dónde optimizar",
      solution: "Analizamos tu negocio y te mostramos dónde ahorrar con IA",
      result: "Reduces hasta 40% tus gastos con un plan claro",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: TrendingUp,
      title: "¿Necesitas algo hecho a la medida?",
      problem: "Tu desafío es complejo y las soluciones genéricas no sirven",
      solution: "Te creamos herramientas de IA personalizadas: chatbots, análisis, automatizaciones",
      result: "Sistema diseñado para lo que necesitas con ROI en 3 meses",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ]

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700"
          >
            Problemas Reales, Soluciones Reales
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            ¿Te suena{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              familiar?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Identificamos dónde la IA puede generar más impacto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full ${feature.bgColor} border-2 border-opacity-20 hover:shadow-xl transition-all duration-300`}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">{feature.title}</h3>

                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-400">
                      <p className="text-sm font-medium text-red-700 dark:text-red-300 mb-1">❌ El problema:</p>
                      <p className="text-red-600 dark:text-red-400 text-sm">{feature.problem}</p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400">
                      <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">🔧 La solución:</p>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">{feature.solution}</p>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
                      <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">✅ El resultado:</p>
                      <p className="text-green-600 dark:text-green-400 text-sm font-medium">{feature.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">¿Te identificas con alguno?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              En 30 minutos analizamos tu situación y te mostramos cómo la IA te puede ayudar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
              >
                <a
                  href="https://wa.me/56940946660?text=¡Hola!%20Me%20identifico%20con%20algunos%20problemas.%20Quiero%20una%20asesoría%20gratuita%20para%20ver%20cómo%20la%20IA%20me%20puede%20ayudar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Asesoría Gratuita</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Sin compromiso • 30 minutos</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
