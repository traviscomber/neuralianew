import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "N3uralia para Startups | Agentes IA sin Complejidad",
  description:
    "N3uralia para startups: acceso a tecnología de IA avanzada sin la complejidad de enterprise. Automatización, agentes inteligentes, y crecimiento acelerado.",
  keywords:
    "IA para startups, agentes IA startups, automatización para startups, N3uralia startups, tech para emprendedores",
}

export default function ParaStartups() {
  return (
    <main className="min-h-screen pt-16 bg-background">
      {/* Hero */}
      <section className="py-20 bg-background border-b border-border px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="h1-light mb-6 text-foreground">
            IA que Acelera el Crecimiento
          </h1>
          <p className="body-lg text-muted-foreground mb-4">
            N3uralia te da acceso a tecnología de IA de próxima generación sin la complejidad enterprise. Automatización inteligente, agentes que trabajan 24/7, y crecimiento exponencial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Empezar Hoy
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/living-agents/demo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Probar Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Why Startups Love N3uralia */}
      <section className="py-24 bg-background border-b border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="h2 text-foreground mb-12 text-center">¿Por qué Startups Eligen N3uralia?</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <Zap className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Implementación Rápida</h3>
                <p className="text-sm text-muted-foreground">Deploy en días, no meses. Agentes listos para producción desde la semana 1.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Crecimiento sin Contratar</h3>
                <p className="text-sm text-muted-foreground">Automatiza tareas sin aumentar tu equipo. Crece 10x sin los costos de 10x.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Sin Lock-in</h3>
                <p className="text-sm text-muted-foreground">Arquitectura abierta. Tus datos son tuyos. Migraciones limpias cuando necesites escalar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Use Cases */}
      <section className="py-24 bg-background border-b border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="h2 text-foreground mb-12 text-center">Cómo Startups Usan N3uralia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Onboarding Automatizado</h3>
              <p className="text-sm text-muted-foreground">Agentes que onboardean usuarios automáticamente. Reducción del 80% en soporte manual.</p>
            </div>
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Análisis de Datos en Vivo</h3>
              <p className="text-sm text-muted-foreground">Agentes que monitorean métricas y alertan sobre anomalías. Business intelligence automático.</p>
            </div>
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Customer Success Escalado</h3>
              <p className="text-sm text-muted-foreground">Agentes que proactivamente ayudan a usuarios. Menos churn, más lifetime value.</p>
            </div>
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Generación de Leads</h3>
              <p className="text-sm text-muted-foreground">Agentes que califican leads y preparan ventas. Conversión más alta, ciclo más corto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Mindset */}
      <section className="py-24 bg-background border-b border-border px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="h2 text-foreground mb-4">Pricing para Startups</h2>
          <p className="body text-muted-foreground mb-8">
            Pagos por uso. Sin contratos anuales. Crece con nosotros—pagas solo por lo que usas.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Ver planes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background border-t border-border px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="h2 text-foreground mb-4">¿Listo para escalar?</h2>
          <p className="body text-muted-foreground mb-8">
            Únete a startups que ya están usando N3uralia para crecer sin límites.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Empezar Gratis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
