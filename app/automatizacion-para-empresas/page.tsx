import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3, Clock } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: "Automatización Empresarial N3uralia | Integración de Sistemas & Procesos Inteligentes",
  description:
    "Automatización estructural para empresas: conecta sistemas legacy, elimina trabajo manual repetitivo, y escala operaciones sin contratar. ROI comprobado en 6 meses. Para B2B, retail, manufactura, seguros en Chile y LATAM.",
  keywords:
    "automatización empresarial, automatización procesos, integración sistemas legacy, workflow empresarial, reducir costos operacionales, automatización B2B, operaciones autónomas, RPA, automation Chile, sistemas inteligentes, automatización LATAM",
  alternates: {
    canonical: "https://n3uralia.com/automatizacion-para-empresas",
  },
}

export default function AutomatizacionPage() {
  return (
    <>
      <SectionBackground section="solutions">
        <main className="min-h-screen bg-background">
          {/* Hero */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Solución Production-Ready</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                Automatización Estructural para Empresas
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                No más workflows aislados. Conecta tus sistemas legacy, automatiza procesos repetitivos, y crea operaciones que funcionan 24/7 sin intervención manual. Payback en 6 meses.
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
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Ver Casos Reales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* El Problema */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-foreground">El Problema Real</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Las empresas pierden millones en procesos manuales que deberían estar automatizados.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Sistemas Desconectados",
                    desc: "El ERP no habla con Salesforce, que no habla con tu sistema de facturación. Los datos se entran manual en 3 sistemas.",
                  },
                  {
                    title: "Trabajo Repetitivo Manual",
                    desc: "Horas diarias en tareas que podría hacer un script: validar datos, enviar emails, actualizar estados, generar reportes.",
                  },
                  {
                    title: "Equipo Agotado",
                    desc: "Tu mejor talento atrapado en operaciones en lugar de estrategia. El error humano causa miles de pesos en correcciones.",
                  },
                  {
                    title: "Sin Escalabilidad",
                    desc: "Cada nuevo cliente/transacción requiere más horas. No puedes crecer sin triplicar el equipo operacional.",
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
              <h2 className="text-4xl font-bold mb-4 text-foreground">La Solución: Automatización Estructural</h2>
              <p className="text-lg text-muted-foreground mb-12">
                N3uralia conecta tus sistemas existentes con inteligencia. No necesitas reemplazar nada—solo agregar orquestación inteligente.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Antes (Manual)</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Datos entrados manual en 3 sistemas</li>
                    <li>• Validación humana de excepciones</li>
                    <li>• Reportes manuales cada semana</li>
                    <li>• Errores que cuestan horas corregir</li>
                    <li>• No escala sin más personal</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Después (Automatizado)</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>✓ Datos sincronizados en tiempo real</li>
                    <li>✓ Validación automática + alerts</li>
                    <li>✓ Reportes generados automáticamente</li>
                    <li>✓ Cero errores, auditoría completa</li>
                    <li>✓ Escala a 10x sin agregar personas</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Capacidades */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Qué Automatizamos</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: BarChart3,
                    title: "Procesos Comerciales",
                    items: ["Calificación de leads", "Pipeline de ventas", "Propuestas automáticas", "Follow-ups inteligentes"],
                  },
                  {
                    icon: Clock,
                    title: "Operaciones",
                    items: ["Validación de datos", "Sincronización sistemas", "Reportes automáticos", "Alertas en tiempo real"],
                  },
                  {
                    icon: Shield,
                    title: "Compliance & Seguridad",
                    items: ["Auditoría de cambios", "Cumplimiento normativo", "Backup automático", "Encriptación end-to-end"],
                  },
                ].map((category, i) => {
                  const Icon = category.icon
                  return (
                    <div key={i} className="border border-border rounded-lg p-6 bg-card hover:border-primary/40 transition-colors">
                      <div className="flex items-start gap-4 mb-4">
                        <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <h3 className="font-bold text-foreground">{category.title}</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {category.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ROI Proof */}
          <section className="py-24 px-4 border-b border-border bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Retorno Comprobado</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                  { metric: "60-80%", desc: "Reducción trabajo manual" },
                  { metric: "6 meses", desc: "Payback de inversión" },
                  { metric: "10x", desc: "Escalabilidad sin personal" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cómo Funciona */}
          <section className="py-24 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-foreground text-center">
                Cómo Implementamos
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Auditoría de Procesos",
                    desc: "Identificamos qué está manual, cuánto cuesta, y dónde hay máximo impacto.",
                  },
                  {
                    step: "2",
                    title: "Diseño de Orquestación",
                    desc: "Conectamos tus sistemas existentes con lógica inteligente (sin reemplazarlos).",
                  },
                  {
                    step: "3",
                    title: "Implementación & Testing",
                    desc: "Desplegamos en producción con auditoría completa y rollback si necesario.",
                  },
                  {
                    step: "4",
                    title: "Medición & Optimización",
                    desc: "Reportes mensuales de ROI, mejoras continuas, escalada según demanda.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 border border-border rounded-lg p-6 bg-card hover:border-primary/40 transition-colors">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="rounded-lg bg-muted/50 p-12 border border-border">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  ¿Listo para Automatizar?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Comienza con una auditoría gratuita. En 1 semana te mostramos el plan de automatización y proyectamos ROI.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Agendar Auditoría Gratuita
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </SectionBackground>
      <Footer />
    </>
  )
}
