'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { Locale } from '@/lib/get-locale'

type ConsoleScenario = {
  id: string
  label: string
  metric: string
  before: string
  system: string
  after: string
}

const content: Record<Locale, { eyebrow: string; title: string; helper: string; stages: string[]; scenarios: ConsoleScenario[]; cta: string }> = {
  en: {
    eyebrow: 'Interactive map',
    title: 'Pick the operational drag. See the system N3uralia builds around it.',
    helper: 'The work starts by making scattered signals visible, then turning them into workflows, agents, dashboards, and follow-up.',
    stages: ['Before', 'N3 system', 'After'],
    cta: 'Explore solutions',
    scenarios: [
      {
        id: 'documents',
        label: 'Documents and compliance',
        metric: 'From chasing files to visible risk',
        before: 'Contracts, permits, evidence and renewals live across folders, email and chat.',
        system: 'A document intelligence layer classifies, extracts, alerts and keeps every owner accountable.',
        after: 'Teams see risk, status and evidence before the operation becomes exposed.',
      },
      {
        id: 'field',
        label: 'Field operations',
        metric: 'From late updates to live control',
        before: 'Tasks, incidents and handoffs depend on manual reports after the work already happened.',
        system: 'Mobile flows, alerts, dashboards and responsible owners connect the field with management.',
        after: 'The operation moves with traceability, faster escalation and fewer blind spots.',
      },
      {
        id: 'agents',
        label: 'AI agents in production',
        metric: 'From demo prompts to useful work',
        before: 'AI experiments are disconnected from data, permissions, documents and daily workflows.',
        system: 'Agents work with real context, guardrails, source material and clear escalation paths.',
        after: 'People get answers, summaries and next actions without losing control.',
      },
    ],
  },
  es: {
    eyebrow: 'Mapa interactivo',
    title: 'Elige la fricción operativa. Mira el sistema que N3uralia construye alrededor.',
    helper: 'Partimos haciendo visibles las señales dispersas y las convertimos en flujos, agentes, tableros y seguimiento.',
    stages: ['Antes', 'Sistema N3', 'Despues'],
    cta: 'Ver soluciones',
    scenarios: [
      {
        id: 'documents',
        label: 'Documentos y cumplimiento',
        metric: 'De perseguir archivos a ver riesgo',
        before: 'Contratos, permisos, evidencias y renovaciones viven entre carpetas, correo y chat.',
        system: 'Una capa de inteligencia documental clasifica, extrae, alerta y mantiene responsables claros.',
        after: 'Los equipos ven riesgo, estado y evidencia antes de que la operación quede expuesta.',
      },
      {
        id: 'field',
        label: 'Operación en terreno',
        metric: 'De reportes tarde a control vivo',
        before: 'Tareas, incidentes y traspasos dependen de reportes manuales despues de que el trabajo ocurrio.',
        system: 'Flujos moviles, alertas, tableros y responsables conectan terreno con gerencia.',
        after: 'La operación avanza con trazabilidad, escalamiento rápido y menos puntos ciegos.',
      },
      {
        id: 'agents',
        label: 'Agentes IA en producción',
        metric: 'De prompts demo a trabajo útil',
        before: 'Los experimentos con IA estan desconectados de datos, permisos, documentos y flujos diarios.',
        system: 'Los agentes trabajan con contexto real, guardrails, fuentes y rutas de escalamiento claras.',
        after: 'Las personas reciben respuestas, resumenes y siguientes acciones sin perder control.',
      },
    ],
  },
}

export function N3uraliaLandingConsole({ locale }: { locale: Locale }) {
  const page = content[locale]
  const [activeId, setActiveId] = useState(page.scenarios[0].id)
  const [activeStage, setActiveStage] = useState(1)
  const scenario = page.scenarios.find((item) => item.id === activeId) ?? page.scenarios[0]
  const stageCopy = [scenario.before, scenario.system, scenario.after]

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="border border-[#cfded9] bg-[#f7faf8] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#789b96]">{page.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-light leading-tight text-[#173634] md:text-4xl">{page.title}</h2>
        <p className="mt-5 text-sm leading-7 text-[#65706d]">{page.helper}</p>

        <div className="mt-8 grid gap-3" role="tablist" aria-label={page.eyebrow}>
          {page.scenarios.map((item) => {
            const selected = item.id === activeId
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`border p-4 text-left transition-colors ${
                  selected ? 'border-[#789b96] bg-white text-[#173634]' : 'border-[#d8e5e2] bg-transparent text-[#52605d] hover:bg-white'
                }`}
                onClick={() => setActiveId(item.id)}
              >
                <span className="block text-sm font-semibold">{item.label}</span>
                <span className="mt-2 block text-xs leading-5 text-[#789b96]">{item.metric}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="border border-[#173634] bg-[#102624] p-5 text-white md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-sm font-semibold text-[#b8d1cc]">{scenario.metric}</p>
            <h3 className="mt-2 text-3xl font-light leading-tight">{scenario.label}</h3>
          </div>
          <a
            href="/es/soluciones"
            className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-semibold text-[#e8efed] transition-colors hover:bg-white hover:text-[#173634]"
          >
            {page.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3" role="tablist" aria-label="System stages">
          {page.stages.map((stage, index) => {
            const selected = index === activeStage
            return (
              <button
                key={stage}
                type="button"
                aria-selected={selected}
                className={`border p-4 text-left transition-colors ${
                  selected ? 'border-[#d9e3e0] bg-[#d9e3e0] text-[#173634]' : 'border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08]'
                }`}
                onClick={() => setActiveStage(index)}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">0{index + 1}</span>
                <span className="mt-5 block text-lg font-semibold">{stage}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-5 border border-white/10 bg-white/[0.05] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8d1cc]">{page.stages[activeStage]}</p>
          <p className="mt-4 text-2xl font-light leading-snug text-white">{stageCopy[activeStage]}</p>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {page.stages.map((stage, index) => (
            <div key={stage} className="flex items-start gap-3 border border-white/10 bg-white/[0.04] p-4">
              <CheckCircle2 className={`mt-0.5 h-4 w-4 ${index <= activeStage ? 'text-[#d9e3e0]' : 'text-white/25'}`} />
              <span className="text-sm leading-6 text-white/70">{stageCopy[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
