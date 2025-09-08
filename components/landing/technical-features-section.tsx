"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Database, Cloud, Cpu, Lock, Monitor, ArrowRight, CheckCircle, MessageCircle, Zap } from "lucide-react"

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
  {
    name: "Frontend React/Next.js",
    status: "Optimizado",
    icon: "/tech-icons/react-logo.png",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Backend Node.js/Python",
    status: "Escalable",
    icon: "/tech-icons/nodejs-logo.png",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    name: "Base de Datos PostgreSQL",
    status: "Alta Disponibilidad",
    icon: "/tech-icons/postgresql-logo.png",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    name: "Cache Redis",
    status: "Sub-segundo",
    icon: "/tech-icons/redis-logo.png",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
  {
    name: "Deployment Vercel",
    status: "Edge Network",
    icon: "/tech-icons/vercel-logo.svg",
    bgColor: "bg-slate-50 dark:bg-slate-900/20",
  },
  {
    name: "Database Supabase",
    status: "Real-time",
    icon: "/tech-icons/supabase-logo.svg",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
  },
]

const integrationComponents = [
  {
    name: "WhatsApp Business",
    status: "Mensajería",
    icon: "/tech-icons/whatsapp-bw.jpg",
    bgColor: "bg-slate-50 dark:bg-slate-800/50",
    description: "Integración nativa con WhatsApp Business API",
  },
  {
    name: "Telegram Bot",
    status: "Chat Bot",
    icon: "/tech-icons/telegram-bw.jpg",
    bgColor: "bg-slate-50 dark:bg-slate-800/50",
    description: "Bots inteligentes para Telegram",
  },
  {
    name: "Twilio SMS",
    status: "Comunicaciones",
    icon: "/tech-icons/twilio-bw.jpg",
    bgColor: "bg-slate-50 dark:bg-slate-800/50",
    description: "SMS y llamadas programáticas",
  },
  {
    name: "Zapier Connect",
    status: "Automatización",
    icon: "/tech-icons/zapier-bw.jpg",
    bgColor: "bg-slate-50 dark:bg-slate-800/50",
    description: "Conecta con 5000+ aplicaciones",
  },
  {
    name: "n8n Workflows",
    status: "Flujos de Trabajo",
    icon: "/tech-icons/n8n-bw.jpg",
    bgColor: "bg-slate-50 dark:bg-slate-800/50",
    description: "Automatización avanzada de procesos",
  },
  {
    name: "Meta Platforms",
    status: "Social Media",
    icon: "/tech-icons/meta-bw.jpg",
    bgColor: "bg-slate-50 dark:bg-slate-800/50",
    description: "Facebook, Instagram, Messenger",
  },
  {
    name: "OpenAI GPT-4",
    status: "IA Generativa",
    icon: "/tech-icons/openai-bw.jpg",
    bgColor: "bg-slate-50 dark:bg-slate-800/50",
    description: "Modelos de lenguaje avanzados",
  },
  {
    name: "Intel AI",
    status: "Procesamiento",
    icon: "/tech-icons/intel-bw.jpg",
    bgColor: "bg-slate-50 dark:bg-slate-800/50",
    description: "Optimización de hardware IA",
  },
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
                    <div
                      className={`w-16 h-16 ${component.bgColor} rounded-xl mx-auto mb-3 flex items-center justify-center p-2 transition-colors duration-300 hover:scale-105 transform`}
                    >
                      <img
                        src={component.icon || "/placeholder.svg"}
                        alt={component.name}
                        className="w-10 h-10 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement
                          target.src = "/placeholder.svg?height=40&width=40"
                        }}
                      />
                    </div>
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

        {/* Integrations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 text-lg px-6 py-2 font-semibold transition-colors duration-300">
              <Zap className="w-4 h-4 mr-2" />
              Integraciones Nativas
            </Badge>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 transition-colors duration-300">
              Conecta con tu{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                ecosistema digital
              </span>
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-300">
              Integración perfecta con las plataformas y herramientas que ya utilizas. Sin configuraciones complejas,
              sin interrupciones.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {integrationComponents.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 rounded-xl">
                  <CardContent className="p-4 text-center">
                    <div
                      className={`w-12 h-12 ${integration.bgColor} rounded-lg mx-auto mb-3 flex items-center justify-center p-2 transition-all duration-300 group-hover:scale-110`}
                    >
                      <img
                        src={integration.icon || "/placeholder.svg"}
                        alt={integration.name}
                        className="w-8 h-8 object-contain opacity-70 dark:opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement
                          target.src = "/placeholder.svg?height=32&width=32"
                        }}
                      />
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">
                      {integration.name}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300">
                      {integration.status}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300">
              + Más de 50 integraciones disponibles mediante APIs y webhooks
            </p>
          </motion.div>
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
