'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle, ArrowRight, CheckCircle2, FileText, MessageSquare, RadioTower } from 'lucide-react'
import type { Locale } from '@/lib/get-locale'

type HeroScenario = {
  id: string
  label: string
  input: string
  system: string
  output: string
}

type HeroContent = {
  eyebrow: string
  inputLabel: string
  systemLabel: string
  outputLabel: string
  scenarios: [HeroScenario, ...HeroScenario[]]
}

const content: Record<Locale, HeroContent> = {
  en: {
    eyebrow: 'How it becomes a system',
    inputLabel: 'Scattered signals',
    systemLabel: 'N3 operating layer',
    outputLabel: 'Controlled action',
    scenarios: [
      {
        id: 'documents',
        label: 'Document risk',
        input: 'PDFs, renewals and evidence spread across inboxes and folders.',
        system: 'Classify, extract, assign owners and escalate before the deadline.',
        output: 'Visible compliance, audit trail and fewer last-minute surprises.',
      },
      {
        id: 'field',
        label: 'Field updates',
        input: 'Teams report progress, incidents and blockers after the fact.',
        system: 'Turn updates into tasks, alerts, dashboards and accountable handoffs.',
        output: 'Live status, faster decisions and a shared operational truth.',
      },
      {
        id: 'agents',
        label: 'AI assistance',
        input: 'People ask the same questions across chats, sheets and documents.',
        system: 'Agents answer with company context, source material and permissions.',
        output: 'Useful answers, next actions and control instead of isolated prompts.',
      },
    ],
  },
  es: {
    eyebrow: 'Cómo se convierte en sistema',
    inputLabel: 'Señales dispersas',
    systemLabel: 'Capa operativa N3',
    outputLabel: 'Acción controlada',
    scenarios: [
      {
        id: 'documents',
        label: 'Riesgo documental',
        input: 'PDFs, vencimientos y evidencias repartidos entre correos y carpetas.',
        system: 'Clasificar, extraer, asignar responsables y escalar antes del vencimiento.',
        output: 'Cumplimiento visible, trazabilidad y menos sorpresas de última hora.',
      },
      {
        id: 'field',
        label: 'Actualizaciones de terreno',
        input: 'Los equipos reportan avance, incidentes y bloqueos cuando ya pasaron.',
        system: 'Convertir novedades en tareas, alertas, tableros y traspasos responsables.',
        output: 'Estado vivo, decisiones más rápidas y una verdad operativa compartida.',
      },
      {
        id: 'agents',
        label: 'Asistencia IA',
        input: 'Las personas repiten preguntas entre chats, planillas y documentos.',
        system: 'Agentes responden con contexto, fuentes reales y permisos de la empresa.',
        output: 'Respuestas útiles, siguientes acciones y control en vez de prompts aislados.',
      },
    ],
  },
}

const inputIcons = [FileText, MessageSquare, AlertTriangle] as const

export function N3uraliaHeroSystem({ locale }: { locale: Locale }) {
  const page = content[locale]
  const scenarios = page.scenarios
  const [activeId, setActiveId] = useState(page.scenarios[0].id)
  const activeIndex = scenarios.findIndex((scenario) => scenario.id === activeId)
  const safeIndex = activeIndex >= 0 ? activeIndex : 0
  const active = scenarios[safeIndex] ?? scenarios[0]
  const InputIcon = inputIcons[safeIndex] ?? FileText

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveId((current) => {
        const currentIndex = scenarios.findIndex((scenario) => scenario.id === current)
        const next = scenarios[(currentIndex + 1) % scenarios.length] ?? scenarios[0]
        return next.id
      })
    }, 4600)

    return () => window.clearInterval(timer)
  }, [scenarios])

  return (
    <div className="mt-11 w-full max-w-5xl border border-[#1e3431] bg-[#071211]/92 p-3 text-left shadow-[0_34px_90px_-74px_#8fb2aa] backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1e3431] px-3 pb-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8fb2aa]">{page.eyebrow}</p>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label={page.eyebrow}>
          {scenarios.map((scenario) => {
            const selected = scenario.id === active.id
            return (
              <button
                key={scenario.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  selected
                    ? 'border-[#8fb2aa] bg-[#8fb2aa] text-[#06100f]'
                    : 'border-[#28413d] bg-[#0b1715] text-[#9db7b1] hover:border-[#8fb2aa] hover:text-white'
                }`}
                onClick={() => setActiveId(scenario.id)}
              >
                {scenario.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid gap-3 p-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        <article className="border border-[#1e3431] bg-[#0b1715] p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789b96]">{page.inputLabel}</p>
            <InputIcon className="h-5 w-5 text-[#8fb2aa]" />
          </div>
          <p className="text-sm leading-6 text-[#d9e3e0]">{active.input}</p>
        </article>

        <div className="hidden items-center justify-center text-[#789b96] lg:flex">
          <ArrowRight className="h-5 w-5" />
        </div>

        <article className="relative overflow-hidden border border-[#8fb2aa]/45 bg-[#102624] p-5">
          <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#8fb2aa]/10 blur-2xl" />
          <div className="relative mb-5 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fb2aa]">{page.systemLabel}</p>
            <RadioTower className="h-5 w-5 text-[#d9e3e0]" />
          </div>
          <p className="relative text-sm leading-6 text-white">{active.system}</p>
        </article>

        <div className="hidden items-center justify-center text-[#789b96] lg:flex">
          <ArrowRight className="h-5 w-5" />
        </div>

        <article className="border border-[#1e3431] bg-[#0b1715] p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789b96]">{page.outputLabel}</p>
            <CheckCircle2 className="h-5 w-5 text-[#8fb2aa]" />
          </div>
          <p className="text-sm leading-6 text-[#d9e3e0]">{active.output}</p>
        </article>
      </div>
    </div>
  )
}
