"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Brain, MessageSquare, Zap, ArrowRight, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const { language } = useLanguage()

  const services = [
    {
      id: "ai-agents",
      icon: Bot,
      title: language === "en" ? "AI Agents" : "Agentes IA",
      description:
        language === "en"
          ? "Intelligent conversational agents that understand context and deliver precise responses"
          : "Agentes conversacionales inteligentes que entienden contexto y entregan respuestas precisas",
      features: [
        language === "en" ? "Natural Language Processing" : "Procesamiento de Lenguaje Natural",
        language === "en" ? "Multi-platform Integration" : "Integración Multiplataforma",
        language === "en" ? "24/7 Availability" : "Disponibilidad 24/7",
      ],
      metrics: {
        accuracy: "95%",
        response: "< 2s",
        uptime: "99.9%",
      },
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: "ml-systems",
      icon: Brain,
      title: language === "en" ? "ML Systems" : "Sistemas ML",
      description:
        language === "en"
          ? "Advanced machine learning systems that learn and adapt to your business needs"
          : "Sistemas avanzados de machine learning que aprenden y se adaptan a tus necesidades",
      features: [
        language === "en" ? "Predictive Analytics" : "Analytics Predictivos",
        language === "en" ? "Real-time Learning" : "Aprendizaje en Tiempo Real",
        language === "en" ? "Custom Models" : "Modelos Personalizados",
      ],
      metrics: {
        accuracy: "92%",
        processing: "Real-time",
        models: "50+",
      },
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: "chat-platforms",
      icon: MessageSquare,
      title: language === "en" ? "Chat Platforms" : "Plataformas Chat",
      description:
        language === "en"
          ? "Complete conversational platforms with advanced AI integration and analytics"
          : "Plataformas conversacionales completas con integración IA avanzada y analytics",
      features: [
        language === "en" ? "WhatsApp Business API" : "WhatsApp Business API",
        language === "en" ? "Multi-channel Support" : "Soporte Multicanal",
        language === "en" ? "Advanced Analytics" : "Analytics Avanzados",
      ],
      metrics: {
        channels: "10+",
        messages: "1M+/day",
        satisfaction: "94%",
      },
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "automation",
      icon: Zap,
      title: language === "en" ? "Automation" : "Automatización",
      description:
        language === "en"
          ? "Intelligent process automation that streamlines operations and reduces costs"
          : "Automatización inteligente de procesos que optimiza operaciones y reduce costos",
      features: [
        language === "en" ? "Workflow Automation" : "Automatización de Flujos",
        language === "en" ? "API Integrations" : "Integraciones API",
        language === "en" ? "Smart Triggers" : "Triggers Inteligentes",
      ],
      metrics: {
        efficiency: "85%",
        cost_reduction: "60%",
        processes: "100+",
      },
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-black text-white border-0 text-sm px-6 py-2 rounded-full">
            {language === "en" ? "Our Solutions" : "Nuestras Soluciones"}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
            {language === "en" ? "AI-Powered Services" : "Servicios Potenciados por IA"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Transform your business with our comprehensive AI solutions designed for real-world impact"
              : "Transforma tu negocio con nuestras soluciones IA integrales diseñadas para impacto real"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group"
            >
              <Card className="h-full bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Gradient Background on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === service.id ? 0.1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl`}
                  />

                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: hoveredCard === service.id ? 1.1 : 1,
                      rotate: hoveredCard === service.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 ${
                      hoveredCard === service.id ? `bg-gradient-to-br ${service.gradient}` : "bg-gray-100"
                    } transition-all duration-300`}
                  >
                    <service.icon
                      className={`w-8 h-8 ${
                        hoveredCard === service.id ? "text-white" : "text-black"
                      } transition-colors duration-300`}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Metrics */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: hoveredCard === service.id ? 1 : 0, y: hoveredCard === service.id ? 0 : 10 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-3 gap-2 mb-6"
                    >
                      {Object.entries(service.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-black">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace("_", " ")}</div>
                        </div>
                      ))}
                    </motion.div>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full border-2 font-medium transition-all duration-300 ${
                        hoveredCard === service.id
                          ? `border-transparent bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg`
                          : "border-gray-300 text-black hover:border-black"
                      }`}
                    >
                      {language === "en" ? "Learn More" : "Saber Más"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              {language === "en" ? "Ready to Transform Your Business?" : "¿Listo para Transformar tu Negocio?"}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {language === "en"
                ? "Join 50+ companies that have already revolutionized their operations with our AI solutions"
                : "Únete a 50+ empresas que ya han revolucionado sus operaciones con nuestras soluciones IA"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-xl"
                onClick={() => window.open("https://wa.me/56940946660", "_blank")}
              >
                {language === "en" ? "Start Your Project" : "Iniciar tu Proyecto"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl bg-transparent"
              >
                {language === "en" ? "View Case Studies" : "Ver Casos de Estudio"}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
