'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Factory, Gauge, Package, ShieldCheck, Users, Workflow } from 'lucide-react'
import type { Locale } from '@/lib/get-locale'

type FrictionKey = 'visibility' | 'manual' | 'response' | 'risk'

type Option = {
  key: FrictionKey
  icon: typeof Gauge
  label: string
  description: string
  recommendation: string
  firstBuild: string
  signal: string
}

const content: Record<Locale, { eyebrow: string; title: string; subtitle: string; choose: string; next: string; output: string; options: Option[] }> = {
  es: {
    eyebrow: 'Selector rápido',
    title: 'Elige la fricción y mira por dónde conviene partir',
    subtitle:
      'Una buena implementación no empieza con “hagamos IA”. Empieza entendiendo qué parte de la operación está perdiendo velocidad, control o contexto.',
    choose: 'Qué te duele hoy',
    next: 'Siguiente movimiento recomendado',
    output: 'Qué construiríamos primero',
    options: [
      {
        key: 'visibility',
        icon: Gauge,
        label: 'No veo la operación completa',
        description: 'Datos en planillas, correos y herramientas separadas. Mucha reunión solo para saber qué está pasando.',
        recommendation: 'Mapa operativo + tablero conectado',
        firstBuild: 'Un centro de control con datos clave, alertas y responsables claros para tomar decisiones sin perseguir información.',
        signal: 'Ideal si hoy el equipo decide con capturas, reportes tardíos o versiones distintas de la verdad.',
      },
      {
        key: 'manual',
        icon: Workflow,
        label: 'Hay demasiado trabajo manual',
        description: 'Copiar, pegar, validar, avisar y actualizar consume más tiempo que resolver el problema real.',
        recommendation: 'Piloto de automatización operacional',
        firstBuild: 'Un flujo acotado que conecte herramientas, elimine pasos repetidos y deje trazabilidad desde el primer ciclo.',
        signal: 'Ideal si puedes nombrar un proceso que ocurre todas las semanas y siempre se tranca en el mismo punto.',
      },
      {
        key: 'response',
        icon: Users,
        label: 'Respondemos tarde',
        description: 'Clientes, equipos o proveedores esperan porque la información no llega al canal correcto a tiempo.',
        recommendation: 'Capa de respuesta inteligente',
        firstBuild: 'Un asistente o portal conectado a contexto real, permisos y canales como WhatsApp, email o sistemas internos.',
        signal: 'Ideal si la oportunidad se pierde por demora, no por falta de demanda.',
      },
      {
        key: 'risk',
        icon: ShieldCheck,
        label: 'Necesito más control y trazabilidad',
        description: 'Hay decisiones, documentos o validaciones que requieren auditoría, permisos y menos dependencia de memoria humana.',
        recommendation: 'Sistema gobernado de producción',
        firstBuild: 'Una arquitectura con roles, historial, guardrails, monitoreo y checkpoints humanos donde haga sentido.',
        signal: 'Ideal si compliance, continuidad o seguridad son parte central del negocio.',
      },
    ],
  },
  en: {
    eyebrow: 'Quick selector',
    title: 'Choose the friction and see where to start',
    subtitle:
      'A strong implementation does not start with “let’s add AI”. It starts by understanding which part of the operation is losing speed, control, or context.',
    choose: 'What hurts today',
    next: 'Recommended next move',
    output: 'What we would build first',
    options: [
      {
        key: 'visibility',
        icon: Gauge,
        label: 'I cannot see the full operation',
        description: 'Data lives in spreadsheets, email, and disconnected tools. Meetings are needed just to understand what is happening.',
        recommendation: 'Operating map + connected dashboard',
        firstBuild: 'A control center with key data, alerts, and clear owners so decisions do not depend on chasing information.',
        signal: 'Best when the team decides from screenshots, late reports, or multiple versions of the truth.',
      },
      {
        key: 'manual',
        icon: Workflow,
        label: 'Too much work is manual',
        description: 'Copying, validating, notifying, and updating takes more time than solving the real problem.',
        recommendation: 'Operational automation pilot',
        firstBuild: 'A focused workflow that connects tools, removes repeated steps, and creates traceability from the first cycle.',
        signal: 'Best when you can name a recurring process that gets stuck in the same place every week.',
      },
      {
        key: 'response',
        icon: Users,
        label: 'We respond too late',
        description: 'Customers, teams, or suppliers wait because information does not reach the right channel at the right time.',
        recommendation: 'Intelligent response layer',
        firstBuild: 'An assistant or portal connected to real context, permissions, and channels such as WhatsApp, email, or internal systems.',
        signal: 'Best when opportunities are lost because of delay, not lack of demand.',
      },
      {
        key: 'risk',
        icon: ShieldCheck,
        label: 'I need control and traceability',
        description: 'Decisions, documents, or validations require auditability, permissions, and less dependency on human memory.',
        recommendation: 'Governed production system',
        firstBuild: 'An architecture with roles, history, guardrails, monitoring, and human checkpoints where they matter.',
        signal: 'Best when compliance, continuity, or security are central to the business.',
      },
    ],
  },
}

const sectors = [
  { icon: Package, label: 'Retail' },
  { icon: Factory, label: 'Industria' },
  { icon: Workflow, label: 'Logística' },
]

export function SolutionsFitExplorer({ locale }: { locale: Locale }) {
  const page = content[locale]
  const [selectedKey, setSelectedKey] = useState<FrictionKey>('visibility')
  const selected = page.options.find((option) => option.key === selectedKey) ?? page.options[0]
  const SelectedIcon = selected.icon

  return (
    <section className="px-4 py-20 border-b border-[#d8e5e2] bg-[#f7faf8]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{page.eyebrow}</p>
            <h2 className="text-balance text-4xl font-light leading-tight text-[#243331] md:text-5xl">{page.title}</h2>
            <p className="mt-5 text-pretty text-base leading-8 text-[#65706d]">{page.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {sectors.map((sector) => {
                const Icon = sector.icon
                return (
                  <span key={sector.label} className="inline-flex items-center gap-2 rounded-full border border-[#d8e5e2] bg-white px-4 py-2 text-sm font-medium text-[#65706d]">
                    <Icon className="h-4 w-4 text-[#789b96]" />
                    {sector.label}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#cfe0dc] bg-white p-4 shadow-[0_34px_110px_-82px_#173634] md:p-5">
            <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[1.5rem] border border-[#d8e5e2] bg-[#fbfbfa] p-3">
                <p className="px-2 pb-3 pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#789b96]">{page.choose}</p>
                <div className="space-y-2" role="tablist" aria-label={page.choose}>
                  {page.options.map((option) => {
                    const Icon = option.icon
                    const active = option.key === selectedKey
                    return (
                      <button
                        key={option.key}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setSelectedKey(option.key)}
                        className={`w-full rounded-[1.15rem] border p-4 text-left transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96] ${
                          active
                            ? 'border-[#789b96] bg-[#eef5f2] text-[#173634] shadow-[0_20px_60px_-46px_#173634]'
                            : 'border-transparent bg-transparent text-[#65706d] hover:border-[#d8e5e2] hover:bg-white'
                        }`}
                      >
                        <span className="flex items-start gap-3">
                          <span className={`mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-2xl ${active ? 'bg-[#173634] text-white' : 'bg-white text-[#789b96]'}`}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold">{option.label}</span>
                            <span className="mt-1 block text-xs leading-5 text-[#7b8582]">{option.description}</span>
                          </span>
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#173634] p-6 text-white">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#8fb2aa]/30 blur-3xl" />
                <div className="relative">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10">
                      <SelectedIcon className="h-6 w-6 text-[#dbe8e4]" />
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#c6d7d3]">
                      {locale === 'es' ? 'Fit inicial' : 'Initial fit'}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a9c0bb]">{page.next}</p>
                  <h3 className="mt-3 text-3xl font-light leading-tight text-white">{selected.recommendation}</h3>

                  <div className="mt-8 rounded-[1.2rem] border border-white/12 bg-white/[0.07] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a9c0bb]">{page.output}</p>
                    <p className="mt-3 text-sm leading-7 text-[#e9f0ee]">{selected.firstBuild}</p>
                  </div>

                  <div className="mt-5 flex items-start gap-3 rounded-[1.2rem] border border-white/12 bg-white/[0.04] p-4 text-sm leading-6 text-[#d7e4e1]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#a9c0bb]" />
                    <span>{selected.signal}</span>
                  </div>

                  <a
                    href={`/${locale}/contact`}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#173634] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eef5f2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {locale === 'es' ? 'Validar este camino' : 'Validate this path'}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
