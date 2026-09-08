import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, FileCheck2, GitBranch, Workflow } from 'lucide-react'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'

  return buildLocalizedMetadata({
    locale,
    path: '/automatizacion-ia-empresas-chile',
    title: isES
      ? 'Automatización con IA para empresas en Chile | N3uralia'
      : 'AI automation for businesses in Chile | N3uralia',
    description: isES
      ? 'Automatización empresarial con IA para procesos, documentos, aprobaciones y operaciones en Chile, integrada a sistemas existentes y medida contra un baseline real.'
      : 'Enterprise AI automation for processes, documents, approvals and operations in Chile, integrated with existing systems and measured against a real baseline.',
  })
}

export default function AutomatizacionIAPage({ params }: PageProps) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'
  const href = (path: string) => `/${locale}${path}`

  const areas = [
    {
      icon: FileCheck2,
      titleES: 'Documentos y validaciones',
      titleEN: 'Documents and validation',
      descES: 'Clasificación, extracción, reglas, vencimientos, excepciones y evidencia con controles explícitos.',
      descEN: 'Classification, extraction, rules, expiries, exceptions and evidence with explicit controls.',
    },
    {
      icon: GitBranch,
      titleES: 'Aprobaciones y coordinación',
      titleEN: 'Approvals and coordination',
      descES: 'Handoffs, responsables, alertas y estados compartidos para procesos que hoy viven en correo, planillas o chat.',
      descEN: 'Handoffs, owners, alerts and shared state for processes currently living in email, spreadsheets or chat.',
    },
    {
      icon: BarChart3,
      titleES: 'Inteligencia operacional',
      titleEN: 'Operational intelligence',
      descES: 'Indicadores, anomalías, prioridades y contexto construidos sobre datos canónicos de la operación.',
      descEN: 'Indicators, anomalies, priorities and context built on canonical operational data.',
    },
    {
      icon: Workflow,
      titleES: 'Flujos asistidos por IA',
      titleEN: 'AI-assisted workflows',
      descES: 'Asistentes y agentes acotados que consultan herramientas autorizadas y respetan límites de acción definidos.',
      descEN: 'Bounded assistants and agents that use authorized tools and respect defined action limits.',
    },
  ]

  const phases = isES
    ? [
        ['01', 'Diagnóstico y baseline', 'Entendemos el proceso actual, sus costos de coordinación, errores, tiempos, responsables y fuentes de verdad.'],
        ['02', 'Diseño de arquitectura', 'Separamos reglas determinísticas, tareas aptas para IA, permisos, integraciones y puntos de aprobación humana.'],
        ['03', 'Piloto controlado', 'Implementamos un alcance acotado con datos reales, observabilidad y criterios de aceptación antes de escalar.'],
        ['04', 'Producción y medición', 'Comparamos el resultado con el baseline y ampliamos sólo cuando la evidencia justifica más alcance.'],
      ]
    : [
        ['01', 'Diagnosis and baseline', 'We understand the current process, coordination cost, errors, cycle time, owners and sources of truth.'],
        ['02', 'Architecture design', 'We separate deterministic rules, AI-suitable tasks, permissions, integrations and human approval points.'],
        ['03', 'Controlled pilot', 'We implement a bounded scope with real data, observability and acceptance criteria before scaling.'],
        ['04', 'Production and measurement', 'We compare outcomes against the baseline and expand only when evidence justifies more scope.'],
      ]

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border px-4 pb-20 pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 font-[var(--font-rajdhani)] text-xs uppercase tracking-[0.18em] text-primary">
            {isES ? 'Automatización empresarial · Chile' : 'Enterprise automation · Chile'}
          </p>
          <h1 className="text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
            {isES ? 'Automatización con IA para empresas' : 'AI automation for businesses'}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
            {isES
              ? 'Conectamos procesos, datos, documentos, reglas e IA para reducir trabajo de coordinación y hacer más trazable la operación. El impacto se mide contra el proceso real de cada empresa; no prometemos un ROI universal.'
              : 'We connect processes, data, documents, rules and AI to reduce coordination work and make operations more traceable. Impact is measured against each company’s real process; we do not promise a universal ROI.'}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={href('/diagnostico')} className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              {isES ? 'Evaluar un proceso' : 'Evaluate a process'}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={href('/soluciones')} className="inline-flex items-center justify-center gap-2 border border-border px-7 py-3 font-semibold text-foreground transition-colors hover:border-primary/50">
              {isES ? 'Ver expertise' : 'View expertise'}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground">{isES ? 'Qué automatizamos' : 'What we automate'}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            {isES
              ? 'Priorizamos procesos con fuentes de verdad identificables, decisiones repetibles y un resultado observable.'
              : 'We prioritize processes with identifiable sources of truth, repeatable decisions and an observable outcome.'}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {areas.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.titleEN} className="border border-border bg-card p-7">
                  <Icon className="mb-5 h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{isES ? item.titleES : item.titleEN}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{isES ? item.descES : item.descEN}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground">{isES ? 'Cómo medimos valor' : 'How we measure value'}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {(isES
              ? [
                  ['Antes', 'Baseline de tiempos, errores, excepciones, volumen y esfuerzo manual.'],
                  ['Durante', 'Observabilidad de fallos, intervención humana, adopción y calidad de salida.'],
                  ['Después', 'Comparación del mismo proceso para decidir si escalar, corregir o detener la automatización.'],
                ]
              : [
                  ['Before', 'Baseline for cycle time, errors, exceptions, volume and manual effort.'],
                  ['During', 'Observability for failures, human intervention, adoption and output quality.'],
                  ['After', 'Comparison of the same process to decide whether to scale, correct or stop the automation.'],
                ]
            ).map(([title, body]) => (
              <article key={title} className="border border-border bg-background p-6">
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground">{isES ? 'Fases de implementación' : 'Implementation phases'}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {phases.map(([step, title, body]) => (
              <article key={step} className="border border-border p-7">
                <p className="font-[var(--font-rajdhani)] text-xs tracking-[0.18em] text-primary">{step}</p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground">
            {isES ? 'Automatizar sólo donde la evidencia lo justifica.' : 'Automate only where the evidence supports it.'}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            {isES
              ? 'El diagnóstico identifica el cuello de botella, la fuente de verdad, los controles necesarios y la métrica que permitirá evaluar si la automatización realmente funciona.'
              : 'The diagnosis identifies the bottleneck, source of truth, required controls and the metric used to evaluate whether the automation actually works.'}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={href('/diagnostico')} className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              {isES ? 'Agendar diagnóstico' : 'Book a diagnosis'}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={href('/trust')} className="inline-flex items-center justify-center border border-border px-8 py-3 font-semibold text-foreground transition-colors hover:border-primary/50">
              {isES ? 'Ver política de evidencia' : 'View evidence policy'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
