import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, Clock, Shield, Zap } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'

interface PageProps {
  params: {
    locale: string
  }
}

const content = {
  es: {
    badge: 'Solución production-ready',
    title: 'Automatización estructural para empresas',
    intro:
      'No más workflows aislados. Conecta tus sistemas legacy, automatiza procesos repetitivos y crea operaciones que funcionan 24/7 sin intervención manual. Payback en 6 meses.',
    primaryCta: 'Consulta gratis',
    secondaryCta: 'Ver casos reales',
    problemTitle: 'El problema real',
    problemIntro: 'Las empresas pierden millones en procesos manuales que deberían estar automatizados.',
    problems: [
      {
        title: 'Sistemas desconectados',
        desc: 'El ERP no habla con Salesforce, que no habla con tu sistema de facturación. Los datos se ingresan manualmente en tres sistemas.',
      },
      {
        title: 'Trabajo repetitivo manual',
        desc: 'Horas diarias en tareas que podría hacer un script: validar datos, enviar emails, actualizar estados y generar reportes.',
      },
      {
        title: 'Equipo agotado',
        desc: 'Tu mejor talento queda atrapado en operación en lugar de estrategia. El error humano causa horas de correcciones.',
      },
      {
        title: 'Sin escalabilidad',
        desc: 'Cada nuevo cliente o transacción requiere más horas. No puedes crecer sin triplicar el equipo operacional.',
      },
    ],
    solutionTitle: 'La solución: automatización estructural',
    solutionIntro:
      'N3uralia conecta tus sistemas existentes con inteligencia. No necesitas reemplazar nada; agregamos orquestación operativa sobre lo que ya usas.',
    beforeTitle: 'Antes (manual)',
    afterTitle: 'Después (automatizado)',
    beforeItems: [
      'Datos ingresados manualmente en tres sistemas',
      'Validación humana de excepciones',
      'Reportes manuales cada semana',
      'Errores que cuestan horas corregir',
      'No escala sin más personal',
    ],
    afterItems: [
      'Datos sincronizados en tiempo real',
      'Validación automática y alertas',
      'Reportes generados automáticamente',
      'Menos errores y auditoría completa',
      'Escala sin agregar personas innecesarias',
    ],
    capabilitiesTitle: 'Qué automatizamos',
    categories: [
      {
        icon: BarChart3,
        title: 'Procesos comerciales',
        items: ['Calificación de leads', 'Pipeline de ventas', 'Propuestas automáticas', 'Follow-ups inteligentes'],
      },
      {
        icon: Clock,
        title: 'Operaciones',
        items: ['Validación de datos', 'Sincronización de sistemas', 'Reportes automáticos', 'Alertas en tiempo real'],
      },
      {
        icon: Shield,
        title: 'Compliance y seguridad',
        items: ['Auditoría de cambios', 'Cumplimiento normativo', 'Backup automático', 'Encriptación end-to-end'],
      },
    ],
    roiTitle: 'Retorno comprobado',
    roi: [
      { metric: '60-80%', desc: 'Reducción de trabajo manual' },
      { metric: '6 meses', desc: 'Payback de inversión' },
      { metric: '10x', desc: 'Escalabilidad sin más personal' },
    ],
    methodTitle: 'Cómo implementamos',
    steps: [
      {
        step: '1',
        title: 'Auditoría de procesos',
        desc: 'Identificamos qué está manual, cuánto cuesta y dónde existe mayor impacto.',
      },
      {
        step: '2',
        title: 'Diseño de orquestación',
        desc: 'Conectamos tus sistemas existentes con lógica inteligente, sin reemplazarlos.',
      },
      {
        step: '3',
        title: 'Implementación y testing',
        desc: 'Desplegamos en producción con auditoría completa y rollback si es necesario.',
      },
      {
        step: '4',
        title: 'Medición y optimización',
        desc: 'Reportes mensuales de ROI, mejora continua y escalamiento según demanda.',
      },
    ],
    finalTitle: '¿Listo para automatizar?',
    finalIntro:
      'Comienza con una auditoría gratuita. En una semana te mostramos el plan de automatización y proyectamos ROI.',
    finalCta: 'Agendar auditoría gratuita',
  },
  en: {
    badge: 'Production-ready solution',
    title: 'Structural automation for enterprise operations',
    intro:
      'No more isolated workflows. Connect legacy systems, automate repetitive processes, and create operations that run 24/7 without manual intervention. Six-month payback target.',
    primaryCta: 'Book a free consultation',
    secondaryCta: 'View real case studies',
    problemTitle: 'The real problem',
    problemIntro: 'Companies lose millions to manual processes that should already be automated.',
    problems: [
      {
        title: 'Disconnected systems',
        desc: 'The ERP does not talk to Salesforce, Salesforce does not talk to billing, and teams enter the same data manually in three places.',
      },
      {
        title: 'Repetitive manual work',
        desc: 'Daily hours go into tasks scripts should handle: validating data, sending emails, updating statuses, and producing reports.',
      },
      {
        title: 'Exhausted teams',
        desc: 'Your best people get trapped in operations instead of strategy. Human error creates hours of rework.',
      },
      {
        title: 'No scalable path',
        desc: 'Every new client or transaction adds more hours. Growth should not require tripling the operations team.',
      },
    ],
    solutionTitle: 'The solution: structural automation',
    solutionIntro:
      'N3uralia connects your existing systems with intelligence. You do not need to replace everything; we add an operating orchestration layer on top of what already works.',
    beforeTitle: 'Before (manual)',
    afterTitle: 'After (automated)',
    beforeItems: [
      'Data entered manually in three systems',
      'Human validation for exceptions',
      'Manual reports every week',
      'Errors that take hours to correct',
      'No scale without more headcount',
    ],
    afterItems: [
      'Real-time data synchronization',
      'Automatic validation and alerts',
      'Reports generated automatically',
      'Fewer errors and full auditability',
      'Scale without unnecessary headcount',
    ],
    capabilitiesTitle: 'What we automate',
    categories: [
      {
        icon: BarChart3,
        title: 'Commercial processes',
        items: ['Lead qualification', 'Sales pipeline', 'Automatic proposals', 'Smart follow-ups'],
      },
      {
        icon: Clock,
        title: 'Operations',
        items: ['Data validation', 'System synchronization', 'Automatic reports', 'Real-time alerts'],
      },
      {
        icon: Shield,
        title: 'Compliance and security',
        items: ['Change audit trail', 'Regulatory compliance', 'Automatic backups', 'End-to-end encryption'],
      },
    ],
    roiTitle: 'Proven return',
    roi: [
      { metric: '60-80%', desc: 'Reduction in manual work' },
      { metric: '6 months', desc: 'Investment payback target' },
      { metric: '10x', desc: 'Scale without more headcount' },
    ],
    methodTitle: 'How we implement',
    steps: [
      {
        step: '1',
        title: 'Process audit',
        desc: 'We identify what is manual, what it costs, and where automation creates the highest impact.',
      },
      {
        step: '2',
        title: 'Orchestration design',
        desc: 'We connect your existing systems with intelligent logic without replacing them.',
      },
      {
        step: '3',
        title: 'Implementation and testing',
        desc: 'We deploy to production with complete auditability and rollback when needed.',
      },
      {
        step: '4',
        title: 'Measurement and optimization',
        desc: 'Monthly ROI reporting, continuous improvement, and scaling based on real demand.',
      },
    ],
    finalTitle: 'Ready to automate?',
    finalIntro:
      'Start with a free audit. In one week, we show the automation plan and project the expected ROI.',
    finalCta: 'Book a free automation audit',
  },
} as const

function localizedHref(locale: Locale, path: string) {
  return `/${locale}${path}`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: '/automatizacion-para-empresas',
    title: locale === 'es' ? 'Automatización empresarial | N3uralia' : 'Enterprise automation | N3uralia',
    description:
      locale === 'es'
        ? 'Automatización estructural para empresas: conecta sistemas legacy, elimina trabajo manual repetitivo y escala operaciones reales en Chile y LATAM.'
        : 'Structural automation for operations teams: connect legacy systems, remove repetitive manual work, and scale real operations across Chile and LATAM.',
  })
}

export default function AutomatizacionPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="border-b border-border px-4 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{page.badge}</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold text-foreground sm:text-6xl">{page.title}</h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">{page.intro}</p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={localizedHref(locale, '/contact')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={localizedHref(locale, '/case-studies')} className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary/5">
                {page.secondaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-4xl font-bold text-foreground">{page.problemTitle}</h2>
            <p className="mb-12 text-lg text-muted-foreground">{page.problemIntro}</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {page.problems.map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-muted/30 px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-4xl font-bold text-foreground">{page.solutionTitle}</h2>
            <p className="mb-12 text-lg text-muted-foreground">{page.solutionIntro}</p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">{page.beforeTitle}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {page.beforeItems.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">{page.afterTitle}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {page.afterItems.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-foreground">{page.capabilitiesTitle}</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {page.categories.map((category) => {
                const Icon = category.icon
                return (
                  <div key={category.title} className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40">
                    <div className="mb-4 flex items-start gap-4">
                      <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                      <h3 className="font-bold text-foreground">{category.title}</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-muted/30 px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-foreground">{page.roiTitle}</h2>
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              {page.roi.map((item) => (
                <div key={item.metric}>
                  <div className="mb-2 text-4xl font-bold text-primary">{item.metric}</div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-foreground">{page.methodTitle}</h2>
            <div className="space-y-6">
              {page.steps.map((item) => (
                <div key={item.step} className="flex gap-6 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-lg border border-border bg-muted/50 p-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground">{page.finalTitle}</h2>
              <p className="mb-8 text-lg text-muted-foreground">{page.finalIntro}</p>
              <Link href={localizedHref(locale, '/contact')} className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                {page.finalCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
