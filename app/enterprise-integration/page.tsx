"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Globe, Database, Lock } from "lucide-react"

export default function EnterpriseIntegrationPage() {
  const { language } = useLanguage()

  const integrations = [
    {
      category: language === "en" ? "CRM Systems" : "Sistemas CRM",
      systems: ["Salesforce", "HubSpot", "Microsoft Dynamics", "Pipedrive"],
      description:
        language === "en"
          ? "Native integration with leading CRM platforms for seamless customer data flow"
          : "Integración nativa con plataformas CRM líderes para flujo de datos de clientes sin problemas",
    },
    {
      category: language === "en" ? "ERP Solutions" : "Soluciones ERP",
      systems: ["SAP", "Oracle", "NetSuite", "Odoo"],
      description:
        language === "en"
          ? "Deep ERP integration for automated business process management"
          : "Integración profunda de ERP para gestión automatizada de procesos empresariales",
    },
    {
      category: language === "en" ? "Communication" : "Comunicación",
      systems: ["WhatsApp Business", "Slack", "Microsoft Teams", "Twilio"],
      description:
        language === "en"
          ? "Multi-channel communication integration for unified customer experience"
          : "Integración de comunicación multicanal para experiencia unificada del cliente",
    },
    {
      category: language === "en" ? "Analytics & BI" : "Analytics y BI",
      systems: ["Tableau", "Power BI", "Google Analytics", "Mixpanel"],
      description:
        language === "en"
          ? "Real-time data integration for comprehensive business intelligence"
          : "Integración de datos en tiempo real para inteligencia empresarial integral",
    },
  ]

  const securityFeatures = [
    {
      icon: Shield,
      title: language === "en" ? "End-to-End Encryption" : "Cifrado de Extremo a Extremo",
      description:
        language === "en"
          ? "Military-grade encryption for all data in transit and at rest"
          : "Cifrado de grado militar para todos los datos en tránsito y en reposo",
    },
    {
      icon: Lock,
      title: language === "en" ? "Multi-Factor Authentication" : "Autenticación Multifactor",
      description:
        language === "en"
          ? "Advanced MFA with biometric and hardware token support"
          : "MFA avanzado con soporte biométrico y tokens de hardware",
    },
    {
      icon: Database,
      title: language === "en" ? "Role-Based Access Control" : "Control de Acceso Basado en Roles",
      description:
        language === "en"
          ? "Granular permissions and access control for enterprise security"
          : "Permisos granulares y control de acceso para seguridad empresarial",
    },
    {
      icon: Globe,
      title: language === "en" ? "Compliance & Audit" : "Cumplimiento y Auditoría",
      description:
        language === "en"
          ? "Full audit trails and compliance with GDPR, SOC 2, and ISO 27001"
          : "Pistas de auditoría completas y cumplimiento con GDPR, SOC 2 e ISO 27001",
    },
  ]

  const deploymentOptions = [
    {
      title: language === "en" ? "Cloud Deployment" : "Despliegue en la Nube",
      features: [
        language === "en" ? "Auto-scaling infrastructure" : "Infraestructura de auto-escalado",
        language === "en" ? "Global CDN distribution" : "Distribución CDN global",
        language === "en" ? "99.9% uptime SLA" : "SLA de 99.9% de tiempo activo",
        language === "en" ? "Automated backups" : "Respaldos automatizados",
      ],
    },
    {
      title: language === "en" ? "Hybrid Integration" : "Integración Híbrida",
      features: [
        language === "en" ? "On-premises + cloud flexibility" : "Flexibilidad on-premises + nube",
        language === "en" ? "Secure VPN tunneling" : "Túneles VPN seguros",
        language === "en" ? "Data residency compliance" : "Cumplimiento de residencia de datos",
        language === "en" ? "Custom security policies" : "Políticas de seguridad personalizadas",
      ],
    },
    {
      title: language === "en" ? "On-Premises" : "On-Premises",
      features: [
        language === "en" ? "Complete data control" : "Control completo de datos",
        language === "en" ? "Air-gapped deployment" : "Despliegue air-gapped",
        language === "en" ? "Custom hardware specs" : "Especificaciones de hardware personalizadas",
        language === "en" ? "Dedicated support team" : "Equipo de soporte dedicado",
      ],
    },
  ]

  const metrics = [
    {
      metric: "99.9%",
      label: language === "en" ? "Uptime SLA" : "SLA de Tiempo Activo",
    },
    {
      metric: "15min",
      label: language === "en" ? "Support Response" : "Respuesta de Soporte",
    },
    {
      metric: "100k+",
      label: language === "en" ? "Concurrent Users" : "Usuarios Concurrentes",
    },
    {
      metric: "24/7",
      label: language === "en" ? "Global Support" : "Soporte Global",
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
                {language === "en" ? "Enterprise-Grade" : "Nivel Empresarial"}
                <br />
                <span className="font-bold">{language === "en" ? "AI Integration" : "Integración de IA"}</span>
              </h1>

              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                {language === "en"
                  ? "Seamlessly integrate AI agents with your existing enterprise systems. Built for Fortune 500 companies with enterprise-grade security, scalability, and compliance."
                  : "Integra perfectamente agentes de IA con tus sistemas empresariales existentes. Construido para empresas Fortune 500 con seguridad, escalabilidad y cumplimiento de nivel empresarial."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Enterprise Demo" : "Demo Empresarial"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  {language === "en" ? "Contact Sales" : "Contactar Ventas"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reliability Metrics */}
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
                {language === "en" ? "Enterprise Reliability" : "Confiabilidad Empresarial"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Built to meet the most demanding enterprise requirements"
                  : "Construido para cumplir con los requisitos empresariales más exigentes"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl font-light text-black mb-2">{metric.metric}</div>
                  <div className="text-gray-600 font-light">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* System Integrations */}
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
                {language === "en" ? "System Integrations" : "Integraciones de Sistemas"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Connect with your existing enterprise technology stack"
                  : "Conecta con tu stack de tecnología empresarial existente"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-light text-gray-900 mb-4">{integration.category}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {integration.systems.map((system, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {system}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed">{integration.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
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
                {language === "en" ? "Enterprise Security" : "Seguridad Empresarial"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Bank-level security with comprehensive compliance certifications"
                  : "Seguridad de nivel bancario con certificaciones de cumplimiento integrales"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
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
                  <h3 className="text-xl font-light text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Options */}
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
                {language === "en" ? "Deployment Options" : "Opciones de Despliegue"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Flexible deployment to meet your security and compliance requirements"
                  : "Despliegue flexible para cumplir con tus requisitos de seguridad y cumplimiento"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {deploymentOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-light text-gray-900 mb-6">{option.title}</h3>
                      <ul className="space-y-3">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span className="text-gray-600 font-light text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
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
                {language === "en" ? "Ready for Enterprise" : "Listo para Empresas"}
                <br />
                <span className="font-bold">{language === "en" ? "AI Integration?" : "Integración de IA?"}</span>
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                {language === "en"
                  ? "Join Fortune 500 companies transforming their operations with enterprise AI"
                  : "Únete a empresas Fortune 500 transformando sus operaciones con IA empresarial"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Enterprise Demo" : "Demo Empresarial"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  {language === "en" ? "Contact Sales" : "Contactar Ventas"}
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
