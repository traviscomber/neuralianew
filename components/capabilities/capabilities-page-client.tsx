"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/layout/footer"

interface CapabilitiesPageClientProps {
  locale: "es" | "en"
}

type Pillar = {
  titleES: string
  titleEN: string
  descES: string
  descEN: string
  featuresES: string[]
  featuresEN: string[]
}

const pillars: Pillar[] = [
  {
    titleES: "Arquitectura agéntica",
    titleEN: "Agentic architecture",
    descES: "Agentes autónomos con memoria y reglas claras.",
    descEN: "Autonomous agents with memory and clear rules.",
    featuresES: ["Planificación", "Herramientas", "Contexto", "Control"],
    featuresEN: ["Planning", "Tools", "Context", "Control"],
  },
  {
    titleES: "Living agents",
    titleEN: "Living agents",
    descES: "Agentes que aprenden y mejoran con el uso.",
    descEN: "Agents that learn and improve with use.",
    featuresES: ["Aprendizaje", "Adaptación", "Seguimiento"],
    featuresEN: ["Learning", "Adaptation", "Tracking"],
  },
  {
    titleES: "Orquestación multiagente",
    titleEN: "Multi-agent coordination",
    descES: "Coordinación de varios agentes trabajando juntos.",
    descEN: "Coordination of multiple agents working together.",
    featuresES: ["Distribución", "Colaboración", "Resolución"],
    featuresEN: ["Distribution", "Collaboration", "Resolution"],
  },
  {
    titleES: "Inteligencia conversacional",
    titleEN: "Conversational intelligence",
    descES: "Interacciones claras y útiles con contexto.",
    descEN: "Clear, useful interactions with context.",
    featuresES: ["Contexto", "Tono", "Intención"],
    featuresEN: ["Context", "Tone", "Intent"],
  },
]

const livingAgents = [
  {
    titleES: "Memoria persistente",
    titleEN: "Persistent memory",
    descES: "Los agentes recuerdan interacciones previas y aprenden en cada ciclo.",
    descEN: "Agents remember previous interactions and learn every cycle.",
  },
  {
    titleES: "Auto-optimización",
    titleEN: "Self-optimization",
    descES: "Mejora continua basada en feedback y resultados medibles.",
    descEN: "Continuous improvement based on feedback and measurable results.",
  },
  {
    titleES: "Comportamiento adaptivo",
    titleEN: "Adaptive behavior",
    descES: "Cambian de estrategia según contexto, usuario y objetivos.",
    descEN: "They change strategy based on context, user, and objectives.",
  },
]

const conversational = [
  {
    titleES: "Comprensión de contexto",
    titleEN: "Context understanding",
    descES: "Comprende matices y trasfondo de cada conversación.",
    descEN: "Understands nuances and background in each conversation.",
  },
  {
    titleES: "Diálogos naturales",
    titleEN: "Natural dialogues",
    descES: "Respuestas fluidas que generan confianza y conexión.",
    descEN: "Fluid responses that build trust and connection.",
  },
  {
    titleES: "Conversaciones multi-turno",
    titleEN: "Multi-turn conversations",
    descES: "Mantiene coherencia en conversaciones largas.",
    descEN: "Maintains coherence in long conversations.",
  },
]

const production = [
  {
    titleES: "99.9% disponibilidad",
    titleEN: "99.9% uptime",
    descES: "Infraestructura redundante y monitoreo 24/7.",
    descEN: "Redundant infrastructure and 24/7 monitoring.",
  },
  {
    titleES: "Seguridad empresarial",
    titleEN: "Enterprise security",
    descES: "Encriptación, compliance y auditoría completa.",
    descEN: "Encryption, compliance, and complete auditing.",
  },
  {
    titleES: "Analítica en tiempo real",
    titleEN: "Real-time analytics",
    descES: "Métricas e insights en tiempo real.",
    descEN: "Metrics and insights in real time.",
  },
]

export function CapabilitiesPageClient({ locale }: CapabilitiesPageClientProps) {
  const isES = locale === "es"
  const href = (path: string) => `/${locale}${path}`

  return (
    <>
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <section className="border-b border-[#d8e5e2] px-4 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe0dc] bg-white/75 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#789b96]" />
              <span className="text-sm font-semibold text-[#526e69]">
                {isES ? "Capacidades técnicas" : "Technical capabilities"}
              </span>
            </div>
            <h1 className="mt-6 text-balance text-5xl font-light leading-[0.98] tracking-[-0.05em] text-[#173634] md:text-7xl">
              {isES ? "Capacidades para sistemas inteligentes en producción" : "Capabilities for intelligent systems in production"}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-[#65706d]">
              {isES
                ? "Arquitectura modular para conectar agentes, contexto y operación real."
                : "Modular architecture to connect agents, context, and real operations."
              }
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href={href("/soluciones")}
                className="inline-flex items-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244946]"
              >
                {isES ? "Ver soluciones" : "View solutions"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={href("/contact")}
                className="inline-flex items-center gap-2 rounded-full border border-[#d8e5e2] bg-white px-6 py-3 text-sm font-semibold text-[#173634] transition-colors hover:border-[#b8d1cc] hover:bg-[#f5faf8]"
              >
                {isES ? "Hablar con N3uralia" : "Talk to N3uralia"}
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                {isES ? "Cuatro pilares" : "Four pillars"}
              </p>
              <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">
                {isES ? "La base técnica que usamos para construir" : "The technical base we use to build"}
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {pillars.map((pillar) => (
                <article key={pillar.titleEN} className="rounded-[1.8rem] border border-[#d8e5e2] bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa39d]">
                    {isES ? "Pilar" : "Pillar"}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#173634]">
                    {isES ? pillar.titleES : pillar.titleEN}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#65706d]">
                    {isES ? pillar.descES : pillar.descEN}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {(isES ? pillar.featuresES : pillar.featuresEN).map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[#243331]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#789b96]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8e5e2] bg-[#edf4f1] px-4 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                {isES ? "Living agents" : "Living agents"}
              </p>
              <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">
                {isES ? "Agentes que mejoran con el uso" : "Agents that improve with use"}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#65706d]">
                {isES
                  ? "Los agentes aprenden, se adaptan y siguen siendo útiles cuando cambia la operación."
                  : "Agents learn, adapt, and stay useful when the operation changes."
                }
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {livingAgents.map((item) => (
                <article key={item.titleEN} className="rounded-[1.6rem] border border-[#d8e5e2] bg-white p-5">
                  <h3 className="text-lg font-semibold text-[#173634]">{isES ? item.titleES : item.titleEN}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#65706d]">{isES ? item.descES : item.descEN}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {conversational.map((item) => (
                <article key={item.titleEN} className="rounded-[1.6rem] border border-[#d8e5e2] bg-white p-5">
                  <h3 className="text-lg font-semibold text-[#173634]">{isES ? item.titleES : item.titleEN}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#65706d]">{isES ? item.descES : item.descEN}</p>
                </article>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                {isES ? "Inteligencia conversacional" : "Conversational intelligence"}
              </p>
              <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">
                {isES ? "Conversación que entiende contexto" : "Conversation that understands context"}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#65706d]">
                {isES
                  ? "La conversación activa la operación con menos fricción."
                  : "Conversation activates the operation with less friction."
                }
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#d8e5e2] bg-[#173634] px-4 py-24 text-white sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8fb2aa]">
                {isES ? "Producción" : "Production"}
              </p>
              <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
                {isES ? "Guardrails para operar con confianza" : "Guardrails to operate with confidence"}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72">
                {isES
                  ? "En producción importan disponibilidad, seguridad, trazabilidad y observabilidad."
                  : "In production, availability, security, traceability, and observability matter most."
                }
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {production.map((item) => (
                <article key={item.titleEN} className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
                  <h3 className="text-lg font-semibold">{isES ? item.titleES : item.titleEN}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">{isES ? item.descES : item.descEN}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={href("/soluciones")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#173634] transition-colors hover:bg-[#eef5f2]"
              >
                {isES ? "Ver soluciones" : "View solutions"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={href("/case-studies")}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {isES ? "Ver casos" : "View cases"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
