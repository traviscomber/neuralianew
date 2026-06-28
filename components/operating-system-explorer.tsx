'use client'

import { useState } from 'react'

type Scenario = {
  id: string
  label: string
  tag: string
  pain: string
  build: string
  result: string
  metric: string
  flow: string[]
}

const scenarios: Scenario[] = [
  {
    id: 'reportes',
    label: 'Reportes manuales',
    tag: 'KP',
    pain: 'La información llega tarde, vive en planillas y depende de alguien que la arme cada semana.',
    build: 'Conectamos fuentes, limpiamos datos y diseñamos un panel ejecutivo con alertas y responsables.',
    result: 'La gerencia ve estado, riesgo y avance sin esperar reportes manuales.',
    metric: 'De días a minutos',
    flow: ['Conectar datos', 'Ordenar KPIs', 'Activar alertas', 'Decidir a tiempo'],
  },
  {
    id: 'documentos',
    label: 'Documentos dispersos',
    tag: 'ID',
    pain: 'Contratos, PDFs, requisitos y evidencias quedan repartidos entre carpetas, correos y chats.',
    build: 'Creamos una capa documental con clasificación, extracción, búsqueda y trazabilidad asistida por IA.',
    result: 'El equipo encuentra, compara y controla documentos críticos sin perseguir archivos.',
    metric: 'Menos búsqueda, más control',
    flow: ['Centralizar archivos', 'Leer con IA', 'Detectar riesgos', 'Trazar evidencia'],
  },
  {
    id: 'aprobaciones',
    label: 'Aprobaciones lentas',
    tag: 'FL',
    pain: 'Las tareas avanzan por mensajes, nadie sabe quién bloquea qué y las aprobaciones se pierden.',
    build: 'Diseñamos flujos con roles, estados, notificaciones, reglas de negocio y visibilidad por equipo.',
    result: 'Cada persona sabe qué hacer, cuándo hacerlo y qué impacto tiene si se atrasa.',
    metric: 'Menos fricción operativa',
    flow: ['Mapear roles', 'Crear estados', 'Automatizar avisos', 'Cerrar ciclos'],
  },
  {
    id: 'ia',
    label: 'IA sin producción',
    tag: 'IA',
    pain: 'Hay pruebas con IA, pero no están conectadas a datos, permisos ni procesos reales de la empresa.',
    build: 'Construimos agentes y copilotos conectados a documentos, sistemas internos y reglas operativas.',
    result: 'La IA deja de ser demo y se convierte en una herramienta diaria con contexto y control.',
    metric: 'IA usable todos los días',
    flow: ['Definir casos', 'Conectar contexto', 'Controlar permisos', 'Medir uso real'],
  },
]

const stages = ['Hoy', 'Construimos', 'Resultado']

export function OperatingSystemExplorer() {
  const [activeId, setActiveId] = useState(scenarios[0].id)
  const [activeStage, setActiveStage] = useState(1)
  const activeScenario = scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0]
  const stageCopy = [activeScenario.pain, activeScenario.build, activeScenario.result]

  return (
    <div className='rounded-[2.4rem] border border-[#d8e5e2] bg-white p-5 shadow-[0_38px_120px_-88px_#173634] md:p-8'>
      <div className='grid gap-6 lg:grid-cols-[0.9fr_1.1fr]'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[#789b96]'>Elige el dolor operativo</p>
          <div className='mt-6 grid gap-3' role='tablist' aria-label='Dolores operativos'>
            {scenarios.map((scenario) => {
              const selected = scenario.id === activeId
              return (
                <button
                  key={scenario.id}
                  type='button'
                  role='tab'
                  aria-selected={selected}
                  aria-controls='operating-system-panel'
                  className={`grid grid-cols-[44px_1fr_auto] items-center gap-4 rounded-[1.35rem] border p-4 text-left transition-all duration-300 ${
                    selected
                      ? 'border-[#789b96] bg-[#173634] text-white shadow-[0_28px_70px_-54px_#173634]'
                      : 'border-[#d8e5e2] bg-[#fbfbfa] text-[#52605d] hover:border-[#b8d1cc] hover:bg-white'
                  }`}
                  onClick={() => {
                    setActiveId(scenario.id)
                    setActiveStage(1)
                  }}
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-xs font-semibold ${selected ? 'border-white/15 bg-white/10 text-[#d9e3e0]' : 'border-[#b8d1cc] bg-white text-[#789b96]'}`}>
                    {scenario.tag}
                  </span>
                  <span className='text-sm font-semibold'>{scenario.label}</span>
                  <span aria-hidden='true' className={selected ? 'text-[#d9e3e0]' : 'text-[#789b96]'}>&gt;</span>
                </button>
              )
            })}
          </div>
        </div>

        <div id='operating-system-panel' role='tabpanel' className='rounded-[1.8rem] border border-[#d8e5e2] bg-[#fbfbfa] p-5 md:p-7'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div>
              <p className='text-sm font-semibold text-[#789b96]'>{activeScenario.metric}</p>
              <h3 className='mt-3 text-3xl font-light leading-tight text-[#173634]'>{activeScenario.label}</h3>
            </div>
            <div className='rounded-full border border-[#b8d1cc] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#526e69]'>
              Sistema N3
            </div>
          </div>

          <div className='mt-7 grid gap-3 sm:grid-cols-3' role='tablist' aria-label='Etapas de solución'>
            {stages.map((stage, index) => {
              const selected = index === activeStage
              return (
                <button
                  key={stage}
                  type='button'
                  role='tab'
                  aria-selected={selected}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    selected
                      ? 'border-[#173634] bg-[#173634] text-white'
                      : 'border-[#d8e5e2] bg-white text-[#52605d] hover:border-[#b8d1cc]'
                  }`}
                  onClick={() => setActiveStage(index)}
                >
                  {stage}
                </button>
              )
            })}
          </div>

          <div className='mt-5 rounded-[1.35rem] border border-[#d8e5e2] bg-white p-5' aria-live='polite'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#789b96]'>{stages[activeStage]}</p>
            <p className='mt-4 text-lg leading-8 text-[#243331]'>{stageCopy[activeStage]}</p>
          </div>

          <div className='mt-6 grid gap-3 md:grid-cols-4'>
            {activeScenario.flow.map((step, index) => (
              <div key={step} className='rounded-2xl border border-[#d8e5e2] bg-white p-4'>
                <p className='text-xs font-semibold text-[#789b96]'>0{index + 1}</p>
                <p className='mt-5 text-sm font-semibold leading-6 text-[#243331]'>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
