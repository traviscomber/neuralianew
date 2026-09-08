import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Brain, Moon, BarChart3, ShieldCheck } from 'lucide-react'
import { DEFAULT_LOCALE, isValidLocale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'

interface PageProps { params: { locale: string } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return buildLocalizedMetadata({
    locale,
    path: '/operaciones-autonomas',
    title: locale === 'es' ? 'Automatización operacional 24/7 | N3uralia' : '24/7 operational automation | N3uralia',
    description: locale === 'es'
      ? 'Automatización supervisada para procesos que requieren continuidad, monitoreo, trazabilidad y escalamiento humano cuando corresponde.'
      : 'Supervised automation for processes that require continuity, monitoring, traceability and human escalation when appropriate.',
  })
}

export default function OperacionesAutonomasPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const es = locale === 'es'
  const contact = `/${locale}/contact`
  const trust = `/${locale}/trust`

  const capabilities = es ? [
    ['Decisión acotada', 'Automatizamos decisiones repetitivas cuando existen datos, reglas y permisos suficientes; los casos ambiguos o de alto impacto escalan a personas.'],
    ['Ejecución continua', 'Workers, cron jobs y agentes pueden operar fuera del horario humano cuando el proceso lo permite y existe observabilidad.'],
    ['Escala por arquitectura', 'Diseñamos colas, reintentos, idempotencia y límites para aumentar volumen sin convertir cada crecimiento en trabajo manual adicional.'],
    ['Control operacional', 'Métricas, logs, alertas y rutas de recuperación se definen según criticidad. Un SLA sólo se publica cuando existe un compromiso contractual y evidencia que lo respalda.'],
  ] : [
    ['Bounded decisions', 'We automate repetitive decisions when data, rules and permissions are sufficient; ambiguous or high-impact cases escalate to people.'],
    ['Continuous execution', 'Workers, cron jobs and agents can run outside human working hours when the process allows it and observability is in place.'],
    ['Architecture-led scale', 'Queues, retries, idempotency and limits are designed so higher volume does not automatically become more manual work.'],
    ['Operational control', 'Metrics, logs, alerts and recovery paths are defined by criticality. An SLA is published only when there is a contractual commitment and evidence behind it.'],
  ]

  const useCases = es ? [
    'Reconciliación y validación de datos con reglas explícitas',
    'Procesamiento de órdenes y documentos con escalamiento por excepción',
    'Alertas operacionales y seguimiento de vencimientos',
    'Sincronizaciones entre sistemas con reintentos y trazabilidad',
    'Preparación de decisiones para aprobación humana',
    'Ejecución programada de tareas repetitivas y verificables',
  ] : [
    'Data reconciliation and validation with explicit rules',
    'Order and document processing with exception-based escalation',
    'Operational alerts and expiry tracking',
    'Cross-system synchronization with retries and traceability',
    'Decision preparation for human approval',
    'Scheduled execution of repetitive, verifiable work',
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-2">
            <Moon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{es ? 'Automatización operacional' : 'Operational automation'}</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-foreground sm:text-6xl">{es ? 'Procesos que continúan sin perder control' : 'Processes that keep running without losing control'}</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">{es ? 'N3uralia automatiza trabajo repetitivo y flujos de decisión con reglas, datos canónicos, permisos, observabilidad y escalamiento humano.' : 'N3uralia automates repetitive work and decision workflows with rules, canonical data, permissions, observability and human escalation.'}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={contact} className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-3 font-semibold text-primary-foreground">{es ? 'Evaluar un proceso' : 'Evaluate a process'} <ArrowRight className="h-4 w-4" /></Link>
            <Link href={trust} className="inline-flex items-center justify-center gap-2 border border-primary px-8 py-3 font-semibold text-primary">{es ? 'Ver confianza y seguridad' : 'See trust & security'} <ShieldCheck className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-4xl font-bold text-foreground">{es ? 'Qué significa autonomía para N3uralia' : 'What autonomy means at N3uralia'}</h2>
          <p className="mb-12 text-lg text-muted-foreground">{es ? 'No significa una caja negra sin responsables. Significa reducir intervención manual donde el riesgo y la evidencia permiten hacerlo.' : 'It does not mean a black box with no accountable owner. It means reducing manual intervention where risk and evidence allow it.'}</p>
          <div className="grid gap-8">
            {capabilities.map(([title, desc], index) => { const Icon = [Brain, Zap, BarChart3, CheckCircle2][index]; return <div key={title} className="border border-border bg-card p-8"><div className="flex gap-4"><Icon className="h-8 w-8 shrink-0 text-primary"/><div><h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3><p className="text-muted-foreground">{desc}</p></div></div></div> })}
          </div>
        </div>
      </section>

      <section className="border-b border-border px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">{es ? 'Casos de uso apropiados' : 'Appropriate use cases'}</h2>
          <div className="space-y-4">{useCases.map(item => <div key={item} className="flex gap-3 border border-border bg-card p-4"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary"/><span>{item}</span></div>)}</div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground">{es ? 'Primero medimos el proceso. Después automatizamos.' : 'Measure the process first. Automate second.'}</h2>
          <p className="mb-8 text-lg text-muted-foreground">{es ? 'Definimos baseline, riesgos, puntos de aprobación y métricas antes de presentar ahorro, disponibilidad o autonomía como resultado.' : 'We define the baseline, risks, approval points and metrics before presenting savings, availability or autonomy as an outcome.'}</p>
          <Link href={contact} className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-3 font-semibold text-primary-foreground">{es ? 'Agendar diagnóstico' : 'Book a diagnosis'} <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
