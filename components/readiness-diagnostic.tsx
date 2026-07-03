'use client'

import { useState } from 'react'

type Signal = {
  id: string
  label: string
  shortLabel: string
  question: string
  impact: string
  system: string
}

const signals: Signal[] = [
  {
    id: 'data',
    label: 'Datos dispersos',
    shortLabel: 'Datos',
    question: 'Los datos están en planillas, sistemas separados o reportes manuales.',
    impact: 'La gerencia decide tarde y con información incompleta.',
    system: 'Panel ejecutivo con fuentes conectadas, responsables y alertas.',
  },
  {
    id: 'flows',
    label: 'Flujos sin dueño',
    shortLabel: 'Flujos',
    question: 'Las tareas avanzan por chats, correos y recordatorios personales.',
    impact: 'Las aprobaciones se pierden y nadie ve claramente los bloqueos.',
    system: 'Workflow con estados, roles, trazabilidad y automatizaciones.',
  },
  {
    id: 'docs',
    label: 'Documentos difíciles de controlar',
    shortLabel: 'Docs',
    question: 'Contratos, PDFs y evidencias viven en carpetas o cadenas de correo.',
    impact: 'Sube el riesgo operativo, legal y de cumplimiento.',
    system: 'Inteligencia documental con búsqueda, extracción y control de evidencia.',
  },
  {
    id: 'ai',
    label: 'IA sin uso real',
    shortLabel: 'IA',
    question: 'Hay pilotos o demos, pero no una herramienta conectada al trabajo diario.',
    impact: 'La IA no mejora productividad porque no tiene contexto ni permisos.',
    system: 'Agentes y copilotos conectados a datos, documentos y reglas reales.',
  },
]

const emptyPlan = {
  label: 'Diagnóstico inicial',
  title: 'Partir por el mapa operativo.',
  description: 'Si todavía no está claro el dolor principal, conviene mapear sistemas, datos, documentos, equipos y decisiones críticas antes de construir.',
}

export function ReadinessDiagnostic() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['data', 'flows'])
  const selectedSignals = signals.filter((signal) => selectedIds.includes(signal.id))
  const primarySignal = selectedSignals[0]
  const score = selectedSignals.length
  const maturity = score === 0 ? 18 : Math.min(92, 26 + score * 17)
  const urgency = score >= 3 ? 'Alta' : score === 2 ? 'Media' : score === 1 ? 'Focalizada' : 'Exploratoria'
  const plan = primarySignal
    ? {
        label: `Prioridad ${primarySignal.shortLabel}`,
        title: primarySignal.system,
        description: primarySignal.impact,
      }
    : emptyPlan

  function toggleSignal(signalId: string) {
    setSelectedIds((current) => (current.includes(signalId) ? current.filter((id) => id !== signalId) : [...current, signalId]))
  }

  return (
    <div className='grid gap-5 rounded-[2.4rem] border border-[#d8e5e2] bg-[#173634] p-4 text-white shadow-[0_42px_120px_-82px_#173634] md:p-7 lg:grid-cols-[1fr_0.92fr]'>
      <div className='rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5 md:p-7'>
        <div className='flex flex-wrap items-start justify-between gap-4'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[#b8d1cc]'>Diagnóstico interactivo</p>
            <h3 className='mt-4 max-w-2xl text-3xl font-light leading-tight md:text-4xl'>Marca lo que hoy te frena.</h3>
          </div>
          <div className='rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d9e3e0]'>
            45 segundos
          </div>
        </div>

        <div className='mt-7 grid gap-3 md:grid-cols-2'>
          {signals.map((signal) => {
            const selected = selectedIds.includes(signal.id)
            return (
              <button
                key={signal.id}
                type='button'
                aria-pressed={selected}
                className={`rounded-[1.35rem] border p-5 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8d1cc] ${
                  selected
                    ? 'border-[#b8d1cc] bg-[#d9e3e0] text-[#173634] shadow-[0_28px_70px_-58px_#071b1a]'
                    : 'border-white/10 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]'
                }`}
                onClick={() => toggleSignal(signal.id)}
              >
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${selected ? 'bg-white/70 text-[#526e69]' : 'bg-white/10 text-[#b8d1cc]'}`}>
                  {signal.shortLabel}
                </span>
                <span className='mt-5 block text-lg font-semibold'>{signal.label}</span>
                <span className={`mt-3 block text-sm leading-7 ${selected ? 'text-[#52605d]' : 'text-white/62'}`}>{signal.question}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className='rounded-[1.8rem] border border-white/10 bg-[#fbfbfa] p-5 text-[#243331] md:p-7'>
        <div className='flex items-center justify-between gap-4'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]'>Lectura rápida</p>
            <h3 className='mt-4 text-3xl font-light leading-tight text-[#173634]'>Urgencia {urgency}</h3>
          </div>
          <div className='grid h-20 w-20 place-items-center rounded-full border border-[#b8d1cc] bg-white text-2xl font-light text-[#173634]'>
            {maturity}
          </div>
        </div>

        <div className='mt-7 rounded-full bg-[#e7efec] p-1'>
          <div className='h-2 rounded-full bg-[#173634] transition-all duration-500' style={{ width: `${maturity}%` }} />
        </div>

        <div className='mt-6 rounded-[1.45rem] border border-[#d8e5e2] bg-white p-5'>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#789b96]'>{plan.label}</p>
          <h4 className='mt-3 text-2xl font-light leading-tight text-[#173634]'>{plan.title}</h4>
          <p className='mt-4 text-sm leading-7 text-[#65706d]'>{plan.description}</p>
        </div>

        <div className='mt-5 grid gap-3'>
          {(selectedSignals.length > 0 ? selectedSignals : signals.slice(0, 2)).map((signal, index) => (
            <div key={signal.id} className='grid grid-cols-[36px_1fr] items-center gap-3 rounded-2xl border border-[#d8e5e2] bg-white px-4 py-3'>
              <span className='flex h-9 w-9 items-center justify-center rounded-full bg-[#eef5f2] text-xs font-semibold text-[#526e69]'>0{index + 1}</span>
              <span className='text-sm font-semibold leading-6 text-[#243331]'>{signal.system}</span>
            </div>
          ))}
        </div>

        <div className='mt-6 flex flex-wrap gap-3'>
          <a href='#contacto' className='inline-flex items-center justify-center rounded-full bg-[#173634] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]'>
            Agendar diagnóstico
          </a>
          <a href='#how-we-work' className='inline-flex items-center justify-center rounded-full border border-[#b9d0cb] bg-white px-5 py-3 text-sm font-semibold text-[#526e69] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789b96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]'>
            Ver método
          </a>
        </div>
      </div>
    </div>
  )
}
