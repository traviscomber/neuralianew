"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Zap,
  Shield,
  MessageSquare,
  BarChart3,
  Smartphone,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "IA que Entiende",
    description: "Procesamiento de lenguaje natural avanzado que comprende contexto y matices",
    color: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
  },
  {
    icon: Zap,
    title: "Súper Rápido",
    description: "Respuestas instantáneas con arquitectura optimizada para alta performance",
    color: "from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400",
  },
  {
    icon: Shield,
    title: "Siempre Funciona",
    description: "99.9% uptime con sistemas redundantes y monitoreo 24/7",
    color: "from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400",
  },
  {
    icon: MessageSquare,
    title: "Multi-Canal",
    description: "WhatsApp, Web, API - una sola IA en todos tus canales de comunicación",
    color: "from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400",
  },
  {
    icon: BarChart3,
    title: "Analytics Inteligente",
    description: "Insights automáticos sobre conversaciones y comportamiento de usuarios",
    color: "from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Optimizado para móviles, donde están tus usuarios realmente",
    color: "from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400",
  },
]

const stats = [
  {
    icon: CheckCircle,
    number: "99.9%",
    label: "Uptime",
    description: "Disponibilidad garantizada",
  },
  {
    icon: TrendingUp,
    number: "3x",
    label: "ROI Promedio",
    description: "Retorno de inversión",
  },
  {
    icon: Users,
    number: "50K+",
    label: "Conversaciones",
    description: "Procesadas mensualmente",
  },
  {
    icon: Clock,
    number: "<200ms",
    label: "Respuesta",
    description: "Tiempo promedio",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-muted/10">
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
            className="mb-4 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700"
          >
            <Brain className="w-4 h-4 mr-2" />
            La Problemática
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Tu competencia ya{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              automatizó
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Mientras tú sigues respondiendo manualmente, ellos ya tienen IA trabajando 24/7. Aquí está lo que necesitas
            para ponerte al día.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-border hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-purple-500/10 transition-all duration-300 h-full bg-card group hover:scale-105">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Números que Importan</h3>
            <p className="text-purple-100 dark:text-purple-200">Métricas reales de nuestros sistemas en producción</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/20 dark:bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-purple-100 dark:text-purple-200">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
