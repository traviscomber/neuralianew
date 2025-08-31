"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, Zap, Users, MessageCircle, Sparkles } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Entiende Emociones",
    description: "Nuestra IA reconoce cómo te sientes y responde con empatía real",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Brain,
    title: "Conexión Real",
    description: "Crea vínculos auténticos contigo, como hablar con un amigo que te entiende",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Zap,
    title: "Se Adapta a Ti",
    description: "Cada conversación es única, adaptada a tu forma de ser",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Users,
    title: "Para Tu Equipo",
    description: "Funciona perfectamente con tu equipo y procesos existentes",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: MessageCircle,
    title: "Conversación Natural",
    description: "Habla como lo harías con cualquier persona, sin comandos complicados",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Sparkles,
    title: "Funciona de Manera Mágica",
    description: "Tecnología avanzada que se siente simple y natural de usar",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
            <Sparkles className="w-4 h-4 mr-2" />
            Características Únicas
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            ¿Por qué es{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              diferente
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No es solo otra IA. Es tecnología que entiende tu vibe y se conecta contigo de verdad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`${feature.bgColor} border-2 border-opacity-20 hover:shadow-lg transition-all duration-300 h-full`}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
