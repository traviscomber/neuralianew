"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, MessageSquare, Zap, Shield, Clock, Users } from "lucide-react"

export default function ServicesPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: Brain,
      title: language === "en" ? "Advanced AI Training" : "Entrenamiento Avanzado de IA",
      description:
        language === "en"
          ? "Custom training on your specific business data and processes"
          : "Entrenamiento personalizado en tus datos y procesos empresariales específicos",
    },
    {
      icon: MessageSquare,
      title: language === "en" ? "Natural Conversations" : "Conversaciones Naturales",
      description:
        language === "en"
          ? "Human-like interactions that understand context and intent"
          : "Interacciones similares a las humanas que entienden contexto e intención",
    },
    {
      icon: Zap,
      title: language === "en" ? "Real-time Processing" : "Procesamiento en Tiempo Real",
      description:
        language === "en"
          ? "Sub-200ms response times for instant customer satisfaction"
          : "Tiempos de respuesta sub-200ms para satisfacción instantánea del cliente",
    },
    {
      icon: Shield,
      title: language === "en" ? "Enterprise Security" : "Seguridad Empresarial",
      description:
        language === "en"
          ? "ISO 27001 certified with end-to-end encryption"
          : "Certificado ISO 27001 con cifrado de extremo a extremo",
    },
    {
      icon: Clock,
      title: language === "en" ? "24/7 Operation" : "Operación 24/7",
      description:
        language === "en"
          ? "Never miss a customer inquiry with round-the-clock availability"
          : "Nunca pierdas una consulta de cliente con disponibilidad las 24 horas",
    },
    {
      icon: Users,
      title: language === "en" ? "Multi-language Support" : "Soporte Multiidioma",
      description:
        language === "en"
          ? "Native Spanish and English with cultural adaptation"
          : "Español e inglés nativos con adaptación cultural",
    },
  ]

  const benefits = [
    {
      metric: "95%",
      label: language === "en" ? "Customer Satisfaction" : "Satisfacción del Cliente",
    },
    {
      metric: "70%",
      label: language === "en" ? "Cost Reduction" : "Reducción de Costos",
    },
    {
      metric: "24/7",
      label: language === "en" ? "Availability" : "Disponibilidad",
    },
    {
      metric: "200ms",
      label: language === "en" ? "Response Time" : "Tiempo de Respuesta",
    },
  ]

  const process = [
    {
      step: "01",
      title: language === "en" ? "Discovery & Analysis" : "Descubrimiento y Análisis",
      description:
        language === "en"
          ? "We analyze your business processes and identify automation opportunities"
          : "Analizamos tus procesos empresariales e identificamos oportunidades de automatización",
    },
    {
      step: "02",
      title: language === "en" ? "Custom Development" : "Desarrollo Personalizado",
      description:
        language === "en"
          ? "Our team develops AI agents tailored to your specific requirements"
          : "Nuestro equipo desarrolla agentes de IA adaptados a tus requisitos específicos",
    },
    {
      step: "03",
      title: language === "en" ? "Integration & Testing" : "Integración y Pruebas",
      description:
        language === "en"
          ? "Seamless integration with your existing systems and comprehensive testing"
          : "Integración perfecta con tus sistemas existentes y pruebas exhaustivas",
    },
    {
      step: "04",
      title: language === "en" ? "Launch & Support" : "Lanzamiento y Soporte",
      description:
        language === "en"
          ? "Go live with 24/7 monitoring and continuous optimization"
          : "Lanzamiento con monitoreo 24/7 y optimización continua",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="bg-white/10 text-white border-white/20 mb-6">
                {language === "en" ? "AI Agent Development" : "Desarrollo de Agentes de IA"}
              </Badge>

              <h1 className="text-6xl font-light text-white mb-6">
                {language === "en" ? "Intelligent AI Agents" : "Agentes de IA Inteligentes"}
                <br />
                <span className="font-bold">{language === "en" ? "For Your Business" : "Para Tu Negocio"}</span>
              </h1>

              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                {language === "en"
                  ? "Transform customer interactions with AI agents that understand your business, speak your language, and work around the clock to drive growth."
                  : "Transforma las interacciones con clientes mediante agentes de IA que entienden tu negocio, hablan tu idioma y trabajan las 24 horas para impulsar el crecimiento."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Start Your Project" : "Iniciar Tu Proyecto"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  {language === "en" ? "View Case Studies" : "Ver Casos de Estudio"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-light text-gray-900 mb-4">
                {language === "en" ? "Proven Results" : "Resultados Comprobados"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Our AI agents deliver measurable business impact"
                  : "Nuestros agentes de IA entregan impacto empresarial medible"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl font-light text-black mb-2">{benefit.metric}</div>
                  <div className="text-gray-600 font-light">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-light text-gray-900 mb-4">
                {language === "en" ? "Advanced Capabilities" : "Capacidades Avanzadas"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Enterprise-grade AI technology built for your success"
                  : "Tecnología de IA de nivel empresarial construida para tu éxito"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                        <feature.icon className="w-8 h-8 text-gray-700" />
                      </div>
                      <h3 className="text-2xl font-light text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-light text-gray-900 mb-4">
                {language === "en" ? "Our Process" : "Nuestro Proceso"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "From concept to deployment in 4 simple steps"
                  : "Del concepto al despliegue en 4 pasos simples"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-light text-white mb-6">
                {language === "en" ? "Ready to Transform" : "Listo para Transformar"}
                <br />
                <span className="font-bold">{language === "en" ? "Your Business?" : "Tu Negocio?"}</span>
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                {language === "en"
                  ? "Join 50+ companies that have revolutionized their operations with our AI agents"
                  : "Únete a 50+ empresas que han revolucionado sus operaciones con nuestros agentes de IA"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Get Started Today" : "Comenzar Hoy"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  {language === "en" ? "Schedule Consultation" : "Agendar Consulta"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
