import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Gavel, Radar, AlertTriangle, Sprout, TrendingUp, Sparkles } from "lucide-react"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { enterpriseSolutions } from "@/app/constants/content"
import { SolucionesPageClient } from "@/components/soluciones/soluciones-page-client"

interface PageProps {
  params: { locale: string }
}

export const metadata: Metadata = {
  title: "Soluciones de Sistemas Agenticos | Para B2B, Turismo, Eventos, Manufactura",
  description:
    "Soluciones especializadas de sistemas agenticos para cada industria. B2B: operaciones de ingresos. Turismo: inteligencia conversacional. Eventos: automatización inmersiva. Manufactura: procesos autónomos. Listo para producción, recuperación en 6 meses.",
  keywords:
    "sistemas agenticos soluciones, B2B automatización, turismo IA, eventos inteligentes, manufactura automatizada, operaciones de ingresos, inteligencia conversacional, agentes inteligentes, n3uralia",
  alternates: {
    canonical: "https://n3uralia.com/soluciones",
  },
}

export default function SolucionesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-20 bg-background px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Soluciones</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
              {enterpriseSolutions.hero.heading}
            </h1>
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {enterpriseSolutions.hero.subheading}
            </p>
          </div>
        </section>

        {/* Segments Tabs/Cards */}
        <section className="py-24 bg-background px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterpriseSolutions.segments.map((segment, i) => (
                <div
                  key={i}
                  className="border-2 border-primary/30 rounded-lg p-8 bg-card hover:border-primary hover:bg-primary/5 transition-all"
                >
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-foreground mb-6">{segment.title}</h2>

                  {/* Pain Points */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Desafíos</h3>
                    <ul className="space-y-2">
                      {segment.painPoints.map((point, j) => (
                        <li key={j} className="flex gap-2 items-start text-sm text-muted-foreground">
                          <span className="text-primary font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Approach */}
                  <div className="mb-6 p-4 rounded-lg bg-muted/50 border border-border/50">
                    <p className="text-sm font-semibold text-foreground mb-2">Nuestro Enfoque</p>
                    <p className="text-sm text-muted-foreground">{segment.approach}</p>
                  </div>

                  {/* ROI */}
                  <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/30">
                    <p className="text-sm font-semibold text-primary mb-1">ROI Estimado</p>
                    <p className="text-sm font-bold text-primary">{segment.roi}</p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    {segment.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Each */}
        <section className="py-24 bg-muted/30 border-t border-border px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-16 text-center">
              ¿Por qué cada segmento elige N3uralia?
            </h2>

            <div className="space-y-12">
              {/* Empresas */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Empresas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Production-ready desde día 1 con SLAs garantizados",
                    "Escalabilidad integrada para millones de transacciones",
                    "Seguridad y compliance empresarial",
                    "ROI comprobado: 40-60% reducción de costos en 12 meses",
                    "Integración limpia con sistemas legacy",
                    "Equipo dedicado 24/7",
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Startups */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Startups</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Arquitectura escalable desde el inicio",
                    "Building blocks modulares, máxima flexibilidad",
                    "IA como ventaja competitiva inmediata",
                    "2x productividad sin aumentar headcount",
                    "Pricing flexible para startups",
                    "Comunidad activa y soporte rápido",
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developers */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Desarrolladores</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "SDKs robustos y bien documentados",
                    "APIs claras y predecibles",
                    "Documentación exhaustiva con ejemplos",
                    "50% menos tiempo en integración",
                    "Comunidad técnica activa",
                    "Herramientas de debugging avanzadas",
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Projects by Industry */}
        <section className="py-24 bg-background border-t border-border px-4" id="desarrollos-reales">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Desarrollos Reales en Producción
              </h2>
              <p className="text-lg text-muted-foreground">
                Casos reales de sistemas agenticos que hemos construido y están operando hoy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Abogados */}
              <div id="abogados" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Gavel className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Análisis Legal Automatizado</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Agentes que revisan contratos, identifican cláusulas riesgosas y generan reportes en segundos. Reducción 90% en tiempo de revisión.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">OCR + NLP especializado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Integración Dropbox</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Reportes automáticos</span>
                  </div>
                </div>
              </div>

              {/* Minería */}
              <div id="mineria" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Radar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Monitoreo de Operaciones Mineras</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Orquestación de sensores, predicción de fallas, optimización de turnos. 35% aumento en eficiencia operativa.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">IoT + ML predictivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Alertas en tiempo real</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Dashboard integrado</span>
                  </div>
                </div>
              </div>

              {/* Seguridad */}
              <div id="seguridad" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Detección de Fraude Inteligente</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Agentes que detectan patrones anómalos, validan transacciones y previenen fraude en tiempo real. 98% precisión.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Análisis en tiempo real</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Machine learning adaptativo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Escalable a millones</span>
                  </div>
                </div>
              </div>

              {/* Agrícola */}
              <div id="agricola" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sprout className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Automatización Agrícola (Ecosuelolab)</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Monitoreo satelital + alertas automáticas en WhatsApp. Decisiones de riego en segundos, no horas.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">APIs satelitales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Integración WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">100% automatizado</span>
                  </div>
                </div>
              </div>

              {/* Retail */}
              <div id="retail" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Personalización en Retail</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Recomendaciones en tiempo real, gestión de inventario predictiva. 45% aumento en conversión.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Comportamiento del cliente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Predicción de demanda</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Cross-selling inteligente</span>
                  </div>
                </div>
              </div>

              {/* Arte */}
              <div id="arte" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Curaduría y Análisis de Arte</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Agentes que validan autenticidad, sugieren curatoría inteligente y conectan coleccionistas con obras.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Análisis de imagen IA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Valoración automática</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Matching inteligente</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                ¿Tu industria no está aquí? Hablemos sobre tu caso específico.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Consultar Solución Personalizada
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="py-20 bg-background border-t border-border px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Cuál es tu próximo paso?
            </h2>
            <p className="body text-muted-foreground mb-10">
              Independientemente de tu segmento, el primer paso es el mismo: una conversación clara sobre tus objetivos y restricciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/learning-hub"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
              >
                Aprender más
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Agendar Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SolucionesPageClient />
    </>
  )
}
