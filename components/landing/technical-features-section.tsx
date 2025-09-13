"use client"

import type React from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Database, Cloud, Cpu, Lock, Monitor, ArrowRight, CheckCircle, MessageCircle } from "lucide-react"
import { logoPerformanceMonitor } from "@/lib/logo-performance-monitor"
import { useLanguage } from "@/lib/language-context"

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
    fallback: "/placeholder.svg?height=64&width=64&text=React",
  },
  {
    name: "Node.js",
    status: "Backend",
    icon: "/tech-icons/nodejs-logo.png",
    fallback: "/placeholder.svg?height=64&width=64&text=Node",
  },
  {
    name: "PostgreSQL",
    status: "Database",
    icon: "/tech-icons/postgresql-logo.png",
    fallback: "/placeholder.svg?height=64&width=64&text=PostgreSQL",
  },
  {
    name: "Redis",
    status: "Cache",
    icon: "/tech-icons/redis-logo.png",
    fallback: "/placeholder.svg?height=64&width=64&text=Redis",
  },
  {
    name: "Vercel",
    status: "Deployment",
    icon: "/tech-icons/vercel-logo.svg",
    fallback: "/placeholder.svg?height=64&width=64&text=Vercel",
  },
  {
    name: "Supabase",
    status: "Backend",
    icon: "/tech-icons/supabase-logo.svg",
    fallback: "/placeholder.svg?height=64&width=64&text=Supabase",
  },
]

const integrationComponents = [
  {
    name: "WhatsApp Business",
    icon: "/tech-icons/whatsapp-logo.png",
    fallback: "/placeholder.svg?height=64&width=64&text=WhatsApp",
  },
  {
    name: "Telegram",
    icon: "/tech-icons/telegram-logo.png",
    fallback: "/placeholder.svg?height=64&width=64&text=Telegram",
  },
  {
    name: "Zapier",
    icon: "/tech-icons/zapier-logo.png",
    fallback: "/placeholder.svg?height=64&width=64&text=Zapier",
  },
  {
    name: "Meta",
    icon: "/tech-icons/meta-logo.png",
    fallback: "/placeholder.svg?height=64&width=64&text=Meta",
  },
  {
    name: "OpenAI",
    icon: "/tech-icons/openai-logo.png",
    fallback: "/placeholder.svg?height=64&width=64&text=OpenAI",
  },
  {
    name: "Intel AI",
    icon: "/tech-icons/intel-logo.png",
    fallback: "/placeholder.svg?height=64&width=64&text=Intel",
  },
]

export function TechnicalFeaturesSection() {
  const { language } = useLanguage()

  useEffect(() => {
    logoPerformanceMonitor.startMonitoring()
    return () => {
      // Optional: Stop monitoring when component unmounts
    }
  }, [])

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallback: string, logoName: string) => {
    const target = e.currentTarget as HTMLImageElement
    const startTime = performance.now()

    if (target.src !== fallback) {
      logoPerformanceMonitor.recordLogoLoad(logoName, target.src, fallback, startTime, false, "primary_failed")
      target.src = fallback
    } else {
      logoPerformanceMonitor.recordLogoLoad(logoName, fallback, undefined, startTime, false, "fallback_failed")
      // Use a simple placeholder as final fallback
      target.style.display = "none"
      const placeholder = document.createElement("div")
      placeholder.className =
        "w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-semibold text-gray-600"
      placeholder.textContent = logoName.substring(0, 3).toUpperCase()
      target.parentNode?.replaceChild(placeholder, target)
    }
  }

  const handleImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement>,
    logoName: string,
    primaryUrl: string,
    fallbackUrl: string,
  ) => {
    const target = e.currentTarget as HTMLImageElement
    const loadTime = performance.now() - (target.dataset.startTime ? Number.parseFloat(target.dataset.startTime) : 0)

    const usedFallback = target.src === fallbackUrl
    logoPerformanceMonitor.recordLogoLoad(
      logoName,
      primaryUrl,
      fallbackUrl,
      performance.now() - loadTime,
      true,
      usedFallback ? "fallback_used" : undefined,
    )
  }

  const createImageProps = (component: { name: string; icon: string; fallback: string }) => ({
    src: component.icon,
    alt: component.name,
    className:
      "w-12 h-12 sm:w-16 sm:h-16 object-contain filter grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300",
    loading: "lazy" as const,
    decoding: "async" as const,
    "data-start-time": performance.now().toString(),
    onLoad: (e: React.SyntheticEvent<HTMLImageElement>) =>
      handleImageLoad(e, component.name, component.icon, component.fallback),
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => handleImageError(e, component.fallback, component.name),
  })

  return (
    <section id="technical-features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            <Code2 className="w-5 h-5 mr-2" />
            {language === "en" ? "Technical Architecture" : "Arquitectura Técnica"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-6">
            {language === "en" ? "Enterprise-grade" : "Tecnología"}
            <br />
            <span className="font-bold">{language === "en" ? "Technology" : "enterprise-grade"}</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {language === "en"
              ? "Robust infrastructure, modern APIs and scalable architecture designed for companies that require maximum performance and reliability."
              : "Infraestructura robusta, APIs modernas y arquitectura escalable diseñada para empresas que requieren máximo rendimiento y confiabilidad."}
          </p>
        </motion.div>

        {/* Tech Stack Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              {language === "en" ? "Complete Technology Stack" : "Stack Tecnológico Completo"}
            </h3>
          </div>

          <div className="relative overflow-hidden bg-gray-50 rounded-2xl py-8">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll" style={{ width: "max-content" }}>
              {[...architectureComponents, ...architectureComponents, ...architectureComponents].map(
                (component, index) => (
                  <div key={`arch-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 text-center group cursor-pointer">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <img {...createImageProps(component)} />
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-gray-700 mb-1 group-hover:text-black transition-colors duration-300">
                      {component.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {component.status}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Integrations Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <Badge className="bg-gray-100 text-gray-700 border-0 text-sm px-4 py-2 font-medium mb-4">
              {language === "en" ? "Integrations" : "Integraciones"}
            </Badge>
            <h3 className="text-2xl font-bold text-black mb-4">
              {language === "en" ? "Connect with your digital ecosystem" : "Conecta con tu ecosistema digital"}
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-light">
              {language === "en"
                ? "Perfect integration with the platforms you already use"
                : "Integración perfecta con las plataformas que ya utilizas"}
            </p>
          </div>

          <div className="relative overflow-hidden bg-gray-50 rounded-2xl py-8">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll-reverse" style={{ width: "max-content" }}>
              {[...integrationComponents, ...integrationComponents, ...integrationComponents].map(
                (integration, index) => (
                  <div key={`int-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 text-center group cursor-pointer">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <img {...createImageProps(integration)} />
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-gray-700 group-hover:text-black transition-colors duration-300">
                      {integration.name}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <p className="text-sm text-gray-500 font-medium">
              {language === "en"
                ? "+ More than 50 integrations available via APIs and webhooks"
                : "+ Más de 50 integraciones disponibles mediante APIs y webhooks"}
            </p>
          </motion.div>
        </motion.div>

        {/* Technical Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technicalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group h-full rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge className="bg-white text-gray-700 border border-gray-200 font-semibold text-xs">
                      {feature.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 font-light">{feature.description}</p>

                  <div className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-medium text-sm">{detail}</span>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-black text-white border-0 rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">
                {language === "en" ? "Performance Metrics" : "Métricas de Rendimiento"}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-gray-300 font-semibold text-base">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{"<200ms"}</div>
                  <div className="text-gray-300 font-semibold text-base">
                    {language === "en" ? "API Latency" : "Latencia API"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10K+</div>
                  <div className="text-gray-300 font-semibold text-base">
                    {language === "en" ? "Req/second" : "Req/segundo"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-gray-300 font-semibold text-base">
                    {language === "en" ? "Monitoring" : "Monitoreo"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20los%20detalles%20técnicos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {language === "en" ? "Technical Consultation" : "Consulta técnica especializada"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
