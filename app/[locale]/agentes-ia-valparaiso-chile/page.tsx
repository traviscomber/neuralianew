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
    title: isES ? "Agentes de IA para Empresas en Valparaíso | N3uralia" : "AI Agents for Businesses in Valparaíso | N3uralia",
    description: isES ? "Automatización IA para empresas en Valparaíso. Turismo, retail, logística. ROI garantizado, soporte local." : "AI automation for Valparaíso businesses. Tourism, retail, logistics. Guaranteed ROI, local support.",
    keywords: isES ? "agentes IA Valparaíso, automatización Valparaíso" : "AI agents Valparaíso",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-valparaiso-chile` },
  }
}

export default function AgentesIAValparaisoPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16 relative overflow-hidden">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            {isES ? "Agentes de IA para Empresas en Valparaíso" : "AI Agents for Businesses in Valparaíso"}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            {isES ? "Para empresas de Valparaíso: retail, turismo, logística. Automatización inteligente, soporte en tu zona, ROI en 6 meses." : "For Valparaíso businesses: retail, tourism, logistics. Intelligent automation, local support, ROI in 6 months."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            {isES ? "Consultar para Valparaíso" : "Consult for Valparaíso"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Transforma tu negocio en Valparaíso" : "Transform your business in Valparaíso"}</h2>
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
