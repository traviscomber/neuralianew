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
    title: isES ? "Agentes de IA para Logística en Chile | Optimización de Rutas" : "AI Agents for Logistics in Chile | Route Optimization",
    description: isES ? "Automatización para logística: optimización de rutas, predicción de entregas, gestión de flota. Reduce tiempo y costos de distribución." : "Automation for logistics: route optimization, delivery forecasting, fleet management. Reduce delivery time and costs.",
    keywords: isES ? "agentes IA logística, IA supply chain Chile, optimización rutas" : "AI agents logistics, AI supply chain Chile",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-logistica-chile` },
  }
}

export default function AgentesIALogisticaPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 bg-background relative overflow-hidden pt-32">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            {isES ? "Automatización con IA para Logística en Chile" : "AI Automation for Logistics in Chile"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            {isES ? "Optimización inteligente de rutas, predicción de entregas, gestión de flota en tiempo real. Reduce costos de distribución hasta 40%." : "Intelligent route optimization, delivery forecasting, real-time fleet management. Reduce distribution costs by up to 40%."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Consultar para logística" : "Consult for logistics"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/20">
            <h2 className="text-2xl font-bold mb-8">{isES ? "Datos Chile - Contexto de Logística" : "Chile Data - Logistics Context"}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">23.9 Mt</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Transferencia 2025" : "Transfer 2025"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "+10.5% (Puerto San Antonio)" : "+10.5% (Puerto San Antonio)"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">2.06M</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "TEU Contenedores" : "Container TEU"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "Puerto San Antonio, 2025" : "Puerto San Antonio, 2025"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">18.2 Mt</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Carga Contenedorizada" : "Containerized Cargo"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "Puerto San Antonio" : "Puerto San Antonio"}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "Dónde impacta IA en 90 días" : "Where AI impacts in 90 days"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Torre de control alertas tempranas" : "Control tower for early alerts"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Priorización despacho por SLA" : "Dispatch prioritization by SLA"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Automatización gestión documental" : "Document management automation"}
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "KPIs esperables" : "Expected KPIs"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Mayor cumplimiento OTIF" : "Higher OTIF compliance"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menor costo por orden y movimiento" : "Lower cost per order and movement"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menor tiempo resolución incidencias" : "Reduced incident resolution time"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Soluciones logísticas" : "Logistics solutions"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titleES: "Optimización de Rutas", titleEN: "Route Optimization", descES: "Algoritmos inteligentes que minimizan distancia, tiempo y combustible" },
              { titleES: "Predicción de Entregas", titleEN: "Delivery Forecasting", descES: "Estimación exacta de tiempos, alertas de retaso, notificaciones a clientes" },
              { titleES: "Gestión de Flota", titleEN: "Fleet Management", descES: "Monitoreo en tiempo real, mantenimiento predictivo, análisis de rendimiento" },
              { titleES: "Supply Chain", titleEN: "Supply Chain", descES: "Visibilidad end-to-end, predicción de demanda, optimización de inventario" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-bold mb-2">{isES ? item.titleES : item.titleEN}</h3>
                <p className="text-sm text-muted-foreground">{item.descES}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Optimiza tu logística" : "Optimize your logistics"}</h2>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Agendar consulta logística" : "Schedule logistics consultation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
