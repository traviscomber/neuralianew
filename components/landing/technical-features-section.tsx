"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Database, Cloud, Cpu, Lock, Monitor, ArrowRight, CheckCircle, MessageCircle } from "lucide-react"

const technicalFeatures = [
  {
    icon: Code2,
    title: "APIs RESTful Robustas",
    description: "Integración perfecta con sistemas existentes mediante APIs documentadas y SDKs completos.",
    details: [
      "Documentación OpenAPI 3.0",
      "SDKs en Python, JavaScript, PHP",
      "Rate limiting y autenticación OAuth2",
      "Webhooks para eventos en tiempo real",
    ],
    category: "Integración",
  },
  {
    icon: Database,
    title: "Base de Datos Escalable",
    description: "Arquitectura de datos optimizada para alto rendimiento y disponibilidad 99.9%.",
    details: [
      "PostgreSQL con replicación automática",
      "Backup incremental cada 15 minutos",
      "Sharding horizontal automático",
      "Índices optimizados para consultas IA",
    ],
    category: "Infraestructura",
  },
  {
    icon: Cloud,
    title: "Despliegue Multi-Cloud",
    description: "Infraestructura distribuida en AWS, Google Cloud y Azure para máxima disponibilidad.",
    details: [
      "Auto-scaling basado en demanda",
      "CDN global para baja latencia",
      "Disaster recovery automático",
      "Monitoreo 24/7 con alertas",
    ],
    category: "Infraestructura",
  },
  {
    icon: Cpu,
    title: "Procesamiento IA Avanzado",
    description: "Modelos de lenguaje optimizados con GPUs dedicadas para respuestas instantáneas.",
    details: [
      "GPT-4 Turbo con fine-tuning",
      "Procesamiento en <200ms",
      "Modelos especializados por industria",
      "Caché inteligente de respuestas",
    ],
    category: "Inteligencia Artificial",
  },
  {
    icon: Lock,
    title: "Seguridad Empresarial",
    description: "Encriptación end-to-end y cumplimiento con estándares internacionales de seguridad.",
    details: [
      "Encriptación AES-256 en reposo",
      "TLS 1.3 para datos en tránsito",
      "Auditorías SOC 2 Type II",
      "Cumplimiento GDPR y LOPD",
    ],
    category: "Seguridad",
  },
  {
    icon: Monitor,
    title: "Dashboard Analytics",
    description: "Métricas en tiempo real con visualizaciones interactivas y reportes automatizados.",
    details: [
      "Métricas de conversación en vivo",
      "Análisis de sentimientos avanzado",
      "Reportes PDF automatizados",
      "Alertas personalizables",
    ],
    category: "Analytics",
  },
]

const architectureComponents = [
  { name: "Frontend React/Next.js", status: "Optimizado", color: "bg-blue-500" },
  { name: "Backend Node.js/Python", status: "Escalable", color: "bg-green-500" },
  { name: "Base de Datos PostgreSQL", status: "Alta Disponibilidad", color: "bg-purple-500" },
  { name: "Cache Redis", status: "Sub-segundo", color: "bg-red-500" },
  { name: "Queue System", status: "Asíncrono", color: "bg-yellow-500" },
  { name: "Monitoring", status: "24/7", color: "bg-indigo-500" },
]

export function TechnicalFeaturesSection() {
  return (
    <section id="technical-features" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 text-lg px-6 py-2 font-semibold transition-colors duration-300">
            <Code2 className="w-4 h-4 mr-2" />
            Arquitectura Técnica
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
            Tecnología{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              enterprise-grade
            </span>{" "}
            probada
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Infraestructura robusta, APIs modernas y arquitectura escalable diseñada para empresas que requieren máximo
            rendimiento y confiabilidad.
          </p>
        </motion.div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl transition-colors duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center transition-colors duration-300">
                Stack Tecnológico Completo
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {architectureComponents.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={`w-4 h-4 ${component.color} rounded-full mx-auto mb-2`}></div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">
                      {component.name}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300">
                      {component.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technicalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 group h-full rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-slate-900 dark:bg-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 font-semibold transition-colors duration-300">
                      {feature.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5 transition-colors duration-300" />
                        <span className="text-slate-600 dark:text-slate-300 font-medium text-sm transition-colors duration-300">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-slate-900 dark:bg-slate-800 text-white border-0 rounded-2xl transition-colors duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Métricas de Rendimiento</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">99.9%</div>
                  <div className="text-slate-300 font-semibold">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">{"<200ms"}</div>
                  <div className="text-slate-300 font-semibold">Latencia API</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">10K+</div>
                  <div className="text-slate-300 font-semibold">Req/segundo</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">24/7</div>
                  <div className="text-slate-300 font-semibold">Monitoreo</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

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
            className="bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20los%20detalles%20técnicos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consulta técnica especializada
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
