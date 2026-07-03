import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Target, TrendingUp, Zap } from 'lucide-react'
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
    badge: 'Revenue acceleration',
    title: 'Automatización inteligente de ventas',
    intro:
      'Tu equipo pierde tiempo en tareas manuales: calificar leads, enviar follow-ups y actualizar pipeline. N3uralia automatiza la operación para que ventas se enfoque en cerrar deals.',
    primaryCta: 'Ver demo',
    secondaryCta: 'Operaciones 24/7',
    problemTitle: 'El cuello de botella en ventas',
    problemIntro: 'Cada día entran leads, pero tu equipo no siempre tiene tiempo para procesarlos inteligentemente.',
    problems: [
      {
        title: 'Leads perdidos',
        desc: 'Un lead de alta calidad llega hoy, pero nadie lo sigue hasta mañana. Para entonces, puede estar hablando con un competidor.',
      },
      {
        title: 'Equipo comercial agotado',
        desc: 'Los mejores vendedores gastan demasiado tiempo en admin: registrar actividades, buscar el próximo paso y preparar emails.',
      },
      {
        title: 'Pipeline incierto',
        desc: 'No sabes la probabilidad real de cierre. El forecast termina siendo una estimación con baja confianza.',
      },
      {
        title: 'Ciclo de venta largo',
        desc: 'Pasan semanas entre primer contacto y primera reunión por falta de follow-up automático y nurturing.',
      },
    ],
    solutionTitle: 'Automatización inteligente de revenue ops',
    solutionIntro:
      'Cada lead calificado, cada oportunidad rastreada y cada ciclo de venta acelerado. N3uralia convierte tu CRM en un motor de revenue.',
    capabilities: [
      {
        icon: Target,
        title: 'Lead scoring inteligente',
        desc: 'Cada lead se analiza contra tus criterios de MQL/SQL para que solo los hot leads lleguen a ventas.',
      },
      {
        icon: Zap,
        title: 'Nurturing automático',
        desc: 'Seguimiento automático sin intervención del vendedor: emails, SMS y contenido personalizado.',
      },
      {
        icon: Clock,
        title: 'Pipeline actualizado en tiempo real',
        desc: 'Cada cambio en el CRM se propaga automáticamente. El forecast se vuelve confiable.',
      },
      {
        icon: TrendingUp,
        title: 'Analítica y predictibilidad',
        desc: 'Predicción de cierre, velocidad comercial e identificación temprana de deals en riesgo.',
      },
    ],
    resultsTitle: 'Resultados típicos en 3 meses',
    results: [
      { metric: '+30%', label: 'Conversión' },
      { metric: '-40%', label: 'Ciclo de venta' },
      { metric: '+60%', label: 'Productividad comercial' },
    ],
    finalTitle: '¿Quieres acelerar tu revenue?',
    finalIntro: 'Conectemos una demo. Mostraremos cómo N3uralia optimiza tu sales machine.',
    finalCta: 'Agendar demo',
  },
  en: {
    badge: 'Revenue acceleration',
    title: 'Intelligent sales automation',
    intro:
      'Your team loses time on manual tasks: qualifying leads, sending follow-ups, and updating the pipeline. N3uralia automates the operating layer so sales can focus on closing.',
    primaryCta: 'View demo',
    secondaryCta: '24/7 operations',
    problemTitle: 'The sales bottleneck',
    problemIntro: 'Leads arrive every day, but your team does not always have time to process them intelligently.',
    problems: [
      {
        title: 'Lost leads',
        desc: 'A high-quality lead arrives today, but nobody follows up until tomorrow. By then, they may already be speaking with a competitor.',
      },
      {
        title: 'Exhausted sales team',
        desc: 'Top sellers spend too much time on admin: logging activities, finding the next step, and preparing emails.',
      },
      {
        title: 'Uncertain pipeline',
        desc: 'You do not know the real probability of closing. Forecasting becomes a low-confidence estimate.',
      },
      {
        title: 'Long sales cycle',
        desc: 'Weeks pass between first contact and first call because follow-up and nurturing are not automated.',
      },
    ],
    solutionTitle: 'Intelligent revenue ops automation',
    solutionIntro:
      'Every qualified lead, every opportunity tracked, and every sales cycle accelerated. N3uralia turns your CRM into a revenue engine.',
    capabilities: [
      {
        icon: Target,
        title: 'Intelligent lead scoring',
        desc: 'Each lead is evaluated against your MQL/SQL criteria so only hot leads reach sales.',
      },
      {
        icon: Zap,
        title: 'Automated nurturing',
        desc: 'Follow-up without seller intervention: emails, SMS, and personalized content.',
      },
      {
        icon: Clock,
        title: 'Real-time pipeline updates',
        desc: 'Every CRM change propagates automatically. Forecasting becomes more reliable.',
      },
      {
        icon: TrendingUp,
        title: 'Analytics and predictability',
        desc: 'Close prediction, sales velocity analysis, and early identification of at-risk deals.',
      },
    ],
    resultsTitle: 'Typical results in 3 months',
    results: [
      { metric: '+30%', label: 'Conversion rate' },
      { metric: '-40%', label: 'Sales cycle' },
      { metric: '+60%', label: 'Sales productivity' },
    ],
    finalTitle: 'Want to accelerate revenue?',
    finalIntro: 'Let us connect for a demo. We will show how N3uralia optimizes your sales machine.',
    finalCta: 'Book a demo',
  },
} as const

function localizedHref(locale: Locale, path: string) {
  return `/${locale}${path}`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: '/automatizacion-ventas-leads',
    title: locale === 'es' ? 'Automatización de ventas y leads | N3uralia' : 'Sales and lead automation | N3uralia',
    description:
      locale === 'es'
        ? 'Automatiza lead scoring, nurturing y seguimiento comercial con workflows de revenue operations pensados para equipos B2B en Chile y LATAM.'
        : 'Automate lead scoring, nurturing, and pipeline follow-up with revenue workflows built for B2B teams in Chile and LATAM.',
  })
}

export default function VentasLeadsPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="border-b border-border px-4 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{page.badge}</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold text-foreground sm:text-6xl">{page.title}</h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">{page.intro}</p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={localizedHref(locale, '/contact')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={localizedHref(locale, '/operaciones-autonomas')} className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary/5">
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

            <div className="grid grid-cols-1 gap-8">
              {page.capabilities.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/40">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-border px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-foreground">{page.resultsTitle}</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {page.results.map((item) => (
                <div key={item.metric} className="rounded-lg border border-border bg-card p-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">{item.metric}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground">{page.finalTitle}</h2>
            <p className="mb-8 text-lg text-muted-foreground">{page.finalIntro}</p>
            <Link href={localizedHref(locale, '/contact')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              {page.finalCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
