"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, MessageSquare, Zap, Shield, BarChart3, Cpu, Network, Database } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Full Stack AI Systems",
    description:
      "Desarrollamos sistemas completos de IA que transforman industrias enteras. Desde retail, salud, educación, finanzas, agricultura, inmobiliaria, manufactura, logística, turismo, energía, telecomunicaciones y más. Código que hace que la competencia llore.",
    badge: "11+ Industrias",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "AI Agents & Automations",
    description:
      "Agentes inteligentes que trabajan 24/7, automatizando procesos complejos y tomando decisiones como expertos humanos. Cada agente es una máquina de eficiencia que nunca duerme.",
    badge: "24/7 Active",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Network,
    title: "Multichannel",
    description:
      "Integración perfecta en WhatsApp, web, móvil y sistemas empresariales. Una experiencia unificada que conecta todos los puntos de contacto con tu cliente.",
    badge: "Omnichannel",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description:
      "Procesamiento instantáneo de datos y respuestas en tiempo real. Nuestros sistemas procesan millones de interacciones simultáneamente sin perder velocidad.",
    badge: "< 100ms",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Seguridad de nivel bancario con encriptación end-to-end, cumplimiento GDPR y auditorías continuas. Tu data está más segura que en Fort Knox.",
    badge: "Bank-level",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Dashboards inteligentes que predicen tendencias, identifican oportunidades y optimizan performance automáticamente. Data que habla tu idioma de negocio.",
    badge: "Predictive",
    gradient: "from-pink-500 to-purple-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            🚀 Tecnología de Vanguardia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            La Problemática que Resolvemos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mientras otros hablan de IA, nosotros la construimos. Sistemas que no solo funcionan, sino que{" "}
            <span className="text-primary font-semibold">revolucionan industrias completas</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full border border-primary/20">
            <Cpu className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Powered by Neural Networks & Advanced Machine Learning
            </span>
            <Database className="h-5 w-5 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
