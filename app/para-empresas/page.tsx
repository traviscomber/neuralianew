import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { SectionBackground } from "@/components/section-background"

export const metadata: Metadata = {
  title: "N3uralia para Empresas | Agentes IA Production-Ready",
  description:
    "N3uralia ofrece soluciones de IA escalables para empresas medianas y grandes. Automatización empresarial, coordinación de sistemas complejos, y agentes inteligentes que funcionan en producción hoy.",
  keywords:
    "IA para empresas, automatización empresarial, agentes IA producción, soluciones IA escalables, N3uralia empresas, transformación digital IA",
}

export default function ParaEmpresas() {
  return (
    <main className="min-h-screen pt-16 bg-background">
      <SectionBackground section="capabilities" className="border-b border-border">
      {/* Hero */}
      <section className="py-20 bg-background border-b border-border px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="h1-light mb-6 text-foreground">
            IA que Escala con Tu Empresa
          </h1>
          <p className="body-lg text-muted-foreground mb-4">
            N3uralia construye sistemas de IA production-ready diseñados para empresas que necesitan automatización inteligente, coordinación de procesos complejos y transformación digital que realmente funciona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Agendar Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/outcomes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>
      </SectionBackground>

      <SectionBackground section="solutions">
      {/* Why N3uralia */}
      <section className="py-24 bg-background border-b border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="h2 text-foreground mb-12 text-center">¿Por qué N3uralia para Empresas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex gap-4 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Production-Ready desde Día 1</h3>
                  <p className="text-sm text-muted-foreground">No experimentamos. Construimos sistemas que funcionan en producción con SLAs garantizados.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Escalabilidad Integrada</h3>
                  <p className="text-sm text-muted-foreground">Arquitectura diseñada para crecer con tu empresa. Desde millones hasta miles de millones de transacciones.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Seguridad y Compliance</h3>
                  <p className="text-sm text-muted-foreground">Cumplimos normativas empresariales. Encryption, auditoría completa, y control de acceso granular.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">ROI Comprobado</h3>
                  <p className="text-sm text-muted-foreground">Reducción de costos operacionales del 40-60%. Nuestros clientes ven ROI en 6 meses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-background border-b border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="h2 text-foreground mb-12 text-center">Casos de Uso Empresariales</h2>
          <div className="space-y-6">
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Automatización de Procesos RPA</h3>
              <p className="text-sm text-muted-foreground">Agentes inteligentes que automatizan tareas repetitivas en ventas, finanzas, y recursos humanos. Más que RPA: sistemas que aprenden.</p>
            </div>
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Coordinación Multi-Departamental</h3>
              <p className="text-sm text-muted-foreground">Sistemas que coordinan agentes en diferentes departamentos. Desde supply chain hasta customer success, todo integrado.</p>
            </div>
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Análisis y Toma de Decisiones</h3>
              <p className="text-sm text-muted-foreground">Agentes que analizan datos en tiempo real y recomiendan decisiones. Inteligencia empresarial que actúa.</p>
            </div>
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Atención al Cliente Inteligente</h3>
              <p className="text-sm text-muted-foreground">Agentes que entienden contexto completo de clientes y resuelven problemas complejos. No simples chatbots.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background border-t border-border px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="h2 text-foreground mb-4">¿Listo para transformar tu empresa?</h2>
          <p className="body text-muted-foreground mb-8">
            Hablemos sobre cómo N3uralia puede automatizar tus procesos, reducir costos y acelerar tu transformación digital.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contactar N3uralia
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
