import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Database, ShieldCheck, Workflow } from 'lucide-react'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'

  return buildLocalizedMetadata({
    locale,
    path: '/agentes-ia-chile',
    title: isES
      ? 'Agentes de IA para empresas en Chile | N3uralia'
      : 'AI agents for businesses in Chile | N3uralia',
    description: isES
      ? 'Diseño e integración de agentes de IA para operaciones reales en Chile: documentos, datos, aprobaciones, asistentes e integraciones con sistemas existentes.'
      : 'Design and integration of AI agents for real operations in Chile: documents, data, approvals, assistants and integrations with existing systems.',
  })
}

export default async function AgentesIAChilePage(props: PageProps) {
  const params = await props.params;
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'
  const href = (path: string) => `/${locale}${path}`

  const valueProps = [
    {
      icon: Workflow,
      titleES: 'Automatización acotada',
      titleEN: 'Bounded automation',
      descES: 'Diseñamos agentes alrededor de tareas, herramientas y límites explícitos. Las decisiones de alto impacto conservan controles y responsables humanos cuando corresponde.',
      descEN: 'We design agents around explicit tasks, tools and boundaries. High-impact decisions retain human controls and accountable owners when appropriate.',
    },
    {
      icon: Database,
      titleES: 'Integración con sistemas existentes',
      titleEN: 'Integration with existing systems',
      descES: 'La IA puede conectarse a APIs, documentos, bases de datos, ERP, CRM y flujos internos sin convertir el chat en una fuente paralela de verdad.',
      descEN: 'AI can connect to APIs, documents, databases, ERP, CRM and internal workflows without turning chat into a parallel source of truth.',
    },
    {
      icon: ShieldCheck,
      titleES: 'Gobierno y trazabilidad',
      titleEN: 'Governance and traceability',
      descES: 'Los permisos, evidencia, auditoría, recuperación y requisitos de datos se definen según el riesgo y la arquitectura real del proyecto.',
      descEN: 'Permissions, evidence, auditability, recovery and data requirements are defined according to the project’s actual risk and architecture.',
    },
    {
      icon: CheckCircle2,
      titleES: 'Impacto medido desde baseline',
      titleEN: 'Impact measured from baseline',
      descES: 'No usamos un porcentaje universal de ahorro o productividad. Definimos métricas antes de automatizar y comparamos el resultado con el proceso real de cada organización.',
      descEN: 'We do not use a universal savings or productivity percentage. Metrics are defined before automation and measured against each organization’s real process.',
    },
  ]

  const useCases = isES
    ? [
        ['Documentos y compliance', 'Clasificación, extracción, vencimientos, validaciones, excepciones y evidencia.'],
        ['Asistentes operacionales', 'Respuestas y recomendaciones conectadas a datos y documentos autorizados.'],
        ['Aprobaciones y handoffs', 'Flujos con reglas determinísticas, responsables, alertas y trazabilidad.'],
        ['Inteligencia operacional', 'Detección de señales, priorización de excepciones y contexto para decidir.'],
      ]
    : [
        ['Documents and compliance', 'Classification, extraction, expiries, validation, exceptions and evidence.'],
        ['Operational assistants', 'Answers and recommendations connected to authorized data and documents.'],
        ['Approvals and handoffs', 'Flows with deterministic rules, owners, alerts and traceability.'],
        ['Operational intelligence', 'Signal detection, exception prioritization and context for decisions.'],
      ]

  const process = isES
    ? [
        ['01', 'Diagnóstico', 'Mapeamos proceso, datos, sistemas, responsables, restricciones y una métrica baseline.'],
        ['02', 'Arquitectura', 'Definimos qué debe hacer IA, qué debe seguir siendo determinístico y dónde debe existir aprobación humana.'],
        ['03', 'Implementación', 'Integramos un flujo acotado con datos reales, observabilidad y criterios de aceptación.'],
        ['04', 'Validación y evolución', 'Medimos errores, excepciones, tiempos y adopción antes de ampliar alcance.'],
      ]
    : [
        ['01', 'Diagnosis', 'We map the process, data, systems, owners, constraints and a baseline metric.'],
        ['02', 'Architecture', 'We define what AI should do, what remains deterministic and where human approval is required.'],
        ['03', 'Implementation', 'We integrate a bounded workflow using real data, observability and acceptance criteria.'],
        ['04', 'Validation and evolution', 'We measure errors, exceptions, cycle time and adoption before expanding scope.'],
      ]

  const faqs = isES
    ? [
        ['¿Qué empresas pueden aprovechar agentes de IA?', 'Organizaciones con procesos repetitivos, documentos, datos dispersos, aprobaciones, consultas frecuentes o excepciones operacionales. El diagnóstico determina si un agente realmente es la mejor solución.'],
        ['¿Cuánto cuesta implementar un agente?', 'Depende del alcance, las integraciones, el nivel de riesgo y la operación existente. Cotizamos después de entender el flujo y sus requisitos; no publicamos un precio universal que no represente el proyecto real.'],
        ['¿Los datos deben quedar en Chile?', 'La residencia y el tratamiento de datos se definen por proyecto según requisitos contractuales, regulatorios y de arquitectura. No presentamos una ubicación de datos universal para todos los sistemas.'],
        ['¿Tengo que reemplazar mis sistemas actuales?', 'Normalmente no. Una parte central del trabajo es integrarnos con los sistemas que ya son fuente de verdad y mejorar el flujo alrededor de ellos.'],
      ]
    : [
        ['Which companies can benefit from AI agents?', 'Organizations with recurring processes, documents, dispersed data, approvals, frequent questions or operational exceptions. The diagnosis determines whether an agent is actually the right solution.'],
        ['How much does an AI agent implementation cost?', 'It depends on scope, integrations, risk and the existing operation. We quote after understanding the workflow and its requirements rather than publishing a universal price that may not fit the real project.'],
        ['Must the data stay in Chile?', 'Data residency and processing are defined per project according to contractual, regulatory and architecture requirements. We do not present one universal data location for every system.'],
        ['Do we need to replace our current systems?', 'Usually not. A central part of the work is integrating with systems that already hold canonical truth and improving the workflow around them.'],
      ]

  return (
    <main className="min-h-screen bg-background">
      <section className="px-4 pb-20 pt-40 border-b border-border">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 font-[var(--font-rajdhani)] text-xs uppercase tracking-[0.18em] text-primary">
            {isES ? 'IA aplicada a operaciones en Chile' : 'AI applied to operations in Chile'}
          </p>
          <h1 className="text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
            {isES ? 'Agentes de IA para empresas en Chile' : 'AI agents for businesses in Chile'}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
            {isES
              ? 'Construimos agentes y asistentes conectados a procesos, documentos y datos reales. El objetivo no es agregar otro chatbot: es mejorar una operación sin perder control, trazabilidad ni fuente de verdad.'
              : 'We build agents and assistants connected to real processes, documents and data. The goal is not to add another chatbot; it is to improve an operation without losing control, traceability or canonical truth.'}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={href('/diagnostico')} className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              {isES ? 'Agendar diagnóstico' : 'Book a diagnosis'}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={href('/trust')} className="inline-flex items-center justify-center gap-2 border border-border px-7 py-3 font-semibold text-foreground transition-colors hover:border-primary/50">
              {isES ? 'Confianza y seguridad' : 'Trust & security'}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {valueProps.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.titleEN} className="border border-border bg-card p-7">
                  <Icon className="mb-5 h-8 w-8 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">{isES ? item.titleES : item.titleEN}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{isES ? item.descES : item.descEN}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground">{isES ? 'Dónde aporta más valor' : 'Where agents add the most value'}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            {isES
              ? 'Priorizamos flujos donde exista una tarea definida, una fuente de verdad identificable y un resultado que pueda validarse.'
              : 'We prioritize workflows with a defined task, an identifiable source of truth and an outcome that can be validated.'}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {useCases.map(([title, description]) => (
              <div key={title} className="border-l-2 border-primary/70 pl-5">
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground">{isES ? 'Cómo implementamos' : 'How we implement'}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {process.map(([step, title, description]) => (
              <article key={step} className="border border-border p-7">
                <p className="font-[var(--font-rajdhani)] text-xs tracking-[0.18em] text-primary">{step}</p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground">{isES ? 'Preguntas frecuentes' : 'Frequently asked questions'}</h2>
          <div className="mt-8 space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="border border-border bg-background p-6">
                <summary className="cursor-pointer font-semibold text-foreground">{question}</summary>
                <p className="mt-4 leading-7 text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground">
            {isES ? 'Partamos por el proceso, no por la tecnología.' : 'Start with the process, not the technology.'}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            {isES
              ? 'El diagnóstico define dónde un agente tiene sentido, qué datos necesita, qué controles debe respetar y cómo medir si realmente mejora la operación.'
              : 'The diagnosis defines where an agent makes sense, which data it needs, which controls it must respect and how to measure whether it actually improves the operation.'}
          </p>
          <Link href={href('/diagnostico')} className="mt-8 inline-flex items-center gap-2 bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            {isES ? 'Agendar diagnóstico' : 'Book a diagnosis'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
