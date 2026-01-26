import { Badge } from "@/components/ui/badge"
import { Bot, Workflow, Building2 } from "lucide-react"
import { ServicesSection } from "@/components/landing/services-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { FAQSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de N3uralia | Agentes IA y Automatización",
  description: "Agentes inteligentes, automatización empresarial y plataformas personalizadas para tu negocio.",
}

const services = [
  {
    icon: Bot,
    title: "Agentes en Producción",
    description:
      "IA que trabaja dentro de tu infraestructura. Resuelve problemas reales en paralelo. Integración total con tus sistemas. Sin APIs externas, sin dependencias.",
    features: ["Multi-agente coordinado", "Integración nativa", "Escalabilidad", "24/7 operativo"],
    benefits: [
      "Resuelve problemas en paralelo",
      "Sin latencia de APIs externas",
      "Tu stack, tu control",
      "Confiabilidad empresarial",
    ],
    href: "/ai-agent-development",
  },
  {
    icon: Workflow,
    title: "Automatización que Funciona",
    description:
      "Procesos que ejecutan solos dentro de tu workflow. No fake automation. Integración real con tus bases de datos, APIs y servicios.",
    features: ["Workflows reales", "Integración total", "Monitoreo continuo", "Alertas inteligentes"],
    benefits: [
      "Tareas manuales = automatizadas",
      "Precisión al 99.99%",
      "Horas ahorradas documentadas",
      "ROI medible en semanas",
    ],
    href: "/process-automation",
  },
  {
    icon: Building2,
    title: "Plataformas Full-Stack",
    description:
      "Backend + IA integrados desde el arquitecto. No templates. No compromisos. Infraestructura que escala. Código limpio. Deploy listo.",
    features: ["Desarrollo full-stack", "Arquitectura productiva", "Seguridad empresarial", "DevOps incluido"],
    benefits: [
      "Construido para tu caso específico",
      "Sin deuda técnica inicial",
      "Deploy en semanas",
      "Escalable a millones de requests",
    ],
    href: "/enterprise-integration",
  },
]

const processSteps = [
  {
    step: "1",
    title: "Diagnosis Técnico",
    description:
      "Evaluamos tu stack, tus pain points, qué necesita IA. Sin fluff. Propuesta concreta.",
  },
  {
    step: "2",
    title: "Arquitectura + Diseño",
    description: "Diseño de sistema que funciona dentro de tu infraestructura. Code review completo. Aprobación antes de desarrollar.",
  },
  {
    step: "3",
    title: "Desarrollo + Testing",
    description:
      "Construcción iterativa con testing continuo. Integración temprana con tus sistemas. Sin sorpresas en producción.",
  },
  {
    step: "4",
    title: "Deploy + Operación",
    description: "Lanzamiento a producción. Monitoreo 24/7. Optimización continua. Estamos aquí si algo falla.",
  },
]

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 pt-32 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
            >
              Qué Ofrecemos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Lo Que Construimos Para Ti</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              No vendemos soluciones genéricas. Construimos lo que tu negocio necesita: sistemas inteligentes que funcionan, que escalan, y que crecen contigo.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesSection services={services} learnMore="Conocer Más" getStarted="Comenzar" />

      {/* Process Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Cómo Trabajamos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">No creemos en soluciones de caja. Creemos en asociaciones que funcionan.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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
