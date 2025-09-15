"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Workflow, Zap, BarChart3, Shield, CheckCircle, ArrowRight, Database, AlertCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ProcessAutomationPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Process Automation",
      title: "Intelligent Automation That Transforms Operations",
      subtitle:
        "Streamline workflows, eliminate repetitive tasks, and boost productivity with AI-powered process automation that adapts to your business needs.",
      cta: "Automate Your Processes",
      demo: "See Demo",
      features: [
        {
          icon: Workflow,
          title: "Workflow Optimization",
          description: "Analyze and optimize existing workflows to eliminate bottlenecks and improve efficiency.",
        },
        {
          icon: Zap,
          title: "Task Automation",
          description: "Automate repetitive tasks across departments with intelligent rule-based systems.",
        },
        {
          icon: Database,
          title: "Data Processing",
          description: "Automated data collection, validation, and processing with real-time accuracy.",
        },
        {
          icon: Shield,
          title: "Quality Assurance",
          description: "Built-in quality checks and error detection to maintain high standards.",
        },
        {
          icon: BarChart3,
          title: "Performance Monitoring",
          description: "Real-time monitoring and analytics to track automation performance and ROI.",
        },
        {
          icon: AlertCircle,
          title: "Smart Alerts",
          description: "Intelligent notification system for exceptions and critical process events.",
        },
      ],
      benefits: {
        title: "Measurable Efficiency Gains",
        subtitle: "Our automation solutions deliver quantifiable improvements in productivity and cost reduction.",
        metrics: [
          { value: "70%", label: "Reduction in Manual Tasks" },
          { value: "99.9%", label: "Processing Accuracy" },
          { value: "40+", label: "Hours Saved Weekly" },
          { value: "24/7", label: "Continuous Operation" },
        ],
      },
      automationTypes: {
        title: "Automation Solutions",
        subtitle: "Comprehensive automation across all business functions and departments.",
        types: [
          {
            title: "Document Processing",
            description: "Automate document creation, review, approval workflows, and digital archiving.",
            benefits: ["90% faster processing", "Reduced errors", "Compliance tracking"],
          },
          {
            title: "Data Entry & Migration",
            description: "Eliminate manual data entry with intelligent extraction and validation systems.",
            benefits: ["Zero data entry errors", "Real-time validation", "Seamless integration"],
          },
          {
            title: "Report Generation",
            description: "Automated report creation, distribution, and scheduling across all departments.",
            benefits: ["Daily automated reports", "Custom formatting", "Multi-channel delivery"],
          },
          {
            title: "Customer Onboarding",
            description: "Streamline customer registration, verification, and account setup processes.",
            benefits: ["50% faster onboarding", "Improved experience", "Compliance automation"],
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Common questions about our process automation solutions.",
        questions: [
          {
            question: "Which processes can be automated in my business?",
            answer:
              "Almost any repetitive, rule-based process can be automated including data entry, document processing, report generation, customer onboarding, inventory management, and approval workflows.",
          },
          {
            question: "How long does it take to implement process automation?",
            answer:
              "Simple automations can be deployed within 1-2 weeks, while complex enterprise workflows may take 3-6 weeks. We provide a detailed timeline after analyzing your specific processes.",
          },
          {
            question: "Will automation integrate with our existing systems?",
            answer:
              "Yes, our automation solutions integrate with most existing systems including ERP, CRM, databases, and cloud applications through APIs and custom connectors.",
          },
          {
            question: "What happens if an automated process encounters an error?",
            answer:
              "Our systems include intelligent error handling with automatic retry mechanisms, exception routing to human operators, and detailed logging for troubleshooting.",
          },
          {
            question: "How do you measure the ROI of process automation?",
            answer:
              "We track metrics like time saved, error reduction, cost savings, and productivity improvements. Most clients see ROI within 3-6 months of implementation.",
          },
        ],
      },
    },
    es: {
      badge: "Automatización de Procesos",
      title: "Automatización Inteligente Que Transforma Operaciones",
      subtitle:
        "Optimiza flujos de trabajo, elimina tareas repetitivas y aumenta la productividad con automatización de procesos impulsada por IA que se adapta a las necesidades de tu negocio.",
      cta: "Automatiza Tus Procesos",
      demo: "Ver Demo",
      features: [
        {
          icon: Workflow,
          title: "Optimización de Flujos",
          description:
            "Analiza y optimiza flujos de trabajo existentes para eliminar cuellos de botella y mejorar eficiencia.",
        },
        {
          icon: Zap,
          title: "Automatización de Tareas",
          description:
            "Automatiza tareas repetitivas en todos los departamentos con sistemas inteligentes basados en reglas.",
        },
        {
          icon: Database,
          title: "Procesamiento de Datos",
          description: "Recolección, validación y procesamiento automatizado de datos con precisión en tiempo real.",
        },
        {
          icon: Shield,
          title: "Control de Calidad",
          description: "Controles de calidad integrados y detección de errores para mantener altos estándares.",
        },
        {
          icon: BarChart3,
          title: "Monitoreo de Rendimiento",
          description: "Monitoreo en tiempo real y análisis para rastrear el rendimiento de automatización y ROI.",
        },
        {
          icon: AlertCircle,
          title: "Alertas Inteligentes",
          description: "Sistema de notificación inteligente para excepciones y eventos críticos de procesos.",
        },
      ],
      benefits: {
        title: "Ganancias de Eficiencia Medibles",
        subtitle:
          "Nuestras soluciones de automatización entregan mejoras cuantificables en productividad y reducción de costos.",
        metrics: [
          { value: "70%", label: "Reducción en Tareas Manuales" },
          { value: "99.9%", label: "Precisión de Procesamiento" },
          { value: "40+", label: "Horas Ahorradas Semanalmente" },
          { value: "24/7", label: "Operación Continua" },
        ],
      },
      automationTypes: {
        title: "Soluciones de Automatización",
        subtitle: "Automatización integral en todas las funciones y departamentos empresariales.",
        types: [
          {
            title: "Procesamiento de Documentos",
            description: "Automatiza creación de documentos, revisión, flujos de aprobación y archivo digital.",
            benefits: ["90% procesamiento más rápido", "Errores reducidos", "Seguimiento de cumplimiento"],
          },
          {
            title: "Entrada y Migración de Datos",
            description: "Elimina entrada manual de datos con sistemas inteligentes de extracción y validación.",
            benefits: ["Cero errores de entrada de datos", "Validación en tiempo real", "Integración perfecta"],
          },
          {
            title: "Generación de Reportes",
            description: "Creación, distribución y programación automatizada de reportes en todos los departamentos.",
            benefits: ["Reportes automatizados diarios", "Formato personalizado", "Entrega multicanal"],
          },
          {
            title: "Incorporación de Clientes",
            description: "Optimiza procesos de registro, verificación y configuración de cuentas de clientes.",
            benefits: ["50% incorporación más rápida", "Experiencia mejorada", "Automatización de cumplimiento"],
          },
        ],
      },
      faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Preguntas comunes sobre nuestras soluciones de automatización de procesos.",
        questions: [
          {
            question: "¿Qué procesos pueden automatizarse en mi negocio?",
            answer:
              "Casi cualquier proceso repetitivo basado en reglas puede automatizarse incluyendo entrada de datos, procesamiento de documentos, generación de reportes, incorporación de clientes, gestión de inventario y flujos de aprobación.",
          },
          {
            question: "¿Cuánto tiempo toma implementar automatización de procesos?",
            answer:
              "Las automatizaciones simples pueden desplegarse en 1-2 semanas, mientras que los flujos de trabajo empresariales complejos pueden tomar 3-6 semanas. Proporcionamos un cronograma detallado después de analizar tus procesos específicos.",
          },
          {
            question: "¿Se integrará la automatización con nuestros sistemas existentes?",
            answer:
              "Sí, nuestras soluciones de automatización se integran con la mayoría de sistemas existentes incluyendo ERP, CRM, bases de datos y aplicaciones en la nube a través de APIs y conectores personalizados.",
          },
          {
            question: "¿Qué pasa si un proceso automatizado encuentra un error?",
            answer:
              "Nuestros sistemas incluyen manejo inteligente de errores con mecanismos de reintento automático, enrutamiento de excepciones a operadores humanos y registro detallado para solución de problemas.",
          },
          {
            question: "¿Cómo miden el ROI de la automatización de procesos?",
            answer:
              "Rastreamos métricas como tiempo ahorrado, reducción de errores, ahorro de costos y mejoras de productividad. La mayoría de clientes ven ROI dentro de 3-6 meses de implementación.",
          },
        ],
      },
    },
  }

  const t = content[language]

  const whatsappMessage =
    language === "es"
      ? "Hola, me interesa automatizar procesos en mi empresa con IA"
      : "Hello, I'm interested in automating business processes with AI"

  const whatsappUrl = `https://wa.me/56944444649?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10"
            >
              {t.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">{t.title}</h1>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">{t.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {t.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                {t.demo}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.benefits.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.benefits.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {t.benefits.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-black mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.automationTypes.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.automationTypes.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.automationTypes.types.map((type, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-black transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-black mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.faq.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.faq.subtitle}</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.questions.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 hover:border-black transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-black hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {language === "es" ? "¿Listo para Automatizar?" : "Ready to Automate?"}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            {language === "es"
              ? "Transforma tus operaciones hoy y experimenta el poder de la automatización inteligente."
              : "Transform your operations today and experience the power of intelligent automation."}
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
