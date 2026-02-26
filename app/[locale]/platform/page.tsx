import Link from "next/link"
import { ArrowRight, Zap, Lock, Layers, Cpu } from "lucide-react"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Metadata } from "next"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'

  const titles = {
    es: "Platform - Arquitectura de Sistemas Agenticos | N3uralia",
    en: "Platform - Agentic Systems Architecture | N3uralia",
  }

  const descriptions = {
    es: "Explore la plataforma N3uralia: Nodes, Patterns, Security e infraestructura completa para sistemas agenticos",
    en: "Explore the N3uralia platform: Nodes, Patterns, Security, and complete agentic systems infrastructure",
  }

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
  }
}

export default function PlatformPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'
  const href = (path: string) => `/${locale}${path}`

  const sections = [
    {
      titleES: "Nodes",
      titleEN: "Nodes",
      descriptionES: "Nodos de agentes distribuidos que se comunican, colaboran y evolucionan de manera independiente manteniendo coordinación.",
      descriptionEN: "Distributed agent nodes that communicate, collaborate, and evolve independently while maintaining coordination.",
      icon: Cpu,
      hrefPath: "/platform/nodes",
      featuresES: ["Agentes autónomos", "Paso de mensajes", "Auto-reparación"],
      featuresEN: ["Autonomous agents", "Message passing", "Self-healing"]
    },
    {
      titleES: "Patterns",
      titleEN: "Patterns",
      descriptionES: "Patrones de diseño probados para sistemas agenticos. Planos reutilizables para orquestación, memoria y toma de decisiones.",
      descriptionEN: "Proven design patterns for agentic systems. Reusable blueprints for orchestration, memory, and decision-making.",
      icon: Layers,
      hrefPath: "/platform/patterns",
      featuresES: ["Orquestación", "Sistemas de memoria", "Marcos de decisión"],
      featuresEN: ["Orchestration", "Memory systems", "Decision frameworks"]
    },
    {
      titleES: "Seguridad y Gobernanza",
      titleEN: "Security & Governance",
      descriptionES: "Seguridad empresarial con gobernanza integrada, registros de auditoría y control de acceso para operaciones agenticas.",
      descriptionEN: "Enterprise-grade security with built-in governance, audit trails, and access control for agentic operations.",
      icon: Lock,
      hrefPath: "/platform/security",
      featuresES: ["Control de acceso", "Registros de auditoría", "Listo para cumplimiento"],
      featuresEN: ["Access control", "Audit logs", "Compliance ready"]
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {isES ? "Arquitectura de Plataforma" : "Platform Architecture"}
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-balance">
            {isES 
              ? "La Base de los Sistemas Agenticos" 
              : "The Foundation of Agentic Systems"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isES
              ? "La Plataforma N3uralia proporciona la infraestructura completa para construir, desplegar y escalar sistemas agenticos en producción."
              : "N3uralia Platform provides the complete infrastructure for building, deploying, and scaling agentic systems in production."}
          </p>
        </div>
      </section>

      {/* Platform Sections */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Link 
                  key={section.titleEN} 
                  href={href(section.hrefPath)}
                  className="group p-8 rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">
                    {isES ? section.titleES : section.titleEN}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {isES ? section.descriptionES : section.descriptionEN}
                  </p>
                  <div className="space-y-2">
                    {(isES ? section.featuresES : section.featuresEN).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isES ? "¿Listo para construir?" : "Ready to build?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {isES
              ? "Comienza con la Plataforma N3uralia hoy"
              : "Start with N3uralia Platform today"}
          </p>
          <Link 
            href={href("/contact")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            {isES ? "Contactar" : "Contact Us"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
