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
    title: isES ? "Agentes de IA para Empresas en Rancagua | N3uralia" : "AI Agents for Businesses in Rancagua | N3uralia",
    description: isES ? "Agentes de IA para Rancagua: minería, manufactura, retail. Optimización de operaciones, ROI garantizado." : "AI agents for Rancagua: mining, manufacturing, retail. Operations optimization, guaranteed ROI.",
    keywords: isES ? "agentes IA Rancagua" : "AI agents Rancagua",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-rancagua-chile` },
  }
}

export default function AgentesIARancaguaPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 bg-background relative overflow-hidden pt-32">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold mb-6">{isES ? "Agentes de IA para Rancagua" : "AI Agents for Rancagua"}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">{isES ? "Para Rancagua: minería, manufactura, retail. Agentes inteligentes que optimizan operaciones y generan ROI rápido." : "For Rancagua: mining, manufacturing, retail. Intelligent agents that optimize operations and generate quick ROI."}</p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Consultar para Rancagua" : "Consult for Rancagua"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Agendar consulta" : "Schedule consultation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
