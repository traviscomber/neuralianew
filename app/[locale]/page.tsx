import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  Building2,
  Code2,
  Cpu,
  Package,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'

interface PageProps {
  params: {
    locale: string
  }
}

type Sector = {
  title: string
  description: string
  icon: typeof Package
}

type CaseStudy = {
  href: string
  title: string
  description: string
  image: string
  alt: string
  width: number
  height: number
}

type Pillar = {
  title: string
  description: string
  detail: string
  icon: typeof Zap
}

function href(locale: Locale, hash: string) {
  return `/${locale}${hash}`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  const titles = {
    es: 'N3uralia | IA y software para operaciones reales - Chile y LATAM',
    en: 'N3uralia | AI and software for real operations - Chile and LATAM',
  }

  const descriptions = {
    es: 'N3uralia construye sistemas de IA y software operativo para empresas en Chile y LATAM. Infraestructura, no truco. Automatización con control, trazabilidad y resultado real.',
    en: 'N3uralia builds AI systems and operational software for teams in Chile and LATAM. Infrastructure, not a trick. Automation with control, traceability, and real outcomes.',
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://www.n3uralia.com/${locale}`,
      languages: {
        es: 'https://www.n3uralia.com/es',
        en: 'https://www.n3uralia.com/en',
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: `https://www.n3uralia.com/${locale}`,
      siteName: 'N3uralia',
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      type: 'website',
    },
  }
}

export default function HomePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'

  const pillars: Pillar[] = [
    {
      title: isES ? 'Arquitectura' : 'Architecture',
      description: isES
        ? 'Sistemas conectados, decisiones claras y automatización con trazabilidad.'
        : 'Connected systems, clear decisions, and automation with traceability.',
      detail: isES ? 'Menos fricción, más control' : 'Less friction, more control',
      icon: Zap,
    },
    {
      title: isES ? 'Agentes' : 'Agents',
      description: isES
        ? 'Workflows con contexto, validación y escalamiento cuando hace falta.'
        : 'Workflows with context, validation, and escalation when needed.',
      detail: isES ? 'Guardrails reales' : 'Real guardrails',
      icon: Bot,
    },
    {
      title: isES ? 'Producción' : 'Production',
      description: isES
        ? 'Software listo para operar fuera del laboratorio y sostenerse en el tiempo.'
        : 'Software ready to operate outside the lab and hold up over time.',
      detail: isES ? 'Entrega tangible' : 'Tangible delivery',
      icon: Code2,
    },
  ]

  const sectors: Sector[] = [
    {
      title: isES ? 'Retail y e-commerce' : 'Retail and e-commerce',
      description: isES
        ? 'Automatización de catálogo, operaciones comerciales y soporte al cliente.'
        : 'Catalog automation, commercial operations, and customer support.',
      icon: Package,
    },
    {
      title: isES ? 'Manufactura' : 'Manufacturing',
      description: isES
        ? 'Flujos operativos, control de calidad y coordinación entre sistemas.'
        : 'Operational flows, quality control, and cross-system coordination.',
      icon: Cpu,
    },
    {
      title: isES ? 'Servicios financieros' : 'Financial services',
      description: isES
        ? 'Validaciones, análisis de riesgo y automatización de back office.'
        : 'Validations, risk analysis, and back-office automation.',
      icon: TrendingUp,
    },
    {
      title: isES ? 'Hospitality y turismo' : 'Hospitality and tourism',
      description: isES
        ? 'Experiencias conversacionales, reservas y operaciones 24/7.'
        : 'Conversational experiences, reservations, and 24/7 operations.',
      icon: Users,
    },
    {
      title: isES ? 'Legal y compliance' : 'Legal and compliance',
      description: isES
        ? 'Revisión documental, trazabilidad y procesos auditables.'
        : 'Document review, traceability, and auditable workflows.',
      icon: Building2,
    },
    {
      title: isES ? 'Logística' : 'Logistics',
      description: isES
        ? 'Coordinación operativa, alertas y decisiones sobre demanda.'
        : 'Operational coordination, alerts, and demand decisions.',
      icon: Workflow,
    },
  ]

  const caseStudies: CaseStudy[] = [
    {
      href: href(locale, '/case-studies/ecosuelolab'),
      title: isES ? 'Monitoreo agrícola automatizado' : 'Automated agricultural monitoring',
      description: isES
        ? 'Alertas satelitales y decisiones operativas activadas en minutos.'
        : 'Satellite alerts and operational decisions triggered within minutes.',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Ecosuelo-Lab-YhDOpB1n3bU46r024IudPBQGVbR9bP.png',
      alt: 'Ecosuelo Lab logo',
      width: 120,
      height: 40,
    },
    {
      href: href(locale, '/case-studies/despega-tu-carrera'),
      title: isES ? 'Plataforma de coaching con IA' : 'AI coaching platform',
      description: isES
        ? 'Producto full-stack con experiencias conversacionales y contenido guiado.'
        : 'A full-stack product with conversational experiences and guided content.',
      image: '/logos/despega-tu-carrera-logo.jpg',
      alt: 'Despega Tu Carrera logo',
      width: 180,
      height: 60,
    },
    {
      href: href(locale, '/case-studies/blackswan-facility-core'),
      title: isES ? 'Operación hotelera integrada' : 'Integrated hospitality operations',
      description: isES
        ? 'Software operativo para equipos que necesitan coordinar mejor y responder más rápido.'
        : 'Operational software for teams that need better coordination and faster response times.',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bslogo-4dAYU7iH5JIRxGvWqE5k75H5ciyXQ8.png',
      alt: 'Blackswan logo',
      width: 120,
      height: 100,
    },
  ]

  return (
    <>
      <main id='top' className='bg-background text-foreground'>
        <section className='relative overflow-hidden border-b border-border/60'>
          <div
            className='pointer-events-none absolute inset-0'
            style={{
              background:
                'radial-gradient(circle at 15% 15%, rgba(92, 170, 165, 0.12) 0%, transparent 28%), radial-gradient(circle at 85% 0%, rgba(63, 47, 40, 0.08) 0%, transparent 24%), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.98) 100%)',
            }}
          />
          <div className='relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36'>
            <div className='grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20'>
              <div className='max-w-4xl'>
                <div className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary'>
                  <span className='h-2 w-2 rounded-full bg-primary' />
                  {isES
                    ? 'Desde Chile para operaciones reales en LATAM'
                    : 'From Chile for real operations in LATAM'}
                </div>

                <h1 className='mt-8 text-[clamp(3.25rem,8.8vw,6.8rem)] font-light leading-[0.92] tracking-[-0.06em] text-balance text-foreground'>
                  <span className='block'>{isES ? 'IA y software para' : 'AI and software for'}</span>
                  <span className='block text-primary'>
                    {isES ? 'operaciones que no pueden fallar' : 'operations that cannot fail'}
                  </span>
                </h1>

                <p className='mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl'>
                  {isES
                    ? 'Diseñamos sistemas que conectan datos, procesos y decisiones para reducir fricción operativa sin perder control. Menos humo, menos piloto infinito, más arquitectura y más producción real.'
                    : 'We design systems that connect data, processes, and decisions to reduce operational friction without losing control. Less hype, fewer endless pilots, more architecture, more production delivery.'}
                </p>

                <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
                  <Link
                    href={href(locale, '#contacto')}
                    className='inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg'
                  >
                    {isES ? 'Agendar diagnóstico' : 'Book a diagnosis'}
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                  <Link
                    href={href(locale, '#soluciones')}
                    className='inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-background px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5'
                  >
                    {isES ? 'Ver soluciones' : 'View solutions'}
                  </Link>
                </div>

                <div className='mt-12 grid gap-4 border-t border-border/60 pt-8 sm:grid-cols-3'>
                  <div className='rounded-3xl border border-border/60 bg-card/80 p-5'>
                    <p className='text-3xl font-semibold text-primary'>4</p>
                    <p className='mt-2 text-sm font-medium text-foreground'>
                      {isES ? 'semanas para un piloto serio' : 'weeks to a serious pilot'}
                    </p>
                  </div>
                  <div className='rounded-3xl border border-border/60 bg-card/80 p-5'>
                    <p className='text-3xl font-semibold text-primary'>LATAM</p>
                    <p className='mt-2 text-sm font-medium text-foreground'>
                      {isES ? 'foco comercial y operativo' : 'commercial and operational focus'}
                    </p>
                  </div>
                  <div className='rounded-3xl border border-border/60 bg-card/80 p-5'>
                    <p className='text-3xl font-semibold text-primary'>24/7</p>
                    <p className='mt-2 text-sm font-medium text-foreground'>
                      {isES ? 'operación continua con control' : 'continuous operation with control'}
                    </p>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <div className='absolute -inset-6 rounded-[2.5rem] bg-primary/5 blur-3xl' />
                <div className='relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur'>
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>
                        {isES ? 'Sistema operativo' : 'Operating system'}
                      </p>
                      <h2 className='mt-3 text-2xl font-light tracking-[-0.03em] text-foreground'>
                        {isES
                          ? 'Arquitectura, agentes y software en una misma capa'
                          : 'Architecture, agents, and software in one layer'}
                      </h2>
                    </div>
                    <div className='rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary'>
                      N3
                    </div>
                  </div>

                  <div className='mt-6 space-y-4'>
                    {pillars.map((pillar) => {
                      const Icon = pillar.icon
                      return (
                        <div key={pillar.title} className='rounded-3xl border border-border/70 bg-background/80 p-4'>
                          <div className='flex items-start gap-4'>
                            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10'>
                              <Icon className='h-5 w-5 text-primary' />
                            </div>
                            <div className='min-w-0'>
                              <div className='flex flex-wrap items-center justify-between gap-2'>
                                <h3 className='text-base font-semibold text-foreground'>{pillar.title}</h3>
                                <span className='text-xs uppercase tracking-[0.22em] text-muted-foreground'>
                                  {pillar.detail}
                                </span>
                              </div>
                              <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                                {pillar.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className='mt-6 grid gap-3 sm:grid-cols-2'>
                    <div className='rounded-3xl border border-border/70 bg-background/80 p-4'>
                      <p className='text-xs uppercase tracking-[0.22em] text-muted-foreground'>
                        {isES ? 'Enfoque' : 'Focus'}
                      </p>
                      <p className='mt-2 text-sm font-medium text-foreground'>
                        {isES ? 'Chile + LATAM' : 'Chile + LATAM'}
                      </p>
                    </div>
                    <div className='rounded-3xl border border-border/70 bg-background/80 p-4'>
                      <p className='text-xs uppercase tracking-[0.22em] text-muted-foreground'>
                        {isES ? 'Salida' : 'Output'}
                      </p>
                      <p className='mt-2 text-sm font-medium text-foreground'>
                        {isES ? 'Producción real' : 'Real production'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='capabilities' className='border-b border-border/60 bg-background px-4 py-24 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl'>
            <div className='max-w-3xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-primary'>
                {isES ? 'Capacidades' : 'Capabilities'}
              </p>
              <h2 className='mt-4 text-3xl font-light tracking-[-0.04em] text-foreground sm:text-5xl'>
                {isES ? 'Qué construimos' : 'What we build'}
              </h2>
              <p className='mt-4 max-w-2xl text-lg leading-8 text-muted-foreground'>
                {isES
                  ? 'Arquitectura, integración y software para automatizar trabajo complejo sin perder control.'
                  : 'Architecture, integration, and software to automate complex work without losing control.'}
              </p>
            </div>

            <div className='mt-12 grid gap-6 md:grid-cols-3'>
              <div className='rounded-[2rem] border border-border/70 bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg'>
                <Zap className='h-10 w-10 text-primary' />
                <h3 className='mt-5 text-xl font-semibold text-foreground'>
                  {isES ? 'Orquestación operativa' : 'Operational orchestration'}
                </h3>
                <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                  {isES
                    ? 'Flujos que conectan equipos, agentes y sistemas en un mismo circuito.'
                    : 'Flows that connect teams, agents, and systems inside one operating loop.'}
                </p>
              </div>

              <div className='rounded-[2rem] border border-border/70 bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg'>
                <Bot className='h-10 w-10 text-primary' />
                <h3 className='mt-5 text-xl font-semibold text-foreground'>
                  {isES ? 'Agentes con contexto' : 'Context-aware agents'}
                </h3>
                <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                  {isES
                    ? 'Sistemas que recuerdan, validan y escalan con guardrails claros.'
                    : 'Systems that remember, validate, and scale with clear guardrails.'}
                </p>
              </div>

              <div className='rounded-[2rem] border border-border/70 bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg'>
                <Code2 className='h-10 w-10 text-primary' />
                <h3 className='mt-5 text-xl font-semibold text-foreground'>
                  {isES ? 'Software de producción' : 'Production software'}
                </h3>
                <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                  {isES
                    ? 'Aplicaciones, APIs e integraciones listas para operar fuera del laboratorio.'
                    : 'Applications, APIs, and integrations ready to operate outside the lab.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='soluciones' className='border-b border-border/60 bg-background px-4 py-24 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl'>
            <div className='max-w-3xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-primary'>
                {isES ? 'Sectores' : 'Sectors'}
              </p>
              <h2 className='mt-4 text-3xl font-light tracking-[-0.04em] text-foreground sm:text-5xl'>
                {isES ? 'Dónde ya hace sentido' : 'Where this already makes sense'}
              </h2>
              <p className='mt-4 max-w-2xl text-lg leading-8 text-muted-foreground'>
                {isES
                  ? 'Partimos por operaciones con volumen, fricción y datos dispersos.'
                  : 'We start where volume, friction, and scattered data are already creating drag.'}
              </p>
            </div>

            <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {sectors.map((sector) => {
                const Icon = sector.icon
                return (
                  <div
                    key={sector.title}
                    className='rounded-[2rem] border border-border/70 bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg'
                  >
                    <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10'>
                      <Icon className='h-6 w-6 text-primary' />
                    </div>
                    <h3 className='mt-5 text-xl font-semibold text-foreground'>{sector.title}</h3>
                    <p className='mt-3 text-sm leading-6 text-muted-foreground'>{sector.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id='casos' className='border-b border-border/60 bg-background px-4 py-24 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl'>
            <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
              <div className='max-w-3xl'>
                <p className='text-sm font-semibold uppercase tracking-[0.28em] text-primary'>
                  {isES ? 'Casos' : 'Cases'}
                </p>
                <h2 className='mt-4 text-3xl font-light tracking-[-0.04em] text-foreground sm:text-5xl'>
                  {isES ? 'Casos en producción' : 'Production case studies'}
                </h2>
                <p className='mt-4 max-w-2xl text-lg leading-8 text-muted-foreground'>
                  {isES
                    ? 'Software e IA aplicada en proyectos reales, no en demos aisladas.'
                    : 'Applied AI and software in real projects, not isolated demos.'}
                </p>
              </div>

              <Link
                href={href(locale, '#contacto')}
                className='inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-background px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5'
              >
                {isES ? 'Hablar del proyecto' : 'Talk about the project'}
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-12 grid gap-6 lg:grid-cols-3'>
              {caseStudies.map((caseStudy) => (
                <Link href={caseStudy.href} className='group block' key={caseStudy.href}>
                  <div className='h-full rounded-[2rem] border border-border/70 bg-card p-7 transition-all group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-lg'>
                    <div className='flex h-28 items-center justify-center rounded-[1.5rem] border border-border/60 bg-white p-5'>
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.alt}
                        width={caseStudy.width}
                        height={caseStudy.height}
                        className='h-20 w-auto object-contain'
                      />
                    </div>
                    <h3 className='mt-6 text-xl font-semibold text-foreground transition-colors group-hover:text-primary'>
                      {caseStudy.title}
                    </h3>
                    <p className='mt-3 text-sm leading-6 text-muted-foreground'>{caseStudy.description}</p>
                    <div className='mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1'>
                      {isES ? 'Ver caso' : 'View case'}
                      <ArrowRight className='h-4 w-4' />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id='contacto' className='bg-background px-4 py-24 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl'>
            <div className='rounded-[2rem] border border-primary/15 bg-primary/5 p-8 sm:p-12'>
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-primary'>
                {isES ? 'Contacto' : 'Contact'}
              </p>
              <h2 className='mt-4 text-3xl font-light tracking-[-0.04em] text-foreground sm:text-5xl'>
                {isES ? 'Si tu operación no puede fallar, conversemos' : 'If your operation cannot fail, let us talk'}
              </h2>
              <p className='mt-4 max-w-2xl text-lg leading-8 text-muted-foreground'>
                {isES
                  ? 'Agenda un diagnóstico y te llevas una conversación técnica seria, un foco prioritario y una hoja de ruta concreta.'
                  : 'Book a diagnosis and walk away with a serious technical conversation, a priority focus, and a practical roadmap.'}
              </p>

              <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
                <a
                  href='mailto:info@n3uralia.com'
                  className='inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg'
                >
                  {isES ? 'Escribir por email' : 'Write by email'}
                  <ArrowRight className='h-4 w-4' />
                </a>
                <a
                  href='https://wa.me/56993826127'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-background px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5'
                >
                  WhatsApp
                  <ArrowRight className='h-4 w-4' />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}