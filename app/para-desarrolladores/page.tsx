import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, Code2, Lightbulb, BookOpen } from "lucide-react"
import { SectionBackground } from "@/components/section-background"

export const metadata: Metadata = {
  title: "N3uralia para Desarrolladores | API IA Production-Ready",
  description:
    "N3uralia para devs: APIs potentes, SDKs limpios, documentación excelente. Construye agentes inteligentes en producción con herramientas que realmente funcionan.",
  keywords:
    "API IA, SDK agentes IA, desarrollo IA, N3uralia API, agentes inteligentes desarrollo, AI engineering",
}

export default function ParaDesarrolladores() {
  return (
    <main className="min-h-screen pt-16 bg-background">
      <SectionBackground section="blog" className="border-b border-border">
      {/* Hero */}
      <section className="py-20 bg-background border-b border-border px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="h1-light mb-6 text-foreground">
            APIs para Construir Agentes Reales
          </h1>
          <p className="body-lg text-muted-foreground mb-4">
            N3uralia ofrece APIs limpias, SDKs en múltiples lenguajes, y documentación completa. Construye agentes inteligentes, sistemas multi-agente, y arquitecturas complejas sin las fricciones típicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Solicitar Acceso a APIs
              <Code2 className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/n3uralia"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              GitHub Repo
            </Link>
          </div>
        </div>
      </section>
      </SectionBackground>

      <SectionBackground section="capabilities">
      {/* Developer Experience */}
      <section className="py-24 bg-background border-b border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="h2 text-foreground mb-12 text-center">Developer Experience First</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <Code2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">APIs REST Simples</h3>
                <p className="text-sm text-muted-foreground">Sin abstracciones innecesarias. Endpoints intuitivos. Respuestas JSON claras. Errores descriptivos.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Lightbulb className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">SDKs en TypeScript, Python, Go</h3>
                <p className="text-sm text-muted-foreground">Type-safe, auto-complete, cero surpresas en runtime. Desarrollar es rápido.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Documentación Completa + Ejemplos</h3>
                <p className="text-sm text-muted-foreground">Guías paso a paso. Ejemplos reales. Problemas comunes resueltos. Community activa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases for Devs */}
      <section className="py-24 bg-background border-b border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="h2 text-foreground mb-12 text-center">Lo que Puedes Construir</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Agentes de Tarea Única</h3>
              <p className="text-sm text-muted-foreground">Agentes especializados en tareas específicas. API simple para crear, entrenar, y ejecutar.</p>
            </div>
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Sistemas Multi-Agente</h3>
              <p className="text-sm text-muted-foreground">Agentes que coordinan entre sí. Orquestación automática. Resolución de conflictos.</p>
            </div>
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Living Agents</h3>
              <p className="text-sm text-muted-foreground">Agentes que evolucionan y aprenden. Personalidad emergente. Sistemas conscientes.</p>
            </div>
            <div className="border border-border p-8 rounded-lg bg-card hover:border-primary/40 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Pipelines Inteligentes</h3>
              <p className="text-sm text-muted-foreground">Encadena agentes. Construye workflows. Automatización inteligente end-to-end.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-24 bg-background border-b border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="h2 text-foreground mb-8 text-center">Así de Simple es Empezar</h2>
          <div className="border border-border rounded-lg bg-card p-6 overflow-x-auto">
            <pre className="text-xs text-muted-foreground font-mono">
{`import { N3uralia } from '@n3uralia/sdk'

const n3 = new N3uralia({ apiKey: process.env.N3_API_KEY })

// Crear un agente
const agent = await n3.agents.create({
  name: 'El Curador',
  archetype: 'curator',
  description: 'Organiza y preserva conocimiento'
})

// Enviar mensaje
const response = await agent.chat({
  message: '¿Puedes resumir esta documentación?',
  context: { documents: [...] }
})

console.log(response.message)
// Output: "Aquí está el resumen principal..."
`}
            </pre>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background border-t border-border px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="h2 text-foreground mb-4">Empezar a Construir</h2>
          <p className="body text-muted-foreground mb-8">
            Documentación completa, ejemplos listos, y soporte de developers para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Leer Docs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Contactar Support
            </Link>
        </div>
      </section>
      </SectionBackground>

      </main>
      <Footer />
    </>
  )
}
    </>
  )
}
