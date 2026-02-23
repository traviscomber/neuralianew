import { ArrowRight, Brain, Zap, Shield } from "lucide-react"

export function ValueProposition() {
  const steps = [
    {
      icon: Brain,
      title: "Qué Hacemos",
      description: "Construimos sistemas de IA empresarial que automatizan procesos complejos y toman decisiones inteligentes en tiempo real.",
      color: "bg-primary/10",
    },
    {
      icon: Zap,
      title: "Cómo Lo Hacemos",
      description: "Combinamos arquitectura multi-agente, integración con sistemas existentes e infraestructura cloud listos para escalar desde el primer día.",
      color: "bg-primary/5",
    },
    {
      icon: Shield,
      title: "Por Qué Importa",
      description: "Reduces costos operacionales, aceleras decisiones críticas y tu equipo enfoca tiempo en lo estratégico en lugar de tareas repetitivas.",
      color: "bg-primary/10",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">La Ventaja N3uralia</h2>
          <p className="text-lg text-muted-foreground">En simple: automatización inteligente que realmente funciona en tu empresa.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="relative">
                {/* Arrow between cards (hidden on mobile) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}

                <div className={`h-full rounded-lg p-8 border border-border ${step.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
