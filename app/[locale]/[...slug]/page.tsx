import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, Database, Eye, Workflow } from 'lucide-react'
import { notFound } from 'next/navigation'
import { BrandMark } from '@/components/brand'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'
import { findChileCityRoute } from '@/lib/chile-city-pages'

interface PageProps {
  params: Promise<{ locale: string; slug: string[] }>
}

const industryEnglish: Record<string, string> = {
  'logística fronteriza': 'border logistics',
  comercio: 'commerce',
  turismo: 'tourism',
  servicios: 'services',
  logística: 'logistics',
  minería: 'mining',
  energía: 'energy',
  'servicios industriales': 'industrial services',
  mantenimiento: 'maintenance',
  contratistas: 'contractors',
  'servicios técnicos': 'technical services',
  agricultura: 'agriculture',
  puerto: 'port operations',
  pesca: 'fisheries',
  puertos: 'ports',
  retail: 'retail',
  hospitalidad: 'hospitality',
  transporte: 'transport',
  distribución: 'distribution',
  'servicios empresariales': 'business services',
  finanzas: 'finance',
  agroindustria: 'agribusiness',
  alimentos: 'food production',
  industria: 'industry',
  forestal: 'forestry',
  manufactura: 'manufacturing',
  ganadería: 'livestock',
  acuicultura: 'aquaculture',
}

function resolveCity(slug: string[]) {
  if (slug.length !== 1) return null
  return findChileCityRoute(slug[0])
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const city = resolveCity(params.slug)
  if (!city) return { robots: { index: false, follow: false } }
  const isES = locale === 'es'
  return buildLocalizedMetadata({
    locale,
    path: `/${params.slug[0]}`,
    title: isES
      ? `Agentes de IA para empresas en ${city.city}, Chile | N3uralia`
      : `AI agents for businesses in ${city.city}, Chile | N3uralia`,
    description: isES
      ? `Diseño e integración de agentes de IA, automatización y software para operaciones en ${city.city}: ${city.focusEs}.`
      : `AI agents, automation and software for operations in ${city.city}: ${city.focusEn}.`,
  })
}

export default async function ChileCityAgentPage(props: PageProps) {
  const params = await props.params
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const city = resolveCity(params.slug)
  if (!city) notFound()

  const isES = locale === 'es'
  const base = `/${locale}`
  const industries = isES ? city.industries : city.industries.map((industry) => industryEnglish[industry] ?? industry)
  const capabilities = [
    {
      icon: Database,
      title: isES ? 'Datos conectados' : 'Connected data',
      text: isES
        ? 'Integramos APIs, ERP, CRM, documentos, archivos y bases de datos sin crear una fuente paralela de verdad.'
        : 'We connect APIs, ERP, CRM, documents, files and databases without creating a parallel source of truth.',
    },
    {
      icon: Workflow,
      title: isES ? 'Workflows gobernados' : 'Governed workflows',
      text: isES
        ? 'Automatizamos estados, aprobaciones, alertas, asignaciones y escalamiento con trazabilidad.'
        : 'We automate states, approvals, alerts, assignments and escalation with traceability.',
    },
    {
      icon: Bot,
      title: isES ? 'Asistentes y agentes de IA' : 'AI assistants and agents',
      text: isES
        ? 'Diseñamos agentes alrededor de tareas, herramientas, permisos y límites explícitos.'
        : 'We design agents around explicit tasks, tools, permissions and boundaries.',
    },
    {
      icon: Eye,
      title: isES ? 'Reconocimiento y señales' : 'Recognition and signals',
      text: isES
        ? 'Cuando aplica, conectamos visión computacional, evidencia visual y señales de terreno a flujos operacionales.'
        : 'Where useful, we connect computer vision, visual evidence and field signals to operational workflows.',
    },
  ]

  return (
    <main className="bg-[#030606] text-[#d8e0df]">
      <section className="border-b border-[#739694]/20">
        <div className="mx-auto grid min-h-[72vh] max-w-[1240px] items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-5">
          <div>
            <p className="font-[var(--font-rajdhani)] text-[11px] uppercase tracking-[0.2em] text-[#739694]">
              N3uralia / {city.region}
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {isES ? 'Agentes de IA para operaciones en' : 'AI agents for operations in'}{' '}
              <span className="text-[#8fb2af]">{city.city}.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#9eaaaa] sm:text-lg">
              {isES
                ? `Diseñamos sistemas de IA y software para equipos que operan en ${city.city}, con foco en ${city.focusEs}.`
                : `We design AI and software systems for teams operating in ${city.city}, with a focus on ${city.focusEn}.`}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={`${base}/diagnostico`} className="inline-flex items-center gap-2 border border-[#739694] bg-[#739694] px-5 py-3 font-[var(--font-rajdhani)] text-xs uppercase tracking-[0.15em] text-[#030606] transition-opacity hover:opacity-90">
                {isES ? 'Agendar diagnóstico' : 'Book a diagnosis'} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={isES ? '/es/soluciones' : '/en/solutions'} className="inline-flex items-center gap-2 border border-[#739694]/45 px-5 py-3 font-[var(--font-rajdhani)] text-xs uppercase tracking-[0.15em] text-[#d8e0df] hover:border-[#739694]">
                {isES ? 'Ver expertise' : 'Explore expertise'}
              </Link>
            </div>
          </div>

          <div className="relative border border-[#739694]/25 bg-[#07100f] p-8 sm:p-10">
            <span aria-hidden className="absolute left-4 top-4 h-3 w-3 border-l border-t border-[#739694]" />
            <span aria-hidden className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-[#739694]" />
            <BrandMark className="h-12 w-12 text-[#739694]" />
            <p className="mt-10 font-[var(--font-rajdhani)] text-[10px] uppercase tracking-[0.18em] text-[#739694]">
              {isES ? 'Contexto operacional' : 'Operational context'}
            </p>
            <h2 className="mt-3 text-2xl font-medium">{city.city} · {city.region}</h2>
            <div className="mt-7 grid grid-cols-2 gap-px border border-[#739694]/15 bg-[#739694]/15">
              {industries.map((industry) => (
                <div key={industry} className="bg-[#07100f] px-4 py-4 text-sm text-[#b7c3c1]">{industry}</div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-[#82908e]">
              {isES
                ? 'La solución se diseña según el proceso real, los sistemas existentes y los controles que requiere cada organización. No asumimos una arquitectura estándar por ciudad.'
                : 'The solution is designed around the real process, existing systems and controls each organization requires. We do not assume a standard architecture by city.'}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#739694]/20 bg-[#050908]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-5">
          <header className="max-w-3xl">
            <p className="font-[var(--font-rajdhani)] text-[11px] uppercase tracking-[0.2em] text-[#739694]">02 / {isES ? 'CAPACIDADES' : 'CAPABILITIES'}</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.03em] sm:text-4xl">
              {isES ? 'Qué podemos conectar en la operación.' : 'What we can connect across the operation.'}
            </h2>
          </header>
          <div className="mt-10 grid gap-px border border-[#739694]/15 bg-[#739694]/15 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="bg-[#030606] p-6 lg:min-h-[260px]">
                <div className="flex items-center justify-between">
                  <span className="font-[var(--font-rajdhani)] text-[10px] tracking-[0.18em] text-[#667573]">0{index + 1}</span>
                  <Icon className="h-5 w-5 text-[#739694]" />
                </div>
                <h3 className="mt-10 text-xl font-medium">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#8f9d9b]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-5">
          <div className="max-w-3xl">
            <p className="font-[var(--font-rajdhani)] text-[11px] uppercase tracking-[0.2em] text-[#739694]">03 / {isES ? 'SIGUIENTE PASO' : 'NEXT STEP'}</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.03em] sm:text-4xl">
              {isES ? `Partamos por una operación concreta en ${city.city}.` : `Start with one concrete operation in ${city.city}.`}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#9eaaaa]">
              {isES
                ? 'Revisamos el flujo actual, sus datos, sistemas, responsables y puntos de fricción antes de decidir dónde usar IA o automatización.'
                : 'We review the current workflow, data, systems, owners and friction points before deciding where AI or automation belongs.'}
            </p>
          </div>
          <Link href={`${base}/diagnostico`} className="inline-flex w-fit items-center gap-2 border border-[#739694] px-5 py-3 font-[var(--font-rajdhani)] text-xs uppercase tracking-[0.15em] text-[#d8e0df] hover:bg-[#739694] hover:text-[#030606]">
            {isES ? 'Diagnosticar operación' : 'Diagnose the operation'} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
