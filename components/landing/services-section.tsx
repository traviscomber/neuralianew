"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Zap, Shield, ArrowRight, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useRouter } from "next/navigation"

const services = [
  {
    id: "ai-agent-development",
    icon: Bot,
    title: {
      en: "AI Agent Development",
      es: "Desarrollo de Agentes de IA",
    },
    description: {
      en: "Custom conversational agents designed for your specific business needs",
      es: "Agentes conversacionales personalizados diseñados para las necesidades específicas de tu negocio",
    },
    features: {
      en: ["Custom AI personalities", "Multi-language support", "24/7 operation", "Scalable architecture"],
      es: ["Personalidades IA personalizadas", "Soporte multi-idioma", "Operación 24/7", "Arquitectura escalable"],
    },
    metrics: {
      satisfaction: "95%",
      responseTime: "<2s",
      availability: "99.9%",
      languages: "15+",
    },
    cta: {
      en: "Explore AI Agents",
      es: "Explorar Agentes IA",
    },
  },
  {
    id: "process-automation",
    icon: Zap,
    title: {
      en: "Process Automation",
      es: "Automatización de Procesos",
    },
    description: {
      en: "Streamline your workflows with intelligent automation solutions",
      es: "Optimiza tus flujos de trabajo con soluciones de automatización inteligente",
    },
    features: {
      en: ["Workflow optimization", "Task automation", "Error reduction", "Performance analytics"],
      es: ["Optimización de flujos", "Automatización de tareas", "Reducción de errores", "Análisis de rendimiento"],
    },
    metrics: {
      timeReduction: "70%",
      errorReduction: "85%",
      efficiency: "3x",
      roi: "250%",
    },
    cta: {
      en: "Automate Processes",
      es: "Automatizar Procesos",
    },
  },
  {
    id: "enterprise-integration",
    icon: Shield,
    title: {
      en: "Enterprise Integration",
      es: "Integración Empresarial",
    },
    description: {
      en: "Seamlessly integrate AI solutions with your existing enterprise systems",
      es: "Integra sin problemas las soluciones de IA con tus sistemas empresariales existentes",
    },
    features: {
      en: ["CRM/ERP integration", "Data security", "Compliance standards", "Enterprise support"],
      es: ["Integración CRM/ERP", "Seguridad de datos", "Estándares de cumplimiento", "Soporte empresarial"],
    },
    metrics: {
      uptime: "99.9%",
      security: "ISO 27001",
      integration: "48h",
      support: "24/7",
    },
    cta: {
      en: "Enterprise Solutions",
      es: "Soluciones Empresariales",
    },
  },
]

export function ServicesSection() {
  const { language } = useLanguage()
  const router = useRouter()

  const handleServiceClick = (serviceId: string) => {
    router.push(`/${serviceId}`)
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            {language === "en" ? "Our Services" : "Nuestros Servicios"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-6">
            {language === "en" ? "AI-Powered" : "Soluciones"}
            <span className="font-bold block">{language === "en" ? "Solutions" : "Potenciadas por IA"}</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto">
            {language === "en"
              ? "Comprehensive AI solutions designed to transform your business operations and enhance customer experiences across all touchpoints."
              : "Soluciones integrales de IA diseñadas para transformar las operaciones de tu negocio y mejorar las experiencias del cliente en todos los puntos de contacto."}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <div className="relative preserve-3d group-hover:rotate-y-180 transition-transform duration-700">
                {/* Front Card */}
                <Card className="absolute inset-0 backface-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-black mb-2">{service.title[language]}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed font-light flex-1">
                      {service.description[language]}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features[language].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <span className="text-sm text-gray-500 font-medium">
                        {language === "en" ? "Hover for metrics" : "Hover para métricas"}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Back Card */}
                <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-black text-white border-0 cursor-pointer">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-xl font-bold">{service.title[language]}</h3>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {Object.entries(service.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-white mb-1">{value}</div>
                            <div className="text-xs text-gray-300 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => handleServiceClick(service.id)}
                      className="w-full bg-white text-black hover:bg-gray-100 font-semibold"
                    >
                      {service.cta[language]}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8 font-light">
            {language === "en"
              ? "Ready to transform your business with AI? Let's discuss your specific needs."
              : "¿Listo para transformar tu negocio con IA? Hablemos de tus necesidades específicas."}
          </p>
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 rounded-xl"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20necesito%20información%20sobre%20sus%20servicios%20de%20IA"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === "en" ? "Get Started Today" : "Comenzar Hoy"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
