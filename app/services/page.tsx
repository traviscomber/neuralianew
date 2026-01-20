"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Workflow, Building2, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { ServicesSection } from "@/components/landing/services-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { FAQSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"

export default function ServicesPage() {
  const { language } = useLanguage()

  const content = {
    es: {
      badge: "Qué Ofrecemos",
      title: "Lo Que Construimos Para Ti",
      subtitle:
        "No vendemos soluciones genéricas. Construimos lo que tu negocio necesita: sistemas inteligentes que funcionan, que escalan, y que crecen contigo.",
      services: [
        {
          icon: Bot,
          title: "Agentes Inteligentes",
          description:
            "Bots que entienden tu negocio. Atienden clientes 24/7, resuelven problemas, aprenden con cada interacción. Tu servicio al cliente, automatizado.",
          features: ["Conversación Natural", "Multi-canal", "Aprendizaje Continuo", "Escalada Humana"],
          benefits: [
            "Clientes felices día y noche",
            "Menos tickets repetidos",
            "Respuestas en segundos",
            "Tus reglas, tus datos",
          ],
          href: "/ai-agent-development",
        },
        {
          icon: Workflow,
          title: "Automatización Inteligente",
          description:
            "Procesos que se hacen solos. Menos errores. Menos tiempo gastado en lo repetitivo. Más tiempo en lo que importa.",
          features: ["Flujos Optimizados", "Sin Errores Humanos", "Integración Total", "Monitoreo Real"],
          benefits: [
            "Tareas manuales que desaparecen",
            "Precisión al 99.9%",
            "Horas ahorradas cada semana",
            "Alertas cuando importa",
          ],
          href: "/process-automation",
        },
        {
          icon: Building2,
          title: "Plataformas Personalizadas",
          description:
            "Tu visión, hecha realidad. Desarrollo full-stack con IA integrada desde el día uno. No templates. No compromisos. Tu solución.",
          features: ["Desarrollo Personalizado", "Arquitectura Robusta", "Integración Perfecta", "Seguridad Empresarial"],
          benefits: [
            "Construido para tu negocio",
            "Sin deudas técnicas",
            "Lanzamiento rápido",
            "Soporte 24/7 local",
          ],
          href: "/enterprise-integration",
        },
      ],
      learnMore: "Conocer Más",
      getStarted: "Comenzar",
      whyChoose: "Por Qué N3uralia",
      whyChooseDesc: "No creemos en soluciones de caja. Creemos en asociaciones que funcionan.",
      processTitle: "Cómo Trabajamos",
      processSteps: [
        {
          step: "1",
          title: "Te Escuchamos",
          description:
            "Charla sin presión. Entendemos qué quieres lograr, dónde están tus pain points, qué es lo urgente.",
        },
        {
          step: "2",
          title: "Construimos",
          description: "Nuestro equipo diseña y desarrolla tu solución. Iteramos rápido, enseñamos en el proceso, adaptamos sobre la marcha.",
        },
        {
          step: "3",
          title: "Integration & Testing",
          description:
            "Seamless integration with your existing systems followed by comprehensive testing and optimization.",
        },
        {
          step: "3",
          title: "Lanzamiento",
          description: "Deploy a producción. Soporte completo, alertas, optimización. Estamos aquí si algo cambia.",
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
    </div>
  )
}
