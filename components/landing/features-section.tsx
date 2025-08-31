"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Heart,
  MessageSquare,
  Target,
  Sparkles,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  Rocket,
  Globe,
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Inteligencia Emocional",
    description: "IA que reconoce y responde a emociones humanas con empatía genuina",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Heart,
    title: "Conexión Auténtica",
    description: "Crea vínculos reales entre la IA y los usuarios a través de personalidad coherente",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Target,
    title: "Personalización Profunda",
    description: "Adapta cada interacción al contexto, historial y preferencias únicas del usuario",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Sparkles,
    title: "Aprendizaje Continuo",
    description: "Evoluciona constantemente para mejorar la calidad de cada conversación",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
  {
    icon: MessageSquare,
    title: "Conversación Natural",
    description: "Diálogos fluidos que se sienten como hablar con un experto humano",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Shield,
    title: "Confianza y Seguridad",
    description: "Protección de datos y transparencia en cada interacción",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50",
  },
]

const stats = [
  { icon: Users, value: "50K+", label: "Usuarios Satisfechos" },
  { icon: TrendingUp, value: "94%", label: "Tasa de Éxito" },
  { icon: Globe, value: "15+", label: "Idiomas Soportados" },
  { icon: Rocket, value: "99.9%", label: "Tiempo de Actividad" },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
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
            <Lightbulb className="w-4 h-4 mr-2" />
            Tecnología Revolucionaria
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Qué hace especial al{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Vibe Coding?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No es solo IA funcional, es IA con alma. Nuestros portales neuronales entienden el contexto emocional, la
            personalidad y las necesidades únicas de cada usuario.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 group ${feature.bgColor}/30`}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 rounded-2xl p-8 border border-purple-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Resultados que Hablan por Sí Solos</h3>
            <p className="text-gray-600">Métricas reales de nuestros portales neuronales en producción</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
