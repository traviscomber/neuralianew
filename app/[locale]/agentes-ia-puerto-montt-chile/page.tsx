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
    title: isES ? "Agentes de IA para Empresas en Puerto Montt | N3uralia" : "AI Agents for Businesses in Puerto Montt | N3uralia",
    description: isES ? "Automatización para Puerto Montt: turismo, gastronomía, logística. Agentes 24/7, soporte local, ROI garantizado." : "Automation for Puerto Montt: tourism, gastronomy, logistics. 24/7 agents, local support, guaranteed ROI.",
    keywords: isES ? "agentes IA Puerto Montt, turismo IA" : "AI agents Puerto Montt",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-puerto-montt-chile` },
  }
}

export default function AgentesIAPuertoMonttPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16 relative overflow-hidden">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            {isES ? "Agentes de IA para Empresas en Puerto Montt" : "AI Agents for Businesses in Puerto Montt"}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            {isES ? "Para empresas de Puerto Montt: turismo, gastronomía, logística. Agentes conversacionales 24/7, atención en español, soporte local." : "For Puerto Montt businesses: tourism, gastronomy, logistics. 24/7 conversational agents, Spanish support, local assistance."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            {isES ? "Consultar para Puerto Montt" : "Consult for Puerto Montt"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            {isES ? "Agendar consulta" : "Schedule consultation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
