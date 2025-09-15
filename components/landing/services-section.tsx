"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Brain, Cog, Zap, ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Our Services",
      title: "Comprehensive AI Solutions",
      subtitle:
        "From custom AI development to enterprise integration, we provide end-to-end solutions for your business needs.",
      services: [
        {
          icon: Brain,
          title: "AI Agent Development",
          description: "Custom AI agents trained on your business data and processes for maximum efficiency.",
          features: [
            "Custom training on your data",
            "Natural language processing",
            "Multi-language support",
            "24/7 operation capability",
          ],
          link: "/ai-agent-development",
          badge: "Most Popular",
        },
        {
          icon: Cog,
          title: "Process Automation",
          description: "Streamline your operations with intelligent automation that learns and adapts.",
          features: [
            "Workflow optimization",
            "Intelligent decision making",
            "Integration with existing systems",
            "Real-time monitoring",
          ],
          link: "/process-automation",
          badge: "Enterprise",
        },
        {
          icon: Zap,
          title: "Enterprise Integration",
          description: "Seamlessly integrate AI capabilities into your existing business infrastructure.",
          features: ["API development", "System integration", "Security compliance", "Scalable architecture"],
          link: "/enterprise-integration",
          badge: "Custom",
        },
      ],
    },
    es: {
      badge: "Nuestros Servicios",
      title: "Soluciones Integrales de IA",
      subtitle:
        "Desde desarrollo personalizado de IA hasta integración empresarial, proporcionamos soluciones completas para las necesidades de tu negocio.",
      services: [
        {
          icon: Brain,
          title: "Desarrollo de Agentes de IA",
          description:
            "Agentes de IA personalizados entrenados con los datos y procesos de tu negocio para máxima eficiencia.",
          features: [
            "Entrenamiento personalizado con tus datos",
            "Procesamiento de lenguaje natural",
            "Soporte multiidioma",
            "Capacidad de operación 24/7",
          ],
          link: "/ai-agent-development",
          badge: "Más Popular",
        },
        {
          icon: Cog,
          title: "Automatización de Procesos",
          description: "Optimiza tus operaciones con automatización inteligente que aprende y se adapta.",
          features: [
            "Optimización de flujos de trabajo",
            "Toma de decisiones inteligente",
            "Integración con sistemas existentes",
            "Monitoreo en tiempo real",
          ],
          link: "/process-automation",
          badge: "Empresarial",
        },
        {
          icon: Zap,
          title: "Integración Empresarial",
          description: "Integra sin problemas las capacidades de IA en tu infraestructura empresarial existente.",
          features: [
            "Desarrollo de APIs",
            "Integración de sistemas",
            "Cumplimiento de seguridad",
            "Arquitectura escalable",
          ],
          link: "/enterprise-integration",
          badge: "Personalizado",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-gray-100 text-gray-700 border-0 mb-6">{t.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6">{t.title}</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">{t.subtitle}</p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    {/* Badge */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                        <service.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <Badge className="bg-black text-white text-xs">{service.badge}</Badge>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-light text-gray-900 mb-4">{service.title}</h3>

                    <p className="text-gray-600 font-light mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <Link href={service.link}>
                        {language === "en" ? "Learn More" : "Saber Más"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 font-light mb-6">
              {language === "en"
                ? "Need a custom solution? Let's discuss your specific requirements."
                : "¿Necesitas una solución personalizada? Hablemos sobre tus requisitos específicos."}
            </p>
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-semibold" asChild>
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20una%20consulta%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                {language === "en" ? "Get Custom Quote" : "Obtener Cotización Personalizada"}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
