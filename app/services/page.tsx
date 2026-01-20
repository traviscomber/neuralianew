"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Workflow, Building2, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Navigation from "@/components/navigation"
import { ServicesSection } from "@/components/landing/services-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { FAQSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function ServicesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Our Services",
      title: "Comprehensive AI Solutions for Every Business Need",
      subtitle:
        "Transform your operations with our suite of intelligent AI services designed to drive growth, efficiency, and innovation.",
      services: [
        {
          icon: Bot,
          title: "AI Agent Development",
          description:
            "Custom AI agents that understand your business context and deliver personalized customer experiences across all channels.",
          features: ["Natural Language Processing", "Multi-channel Support", "Custom Training", "Real-time Learning"],
          benefits: [
            "90% faster response times",
            "24/7 customer support",
            "50+ language support",
            "Seamless escalation to humans",
          ],
          href: "/ai-agent-development",
        },
        {
          icon: Workflow,
          title: "Process Automation",
          description:
            "Intelligent automation that streamlines operations, reduces costs, and eliminates repetitive tasks with precision.",
          features: ["Workflow Optimization", "Task Automation", "Data Processing", "Quality Assurance"],
          benefits: [
            "70% reduction in manual tasks",
            "99.9% accuracy in processing",
            "40+ hours saved per week",
            "Real-time monitoring and alerts",
          ],
          href: "/process-automation",
        },
        {
          icon: Building2,
          title: "Enterprise Integration",
          description:
            "Seamless integration with existing systems, ensuring AI solutions work harmoniously with your current infrastructure.",
          features: ["Legacy System Integration", "API Development", "Cloud Migration", "Security Compliance"],
          benefits: [
            "Zero downtime deployment",
            "Enterprise-grade security",
            "Scalable architecture",
            "24/7 technical support",
          ],
          href: "/enterprise-integration",
        },
      ],
      learnMore: "Learn More",
      getStarted: "Get Started",
      whyChoose: "Why Choose Our Services",
      whyChooseDesc: "Our comprehensive approach ensures successful AI implementation with measurable results.",
      processTitle: "Our Implementation Process",
      processSteps: [
        {
          step: "1",
          title: "Discovery & Analysis",
          description:
            "We analyze your business needs and identify the best AI solutions for your specific requirements.",
        },
        {
          step: "2",
          title: "Custom Development",
          description: "Our team develops tailored AI solutions using cutting-edge technology and best practices.",
        },
        {
          step: "3",
          title: "Integration & Testing",
          description:
            "Seamless integration with your existing systems followed by comprehensive testing and optimization.",
        },
        {
          step: "4",
          title: "Launch & Support",
          description: "Go-live support with ongoing monitoring, maintenance, and continuous improvement.",
        },
      ],
    },
    es: {
      badge: "Nuestros Servicios",
      title: "Soluciones Integrales de IA para Cada Necesidad Empresarial",
      subtitle:
        "Transforma tus operaciones con nuestra suite de servicios inteligentes de IA diseñados para impulsar el crecimiento, la eficiencia y la innovación.",
      services: [
        {
          icon: Bot,
          title: "Desarrollo de Agentes de IA",
          description:
            "Agentes de IA personalizados que entienden el contexto de tu negocio y brindan experiencias personalizadas en todos los canales.",
          features: [
            "Procesamiento de Lenguaje Natural",
            "Soporte Multicanal",
            "Entrenamiento Personalizado",
            "Aprendizaje en Tiempo Real",
          ],
          benefits: [
            "90% más rápido en respuestas",
            "Soporte al cliente 24/7",
            "Soporte para más de 50 idiomas",
            "Escalación perfecta a humanos",
          ],
          href: "/ai-agent-development",
        },
        {
          icon: Workflow,
          title: "Automatización de Procesos",
          description:
            "Automatización inteligente que optimiza operaciones, reduce costos y elimina tareas repetitivas con precisión.",
          features: [
            "Optimización de Flujos",
            "Automatización de Tareas",
            "Procesamiento de Datos",
            "Control de Calidad",
          ],
          benefits: [
            "70% reducción en tareas manuales",
            "99.9% precisión en procesamiento",
            "Más de 40 horas ahorradas por semana",
            "Monitoreo y alertas en tiempo real",
          ],
          href: "/process-automation",
        },
        {
          icon: Building2,
          title: "Integración Empresarial",
          description:
            "Integración perfecta con sistemas existentes, asegurando que las soluciones de IA trabajen en armonía con tu infraestructura actual.",
          features: [
            "Integración de Sistemas Legacy",
            "Desarrollo de APIs",
            "Migración a la Nube",
            "Cumplimiento de Seguridad",
          ],
          benefits: [
            "Despliegue sin tiempo de inactividad",
            "Seguridad de nivel empresarial",
            "Arquitectura escalable",
            "Soporte técnico 24/7",
          ],
          href: "/enterprise-integration",
        },
      ],
      learnMore: "Saber Más",
      getStarted: "Comenzar",
      whyChoose: "Por Qué Elegir Nuestros Servicios",
      whyChooseDesc: "Nuestro enfoque integral asegura una implementación exitosa de IA con resultados medibles.",
      processTitle: "Nuestro Proceso de Implementación",
      processSteps: [
        {
          step: "1",
          title: "Descubrimiento y Análisis",
          description:
            "Analizamos las necesidades de tu negocio e identificamos las mejores soluciones de IA para tus requisitos específicos.",
        },
        {
          step: "2",
          title: "Desarrollo Personalizado",
          description:
            "Nuestro equipo desarrolla soluciones de IA a medida usando tecnología de vanguardia y mejores prácticas.",
        },
        {
          step: "3",
          title: "Integración y Pruebas",
          description:
            "Integración perfecta con tus sistemas existentes seguida de pruebas exhaustivas y optimización.",
        },
        {
          step: "4",
          title: "Lanzamiento y Soporte",
          description: "Soporte de lanzamiento con monitoreo continuo, mantenimiento y mejora continua.",
        },
      ],
    },
  }

  const t = content[language]

  const whatsappMessage =
    language === "es"
      ? "Hola, me interesa conocer más sobre los servicios de IA de N3uralia"
      : "Hello, I'm interested in learning more about N3uralia's AI services"

  const whatsappUrl = `https://wa.me/56944444649?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
            >
              {t.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">{t.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesSection services={t.services} learnMore={t.learnMore} getStarted={t.getStarted} />

      {/* Process Section */}
      <section className="py-20 bg-white border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{t.processTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.whyChooseDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {language === "es" ? "¿Listo para Comenzar?" : "Ready to Get Started?"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            {language === "es"
              ? "Únete a cientos de empresas que ya están transformando sus operaciones con nuestras soluciones de IA."
              : "Join hundreds of companies already transforming their operations with our AI solutions."}
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg border border-primary" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t.getStarted}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
