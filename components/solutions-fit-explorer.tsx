'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Eye,
  FileText,
  ScanLine,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import type { Locale } from '@/lib/get-locale'

type FrictionKey =
  | 'visibility'
  | 'manual'
  | 'response'
  | 'traceability'
  | 'documents'
  | 'vision'

type Option = {
  key: FrictionKey
  icon: typeof Eye
  label: string
  recommendation: string
  layer: string
  explanation: string
}

type Copy = {
  eyebrow: string
  title: string
  subtitle: string
  recommended: string
  layer: string
  cta: string
  options: Option[]
}

const content: Record<Locale, Copy> = {
  es: {
    eyebrow: '04 / SELECTOR RÁPIDO',
    title: '¿Dónde empieza la fricción?',
    subtitle:
      'Elige el síntoma más cercano a tu operación. No define la solución final; solo ayuda a identificar el primer movimiento útil.',
    recommended: 'Primer movimiento recomendado',
    layer: 'Capa de solución',
    cta: 'Validar este camino',
    options: [
      {
        key: 'visibility',
        icon: Eye,
        label: 'No puedo ver la operación completa',
        recommendation: 'Mapa operativo + dashboard conectado',
        layer: 'Inteligencia Operacional',
        explanation:
          'Un centro de control con datos clave, alertas y responsables claros para decidir sin perseguir información.',
      },
      {
        key: 'manual',
        icon: Workflow,
        label: 'Demasiado trabajo es manual',
        recommendation: 'Piloto de automatización operacional',
        layer: 'Automatización de Flujos',
        explanation:
          'Un flujo acotado que conecte herramientas, elimine pasos repetidos y deje trazabilidad desde el primer ciclo.',
      },
      {
        key: 'response',
        icon: Bot,
        label: 'Respondemos demasiado tarde',
        recommendation: 'Capa de respuesta con contexto real',
        layer: 'Asistentes de IA',
        explanation:
          'Un asistente conectado a datos, documentos, permisos y canales para acelerar respuestas sin perder control.',
      },
      {
        key: 'traceability',
        icon: ShieldCheck,
        label: 'Necesito control y trazabilidad',
        recommendation: 'Flujo gobernado con historial y responsables',
        layer: 'Plataformas Internas',
        explanation:
          'Una capa operativa con roles, estados, historial, excepciones y checkpoints humanos donde realmente importan.',
      },
      {
        key: 'documents',
        icon: FileText,
        label: 'Tenemos documentos en todas partes',
        recommendation: 'Inventario documental + extracción estructurada',
        layer: 'Inteligencia Documental',
        explanation:
          'Clasificar, extraer, validar y conectar documentos para que la operación no dependa de búsqueda manual ni reingreso de datos.',
      },
      {
        key: 'vision',
        icon: ScanLine,
        label: 'Necesitamos reconocer eventos visuales',
        recommendation: 'Prueba de reconocimiento sobre evidencia real',
        layer: 'Sistemas de Reconocimiento',
        explanation:
          'Validar visión computacional sobre imágenes o video reales antes de diseñar el sistema de producción completo.',
      },
    ],
  },
  en: {
    eyebrow: '04 / QUICK SELECTOR',
    title: 'Where does the friction start?',
    subtitle:
      'Choose the symptom closest to your operation. It does not define the final solution; it identifies a useful first move.',
    recommended: 'Recommended first move',
    layer: 'Solution layer',
    cta: 'Validate this path',
    options: [
      {
        key: 'visibility',
        icon: Eye,
        label: 'I cannot see the full operation',
        recommendation: 'Operating map + connected dashboard',
        layer: 'Operational Intelligence',
        explanation:
          'A control center with key data, alerts and clear owners so decisions do not depend on chasing information.',
      },
      {
        key: 'manual',
        icon: Workflow,
        label: 'Too much work is manual',
        recommendation: 'Operational automation pilot',
        layer: 'Workflow Automation',
        explanation:
          'A focused workflow that connects tools, removes repeated steps and creates traceability from the first cycle.',
      },
      {
        key: 'response',
        icon: Bot,
        label: 'We respond too late',
        recommendation: 'Context-aware response layer',
        layer: 'AI Assistants',
        explanation:
          'An assistant connected to data, documents, permissions and channels so teams can respond faster without losing control.',
      },
      {
        key: 'traceability',
        icon: ShieldCheck,
        label: 'I need control and traceability',
        recommendation: 'Governed workflow with history and owners',
        layer: 'Internal Platforms',
        explanation:
          'An operating layer with roles, states, history, exceptions and human checkpoints where they actually matter.',
      },
      {
        key: 'documents',
        icon: FileText,
        label: 'We have documents everywhere',
        recommendation: 'Document inventory + structured extraction',
        layer: 'Document Intelligence',
        explanation:
          'Classify, extract, validate and connect documents so operations do not depend on manual search or repeated data entry.',
      },
      {
        key: 'vision',
        icon: ScanLine,
        label: 'We need to recognize visual events',
        recommendation: 'Recognition test on real evidence',
        layer: 'Recognition Systems',
        explanation:
          'Validate computer vision on real images or video before designing the complete production system.',
      },
    ],
  },
}

function Recommendation({ option, copy, locale }: { option: Option; copy: Copy; locale: Locale }) {
  return (
    <div className="border-t border-[rgba(118,214,214,.16)] pt-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="telemetry">{copy.recommended}</p>
          <p className="mt-3 font-[var(--font-rajdhani)] text-[19px] uppercase tracking-[.08em] text-[var(--n3-text-light)]">
            {option.recommendation}
          </p>
        </div>
        <div>
          <p className="telemetry">{copy.layer}</p>
          <p className="mt-3 font-[var(--font-rajdhani)] text-[19px] uppercase tracking-[.08em] text-[var(--n3-teal-soft)]">
            {option.layer}
          </p>
        </div>
      </div>
      <p className="mt-5 max-w-2xl text-[13px] leading-6 text-[var(--n3-text-muted)]">{option.explanation}</p>
      <a href={`/${locale}/diagnostico`} className="retro-button retro-button-primary mt-6 w-full gap-2 sm:w-auto">
        {copy.cta}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  )
}

export function SolutionsFitExplorer({ locale }: { locale: Locale }) {
  const copy = content[locale]
  const [selectedKey, setSelectedKey] = useState<FrictionKey>('visibility')
  const reducedMotion = useReducedMotion()
  const selectedIndex = Math.max(0, copy.options.findIndex((option) => option.key === selectedKey))
  const selected = copy.options[selectedIndex] ?? copy.options[0]

  function moveSelection(direction: 1 | -1) {
    const next = (selectedIndex + direction + copy.options.length) % copy.options.length
    setSelectedKey(copy.options[next].key)
  }

  return (
    <section id="quick-selector" className="retro-dark scroll-mt-28 border-b border-[rgba(118,214,214,.16)] py-24 md:py-32">
      <div className="retro-shell grid gap-12 lg:grid-cols-[310px_minmax(0,1fr)] lg:gap-16">
        <header className="light-intro">
          <small>{copy.eyebrow}</small>
          <h2 className="mt-6 text-[clamp(36px,4.6vw,64px)]">{copy.title}</h2>
          <p className="mt-6 max-w-md text-[14px] leading-7 text-[var(--n3-text-muted)]">{copy.subtitle}</p>
          <div className="mt-7 flex items-center gap-3" aria-hidden>
            <span className="h-px w-10 bg-[rgba(118,214,214,.28)]" />
            <span className="telemetry">SELECT / VALIDATE / MOVE</span>
          </div>
        </header>

        <div>
          <div className="md:hidden">
            {copy.options.map((option, index) => {
              const Icon = option.icon
              const active = option.key === selectedKey
              return (
                <div key={option.key} className="border-t border-[rgba(118,214,214,.18)] last:border-b">
                  <button
                    type="button"
                    aria-expanded={active}
                    onClick={() => setSelectedKey(option.key)}
                    className="flex min-h-16 w-full items-center gap-4 px-1 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--n3-teal)]"
                  >
                    <span className={`grid h-10 w-10 flex-none place-items-center border ${active ? 'border-[var(--n3-teal-soft)] text-[var(--n3-teal-soft)]' : 'border-[rgba(168,217,216,.18)] text-[var(--n3-text-muted)]'}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="telemetry block">0{index + 1}</span>
                      <span className="mt-1 block font-[var(--font-rajdhani)] text-[16px] uppercase tracking-[.06em] text-[var(--n3-text-light)]">
                        {option.label}
                      </span>
                    </span>
                    <span className="telemetry">{active ? '−' : '+'}</span>
                  </button>
                  {active ? (
                    <motion.div
                      initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28 }}
                      className="pb-7 pl-14"
                    >
                      <Recommendation option={option} copy={copy} locale={locale} />
                    </motion.div>
                  ) : null}
                </div>
              )
            })}
          </div>

          <div className="relative hidden border border-[rgba(168,217,216,.22)] bg-[var(--n3-deep)] p-5 md:block lg:p-6">
            <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
            <div className="grid gap-px bg-[rgba(118,214,214,.16)] xl:grid-cols-[.82fr_1.18fr]">
              <div
                className="bg-[var(--n3-black)] p-2"
                role="tablist"
                aria-label={copy.title}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                    event.preventDefault()
                    moveSelection(1)
                  }
                  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                    event.preventDefault()
                    moveSelection(-1)
                  }
                }}
              >
                {copy.options.map((option, index) => {
                  const Icon = option.icon
                  const active = option.key === selectedKey
                  const tabId = `solution-fit-tab-${option.key}`
                  return (
                    <button
                      key={option.key}
                      id={tabId}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-controls="solution-fit-panel"
                      tabIndex={active ? 0 : -1}
                      onClick={() => setSelectedKey(option.key)}
                      className={`flex min-h-16 w-full items-center gap-4 border-t border-[rgba(118,214,214,.14)] px-3 py-4 text-left transition-colors first:border-t-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--n3-teal)] ${active ? 'bg-[rgba(168,217,216,.07)]' : 'hover:bg-[rgba(168,217,216,.035)]'}`}
                    >
                      <span className={`grid h-10 w-10 flex-none place-items-center border ${active ? 'border-[var(--n3-teal-soft)] text-[var(--n3-teal-soft)]' : 'border-[rgba(168,217,216,.18)] text-[var(--n3-text-muted)]'}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="telemetry block">0{index + 1}</span>
                        <span className="mt-1 block font-[var(--font-rajdhani)] text-[15px] uppercase tracking-[.06em] text-[var(--n3-text-light)]">
                          {option.label}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>

              <motion.div
                key={selected.key}
                id="solution-fit-panel"
                role="tabpanel"
                aria-labelledby={`solution-fit-tab-${selected.key}`}
                className="bg-[var(--n3-dark-surface)] p-6 lg:p-8"
                initial={reducedMotion ? false : { opacity: 0.55, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, ease: 'easeOut' }}
              >
                <div className="flex items-center justify-between gap-4 border-b border-[rgba(118,214,214,.16)] pb-6">
                  <span className="telemetry">N3 / FIT PATH</span>
                  <span className="telemetry">{String(selectedIndex + 1).padStart(2, '0')} / 06</span>
                </div>
                <h3 className="mt-8 max-w-2xl text-[clamp(28px,3vw,42px)]">{selected.label}</h3>
                <div className="mt-8">
                  <Recommendation option={selected} copy={copy} locale={locale} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
