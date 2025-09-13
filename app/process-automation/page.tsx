"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Clock, Target, Shield, BarChart3, Users } from "lucide-react"

export default function ProcessAutomationPage() {
  const { language } = useLanguage()

  const automationAreas = [
    {
      icon: Users,
      title: language === "en" ? "Customer Service" : "Atención al Cliente",
      description:
        language === "en"
          ? "Automate 80% of customer inquiries with intelligent routing and responses"
          : "Automatiza 80% de las consultas de clientes con enrutamiento y respuestas inteligentes",
      metrics: language === "en" ? "80% automation rate" : "80% tasa de automatización",
    },
    {
      icon: BarChart3,
      title: language === "en" ? "Data Processing" : "Procesamiento de Datos",
      description:
        language === "en"
          ? "Transform manual data entry into automated workflows with 99% accuracy"
          : "Transforma la entrada manual de datos en flujos automatizados con 99% de precisión",
      metrics: language === "en" ? "99% accuracy rate" : "99% tasa de precisión",
    },
    {
      icon: Target,
      title: language === "en" ? "Sales Operations" : "Operaciones de Ventas",
      description:
        language === "en"
          ? "Streamline lead qualification and follow-up processes automatically"
          : "Optimiza la calificación de leads y procesos de seguimiento automáticamente",
      metrics: language === "en" ? "60% faster processing" : "60% procesamiento más rápido",
    },
    {
      icon: Shield,
      title: language === "en" ? "Financial Processes" : "Procesos Financieros",
      description:
        language === "en"
          ? "Automate invoice processing, approvals, and compliance reporting"
          : "Automatiza procesamiento de facturas, aprobaciones y reportes de cumplimiento",
      metrics: language === "en" ? "90% error reduction" : "90% reducción de errores",
    },
  ]

  const benefits = [
    {
      metric: "70%",
      label: language === "en" ? "Time Reduction" : "Reducción de Tiempo",
    },
    {
      metric: "85%",
      label: language === "en" ? "Error Reduction" : "Reducción de Errores",
    },
    {
      metric: "300%",
      label: language === "en" ? "ROI Increase" : "Aumento de ROI",
    },
    {
      metric: "24/7",
      label: language === "en" ? "Operation" : "Operación",
    },
  ]

  const process = [
    {
      step: "01",
      title: language === "en" ? "Process Mapping" : "Mapeo de Procesos",
      description:
        language === "en"
          ? "Identify and document current workflows to find automation opportunities"
          : "Identificar y documentar flujos de trabajo actuales para encontrar oportunidades de automatización",
    },
    {
      step: "02",
      title: language === "en" ? "AI Agent Design" : "Diseño de Agente IA",
      description:
        language === "en"
          ? "Create specialized AI agents tailored to your specific business processes"
          : "Crear agentes de IA especializados adaptados a tus procesos empresariales específicos",
    },
    {
      step: "03",
      title: language === "en" ? "System Integration" : "Integración de Sistemas",
      description:
        language === "en"
          ? "Connect AI agents with your existing tools and databases seamlessly"
          : "Conectar agentes de IA con tus herramientas y bases de datos existentes sin problemas",
    },
    {
      step: "04",
      title: language === "en" ? "Optimization" : "Optimización",
      description:
        language === "en"
          ? "Continuously monitor and improve automation performance with AI learning"
          : "Monitorear y mejorar continuamente el rendimiento de automatización con aprendizaje de IA",
    },
  ]

  const features = [
    {
      icon: Zap,
      title: language === "en" ? "Intelligent Automation" : "Automatización Inteligente",
      description:
        language === "en"
          ? "AI-powered automation that learns and adapts to your business needs"
          : "Automatización potenciada por IA que aprende y se adapta a las necesidades de tu negocio",
    },
    {
      icon: Clock,
      title: language === "en" ? "Real-time Processing" : "Procesamiento en Tiempo Real",
      description:
        language === "en"
          ? "Process tasks instantly without delays or bottlenecks"
          : "Procesa tareas instantáneamente sin demoras o cuellos de botella",
    },
    {
      icon: Shield,
      title: language === "en" ? "Secure Operations" : "Operaciones Seguras",
      description:
        language === "en"
          ? "Enterprise-grade security with audit trails and compliance monitoring"
          : "Seguridad de nivel empresarial con pistas de auditoría y monitoreo de cumplimiento",
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
                {language === "en" ? "Process Automation" : "Automatización de Procesos"}
              </Badge>

              <h1 className="text-6xl font-light text-white mb-6">
                {language === "en" ? "Automate Everything" : "Automatiza Todo"}
                <br />
                <span className="font-bold">{language === "en" ? "With Intelligence" : "Con Inteligencia"}</span>
              </h1>

              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                {language === "en"
                  ? "Transform repetitive tasks into intelligent workflows. Our AI agents work 24/7 to streamline your operations, reduce errors, and free your team for strategic work."
                  : "Transforma tareas repetitivas en flujos de trabajo inteligentes. Nuestros agentes de IA trabajan 24/7 para optimizar tus operaciones, reducir errores y liberar a tu equipo para trabajo estratégico."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Start Automation" : "Iniciar Automatización"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  {language === "en" ? "See Demo" : "Ver Demo"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Metrics */}
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
                {language === "en" ? "Measurable Impact" : "Impacto Medible"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Real results from process automation implementation"
                  : "Resultados reales de la implementación de automatización de procesos"}
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

        {/* Automation Areas */}
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
                {language === "en" ? "Automation Areas" : "Áreas de Automatización"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Key business processes we help automate with AI"
                  : "Procesos empresariales clave que ayudamos a automatizar con IA"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {automationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                          <area.icon className="w-8 h-8 text-gray-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-light text-gray-900 mb-2">{area.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {area.metrics}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed">{area.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                {language === "en" ? "Smart Features" : "Características Inteligentes"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Advanced capabilities that make automation truly intelligent"
                  : "Capacidades avanzadas que hacen que la automatización sea verdaderamente inteligente"}
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
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                {language === "en" ? "Implementation Process" : "Proceso de Implementación"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "How we transform your processes with intelligent automation"
                  : "Cómo transformamos tus procesos con automatización inteligente"}
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
                {language === "en" ? "Ready to Automate" : "Listo para Automatizar"}
                <br />
                <span className="font-bold">{language === "en" ? "Your Processes?" : "Tus Procesos?"}</span>
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                {language === "en"
                  ? "Join companies saving 70% of their time with intelligent process automation"
                  : "Únete a empresas que ahorran 70% de su tiempo con automatización inteligente de procesos"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Start Automation" : "Iniciar Automatización"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  {language === "en" ? "Schedule Demo" : "Agendar Demo"}
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
