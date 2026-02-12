import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { methodologySteps } from "@/app/constants/content"

export const metadata: Metadata = {
  title: "Cómo Trabajamos - N3uralia | 5 Pasos hacia Inteligencia Aumentada",
  description:
    "Descubre el enfoque de 5 pasos de N3uralia: desde estrategia y arquitectura hasta operación y evolución. Ingeniería rigurosa en cada fase.",
  keywords:
    "metodología N3uralia, cómo trabajamos, arquitectura IA, sistemas agenticos, fases implementación",
}

export default function ComoTrabajamosPage() {
  const services = [
    "Arquitectura de Software Agentica",
    "Sistemas Multi-Agente en Producción",
    "Automatización de Procesos Empresariales",
    "Integración de Datos y Pipelines",
    "Infraestructura Cloud Escalable",
    "Living Agents (Agentes Inteligentes Vivos)",
    "Operación y Monitoreo 24/7",
  ]

  const timeline = [
    { phase: "Fase 1-2", duration: "Semanas 1-4", focus: "Estrategia & Desarrollo" },
    { phase: "Fase 3", duration: "Semana 5-6", focus: "Infraestructura" },
    { phase: "Fase 4", duration: "Semana 7-10", focus: "Validación & Testing" },
    { phase: "Fase 5+", duration: "Ongoing", focus: "Operación & Evolución" },
  ]

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Metodología</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight text-balance">
            Nuestro Enfoque en 5 Pasos
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cinco fases claras desde estrategia hasta operación sostenible. Cada fase con métricas definidas, comunicación transparente y control riguroso.
          </p>
        </div>
      </section>

      {/* The 5 Steps - Detailed */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {methodologySteps.map((step, i) => (
              <div key={i} className="border border-border rounded-lg p-8 bg-card hover:border-primary/30 transition-colors">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary text-primary-foreground text-2xl font-bold">
                      {step.num}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="body text-muted-foreground mb-6 leading-relaxed">
                      {step.fullDesc}
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, j) => (
                        <div key={j} className="flex gap-2 items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline View */}
      <section className="py-24 bg-muted/30 border-t border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Timeline Típico</h2>
            <p className="body text-muted-foreground max-w-2xl mx-auto">
              La duración depende de la complejidad, pero aquí está el patrón típico:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timeline.map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-6 bg-background">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.phase}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.duration}</p>
                    <p className="text-sm text-primary font-medium">{item.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Servicios Incluidos</h2>
          <p className="body text-muted-foreground max-w-2xl mx-auto text-center mb-12">
            Cada proyecto incluye la suite completa de servicios. No hay costos ocultos ni servicios adicionales sorpresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment & Guarantees */}
      <section className="py-24 bg-muted/30 border-t border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestro Compromiso</h2>
            <p className="body text-muted-foreground">
              No es solo una metodología. Es un compromiso con tu éxito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparencia Total",
                description: "Comunicación semanal, reportes detallados, acceso completo a código y documentación.",
              },
              {
                title: "Responsabilidad Compartida",
                description: "Tus equipos están involucrados desde el día 1. Knowledge transfer es parte integral del proceso.",
              },
              {
                title: "Resultados Medibles",
                description: "Métricas claras antes, durante y después. Si no funciona, evolucionamos hasta que funcione.",
              },
              {
                title: "Soporte Ongoing",
                description: "Después del handoff, continuamos optimizando y evolucionando el sistema según resultados reales.",
              },
              {
                title: "Escalabilidad Garantizada",
                description: "Arquitectura diseñada para crecer. Desde MVP hasta sistemas de nivel empresarial.",
              },
              {
                title: "Seguridad por Diseño",
                description: "Compliance, encryption, auditoría completa. Seguridad no es un add-on, es el cimiento.",
              },
            ].map((commitment, i) => (
              <div key={i} className="border border-border rounded-lg p-6 bg-card">
                <h3 className="font-semibold text-foreground mb-2">{commitment.title}</h3>
                <p className="text-sm text-muted-foreground">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background border-t border-border px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="body text-muted-foreground mb-10">
            El primer paso es una conversación. Sin compromisos. Solo una charla clara sobre tus objetivos y cómo podemos ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/soluciones"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
            >
              Ver Soluciones
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Agendar Llamada
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
