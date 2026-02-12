import { ArrowRight, Lock, Zap, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Democratizando el Desarrollo de Software | N3uralia",
  description: "Buenas ideas no deberían morir por falta de capital. N3uralia Living Agents resuelve cada barrera.",
  keywords: "democratización, startup, IA, desarrollo, software",
}

export default function Democratizacion() {
  const barriers = [
    {
      problem: "Sin dinero para developers",
      solution: "Living Agents: 4 expertos 24/7 sin salario",
      icon: Users,
    },
    {
      problem: "Meses de desarrollo = tiempo perdido",
      solution: "MVP en 3-4 semanas. Ready to market.",
      icon: Zap,
    },
    {
      problem: "Sin cofundador técnico",
      solution: "El Arquitecto diseña y construye.",
      icon: Lock,
    },
    {
      problem: "Sin infraestructura operacional",
      solution: "Cloud setup, monitoreo, evolución incluida.",
      icon: TrendingUp,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Democratizando el Desarrollo</h1>
          <p className="text-xl text-muted-foreground">
            Una buena idea debe poder convertirse en una empresa exitosa, independientemente de tu acceso a capital o expertise técnico.
          </p>
        </div>
      </section>

      {/* Problem-Solution Grid */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Barreras que N3uralia Resuelve</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {barriers.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">El Problema</h3>
                  <p className="text-muted-foreground mb-6">{item.problem}</p>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-lg text-primary mb-2">La Solución</h4>
                    <p className="text-foreground">{item.solution}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 px-4 bg-muted/30 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Por Qué Esto Importa</h2>

          <div className="space-y-6 text-left">
            <div>
              <h3 className="font-bold text-lg mb-2">Status Quo es injusto</h3>
              <p className="text-muted-foreground">
                Las mejores ideas mueren porque el founder no tiene $500k para un equipo. Las mediocres son financiadas porque el founder tenía conexiones.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">La tecnología debe ser para todos</h3>
              <p className="text-muted-foreground">
                IA, cloud computing, desarrollo no debería ser monopolio de startups bien financiadas. Una idea buena debe poder vivir.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Meritocracia real</h3>
              <p className="text-muted-foreground">
                Lo que importa es la calidad de tu idea, la necesidad del mercado y tu ejecución. No el capital inicial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Tu Idea Merece Existir</h2>
          <p className="text-muted-foreground mb-8">Tienes concepto? Tenemos el resto.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ideas-a-empresa"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Ver El Proceso
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
