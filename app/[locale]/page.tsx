import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { BrandMark, BrandWordmark } from '@/components/brand'
import { OperatingSystemExplorer } from '@/components/operating-system-explorer'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'

interface PageProps {
  params: {
    locale: string
  }
}

type TextItem = {
  title: string
  description: string
}

type NumberedItem = TextItem & {
  number: string
}

type MetricItem = {
  value: string
  label: string
}

type CapabilityItem = TextItem & {
  tag: string
  outcome: string
}

type AgentItem = TextItem & {
  tag: string
  input: string
  output: string
}

type ShowcaseItem = TextItem & {
  subtitle: string
  metrics: string[]
}

function href(locale: Locale, hash: string) {
  return `/${locale}${hash}`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const title =
    locale === 'es'
      ? 'N3uralia | Capacidades, agentes y software operativo'
      : 'N3uralia | Capabilities, agents, and operational software'
  const description =
    locale === 'es'
      ? 'N3uralia diseña capacidades, agentes y software operativo para convertir trabajo manual en sistemas claros, controlados y medibles.'
      : 'N3uralia designs capabilities, agents, and operational software to turn manual work into clear, controlled, measurable systems.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.n3uralia.com/${locale}`,
      languages: {
        es: 'https://www.n3uralia.com/es',
        en: 'https://www.n3uralia.com/en',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.n3uralia.com/${locale}`,
      siteName: 'N3uralia',
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      type: 'website',
    },
  }
}

function ButtonLink({
  href,
  variant = 'solid',
  children,
}: {
  href: string
  variant?: 'solid' | 'outline'
  children: ReactNode
}) {
  const classes = {
    solid:
      'inline-flex items-center justify-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white shadow-[0_28px_60px_-30px_#173634] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946]',
    outline:
      'inline-flex items-center justify-center gap-2 rounded-full border border-[#b9d0cb] bg-white/80 px-6 py-3 text-sm font-semibold text-[#526e69] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789b96] hover:bg-white',
  }

  return (
    <Link href={href} className={classes[variant]}>
      {children}
    </Link>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className='mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]'>{eyebrow}</p> : null}
      <h2 className='text-balance text-4xl font-light leading-tight text-[#243331] md:text-5xl'>{title}</h2>
      {description ? <p className='mt-5 text-pretty text-base leading-8 text-[#65706d]'>{description}</p> : null}
    </div>
  )
}

function Glyph({ children }: { children: string }) {
  return (
    <span className='flex h-11 w-11 items-center justify-center rounded-2xl border border-[#b8d1cc] bg-white text-xs font-semibold uppercase tracking-[0.12em] text-[#789b96]'>
      {children}
    </span>
  )
}

function MetricCard({ value, label }: MetricItem) {
  return (
    <div className='rounded-[1.35rem] border border-[#d8e5e2] bg-white/75 p-5 shadow-[0_24px_70px_-60px_#173634] backdrop-blur'>
      <p className='text-3xl font-light leading-none text-[#173634]'>{value}</p>
      <p className='mt-3 text-sm leading-6 text-[#65706d]'>{label}</p>
    </div>
  )
}

function CommandCenterVisual() {
  const modules = [
    ['Capacidades', 'Tableros, flujos e integraciones'],
    ['Agentes', 'Respuestas, decisiones y contexto'],
    ['Datos', 'ERP, CRM, planillas, APIs'],
    ['Acción', 'Alertas, tareas, seguimiento'],
  ]

  return (
    <div className='relative overflow-hidden rounded-[2rem] border border-[#d7e5e1] bg-[#102b2a] p-4 shadow-[0_45px_120px_-64px_#173634] md:p-6'>
      <div className='absolute -right-20 -top-16 h-64 w-64 rounded-full bg-[#8fb2aa]/30 blur-3xl' />
      <div className='absolute bottom-8 left-8 h-36 w-36 rounded-full bg-[#d9e3e0]/10 blur-3xl' />
      <div className='relative rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-4 text-white md:p-5'>
        <div className='flex items-center justify-between gap-4 border-b border-white/10 pb-4'>
          <div className='flex items-center gap-3'>
            <BrandMark className='h-10 w-10 rounded-2xl border-white/20 bg-white/10 text-[#d9e3e0]' />
            <div>
              <p className='text-sm font-semibold text-white'>N3 Operating Layer</p>
              <p className='text-xs text-white/50'>Capacidades y agentes coordinados en un solo sistema</p>
            </div>
          </div>
          <span className='rounded-full bg-[#9ed0c7]/15 px-3 py-1 text-xs font-medium text-[#cfe5df]'>Live</span>
        </div>

        <div className='mt-6 grid gap-3 sm:grid-cols-2'>
          {modules.map(([label, value]) => (
            <div key={label} className='rounded-2xl border border-white/10 bg-white/[0.06] p-4'>
              <p className='text-xs text-white/45'>{label}</p>
              <p className='mt-5 text-sm font-semibold text-white'>{value}</p>
            </div>
          ))}
        </div>

        <div className='mt-5 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]'>
          <div className='rounded-[1.25rem] border border-white/10 bg-[#092120]/80 p-4'>
            <div className='flex items-center justify-between text-xs text-white/50'>
              <span>Flujo operativo</span>
              <span>+38%</span>
            </div>
            <div className='mt-7 grid h-36 grid-cols-7 items-end gap-2'>
              {[72, 44, 88, 58, 93, 66, 78].map((height, index) => (
                <div key={index} className='rounded-t-full bg-gradient-to-t from-[#7fa6a0] to-[#d9e3e0]' style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className='grid gap-3'>
            {[
              ['Tablero', 'Estado, riesgo y avance sin esperar reportes'],
              ['Agentes', 'Lectura, clasificación y respuesta con contexto'],
              ['Control', 'Permisos, trazabilidad y alertas'],
            ].map(([title, detail]) => (
              <div key={title} className='rounded-[1.15rem] border border-white/10 bg-white/[0.06] p-4'>
                <p className='text-sm font-semibold text-white'>{title}</p>
                <p className='mt-2 text-xs leading-5 text-white/55'>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProblemCard({ item }: { item: NumberedItem }) {
  return (
    <article className='group rounded-[1.6rem] border border-[#d8e5e2] bg-white p-6 shadow-[0_30px_90px_-76px_#173634] transition-all duration-300 hover:-translate-y-1 hover:border-[#a9c6c0]'>
      <p className='text-sm font-semibold text-[#789b96]'>{item.number}</p>
      <h3 className='mt-8 text-2xl font-light leading-tight text-[#243331]'>{item.title}</h3>
      <p className='mt-4 text-sm leading-7 text-[#65706d]'>{item.description}</p>
      <div className='mt-8 h-px bg-gradient-to-r from-[#789b96] via-[#d8e5e2] to-transparent' />
    </article>
  )
}

function CapabilityCard({ item }: { item: CapabilityItem }) {
  return (
    <article className='rounded-[1.6rem] border border-[#d8e5e2] bg-[#fbfbfa] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_34px_90px_-78px_#173634]'>
      <Glyph>{item.tag}</Glyph>
      <h3 className='mt-7 text-xl font-semibold text-[#243331]'>{item.title}</h3>
      <p className='mt-4 text-sm leading-7 text-[#65706d]'>{item.description}</p>
      <p className='mt-6 rounded-2xl bg-[#eef5f2] px-4 py-3 text-sm font-semibold leading-6 text-[#526e69]'>{item.outcome}</p>
    </article>
  )
}

function AgentCard({ item }: { item: AgentItem }) {
  return (
    <article className='overflow-hidden rounded-[1.6rem] border border-[#173634] bg-[#173634] p-6 text-white shadow-[0_34px_110px_-86px_#173634]'>
      <div className='flex items-center justify-between gap-4'>
        <Glyph>{item.tag}</Glyph>
        <span className='rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#c6d7d3]'>
          Agente
        </span>
      </div>
      <h3 className='mt-6 text-2xl font-light leading-tight'>{item.title}</h3>
      <p className='mt-4 text-sm leading-7 text-white/72'>{item.description}</p>
      <div className='mt-6 grid gap-3'>
        <div className='rounded-[1.15rem] border border-white/10 bg-white/[0.06] p-4'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#a9c0bb]'>Input</p>
          <p className='mt-2 text-sm leading-6 text-[#e9f0ee]'>{item.input}</p>
        </div>
        <div className='rounded-[1.15rem] border border-white/10 bg-white/[0.06] p-4'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#a9c0bb]'>Output</p>
          <p className='mt-2 text-sm leading-6 text-[#e9f0ee]'>{item.output}</p>
        </div>
      </div>
    </article>
  )
}

function ProcessStep({ item }: { item: NumberedItem }) {
  return (
    <div className='grid gap-5 border-t border-[#dce8e5] py-8 md:grid-cols-[120px_1fr]'>
      <div className='text-6xl font-light leading-none tabular-nums text-[#b9c5c1]'>{item.number}</div>
      <div>
        <h3 className='text-xl font-semibold text-[#243331]'>{item.title}</h3>
        <p className='mt-3 max-w-3xl text-base leading-8 text-[#65706d]'>{item.description}</p>
      </div>
    </div>
  )
}

function Showcase({ item, contactHref }: { item: ShowcaseItem; contactHref: string }) {
  return (
    <article className='group overflow-hidden rounded-[1.8rem] border border-[#c9d8d5] bg-white shadow-[0_38px_110px_-86px_#173634]'>
      <div className='relative min-h-[260px] overflow-hidden bg-[#173634] p-6 text-white'>
        <div className='absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#93b4ad]/25 blur-3xl' />
        <div className='absolute bottom-0 left-0 right-0 h-px bg-white/20' />
        <div className='relative flex items-start justify-between gap-5'>
          <div>
            <p className='text-sm text-white/55'>{item.subtitle}</p>
            <h3 className='mt-4 text-3xl font-light'>{item.title}</h3>
          </div>
          <BrandMark className='h-12 w-12 rounded-2xl border-white/20 bg-white/10 text-[#d9e3e0]' />
        </div>
        <div className='relative mt-16 grid gap-3 sm:grid-cols-3'>
          {item.metrics.map((metric) => (
            <div key={metric} className='rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-sm backdrop-blur-sm'>
              {metric}
            </div>
          ))}
        </div>
      </div>
      <div className='p-7'>
        <p className='text-base leading-8 text-[#65706d]'>{item.description}</p>
        <Link href={contactHref} className='mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#789b96] transition-colors hover:text-[#173634]'>
          Conversar sobre un sistema similar <ArrowRight className='h-4 w-4' />
        </Link>
      </div>
    </article>
  )
}

function UseCaseMap() {
  return (
    <div className='relative min-h-[460px] overflow-hidden rounded-[2rem] border border-[#d8e5e2] bg-[#fbfbfa] p-8 shadow-[0_34px_90px_-78px_#173634]'>
      <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(120,155,150,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(120,155,150,0.12)_1px,transparent_1px)] bg-[size:44px_44px]' />
      <div className='relative mx-auto mt-8 grid h-72 max-w-md place-items-center rounded-full border border-[#c9d8d5] bg-white/70'>
        <div className='grid h-44 w-44 place-items-center rounded-full border border-[#b8d1cc] bg-[#d9e3e0]/70'>
          <BrandWordmark className='text-3xl text-[#789b96]' />
        </div>
        {['Datos', 'Tareas', 'Documentos', 'IA', 'Alertas', 'Gerencia'].map((label, index) => (
          <span
            key={label}
            className='absolute rounded-full border border-[#d8e5e2] bg-white px-3 py-2 text-xs font-semibold text-[#526e69] shadow-sm'
            style={{
              transform: `rotate(${index * 60}deg) translateY(-156px) rotate(-${index * 60}deg)`,
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function HomePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const navHref = (hash: string) => href(locale, hash)
  const contactHref = `/${locale}/contact`

  const heroMetrics: MetricItem[] = [
    { value: '6', label: 'capacidades visibles desde el inicio.' },
    { value: '4', label: 'agentes especializados para el trabajo repetitivo.' },
    { value: '30d', label: 'para un piloto con foco y señales reales.' },
    { value: '90d', label: 'para una capa lista para producción.' },
  ]

  const signals: NumberedItem[] = [
    { number: '01', title: 'La operación creció más rápido que el sistema', description: 'Los equipos siguen coordinando por planillas, chats, correos y PDFs. La información existe, pero nadie la ve completa a tiempo.' },
    { number: '02', title: 'La gerencia decide con fotos incompletas', description: 'Reportes manuales, datos atrasados y tareas sin dueño convierten cada reunión en arqueología operativa.' },
    { number: '03', title: 'La IA quedó atrapada en pilotos', description: 'Hay curiosidad, demos y herramientas sueltas, pero todavía no existe una capa de inteligencia segura, conectada y usable todos los días.' },
    { number: '04', title: 'El costo oculto ya está apareciendo', description: 'Cada fricción pequeña se convierte en retraso, doble trabajo, riesgo de cumplimiento y pérdida de foco.' },
  ]

  const capabilities: CapabilityItem[] = [
    { tag: 'KP', title: 'Tableros ejecutivos', description: 'KPIs, riesgos, estados y alertas para ver la operación sin esperar reportes manuales.', outcome: 'La gerencia ve lo esencial en un solo lugar.' },
    { tag: 'FL', title: 'Flujos automatizados', description: 'Tareas, aprobaciones, notificaciones, documentos y responsabilidades conectadas.', outcome: 'Menos trabajo repetido, más trazabilidad.' },
    { tag: 'IA', title: 'Agentes con contexto', description: 'Asistentes que consultan documentos, datos internos y reglas reales del negocio.', outcome: 'La IA deja de ser demo y empieza a operar.' },
    { tag: 'ID', title: 'Inteligencia documental', description: 'Clasificación, extracción, comparación y trazabilidad de contratos, informes y PDFs.', outcome: 'Los documentos dejan de vivir escondidos.' },
    { tag: 'IN', title: 'Integraciones', description: 'Conectamos ERP, CRM, planillas, correo, Supabase, APIs y herramientas existentes.', outcome: 'No reemplazamos tu stack, lo ordenamos.' },
    { tag: 'OS', title: 'Portales internos', description: 'Un sistema operativo propio para equipos, procesos, clientes, activos y decisiones.', outcome: 'Un solo punto de trabajo para la operación.' },
  ]

  const agents: AgentItem[] = [
    {
      tag: 'DOC',
      title: 'Agente documental',
      description: 'Lee, clasifica y resume PDFs, contratos y evidencias para que nadie busque a ciegas.',
      input: 'Carpetas, correos, contratos, anexos y versiones dispersas.',
      output: 'Resumen, hallazgos, riesgos y evidencia trazable.',
    },
    {
      tag: 'OPS',
      title: 'Agente operativo',
      description: 'Monitorea estados, detecta bloqueos y empuja el siguiente paso correcto sin perder contexto.',
      input: 'Eventos operativos, estados, tareas y responsables.',
      output: 'Alertas, escalamiento y seguimiento claro.',
    },
    {
      tag: 'ANA',
      title: 'Agente analista',
      description: 'Convierte datos dispersos en lectura ejecutiva y detecta tendencias, faltantes o desvíos.',
      input: 'KPIs, fuentes internas, formularios y reportes.',
      output: 'Lectura accionable para decisiones rápidas.',
    },
    {
      tag: 'AUX',
      title: 'Agente de atención',
      description: 'Responde preguntas frecuentes, guía a usuarios y conecta la consulta con el sistema correcto.',
      input: 'Preguntas, tickets, contexto de usuario y permisos.',
      output: 'Respuesta útil o derivación correcta con contexto.',
    },
  ]

  const methodSteps: NumberedItem[] = [
    { number: '01', title: 'Mapeamos la operación', description: 'Entendemos datos, documentos, equipos, cuellos de botella, permisos y decisiones críticas.' },
    { number: '02', title: 'Diseñamos la arquitectura', description: 'Definimos qué debe ser dashboard, automatización, portal, agente de IA o integración.' },
    { number: '03', title: 'Construimos el sistema', description: 'Creamos un MVP funcional con foco en uso real, seguridad, claridad y velocidad de adopción.' },
    { number: '04', title: 'Integramos con el trabajo diario', description: 'Conectamos herramientas, usuarios, reglas, roles y datos para que el sistema viva dentro de la operación.' },
    { number: '05', title: 'Mejoramos con evidencia', description: 'Medimos uso, fricción, calidad de datos y nuevas oportunidades de automatización.' },
  ]

  const projects: ShowcaseItem[] = [
    { title: 'Motil', subtitle: 'Inteligencia operativa minera', description: 'Centro de control para producción, mantenimiento, bodega, HSE, documentos y gestión en terreno.', metrics: ['Producción', 'Mantenimiento', 'HSE'] },
    { title: 'DocuFleet / LABBE', subtitle: 'Contratistas y documentos', description: 'Sistema para administrar contratistas, conductores, vehículos, cumplimiento documental y reportes.', metrics: ['Conductores', 'Vehículos', 'Cumplimiento'] },
    { title: 'SegurIA', subtitle: 'Predios y seguridad', description: 'Capa tecnológica para monitoreo, alertas, acceso, cámaras, visibilidad y respuesta operativa.', metrics: ['Cámaras', 'Alertas', 'Respuesta'] },
    { title: 'Sur-Realista', subtitle: 'Inteligencia inmobiliaria', description: 'Centro de mando para propiedades, clientes, mensajes, tareas, documentos, mapas y archivos geográficos.', metrics: ['Propiedades', 'Clientes', 'Mapas'] },
  ]

  const useCases: CapabilityItem[] = [
    { tag: 'VG', title: 'Visibilidad gerencial', description: 'Operaciones, KPIs, desempeño y riesgos en un solo lugar.', outcome: 'Ideal para equipos que deciden con datos, no con intuición.' },
    { tag: 'LC', title: 'Licitación y cumplimiento', description: 'Requisitos, plazos, documentos, riesgos y entregas con más control.', outcome: 'Ideal cuando la trazabilidad es parte del negocio.' },
    { tag: 'OT', title: 'Operaciones en terreno', description: 'Logística, mantenimiento, inspecciones, transporte, incidentes y servicios.', outcome: 'Ideal para continuidad operativa y respuesta rápida.' },
    { tag: 'AI', title: 'Asistentes de conocimiento', description: 'Preguntas y respuestas desde documentos, políticas, manuales y datos.', outcome: 'Ideal para bajar fricción en soporte y onboarding.' },
  ]

  const engagementModels: NumberedItem[] = [
    { number: '01', title: 'Auditoría de inteligencia operativa', description: 'Mapa claro de sistemas, cuellos de botella, datos, flujos y oportunidades de IA.' },
    { number: '02', title: 'Sprint de prototipo', description: 'Primera versión enfocada de un dashboard, asistente, automatización o portal interno.' },
    { number: '03', title: 'Sistema en producción', description: 'Construcción completa, integración con datos reales y despliegue para usuarios internos.' },
    { number: '04', title: 'Socio continuo', description: 'Mejora continua, automatización, soporte evolutivo y nuevas capas de inteligencia.' },
  ]

  return (
    <main id='top' className='overflow-hidden bg-[#fbfbfa] text-[#52605d]'>
      <section className='relative isolate min-h-[820px] overflow-hidden bg-[#f6f7f4] pt-24'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_16%,#ffffff_0,#ffffff_18%,transparent_36%),radial-gradient(circle_at_78%_18%,#d9e3e0_0,transparent_38%),linear-gradient(135deg,#fbfbfa_0%,#edf4f1_48%,#fbfbfa_100%)]' />
        <div className='absolute left-0 top-28 -z-10 h-px w-full bg-[#d8e5e2]' />
        <div className='mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-24'>
          <div className='flex flex-col justify-center'>
            <div className='mb-10 inline-flex items-center gap-3 rounded-full border border-[#d8e5e2] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]'>
              Capacidades · Agentes · Software operativo
            </div>
            <BrandWordmark className='mb-10 text-5xl text-[#789b96] md:text-6xl' />
            <p className='mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#789b96]'>Software, datos e IA para operaciones complejas</p>
            <h1 className='text-balance text-5xl font-light leading-[0.98] text-[#173634] md:text-7xl lg:text-8xl'>Capacidades, agentes y software para operar con claridad.</h1>
            <p className='mt-8 max-w-2xl text-pretty text-lg leading-9 text-[#52605d]'>
              Diseñamos sistemas internos, automatizaciones y capas de IA para que empresas medianas y grandes dejen de coordinar en fragmentos y empiecen a ver, decidir y ejecutar en un mismo lugar.
            </p>
            <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
              <ButtonLink href={navHref('#explainer')}>Entender en 30 segundos</ButtonLink>
              <ButtonLink href={navHref('#agents')} variant='outline'>
                Ver agentes <ArrowRight className='ml-2 h-4 w-4' />
              </ButtonLink>
            </div>
          </div>
          <CommandCenterVisual />
        </div>
        <div className='mx-auto grid max-w-7xl gap-3 px-5 pb-16 sm:px-8 md:grid-cols-4 lg:px-10'>
          {heroMetrics.map((metric) => (
            <MetricCard key={metric.value} {...metric} />
          ))}
        </div>
      </section>

      <section id='explainer' className='scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading
            eyebrow='En simple'
            title='Escoge un problema y mira cómo lo convertimos en sistema.'
            description='La promesa se entiende mejor con ejemplos concretos. Toca un dolor operativo, cambia la etapa y ve qué pasa antes, durante y después de N3uralia.'
            align='center'
          />
          <div className='mt-12'>
            <OperatingSystemExplorer />
          </div>
        </div>
      </section>

      <section id='signals' className='scroll-mt-28 px-5 pb-24 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading
            eyebrow='La señal'
            title='Cuando la operación crece, estas son las grietas que primero aparecen.'
            description='Si reconoces estas señales, probablemente no necesitas más hojas sueltas. Necesitas una capa que organice la operación.'
          />
          <div className='mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
            {signals.map((item) => (
              <ProblemCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id='capabilities' className='scroll-mt-28 bg-white px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading
            eyebrow='Capacidades'
            title='La capa operativa que falta entre tus datos, tu equipo y tus decisiones.'
            description='No vendemos software genérico. Diseñamos la pieza exacta que tu operación necesita para ver, decidir, automatizar y escalar.'
            align='center'
          />
          <div className='mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
            {capabilities.map((item) => (
              <CapabilityCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id='agents' className='scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading
            eyebrow='Agentes'
            title='Agentes que hacen el trabajo repetitivo sin perder contexto ni control.'
            description='Cada agente resuelve una parte distinta de la operación. No reemplaza al equipo: le devuelve tiempo, orden y visibilidad.'
          />
          <div className='mt-14 grid gap-5 md:grid-cols-2'>
            {agents.map((item) => (
              <AgentCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#173634] px-5 py-20 text-white sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[#b8d1cc]'>Antes y después</p>
            <h2 className='mt-5 text-balance text-4xl font-light leading-tight md:text-6xl'>De fricción invisible a operación inteligente.</h2>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6'>
              <p className='text-sm font-semibold text-white/60'>Antes</p>
              <p className='mt-8 text-2xl font-light leading-tight'>Planillas, chats, PDFs, decisiones tardías y seguimiento manual.</p>
            </div>
            <div className='rounded-[1.6rem] border border-[#b8d1cc]/30 bg-[#d9e3e0] p-6 text-[#173634]'>
              <p className='text-sm font-semibold text-[#526e69]'>Después</p>
              <p className='mt-8 text-2xl font-light leading-tight'>Datos conectados, agentes útiles, responsables claros y sistemas que aprenden.</p>
            </div>
          </div>
        </div>
      </section>

      <section id='case-studies' className='scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading
            eyebrow='Proyectos'
            title='Sistemas reales para operaciones que no caben en una plantilla.'
            description='Cada proyecto traduce complejidad operacional en una interfaz, un flujo y una capa de inteligencia útil para el día a día.'
            align='center'
          />
          <div className='mt-14 grid gap-6 lg:grid-cols-2'>
            {projects.map((item) => (
              <Showcase key={item.title} item={item} contactHref={contactHref} />
            ))}
          </div>
        </div>
      </section>

      <section id='use-cases' className='scroll-mt-28 bg-white px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]'>
          <UseCaseMap />
          <div>
            <SectionHeading
              eyebrow='Casos de uso'
              title='Dónde se nota primero el cambio.'
              description='N3uralia funciona mejor donde hay documentos, coordinación, activos, equipos y decisiones que hoy viven dispersas.'
            />
            <div className='mt-10 grid gap-4 sm:grid-cols-2'>
              {useCases.map((item) => (
                <CapabilityCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='how-we-work' className='scroll-mt-28 bg-[#fbfbfa] px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading eyebrow='Método' title='Claridad primero. Sistema después.' align='center' />
          <div className='mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
            {methodSteps.map((item) => (
              <ProblemCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id='about' className='scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl gap-12 rounded-[2.4rem] bg-[#173634] p-8 text-white shadow-[0_45px_120px_-78px_#173634] md:p-12 lg:grid-cols-[0.9fr_1.1fr]'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[#b8d1cc]'>Por qué N3uralia</p>
            <h2 className='mt-5 text-balance text-4xl font-light leading-tight md:text-6xl'>Porque la IA sin operación es solo una demo bonita.</h2>
          </div>
          <div className='text-lg leading-9 text-white/72'>
            <p>Tu operación o se vuelve inteligente, o se vuelve un riesgo. Cuando la información vive en planillas, WhatsApp, correos, PDFs y herramientas desconectadas, tu empresa pierde velocidad, control y seguridad.</p>
            <p className='mt-6'>Conectamos estrategia, operaciones, desarrollo de software y automatizaciones para crear una capa inteligente que se usa todos los días.</p>
          </div>
        </div>
      </section>

      <section id='contacto' className='scroll-mt-28 px-5 pb-28 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl items-center gap-10 rounded-[2.4rem] border border-[#d8e5e2] bg-[radial-gradient(circle_at_78%_20%,#d9e3e0_0,transparent_34%),#ffffff] p-8 shadow-[0_38px_120px_-88px_#173634] md:p-12 lg:grid-cols-[1fr_auto]'>
          <div>
            <BrandWordmark className='text-4xl text-[#789b96]' />
            <h2 className='mt-10 max-w-3xl text-balance text-4xl font-light leading-tight text-[#173634] md:text-6xl'>Muévete más rápido. Opera con más seguridad. Controla más.</h2>
            <div className='mt-8 grid gap-3 text-base font-semibold text-[#243331] sm:grid-cols-2'>
              <p>En 1 mes: un MVP funcional.</p>
              <p>En 3 meses: un sistema inteligente conectado.</p>
            </div>
            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <ButtonLink href={contactHref}>Contactar ahora</ButtonLink>
              <ButtonLink href={navHref('#case-studies')} variant='outline'>
                Ver proyectos
              </ButtonLink>
            </div>
          </div>
          <div className='grid h-44 w-44 place-items-center rounded-[2rem] border border-[#b8d1cc] bg-[#d9e3e0]/60 lg:h-56 lg:w-56'>
            <BrandMark className='h-24 w-24 rounded-[1.6rem] text-[#789b96]' />
          </div>
        </div>
      </section>
    </main>
  )
}
