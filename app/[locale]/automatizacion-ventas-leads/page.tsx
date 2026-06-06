import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, Target } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: "/automatizacion-ventas-leads",
    title:
      locale === "es"
        ? "Automatizacion de ventas y leads | N3uralia"
        : "Sales and lead automation | N3uralia",
    description:
      locale === "es"
        ? "Automatiza lead scoring, nurturing y seguimiento comercial con workflows de revenue operations pensados para equipos B2B en Chile y LATAM."
        : "Automate lead scoring, nurturing, and pipeline follow-up with revenue workflows built for B2B teams in Chile and LATAM.",
  })
}

export default function VentasLeadsPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
          {/* Hero */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Revenue Acceleration</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                Automatización Inteligente de Ventas
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Tu equipo pierde tiempo en tareas manuales. Calificar leads, enviar follow-ups, actualizar pipeline. N3uralia lo automatiza. Tu equipo enfocado en cerrar deals, no en admin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/operaciones-autonomas"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Operaciones 24/7
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* El Problema */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-foreground">El Cuello de Botella en Ventas</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Cada día, miles de leads entran. Pero tu equipo no tiene tiempo de procesarlos inteligentemente.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Leads Perdidos",
                    desc: "Un lead de alta calidad llega hoy, pero nadie lo sigue hasta mañana. Se va a un competitor.",
                  },
                  {
                    title: "Sales Team Agotado",
                    desc: "Tu mejor vendedor usa 40% del tiempo en admin: logging de actividades, buscar next step, emails templados.",
                  },
                  {
                    title: "Pipeline Incierto",
                    desc: "No sabes cuál es tu probabilidad real de cerrar. Forecast es un guess. El CEO no confía en números.",
                  },
                  {
                    title: "Ciclo de Venta Largo",
                    desc: "Semanas entre primer contacto y first call. Por falta de follow-up automático y nurturing.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-border rounded-lg p-6 bg-card">
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* La Solución */}
          <section className="py-24 px-4 border-b border-border bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Automatización Inteligente de Revenue Ops</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Cada lead cualificado. Cada oportunidad rastreada. Cada ciclo de venta acelerado. N3uralia convierte tu CRM en un motor de revenue.
              </p>

              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    icon: <Target className="w-8 h-8 text-primary" />,
                    title: "Lead Scoring Inteligente",
                    desc: "Cada lead entra → N3uralia lo analiza vs tus criterios de MQL/SQL. Solo los hot leads llegan a sales.",
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-primary" />,
                    title: "Nurturing Automático",
                    desc: "Seguimiento automático sin que toque un vendedor: emails, SMS, content personalizados.",
                  },
                  {
                    icon: <Clock className="w-8 h-8 text-primary" />,
                    title: "Pipeline Actualizado en Tiempo Real",
                    desc: "Cada cambio en Salesforce se propaga automáticamente. Forecast confiable.",
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8 text-primary" />,
                    title: "Analytics & Predictability",
                    desc: "Predicción de cierre de deals, análisis de velocidad, identificación de deals en riesgo.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-border rounded-lg p-8 bg-card hover:border-primary/40 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Resultados */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Resultados Típicos en 3 Meses</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { metric: "+30%", label: "Conversion Rate" },
                  { metric: "-40%", label: "Sales Cycle" },
                  { metric: "+60%", label: "Productivity (ventas)" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-6 border border-border rounded-lg bg-card">
                    <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">¿Quieres Acelerar tu Revenue?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Conectemos una demo. Mostraremos cómo N3uralia optimiza tu sales machine.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Agendar Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </main>
      <Footer />
    </>
  )
}
