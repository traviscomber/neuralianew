"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Shield, BarChart3, Zap, Code } from "lucide-react"

const features = [
  {
    title: "Real-time Processing",
    description:
      "Arquitectura distribuida con procesamiento en tiempo real, cache inteligente y APIs optimizadas para máximo rendimiento",
    icon: Zap,
    badge: "< 100ms",
    color: "from-blue-500 to-cyan-600",
    details: [
      "Microservicios con Node.js y Python",
      "Cache distribuido con Redis y CDN global",
      "APIs REST y GraphQL optimizadas",
      "Balanceador de carga con failover automático",
    ],
  },
  {
    title: "Enterprise Security",
    description:
      "Seguridad de nivel bancario con encriptación end-to-end, autenticación robusta y cumplimiento de estándares internacionales",
    icon: Shield,
    badge: "Bank-level",
    color: "from-green-500 to-emerald-600",
    details: [
      "Encriptación AES-256 end-to-end",
      "Cumplimiento SOC 2 Type II y GDPR",
      "Autenticación multifactor y JWT",
      "Auditorías de seguridad trimestrales",
    ],
  },
  {
    title: "Advanced Analytics",
    description:
      "Dashboards interactivos, analytics predictivos con machine learning y business intelligence en tiempo real",
    icon: BarChart3,
    badge: "Predictive",
    color: "from-purple-500 to-pink-600",
    details: [
      "Dashboards React con visualizaciones D3.js",
      "Machine Learning con TensorFlow/PyTorch",
      "Data warehouses con PostgreSQL/MongoDB",
      "Reportes automáticos y alertas inteligentes",
    ],
  },
]

export function TechnicalFeaturesSection() {
  return (
    <section id="technical-features" className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-lg px-6 py-2">
            <Code className="w-4 h-4 mr-2" />
            Infraestructura Full Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Tecnología de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Vanguardia
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Infraestructura robusta y escalable que garantiza rendimiento, seguridad y confiabilidad empresarial en cada
            capa del stack tecnológico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-border h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                    >
                      {feature.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-card-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>

                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Full Stack Architecture Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge
            variant="outline"
            className="text-lg px-6 py-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700"
          >
            <Cpu className="w-5 h-5 mr-2" />
            Powered by Full Stack Engineering & Advanced AI
          </Badge>
        </motion.div>
      </div>
    </section>
  )
}
