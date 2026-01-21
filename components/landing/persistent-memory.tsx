"use client"

import { Database, Lock, Zap, History } from "lucide-react"

const memoryFeatures = [
  {
    id: "goals",
    icon: Database,
    title: "Memoria de Objetivos",
    description: "Recuerda tus metas de largo plazo. Todas las decisiones están alineadas con lo que importa.",
    benefit: "Consistencia estratégica",
  },
  {
    id: "style",
    icon: Zap,
    title: "Memoria de Estilo",
    description: "Aprende cómo te gusta trabajar. Tu tono, ritmo y preferencias se personalizan.",
    benefit: "Experiencia adaptativa",
  },
  {
    id: "history",
    icon: History,
    title: "Memoria Contextual",
    description: "Acceso completo a tu historial de decisiones y resultados. Siempre aprende del pasado.",
    benefit: "Mejora continua",
  },
  {
    id: "security",
    icon: Lock,
    title: "Memoria Protegida",
    description: "Tu contexto se almacena de forma segura. Tú controlas qué recuerda N3uralia.",
    benefit: "Privacidad garantizada",
  },
]

export function PersistentIntelligenceMemory() {
  return (
    <section className="bg-background py-24 border-t border-border px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 text-foreground mb-4">Memoria Inteligente Persistente</h2>
          <p className="body text-muted-foreground max-w-2xl mx-auto">
            N3uralia no olvida. Construye una memoria de tu contexto, estilo y objetivos. Cada interacción
            mejora y personaliza la experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memoryFeatures.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-300 p-8"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="h3 text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="body text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>

                  {/* Benefit Badge */}
                  <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-xs font-semibold text-primary">{feature.benefit}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* How It Works */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-card">
          <h3 className="h3 text-foreground mb-8">Cómo Funciona la Memoria Persistente</h3>

          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "Primera Interacción",
                desc: "N3uralia aprende quién eres, qué buscas, cómo trabajas.",
              },
              {
                num: 2,
                title: "Construcción de Contexto",
                desc: "Cada decisión, feedback y resultado se suma a tu perfil único.",
              },
              {
                num: 3,
                title: "Personalización Progresiva",
                desc: "Las recomendaciones mejoran con el tiempo. Más precisas, más relevantes, más tuyas.",
              },
              {
                num: 4,
                title: "Evolución Continuada",
                desc: "Tu memoria evoluciona contigo. N3uralia aprende, olvida lo irrelevante y mantiene lo estratégico.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 border border-primary/40">
                    <span className="text-sm font-bold text-primary">{item.num}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Control */}
        <div className="mt-8 p-6 rounded-lg border border-primary/20 bg-primary/5">
          <div className="flex items-start gap-4">
            <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-foreground mb-2">Tú controlas tu memoria</p>
              <p className="text-sm text-muted-foreground">
                Tus datos de contexto son privados, encriptados y bajo tu control total. Puedes revisar,
                editar o borrar tu memoria en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
