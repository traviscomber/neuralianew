"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, BarChart3, Workflow, Database, Cpu, Globe, Shield, Rocket, Target, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "IA Conversacional Avanzada",
    description:
      "Chatbots que entienden contexto, emociones y intenciones. No respuestas robóticas, conversaciones naturales que convierten.",
    benefits: ["Comprensión contextual", "Aprendizaje continuo", "Personalización automática"],
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Workflow,
    title: "Automatización Total de Procesos",
    description:
      "Conectamos todos tus sistemas: CRM, inventario, facturación, reportes. Un ecosistema que funciona solo.",
    benefits: ["Integración completa", "Flujos inteligentes", "Sincronización automática"],
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Database,
    title: "APIs Personalizadas Inteligentes",
    description:
      "Desarrollamos APIs que no solo conectan, sino que aprenden y optimizan. Como EcosueloLab que analiza suelos en tiempo real.",
    benefits: ["Desarrollo a medida", "Escalabilidad garantizada", "Documentación completa"],
    color: "from-orange-500 to-red-600",
  },
  {
    icon: BarChart3,
    title: "Análisis Predictivo en Tiempo Real",
    description: "IA que predice tendencias, identifica oportunidades y previene problemas antes de que ocurran.",
    benefits: ["Predicciones precisas", "Alertas inteligentes", "Dashboards dinámicos"],
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Globe,
    title: "Plataformas Completas Multicanal",
    description:
      "Como ParrotfyIA: plataformas completas que integran IA, interfaces web, móvil y APIs. Todo en un ecosistema.",
    benefits: ["Experiencia unificada", "Múltiples canales", "Escalabilidad global"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Seguridad y Compliance Empresarial",
    description:
      "Arquitectura segura, datos encriptados, cumplimiento normativo. Tu información protegida con estándares bancarios.",
    benefits: ["Encriptación avanzada", "Backups automáticos", "Compliance garantizado"],
    color: "from-gray-600 to-gray-800",
  },
]

const stats = [
  { icon: Rocket, value: "50+", label: "Proyectos Entregados" },
  { icon: Target, value: "95%", label: "Precisión en IA" },
  { icon: TrendingUp, value: "300%", label: "ROI Promedio" },
  { icon: Zap, value: "7 días", label: "Tiempo de Deploy" },
]

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Cpu className="w-4 h-4 mr-2" />
            Arquitectura de Vanguardia
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Mientras otros venden</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              chatbots básicos,
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              nosotros construimos
            </span>
            <br />
            <span className="text-foreground">arquitecturas inteligentes</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            No somos una agencia más de chatbots. <strong className="text-foreground">Somos arquitectos de IA</strong>{" "}
            que diseñamos y desarrollamos
            <strong className="text-primary"> ecosistemas tecnológicos completos</strong> que aprenden, se adaptan y
            evolucionan.
            <br />
            <span className="text-lg mt-2 block">
              Cada línea de código que escribimos está pensada para{" "}
              <strong className="text-foreground">transformar industrias completas.</strong>
            </span>
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg p-4 border border-primary/20">
              <div className="text-sm font-medium text-primary">🏗️ Arquitectura Empresarial</div>
              <div className="text-xs text-muted-foreground mt-1">Microservicios, APIs REST, GraphQL</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-teal-600/10 rounded-lg p-4 border border-green-500/20">
              <div className="text-sm font-medium text-green-600">🧠 Machine Learning Avanzado</div>
              <div className="text-xs text-muted-foreground mt-1">GPT-4o, Análisis Predictivo, NLP</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-lg p-4 border border-orange-500/20">
              <div className="text-sm font-medium text-orange-600">⚡ Infraestructura Escalable</div>
              <div className="text-xs text-muted-foreground mt-1">Cloud Native, Auto-scaling, 99.9% uptime</div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group">
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8 border border-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Resultados que hablan por sí solos
              </span>
            </h3>
            <p className="text-muted-foreground">Métricas reales de proyectos en producción</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-blue-600/20 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-bold mb-4 text-foreground">🎯 La diferencia está en los detalles técnicos</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="font-semibold text-primary">Otros desarrolladores:</div>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Chatbots con respuestas fijas</li>
                  <li>• Integraciones básicas</li>
                  <li>• Sin aprendizaje automático</li>
                  <li>• Soporte limitado</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-green-600">Neuralia desarrolla:</div>
                <ul className="text-foreground space-y-1">
                  <li>• IA conversacional con contexto</li>
                  <li>• Ecosistemas completos integrados</li>
                  <li>• Machine Learning en producción</li>
                  <li>• Arquitectura escalable empresarial</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-blue-600">Resultado:</div>
                <ul className="text-foreground space-y-1">
                  <li>• 10x más eficiencia operacional</li>
                  <li>• 90% procesos automatizados</li>
                  <li>• ROI medible desde día 1</li>
                  <li>• Escalabilidad sin límites</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
