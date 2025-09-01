"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Network } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Agents & Automations",
    description:
      "Agentes inteligentes que trabajan 24/7 automatizando procesos complejos, desde atención al cliente hasta análisis predictivo. Cada agente aprende y mejora continuamente.",
    badge: "24/7 Active",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Network,
    title: "Multichannel",
    description:
      "Integración perfecta con WhatsApp, web, móvil, CRM y sistemas existentes. Una sola IA que funciona en todos tus canales de comunicación sin perder contexto.",
    badge: "Omnichannel",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Full Stack AI Systems",
    description:
      "Sistemas completos de IA que transforman industrias enteras. Desde agricultura hasta fintech, desarrollamos soluciones que revolucionan tu sector específico.",
    badge: "11+ Industries",
    gradient: "from-cyan-500 to-purple-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            🎯 Nuestras Especialidades
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Soluciones que Transforman
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No desarrollamos chatbots simples. Creamos{" "}
            <span className="text-primary font-semibold">ecosistemas inteligentes</span> que revolucionan la forma en
            que tu empresa opera.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-bold">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
