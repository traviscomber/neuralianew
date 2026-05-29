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
    title: isES ? "Agentes de IA para Empresas en Talca | N3uralia" : "AI Agents for Businesses in Talca | N3uralia",
    description: isES ? "Automatización con agentes IA para Talca. Agricultura, retail, servicios. Reduce costos 70%, ROI en 6 meses." : "AI agents automation for Talca. Agriculture, retail, services. Reduce costs 70%, ROI in 6 months.",
    keywords: isES ? "agentes IA Talca" : "AI agents Talca",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-talca-chile` },
  }
}

export default function AgentesIATalcaPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 bg-background relative overflow-hidden pt-32">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold mb-6">{isES ? "Agentes de IA para Talca" : "AI Agents for Talca"}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">{isES ? "Automatización para Talca: agricultura, retail, servicios. Reduce costos hasta 70%, escala sin aumentar equipo." : "Automation for Talca: agriculture, retail, services. Reduce costs up to 70%, scale without hiring."}</p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Consultar para Talca" : "Consult for Talca"}
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
