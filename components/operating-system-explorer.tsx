'use client'

import { useState } from 'react'

type Scenario = {
  id: string
  label: string
  tag: string
  question: string
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
    question: 'Necesitas saber qué está pasando sin esperar una planilla nueva.',
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
    question: 'Tu equipo pierde tiempo buscando, revisando y comparando archivos.',
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
    question: 'Las tareas se traban porque nadie ve claramente quién debe actuar.',
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
    question: 'Ya probaron IA, pero todavía no vive dentro del trabajo diario.',
    pain: 'Hay pruebas con IA, pero no están conectadas a datos, permisos ni procesos reales de la empresa.',
    build: 'Construimos agentes y copilotos conectados a documentos, sistemas internos y reglas operativas.',
    result: 'La IA deja de ser demo y se convierte en una herramienta diaria con contexto y control.',
    metric: 'IA usable todos los días',
    flow: ['Definir casos', 'Conectar contexto', 'Controlar permisos', 'Medir uso real'],
  },
]

const stages = [
  {
    label: 'Hoy',
    title: 'El problema',
    eyebrow: 'Sin sistema',
  },
  {
    label: 'Construimos',
    title: 'La arquitectura',
    eyebrow: 'Sistema N3',
  },
  {
    label: 'Resultado',
    title: 'La operación clara',
    eyebrow: 'En producción',
  },
]

export function OperatingSystemExplorer() {
  const [activeId, setActiveId] = useState(scenarios[0].id)
  const [activeStage, setActiveStage] = useState(1)
  const activeScenario = scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0]
  const stageCopy = [activeScenario.pain, activeScenario.build, activeScenario.result]

  return (
    <div className='rounded-[2.4rem] border border-[#d8e5e2] bg-white p-4 shadow-[0_38px_120px_-88px_#173634] md:p-7'>
      <div className='grid gap-5 lg:grid-cols-[0.82fr_1.18fr]'>
        <div className='rounded-[1.8rem] border border-[#d8e5e2] bg-[#fbfbfa] p-5 md:p-6'>
          <div className='rounded-[1.4rem] bg-[#173634] p-5 text-white'>
            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[#b8d1cc]'>Interactúa</p>
            <h3 className='mt-4 text-2xl font-light leading-tight'>Elige un dolor operativo.</h3>
            <p className='mt-3 text-sm leading-6 text-[#d9e3e0]'>Luego cambia entre Hoy, Construimos y Resultado para ver el antes y después.</p>
          </div>

          <div className='mt-5 grid gap-3' role='tablist' aria-label='Dolores operativos'>
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
                      ? 'border-[#789b96] bg-white text-[#173634] shadow-[0_24px_70px_-58px_#173634]'
                      : 'border-[#d8e5e2] bg-white/60 text-[#52605d] hover:border-[#b8d1cc] hover:bg-white'
                  }`}
                  onClick={() => {
                    setActiveId(scenario.id)
                    setActiveStage(1)
                  }}
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-xs font-semibold ${selected ? 'border-[#b8d1cc] bg-[#eef5f2] text-[#526e69]' : 'border-[#d8e5e2] bg-white text-[#789b96]'}`}>
                    {scenario.tag}
                  </span>
                  <span>
                    <span className='block text-sm font-semibold'>{scenario.label}</span>
                    <span className={`mt-1 block text-xs leading-5 ${selected ? 'text-[#65706d]' : 'text-[#8a9693]'}`}>{scenario.question}</span>
                  </span>
                  <span aria-hidden='true' className={selected ? 'text-[#789b96]' : 'text-[#b8c6c2]'}>&gt;</span>
                </button>
              )
            })}
          </div>
        </div>

        <div id='operating-system-panel' role='tabpanel' className='rounded-[1.8rem] border border-[#d8e5e2] bg-[#fbfbfa] p-5 md:p-7'>
          <div className='flex flex-wrap items-start justify-between gap-4'>
            <div className='max-w-xl'>
              <p className='text-sm font-semibold text-[#789b96]'>{activeScenario.metric}</p>
              <h3 className='mt-3 text-3xl font-light leading-tight text-[#173634] md:text-4xl'>{activeScenario.label}</h3>
              <p className='mt-4 text-base leading-7 text-[#65706d]'>{activeScenario.question}</p>
            </div>
            <div className='rounded-full border border-[#b8d1cc] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#526e69]'>
              Simulador N3
            </div>
          </div>

          <div className='mt-7 grid gap-3 sm:grid-cols-3' role='tablist' aria-label='Etapas de solución'>
            {stages.map((stage, index) => {
              const selected = index === activeStage
              return (
                <button
                  key={stage.label}
                  type='button'
                  role='tab'
                  aria-selected={selected}
                  aria-controls='stage-explanation'
                  className={`rounded-[1.15rem] border p-4 text-left transition-all duration-300 ${
                    selected
                      ? 'border-[#173634] bg-[#173634] text-white shadow-[0_24px_55px_-42px_#173634]'
                      : 'border-[#d8e5e2] bg-white text-[#52605d] hover:border-[#b8d1cc]'
                  }`}
                  onClick={() => setActiveStage(index)}
                >
                  <span className={`block text-xs font-semibold uppercase tracking-[0.18em] ${selected ? 'text-[#b8d1cc]' : 'text-[#789b96]'}`}>{stage.eyebrow}</span>
                  <span className='mt-3 block text-base font-semibold'>{stage.label}</span>
                  <span className={`mt-1 block text-sm ${selected ? 'text-[#d9e3e0]' : 'text-[#65706d]'}`}>{stage.title}</span>
                </button>
              )
            })}
          </div>

          <div className='mt-5 grid gap-4 xl:grid-cols-[1fr_0.82fr]'>
            <div id='stage-explanation' className='rounded-[1.45rem] border border-[#d8e5e2] bg-white p-5 md:p-6' aria-live='polite'>
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#789b96]'>{stages[activeStage].eyebrow}</p>
              <h4 className='mt-3 text-2xl font-light leading-tight text-[#173634]'>{stages[activeStage].title}</h4>
              <p className='mt-4 text-lg leading-8 text-[#243331]'>{stageCopy[activeStage]}</p>
            </div>

            <div className='rounded-[1.45rem] border border-[#d8e5e2] bg-white p-5 md:p-6'>
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#789b96]'>Mapa rápido</p>
              <div className='mt-5 grid gap-3'>
                {activeScenario.flow.map((step, index) => (
                  <div key={step} className='grid grid-cols-[34px_1fr] items-center gap-3'>
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold ${index <= activeStage + 1 ? 'border-[#789b96] bg-[#eef5f2] text-[#526e69]' : 'border-[#d8e5e2] bg-white text-[#9ba8a4]'}`}>
                      0{index + 1}
                    </span>
                    <span className='rounded-2xl border border-[#d8e5e2] bg-[#fbfbfa] px-4 py-3 text-sm font-semibold leading-6 text-[#243331]'>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-5 grid gap-3 md:grid-cols-3'>
            {stages.map((stage, index) => (
              <button
                key={stage.label}
                type='button'
                onClick={() => setActiveStage(index)}
                className={`rounded-[1.15rem] border p-4 text-left transition-colors ${
                  index === activeStage ? 'border-[#789b96] bg-[#eef5f2]' : 'border-[#d8e5e2] bg-white hover:border-[#b8d1cc]'
                }`}
              >
                <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]'>{stage.label}</p>
                <p className='mt-3 text-sm leading-6 text-[#52605d]'>{stageCopy[index]}</p>
              </button>
            ))}
          </div>

          <div className='mt-6 flex flex-wrap gap-3'>
            <a href='#contacto' className='inline-flex items-center justify-center rounded-full bg-[#173634] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946]'>
              Mapear mi operación
            </a>
            <a href='#case-studies' className='inline-flex items-center justify-center rounded-full border border-[#b9d0cb] bg-white px-5 py-3 text-sm font-semibold text-[#526e69] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789b96]'>
              Ver ejemplos
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
