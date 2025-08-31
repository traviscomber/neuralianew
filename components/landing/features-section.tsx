"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "IA que Te Entiende",
    description:
      "No es ChatGPT genérico. Es IA especializada que conoce tu negocio, tu forma de hablar y tus clientes específicos.",
  },
  {
    icon: MessageSquare,
    title: "Integración Real",
    description:
      "Se conecta directamente con tus sistemas existentes. No es un chatbot flotante, es parte de tu infraestructura.",
  },
  {
    icon: Zap,
    title: "Sistema Completo",
    description:
      "Full stack IA: desde la conversación hasta la base de datos. Todo integrado, todo funcionando como uno solo.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
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
            ¿Por qué Neuralia?
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Somos{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              diferentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No vendemos chatbots. Creamos sistemas de IA completos que se integran perfectamente con tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
