import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
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

type ShowcaseItem = {
  id: string
  title: string
  subtitle: string
  description: string
  links: LinkItem[]
  preview: ReactNode
  backgroundClassName: string
}

type NumberedItem = {
  number: string
  title: string
  description: string
}

type TextItem = {
  title: string
  description: string
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
  const solidClasses =
    'inline-flex items-center justify-center rounded-full bg-[#8aa8a4] px-8 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(138,168,164,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#7d9f9b]'
  const outlineClasses =
    'inline-flex items-center justify-center rounded-full border border-[#c8ddd8] bg-white px-8 py-3.5 text-sm font-medium text-[#8aa8a4] transition-all hover:-translate-y-0.5 hover:border-[#8aa8a4] hover:bg-[#f7fbfa]'

  return (
    <Link href={href} className={variant === 'solid' ? solidClasses : outlineClasses}>
      {children}
    </Link>
  )
}

function SectionTitle({
  title,
  description,
  wrapperClassName = '',
  titleClassName = '',
  descriptionClassName = '',
}: {
  title: string
  description?: string
  wrapperClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}) {
  return (
    <div className={wrapperClassName}>
      <h2
        className={`text-[clamp(2.15rem,4vw,3.65rem)] font-light leading-[0.95] tracking-[-0.06em] text-[#606665] ${titleClassName}`.trim()}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-[1.02rem] leading-8 text-[#767676] ${descriptionClassName}`.trim()}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

function NumberedCopy({ number, title, description }: NumberedItem) {
  return (
    <div className='grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[260px_1fr] lg:items-start'>
      <div className='select-none text-[clamp(5.5rem,10vw,8.5rem)] font-light leading-none text-[#c9c9c9]'>
        {number}
      </div>
      <div className='pt-2 md:pt-4'>
        <h3 className='text-[1.5rem] font-semibold tracking-[-0.03em] text-[#5f6161]'>{title}</h3>
        <p className='mt-4 max-w-[50rem] text-[1.02rem] leading-8 text-[#7a7a7a]'>{description}</p>
      </div>
    </div>
  )
}

function ExpertiseCard({ title, description }: TextItem) {
  return (
    <article className='min-h-full border-white/55 px-8 py-12 sm:px-10 lg:px-12'>
      <h3 className='text-[1.45rem] font-semibold tracking-[-0.03em] text-[#5f6262]'>{title}</h3>
      <p className='mt-8 max-w-md text-[1.02rem] leading-7 text-[#707474]'>{description}</p>
    </article>
  )
}

function BuildItem({ number, title, description }: NumberedItem) {
  return (
    <div className='grid gap-4 md:grid-cols-[110px_minmax(0,1fr)] md:gap-8'>
      <div className='select-none text-[clamp(3.7rem,7vw,5.5rem)] font-light leading-none text-[#d6d6d6]'>
        {number}
      </div>
      <div>
        <h3 className='text-[1.12rem] font-semibold tracking-[-0.03em] text-[#5f6161]'>{title}</h3>
        <p className='mt-2 text-[1rem] leading-7 text-[#787878]'>{description}</p>
      </div>
    </div>
  )
}

function StepItem({ number, title, description }: NumberedItem) {
  return (
    <div className='grid gap-4 md:grid-cols-[120px_minmax(0,1fr)] md:gap-8'>
      <div className='select-none text-[clamp(3.5rem,7vw,5rem)] font-light leading-none text-[#dbdbdb]'>
        {number}
      </div>
      <div>
        <h3 className='text-[1.1rem] font-semibold tracking-[-0.03em] text-[#5f6161]'>{title}</h3>
        <p className='mt-2 text-[1rem] leading-7 text-[#777]'>{description}</p>
      </div>
    </div>
  )
}

function UseCaseItem({ title, description }: TextItem) {
  return (
    <div>
      <h3 className='text-[1.08rem] font-semibold tracking-[-0.03em] text-[#5f6161]'>{title}</h3>
      <p className='mt-4 max-w-[34rem] text-[1rem] leading-7 text-[#777]'>{description}</p>
    </div>
  )
}

function PreviewShell({
  backgroundClassName,
  label,
  title,
  subtitle,
  children,
}: {
  backgroundClassName: string
  label: string
  title: string
  subtitle: string
  children: ReactNode
}) {
  return (
    <div
      className={`flex h-full flex-col justify-between rounded-[2rem] p-8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ${backgroundClassName}`.trim()}
    >
      <div className='space-y-3'>
        <p className='text-[0.7rem] uppercase tracking-[0.32em] text-white/55'>{label}</p>
        <h3 className='max-w-[24rem] text-[clamp(2rem,4vw,3.65rem)] font-light leading-[0.94] tracking-[-0.06em]'>
          {title}
        </h3>
        <p className='max-w-[33rem] text-[0.98rem] leading-7 text-white/82'>{subtitle}</p>
      </div>
      <div className='mt-8'>{children}</div>
    </div>
  )
}

function InfoCard({
  title,
  subtitle,
  description,
  links,
}: {
  title: string
  subtitle: string
  description: string
  links: LinkItem[]
}) {
  return (
    <div className='rounded-[1.75rem] bg-white p-8 shadow-[0_28px_70px_rgba(0,0,0,0.1)]'>
      <div className='space-y-4'>
        <h3 className='text-[1.6rem] font-semibold tracking-[-0.04em] text-[#5c5f60]'>{title}</h3>
        <p className='text-[1.02rem] font-semibold tracking-[-0.03em] text-[#5c5f60]'>{subtitle}</p>
        <p className='text-[1rem] leading-7 text-[#767676]'>{description}</p>
      </div>
      <div className='mt-8 space-y-3'>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className='inline-flex text-[0.98rem] text-[#8ea9a5] underline decoration-[#8ea9a5]/40 underline-offset-4 transition-colors hover:text-[#6f918e]'
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

function Showcase({
  item,
  preview,
}: {
  item: ShowcaseItem
  preview: ReactNode
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[2.25rem] border border-white/70 p-6 shadow-[0_20px_70px_rgba(34,52,50,0.08)] lg:p-8 ${item.backgroundClassName}`.trim()}
    >
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]' />
      <div className='relative min-h-[30rem] lg:min-h-[34rem]'>
        <div className='relative min-h-[24rem] lg:pr-[39%]'>
          <div className='h-full'>{preview}</div>
        </div>
        <div className='relative z-10 mt-6 max-w-[34rem] lg:absolute lg:right-8 lg:top-8 lg:mt-0'>
          <InfoCard
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            links={item.links}
          />
        </div>
      </div>
    </article>
  )
}

function MotilPreview() {
  const bars = [28, 52, 38, 64, 46, 72, 60, 82, 48, 68, 54, 78]

  return (
    <PreviewShell
      backgroundClassName='bg-[linear-gradient(135deg,#8da59f_0%,#6f8682_55%,#607877_100%)]'
      label='Flujo operativo'
      title='Motil'
      subtitle='Plataforma de control minero que mantiene producción, mantenimiento, bodega, HSE y gestión en un mismo flujo.'
    >
      <div className='grid gap-3 sm:grid-cols-2'>
        {['Producción', 'Mantenimiento', 'Bodega', 'HSE'].map((chip) => (
          <div
            key={chip}
            className='rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/86 backdrop-blur-sm'
          >
            {chip}
          </div>
        ))}
      </div>
      <div className='mt-5 grid gap-4 lg:grid-cols-[1fr_0.72fr]'>
        <div className='rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <div className='flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/55'>
            <span>Métricas en vivo</span>
            <span>24/7</span>
          </div>
          <div className='mt-4 grid h-24 grid-cols-12 items-end gap-1.5'>
            {bars.map((height, index) => (
              <div
                key={index}
                className='rounded-full bg-white/75'
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
        <div className='rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <p className='text-xs uppercase tracking-[0.3em] text-white/55'>Flujo</p>
          <div className='mt-4 space-y-2 text-sm text-white/84'>
            {['Alertas 12', 'Aprobaciones pendientes 08', 'Producción lista 94%'].map((line) => (
              <div key={line} className='rounded-2xl bg-white/10 px-3 py-2'>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  )
}

function DocuFleetPreview() {
  return (
    <PreviewShell
      backgroundClassName='bg-[linear-gradient(135deg,#93a7a4_0%,#768b87_52%,#667f7c_100%)]'
      label='Control de contratistas'
      title='DocuFleet / LABBE'
      subtitle='Control documental y operativo para contratistas, conductores, vehículos, cumplimiento y reportes.'
    >
      <div className='grid gap-4 lg:grid-cols-[1fr_0.9fr]'>
        <div className='rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <div className='flex flex-wrap gap-2'>
            {['Contratos', 'Conductores', 'Vehículos', 'Reportes'].map((chip) => (
              <span
                key={chip}
                className='rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80'
              >
                {chip}
              </span>
            ))}
          </div>
          <div className='mt-4 space-y-3'>
            {['Subcontratistas', 'Archivos de cumplimiento', 'Comprobantes de entrega'].map((row) => (
              <div key={row} className='flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2 text-sm text-white/86'>
                <span>{row}</span>
                <span className='rounded-full border border-white/15 px-2 py-0.5 text-[0.7rem]'>OK</span>
              </div>
            ))}
          </div>
        </div>
        <div className='rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <p className='text-xs uppercase tracking-[0.3em] text-white/55'>Torre de control</p>
          <div className='mt-4 space-y-3 text-sm text-white/84'>
            {['Estado documental 96%', 'Pendientes de revisión 03', 'Aprobados hoy 17'].map((line) => (
              <div key={line} className='rounded-2xl bg-white/10 px-3 py-2'>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  )
}

function SegurIAPreview() {
  return (
    <PreviewShell
      backgroundClassName='bg-[linear-gradient(135deg,#8398a0_0%,#6f838b_52%,#5f747e_100%)]'
      label='Inteligencia de seguridad'
      title='SegurIA'
      subtitle='Una capa de seguridad para predios rurales, control de accesos, cámaras, alertas y respuesta operativa.'
    >
      <div className='grid gap-4 lg:grid-cols-[0.95fr_1.05fr]'>
        <div className='rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-xs uppercase tracking-[0.3em] text-white/55'>Campos inteligentes</p>
              <p className='mt-2 text-lg font-light tracking-[-0.04em]'>Control perimetral</p>
            </div>
            <BrandMark className='h-10 w-10 text-white/55' />
          </div>
          <div className='mt-4 grid grid-cols-2 gap-3'>
            {['Cámaras', 'Acceso', 'Alertas', 'Respuesta'].map((item) => (
              <div key={item} className='rounded-2xl bg-white/10 px-4 py-4 text-sm text-white/86'>
                <p className='font-semibold'>{item}</p>
                <p className='mt-2 text-white/68'>Conectado</p>
              </div>
            ))}
          </div>
        </div>
        <div className='rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <div className='flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/55'>
            <span>Visibilidad del campo</span>
            <span>24/7</span>
          </div>
          <div className='mt-4 space-y-3'>
            {['Portón abierto', 'Flujo de cámara estable', 'Alerta derivada al equipo'].map((line) => (
              <div key={line} className='rounded-2xl bg-white/10 px-3 py-2 text-sm text-white/86'>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  )
}

function SurRealistaPreview() {
  return (
    <PreviewShell
      backgroundClassName='bg-[linear-gradient(135deg,#8fa79f_0%,#748d86_52%,#607972_100%)]'
      label='Inteligencia inmobiliaria'
      title='Sur-Realista'
      subtitle='Un centro de mando para propiedades, clientes, mensajes, tareas, documentos y archivos geográficos.'
    >
      <div className='grid gap-4 lg:grid-cols-[1.08fr_0.92fr]'>
        <div className='relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.12),transparent_28%)]' />
          <div className='relative flex h-full min-h-[13rem] flex-col justify-between'>
            <div className='flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/55'>
              <span>Pipeline</span>
              <span>Mapas</span>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              {['Propiedades', 'Clientes', 'Documentos', 'Mensajes'].map((item) => (
                <div key={item} className='rounded-2xl bg-white/10 px-3 py-3 text-sm text-white/86'>
                  {item}
                </div>
              ))}
            </div>
            <div className='flex items-center gap-3'>
              <div className='h-3 w-3 rounded-full bg-white/75' />
              <div className='h-px flex-1 bg-white/25' />
              <div className='h-3 w-3 rounded-full bg-white/55' />
              <div className='h-px flex-1 bg-white/25' />
              <div className='h-3 w-3 rounded-full bg-white/75' />
            </div>
          </div>
        </div>
        <div className='rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <p className='text-xs uppercase tracking-[0.3em] text-white/55'>Operaciones</p>
          <div className='mt-4 space-y-3 text-sm text-white/84'>
            {['Leads 34', 'Sitios 11', 'Tareas 26'].map((line) => (
              <div key={line} className='rounded-2xl bg-white/10 px-3 py-2'>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  )
}

function ClarityPreview() {
  return (
    <PreviewShell
      backgroundClassName='bg-[linear-gradient(135deg,#d1c2a6_0%,#a89573_50%,#84704f_100%)]'
      label='Plataforma de restauración'
      title='Clarity'
      subtitle='Un sistema de mejora fotográfica que recupera color, detalle y valor emocional sin perder la imagen original.'
    >
      <div className='grid gap-4 lg:grid-cols-[1fr_0.95fr]'>
        <div className='rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <div className='grid grid-cols-2 overflow-hidden rounded-[1.2rem] border border-white/15'>
            <div className='min-h-[11rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(0,0,0,0.16)),linear-gradient(135deg,#a38d71,#6e5b45)] p-4 text-sm text-white/86'>
              <p className='text-xs uppercase tracking-[0.3em] text-white/55'>Antes</p>
              <p className='mt-14'>Foto deslavada</p>
            </div>
            <div className='min-h-[11rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(0,0,0,0.1)),linear-gradient(135deg,#efe2b4,#c39f57)] p-4 text-sm text-[#4d4233]'>
              <p className='text-xs uppercase tracking-[0.3em] text-[#5a4f3f]/60'>Después</p>
              <p className='mt-14 font-medium'>Detalle recuperado</p>
            </div>
          </div>
        </div>
        <div className='rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <div className='flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/55'>
            <span>Mejora</span>
            <span>42 fotos</span>
          </div>
          <div className='mt-4 space-y-3 text-sm text-white/86'>
            {['Nitidez', 'Recuperación de color', 'Contraste', 'Consistencia de detalle'].map((line) => (
              <div key={line} className='rounded-2xl bg-white/10 px-3 py-2'>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  )
}

function MermasAppPreview() {
  const bars = [36, 58, 44, 69, 52, 78, 63, 88, 55, 72, 60, 82]

  return (
    <PreviewShell
      backgroundClassName='bg-[linear-gradient(135deg,#88a7a1_0%,#6f8b86_52%,#607b76_100%)]'
      label='Control de merma'
      title='MermasApp'
      subtitle='Un sistema a nivel planta para detectar, medir y reducir pérdidas en producción alimentaria y fuga de margen.'
    >
      <div className='grid gap-4 lg:grid-cols-[0.95fr_1.05fr]'>
        <div className='rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <div className='flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/55'>
            <span>Merma</span>
            <span>En vivo</span>
          </div>
          <div className='mt-4 grid h-24 grid-cols-12 items-end gap-1.5'>
            {bars.map((height, index) => (
              <div
                key={index}
                className='rounded-full bg-white/75'
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
        <div className='rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
          <div className='grid grid-cols-3 gap-2 text-sm text-white/86'>
            {['Merma', 'Rendimiento', 'Margen'].map((item) => (
              <div key={item} className='rounded-2xl bg-white/10 px-3 py-3 text-center'>
                <p className='font-semibold'>{item}</p>
                <p className='mt-2 text-xs text-white/70'>Estable</p>
              </div>
            ))}
          </div>
          <div className='mt-4 space-y-3 text-sm text-white/84'>
            {['Detección de pérdidas', 'Alertas accionables', 'Plan de recuperación'].map((line) => (
              <div key={line} className='rounded-2xl bg-white/10 px-3 py-2'>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  )
}

function UseCaseArtwork() {
  return (
    <div className='relative min-h-[28rem] overflow-hidden rounded-[2.25rem] border border-[#e1ece8] bg-white p-6 shadow-[0_24px_80px_rgba(34,52,50,0.06)]'>
      <div className='absolute left-[12%] top-[14%] h-28 w-44 rounded-[2rem] border border-[#cde2de]' />
      <div className='absolute left-[35%] top-[10%] h-40 w-40 rounded-full border border-[#cde2de]' />
      <div className='absolute right-[16%] top-[20%] h-20 w-20 rounded-full border border-[#cde2de]' />
      <div className='absolute left-[24%] top-[48%] h-0.5 w-[52%] bg-[#cfe4e0]' />
      <div className='absolute left-[24%] top-[48%] h-28 w-0.5 bg-[#cfe4e0]' />
      <div className='absolute left-[24%] top-[48%] h-0.5 w-24 rotate-[-36deg] bg-[#cfe4e0]' />
      <div className='absolute left-[24%] top-[48%] h-0.5 w-28 rotate-[34deg] bg-[#cfe4e0]' />
      <div className='absolute left-[58%] top-[56%] h-36 w-36 rounded-full border border-[#cfe4e0]' />
      <div className='absolute left-[62%] top-[64%] h-16 w-16 rounded-full border border-[#cfe4e0]' />
      <div className='absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full border border-[#d9e7e3] bg-[#f7fbfa] p-4 shadow-sm'>
        <BrandMark className='h-11 w-11 text-[#9cb9b5]' />
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
        'La empresa ya tiene datos, pero están repartidos entre Excel, ERP, CRM, correos, WhatsApp, paneles, PDFs y herramientas internas. La gerencia no puede ver el estado real de la operación con suficiente rapidez.',
    },
    {
      number: '2',
      title: 'Gestión manual de tareas',
      description:
        'El negocio creció, pero la operación sigue dependiendo de perseguir personas: seguimientos manuales, mensajes repetidos, responsabilidades poco claras, trabajo duplicado, aprobaciones perdidas, respuestas tardías y cero visibilidad en tiempo real.',
    },
    {
      number: '3',
      title: 'Tecnologías del pasado',
      description:
        'Muchas empresas están probando ChatGPT, copilotos, automatizaciones o herramientas de IA, pero nada se convierte en un sistema de producción seguro, confiable e integrado. Tienen demos, pero no infraestructura, y siguen trabajando con software antiguo que no responde a las necesidades actuales.',
    },
    {
      number: '4',
      title: 'Costo oculto',
      description:
        'El crecimiento crea complejidad. La complejidad crea costo. La mayoría de las empresas no pierde tiempo porque la gente no trabaje duro. Lo pierde porque la información está dispersa, los procesos son manuales y las decisiones dependen de demasiadas herramientas desconectadas. N3uralia te ayuda a encontrar la fricción, estructurar la operación y construir el sistema que tu empresa necesita para escalar.',
    },
  ]

  const expertise: TextItem[] = [
    {
      title: 'Inteligencia operativa',
      description:
        'Convierte información dispersa en decisiones claras. Conectamos datos, reportes, documentos y flujos de trabajo para que tu equipo vea lo que pasa y actúe más rápido.',
    },
    {
      title: 'Automatización de flujos',
      description:
        'Reduce la coordinación manual y el trabajo repetido. Diseñamos sistemas internos que ayudan a los equipos a gestionar tareas, aprobaciones, alertas, documentos y operaciones diarias con menos fricción.',
    },
    {
      title: 'Sistemas de IA en producción',
      description:
        'Llevamos la IA desde los experimentos al uso real del negocio. Construimos agentes, copilotos y plataformas inteligentes conectadas al conocimiento, las herramientas y los procesos de tu empresa.',
    },
  ]

  const helpBullets = [
    'Reportes manuales',
    'Sistemas desconectados',
    'Decisiones lentas',
    'Tareas repetidas',
    'Operaciones intensivas en documentos',
    'Poca visibilidad entre equipos',
    'Herramientas de IA sin integración',
    'Software interno que ya no calza',
  ]

  const buildItems: NumberedItem[] = [
    {
      number: '1',
      title: 'Paneles y tableros de control',
      description: 'Para visibilidad, KPIs, alertas y decisiones de gestión.',
    },
    {
      number: '2',
      title: 'Portales internos',
      description: 'Para tareas, aprobaciones, documentos, operaciones y coordinación de equipos.',
    },
    {
      number: '3',
      title: 'Agentes y copilotos de IA',
      description: 'Para equipos que necesitan acceso más rápido al conocimiento, los documentos y la lógica del negocio.',
    },
    {
      number: '4',
      title: 'Sistemas de inteligencia documental',
      description: 'Para contratos, reportes, licitaciones, archivos de cumplimiento, manuales y registros operativos.',
    },
    {
      number: '5',
      title: 'Plataformas empresariales a medida',
      description: 'Para empresas que ya superaron el alcance de las herramientas genéricas.',
    },
  ]

  const methodSteps: NumberedItem[] = [
    {
      number: '1',
      title: 'Diagnosticar',
      description: 'Mapeamos tus flujos, datos, herramientas, documentos, equipos y cuellos de botella.',
    },
    {
      number: '2',
      title: 'Arquitectura',
      description: 'Diseñamos el sistema correcto: paneles, automatizaciones, capas de IA, portales e integraciones.',
    },
    {
      number: '3',
      title: 'Construir',
      description: 'Creamos la plataforma, el flujo, el asistente o la capa de inteligencia que tu empresa necesita.',
    },
    {
      number: '4',
      title: 'Integrar',
      description: 'Lo conectamos con tu operación real, personas, herramientas, permisos y procesos diarios.',
    },
    {
      number: '5',
      title: 'Mejorar',
      description: 'Perfeccionamos el sistema a medida que tu empresa crece.',
    },
  ]

  const useCases: TextItem[] = [
    {
      title: 'Visibilidad gerencial',
      description: 'Ve operaciones, KPIs, desempeño y riesgos en un solo lugar.',
    },
    {
      title: 'Inteligencia documental',
      description: 'Extrae, clasifica, resume, compara y gestiona documentos importantes con mayor velocidad.',
    },
    {
      title: 'Sistemas de licitación y cumplimiento',
      description: 'Haz seguimiento de requisitos, plazos, documentos, riesgos y entregas con más control.',
    },
    {
      title: 'Portales internos de operación',
      description: 'Dale a los equipos un solo lugar para gestionar tareas, aprobaciones, incidentes, activos e informes.',
    },
    {
      title: 'Asistentes de conocimiento con IA',
      description: 'Permite que tu equipo haga preguntas y reciba respuestas desde documentos, políticas, manuales y datos de la empresa.',
    },
    {
      title: 'Control de operaciones en terreno',
      description: 'Gestiona logística, mantenimiento, inspecciones, transporte, incidentes y ejecución de servicios.',
    },
  ]

  const engagementModels: NumberedItem[] = [
    {
      number: '1',
      title: 'Auditoría de Inteligencia Operativa',
      description: 'Un mapa claro de tus sistemas, cuellos de botella, datos, flujos y oportunidades de IA.',
    },
    {
      number: '2',
      title: 'Sprint de prototipo',
      description: 'Una primera versión enfocada de un dashboard, asistente de IA, automatización o herramienta interna.',
    },
    {
      number: '3',
      title: 'Construcción de sistema en producción',
      description: 'Una plataforma completa, un sistema de flujos, una capa de IA o una solución de inteligencia operativa.',
    },
    {
      number: '4',
      title: 'Socio continuo de inteligencia',
      description: 'Mejora continua, automatización, integración y evolución del sistema.',
    },
  ]

  const projects: ShowcaseItem[] = [
    {
      id: 'motil',
      title: 'Motil',
      subtitle: 'Inteligencia Operativa Minera',
      description:
        'Una plataforma de control para minería que conecta producción, mantenimiento, bodega, HSE, documentos y gestión en un solo flujo operativo en tiempo real.',
      links: [{ label: 'Ver detalles', href: navHref('#contacto') }],
      preview: <MotilPreview />,
      backgroundClassName: 'bg-[#d1ddd8]',
    },
    {
      id: 'docufleet',
      title: 'DocuFleet / LABBE',
      subtitle: 'Control de Contratistas y Documentos',
      description:
        'Un sistema documental y operativo para empresas que administran contratistas, conductores, vehículos, cumplimiento y reportes.',
      links: [{ label: 'Ver detalles', href: navHref('#contacto') }],
      preview: <DocuFleetPreview />,
      backgroundClassName: 'bg-[#d1ddd8]',
    },
    {
      id: 'seguria',
      title: 'SegurIA',
      subtitle: 'Campos Inteligentes y Seguridad de Predios',
      description:
        'Una capa tecnológica para predios rurales, campos y activos privados. SegurIA conecta monitoreo, alertas, control de acceso, cámaras, visibilidad de terreno y respuesta operativa en un solo sistema inteligente de seguridad.',
      links: [{ label: 'Ver detalles', href: navHref('#contacto') }],
      preview: <SegurIAPreview />,
      backgroundClassName: 'bg-[#d1ddd8]',
    },
    {
      id: 'sur-realista',
      title: 'Sur-Realista',
      subtitle: 'Plataforma de Inteligencia Inmobiliaria',
      description:
        'Un centro de mando para administración inmobiliaria y de terrenos. Organiza propiedades, clientes, mensajes, tareas, documentos, mapas y archivos geográficos para que los pipelines grandes sean más fáciles de gestionar y vender.',
      links: [{ label: 'Ver detalles', href: navHref('#contacto') }],
      preview: <SurRealistaPreview />,
      backgroundClassName: 'bg-[#d1ddd8]',
    },
  ]

  const products: ShowcaseItem[] = [
    {
      id: 'clarity',
      title: 'Clarity',
      subtitle: 'Restauración Inteligente de Fotos',
      description:
        'Una plataforma de mejora para restaurar imágenes antiguas, dañadas o deslavadas. Clarity mejora nitidez, color, contraste y detalle visual sin perder el valor emocional de la foto original.',
      links: [
        { label: 'Visitar página', href: navHref('#contacto') },
        { label: 'Ver todas las soluciones', href: navHref('#solutions') },
      ],
      preview: <ClarityPreview />,
      backgroundClassName: 'bg-[#d2dfdb]',
    },
    {
      id: 'mermasapp',
      title: 'MermasApp',
      subtitle: 'Control de Merma y Rendimiento',
      description:
        'Un sistema a nivel planta para detectar, medir y reducir pérdidas en producción alimentaria. MermasApp muestra dónde ocurre la merma, cuánto cuesta y qué acciones pueden recuperar margen sin reemplazar la maquinaria existente.',
      links: [
        { label: 'Visitar página', href: navHref('#contacto') },
        { label: 'Ver todas las soluciones', href: navHref('#solutions') },
      ],
      preview: <MermasAppPreview />,
      backgroundClassName: 'bg-[#d2dfdb]',
    },
  ]

  return (
    <main id='top' className='bg-[#fbfbf9] text-[#676d6c]'>
      <section className='relative overflow-hidden border-b border-[#e2ece8]'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(132,166,163,0.12)_0%,transparent_28%),radial-gradient(circle_at_86%_18%,rgba(119,145,146,0.08)_0%,transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(251,251,249,1)_100%)]' />
        <div className='relative mx-auto max-w-[1500px] px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40'>
          <div className='grid items-center gap-16 lg:grid-cols-[1.03fr_0.97fr] lg:gap-24'>
            <div className='max-w-[42rem]'>
              <h1 className='text-[clamp(3.4rem,7vw,5.85rem)] font-light leading-[0.9] tracking-[-0.08em] text-[#626766]'>
                <span className='block'>Software e IA para</span>
                <span className='block text-[#8eada8]'>operaciones reales</span>
              </h1>
              <p className='mt-8 max-w-[32rem] text-[1.05rem] leading-8 text-[#7a7a7a] sm:text-[1.15rem]'>
                Ayudamos a empresas medianas y grandes a convertir datos dispersos, operaciones manuales y experimentos de IA incompletos en sistemas de producción controlados
              </p>
              <div className='mt-12 flex flex-col gap-4 sm:flex-row'>
                <ButtonLink href={navHref('#contacto')}>Agendar diagnóstico</ButtonLink>
                <ButtonLink href={navHref('#solutions')} variant='outline'>
                  ¿Qué construimos?
                </ButtonLink>
              </div>
            </div>

            <div className='relative flex min-h-[24rem] items-center justify-center lg:min-h-[30rem]'>
              <div className='absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_50%_50%,rgba(140,169,166,0.12)_0%,transparent_50%)] blur-3xl' />
              <BrandWordmark
                className='relative h-[clamp(12rem,25vw,20rem)] w-[min(44vw,35rem)]'
                imageClassName='opacity-90 [filter:brightness(0)_saturate(100%)_invert(63%)_sepia(10%)_saturate(290%)_hue-rotate(122deg)_brightness(90%)_contrast(86%)]'
                priority
                sizes='(min-width: 1024px) 38vw, 90vw'
              />
            </div>
          </div>
        </div>
      </section>

      <div className='mx-auto max-w-[1500px] px-6 lg:px-10'>
        <svg
          viewBox='0 0 1600 72'
          preserveAspectRatio='none'
          aria-hidden='true'
          className='h-14 w-full text-[#d8e7e4]'
        >
          <path d='M0 36H640' stroke='currentColor' strokeWidth='1.5' />
          <path d='M960 36H1600' stroke='currentColor' strokeWidth='1.5' />
          <path
            d='M640 36C700 36 720 16 780 16C840 16 860 36 920 36'
            stroke='currentColor'
            strokeWidth='1.5'
            fill='none'
          />
          <path
            d='M640 36C700 36 720 56 780 56C840 56 860 36 920 36'
            stroke='currentColor'
            strokeWidth='1.5'
            fill='none'
          />
        </svg>
      </div>

      <section id='capabilities' className='scroll-mt-28 px-6 pb-24 pt-16 lg:px-10 lg:pb-32'>
        <div className='mx-auto max-w-[1320px]'>
          <SectionTitle
            title='Si tienes esto:'
            wrapperClassName='text-center lg:text-right lg:pr-[12%]'
            titleClassName='text-[#74858d]'
          />
          <div className='mt-16 space-y-20 lg:mt-20'>
            {problems.map((item) => (
              <NumberedCopy key={item.number} {...item} />
            ))}
          </div>
          <div className='mt-14 flex justify-center lg:justify-start lg:pl-[27%]'>
            <ButtonLink href={navHref('#contacto')}>Agendar diagnóstico</ButtonLink>
          </div>
        </div>
      </section>

      <section className='px-6 py-20 lg:px-10 lg:py-28'>
        <div className='mx-auto max-w-[1500px]'>
          <SectionTitle title='Nuestra experiencia' wrapperClassName='text-center' />
          <div className='mt-12 grid overflow-hidden bg-[#d8e2df] lg:grid-cols-3'>
            {expertise.map((item) => (
              <ExpertiseCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id='solutions' className='scroll-mt-28 px-6 py-24 lg:px-10 lg:py-28'>
        <div className='mx-auto max-w-[1500px]'>
          <div className='grid gap-16 lg:grid-cols-[1fr_0.95fr] lg:items-start'>
            <div>
              <SectionTitle
                title='¿A quién ayudamos?'
                wrapperClassName='text-left'
                titleClassName='text-[#8ea9a5]'
              />
              <p className='mt-10 max-w-[28rem] text-[1.02rem] leading-8 text-[#767676]'>
                N3uralia es para empresas medianas y grandes que ya tienen equipos, datos, documentos, procesos y presión creciente por trabajar con más inteligencia.
              </p>
              <p className='mt-10 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#5f6161]'>
                Somos una buena opción para empresas que enfrentan:
              </p>
              <ul className='mt-6 space-y-3 text-[1rem] leading-7 text-[#777]'>
                {helpBullets.map((item) => (
                  <li key={item} className='flex gap-3'>
                    <span className='mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-[#9bbab6]' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle
                title='¿Qué construimos?'
                wrapperClassName='text-right'
                titleClassName='text-[#8ea9a5]'
              />
              <div className='mt-14 space-y-10'>
                {buildItems.map((item) => (
                  <BuildItem key={item.number} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#eef3f0] px-6 py-14 lg:px-10 lg:py-16'>
        <div className='mx-auto max-w-[1500px]'>
          <div className='grid gap-10 rounded-[2rem] border border-[#edf2f0] bg-white/88 px-8 py-10 shadow-[0_24px_70px_rgba(34,53,51,0.07)] lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-12 lg:py-12'>
            <div>
              <p className='text-[1.05rem] leading-8 text-[#737373]'>
                Antes de N3uralia, los equipos suelen trabajar entre planillas, chats, correos, PDFs y software desconectado.
                <br />
                Después de N3uralia, tu operación se vuelve más fácil de ver, gestionar, automatizar y mejorar.
              </p>
              <p className='mt-6 max-w-[32rem] text-[1.22rem] font-semibold leading-8 tracking-[-0.03em] text-[#5f6161]'>
                No solo agregamos tecnología.
                <br />
                Creamos estructura.
              </p>
              <div className='mt-8'>
                <ButtonLink href={navHref('#contacto')}>Empezar la transformación</ButtonLink>
              </div>
            </div>
            <div className='relative flex min-h-[16rem] items-center justify-center'>
              <div className='absolute inset-y-1/2 left-0 hidden h-px w-[30%] -translate-y-1/2 bg-[#d8e6e3] lg:block' />
              <div className='absolute inset-y-1/2 right-0 hidden h-px w-[30%] -translate-y-1/2 bg-[#d8e6e3] lg:block' />
              <div className='relative flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-[0_12px_36px_rgba(0,0,0,0.06)]'>
                <BrandMark className='h-14 w-14 text-[#8daaa6]' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='how-we-work' className='scroll-mt-28 px-6 py-24 lg:px-10 lg:py-32'>
        <div className='mx-auto max-w-[1250px]'>
          <SectionTitle
            title='Método'
            wrapperClassName='text-center lg:text-right lg:pr-[10%]'
            titleClassName='text-[#727272]'
            description='Empezamos entendiendo la operación. Los buenos sistemas nacen de la claridad.'
            descriptionClassName='max-w-[28rem] lg:ml-auto'
          />
          <div className='mt-16 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
            <div className='hidden lg:flex items-center justify-center'>
              <div className='relative h-[34rem] w-full max-w-[28rem] rounded-[2.5rem] border border-[#e7eeec] bg-white/55'>
                <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#dbe6e2] bg-white p-6 shadow-sm'>
                  <BrandMark className='h-16 w-16 text-[#97b8b3]' />
                </div>
                <div className='absolute left-[12%] top-[20%] h-px w-[32%] bg-[#d9e6e3]' />
                <div className='absolute right-[12%] top-[20%] h-px w-[32%] bg-[#d9e6e3]' />
                <div className='absolute left-[16%] top-[72%] h-px w-[68%] bg-[#d9e6e3]' />
              </div>
            </div>
            <div className='space-y-10'>
              {methodSteps.map((item) => (
                <StepItem key={item.number} {...item} />
              ))}
              <div className='pt-4 md:pl-[120px]'>
                <p className='text-[1rem] leading-7 text-[#767676]'>CTA: Solicitar diagnóstico</p>
                <div className='mt-6'>
                  <ButtonLink href={navHref('#contacto')}>Solicitar diagnóstico</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='case-studies' className='scroll-mt-28 bg-[#d1ddd8] px-6 py-24 lg:px-10 lg:py-28'>
        <div className='mx-auto max-w-[1500px]'>
          <SectionTitle
            title='Nuestros proyectos'
            wrapperClassName='text-center lg:text-right lg:pr-[10%]'
            titleClassName='text-white/90'
          />
          <div className='mt-16 space-y-20'>
            {projects.map((item) => (
              <Showcase key={item.id} item={item} preview={item.preview} />
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#d1ddd8] px-6 py-24 lg:px-10 lg:py-28'>
        <div className='mx-auto max-w-[1500px]'>
          <SectionTitle
            title='Nuestros productos'
            wrapperClassName='text-center lg:text-right lg:pr-[10%]'
            titleClassName='text-white/90'
            description='Desarrollamos sistemas profesionales para uso diario.'
            descriptionClassName='max-w-[34rem] font-semibold text-[#55605d] lg:ml-auto'
          />
          <div className='mt-16 space-y-20'>
            {products.map((item) => (
              <Showcase key={item.id} item={item} preview={item.preview} />
            ))}
          </div>
        </div>
      </section>

      <section id='contacto' className='scroll-mt-28 bg-[#d1ddd8] px-6 py-14 lg:px-10 lg:py-16'>
        <div className='mx-auto max-w-[1500px]'>
          <div className='grid gap-8 rounded-[2rem] border border-[#e7eeec] bg-white/88 px-8 py-10 lg:grid-cols-[auto_1fr] lg:items-center lg:px-12 lg:py-12'>
            <div className='grid h-28 w-28 place-items-center rounded-full bg-white shadow-sm'>
              <BrandMark className='h-16 w-16 text-[#8ea9a5]' />
            </div>
            <div className='space-y-4'>
              <p className='text-[1.2rem] font-light tracking-[-0.03em] text-[#6e7271] sm:text-[1.35rem]'>
                ¿Listo para crear un sistema a medida?
              </p>
              <Link
                href={navHref('#contacto')}
                className='inline-flex text-[1.18rem] font-semibold tracking-[-0.03em] text-[#5f6161] underline decoration-[#8ea9a5]/35 underline-offset-4 transition-colors hover:text-[#7a908d]'
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id='faq' className='scroll-mt-28 px-6 py-24 lg:px-10 lg:py-28'>
        <div className='mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
          <div className='lg:pt-4'>
            <SectionTitle
              title='Casos de uso'
              wrapperClassName='text-center lg:text-right lg:pr-[10%]'
              titleClassName='text-[#727272]'
            />
            <div className='mt-12 lg:mt-16'>
              <UseCaseArtwork />
            </div>
          </div>
          <div className='space-y-10 lg:pt-24'>
            {useCases.map((item) => (
              <UseCaseItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className='px-6 py-24 lg:px-10 lg:py-28'>
        <div className='mx-auto max-w-[1250px]'>
          <SectionTitle
            title='Modelos de trabajo'
            wrapperClassName='text-center'
            titleClassName='text-[#8ea9a5]'
          />
          <div className='mt-16 grid gap-16 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-20'>
            {engagementModels.map((item) => (
              <StepItem key={item.number} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id='about' className='scroll-mt-28 px-6 py-20 lg:px-10 lg:py-24'>
        <div className='mx-auto max-w-[1220px]'>
          <SectionTitle
            title='¿Por qué N3uralia?'
            wrapperClassName='text-left'
            titleClassName='text-[#8ea9a5]'
          />
          <div className='mt-10 max-w-[56rem] space-y-6 text-[1.02rem] leading-8 text-[#767676]'>
            <p>
              Tu operación o se está volviendo inteligente, o se está volviendo un riesgo. Cuando la información vive en planillas, WhatsApp, correos, PDFs y herramientas desconectadas, tu empresa pierde velocidad, control y seguridad.
            </p>
            <p>
              Conectamos estrategia, operaciones, desarrollo de software y automatizaciones para crear la capa operativa inteligente que tu negocio necesita.
            </p>
          </div>
        </div>
      </section>

      <section className='px-6 pb-28 pt-8 lg:px-10 lg:pb-32'>
        <div className='mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
          <div>
            <SectionTitle
              title='Lo que dicen los clientes'
              wrapperClassName='text-left'
              titleClassName='text-[#727272]'
            />
            <div className='mt-12 space-y-6'>
              <p className='text-[clamp(2.8rem,5.6vw,4.8rem)] font-light leading-[0.95] tracking-[-0.06em] text-[#8ea9a5]'>
                Muévete más rápido.
                <br />
                Opera con más seguridad.
              </p>
              <div className='space-y-4 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#5f6161]'>
                <p>En 1 mes: un MVP funcional.</p>
                <p>En 3 meses: un sistema inteligente conectado.</p>
              </div>
            </div>
            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <ButtonLink href={navHref('#contacto')}>Contactar ahora</ButtonLink>
              <ButtonLink href={navHref('#faq')} variant='outline'>
                Ver casos de uso
              </ButtonLink>
            </div>
          </div>
          <div className='flex justify-center lg:justify-end'>
            <BrandMark className='h-44 w-44 text-[#8ea9a5] sm:h-52 sm:w-52 lg:h-[19rem] lg:w-[19rem]' />
          </div>
        </div>
      </section>
    </main>
  )
}
