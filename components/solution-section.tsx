import type { Locale } from "@/lib/get-locale"
import { getDict } from "@/content/dictionaries"
import { CheckCircle2, Zap, Lock, TrendingUp } from "lucide-react"

export function SolutionSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"
  const d = getDict(locale)

  const solutions = [
    {
      icon: Zap,
      feature: isES ? "Interfaces, backend y APIs listas" : "Production-ready interfaces and APIs",
      benefit: isES 
        ? "Tu equipo trabaja desde el día 1, sin 6 meses de 'customización'"
        : "Your team works from day 1, not 6 months of 'customization'",
    },
    {
      icon: TrendingUp,
      feature: isES ? "Agentes conectados a tus sistemas reales" : "Agents connected to your real systems",
      benefit: isES
        ? "Salesforce, Oracle, bases de datos internas—tus datos, tus reglas, tus decisiones"
        : "Salesforce, Oracle, internal databases—your data, your rules, your decisions",
    },
    {
      icon: Lock,
      feature: isES ? "Auditoría, seguridad y checkpoints humanos" : "Audit, security, human checkpoints",
      benefit: isES
        ? "Una compra de $50K? Aprobada por tu equipo. Un email? El agente lo maneja. Tú controlas el umbral."
        : "A $50K purchase? Your team approves it. An email? Agent handles it. You set the threshold.",
    },
    {
      icon: CheckCircle2,
      feature: isES ? "Arquitectura agnóstica sin lock-in" : "Vendor-agnostic architecture",
      benefit: isES
        ? "Tu equipo entiende el sistema. Si nos dejas, te llevas tu automatización. Tu infraestructura, siempre tuya."
        : "Your team understands the system. If you leave, you keep your automation. Your infrastructure, always yours.",
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 mb-6 bg-primary/5">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {isES ? "Cómo N3uralia Funciona" : "How N3uralia Works"}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            {isES 
              ? "Automatización que tu equipo controla"
              : "Automation your team controls"}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            {isES 
              ? "No reemplazamos gente. Ampliamos capacidad. Tu equipo sigue siendo el jefe. Los agentes hacen el trabajo tedioso. Tú haces las decisiones que importan."
              : "We don't replace people. We expand capacity. Your team stays in charge. Agents do the tedious work. You make the decisions that matter."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.feature}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.benefit}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Message */}
        <div className="mt-16 p-8 rounded-lg border border-primary/20 bg-primary/5">
          <p className="text-center text-lg text-foreground">
            {isES
              ? "La diferencia: No vas a batallar por 12 meses implementando. Vas a estar en producción en 4 semanas, con tu equipo en control total."
              : "The difference: You won't struggle for 12 months implementing. You'll be in production in 4 weeks, with your team in total control."}
          </p>
        </div>
      </div>
    </section>
  )
}
