import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { CASE_STUDIES } from "@/content/caseStudies"
import { Footer } from "@/components/layout/footer"
import { CaseStudyCard } from "@/components/CaseStudyCard"
import { generatePageMetadata } from "@/lib/metadata-utils"

interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return generatePageMetadata({
    title: isES ? "Casos de Éxito - IA y Automatización en Chile | N3uralia" : "Case Studies - AI & Automation in Chile | N3uralia",
    description: isES
      ? "5 casos reales de empresas chilenas que implementaron agentes IA: 70% reducción de costos, 300% ROI. Minería, retail, logística, manufactura, turismo. Resultados medibles."
      : "5 real cases of Chilean companies implementing AI agents: 70% cost reduction, 300% ROI. Mining, retail, logistics, manufacturing, tourism. Measurable results.",
    keywords: isES
      ? "casos de éxito IA Chile, empresas agentes IA, ROI automatización, proyectos IA"
      : "AI success cases Chile, AI agents companies, automation ROI",
    canonical: `https://n3uralia.com/${locale}/case-studies`,
    locale,
  })
}

export default function CaseStudiesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const d = getDict(locale)
  const isES = locale === "es"

  return (
    <>
      <main className="min-h-screen pt-24">
        {/* Enhanced Hero Section */}
        <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16">
          <div className="max-w-5xl mx-auto w-full text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">{isES ? "Casos de Éxito" : "Success Stories"}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance text-foreground">
              {isES ? "Resultados medibles en operación real" : "Measurable results in real operations"}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {isES 
                ? "Empresas chilenas transformadas. De problemas operacionales a soluciones escalables. Cada proyecto, un resultado medible." 
                : "Chilean companies transformed. From operational challenges to scalable solutions. Every project, a measurable result."}
            </p>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="p-6 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">-40%</p>
                <p className="text-sm text-muted-foreground">{isES ? "Costo Operacional" : "Operating Costs"}</p>
              </div>
              <div className="p-6 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">4h→15m</p>
                <p className="text-sm text-muted-foreground">{isES ? "Tiempo Respuesta" : "Response Time"}</p>
              </div>
              <div className="p-6 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">{isES ? "Sin Interrupciones" : "Zero Downtime"}</p>
              </div>
              <div className="p-6 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">300%</p>
                <p className="text-sm text-muted-foreground">ROI</p>
              </div>
            </div>

            {/* CTA */}
            <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
              {isES ? "Iniciar proyecto" : "Start project"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Case Studies Grid Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto w-full">
            {/* Section Header */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {isES ? "Proyectos Destacados" : "Featured Projects"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {isES 
                  ? "Descubre cómo transformamos empresas chilenas con agentes IA" 
                  : "Discover how we transformed Chilean companies with AI agents"}
              </p>
            </div>

            {/* Case Study Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CASE_STUDIES.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} locale={locale} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-primary/5 border-t border-primary/20">
          <div className="max-w-4xl mx-auto w-full text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {isES ? "¿Tu empresa es la próxima?" : "Could your company be next?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {isES 
                ? "Convierte tus desafíos operacionales en oportunidades de crecimiento con agentes IA." 
                : "Transform your operational challenges into growth opportunities with AI agents."}
            </p>
            <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
              {isES ? "Agendar consulta" : "Schedule consultation"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
