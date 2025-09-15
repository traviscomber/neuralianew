"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { FaqSection } from "@/components/landing/faq-section"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Workflow, Clock, Target, BarChart3, Shield, RefreshCw, CheckCircle, ArrowRight } from "lucide-react"

export default function ProcessAutomationPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: Workflow,
      title: language === "en" ? "Intelligent Workflows" : "Flujos de Trabajo Inteligentes",
      description:
        language === "en"
          ? "Automate complex business processes with AI-driven decision making and adaptive workflows"
          : "Automatiza procesos empresariales complejos con toma de decisiones impulsada por IA y flujos de trabajo adaptativos",
    },
    {
      icon: Clock,
      title: language === "en" ? "24/7 Operations" : "Operaciones 24/7",
      description:
        language === "en"
          ? "Continuous process execution without human intervention, ensuring round-the-clock productivity"
          : "Ejecución continua de procesos sin intervención humana, asegurando productividad las 24 horas",
    },
    {
      icon: Target,
      title: language === "en" ? "Precision Automation" : "Automatización de Precisión",
      description:
        language === "en"
          ? "99.9% accuracy in process execution with intelligent error handling and recovery"
          : "99.9% de precisión en la ejecución de procesos con manejo inteligente de errores y recuperación",
    },
    {
      icon: BarChart3,
      title: language === "en" ? "Performance Analytics" : "Análisis de Rendimiento",
      description:
        language === "en"
          ? "Real-time monitoring and analytics to optimize process performance and identify bottlenecks"
          : "Monitoreo y análisis en tiempo real para optimizar el rendimiento de procesos e identificar cuellos de botella",
    },
    {
      icon: RefreshCw,
      title: language === "en" ? "Adaptive Learning" : "Aprendizaje Adaptativo",
      description:
        language === "en"
          ? "Processes that learn and improve over time, adapting to changing business requirements"
          : "Procesos que aprenden y mejoran con el tiempo, adaptándose a los requisitos empresariales cambiantes",
    },
    {
      icon: Shield,
      title: language === "en" ? "Secure Processing" : "Procesamiento Seguro",
      description:
        language === "en"
          ? "Enterprise-grade security with audit trails, compliance monitoring, and data protection"
          : "Seguridad de nivel empresarial con pistas de auditoría, monitoreo de cumplimiento y protección de datos",
    },
  ]

  const automationAreas = [
    {
      title: language === "en" ? "Document Processing" : "Procesamiento de Documentos",
      description:
        language === "en"
          ? "Intelligent extraction, classification, and processing of documents with OCR and NLP"
          : "Extracción, clasificación y procesamiento inteligente de documentos con OCR y PLN",
      benefits: ["90% faster processing", "99% accuracy", "Zero manual errors"],
      icon: CheckCircle,
    },
    {
      title: language === "en" ? "Data Integration" : "Integración de Datos",
      description:
        language === "en"
          ? "Seamless data flow between systems with real-time synchronization and validation"
          : "Flujo de datos sin problemas entre sistemas con sincronización y validación en tiempo real",
      benefits: ["Real-time sync", "Data validation", "Error prevention"],
      icon: ArrowRight,
    },
    {
      title: language === "en" ? "Customer Onboarding" : "Incorporación de Clientes",
      description:
        language === "en"
          ? "Automated customer verification, document collection, and account setup processes"
          : "Verificación automatizada de clientes, recopilación de documentos y procesos de configuración de cuentas",
      benefits: ["75% faster onboarding", "Improved experience", "Compliance assured"],
      icon: Target,
    },
    {
      title: language === "en" ? "Financial Operations" : "Operaciones Financieras",
      description:
        language === "en"
          ? "Automated invoicing, payment processing, and financial reporting with audit trails"
          : "Facturación automatizada, procesamiento de pagos e informes financieros con pistas de auditoría",
      benefits: ["Reduced errors", "Faster processing", "Audit compliance"],
      icon: BarChart3,
    },
  ]

  const benefits = [
    {
      metric: "80%",
      label: language === "en" ? "Time Reduction" : "Reducción de Tiempo",
    },
    {
      metric: "99.9%",
      label: language === "en" ? "Accuracy Rate" : "Tasa de Precisión",
    },
    {
      metric: "60%",
      label: language === "en" ? "Cost Savings" : "Ahorro de Costos",
    },
    {
      metric: "24/7",
      label: language === "en" ? "Operation" : "Operación",
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
                {language === "en" ? "Intelligent Process" : "Automatización de Procesos"}
                <br />
                <span className="font-bold">{language === "en" ? "Automation" : "Inteligente"}</span>
              </h1>

              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                {language === "en"
                  ? "Transform your business operations with AI-powered automation that learns, adapts, and optimizes your processes for maximum efficiency and accuracy."
                  : "Transforma tus operaciones empresariales con automatización impulsada por IA que aprende, se adapta y optimiza tus procesos para máxima eficiencia y precisión."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Automate Now" : "Automatizar Ahora"}
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
                {language === "en" ? "Measurable Impact" : "Impacto Medible"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Real results from intelligent process automation"
                  : "Resultados reales de la automatización inteligente de procesos"}
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
                {language === "en" ? "Advanced Automation Features" : "Características de Automatización Avanzada"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Enterprise-grade automation technology for complex business processes"
                  : "Tecnología de automatización de nivel empresarial para procesos empresariales complejos"}
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

        {/* Automation Areas Section */}
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
                {language === "en" ? "Automation Solutions" : "Soluciones de Automatización"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Comprehensive automation across all business functions"
                  : "Automatización integral en todas las funciones empresariales"}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {automationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                          <area.icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h3 className="text-2xl font-light text-gray-900">{area.title}</h3>
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed mb-6">{area.description}</p>
                      <div className="space-y-2">
                        {area.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

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
                  ? "Transform your operations with intelligent automation that works 24/7"
                  : "Transforma tus operaciones con automatización inteligente que funciona 24/7"}
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
                  {language === "en" ? "Book Consultation" : "Reservar Consulta"}
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
