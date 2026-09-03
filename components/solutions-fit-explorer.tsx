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
    <section className="border-b border-[rgba(118,214,214,.16)] py-20">
      <div className="retro-shell grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
        <div>
          <small>{page.eyebrow}</small>
          <h2 className="mt-5 text-[clamp(34px,4vw,56px)]">{page.title}</h2>
          <p className="mt-5 max-w-xl text-[14px] text-[var(--n3-text-muted)]">{page.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {sectors.map((sector) => {
              const Icon = sector.icon
              return (
                <span key={sector.label} className="inline-flex min-h-11 items-center gap-2 border border-[rgba(168,217,216,.22)] px-4 text-[11px] uppercase tracking-[.14em] text-[var(--n3-text-muted)]">
                  <Icon className="h-4 w-4 text-[var(--n3-teal-soft)]" />
                  {sector.label}
                </span>
              )
            })}
          </div>
        </div>

        <div className="relative border border-[rgba(168,217,216,.22)] bg-[var(--n3-deep)] p-4 md:p-5">
          <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
          <div className="grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-[.9fr_1.1fr]">
            <div className="bg-[var(--n3-black)] p-3">
              <p className="telemetry px-2 pb-3 pt-1">{page.choose}</p>
              <div role="tablist" aria-label={page.choose}>
                {page.options.map((option, index) => {
                  const Icon = option.icon
                  const active = option.key === selectedKey
                  return (
                    <button
                      key={option.key}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSelectedKey(option.key)}
                      className={`w-full border-t border-[rgba(118,214,214,.14)] p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--n3-teal)] ${
                        active
                          ? 'bg-[rgba(168,217,216,.07)] text-[var(--n3-text-light)]'
                          : 'bg-transparent text-[var(--n3-text-muted)] hover:bg-[rgba(168,217,216,.035)]'
                      }`}
                    >
                      <span className="flex items-start gap-3">
                        <span className={`mt-0.5 grid h-9 w-9 flex-none place-items-center border ${active ? 'border-[var(--n3-teal-soft)] text-[var(--n3-teal-soft)]' : 'border-[rgba(168,217,216,.18)] text-[var(--n3-text-muted)]'}`}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="telemetry mb-1 block">0{index + 1}</span>
                          <span className="block font-[var(--font-rajdhani)] text-[14px] tracking-[.08em] text-[var(--n3-text-light)] uppercase">{option.label}</span>
                          <span className="mt-2 block text-[11px] leading-5 text-[var(--n3-text-muted)]">{option.description}</span>
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="relative overflow-hidden bg-[var(--n3-dark-surface)] p-6">
              <div className="absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-[var(--n3-teal)] to-transparent opacity-30" />
              <div className="relative">
                <div className="mb-10 flex items-center justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center border border-[rgba(168,217,216,.24)]">
                    <SelectedIcon className="h-6 w-6 text-[var(--n3-teal-soft)]" />
                  </div>
                  <span className="telemetry">{locale === 'es' ? 'Fit inicial' : 'Initial fit'}</span>
                </div>

                <p className="telemetry">{page.next}</p>
                <h3 className="mt-4 text-[clamp(28px,3vw,40px)]">{selected.recommendation}</h3>

                <div className="mt-8 border-t border-[rgba(118,214,214,.16)] pt-6">
                  <p className="telemetry">{page.output}</p>
                  <p className="mt-4 text-[13px] text-[var(--n3-text-muted)]">{selected.firstBuild}</p>
                </div>

                <div className="mt-6 flex items-start gap-3 border-t border-[rgba(118,214,214,.16)] pt-5 text-[12px] text-[var(--n3-text-muted)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--n3-teal-soft)]" />
                  <span>{selected.signal}</span>
                </div>

                <a href={`/${locale}/contact`} className="retro-button retro-button-primary mt-8 gap-2">
                  {locale === 'es' ? 'Validar este camino' : 'Validate this path'}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
