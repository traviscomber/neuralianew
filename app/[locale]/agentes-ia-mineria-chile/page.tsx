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
    title: isES ? "Agentes de IA para Minería en Chile | Casos de Éxito" : "AI Agents for Mining in Chile | Success Cases",
    description: isES ? "Automatización inteligente para minería chilena. Optimización de procesos, predicción de fallos, análisis de datos en tiempo real. ROI garantizado." : "Intelligent automation for Chilean mining. Process optimization, predictive maintenance, real-time data analysis. Guaranteed ROI.",
    keywords: isES ? "agentes IA minería, automatización minería Chile, IA en minería" : "AI agents mining, mining automation Chile",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-mineria-chile` },
  }
}

export default function AgentesIAMineriaPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 bg-background relative overflow-hidden pt-32">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            {isES ? "Automatización con IA para Minería en Chile" : "AI Automation for Mining in Chile"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            {isES ? "Agentes inteligentes para procesos críticos en minería: optimización de operaciones, predicción de fallos, análisis de datos en tiempo real. Implementación 6-8 semanas." : "Intelligent agents for critical mining processes: operation optimization, failure prediction, real-time data analysis. 6-8 weeks implementation."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Consultar solución minería" : "Consult mining solution"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Soluciones para minería" : "Solutions for mining"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titleES: "Optimización de Operaciones", titleEN: "Operations Optimization", descES: "Análisis en tiempo real, predicción de producción, detección de anomalías" },
              { titleES: "Predictive Maintenance", titleEN: "Predictive Maintenance", descES: "Predicción de fallos, programación de mantención, reducción de downtime" },
              { titleES: "Gestión de Seguridad", titleEN: "Safety Management", descES: "Monitoreo de seguridad, alertas de riesgos, compliance automático" },
              { titleES: "Análisis de Datos", titleEN: "Data Analysis", descES: "Procesamiento de millones de datos, insights accionables, reportes automáticos" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-bold mb-2">{isES ? item.titleES : item.titleEN}</h3>
                <p className="text-sm text-muted-foreground">{item.descES}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{isES ? "ROI en minería" : "ROI in mining"}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: "30%", descES: "Reducción costos operativos", descEN: "Operational cost reduction" },
              { metric: "50%", descES: "Menos downtime", descEN: "Less downtime" },
              { metric: "300%", descES: "ROI anual", descEN: "Annual ROI" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-muted/50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                <p className="text-sm text-muted-foreground">{isES ? item.descES : item.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">{isES ? "¿Listo para transformar tu minería?" : "Ready to transform your mining?"}</h2>
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
