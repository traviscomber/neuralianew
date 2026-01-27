import { Badge } from "@/components/ui/badge"
import { Bot, Workflow, Building2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios Neuralia | Agentes IA, Automatización, Full-Stack",
  description: "Neuralia ofrece agentes en producción, automatización inteligente y plataformas full-stack. Soluciones IA personalizadas para empresas chilenas.",
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
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div key={i} className="border border-border p-8 rounded-lg hover:border-primary/60 transition-all bg-card">
                  <Icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((f, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    {service.benefits.map((b, j) => (
                      <li key={j} className="text-sm text-primary flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

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
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">¿Por Qué N3uralia?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Somos ingenieros, no consultores. Entregamos código que funciona, sistemas que escalan, resultados que importan.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: "¿Cuánto tiempo toma implementar una solución?",
                a: "Diagnosis en 1 semana, arquitectura en 2, desarrollo iterativo de 4-8 semanas, deployment en 1. Según complejidad.",
              },
              {
                q: "¿Necesito cambiar mi infraestructura existente?",
                a: "No. Nuestras soluciones se integran con lo que ya tienes. Trabajamos con tu stack, no contra él.",
              },
              {
                q: "¿Qué soporte ofrecen después del deploy?",
                a: "Monitoreo 24/7, optimización continua, alertas proactivas, y soporte técnico de escala. Locales en Chile.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-border p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">¿Listo para comenzar?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Hablemos sobre tu caso específico. Sin presión, sin BS.</p>
          <a href="/contact" className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Contactar Equipo
          </a>
        </div>
      </section>
    </div>
  )
}
