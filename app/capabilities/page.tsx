import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CapabilitiesPageClient } from "@/components/capabilities/capabilities-page-client"
import { SectionBackground } from "@/components/section-background"

export const metadata: Metadata = {
  title: "Capacidades Técnicas N3uralia | 6 Pilares de Sistemas Agenticos",
  description:
    "Descubre los 6 pilares técnicos de N3uralia: orquestación multiagente, memoria persistente, integración de herramientas, ciclos de retroalimentación, trazabilidad y gobernanza. Arquitectura lista para producción.",
  keywords:
    "capacidades sistemas agenticos, 6 pilares agenticos, orquestación multiagente, memoria persistente, agentes inteligentes, integración herramientas, gobernanza IA, arquitectura agentica, n3uralia",
  alternates: {
    canonical: "https://n3uralia.com/capabilities",
  },
}

export default function CapabilitiesPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 border-b border-border px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="h1-light mb-4">Capacidades Técnicas</h1>
            <p className="body-lg text-muted-foreground">
              Arquitectura modular, agnóstica y escalable diseñada para sistemas inteligentes en producción.
            </p>
          </div>
        </section>

        {/* Tab Navigation - Sticky */}
        <section className="sticky top-0 bg-background border-b border-border z-40">
          <div className="max-w-6xl mx-auto px-4 py-0">
            <div className="flex gap-8 overflow-x-auto">
              <a href="#pilares" className="px-0 py-4 text-sm font-medium text-primary border-b-2 border-primary whitespace-nowrap">
                6 Pilares
              </a>
              <a href="#living-agents" className="px-0 py-4 text-sm text-muted-foreground hover:text-foreground border-b-2 border-transparent hover:border-primary/30 whitespace-nowrap transition-colors">
                Living Agents
              </a>
              <a href="#conversational" className="px-0 py-4 text-sm text-muted-foreground hover:text-foreground border-b-2 border-transparent hover:border-primary/30 whitespace-nowrap transition-colors">
                Conversational Intelligence
              </a>
              <a href="#produccion" className="px-0 py-4 text-sm text-muted-foreground hover:text-foreground border-b-2 border-transparent hover:border-primary/30 whitespace-nowrap transition-colors">
                En Producción
              </a>
            </div>
          </div>
        </section>

        <CapabilitiesPageClient />
      </main>
    </>
  )
}
