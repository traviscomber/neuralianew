"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowRight, CheckCircle2, Gauge, ShieldCheck, Users, Workflow } from "lucide-react"

type Locale = "es" | "en"
type FrictionKey = "visibility" | "manual" | "response" | "risk"

type Option = {
  key: FrictionKey
  icon: typeof Gauge
  labelES: string
  labelEN: string
  descriptionES: string
  descriptionEN: string
  signalES: string
  signalEN: string
  buildES: string
  buildEN: string
}

const options: Option[] = [
  {
    key: "visibility",
    icon: Gauge,
    labelES: "No veo el estado real de la operación",
    labelEN: "I cannot see the real state of the operation",
    descriptionES: "Datos dispersos, seguimiento manual y poca claridad para decidir rápido.",
    descriptionEN: "Scattered data, manual follow-up, and little clarity for fast decisions.",
    signalES: "Mapa operativo",
    signalEN: "Operational map",
    buildES: "Tablero conectado con eventos, tareas y responsables.",
    buildEN: "Connected dashboard with events, tasks, and owners.",
  },
  {
    key: "manual",
    icon: Workflow,
    labelES: "El equipo repite trabajo manual",
    labelEN: "The team repeats manual work",
    descriptionES: "Copiar, validar, avisar y actualizar consume demasiado tiempo.",
    descriptionEN: "Copying, validating, notifying, and updating takes too much time.",
    signalES: "Automatización",
    signalEN: "Automation",
    buildES: "Flujo que capture, valide y actualice sin depender de pasos repetidos.",
    buildEN: "A flow that captures, validates, and updates without repeated steps.",
  },
  {
    key: "response",
    icon: Users,
    labelES: "La respuesta llega tarde",
    labelEN: "Response arrives too late",
    descriptionES: "Clientes, equipos o proveedores esperan porque la información no fluye.",
    descriptionEN: "Customers, teams, or suppliers wait because information does not flow.",
    signalES: "Canal directo",
    signalEN: "Direct channel",
    buildES: "Asistente o portal conectado al contexto, permisos y canal correcto.",
    buildEN: "Assistant or portal connected to context, permissions, and the right channel.",
  },
  {
    key: "risk",
    icon: ShieldCheck,
    labelES: "La operación necesita más control",
    labelEN: "The operation needs more control",
    descriptionES: "Hay decisiones o validaciones sensibles que necesitan trazabilidad.",
    descriptionEN: "Sensitive decisions or validations need traceability.",
    signalES: "Gobernanza",
    signalEN: "Governance",
    buildES: "Sistema con permisos, auditoría y puntos de control claros.",
    buildEN: "System with permissions, auditing, and clear control points.",
  },
]

const copy = {
  es: {
    eyebrow: "Lectura de fricción",
    title: "Elige el problema y mira por dónde conviene partir",
    subtitle:
      "La idea no es vender todo junto. Es encontrar el primer sistema que reduzca fricción real sin complicar más la operación.",
    choose: "Qué duele hoy",
    next: "Recomendación inicial",
    output: "Primer sistema posible",
    cards: [
      { label: "Tiempo de entrada", value: "30 días" },
      { label: "Enfoque", value: "Operación real" },
      { label: "Formato", value: "Piloto simple" },
    ],
  },
  en: {
    eyebrow: "Friction reading",
    title: "Choose the problem and see where to start",
    subtitle:
      "The goal is not to sell everything at once. It is to find the first system that reduces real friction without adding complexity.",
    choose: "What hurts today",
    next: "Initial recommendation",
    output: "First possible system",
    cards: [
      { label: "Time to start", value: "30 days" },
      { label: "Focus", value: "Real operations" },
      { label: "Format", value: "Simple pilot" },
    ],
  },
} as const

export function SolutionsFitExplorer() {
  const pathname = usePathname()
  const locale = (pathname?.startsWith("/en") ? "en" : "es") as Locale
  const text = copy[locale]
  const [selected, setSelected] = useState<FrictionKey>("visibility")

  const option = options.find((item) => item.key === selected) ?? options[0]
  const Icon = option.icon

  return (
    <div className="rounded-[1.8rem] border border-[#d8e5e2] bg-[#f8fbfa] p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{text.eyebrow}</p>
      <h3 className="mt-3 text-2xl font-semibold text-[#173634] md:text-3xl">{text.title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#65706d]">{text.subtitle}</p>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa39d]">{text.choose}</p>
          {options.map((item) => {
            const active = item.key === selected

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setSelected(item.key)}
                className={[
                  "w-full rounded-2xl border p-4 text-left transition-all duration-200",
                  active
                    ? "border-[#789b96] bg-white shadow-[0_18px_60px_-48px_#173634]"
                    : "border-[#e5eeeb] bg-white/70 hover:border-[#c7d8d3]",
                ].join(" ")}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={[
                      "grid h-10 w-10 place-items-center rounded-xl",
                      active ? "bg-[#173634] text-white" : "bg-[#eef5f2] text-[#789b96]",
                    ].join(" ")}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#173634]">
                      {locale === "es" ? item.labelES : item.labelEN}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#65706d]">
                      {locale === "es" ? item.descriptionES : item.descriptionEN}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <div className="rounded-[1.6rem] border border-[#d8e5e2] bg-white p-5 shadow-[0_24px_70px_-70px_#173634]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa39d]">{text.next}</p>
          <div className="mt-4 rounded-[1.4rem] bg-[#173634] p-5 text-white">
            <Icon className="h-6 w-6 text-[#8fb2aa]" />
            <h4 className="mt-4 text-2xl font-semibold">{locale === "es" ? option.labelES : option.labelEN}</h4>
            <p className="mt-3 text-sm leading-7 text-white/75">
              {locale === "es" ? option.descriptionES : option.descriptionEN}
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {text.cards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-[#e5eeeb] bg-[#fbfbfa] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8aa39d]">{card.label}</p>
                <p className="mt-2 text-base font-semibold text-[#173634]">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[1.4rem] border border-[#e5eeeb] bg-[#f8fbfa] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8aa39d]">{text.output}</p>
            <div className="mt-3 flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#789b96]" />
              <p className="text-sm leading-7 text-[#526e69]">
                {locale === "es" ? option.buildES : option.buildEN}
              </p>
            </div>
            <p className="mt-4 inline-flex rounded-full border border-[#d8e5e2] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#789b96]">
              {locale === "es" ? option.signalES : option.signalEN}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={locale === "es" ? "/es/contact" : "/en/contact"}
              className="inline-flex items-center gap-2 rounded-full bg-[#173634] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {locale === "es" ? "Hablar con N3uralia" : "Talk to N3uralia"}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={locale === "es" ? "/es/case-studies" : "/en/case-studies"}
              className="inline-flex items-center gap-2 rounded-full border border-[#d8e5e2] bg-white px-4 py-2 text-sm font-semibold text-[#526e69] transition-transform hover:-translate-y-0.5"
            >
              {locale === "es" ? "Ver casos" : "View cases"}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
