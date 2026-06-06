import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart3, Zap, Clock, MapPin } from "lucide-react"
import { Footer } from "@/components/layout/footer"
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
    path: "/case-studies/ecosuelolab",
    type: "article",
    title:
      locale === "es"
        ? "Caso Ecosuelolab | N3uralia"
        : "Ecosuelolab case study | N3uralia",
    description:
      locale === "es"
        ? "Como Ecosuelolab automatizo monitoreo de suelo en tiempo real con IrriWatch, agentes de IA y WhatsApp en una operacion 24/7."
        : "How Ecosuelolab automated real-time soil monitoring with IrriWatch, AI agents, and WhatsApp in a 24/7 operational flow.",
  })
}

export default function EcosuelolabCaseStudy() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                Agricultura + IA
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Monitoreo de Suelo Inteligente
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ecosuelolab transformó alertas satelitales en decisiones automáticas. IrriWatch + Agentes IA N3uralia = monitoreo 24/7 sin intervención manual.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Industria</p>
                <p className="font-semibold text-foreground">Agricultura</p>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Implementación</p>
                <p className="font-semibold text-foreground">14 días</p>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Estado</p>
                <p className="font-semibold text-foreground">100% Automático</p>
              </div>
            </div>

            <Link
              href="/en/case-studies"
              className="text-primary hover:underline font-semibold flex items-center gap-2"
            >
              ← Volver a Case Studies
            </Link>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">El Desafío</h2>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ecosuelolab recibe alertas diarias de IrriWatch (Hydrosat): datos satelitales de estrés hídrico, humedad de suelo, recomendaciones de riego. El problema: estas alertas llegaban dispersas, sin automatización, requiriendo validación y enrutamiento manual.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-card border border-border rounded-lg">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Tiempo Manual</h3>
                  <p className="text-muted-foreground text-sm">
                    Procesar, validar y rutear alertas manualmente era ineficiente
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Oportunidad Perdida</h3>
                  <p className="text-muted-foreground text-sm">
                    Alertas llegaban tarde o incompletas. Decisiones retrasadas = daño agrícola
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-4 bg-muted/30 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">La Solución</h2>

            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                N3uralia construyó una infraestructura de integración para conectar IrriWatch → Agentes IA → WhatsApp. Cada alerta se procesa automáticamente: validación, normalización, decisión, acción.
              </p>

              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <h3 className="font-semibold text-foreground mb-6">Flujo Técnico</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">1</span>
                    <div>
                      <p className="font-semibold text-foreground">Alerta IrriWatch</p>
                      <p className="text-sm text-muted-foreground">Webhook/API recibe datos satelitales (estrés hídrico, humedad, planner riego)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">2</span>
                    <div>
                      <p className="font-semibold text-foreground">Normalización + Intent Detection</p>
                      <p className="text-sm text-muted-foreground">Agente IA N3uralia entiende: ¿es crítico? ¿requiere riego inmediato? ¿informativo?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">3</span>
                    <div>
                      <p className="font-semibold text-foreground">Decisión + Enrutamiento</p>
                      <p className="text-sm text-muted-foreground">Basado en reglas + contexto histórico: ¿a quién notificar? ¿qué acción recomendar?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">4</span>
                    <div>
                      <p className="font-semibold text-foreground">Entrega WhatsApp + Twilio</p>
                      <p className="text-sm text-muted-foreground">Mensaje automático a agricultores con recomendación accionable</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">5</span>
                    <div>
                      <p className="font-semibold text-foreground">Feedback Loop</p>
                      <p className="text-sm text-muted-foreground">Cada acción registrada. Agente aprende qué recomendaciones funcionan mejor</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-primary/50 rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-2">Stack Técnico</p>
                <p className="font-mono text-sm text-foreground">
                  IrriWatch API → N3uralia Orchestration → Intent Detection → Twilio WhatsApp API → 24/7 Automático
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Impacto</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Automatización</p>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground mt-2">Cero intervención manual en alerts</p>
              </div>
              <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Velocidad</p>
                <p className="text-2xl font-bold text-foreground">Segundos</p>
                <p className="text-xs text-muted-foreground mt-2">De alerta a acción: latencia mínima</p>
              </div>
              <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Disponibilidad</p>
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-xs text-muted-foreground mt-2">Monitoreo sin pausas</p>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="font-semibold text-foreground mb-4">Resultados Cualitativos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground">Decisiones más rápidas: recomendaciones de riego llegan en segundos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground">Escalabilidad: N campos, misma infraestructura, mismo costo operativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground">Consistencia: ninguna alerta se pierde, todas se procesan igual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground">Base para inteligencia: data histórica → aprendizaje → mejora continua</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Lecciones Clave</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">1. Infraestructura de Integración es Core</h3>
                <p className="text-muted-foreground">
                  El valor no está en los datos satelitales (IrriWatch es excelente). Está en conectar esos datos a **acciones reales**. N3uralia fue el glue que transformó información en operaciones.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">2. Normalización es Crítica</h3>
                <p className="text-muted-foreground">
                  Cada API tiene su propio formato. El agente IA debe entender contexto, validar datos, y tomar decisiones consistentes. No es un simple pass-through.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">3. Canales de Comunicación Importan</h3>
                <p className="text-muted-foreground">
                  WhatsApp fue elegido porque los agricultores ya lo usan. La mejor solución técnica fracasa si el canal no funciona. N3uralia se adaptó al usuario, no al revés.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">4. Feedback Loop = Mejora Continua</h3>
                <p className="text-muted-foreground">
                  Cada alerta, cada acción, cada resultado se registra. Con el tiempo, el agente aprende qué recomendaciones funcionan mejor. Hoy es living agent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-16 px-4 bg-muted/30 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Especificaciones Técnicas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-4">Componentes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ IrriWatch API (webhook receiver)</li>
                  <li>✓ N3uralia Orchestration Layer</li>
                  <li>✓ Intent Detection Agent</li>
                  <li>✓ Twilio WhatsApp Integration</li>
                  <li>✓ Data Store (audit trail)</li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-4">SLAs</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Latencia E2E: &lt;5 segundos</li>
                  <li>✓ Disponibilidad: 99.9%</li>
                  <li>✓ Throttling: N alertas/min (configurable)</li>
                  <li>✓ Retry logic: exponential backoff</li>
                  <li>✓ Observabilidad: 100% tracing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">¿Tienes un desafío similar?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Integraciones complejas, datos dispersos, necesidad de automatizar decisiones. Hablemos sobre cómo N3uralia puede ayudar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Contactar <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/en/capabilities#conversational"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Ver Capabilities
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
