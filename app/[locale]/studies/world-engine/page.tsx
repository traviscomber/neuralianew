import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: "/studies/world-engine",
    type: "article",
    title: "What is World Engine? | N3uralia Studies",
    description: "World Engine is a system that builds and maintains dynamic models of real environments to enable intelligent agents to make contextual decisions with understanding of the full operating ecosystem.",
  })
}

export default function WorldEnginePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Link href={`/${locale}/studies`} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Volver a Estudios
          </Link>
          <span className="inline-block text-xs font-medium text-primary uppercase tracking-wide mb-4 bg-primary/10 px-3 py-1 rounded-full">
            Concepto Fundamental
          </span>
          <h1 className="h1-light mb-6 text-foreground">World Engine</h1>
          <p className="body-lg text-muted-foreground">
            Sistema que construye y mantiene modelos dinámicos del entorno real, permitiendo a agentes inteligentes tomar
            decisiones contextuales con comprensión profunda del ecosistema operativo.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert max-w-none">
          <div className="p-8 border border-primary/30 bg-primary/5 rounded-lg mb-12">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Definición</h2>
            <p className="text-lg text-foreground leading-relaxed">
              World Engine es una arquitectura que construye modelos dinámicos y actualizados del entorno real donde
              operan los sistemas. Mantiene simulaciones vivas del contexto operativo, permitiendo que agentes tomen
              decisiones no solo basadas en datos, sino en comprensión sistémica.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Por Qué Importa</h2>
            <div className="space-y-4 text-muted-foreground body">
              <p>
                Un agente que conoce datos pero no el sistema es como un cirujano con acceso a análisis de sangre pero sin
                entender anatomía.
              </p>
              <p>
                World Engine es lo que permite verdadera comprensión. Un sistema que modela cómo tu industria funciona, qué
                se afecta cuando cambias X, cuáles son las cascadas de impacto.
              </p>
              <p>
                Ejemplo: En agricultura, World Engine mantiene un modelo del ciclo de cultivos, interacciones químicas,
                impacto climático y ciclos de cosecha. Esto permite recomendaciones que tienen en cuenta toda la complejidad,
                no solo NPK del suelo.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Los 4 Componentes</h2>
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="h3 text-primary font-semibold mb-2">1. Modelado del Entorno</h3>
                <p className="text-muted-foreground body">Construcción de representaciones digitales del entorno donde opera el sistema.</p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="h3 text-primary font-semibold mb-2">2. Actualización Dinámica</h3>
                <p className="text-muted-foreground body">Cambios en tiempo real. El modelo evoluciona con cada evento, retroalimentación y cambio en el mundo real.</p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="h3 text-primary font-semibold mb-2">3. Simulación de Impacto</h3>
                <p className="text-muted-foreground body">Antes de actuar, el sistema simula las consecuencias de una decisión en el modelo.</p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="h3 text-primary font-semibold mb-2">4. Validación Sistémica</h3>
                <p className="text-muted-foreground body">Verifica que las acciones propuestas son coherentes con las leyes del sistema modelado.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Aplicaciones Reales</h2>
            <div className="space-y-4">
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Blackswan Facility Core</h3>
                <p className="text-muted-foreground body">Modela campos productivos: ciclos de cultivo, recursos disponibles, restricciones climáticas, mercados. Cada recomendación respeta las limitaciones sistémicas del campo.</p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Mermasapp</h3>
                <p className="text-muted-foreground body">Modela líneas de producción: interdependencias de procesos, impacto de variables de control, restricciones operacionales. Simula cambios antes de recomendarlos.</p>
              </div>
            </div>
          </div>

          <div className="mb-16 p-8 border border-primary/20 bg-primary/5 rounded-lg">
            <h2 className="h3 text-foreground mb-4">Conceptos Relacionados</h2>
            <div className="space-y-3">
              <Link href={`/${locale}/studies/agentic-ai`} className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">Agentic AI</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link href={`/${locale}/studies/ai-memory`} className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">AI Memory</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link href={`/${locale}/studies/context-engineering`} className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">Context Engineering</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>

          <div className="p-8 border border-border rounded-lg bg-card">
            <h3 className="h3 text-foreground mb-3">World Engine en N3uralia</h3>
            <p className="text-muted-foreground body mb-6">
              Cada solución de N3uralia implementa World Engine para entender tu ecosistema operativo antes de actuar.
            </p>
            <Link href={`/${locale}/capabilities`} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Ver Capacidades
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
