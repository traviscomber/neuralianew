import type { Locale } from "@/content/dictionaries"
import { Building2, Users, Zap, Shield } from "lucide-react"

export function WhoWeAreSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  const pillars = isES
    ? [
        {
          icon: Building2,
          title: "Sistemas para operaciones reales",
          description: "Diseñamos software, automatización e IA alrededor de procesos, datos y responsabilidades concretas.",
        },
        {
          icon: Users,
          title: "Contexto local",
          description: "Construimos desde Chile para equipos que operan en Chile y LATAM, con integración y adopción como parte del trabajo.",
        },
        {
          icon: Zap,
          title: "Velocidad con control",
          description: "Trabajamos por entregas verificables, con pruebas, observabilidad y gates de release acordes a la criticidad del sistema.",
        },
        {
          icon: Shield,
          title: "Arquitectura transferible",
          description: "Priorizamos documentación, trazabilidad y ownership claro para reducir dependencia innecesaria del proveedor.",
        },
      ]
    : [
        {
          icon: Building2,
          title: "Systems for real operations",
          description: "We design software, automation and AI around concrete processes, data and accountabilities.",
        },
        {
          icon: Users,
          title: "Local context",
          description: "We build from Chile for teams operating across Chile and LATAM, treating integration and adoption as part of the work.",
        },
        {
          icon: Zap,
          title: "Speed with control",
          description: "We work through verifiable deliveries, with testing, observability and release gates appropriate to system criticality.",
        },
        {
          icon: Shield,
          title: "Transferable architecture",
          description: "We prioritize documentation, traceability and clear ownership to reduce unnecessary vendor dependency.",
        },
      ]

  const controls = isES
    ? [
        ["ACCESO", "Roles y permisos definidos por proyecto"],
        ["TRAZAS", "Evidencia y cambios revisables"],
        ["PRIVACIDAD", "Controles según datos, arquitectura y requisitos"],
      ]
    : [
        ["ACCESS", "Roles and permissions defined per project"],
        ["TRACEABILITY", "Reviewable evidence and changes"],
        ["PRIVACY", "Controls based on data, architecture and requirements"],
      ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 mb-6 bg-primary/5">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{isES ? "Quiénes Somos" : "Who We Are"}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {isES ? "Construimos infraestructura, no ilusiones" : "We build infrastructure, not illusions"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isES
              ? "Arquitectura, datos, automatización e IA conectados a operaciones que deben seguir funcionando después de la demo."
              : "Architecture, data, automation and AI connected to operations that must keep working after the demo."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-primary/5 border border-primary/20 p-8">
          <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
            {isES ? "Controles de confianza" : "Trust controls"}
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm text-muted-foreground">
            {isES
              ? "Los requisitos regulatorios y certificaciones se declaran sólo cuando corresponden al proyecto o han sido verificados para N3uralia."
              : "Regulatory requirements and certifications are stated only when they apply to the project or have been verified for N3uralia."}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {controls.map(([title, description]) => (
              <div key={title} className="text-center p-4">
                <div className="text-lg font-bold text-primary mb-2">{title}</div>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            {isES ? "¿Quieres revisar arquitectura, seguridad o controles para tu caso?" : "Want to review architecture, security or controls for your use case?"}
          </p>
        </div>
      </div>
    </section>
  )
}
