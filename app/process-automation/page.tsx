"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import {
  Cog,
  MessageSquare,
  Zap,
  Users,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Workflow,
  Database,
  TrendingUp,
  RefreshCw,
  FileText,
  Mail,
  Calendar,
  DollarSign,
} from "lucide-react"

export default function ProcessAutomationPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: Workflow,
      title: language === "en" ? "Intelligent Workflows" : "Flujos Inteligentes",
      description:
        language === "en"
          ? "AI-powered workflows that adapt and optimize based on real-time data and business conditions"
          : "Flujos de trabajo potenciados por IA que se adaptan y optimizan basándose en datos en tiempo real y condiciones de negocio",
    },
    {
      icon: RefreshCw,
      title: language === "en" ? "Continuous Optimization" : "Optimización Continua",
      description:
        language === "en"
          ? "Self-improving processes that learn from patterns and automatically enhance efficiency over time"
          : "Procesos que se auto-mejoran, aprenden de patrones y automáticamente mejoran la eficiencia con el tiempo",
    },
    {
      icon: Database,
      title: language === "en" ? "System Integration" : "Integración de Sistemas",
      description:
        language === "en"
          ? "Seamless connection with your existing CRM, ERP, and business systems for unified operations"
          : "Conexión perfecta con tus sistemas CRM, ERP y de negocio existentes para operaciones unificadas",
    },
    {
      icon: BarChart3,
      title: language === "en" ? "Real-time Analytics" : "Análisis en Tiempo Real",
      description:
        language === "en"
          ? "Comprehensive dashboards and reports that provide insights into process performance and ROI"
          : "Dashboards y reportes integrales que proporcionan insights sobre rendimiento de procesos y ROI",
    },
    {
      icon: Shield,
      title: language === "en" ? "Compliance & Security" : "Cumplimiento y Seguridad",
      description:
        language === "en"
          ? "Built-in compliance monitoring and security protocols to meet industry standards and regulations"
          : "Monitoreo de cumplimiento integrado y protocolos de seguridad para cumplir estándares y regulaciones de la industria",
    },
    {
      icon: Zap,
      title: language === "en" ? "Rapid Deployment" : "Despliegue Rápido",
      description:
        language === "en"
          ? "Quick implementation with minimal disruption to your current business operations"
          : "Implementación rápida con mínima interrupción a tus operaciones de negocio actuales",
    },
  ]

  const automationAreas = [
    {
      icon: Mail,
      title: language === "en" ? "Email & Communication" : "Email y Comunicación",
      description:
        language === "en"
          ? "Automated email responses, follow-ups, and communication workflows"
          : "Respuestas automáticas de email, seguimientos y flujos de comunicación",
      processes: [
        language === "en" ? "Lead nurturing sequences" : "Secuencias de nutrición de leads",
        language === "en" ? "Customer onboarding emails" : "Emails de incorporación de clientes",
        language === "en" ? "Support ticket routing" : "Enrutamiento de tickets de soporte",
        language === "en" ? "Newsletter automation" : "Automatización de newsletters",
      ],
      savings: language === "en" ? "70% time reduction" : "70% reducción de tiempo",
    },
    {
      icon: FileText,
      title: language === "en" ? "Document Processing" : "Procesamiento de Documentos",
      description:
        language === "en"
          ? "Intelligent document analysis, data extraction, and workflow routing"
          : "Análisis inteligente de documentos, extracción de datos y enrutamiento de flujos",
      processes: [
        language === "en" ? "Invoice processing" : "Procesamiento de facturas",
        language === "en" ? "Contract analysis" : "Análisis de contratos",
        language === "en" ? "Data entry automation" : "Automatización de entrada de datos",
        language === "en" ? "Compliance checking" : "Verificación de cumplimiento",
      ],
      savings: language === "en" ? "85% accuracy improvement" : "85% mejora en precisión",
    },
    {
      icon: Calendar,
      title: language === "en" ? "Scheduling & Planning" : "Programación y Planificación",
      description:
        language === "en"
          ? "Smart scheduling systems that optimize resources and manage appointments"
          : "Sistemas de programación inteligentes que optimizan recursos y gestionan citas",
      processes: [
        language === "en" ? "Meeting coordination" : "Coordinación de reuniones",
        language === "en" ? "Resource allocation" : "Asignación de recursos",
        language === "en" ? "Project timeline management" : "Gestión de cronogramas de proyectos",
        language === "en" ? "Staff scheduling" : "Programación de personal",
      ],
      savings: language === "en" ? "60% scheduling conflicts reduced" : "60% reducción de conflictos de programación",
    },
    {
      icon: DollarSign,
      title: language === "en" ? "Financial Operations" : "Operaciones Financieras",
      description:
        language === "en"
          ? "Automated financial processes including invoicing, payments, and reporting"
          : "Procesos financieros automatizados incluyendo facturación, pagos y reportes",
      processes: [
        language === "en" ? "Automated invoicing" : "Facturación automatizada",
        language === "en" ? "Payment processing" : "Procesamiento de pagos",
        language === "en" ? "Expense tracking" : "Seguimiento de gastos",
        language === "en" ? "Financial reporting" : "Reportes financieros",
      ],
      savings: language === "en" ? "90% faster processing" : "90% procesamiento más rápido",
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: language === "en" ? "Time Savings" : "Ahorro de Tiempo",
      description:
        language === "en"
          ? "Reduce manual work by up to 80% with intelligent process automation"
          : "Reduce el trabajo manual hasta en 80% con automatización inteligente de procesos",
      metric: language === "en" ? "80% Time Reduction" : "80% Reducción de Tiempo",
    },
    {
      icon: TrendingUp,
      title: language === "en" ? "Increased Accuracy" : "Mayor Precisión",
      description:
        language === "en"
          ? "Eliminate human errors and ensure consistent, accurate process execution"
          : "Elimina errores humanos y asegura ejecución de procesos consistente y precisa",
      metric: language === "en" ? "99.5% Accuracy" : "99.5% Precisión",
    },
    {
      icon: DollarSign,
      title: language === "en" ? "Cost Reduction" : "Reducción de Costos",
      description:
        language === "en"
          ? "Lower operational costs through efficient automation and resource optimization"
          : "Menores costos operacionales a través de automatización eficiente y optimización de recursos",
      metric: language === "en" ? "40% Cost Savings" : "40% Ahorro en Costos",
    },
    {
      icon: Users,
      title: language === "en" ? "Employee Satisfaction" : "Satisfacción del Empleado",
      description:
        language === "en"
          ? "Free your team from repetitive tasks to focus on strategic, high-value work"
          : "Libera a tu equipo de tareas repetitivas para enfocarse en trabajo estratégico de alto valor",
      metric: language === "en" ? "90% Employee Satisfaction" : "90% Satisfacción del Empleado",
    },
  ]

  const process = [
    {
      step: "01",
      title: language === "en" ? "Process Assessment" : "Evaluación de Procesos",
      description:
        language === "en"
          ? "Comprehensive analysis of your current processes to identify automation opportunities and bottlenecks"
          : "Análisis integral de tus procesos actuales para identificar oportunidades de automatización y cuellos de botella",
    },
    {
      step: "02",
      title: language === "en" ? "Automation Design" : "Diseño de Automatización",
      description:
        language === "en"
          ? "Create detailed automation workflows with decision trees, triggers, and integration points"
          : "Crear flujos de automatización detallados con árboles de decisión, disparadores y puntos de integración",
    },
    {
      step: "03",
      title: language === "en" ? "System Integration" : "Integración de Sistemas",
      description:
        language === "en"
          ? "Connect automation workflows with your existing business systems and databases"
          : "Conectar flujos de automatización con tus sistemas de negocio y bases de datos existentes",
    },
    {
      step: "04",
      title: language === "en" ? "Testing & Validation" : "Pruebas y Validación",
      description:
        language === "en"
          ? "Rigorous testing to ensure automation works correctly and meets business requirements"
          : "Pruebas rigurosas para asegurar que la automatización funcione correctamente y cumpla los requisitos de negocio",
    },
    {
      step: "05",
      title: language === "en" ? "Deployment & Monitoring" : "Despliegue y Monitoreo",
      description:
        language === "en"
          ? "Launch automation with continuous monitoring, optimization, and support"
          : "Lanzar automatización con monitoreo continuo, optimización y soporte",
    },
  ]

  const industries = [
    {
      name: language === "en" ? "Healthcare" : "Salud",
      processes: [
        language === "en" ? "Patient scheduling" : "Programación de pacientes",
        language === "en" ? "Insurance processing" : "Procesamiento de seguros",
        language === "en" ? "Medical records management" : "Gestión de registros médicos",
      ],
    },
    {
      name: language === "en" ? "Finance" : "Finanzas",
      processes: [
        language === "en" ? "Loan processing" : "Procesamiento de préstamos",
        language === "en" ? "Compliance reporting" : "Reportes de cumplimiento",
        language === "en" ? "Risk assessment" : "Evaluación de riesgos",
      ],
    },
    {
      name: language === "en" ? "Manufacturing" : "Manufactura",
      processes: [
        language === "en" ? "Supply chain management" : "Gestión de cadena de suministro",
        language === "en" ? "Quality control" : "Control de calidad",
        language === "en" ? "Inventory optimization" : "Optimización de inventario",
      ],
    },
    {
      name: language === "en" ? "Retail" : "Retail",
      processes: [
        language === "en" ? "Order processing" : "Procesamiento de pedidos",
        language === "en" ? "Customer service" : "Servicio al cliente",
        language === "en" ? "Inventory management" : "Gestión de inventario",
      ],
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
                <Cog className="w-5 h-5 mr-2" />
                {language === "en" ? "Process Automation" : "Automatización de Procesos"}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              {language === "en" ? (
                <>
                  Intelligent Process
                  <br />
                  <span className="text-gray-600">Automation</span>
                </>
              ) : (
                <>
                  Automatización Inteligente
                  <br />
                  <span className="text-gray-600">de Procesos</span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "en"
                ? "Transform your business operations with AI-powered automation that eliminates manual work, reduces errors, and accelerates growth while maintaining quality and compliance."
                : "Transforma tus operaciones de negocio con automatización potenciada por IA que elimina trabajo manual, reduce errores y acelera el crecimiento manteniendo calidad y cumplimiento."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg" asChild>
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20automatizar%20mis%20procesos%20de%20negocio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {language === "en" ? "Automate Your Processes" : "Automatizar tus Procesos"}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
              >
                {language === "en" ? "Process Assessment" : "Evaluación de Procesos"}
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
              {language === "en" ? "Automation Capabilities" : "Capacidades de Automatización"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Advanced automation features designed to streamline your business operations"
                : "Características avanzadas de automatización diseñadas para optimizar tus operaciones de negocio"}
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

      {/* Automation Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {language === "en" ? "Key Automation Areas" : "Áreas Clave de Automatización"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Transform critical business processes with intelligent automation solutions"
                : "Transforma procesos críticos de negocio con soluciones de automatización inteligente"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {automationAreas.map((area, index) => (
              <Card key={index} className="bg-gray-50 border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-black">{area.title}</h3>
                        <Badge className="bg-white text-black border border-gray-300">{area.savings}</Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{area.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {area.processes.map((process, processIndex) => (
                      <div key={processIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{process}</span>
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
              {language === "en" ? "Proven Business Results" : "Resultados de Negocio Comprobados"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Measurable improvements that directly impact your bottom line"
                : "Mejoras medibles que impactan directamente en tus resultados finales"}
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

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {language === "en" ? "Industry Applications" : "Aplicaciones por Industria"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Specialized automation solutions tailored for different industries"
                : "Soluciones de automatización especializadas adaptadas para diferentes industrias"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-gray-50 border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">{industry.name}</h3>
                  <div className="space-y-2">
                    {industry.processes.map((process, processIndex) => (
                      <div key={processIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{process}</span>
                      </div>
                    ))}
                  </div>
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
              {language === "en" ? "Our Automation Process" : "Nuestro Proceso de Automatización"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "A systematic approach to implementing successful process automation"
                : "Un enfoque sistemático para implementar automatización de procesos exitosa"}
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
              {language === "en" ? "Ready to Automate Your Processes?" : "¿Listo para Automatizar tus Procesos?"}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Start your automation journey today and transform your business operations for maximum efficiency and growth."
                : "Comienza tu viaje de automatización hoy y transforma tus operaciones de negocio para máxima eficiencia y crecimiento."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg" asChild>
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20una%20evaluación%20gratuita%20de%20automatización%20de%20procesos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {language === "en" ? "Get Free Assessment" : "Evaluación Gratuita"}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
              >
                {language === "en" ? "View Success Stories" : "Ver Casos de Éxito"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
