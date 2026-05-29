import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { isValidLocale, DEFAULT_LOCALE } from '@/lib/get-locale'
import type { Locale } from '@/content/dictionaries'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

interface PageProps { params: { locale: string } }

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"
  return {
    title: isES ? "Agentes de IA para Minería en Antofagasta | N3uralia" : "AI Agents for Mining in Antofagasta | N3uralia",
    description: isES ? "Automatización con IA para minería en Antofagasta. Optimización de operaciones, predicción de fallos, ROI garantizado 300%." : "AI automation for mining in Antofagasta. Operations optimization, predictive maintenance, 300% guaranteed ROI.",
    keywords: isES ? "agentes IA Antofagasta, minería IA Antofagasta" : "AI agents Antofagasta, mining AI",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-antofagasta-chile` },
  }
}

export default function AgentesIAAntofagastaPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 bg-background relative overflow-hidden pt-32">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
            <span className="text-sm font-medium">Minería</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            {isES ? "Agentes de IA para Minería en Antofagasta" : "AI Agents for Mining in Antofagasta"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            {isES ? "Para la minería de Antofagasta: optimización de operaciones, predicción de fallos, análisis de datos en tiempo real. 30% reducción de costos, 300% ROI." : "For Antofagasta mining: operations optimization, predictive maintenance, real-time data analysis. 30% cost reduction, 300% ROI."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Consultar para minería" : "Consult for mining"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Agendar consulta minería" : "Schedule mining consultation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
