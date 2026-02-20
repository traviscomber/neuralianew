import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { enterpriseSolutions } from "@/app/constants/content"
import { SolucionesPageClient } from "@/components/soluciones/soluciones-page-client"

export const metadata: Metadata = {
  title: "Soluciones N3uralia | Sistemas Agenticos por Vertical - B2B, Turismo, Eventos, Manufactura",
  description:
    "Soluciones especializadas de sistemas agenticos para cada industria. B2B mediano con revenue operations, Turismo/Glamping con conversational AI, Eventos inmersivos, Manufactura con automatización. Architecture fullstack agnóstica con payback real en 6 meses.",
  keywords:
    "soluciones IA, sistemas agenticos, B2B mediano Chile, turismo IA, eventos IA, manufactura IA, revenue operations, conversational intelligence, agentes inteligentes, automatización empresarial, LATAM",
  alternates: {
    canonical: "https://n3uralia.com/soluciones",
  },
}

export default function SolucionesPage() {
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
