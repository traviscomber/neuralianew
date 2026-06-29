'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, BarChart3, FileCheck2, Factory, UsersRound } from 'lucide-react'
import type { Locale } from '@/lib/get-locale'

type PlatformModule = {
  id: string
  label: string
  title: string
  description: string
  image: string
  metric: string
  metricLabel: string
  signal: string
}

const modules: Record<Locale, PlatformModule[]> = {
  en: [
    {
      id: 'command',
      label: 'Command center',
      title: 'Executive control for live operations',
      description: 'Prioritize risks, documents, alerts and owner follow-up from one operational panel.',
      image: '/n3uralia-brand/operational-dashboard.png',
      metric: '86%',
      metricLabel: 'compliance visible',
      signal: 'Risk, alerts and progress in one view',
    },
    {
      id: 'clients',
      label: 'Customer repository',
      title: 'High-volume records without losing context',
      description: 'Bring clients, properties, files, maps, messages and tasks into a searchable workspace.',
      image: '/n3uralia-brand/client-repository.png',
      metric: '38,080',
      metricLabel: 'records organized',
      signal: 'Search, ownership and next actions',
    },
    {
      id: 'plant',
      label: 'Plant intelligence',
      title: 'Measure waste, savings and adoption in weeks',
      description: 'Turn industrial data into a simple operating layer that shows savings in local numbers.',
      image: '/n3uralia-brand/food-plant.png',
      metric: '5-10%',
      metricLabel: 'waste reduction target',
      signal: 'Fast pilots for concrete operational pressure',
    },
    {
      id: 'mining',
      label: 'Mining flow',
      title: 'Field-to-management traceability',
      description: 'Connect production, maintenance, warehouse, HSE and management in a single flow.',
      image: '/n3uralia-brand/mining-platform.png',
      metric: '1',
      metricLabel: 'traceable operating layer',
      signal: 'Production, HSE, documents and decisions',
    },
  ],
  es: [
    {
      id: 'command',
      label: 'Centro de control',
      title: 'Control ejecutivo para operaciones vivas',
      description: 'Prioriza riesgos, documentos, alertas y responsables desde un panel operacional.',
      image: '/n3uralia-brand/operational-dashboard.png',
      metric: '86%',
      metricLabel: 'cumplimiento visible',
      signal: 'Riesgo, alertas y avance en una vista',
    },
    {
      id: 'clients',
      label: 'Repositorio cliente',
      title: 'Registros de alto volumen sin perder contexto',
      description: 'Une clientes, propiedades, archivos, mapas, mensajes y tareas en un espacio buscable.',
      image: '/n3uralia-brand/client-repository.png',
      metric: '38.080',
      metricLabel: 'registros ordenados',
      signal: 'Búsqueda, responsables y siguientes acciones',
    },
    {
      id: 'plant',
      label: 'Inteligencia planta',
      title: 'Mide merma, ahorro y adopcion en semanas',
      description: 'Convierte datos industriales en una capa operativa simple con ahorro visible en moneda local.',
      image: '/n3uralia-brand/food-plant.png',
      metric: '5-10%',
      metricLabel: 'meta de reducción de merma',
      signal: 'Pilotos rápidos para presión operativa concreta',
    },
    {
      id: 'mining',
      label: 'Flujo minero',
      title: 'Trazabilidad de terreno a gerencia',
      description: 'Conecta producción, mantenimiento, bodega, HSE y gerencia en un solo flujo.',
      image: '/n3uralia-brand/mining-platform.png',
      metric: '1',
      metricLabel: 'capa operativa trazable',
      signal: 'Producción, HSE, documentos y decisiones',
    },
  ],
}

const iconById = {
  command: BarChart3,
  clients: UsersRound,
  plant: Factory,
  mining: FileCheck2,
} as const

const copy = {
  en: {
    eyebrow: 'Platform preview',
    title: 'The buyer should see the system before they read the pitch.',
    description:
      'Each module shows how N3uralia turns a messy operation into an interface people can actually use.',
    cta: 'Connect this to solutions',
  },
  es: {
    eyebrow: 'Vista de plataforma',
    title: 'El comprador debe ver el sistema antes de leer el pitch.',
    description:
      'Cada módulo muestra cómo N3uralia convierte una operación desordenada en una interfaz que el equipo puede usar.',
    cta: 'Conectar con soluciones',
  },
}

export function N3uraliaPlatformPreview({ locale }: { locale: Locale }) {
  const items = modules[locale]
  const [activeId, setActiveId] = useState(items[0].id)
  const active = items.find((item) => item.id === activeId) ?? items[0]
  const Icon = iconById[active.id as keyof typeof iconById]
  const text = copy[locale]

  return (
    <section id="platform-preview" className="scroll-mt-28 border-y border-[#1e3431] bg-[#071211] px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8fb2aa]">{text.eyebrow}</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f5fbfa] md:text-6xl">{text.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#9db7b1]">{text.description}</p>

          <div className="mt-10 grid gap-3" role="tablist" aria-label={text.eyebrow}>
            {items.map((item) => {
              const selected = item.id === active.id
              const ModuleIcon = iconById[item.id as keyof typeof iconById]

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`grid grid-cols-[44px_1fr] items-center gap-4 border p-4 text-left transition-colors ${
                    selected ? 'border-[#8fb2aa] bg-[#102624] text-white' : 'border-[#1e3431] bg-[#0b1715] text-[#9db7b1] hover:border-[#46635d]'
                  }`}
                  onClick={() => setActiveId(item.id)}
                >
                  <span className={`grid h-11 w-11 place-items-center border ${selected ? 'border-[#8fb2aa] bg-[#8fb2aa] text-[#06100f]' : 'border-[#28413d] text-[#8fb2aa]'}`}>
                    <ModuleIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.label}</span>
                    <span className="mt-1 block text-xs leading-5 opacity-75">{item.signal}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="border border-[#1e3431] bg-[#102624] p-4 shadow-[0_35px_120px_-80px_#000]">
          <div className="relative aspect-[1.72] overflow-hidden border border-white/10 bg-[#06100f]">
            <Image src={active.image} alt={active.title} fill sizes="(min-width: 1024px) 58vw, 92vw" className="object-cover opacity-88" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/10 bg-[#06100f]/88 px-5 py-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center bg-[#8fb2aa] text-[#06100f]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fb2aa]">{active.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{active.signal}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-semibold leading-none text-white">{active.metric}</p>
                <p className="mt-1 text-xs text-[#8fb2aa]">{active.metricLabel}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 border-x border-b border-white/10 bg-[#071211] p-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h3 className="text-3xl font-semibold leading-tight text-white">{active.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#9db7b1]">{active.description}</p>
            </div>
            <a href="/es/soluciones" className="inline-flex items-center justify-center gap-2 bg-[#8fb2aa] px-5 py-3 text-sm font-semibold text-[#06100f] transition-colors hover:bg-[#d9e3e0]">
              {text.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
