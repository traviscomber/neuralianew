import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Agent Operations Platform - N3uralia",
  description: "Multi-agent infrastructure for real business operations. Execution, orchestration, and control.",
}

export default function AgentOperationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">Agent Operations Platform</h1>
          <p className="text-xl text-muted-foreground mb-8">Donde los agentes pasan de pensar a operar</p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold">
              Hablar con N3uralia
            </Link>
            <Link href="/agent-matrix" className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold">
              Ver Arquitectura
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
