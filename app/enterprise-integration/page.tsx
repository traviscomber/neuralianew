"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import {
  Network,
  MessageSquare,
  Zap,
  Users,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Database,
  TrendingUp,
  RefreshCw,
  FileText,
  DollarSign,
  Server,
  Cloud,
  Lock,
  Workflow,
} from "lucide-react"

export default function EnterpriseIntegrationPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: Database,
      title: language === "en" ? "System Connectivity" : "Conectividad de Sistemas",
      description:
        language === "en"
          ? "Seamless integration with CRM, ERP, databases, and third-party applications through robust APIs"
          : "Integración perfecta con CRM, ERP, bases de datos y aplicaciones de terceros a través de APIs robustas",
    },
    {
      icon: Cloud,
      title: language === "en" ? "Cloud & On-Premise" : "Nube y On-Premise",
      description:
        language === "en"
          ? "Flexible deployment options supporting both cloud-based and on-premise infrastructure"
          : "Opciones de despliegue flexibles que soportan infraestructura tanto en la nube como on-premise",
    },
    {
      icon: Shield,
      title: language === "en" ? "Enterprise Security" : "Seguridad Empresarial",
      description:
        language === "en"
          ? "Bank-level security with encryption, SSO, and compliance with industry standards"
          : "Seguridad nivel bancario con encriptación, SSO y cumplimiento de estándares de la industria",
    },
    {
      icon: Workflow,
      title: language === "en" ? "Workflow Orchestration" : "Orquestación de Flujos",
      description:
        language === "en"
          ? "Intelligent workflow management that coordinates processes across multiple systems"
          : "Gestión inteligente de flujos que coordina procesos a través de múltiples sistemas",
    },
    {
      icon: BarChart3,
      title: language === "en" ? "Real-time Monitoring" : "Monitoreo en Tiempo Real",
      description:
        language === "en"
          ? "Comprehensive monitoring and analytics for all integrated systems and processes"
          : "Monitoreo integral y análisis para todos los sistemas y procesos integrados",
    },
    {
      icon: RefreshCw,
      title: language === "en" ? "Scalable Architecture" : "Arquitectura Escalable",
      description:
        language === "en"
          ? "Enterprise-grade architecture that scales with your business growth and demands"
          : "Arquitectura de nivel empresarial que escala con el crecimiento y demandas de tu negocio",
    },
  ]

  const integrationTypes = [
    {
      icon: Server,
      title: language === "en" ? "ERP Integration" : "Integración ERP",
      description:
        language === "en"
          ? "Connect with SAP, Oracle, Microsoft Dynamics, and other enterprise resource planning systems"
          : "Conecta con SAP, Oracle, Microsoft Dynamics y otros sistemas de planificación de recursos empresariales",
      systems: ["SAP", "Oracle ERP", "Microsoft Dynamics", "NetSuite", "Odoo"],
      benefits: [
        language === "en" ? "Real-time data sync" : "Sincronización de datos en tiempo real",
        language === "en" ? "Automated workflows" : "Flujos de trabajo automatizados",
        language === "en" ? "Unified reporting" : "Reportes unificados",
      ],
    },
    {
      icon: Users,
      title: language === "en" ? "CRM Integration" : "Integración CRM",
      description:
        language === "en"
          ? "Seamless connection with Salesforce, HubSpot, and other customer relationship management platforms"
          : "Conexión perfecta con Salesforce, HubSpot y otras plataformas de gestión de relaciones con clientes",
      systems: ["Salesforce", "HubSpot", "Microsoft CRM", "Pipedrive", "Zoho CRM"],
      benefits: [
        language === "en" ? "Lead automation" : "Automatización de leads",
        language === "en" ? "Customer insights" : "Insights de clientes",
        language === "en" ? "Sales pipeline sync" : "Sincronización de pipeline de ventas",
      ],
    },
    {
      icon: MessageSquare,
      title: language === "en" ? "Communication Platforms" : "Plataformas de Comunicación",
      description:
        language === "en"
          ? "Integration with messaging, email, and communication tools for unified customer experience"
          : "Integración con mensajería, email y herramientas de comunicación para experiencia unificada del cliente",
      systems: ["WhatsApp Business", "Slack", "Microsoft Teams", "Telegram", "Email Systems"],
      benefits: [
        language === "en" ? "Omnichannel support" : "Soporte omnicanal",
        language === "en" ? "Unified inbox" : "Bandeja de entrada unificada",
        language === "en" ? "Automated responses" : "Respuestas automatizadas",
      ],
    },
    {
      icon: BarChart3,
      title: language === "en" ? "Analytics & BI" : "Análisis y BI",
      description:
        language === "en"
          ? "Connect with business intelligence tools for comprehensive data analysis and reporting"
          : "Conecta con herramientas de inteligencia de negocio para análisis integral de datos y reportes",
      systems: ["Power BI", "Tableau", "Google Analytics", "Looker", "Qlik"],
      benefits: [
        language === "en" ? "Data visualization" : "Visualización de datos",
        language === "en" ? "Custom dashboards" : "Dashboards personalizados",
        language === "en" ? "Predictive analytics" : "Análisis predictivo",
      ],
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: language === "en" ? "Operational Efficiency" : "Eficiencia Operacional",
      description:
        language === "en"
          ? "Eliminate data silos and manual processes with seamless system integration"
          : "Elimina silos de datos y procesos manuales con integración perfecta de sistemas",
      metric: language === "en" ? "60% Efficiency Gain" : "60% Ganancia en Eficiencia",
    },
    {
      icon: TrendingUp,
      title: language === "en" ? "Data Accuracy" : "Precisión de Datos",
      description:
        language === "en"
          ? "Ensure data consistency and accuracy across all integrated business systems"
          : "Asegura consistencia y precisión de datos a través de todos los sistemas de negocio integrados",
      metric: language === "en" ? "99.9% Data Accuracy" : "99.9% Precisión de Datos",
    },
    {
      icon: Clock,
      title: language === "en" ? "Faster Decision Making" : "Toma de Decisiones Más Rápida",
      description:
        language === "en"
          ? "Access real-time data from all systems for informed, rapid business decisions"
          : "Accede a datos en tiempo real de todos los sistemas para decisiones de negocio informadas y rápidas",
      metric: language === "en" ? "75% Faster Decisions" : "75% Decisiones Más Rápidas",
    },
    {
      icon: DollarSign,
      title: language === "en" ? "Cost Reduction" : "Reducción de Costos",
      description:
        language === "en"
          ? "Reduce IT maintenance costs and eliminate redundant systems through smart integration"
          : "Reduce costos de mantenimiento de TI y elimina sistemas redundantes a través de integración inteligente",
      metric: language === "en" ? "45% Cost Savings" : "45% Ahorro en Costos",
    },
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: language === "en" ? "End-to-End Encryption" : "Encriptación Extremo a Extremo",
      description:
        language === "en"
          ? "All data transmissions are encrypted using industry-standard protocols"
          : "Todas las transmisiones de datos están encriptadas usando protocolos estándar de la industria",
    },
    {
      icon: Shield,
      title: language === "en" ? "Access Control" : "Control de Acceso",
      description:
        language === "en"
          ? "Role-based access control with multi-factor authentication and SSO support"
          : "Control de acceso basado en roles con autenticación multifactor y soporte SSO",
    },
    {
      icon: FileText,
      title: language === "en" ? "Compliance Ready" : "Listo para Cumplimiento",
      description:
        language === "en"
          ? "Built-in compliance features for GDPR, HIPAA, SOX, and other regulations"
          : "Características de cumplimiento integradas para GDPR, HIPAA, SOX y otras regulaciones",
    },
    {
      icon: BarChart3,
      title: language === "en" ? "Audit Trails" : "Pistas de Auditoría",
      description:
        language === "en"
          ? "Comprehensive logging and audit trails for all system interactions and data changes"
          : "Registro integral y pistas de auditoría para todas las interacciones del sistema y cambios de datos",
    },
  ]

  const process = [
    {
      step: "01",
      title: language === "en" ? "System Assessment" : "Evaluación de Sistemas",
      description:
        language === "en"
          ? "Comprehensive analysis of your existing systems, data flows, and integration requirements"
          : "Análisis integral de tus sistemas existentes, flujos de datos y requisitos de integración",
    },
    {
      step: "02",
      title: language === "en" ? "Integration Architecture" : "Arquitectura de Integración",
      description:
        language === "en"
          ? "Design secure, scalable integration architecture tailored to your business needs"
          : "Diseñar arquitectura de integración segura y escalable adaptada a tus necesidades de negocio",
    },
    {
      step: "03",
      title: language === "en" ? "API Development" : "Desarrollo de APIs",
      description:
        language === "en"
          ? "Build custom APIs and connectors for seamless system communication"
          : "Construir APIs personalizadas y conectores para comunicación perfecta entre sistemas",
    },
    {
      step: "04",
      title: language === "en" ? "Testing & Validation" : "Pruebas y Validación",
      description:
        language === "en"
          ? "Rigorous testing to ensure data integrity, security, and performance standards"
          : "Pruebas rigurosas para asegurar integridad de datos, seguridad y estándares de rendimiento",
    },
    {
      step: "05",
      title: language === "en" ? "Deployment & Support" : "Despliegue y Soporte",
      description:
        language === "en"
          ? "Smooth deployment with ongoing monitoring, maintenance, and optimization"
          : "Despliegue suave con monitoreo continuo, mantenimiento y optimización",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-black text-white border-0 text-lg px-6 py-2">
                <Network className="w-5 h-5 mr-2" />
                {language === "en" ? "Enterprise Integration" : "Integración Empresarial"}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              {language === "en" ? (
                <>
                  Seamless Enterprise
                  <br />
                  <span className="text-gray-600">System Integration</span>
                </>
              ) : (
                <>
                  Integración Empresarial
                  <br />
                  <span className="text-gray-600">Sin Interrupciones</span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "en"
                ? "Connect all your business systems with intelligent AI-powered integration solutions that ensure data consistency, operational efficiency, and scalable growth."
                : "Conecta todos tus sistemas de negocio con soluciones de integración inteligentes potenciadas por IA que aseguran consistencia de datos, eficiencia operacional y crecimiento escalable."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg" asChild>
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20necesito%20integrar%20mis%20sistemas%20empresariales"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {language === "en" ? "Integrate Your Systems" : "Integrar tus Sistemas"}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
              >
                {language === "en" ? "Integration Assessment" : "Evaluación de Integración"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {language === "en" ? "Integration Capabilities" : "Capacidades de Integración"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Enterprise-grade integration features designed for complex business environments"
                : "Características de integración de nivel empresarial diseñadas para entornos de negocio complejos"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {language === "en" ? "System Integration Types" : "Tipos de Integración de Sistemas"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Connect with all major business systems and platforms"
                : "Conecta con todos los principales sistemas y plataformas de negocio"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {integrationTypes.map((type, index) => (
              <Card key={index} className="bg-gray-50 border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black mb-3">{type.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{type.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-black mb-3">
                      {language === "en" ? "Supported Systems:" : "Sistemas Soportados:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {type.systems.map((system, systemIndex) => (
                        <Badge key={systemIndex} className="bg-white text-black border border-gray-300">
                          {system}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-black mb-3">
                      {language === "en" ? "Key Benefits:" : "Beneficios Clave:"}
                    </h4>
                    {type.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {language === "en" ? "Integration Benefits" : "Beneficios de Integración"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Measurable improvements that transform your business operations"
                : "Mejoras medibles que transforman tus operaciones de negocio"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-black">{benefit.title}</h3>
                        <Badge className="bg-gray-100 text-black border border-gray-300">{benefit.metric}</Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {language === "en" ? "Enterprise Security" : "Seguridad Empresarial"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Bank-level security features to protect your business data and operations"
                : "Características de seguridad nivel bancario para proteger tus datos y operaciones de negocio"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-50 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {language === "en" ? "Our Integration Process" : "Nuestro Proceso de Integración"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "A proven methodology for successful enterprise system integration"
                : "Una metodología probada para integración exitosa de sistemas empresariales"}
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "en" ? "Ready to Integrate Your Systems?" : "¿Listo para Integrar tus Sistemas?"}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Transform your business with seamless system integration that connects all your operations and data."
                : "Transforma tu negocio con integración perfecta de sistemas que conecta todas tus operaciones y datos."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg" asChild>
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20necesito%20una%20consulta%20sobre%20integración%20empresarial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {language === "en" ? "Get Integration Consultation" : "Consulta de Integración"}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
              >
                {language === "en" ? "View Integration Examples" : "Ver Ejemplos de Integración"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
