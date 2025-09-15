"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { FaqSection } from "@/components/landing/faq-section"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Network, Database, Cloud, Shield, Zap, Settings, Globe, Server } from "lucide-react"

export default function EnterpriseIntegrationPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: Network,
      title: language === "en" ? "API Integration" : "Integración de APIs",
      description:
        language === "en"
          ? "Seamless integration with existing enterprise systems through robust API connections"
          : "Integración perfecta con sistemas empresariales existentes a través de conexiones API robustas",
    },
    {
      icon: Database,
      title: language === "en" ? "Data Synchronization" : "Sincronización de Datos",
      description:
        language === "en"
          ? "Real-time data synchronization across all connected systems with conflict resolution"
          : "Sincronización de datos en tiempo real en todos los sistemas conectados con resolución de conflictos",
    },
    {
      icon: Cloud,
      title: language === "en" ? "Cloud & On-Premise" : "Nube y Local",
      description:
        language === "en"
          ? "Flexible deployment options supporting cloud, on-premise, and hybrid architectures"
          : "Opciones de implementación flexibles que soportan arquitecturas de nube, locales e híbridas",
    },
    {
      icon: Shield,
      title: language === "en" ? "Enterprise Security" : "Seguridad Empresarial",
      description:
        language === "en"
          ? "Bank-level security with encryption, authentication, and compliance monitoring"
          : "Seguridad de nivel bancario con cifrado, autenticación y monitoreo de cumplimiento",
    },
    {
      icon: Settings,
      title: language === "en" ? "Custom Workflows" : "Flujos de Trabajo Personalizados",
      description:
        language === "en"
          ? "Tailored integration workflows that match your specific business processes"
          : "Flujos de trabajo de integración personalizados que coinciden con tus procesos empresariales específicos",
    },
    {
      icon: Zap,
      title: language === "en" ? "High Performance" : "Alto Rendimiento",
      description:
        language === "en"
          ? "Optimized for high-volume transactions with sub-second response times"
          : "Optimizado para transacciones de alto volumen con tiempos de respuesta sub-segundo",
    },
  ]

  const integrationTypes = [
    {
      title: language === "en" ? "CRM Integration" : "Integración CRM",
      description:
        language === "en"
          ? "Connect with Salesforce, HubSpot, Microsoft Dynamics, and other CRM platforms"
          : "Conecta con Salesforce, HubSpot, Microsoft Dynamics y otras plataformas CRM",
      systems: ["Salesforce", "HubSpot", "Microsoft Dynamics", "Pipedrive"],
      icon: Globe,
    },
    {
      title: language === "en" ? "ERP Systems" : "Sistemas ERP",
      description:
        language === "en"
          ? "Seamless integration with SAP, Oracle, NetSuite, and other enterprise systems"
          : "Integración perfecta con SAP, Oracle, NetSuite y otros sistemas empresariales",
      systems: ["SAP", "Oracle ERP", "NetSuite", "Microsoft Dynamics"],
      icon: Server,
    },
    {
      title: language === "en" ? "Communication Platforms" : "Plataformas de Comunicación",
      description:
        language === "en"
          ? "Integration with WhatsApp Business, Slack, Microsoft Teams, and email systems"
          : "Integración con WhatsApp Business, Slack, Microsoft Teams y sistemas de correo",
      systems: ["WhatsApp Business", "Slack", "Microsoft Teams", "Email"],
      icon: Network,
    },
    {
      title: language === "en" ? "Database Systems" : "Sistemas de Base de Datos",
      description:
        language === "en"
          ? "Connect with PostgreSQL, MySQL, MongoDB, and other database technologies"
          : "Conecta con PostgreSQL, MySQL, MongoDB y otras tecnologías de base de datos",
      systems: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"],
      icon: Database,
    },
  ]

  const benefits = [
    {
      metric: "99.9%",
      label: language === "en" ? "Uptime" : "Tiempo Activo",
    },
    {
      metric: "50ms",
      label: language === "en" ? "Response Time" : "Tiempo de Respuesta",
    },
    {
      metric: "100%",
      label: language === "en" ? "Data Accuracy" : "Precisión de Datos",
    },
    {
      metric: "24/7",
      label: language === "en" ? "Monitoring" : "Monitoreo",
    },
  ]

  const process = [
    {
      step: "01",
      title: language === "en" ? "System Analysis" : "Análisis de Sistemas",
      description:
        language === "en"
          ? "Comprehensive analysis of your existing systems, data flows, and integration requirements"
          : "Análisis integral de tus sistemas existentes, flujos de datos y requisitos de integración",
    },
    {
      step: "02",
      title: language === "en" ? "Architecture Design" : "Diseño de Arquitectura",
      description:
        language === "en"
          ? "Custom integration architecture design optimized for your specific business needs"
          : "Diseño de arquitectura de integración personalizada optimizada para tus necesidades empresariales específicas",
    },
    {
      step: "03",
      title: language === "en" ? "Implementation" : "Implementación",
      description:
        language === "en"
          ? "Secure implementation with thorough testing and gradual rollout to minimize disruption"
          : "Implementación segura con pruebas exhaustivas y despliegue gradual para minimizar interrupciones",
    },
    {
      step: "04",
      title: language === "en" ? "Monitoring & Support" : "Monitoreo y Soporte",
      description:
        language === "en"
          ? "Continuous monitoring, maintenance, and 24/7 support to ensure optimal performance"
          : "Monitoreo continuo, mantenimiento y soporte 24/7 para asegurar rendimiento óptimo",
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
                {language === "en" ? "Enterprise Integration" : "Integración Empresarial"}
              </Badge>

              <h1 className="text-6xl font-light text-white mb-6">
                {language === "en" ? "Seamless Enterprise" : "Integración Empresarial"}
                <br />
                <span className="font-bold">{language === "en" ? "Integration" : "Sin Problemas"}</span>
              </h1>

              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                {language === "en"
                  ? "Connect your AI agents with existing enterprise systems for unified operations. Secure, scalable, and built for enterprise-grade performance."
                  : "Conecta tus agentes de IA con sistemas empresariales existentes para operaciones unificadas. Seguro, escalable y construido para rendimiento de nivel empresarial."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Start Integration" : "Iniciar Integración"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  {language === "en" ? "View Architecture" : "Ver Arquitectura"}
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
                {language === "en" ? "Enterprise Performance" : "Rendimiento Empresarial"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Built for mission-critical enterprise operations"
                  : "Construido para operaciones empresariales críticas"}
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
                {language === "en" ? "Integration Capabilities" : "Capacidades de Integración"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Advanced integration features for complex enterprise environments"
                  : "Características de integración avanzadas para entornos empresariales complejos"}
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

        {/* Integration Types Section */}
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
                {language === "en" ? "Supported Systems" : "Sistemas Soportados"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Connect with all major enterprise platforms and systems"
                  : "Conecta con todas las principales plataformas y sistemas empresariales"}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {integrationTypes.map((type, index) => (
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
                          <type.icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h3 className="text-2xl font-light text-gray-900">{type.title}</h3>
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed mb-6">{type.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {type.systems.map((system, systemIndex) => (
                          <Badge key={systemIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                            {system}
                          </Badge>
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
                {language === "en" ? "Integration Process" : "Proceso de Integración"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Structured approach to enterprise integration"
                  : "Enfoque estructurado para la integración empresarial"}
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
                {language === "en" ? "Ready to Integrate" : "Listo para Integrar"}
                <br />
                <span className="font-bold">{language === "en" ? "Your Systems?" : "Tus Sistemas?"}</span>
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                {language === "en"
                  ? "Connect your enterprise systems with AI-powered integration solutions"
                  : "Conecta tus sistemas empresariales con soluciones de integración impulsadas por IA"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Start Integration" : "Iniciar Integración"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  {language === "en" ? "Technical Consultation" : "Consulta Técnica"}
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
