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
    name: "React",
    status: "Frontend",
    icon: "/tech-icons/react-logo.png",
  },
  {
    name: "Node.js",
    status: "Backend",
    icon: "/tech-icons/nodejs-logo.png",
  },
  {
    name: "PostgreSQL",
    status: "Database",
    icon: "/tech-icons/postgresql-logo.png",
  },
  {
    name: "Redis",
    status: "Cache",
    icon: "/tech-icons/redis-logo.png",
  },
  {
    name: "Vercel",
    status: "Deployment",
    icon: "/tech-icons/vercel-logo.svg",
  },
  {
    name: "Supabase",
    status: "Backend",
    icon: "/tech-icons/supabase-logo.svg",
  },
]

const integrationComponents = [
  {
    name: "WhatsApp Business",
    icon: "/tech-icons/whatsapp-logo.png",
  },
  {
    name: "Telegram",
    icon: "/tech-icons/telegram-logo.png",
  },
  {
    name: "Twilio",
    icon: "/tech-icons/twilio-logo.png",
  },
  {
    name: "Zapier",
    icon: "/tech-icons/zapier-logo.png",
  },
  {
    name: "n8n",
    icon: "/tech-icons/n8n-logo.png",
  },
  {
    name: "Meta",
    icon: "/tech-icons/meta-logo.png",
  },
  {
    name: "OpenAI",
    icon: "/tech-icons/openai-logo.png",
  },
  {
    name: "Intel AI",
    icon: "/tech-icons/intel-logo.png",
  },
]

export function TechnicalFeaturesSection() {
  return (
    <section
      id="technical-features"
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge className="mb-4 sm:mb-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm sm:text-lg px-4 sm:px-6 py-2 font-semibold transition-colors duration-300">
            <Code2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Arquitectura Técnica
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
            Tecnología{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              enterprise-grade
            </span>{" "}
            probada
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Infraestructura robusta, APIs modernas y arquitectura escalable diseñada para empresas que requieren máximo
            rendimiento y confiabilidad.
          </p>
        </motion.div>

        {/* Stack Tecnológico - Netflix-style Horizontal Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Stack Tecnológico Completo
            </h3>
          </div>

          <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 rounded-2xl py-8">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

            {/* Endless scrolling banner with performance optimizations */}
            <div className="flex animate-scroll" style={{ width: "max-content" }}>
              {/* First set */}
              {architectureComponents.map((component, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 text-center group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <img
                      src={component.icon || "/placeholder.svg"}
                      alt={component.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.src = "/placeholder.svg?height=64&width=64"
                      }}
                    />
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 mb-1 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {component.name}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300">
                    {component.status}
                  </div>
                </div>
              ))}

              {/* Second set for seamless loop */}
              {architectureComponents.map((component, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 text-center group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <img
                      src={component.icon || "/placeholder.svg"}
                      alt={component.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.src = "/placeholder.svg?height=64&width=64"
                      }}
                    />
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 mb-1 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {component.name}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300">
                    {component.status}
                  </div>
                </div>
              ))}

              {/* Third set for extra smoothness on larger screens */}
              {architectureComponents.map((component, index) => (
                <div key={`third-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 text-center group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <img
                      src={component.icon || "/placeholder.svg"}
                      alt={component.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.src = "/placeholder.svg?height=64&width=64"
                      }}
                    />
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 mb-1 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {component.name}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300">
                    {component.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Integrations Section - Netflix-style Horizontal Banner (Reverse Direction) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-sm px-4 py-2 font-medium">
              <Zap className="w-3 h-3 mr-2" />
              Integraciones
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Conecta con tu ecosistema digital
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Integración perfecta con las plataformas que ya utilizas
            </p>
          </div>

          <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 rounded-2xl py-8">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

            {/* Endless scrolling banner - reverse direction with performance optimizations */}
            <div className="flex animate-scroll-reverse" style={{ width: "max-content" }}>
              {/* First set */}
              {integrationComponents.map((integration, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 text-center group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <img
                      src={integration.icon || "/placeholder.svg"}
                      alt={integration.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.src = "/placeholder.svg?height=64&width=64"
                      }}
                    />
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {integration.name}
                  </div>
                </div>
              ))}

              {/* Second set for seamless loop */}
              {integrationComponents.map((integration, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 text-center group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <img
                      src={integration.icon || "/placeholder.svg"}
                      alt={integration.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.src = "/placeholder.svg?height=64&width=64"
                      }}
                    />
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {integration.name}
                  </div>
                </div>
              ))}

              {/* Third set for extra smoothness on larger screens */}
              {integrationComponents.map((integration, index) => (
                <div key={`third-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 text-center group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <img
                      src={integration.icon || "/placeholder.svg"}
                      alt={integration.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.src = "/placeholder.svg?height=64&width=64"
                      }}
                    />
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              + Más de 50 integraciones disponibles mediante APIs y webhooks
            </p>
          </motion.div>
        </motion.div>

        {/* Technical Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {technicalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 group h-full rounded-2xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 dark:bg-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 font-semibold transition-colors duration-300 text-xs sm:text-sm">
                      {feature.category}
                    </Badge>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5 transition-colors duration-300" />
                        <span className="text-slate-600 dark:text-slate-300 font-medium text-xs sm:text-sm transition-colors duration-300">
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
          className="mb-12 sm:mb-16"
        >
          <Card className="bg-slate-900 dark:bg-slate-800 text-white border-0 rounded-2xl transition-colors duration-300">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Métricas de Rendimiento</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2">99.9%</div>
                  <div className="text-slate-300 font-semibold text-xs sm:text-base">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2">{"<200ms"}</div>
                  <div className="text-slate-300 font-semibold text-xs sm:text-base">Latencia API</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2">10K+</div>
                  <div className="text-slate-300 font-semibold text-xs sm:text-base">Req/segundo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2">24/7</div>
                  <div className="text-slate-300 font-semibold text-xs sm:text-base">Monitoreo</div>
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
            className="bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl w-full sm:w-auto"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20los%20detalles%20técnicos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Consulta técnica especializada
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
