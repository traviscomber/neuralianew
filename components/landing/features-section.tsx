"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  Brain,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Conversaciones Naturales",
    description: "Agentes que comprenden contexto, emociones y mantienen conversaciones fluidas como humanos.",
    benefits: ["Procesamiento de lenguaje natural avanzado", "Comprensión contextual profunda", "Respuestas empáticas"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Brain,
    title: "Inteligencia Adaptativa",
    description: "IA que aprende de cada interacción y se adapta al estilo único de tu empresa.",
    benefits: ["Aprendizaje continuo automático", "Personalización por industria", "Mejora constante de respuestas"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Zap,
    title: "Implementación Rápida",
    description: "De la idea a producción en semanas, no meses. Integración sin interrumpir operaciones.",
    benefits: ["Setup en 48 horas", "Integración sin downtime", "Capacitación incluida"],
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description: "Cumplimiento total con regulaciones chilenas e internacionales. Datos siempre protegidos.",
    benefits: ["Encriptación end-to-end", "Cumplimiento GDPR/LOPD", "Auditorías de seguridad"],
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Globe,
    title: "Multicanal Unificado",
    description: "WhatsApp, web, email, teléfono. Un solo agente, múltiples canales de comunicación.",
    benefits: ["WhatsApp Business API", "Chat web integrado", "Email y SMS automático"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzados",
    description: "Métricas detalladas, insights de conversaciones y ROI medible en tiempo real.",
    benefits: ["Dashboard en tiempo real", "Reportes automáticos", "Análisis de sentimientos"],
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
]

const stats = [
  { number: "95%", label: "Satisfacción del Cliente", icon: Users },
  { number: "60%", label: "Reducción de Costos", icon: BarChart3 },
  { number: "48h", label: "Tiempo de Setup", icon: Clock },
  { number: "3x", label: "Velocidad de Respuesta", icon: Zap },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 text-lg px-6 py-2 font-semibold">
            <Brain className="w-4 h-4 mr-2" />
            Características Principales
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight">
            Tecnología que{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              revoluciona
            </span>{" "}
            la comunicación
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Agentes de IA diseñados específicamente para el mercado chileno, con tecnología de vanguardia y soporte
            local especializado.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 rounded-2xl"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600 font-semibold">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 group h-full rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{feature.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">{feature.description}</p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 font-medium">{benefit}</span>
                      </div>
                    ))}
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20más%20sobre%20sus%20agentes%20de%20IA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Descubre tu solución ideal
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
