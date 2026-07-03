import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react'
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
    title: 'IA que acelera el crecimiento',
    intro:
      'N3uralia te da acceso a tecnología de IA de próxima generación sin la complejidad enterprise. Automatización inteligente, agentes que trabajan 24/7 y crecimiento exponencial.',
    primaryCta: 'Empezar hoy',
    secondaryCta: 'Probar demo',
    whyTitle: '¿Por qué startups eligen N3uralia?',
    reasons: [
      {
        icon: Zap,
        title: 'Implementación rápida',
        desc: 'Deploy en días, no meses. Agentes listos para producción desde la semana 1.',
      },
      {
        icon: TrendingUp,
        title: 'Crecimiento sin contratar',
        desc: 'Automatiza tareas sin aumentar tu equipo. Crece 10x sin asumir costos 10x.',
      },
      {
        icon: Shield,
        title: 'Seguridad',
        desc: 'Protege tus datos con arquitectura de IA preparada para producción.',
      },
    ],
    demoTitle: 'Ver living agents en acción',
    demoIntro: 'Experimenta cómo agentes especializados colaboran para tomar decisiones inteligentes.',
    demoCta: 'Probar demo interactiva',
    useCasesTitle: 'Cómo startups usan N3uralia',
    useCases: [
      {
        title: 'Onboarding automatizado',
        desc: 'Agentes que onboardean usuarios automáticamente y reducen soporte manual.',
      },
      {
        title: 'Análisis de datos en vivo',
        desc: 'Agentes que monitorean métricas y alertan sobre anomalías. Business intelligence automático.',
      },
      {
        title: 'Customer success escalado',
        desc: 'Agentes que ayudan proactivamente a usuarios. Menos churn y más lifetime value.',
      },
      {
        title: 'Generación de leads',
        desc: 'Agentes que califican leads y preparan ventas. Conversión más alta y ciclo más corto.',
      },
    ],
    pricingTitle: 'Pricing para startups',
    pricingIntro: 'Pago por uso. Sin contratos anuales. Crece con nosotros: pagas solo por lo que usas.',
    pricingCta: 'Consultar planes personalizados',
    finalTitle: '¿Listo para escalar?',
    finalIntro: 'Únete a startups que ya usan N3uralia para crecer sin límites.',
    finalCta: 'Empezar gratis',
  },
  en: {
    title: 'AI that accelerates growth',
    intro:
      'N3uralia gives startups access to next-generation AI without enterprise complexity. Smart automation, agents that work 24/7, and exponential growth without unnecessary headcount.',
    primaryCta: 'Start today',
    secondaryCta: 'Try the demo',
    whyTitle: 'Why startups choose N3uralia',
    reasons: [
      {
        icon: Zap,
        title: 'Fast implementation',
        desc: 'Deploy in days, not months. Production-ready agents from week one.',
      },
      {
        icon: TrendingUp,
        title: 'Growth without hiring',
        desc: 'Automate tasks without growing the team. Scale 10x without taking on 10x costs.',
      },
      {
        icon: Shield,
        title: 'Security',
        desc: 'Protect your data with production-grade AI architecture.',
      },
    ],
    demoTitle: 'See living agents in action',
    demoIntro: 'Experience how specialized agents collaborate to make smarter decisions.',
    demoCta: 'Try interactive demo',
    useCasesTitle: 'How startups use N3uralia',
    useCases: [
      {
        title: 'Automated onboarding',
        desc: 'Agents onboard users automatically and reduce manual support.',
      },
      {
        title: 'Live data analysis',
        desc: 'Agents monitor metrics and alert teams about anomalies. Automated business intelligence.',
      },
      {
        title: 'Scaled customer success',
        desc: 'Agents proactively help users. Less churn and higher lifetime value.',
      },
      {
        title: 'Lead generation',
        desc: 'Agents qualify leads and prepare sales work. Higher conversion and shorter cycles.',
      },
    ],
    pricingTitle: 'Startup-friendly pricing',
    pricingIntro: 'Usage-based pricing. No annual contracts. Grow with us and pay only for what you use.',
    pricingCta: 'Ask about custom plans',
    finalTitle: 'Ready to scale?',
    finalIntro: 'Join startups already using N3uralia to grow without limits.',
    finalCta: 'Start free',
  },
} as const

function localizedHref(locale: Locale, path: string) {
  return `/${locale}${path}`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: '/para-startups',
    type: 'website',
    title:
      locale === 'es'
        ? 'N3uralia para startups | Agentes IA escalables'
        : 'N3uralia for startups | Scalable AI agents',
    description:
      locale === 'es'
        ? 'Acceso a tecnología IA production-ready para startups. Automatización inteligente, agentes 24/7 y crecimiento sin costos innecesarios.'
        : 'Production-ready AI access for startups. Smart automation, 24/7 agents, and growth without unnecessary operational cost.',
  })
}

export default function ParaStartups({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-16">
        <section className="border-b border-border bg-background px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="h1-light mb-6 text-foreground">{page.title}</h1>
            <p className="body-lg mb-4 text-muted-foreground">{page.intro}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={localizedHref(locale, '/contact')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={localizedHref(locale, '/living-agents/demo')} className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10">
                {page.secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background px-4 py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="h2 mb-12 text-center text-foreground">{page.whyTitle}</h2>
            <div className="space-y-6">
              {page.reasons.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-6">
                    <Icon className="h-8 w-8 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card px-4 py-16">
          <div className="container mx-auto max-w-2xl text-center">
            <h3 className="h3 mb-4 text-foreground">{page.demoTitle}</h3>
            <p className="body mb-6 text-muted-foreground">{page.demoIntro}</p>
            <Link href={localizedHref(locale, '/living-agents/demo')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              {page.demoCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="border-b border-border bg-background px-4 py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="h2 mb-12 text-center text-foreground">{page.useCasesTitle}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {page.useCases.map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/40">
                  <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background px-4 py-24">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="h2 mb-4 text-foreground">{page.pricingTitle}</h2>
            <p className="body mb-8 text-muted-foreground">{page.pricingIntro}</p>
            <Link href={localizedHref(locale, '/contact')} className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80">
              {page.pricingCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="border-t border-border bg-background px-4 py-20">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="h2 mb-4 text-foreground">{page.finalTitle}</h2>
            <p className="body mb-8 text-muted-foreground">{page.finalIntro}</p>
            <Link href={localizedHref(locale, '/contact')} className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              {page.finalCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
