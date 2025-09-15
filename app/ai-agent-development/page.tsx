"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { FaqSection } from "@/components/landing/faq-section"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, MessageSquare, Shield, Code, Database, Cpu } from "lucide-react"

export default function AIAgentDevelopmentPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: Brain,
      title: language === "en" ? "Custom AI Training" : "Entrenamiento de IA Personalizado",
      description:
        language === "en"
          ? "Train AI agents on your specific business data, processes, and industry knowledge"
          : "Entrena agentes de IA con tus datos empresariales específicos, procesos y conocimiento de la industria",
    },
    {
      icon: MessageSquare,
      title: language === "en" ? "Natural Language Processing" : "Procesamiento de Lenguaje Natural",
      description:
        language === "en"
          ? "Advanced NLP capabilities for understanding context, intent, and nuanced conversations"
          : "Capacidades avanzadas de PLN para entender contexto, intención y conversaciones matizadas",
    },
    {
      icon: Code,
      title: language === "en" ? "API Integration" : "Integración de APIs",
      description:
        language === "en"
          ? "Seamless integration with your existing systems, CRMs, and business tools"
          : "Integración perfecta con tus sistemas existentes, CRMs y herramientas empresariales",
    },
    {
      icon: Database,
      title: language === "en" ? "Knowledge Management" : "Gestión del Conocimiento",
      description:
        language === "en"
          ? "Intelligent knowledge base management with real-time learning capabilities"
          : "Gestión inteligente de base de conocimientos con capacidades de aprendizaje en tiempo real",
    },
    {
      icon: Cpu,
      title: language === "en" ? "Multi-Model Architecture" : "Arquitectura Multi-Modelo",
      description:
        language === "en"
          ? "Leverage multiple AI models for optimal performance across different tasks"
          : "Aprovecha múltiples modelos de IA para rendimiento óptimo en diferentes tareas",
    },
    {
      icon: Shield,
      title: language === "en" ? "Enterprise Security" : "Seguridad Empresarial",
      description:
        language === "en"
          ? "Bank-level security with encryption, compliance, and data protection"
          : "Seguridad de nivel bancario con cifrado, cumplimiento y protección de datos",
    },
  ]

  const useCases = [
    {
      title: language === "en" ? "Customer Support" : "Soporte al Cliente",
      description:
        language === "en"
          ? "24/7 intelligent customer service with escalation to human agents when needed"
          : "Servicio al cliente inteligente 24/7 con escalación a agentes humanos cuando sea necesario",
      metrics: ["95% satisfaction", "60% cost reduction", "24/7 availability"],
    },
    {
      title: language === "en" ? "Sales Assistant" : "Asistente de Ventas",
      description:
        language === "en"
          ? "Lead qualification, product recommendations, and sales process automation"
          : "Calificación de leads, recomendaciones de productos y automatización del proceso de ventas",
      metrics: ["40% more leads", "25% higher conversion", "50% faster response"],
    },
    {
      title: language === "en" ? "Internal Operations" : "Operaciones Internas",
      description:
        language === "en"
          ? "Automate internal processes, employee queries, and workflow management"
          : "Automatiza procesos internos, consultas de empleados y gestión de flujos de trabajo",
      metrics: ["70% time saved", "90% accuracy", "24/7 operation"],
    },
  ]

  const process = [
    {
      step: "01",
      title: language === "en" ? "Discovery & Planning" : "Descubrimiento y Planificación",
      description:
        language === "en"
          ? "We analyze your business needs, existing systems, and define the AI agent's scope and capabilities"
          : "Analizamos tus necesidades empresariales, sistemas existentes y definimos el alcance y capacidades del agente de IA",
    },
    {
      step: "02",
      title: language === "en" ? "Data Preparation" : "Preparación de Datos",
      description:
        language === "en"
          ? "Collect, clean, and structure your business data for optimal AI training and performance"
          : "Recopilamos, limpiamos y estructuramos tus datos empresariales para entrenamiento y rendimiento óptimo de IA",
    },
    {
      step: "03",
      title: language === "en" ? "AI Development" : "Desarrollo de IA",
      description:
        language === "en"
          ? "Custom development of your AI agent with advanced NLP, machine learning, and integration capabilities"
          : "Desarrollo personalizado de tu agente de IA con PLN avanzado, aprendizaje automático y capacidades de integración",
    },
    {
      step: "04",
      title: language === "en" ? "Testing & Deployment" : "Pruebas y Despliegue",
      description:
        language === "en"
          ? "Comprehensive testing, gradual rollout, and full deployment with monitoring and support"
          : "Pruebas exhaustivas, implementación gradual y despliegue completo con monitoreo y soporte",
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
                {language === "en" ? "Custom AI Agents" : "Agentes de IA Personalizados"}
                <br />
                <span className="font-bold">
                  {language === "en" ? "Built for Your Business" : "Construidos para Tu Negocio"}
                </span>
              </h1>

              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                {language === "en"
                  ? "Transform your business operations with intelligent AI agents that understand your industry, speak your language, and integrate seamlessly with your existing systems."
                  : "Transforma tus operaciones empresariales con agentes de IA inteligentes que entienden tu industria, hablan tu idioma e se integran perfectamente con tus sistemas existentes."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Start Development" : "Iniciar Desarrollo"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  {language === "en" ? "View Demo" : "Ver Demo"}
                </Button>
              </div>
            </motion.div>
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
                {language === "en" ? "Advanced AI Capabilities" : "Capacidades Avanzadas de IA"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Enterprise-grade AI technology tailored to your specific needs"
                  : "Tecnología de IA de nivel empresarial adaptada a tus necesidades específicas"}
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

        {/* Use Cases Section */}
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
                {language === "en" ? "Real-World Applications" : "Aplicaciones del Mundo Real"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "See how AI agents transform different aspects of your business"
                  : "Ve cómo los agentes de IA transforman diferentes aspectos de tu negocio"}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-light text-gray-900 mb-4">{useCase.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed mb-6">{useCase.description}</p>
                      <div className="space-y-2">
                        {useCase.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">{metric}</span>
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
                {language === "en" ? "Development Process" : "Proceso de Desarrollo"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "From concept to deployment in 4 strategic phases"
                  : "Del concepto al despliegue en 4 fases estratégicas"}
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
                {language === "en" ? "Ready to Build" : "Listo para Construir"}
                <br />
                <span className="font-bold">{language === "en" ? "Your AI Agent?" : "Tu Agente de IA?"}</span>
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                {language === "en"
                  ? "Start your AI transformation journey with a custom consultation"
                  : "Inicia tu viaje de transformación de IA con una consulta personalizada"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Start Project" : "Iniciar Proyecto"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  {language === "en" ? "Schedule Call" : "Agendar Llamada"}
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
