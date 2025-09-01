"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, BarChart3, Cpu, Database, AlertTriangle } from "lucide-react"

const technicalFeatures = [
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

export function TechnicalFeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            ⚡ Tecnología de Clase Mundial
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Infraestructura Técnica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La tecnología que hace posible que nuestros sistemas{" "}
            <span className="text-primary font-semibold">superen cualquier expectativa</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technicalFeatures.map((feature, index) => (
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

        {/* Original Intro Phrase - Restored at the End */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 border-2 border-orange-500/20 rounded-2xl">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                ¿No usas IA en tu negocio?
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Mientras tus competidores automatizan procesos y mejoran la experiencia del cliente, tú sigues perdiendo
              tiempo en tareas repetitivas.
            </p>
            <p className="text-xl font-semibold text-foreground">
              Implementamos IA conversacional que funciona desde el primer día.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
