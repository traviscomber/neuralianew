import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { methodologySteps } from "@/app/constants/content"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  const canonical = `https://n3uralia.com/${locale}/como-trabajamos`

  return {
    title: "Metodología N3uralia | 5 Fases para Implementar Sistemas Agenticos en Producción",
    description:
      "Cómo N3uralia implementa sistemas agenticos. 5 fases: descubrimiento, diseño arquitectónico, implementación, go-live y optimización continua. Metodología probada para desplegar agentes en producción con gobernanza, memoria persistente y escalabilidad.",
    keywords:
      "metodología implementación, sistemas agenticos producción, cómo trabajamos, fases implementación, arquitectura IA, agentes inteligentes, AI agents, go-live, infraestructura cloud, LATAM, Chile",
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
      type: 'website',
    },
  }
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
    <>
      <main className="min-h-screen bg-background pt-20">

      {/* Timeline View */}
      <section className="py-24 bg-background border-t border-border px-4">
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




      </main>
      <Footer />
    </>
  )
}
