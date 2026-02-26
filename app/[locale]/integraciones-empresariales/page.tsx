import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3, Clock } from 'lucide-react'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: "Integraciones Empresariales N3uralia | Conectar Sistemas Legacy sin Disruption",
  description:
    "Conecta ERP, CRM, y sistemas heredados sin reemplazarlos. N3uralia orquesta comunicación inteligente entre plataformas antiguas y nuevas. Data flow automático, 24/7. Para banca, seguros, manufactura. Chile & LATAM.",
  keywords:
    "integración sistemas legacy, conectar ERP CRM, API integraciones, orquestación sistemas, enterprise integration, data flow automático, conectividad legacy, integraciones empresariales, Chile, LATAM",
  alternates: {
    canonical: "https://n3uralia.com/integraciones-empresariales",
  },
}

export default function IntegracionesPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
          {/* Hero */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Zero Downtime</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                Integraciones Empresariales Sin Disruption
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Tu ERP de 20 años puede hablar con Salesforce Cloud. Sin reemplazo, sin datos duplicados, sin downtime. N3uralia orquesta la comunicación inteligentemente. La data fluye 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Demo Técnica
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/automatizacion-para-empresas"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Ver Automatización
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* El Problema */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-foreground">El Desafío de Sistemas Legacy</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Las empresas modernas usan múltiples sistemas. Pero no hablan entre sí.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Silos de Datos",
                    desc: "Datos en SAP, más datos en Salesforce, más en Excel. La verdad única no existe. Análisis imposibles.",
                  },
                  {
                    title: "Reentrada Manual de Datos",
                    desc: "Un pedido entra en un sistema, alguien lo reescribe en otro. Errores garantizados. Horas wasted.",
                  },
                  {
                    title: "Riesgo de Reemplazo Costoso",
                    desc: "La solución 'fácil': reemplazar todo. Costo: millones. Riesgo: perder datos históricos. Timeline: 18+ meses.",
                  },
                  {
                    title: "Decisiones sin Contexto",
                    desc: "Reportes incompletos porque no integran todas las fuentes. El negocio opera a ciegas.",
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
              <h2 className="text-4xl font-bold mb-4 text-foreground">Integraciones que Funcionan: El Enfoque N3uralia</h2>
              <p className="text-lg text-muted-foreground mb-12">
                No remplazamos. Orquestamos. Tus sistemas viejos conviven con los nuevos, hablando inteligentemente.
              </p>

              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    icon: <Zap className="w-8 h-8 text-primary" />,
                    title: "API-First Orchestration",
                    desc: "Conectamos cualquier sistema via REST, SOAP, webhooks, o SQL directo. Si tiene interfaz, podemos hablarle.",
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8 text-primary" />,
                    title: "Data Synchronization en Tiempo Real",
                    desc: "Un cambio en SAP aparece en Salesforce en segundos. Sin batches nocturnos. Sin delays.",
                  },
                  {
                    icon: <Clock className="w-8 h-8 text-primary" />,
                    title: "Zero Downtime Deployment",
                    desc: "La integración se construye en paralelo a tus sistemas actuales. Cero disruption.",
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-primary" />,
                    title: "Seguridad Enterprise-Grade",
                    desc: "Encriptación end-to-end, audit logs completos, acceso de rol, y cumplimiento regulatorio.",
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

          {/* ROI */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-foreground text-center">ROI Real en Integraciones</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { metric: "70-80%", label: "Reducción de Reentrada Manual" },
                  { metric: "6-8 meses", label: "Payback Period" },
                  { metric: "99.9%", label: "Data Accuracy" },
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">¿Tus Sistemas Necesitan Hablar?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Conectemos una demo. Mostraremos cómo tus sistemas pueden trabajar juntos sin reemplazo.
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
