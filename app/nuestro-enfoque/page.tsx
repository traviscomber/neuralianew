import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Nuestro Enfoque - N3uralia | 5 Pasos hacia Inteligencia Aumentada",
  description:
    "Descubre el enfoque de 5 pasos de N3uralia: desde estrategia y arquitectura hasta operación y evolución. Ingeniería rigurosa en cada fase.",
  keywords:
    "enfoque N3uralia, metodología, arquitectura IA, sistemas agenticos, fases implementación",
}

export default function EnfoquePage() {
  const steps = [
    {
      number: "01",
      title: "Estrategia & Arquitectura",
      description:
        "Entendemos profundamente tu problema. Analizamos contexto, objetivos y restricciones. Diseñamos la solución a nivel de sistemas—qué agentes necesitas, cómo coordinan, qué datos fluyen.",
      details: [
        "Análisis de procesos actuales",
        "Diseño de arquitectura multi-agente",
        "Definición de APIs y contratos",
        "Mapeo de dependencias y riesgos",
      ],
    },
    {
      number: "02",
      title: "Desarrollo e Integración",
      description:
        "Construimos sobre lo que ya funciona. Integración limpia con sistemas legacy. Desarrollo iterativo con feedback temprano. Documentación exhaustiva en cada fase.",
      details: [
        "Desarrollo de Living Agents especializados",
        "Integración con sistemas existentes",
        "Testing y validación incremental",
        "Documentación técnica exhaustiva",
      ],
    },
    {
      number: "03",
      title: "Infraestructura Cloud",
      description:
        "No solo código—también el lugar donde vive. Setup cloud completo, security by design, autoscaling, monitoring. Everything production-ready desde el primer deploy.",
      details: [
        "Infraestructura cloud escalable",
        "Seguridad y compliance",
        "Monitoreo y logging centralizado",
        "Disaster recovery y backup",
      ],
    },
    {
      number: "04",
      title: "Validación & Pruebas",
      description:
        "Testing en producción. Métricas claras sobre qué funciona y qué no. A/B testing para decisiones de agentes. Evolución guiada por datos reales.",
      details: [
        "Testing en entorno real",
        "Métricas de impacto definidas",
        "A/B testing de agentes",
        "Retroalimentación estructurada",
      ],
    },
    {
      number: "05",
      title: "Operación & Evolución",
      description:
        "Tu equipo opera. Nosotros evolucionamos el sistema según resultados. Living Agents aprenden. Documentación se actualiza. El sistema crece con tu organización.",
      details: [
        "Handoff a tu equipo de ops",
        "Training y documentación",
        "Evolución continua de agentes",
        "Soporte y optimización ongoing",
      ],
    },
  ]

  const services = [
    "Arquitectura de Software Agentica",
    "Sistemas Multi-Agente en Producción",
    "Automatización de Procesos Empresariales",
    "Integración de Datos y Pipelines",
    "Infraestructura Cloud Escalable",
    "Living Agents (Agentes Inteligentes Vivos)",
    "Operación y Monitoreo 24/7",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Metodología</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight text-balance">
            Nuestro Enfoque en 5 Pasos
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Desde estrategia hasta operación. Cada fase con métricas definidas, comunicación transparente y evolución continua. Esto es cómo construimos sistemas agenticos reales.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {steps.map((step, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`md:order-${i % 2 === 1 ? '2' : '1'}`}>
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">{step.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{step.description}</p>

                  <div className="space-y-3">
                    {step.details.map((detail, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`rounded-lg border border-border bg-muted/30 p-8 ${i % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-primary uppercase">Entregables Clave</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ Documentación técnica</li>
                      <li>✓ Código production-ready</li>
                      <li>✓ Métricas y KPIs</li>
                      <li>✓ Plan de evolución</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline visual */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">El Viaje Completo</h2>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/20" />

            {/* Timeline items */}
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="flex gap-8 items-center">
                    <div className="hidden md:flex flex-col items-center flex-1">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10 relative bg-gradient-to-br from-primary to-primary/80">
                        {step.number}
                      </div>
                    </div>

                    <div className="flex-1 md:flex-1">
                      <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services offered */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Lo Que Hacemos</h2>
          <p className="text-center text-muted-foreground mb-12">
            Expertise integrado a lo largo de todas las fases. No servicios siloed.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-card hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Empezar?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Cuéntanos sobre tu proyecto. Analizaremos qué necesitas y crearemos un plan personalizado.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contactar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
