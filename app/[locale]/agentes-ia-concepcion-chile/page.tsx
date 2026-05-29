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
    title: isES ? "Agentes de IA para Empresas en Concepción | N3uralia" : "AI Agents for Businesses in Concepción | N3uralia",
    description: isES ? "IA y automatización para empresas de Concepción. Manufactura, logística, retail. Implementación local, ROI garantizado." : "AI and automation for Concepción businesses. Manufacturing, logistics, retail. Local implementation, guaranteed ROI.",
    keywords: isES ? "agentes IA Concepción, automatización Concepción" : "AI agents Concepción",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-concepcion-chile` },
  }
}

export default function AgentesIAConcepcionPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 bg-background relative overflow-hidden pt-32">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            {isES ? "Agentes de IA para Empresas en Concepción" : "AI Agents for Businesses in Concepción"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            {isES ? "Automatización para Concepción: manufactura, logística, retail. Reduce costos, acelera procesos, escala sin aumentar equipo." : "Automation for Concepción: manufacturing, logistics, retail. Reduce costs, accelerate processes, scale without hiring."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Consultar para Concepción" : "Consult for Concepción"}
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
