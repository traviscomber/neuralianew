import type { Locale } from "@/content/dictionaries"
import { Building2, Users, Zap, Shield } from "lucide-react"

export function WhoWeAreSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  const pillars = isES
    ? [
        {
          icon: Building2,
          title: "12 años construyendo sistemas",
          description: "Desde 2014 implementamos infraestructura de IA en empresas reales. No teóricos. Operativo.",
        },
        {
          icon: Users,
          title: "Team local que entiende Chile",
          description: "Fundadores con 15+ años en operaciones de empresa. Hablamos el idioma de CFO, Ops Manager y COO.",
        },
        {
          icon: Zap,
          title: "Velocidad sin sacrificar control",
          description: "4 semanas a producción sin sacrificar auditoría, seguridad o la capacidad de tu equipo de entender qué está pasando.",
        },
        {
          icon: Shield,
          title: "Tu infraestructura, siempre tuya",
          description: "No construimos lock-in. Si nos dejas, te llevas tu automatización. SOC 2, ISO 27001, GDPR compliant.",
        },
      ]
    : [
        {
          icon: Building2,
          title: "12 years building systems",
          description: "Since 2014 we implement AI infrastructure in real companies. Not theoretical. Operational.",
        },
        {
          icon: Users,
          title: "Local team that understands Chile",
          description: "Founders with 15+ years in enterprise operations. We speak the language of CFOs, Ops Managers, and COOs.",
        },
        {
          icon: Zap,
          title: "Speed without sacrificing control",
          description: "4 weeks to production without sacrificing audit, security, or your team's ability to understand what's happening.",
        },
        {
          icon: Shield,
          title: "Your infrastructure, always yours",
          description: "We don't build lock-in. If you leave, you take your automation. SOC 2, ISO 27001, GDPR compliant.",
        },
      ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 mb-6 bg-primary/5">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {isES ? "Quiénes Somos" : "Who We Are"}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {isES 
              ? "Construimos infraestructura, no ilusiones"
              : "We build infrastructure, not illusions"}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isES
              ? "12 años implementando IA en operaciones reales. Fundadores que entienden tu negocio. Equipo que quiere que triunfes."
              : "12 years implementing AI in real operations. Founders who understand your business. Team that wants you to succeed."}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Badges */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            {isES ? "Certificaciones y Cumplimiento" : "Certifications & Compliance"}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-2">SOC 2</div>
              <p className="text-sm text-muted-foreground">
                {isES ? "Seguridad y confidencialidad auditadas" : "Security & confidentiality audited"}
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-2">ISO 27001</div>
              <p className="text-sm text-muted-foreground">
                {isES ? "Gestión de información segura" : "Information security management"}
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-2">GDPR</div>
              <p className="text-sm text-muted-foreground">
                {isES ? "Privacidad de datos garantizada" : "Data privacy guaranteed"}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            {isES
              ? "¿Quieres hablar con nuestro equipo sobre tu situación específica?"
              : "Want to talk with our team about your specific situation?"}
          </p>
        </div>
      </div>
    </section>
  )
}
