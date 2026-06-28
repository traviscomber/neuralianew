import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  ChartNoAxesCombined,
  ClipboardCheck,
  Factory,
  FileText,
  Gauge,
  Layers3,
  MapPinned,
  SearchCheck,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { BrandMark, BrandWordmark } from '@/components/brand'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'

interface PageProps {
  params: {
    locale: string
  }
}

type LinkItem = {
  label: string
  href: string
}

type TextItem = {
  title: string
  description: string
}

type NumberedItem = TextItem & {
  number: string
}

type VisualItem = TextItem & {
  icon: ReactNode
}

type ShowcaseItem = TextItem & {
  id: string
  subtitle: string
  links: LinkItem[]
  metrics: string[]
}

function href(locale: Locale, hash: string) {
  return `/${locale}${hash}`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const title = locale === 'es' ? 'N3uralia | Software e IA para operaciones reales' : 'N3uralia | Software and AI for real operations'
  const description =
    locale === 'es'
      ? 'N3uralia diseña sistemas de software e IA para empresas medianas y grandes, convirtiendo datos dispersos y operaciones manuales en sistemas productivos controlados.'
      : 'N3uralia designs software and AI systems for large and medium-scale companies, turning scattered data and manual operations into controlled production systems.'

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
  const classes =
    variant === 'solid'
      ? 'inline-flex items-center justify-center gap-2 rounded-md bg-[#789b96] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#638782]'
      : 'inline-flex items-center justify-center gap-2 rounded-md border border-[#b8d1cc] bg-white px-5 py-3 text-sm font-medium text-[#6f918c] transition-colors hover:border-[#789b96] hover:bg-[#f4f8f7]'

  return (
    <Link href={href} className={classes}>
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
      {eyebrow ? <p className='mb-4 text-sm font-medium text-[#789b96]'>{eyebrow}</p> : null}
      <h2 className='text-4xl font-light leading-tight text-[#66706e] md:text-5xl'>{title}</h2>
      {description ? <p className='mt-5 text-base leading-8 text-[#747b79]'>{description}</p> : null}
    </div>
  )
}

function NumberedRow({ number, title, description }: NumberedItem) {
  return (
    <div className='grid gap-5 border-t border-[#dfe8e5] py-8 md:grid-cols-[96px_1fr]'>
      <div className='text-5xl font-light leading-none text-[#aeb9b6]'>{number}</div>
      <div>
        <h3 className='text-lg font-semibold text-[#3f4745]'>{title}</h3>
        <p className='mt-3 max-w-3xl text-base leading-8 text-[#747b79]'>{description}</p>
      </div>
    </div>
  )
}

function SystemCanvas() {
  const rows = [
    ['Datos', 'ERP', 'CRM', 'PDF'],
    ['IA', 'Alertas', 'Aprobaciones', 'Reportes'],
    ['Operaciones', 'Terreno', 'Finanzas', 'Gerencia'],
  ]

  return (
    <div className='relative min-h-[420px] overflow-hidden border border-[#d8e5e2] bg-[#f8fbfa] p-6 md:min-h-[520px]'>
      <div className='absolute left-0 right-0 top-1/2 h-px bg-[#c8ddd8]' />
      <div className='absolute bottom-0 top-0 left-1/2 w-px bg-[#c8ddd8]' />
      <div className='relative flex h-full flex-col justify-between'>
        <div className='flex items-center justify-between text-sm text-[#789b96]'>
          <span>Operacion conectada</span>
          <span>Tiempo real</span>
        </div>
        <div className='grid gap-4'>
          {rows.map((row) => (
            <div key={row.join('-')} className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
              {row.map((item) => (
                <div key={item} className='border border-[#d8e5e2] bg-white px-4 py-3 text-sm text-[#66706e] shadow-sm'>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className='flex items-end justify-between gap-8'>
          <BrandMark className='h-20 w-20 text-[#789b96]' />
          <div className='grid flex-1 gap-2'>
            <div className='h-2 w-full bg-[#d8e5e2]' />
            <div className='h-2 w-3/4 bg-[#9ebbb5]' />
            <div className='h-2 w-1/2 bg-[#d8e5e2]' />
          </div>
        </div>
      </div>
    </div>
  )
}

function ExpertisePanel({ item }: { item: VisualItem }) {
  return (
    <article className='border-r border-white/55 px-7 py-10 last:border-r-0'>
      <div className='mb-8 flex h-10 w-10 items-center justify-center border border-[#b8d1cc] bg-white text-[#789b96]'>
        {item.icon}
      </div>
      <h3 className='text-lg font-semibold text-[#3f4745]'>{item.title}</h3>
      <p className='mt-5 text-base leading-8 text-[#66706e]'>{item.description}</p>
    </article>
  )
}

function Showcase({ item }: { item: ShowcaseItem }) {
  return (
    <article className='grid overflow-hidden border border-[#c9d8d5] bg-white lg:grid-cols-[1.1fr_0.9fr]'>
      <div className='bg-[#6f8588] p-6 text-white lg:p-8'>
        <div className='flex items-center justify-between text-sm text-white/70'>
          <span>{item.subtitle}</span>
          <span>Control operativo</span>
        </div>
        <div className='mt-24 grid gap-3 sm:grid-cols-3'>
          {item.metrics.map((metric) => (
            <div key={metric} className='border border-white/20 bg-white/10 px-4 py-4 text-sm backdrop-blur-sm'>
              {metric}
            </div>
          ))}
        </div>
        <div className='mt-8 grid h-24 grid-cols-12 items-end gap-2'>
          {[42, 68, 54, 76, 61, 84, 58, 92, 64, 80, 71, 88].map((height, index) => (
            <div key={index} className='bg-white/70' style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
      <div className='p-8 lg:p-10'>
        <h3 className='text-2xl font-semibold text-[#3f4745]'>{item.title}</h3>
        <p className='mt-4 text-base font-medium text-[#66706e]'>{item.subtitle}</p>
        <p className='mt-6 text-base leading-8 text-[#747b79]'>{item.description}</p>
        <div className='mt-8 flex flex-wrap gap-4'>
          {item.links.map((link) => (
            <Link key={link.label} href={link.href} className='inline-flex items-center gap-2 text-sm font-medium text-[#789b96] hover:text-[#526e69]'>
              {link.label}
              <ArrowRight className='h-4 w-4' aria-hidden='true' />
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}

function UseCaseGraphic() {
  return (
    <div className='relative min-h-[420px] overflow-hidden border border-[#d8e5e2] bg-white p-8'>
      <div className='absolute left-8 right-12 top-14 h-px bg-[#7fc0df]' />
      <div className='absolute left-8 top-14 h-32 w-32 rounded-full border border-[#7fc0df]' />
      <div className='absolute left-[28%] right-10 top-32 h-px bg-[#7fc0df]' />
      <div className='absolute left-[20%] top-32 h-20 w-[45%] rounded-full border border-[#7fc0df]' />
      <div className='absolute left-[32%] right-14 top-56 h-px bg-[#7fc0df]' />
      <div className='absolute left-[31%] top-56 h-16 w-[34%] rounded-full border border-[#7fc0df]' />
      <div className='absolute bottom-12 left-1/2 -translate-x-1/2 text-[#789b96]'>
        <Bot className='h-14 w-14' aria-hidden='true' />
      </div>
    </div>
  )
}

export default function HomePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const navHref = (hash: string) => href(locale, hash)

  const problems: NumberedItem[] = [
    {
      number: '1',
      title: 'Datos fragmentados',
      description:
        'La empresa ya tiene datos, pero estan repartidos entre Excel, ERP, CRM, correos, WhatsApp, paneles, PDFs y herramientas internas. La gerencia no puede ver el estado real de la operacion con suficiente rapidez.',
    },
    {
      number: '2',
      title: 'Gestion manual de tareas',
      description:
        'El negocio crecio, pero la operacion sigue dependiendo de perseguir personas: seguimientos manuales, mensajes repetidos, responsabilidades poco claras, trabajo duplicado, aprobaciones perdidas, respuestas tardias y cero visibilidad en tiempo real.',
    },
    {
      number: '3',
      title: 'Tecnologias del pasado',
      description:
        'Muchas empresas estan probando ChatGPT, copilotos, automatizaciones o herramientas de IA, pero nada se convierte en un sistema de produccion seguro, confiable e integrado. Tienen demos, pero no infraestructura.',
    },
    {
      number: '4',
      title: 'Costo oculto',
      description:
        'El crecimiento crea complejidad. La complejidad crea costo. N3uralia ayuda a encontrar la friccion, estructurar la operacion y construir el sistema que la empresa necesita para escalar.',
    },
  ]

  const expertise: VisualItem[] = [
    {
      icon: <Gauge className='h-5 w-5' aria-hidden='true' />,
      title: 'Inteligencia operativa',
      description:
        'Convertimos informacion dispersa en decisiones claras, conectando datos, reportes, documentos y flujos de trabajo.',
    },
    {
      icon: <Workflow className='h-5 w-5' aria-hidden='true' />,
      title: 'Automatizacion de flujos',
      description:
        'Reducimos coordinacion manual y trabajo repetido con sistemas internos para tareas, aprobaciones, alertas y documentos.',
    },
    {
      icon: <Bot className='h-5 w-5' aria-hidden='true' />,
      title: 'Sistemas de IA en produccion',
      description:
        'Llevamos la IA desde experimentos hacia agentes, copilotos y plataformas conectadas al conocimiento real de la empresa.',
    },
  ]

  const helpBullets = [
    'Reportes manuales',
    'Sistemas desconectados',
    'Decisiones lentas',
    'Tareas repetidas',
    'Operaciones intensivas en documentos',
    'Poca visibilidad entre equipos',
    'Herramientas de IA sin integracion',
    'Software interno que ya no calza',
  ]

  const buildItems: VisualItem[] = [
    { icon: <ChartNoAxesCombined className='h-5 w-5' aria-hidden='true' />, title: 'Dashboards y paneles de control', description: 'Visibilidad, KPIs, alertas y decisiones de gestion.' },
    { icon: <Layers3 className='h-5 w-5' aria-hidden='true' />, title: 'Portales internos', description: 'Tareas, aprobaciones, documentos, operaciones y coordinacion de equipos.' },
    { icon: <Bot className='h-5 w-5' aria-hidden='true' />, title: 'Agentes y copilotos de IA', description: 'Acceso mas rapido al conocimiento, documentos y logica del negocio.' },
    { icon: <FileText className='h-5 w-5' aria-hidden='true' />, title: 'Inteligencia documental', description: 'Contratos, reportes, licitaciones, cumplimiento, manuales y registros.' },
    { icon: <Factory className='h-5 w-5' aria-hidden='true' />, title: 'Plataformas empresariales a medida', description: 'Para empresas que ya superaron el alcance de las herramientas genericas.' },
  ]

  const methodSteps: NumberedItem[] = [
    { number: '1', title: 'Diagnosticar', description: 'Mapeamos flujos, datos, herramientas, documentos, equipos y cuellos de botella.' },
    { number: '2', title: 'Arquitectura', description: 'Diseñamos el sistema correcto: paneles, automatizaciones, capas de IA, portales e integraciones.' },
    { number: '3', title: 'Construir', description: 'Creamos la plataforma, el flujo, el asistente o la capa de inteligencia que la empresa necesita.' },
    { number: '4', title: 'Integrar', description: 'Lo conectamos con la operacion real, personas, herramientas, permisos y procesos diarios.' },
    { number: '5', title: 'Mejorar', description: 'Perfeccionamos el sistema a medida que la empresa crece.' },
  ]

  const useCases: VisualItem[] = [
    { icon: <Gauge className='h-5 w-5' aria-hidden='true' />, title: 'Visibilidad gerencial', description: 'Operaciones, KPIs, desempeño y riesgos en un solo lugar.' },
    { icon: <FileText className='h-5 w-5' aria-hidden='true' />, title: 'Inteligencia documental', description: 'Extraer, clasificar, resumir, comparar y gestionar documentos importantes.' },
    { icon: <ClipboardCheck className='h-5 w-5' aria-hidden='true' />, title: 'Licitacion y cumplimiento', description: 'Requisitos, plazos, documentos, riesgos y entregas con mas control.' },
    { icon: <Layers3 className='h-5 w-5' aria-hidden='true' />, title: 'Portales internos', description: 'Un lugar para tareas, aprobaciones, incidentes, activos e informes.' },
    { icon: <SearchCheck className='h-5 w-5' aria-hidden='true' />, title: 'Asistentes de conocimiento con IA', description: 'Preguntas y respuestas desde documentos, politicas, manuales y datos.' },
    { icon: <MapPinned className='h-5 w-5' aria-hidden='true' />, title: 'Control de operaciones en terreno', description: 'Logistica, mantenimiento, inspecciones, transporte, incidentes y servicios.' },
  ]

  const engagementModels: NumberedItem[] = [
    { number: '1', title: 'Auditoria de Inteligencia Operativa', description: 'Un mapa claro de sistemas, cuellos de botella, datos, flujos y oportunidades de IA.' },
    { number: '2', title: 'Sprint de prototipo', description: 'Primera version enfocada de un dashboard, asistente de IA, automatizacion o herramienta interna.' },
    { number: '3', title: 'Construccion de sistema en produccion', description: 'Plataforma completa, sistema de flujos, capa de IA o solucion de inteligencia operativa.' },
    { number: '4', title: 'Socio continuo de inteligencia', description: 'Mejora continua, automatizacion, integracion y evolucion del sistema.' },
  ]

  const projects: ShowcaseItem[] = [
    {
      id: 'motil',
      title: 'Motil',
      subtitle: 'Inteligencia Operativa Minera',
      description: 'Plataforma de control para mineria que conecta produccion, mantenimiento, bodega, HSE, documentos y gestion en un flujo operativo en tiempo real.',
      links: [{ label: 'Ver detalles', href: navHref('#contacto') }],
      metrics: ['Produccion', 'Mantenimiento', 'HSE'],
    },
    {
      id: 'docufleet',
      title: 'DocuFleet / LABBE',
      subtitle: 'Control de Contratistas y Documentos',
      description: 'Sistema documental y operativo para empresas que administran contratistas, conductores, vehiculos, cumplimiento y reportes.',
      links: [{ label: 'Ver detalles', href: navHref('#contacto') }],
      metrics: ['Conductores', 'Vehiculos', 'Cumplimiento'],
    },
    {
      id: 'seguria',
      title: 'SegurIA',
      subtitle: 'Campos Inteligentes y Seguridad de Predios',
      description: 'Capa tecnologica para predios rurales y activos privados: monitoreo, alertas, control de acceso, camaras, visibilidad y respuesta operativa.',
      links: [{ label: 'Ver detalles', href: navHref('#contacto') }],
      metrics: ['Camaras', 'Alertas', 'Respuesta'],
    },
    {
      id: 'sur-realista',
      title: 'Sur-Realista',
      subtitle: 'Plataforma de Inteligencia Inmobiliaria',
      description: 'Centro de mando para propiedades, clientes, mensajes, tareas, documentos, mapas y archivos geograficos.',
      links: [{ label: 'Ver detalles', href: navHref('#contacto') }],
      metrics: ['Propiedades', 'Clientes', 'Mapas'],
    },
  ]

  const products: ShowcaseItem[] = [
    {
      id: 'clarity',
      title: 'Clarity',
      subtitle: 'Restauracion Inteligente de Fotos',
      description: 'Plataforma para restaurar imagenes antiguas, dañadas o deslavadas, mejorando nitidez, color, contraste y detalle visual.',
      links: [{ label: 'Visitar pagina', href: navHref('#contacto') }],
      metrics: ['Color', 'Nitidez', 'Detalle'],
    },
    {
      id: 'mermasapp',
      title: 'MermasApp',
      subtitle: 'Control de Merma y Rendimiento',
      description: 'Sistema a nivel planta para detectar, medir y reducir perdidas en produccion alimentaria y recuperar margen.',
      links: [{ label: 'Visitar pagina', href: navHref('#contacto') }],
      metrics: ['Merma', 'Rendimiento', 'Margen'],
    },
  ]

  return (
    <main id='top' className='bg-[#fbfbfa] text-[#5f6765]'>
      <section className='min-h-[720px] border-b border-[#dfe8e5] bg-[#fbfbfa] pt-24'>
        <div className='mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-24'>
          <div className='flex flex-col justify-center'>
            <BrandWordmark className='mb-10 text-5xl text-[#7f9f9a] md:text-6xl' />
            <h1 className='max-w-2xl text-5xl font-light leading-tight text-[#303836] md:text-6xl lg:text-7xl'>
              Software e IA para operaciones reales
            </h1>
            <p className='mt-8 max-w-xl text-lg leading-8 text-[#6b7472]'>
              Ayudamos a empresas medianas y grandes a convertir datos dispersos, operaciones manuales y experimentos de IA incompletos en sistemas de produccion controlados.
            </p>
            <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
              <ButtonLink href={navHref('#contacto')}>
                <CalendarCheck className='h-4 w-4' aria-hidden='true' />
                Agendar diagnostico
              </ButtonLink>
              <ButtonLink href={navHref('#solutions')} variant='outline'>
                Ver soluciones
                <ArrowRight className='h-4 w-4' aria-hidden='true' />
              </ButtonLink>
            </div>
          </div>
          <SystemCanvas />
        </div>
      </section>

      <section id='capabilities' className='scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]'>
          <SectionHeading eyebrow='Diagnostico' title='Llamanos si tienes esto.' description='Estos son los sintomas que suelen aparecer cuando la operacion crece mas rapido que los sistemas internos.' />
          <div>{problems.map((item) => <NumberedRow key={item.number} {...item} />)}</div>
        </div>
      </section>

      <section className='bg-[#d9e3e0] px-5 py-20 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading title='Nuestra experiencia' align='center' />
          <div className='mt-12 grid border border-white/60 bg-[#d2dedb] lg:grid-cols-3'>
            {expertise.map((item) => <ExpertisePanel key={item.title} item={item} />)}
          </div>
        </div>
      </section>

      <section id='solutions' className='scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl gap-16 lg:grid-cols-2'>
          <div>
            <SectionHeading title='A quien ayudamos' description='N3uralia es para empresas que ya tienen equipos, datos, documentos, procesos y presion creciente por trabajar con mas inteligencia.' />
            <div className='mt-10 grid gap-3 sm:grid-cols-2'>
              {helpBullets.map((item) => (
                <div key={item} className='border border-[#dfe8e5] bg-white px-4 py-3 text-sm text-[#66706e]'>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title='Que construimos' />
            <div className='mt-10 grid gap-4'>
              {buildItems.map((item) => (
                <div key={item.title} className='grid grid-cols-[44px_1fr] gap-4 border-b border-[#dfe8e5] pb-5'>
                  <div className='flex h-11 w-11 items-center justify-center border border-[#b8d1cc] bg-white text-[#789b96]'>{item.icon}</div>
                  <div>
                    <h3 className='font-semibold text-[#3f4745]'>{item.title}</h3>
                    <p className='mt-2 text-sm leading-7 text-[#747b79]'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white px-5 py-16 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl items-center gap-12 border border-[#dfe8e5] px-8 py-12 lg:grid-cols-[1fr_0.8fr] lg:px-12'>
          <div>
            <p className='max-w-3xl text-lg leading-9 text-[#5f6765]'>
              Antes de N3uralia, los equipos trabajan entre planillas, chats, correos, PDFs y software desconectado. Despues de N3uralia, la operacion se vuelve mas facil de ver, gestionar, automatizar y mejorar.
            </p>
            <p className='mt-6 text-xl font-semibold text-[#303836]'>No solo agregamos tecnologia. Creamos estructura.</p>
          </div>
          <div className='flex justify-start lg:justify-end'>
            <ButtonLink href={navHref('#contacto')}>Empezar la transformacion</ButtonLink>
          </div>
        </div>
      </section>

      <section id='how-we-work' className='scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]'>
          <SectionHeading eyebrow='Metodo' title='Claridad primero. Sistema despues.' description='Empezamos entendiendo la operacion. Los buenos sistemas nacen de un mapa claro de datos, permisos, personas y decisiones.' />
          <div>{methodSteps.map((item) => <NumberedRow key={item.number} {...item} />)}</div>
        </div>
      </section>

      <section id='case-studies' className='scroll-mt-28 bg-[#d9e3e0] px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading title='Nuestros proyectos' description='Sistemas reales para operaciones con datos, equipos, documentos y procesos complejos.' align='center' />
          <div className='mt-14 grid gap-8'>
            {projects.map((item) => <Showcase key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section className='bg-[#d9e3e0] px-5 pb-24 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading title='Nuestros productos' description='Desarrollamos sistemas profesionales para uso diario.' align='center' />
          <div className='mt-14 grid gap-8 lg:grid-cols-2'>
            {products.map((item) => <Showcase key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id='contacto' className='scroll-mt-28 bg-[#d9e3e0] px-5 pb-20 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl items-center gap-8 border border-white/70 bg-white px-8 py-10 md:grid-cols-[auto_1fr_auto]'>
          <BrandMark className='h-16 w-16 text-[#789b96]' />
          <div>
            <p className='text-xl font-light text-[#303836]'>Listo para crear un sistema a medida?</p>
            <p className='mt-2 text-base text-[#747b79]'>Hablemos de tu operacion, datos y oportunidades de IA.</p>
          </div>
          <ButtonLink href={navHref('#contacto')}>Contactanos</ButtonLink>
        </div>
      </section>

      <section id='use-cases' className='scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]'>
          <div>
            <SectionHeading title='Casos de uso' />
            <div className='mt-10'><UseCaseGraphic /></div>
          </div>
          <div className='grid gap-5 sm:grid-cols-2 lg:pt-16'>
            {useCases.map((item) => (
              <div key={item.title} className='border-b border-[#dfe8e5] pb-6'>
                <div className='mb-4 text-[#789b96]'>{item.icon}</div>
                <h3 className='font-semibold text-[#3f4745]'>{item.title}</h3>
                <p className='mt-3 text-sm leading-7 text-[#747b79]'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading title='Modelos de trabajo' align='center' />
          <div className='mt-14 grid gap-x-12 gap-y-2 lg:grid-cols-2'>
            {engagementModels.map((item) => <NumberedRow key={item.number} {...item} />)}
          </div>
        </div>
      </section>

      <section id='about' className='scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]'>
          <SectionHeading title='Por que N3uralia' />
          <div className='max-w-3xl text-lg leading-9 text-[#5f6765]'>
            <p>
              Tu operacion o se esta volviendo inteligente, o se esta volviendo un riesgo. Cuando la informacion vive en planillas, WhatsApp, correos, PDFs y herramientas desconectadas, tu empresa pierde velocidad, control y seguridad.
            </p>
            <p className='mt-6'>
              Conectamos estrategia, operaciones, desarrollo de software y automatizaciones para crear la capa operativa inteligente que tu negocio necesita.
            </p>
          </div>
        </div>
      </section>

      <section className='px-5 pb-28 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl items-center gap-12 bg-white px-8 py-14 lg:grid-cols-[1fr_auto] lg:px-12'>
          <div>
            <h2 className='max-w-3xl text-4xl font-light leading-tight text-[#789b96] md:text-5xl'>
              Muevete mas rapido. Opera con mas seguridad. Controla mas.
            </h2>
            <div className='mt-8 space-y-3 text-base font-semibold text-[#3f4745]'>
              <p>En 1 mes: un MVP funcional.</p>
              <p>En 3 meses: un sistema inteligente conectado.</p>
            </div>
            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <ButtonLink href={navHref('#contacto')}>Contactar ahora</ButtonLink>
              <ButtonLink href={navHref('#use-cases')} variant='outline'>Ver casos de uso</ButtonLink>
            </div>
          </div>
          <ShieldCheck className='h-28 w-28 text-[#789b96] md:h-36 md:w-36' aria-hidden='true' />
        </div>
      </section>
    </main>
  )
}
