import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Brain, Moon, BarChart3 } from 'lucide-react'
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
    path: "/operaciones-autonomas",
    title:
      locale === "es"
        ? "Operaciones autonomas 24/7 | N3uralia"
        : "Autonomous operations 24/7 | N3uralia",
    description:
      locale === "es"
        ? "Procesos autonomos para equipos que necesitan continuidad, monitoreo y ejecucion 24/7 sin depender de seguimiento manual."
        : "Autonomous processes for teams that need continuity, monitoring, and 24/7 execution without depending on manual follow-up.",
  })
}

export default function OperacionesAutonomasPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
          {/* Hero */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
                <Moon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">24/7 Operaciones</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                Operaciones Que Nunca Duermen
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Tus operaciones funcionando mientras duermes. Procesos se ejecutan, decisiones se toman, problemas se resuelven automáticamente. Solo interviene cuando es crítico.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Consulta Gratis
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/integraciones-empresariales"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Ver Integraciones
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* El Problema */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-foreground">El Costo de Operaciones Manuales</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Si tus operaciones dependen de gente, tienes problemas: turnos, fatiga, errores humanos, escalabilidad limitada.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Dependency en Personas",
                    desc: "Si tu mejor operator no viene, la operación se paraliza. No hay redundancia ni continuidad.",
                  },
                  {
                    title: "Escalabilidad Manual",
                    desc: "Cada 50% de crecimiento requiere 50% más gente. No hay economy of scale. Márgenes se erosionan.",
                  },
                  {
                    title: "Errores Nocturno",
                    desc: "Turnos nocturnos = menos focus = más errores. Problemas descubiertos a la mañana siguiente.",
                  },
                  {
                    title: "SLA Imposibles",
                    desc: "Prometer 24/7 service es mentira si dependes de gente. Alguien falla, promesa falla.",
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
              <h2 className="text-4xl font-bold mb-4 text-foreground">Operaciones Autónomas: El Cambio</h2>
              <p className="text-lg text-muted-foreground mb-12">
                N3uralia diseña procesos que se auto-ejecutan. No significa robots sin alma—significa inteligencia distribuida y resiliente.
              </p>

              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    icon: <Brain className="w-8 h-8 text-primary" />,
                    title: "Decisiones Autónomas",
                    desc: "El sistema toma 95% de decisiones sin intervención. Sólo los casos edge llegan a humanos.",
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-primary" />,
                    title: "Ejecución 24/7",
                    desc: "Procesos corren en cualquier momento. Sábados, domingos, 3 de la mañana. Sin delays.",
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8 text-primary" />,
                    title: "Escalabilidad Infinita",
                    desc: "Más transacciones = mismo costo operacional. No hay curva de personal.",
                  },
                  {
                    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
                    title: "SLA Garantizado",
                    desc: "99.9% uptime. El sistema es más confiable que cualquier turno humano.",
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

          {/* Casos de Uso */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Casos de Uso: Operaciones Autónomas</h2>

              <div className="space-y-4">
                {[
                  "Reconciliación de transacciones bancarias (24/7)",
                  "Procesamiento de órdenes de ecommerce (sin intervención)",
                  "Validación y completitud de datos (automática)",
                  "Alertas de anomalías en inventario (real-time)",
                  "Cumplimiento automático de SLAs",
                  "Escalado de recursos según demanda",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 border border-border rounded-lg bg-card">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ROI */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-foreground text-center">ROI: Operaciones Autónomas</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { metric: "80-90%", label: "Reducción de Costo Operacional" },
                  { metric: "10x", label: "Escalabilidad" },
                  { metric: "99.9%", label: "Uptime" },
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">¿Listo para Operaciones 24/7?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Conectemos una consulta. Analizaremos tus procesos y diremos dónde puedes lograr autonomía.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Consulta Gratis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </main>
      <Footer />
    </>
  )
}
