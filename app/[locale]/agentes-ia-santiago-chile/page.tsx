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
    title: isES ? "Agentes de IA para Empresas en Santiago | N3uralia" : "AI Agents for Businesses in Santiago | N3uralia",
    description: isES ? "Automatización con agentes IA para empresas en Santiago. Consultoria gratuita, implementación en 6-8 semanas, ROI garantizado. Soporte local." : "AI automation for businesses in Santiago. Free consultation, 6-8 weeks implementation, guaranteed ROI. Local support.",
    keywords: isES ? "agentes IA Santiago, automatización empresas Santiago, IA Santiago" : "AI agents Santiago, business automation Santiago",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-santiago-chile` },
  }
}

export default function AgentesIASantiagoPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 bg-background relative overflow-hidden pt-32">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Santiago</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            {isES ? "Agentes de IA para Empresas en Santiago" : "AI Agents for Businesses in Santiago"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            {isES ? "Automatización inteligente para empresas de Santiago. Reduce costos operativos hasta 70%, libera tu equipo para trabajo estratégico. Implementación garantizada en 6-8 semanas con soporte local." : "Intelligent automation for Santiago businesses. Reduce operating costs by 70%, free your team for strategic work. Guaranteed 6-8 week implementation with local support."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Consultar para Santiago" : "Consult for Santiago"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Empresas en Santiago que usan agentes IA" : "Santiago businesses using AI agents"}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {["Retail", "Financiero", "Tecnología", "Servicios", "Logística", "Turismo"].map((ind, i) => (
              <div key={i} className="p-4 border border-border rounded-lg hover:border-primary/50 bg-background">
                <p className="font-semibold text-foreground">{ind}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Comienza en Santiago" : "Start in Santiago"}</h2>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Agendar cita Santiago" : "Schedule appointment"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
