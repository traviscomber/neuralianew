import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { isValidLocale, DEFAULT_LOCALE } from '@/lib/get-locale'
import type { Locale } from '@/content/dictionaries'
import { Footer } from '@/components/layout/footer'

interface PageProps { params: { locale: string } }

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"
  return {
    title: isES ? "Agentes de IA para Empresas en Punta Arenas | N3uralia" : "AI Agents for Businesses in Punta Arenas | N3uralia",
    description: isES ? "IA para Punta Arenas: turismo, pesca, logística. Automatización inteligente adaptada al sur de Chile." : "AI for Punta Arenas: tourism, fishing, logistics. Intelligent automation adapted to southern Chile.",
    keywords: isES ? "agentes IA Punta Arenas" : "AI agents Punta Arenas",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-punta-arenas-chile` },
  }
}

export default function AgentesIAPuntaArenasPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"
  return (
    <main className="min-h-screen bg-background">
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto w-full text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground text-balance">{isES ? "Agentes de IA para Punta Arenas" : "AI Agents for Punta Arenas"}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">{isES ? "Para Punta Arenas: turismo, pesca, logística. Automatización adaptada al sur de Chile, implementación garantizada." : "For Punta Arenas: tourism, fishing, logistics. Automation adapted to southern Chile, guaranteed implementation."}</p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            {isES ? "Consultar para Punta Arenas" : "Consult for Punta Arenas"}
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
