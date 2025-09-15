"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Cloud, Database, CheckCircle, ArrowRight, Lock, Globe, Settings } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function EnterpriseIntegrationPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Enterprise Integration",
      title: "Seamless AI Integration for Enterprise Systems",
      subtitle:
        "Connect AI solutions with your existing infrastructure through secure, scalable integrations that ensure business continuity and maximize ROI.",
      cta: "Start Integration",
      demo: "Schedule Consultation",
      features: [
        {
          icon: Database,
          title: "Legacy System Integration",
          description: "Connect AI solutions with existing ERP, CRM, and database systems without disruption.",
        },
        {
          icon: Cloud,
          title: "API Development",
          description: "Custom APIs and microservices for seamless data flow between systems.",
        },
        {
          icon: Shield,
          title: "Cloud Migration",
          description: "Secure migration to cloud infrastructure with enterprise-grade security and compliance.",
        },
        {
          icon: Lock,
          title: "Security Compliance",
          description: "SOC 2, GDPR, and industry-specific compliance with end-to-end encryption.",
        },
        {
          icon: Globe,
          title: "Scalable Architecture",
          description: "Future-proof architecture that grows with your business needs and user base.",
        },
        {
          icon: Settings,
          title: "System Monitoring",
          description: "24/7 monitoring, alerting, and maintenance for optimal system performance.",
        },
      ],
      benefits: {
        title: "Enterprise-Grade Results",
        subtitle:
          "Our integration solutions deliver the reliability and performance that enterprise businesses demand.",
        metrics: [
          { value: "99.9%", label: "System Uptime" },
          { value: "Zero", label: "Downtime Deployment" },
          { value: "24/7", label: "Technical Support" },
          { value: "SOC 2", label: "Security Compliance" },
        ],
      },
      integrationTypes: {
        title: "Integration Solutions",
        subtitle: "Comprehensive integration services for all enterprise systems and platforms.",
        types: [
          {
            title: "ERP Integration",
            description: "Connect AI solutions with SAP, Oracle, Microsoft Dynamics, and other ERP systems.",
            benefits: ["Real-time data sync", "Automated workflows", "Custom reporting"],
          },
          {
            title: "CRM Integration",
            description: "Seamless integration with Salesforce, HubSpot, and custom CRM platforms.",
            benefits: ["Enhanced customer insights", "Automated lead scoring", "Personalized experiences"],
          },
          {
            title: "Database Integration",
            description: "Connect with SQL Server, PostgreSQL, MongoDB, and cloud databases.",
            benefits: ["Data consistency", "Real-time analytics", "Automated backups"],
          },
          {
            title: "Cloud Platform Integration",
            description: "Integration with AWS, Azure, Google Cloud, and hybrid cloud environments.",
            benefits: ["Scalable infrastructure", "Cost optimization", "Global availability"],
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Common questions about our enterprise integration services.",
        questions: [
          {
            question: "How do you ensure zero downtime during integration?",
            answer:
              "We use blue-green deployment strategies, comprehensive testing environments, and phased rollouts to ensure your systems remain operational throughout the integration process.",
          },
          {
            question: "What security measures are in place for enterprise integrations?",
            answer:
              "We implement SOC 2 compliance, end-to-end encryption, VPN connections, role-based access controls, and regular security audits to protect your enterprise data.",
          },
          {
            question: "Can you integrate with our legacy systems?",
            answer:
              "Yes, we specialize in legacy system integration using modern APIs, middleware solutions, and custom connectors to bridge old and new technologies seamlessly.",
          },
          {
            question: "How long does a typical enterprise integration take?",
            answer:
              "Enterprise integrations typically take 4-12 weeks depending on complexity, number of systems, and customization requirements. We provide detailed project timelines upfront.",
          },
          {
            question: "What ongoing support do you provide after integration?",
            answer:
              "We offer 24/7 monitoring, regular maintenance, security updates, performance optimization, and dedicated technical support to ensure continuous operation.",
          },
        ],
      },
    },
    es: {
      badge: "Integración Empresarial",
      title: "Integración Perfecta de IA para Sistemas Empresariales",
      subtitle:
        "Conecta soluciones de IA con tu infraestructura existente a través de integraciones seguras y escalables que aseguran continuidad empresarial y maximizan el ROI.",
      cta: "Iniciar Integración",
      demo: "Programar Consulta",
      features: [
        {
          icon: Database,
          title: "Integración de Sistemas Legacy",
          description: "Conecta soluciones de IA con sistemas ERP, CRM y bases de datos existentes sin interrupciones.",
        },
        {
          icon: Cloud,
          title: "Desarrollo de APIs",
          description: "APIs personalizadas y microservicios para flujo de datos perfecto entre sistemas.",
        },
        {
          icon: Shield,
          title: "Migración a la Nube",
          description:
            "Migración segura a infraestructura en la nube con seguridad y cumplimiento de nivel empresarial.",
        },
        {
          icon: Lock,
          title: "Cumplimiento de Seguridad",
          description: "SOC 2, GDPR y cumplimiento específico de la industria con encriptación de extremo a extremo.",
        },
        {
          icon: Globe,
          title: "Arquitectura Escalable",
          description:
            "Arquitectura a prueba de futuro que crece con las necesidades de tu negocio y base de usuarios.",
        },
        {
          icon: Settings,
          title: "Monitoreo de Sistemas",
          description: "Monitoreo, alertas y mantenimiento 24/7 para rendimiento óptimo del sistema.",
        },
      ],
      benefits: {
        title: "Resultados de Nivel Empresarial",
        subtitle:
          "Nuestras soluciones de integración entregan la confiabilidad y rendimiento que las empresas demandan.",
        metrics: [
          { value: "99.9%", label: "Tiempo de Actividad del Sistema" },
          { value: "Cero", label: "Despliegue sin Tiempo de Inactividad" },
          { value: "24/7", label: "Soporte Técnico" },
          { value: "SOC 2", label: "Cumplimiento de Seguridad" },
        ],
      },
      integrationTypes: {
        title: "Soluciones de Integración",
        subtitle: "Servicios de integración integral para todos los sistemas y plataformas empresariales.",
        types: [
          {
            title: "Integración ERP",
            description: "Conecta soluciones de IA con SAP, Oracle, Microsoft Dynamics y otros sistemas ERP.",
            benefits: [
              "Sincronización de datos en tiempo real",
              "Flujos de trabajo automatizados",
              "Reportes personalizados",
            ],
          },
          {
            title: "Integración CRM",
            description: "Integración perfecta con Salesforce, HubSpot y plataformas CRM personalizadas.",
            benefits: [
              "Insights mejorados del cliente",
              "Puntuación automatizada de leads",
              "Experiencias personalizadas",
            ],
          },
          {
            title: "Integración de Bases de Datos",
            description: "Conecta con SQL Server, PostgreSQL, MongoDB y bases de datos en la nube.",
            benefits: ["Consistencia de datos", "Análisis en tiempo real", "Respaldos automatizados"],
          },
          {
            title: "Integración de Plataformas en la Nube",
            description: "Integración con AWS, Azure, Google Cloud y entornos de nube híbrida.",
            benefits: ["Infraestructura escalable", "Optimización de costos", "Disponibilidad global"],
          },
        ],
      },
      faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Preguntas comunes sobre nuestros servicios de integración empresarial.",
        questions: [
          {
            question: "¿Cómo aseguran cero tiempo de inactividad durante la integración?",
            answer:
              "Usamos estrategias de despliegue blue-green, entornos de prueba exhaustivos y lanzamientos por fases para asegurar que tus sistemas permanezcan operativos durante todo el proceso de integración.",
          },
          {
            question: "¿Qué medidas de seguridad están en lugar para integraciones empresariales?",
            answer:
              "Implementamos cumplimiento SOC 2, encriptación de extremo a extremo, conexiones VPN, controles de acceso basados en roles y auditorías de seguridad regulares para proteger tus datos empresariales.",
          },
          {
            question: "¿Pueden integrar con nuestros sistemas legacy?",
            answer:
              "Sí, nos especializamos en integración de sistemas legacy usando APIs modernas, soluciones de middleware y conectores personalizados para unir tecnologías antiguas y nuevas sin problemas.",
          },
          {
            question: "¿Cuánto tiempo toma una integración empresarial típica?",
            answer:
              "Las integraciones empresariales típicamente toman 4-12 semanas dependiendo de la complejidad, número de sistemas y requisitos de personalización. Proporcionamos cronogramas detallados del proyecto por adelantado.",
          },
          {
            question: "¿Qué soporte continuo proporcionan después de la integración?",
            answer:
              "Ofrecemos monitoreo 24/7, mantenimiento regular, actualizaciones de seguridad, optimización de rendimiento y soporte técnico dedicado para asegurar operación continua.",
          },
        ],
      },
    },
  }

  const t = content[language]

  const whatsappMessage =
    language === "es"
      ? "Hola, me interesa integrar IA con nuestros sistemas empresariales"
      : "Hello, I'm interested in integrating AI with our enterprise systems"

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

      {/* Integration Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.integrationTypes.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.integrationTypes.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.integrationTypes.types.map((type, index) => (
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
            {language === "es" ? "¿Listo para Integrar?" : "Ready to Integrate?"}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            {language === "es"
              ? "Conecta tus sistemas empresariales con IA de manera segura y eficiente."
              : "Connect your enterprise systems with AI securely and efficiently."}
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
