import type { Metadata } from "next"
import type { Locale } from "@/lib/get-locale"
import Navigation from "@/components/navigation"
import { Footer } from "@/components/Footer"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const isES = locale === "es"
  const title = isES ? "Labs | N3uralia" : "Labs | N3uralia"
  const description = isES
    ? "Laboratorio de innovación donde probamos tecnologías emergentes."
    : "Innovation lab where we test emerging technologies."

  return {
    title,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/labs`,
      languages: {
        es: `https://n3uralia.com/es/labs`,
        en: `https://n3uralia.com/en/labs`,
      },
    },
  }
}

export default function LabsPage({ params }: PageProps) {
  const locale = params.locale as Locale
  const isES = locale === "es"

  return (
    <>
      <Navigation locale={locale} />
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              {isES ? "Laboratorio N3uralia" : "N3uralia Lab"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {isES 
                ? "Espacio de innovación donde exploramos y validamos tecnologías emergentes en sistemas agenticos."
                : "Innovation space where we explore and validate emerging technologies in agentic systems."}
            </p>
          </div>
        </section>

        {/* Lab Focus Areas */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Research */}
              <div className="p-8 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {isES ? "Investigación" : "Research"}
                </h3>
                <p className="text-muted-foreground">
                  {isES 
                    ? "Exploramos nuevas técnicas en IA, sistemas distribuidos y orquestación de agentes."
                    : "We explore new techniques in AI, distributed systems, and agent orchestration."}
                </p>
              </div>

              {/* Prototyping */}
              <div className="p-8 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {isES ? "Prototipado" : "Prototyping"}
                </h3>
                <p className="text-muted-foreground">
                  {isES 
                    ? "Validamos ideas y conceptos antes de llevarlos a producción en sistemas en vivo."
                    : "We validate ideas and concepts before bringing them to production systems."}
                </p>
              </div>

              {/* Collaboration */}
              <div className="p-8 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {isES ? "Colaboración" : "Collaboration"}
                </h3>
                <p className="text-muted-foreground">
                  {isES 
                    ? "Trabajamos con universidades, centros de investigación y partners tecnológicos."
                    : "We work with universities, research centers, and technology partners."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              {isES ? "Proyectos Activos" : "Active Projects"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-border rounded-lg bg-background">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {isES ? "Orquestación Multi-Agente" : "Multi-Agent Orchestration"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {isES 
                    ? "Investigamos patrones avanzados de coordinación entre múltiples agentes IA."
                    : "Researching advanced coordination patterns between multiple AI agents."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">AI</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Agents</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">{isES ? "Orquestación" : "Orchestration"}</span>
                </div>
              </div>

              <div className="p-6 border border-border rounded-lg bg-background">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {isES ? "Gobernanza de IA en Producción" : "AI Governance in Production"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {isES 
                    ? "Desarrollamos frameworks para auditabilidad, trazabilidad y compliance de sistemas IA."
                    : "Developing frameworks for auditability, traceability, and AI system compliance."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">{isES ? "Gobernanza" : "Governance"}</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">{isES ? "Cumplimiento" : "Compliance"}</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">{isES ? "Trazabilidad" : "Traceability"}</span>
                </div>
              </div>

              <div className="p-6 border border-border rounded-lg bg-background">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {isES ? "Memoria Contextual Persistente" : "Persistent Contextual Memory"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {isES 
                    ? "Optimizando sistemas de memoria a largo plazo para agentes IA en aplicaciones empresariales."
                    : "Optimizing long-term memory systems for AI agents in enterprise applications."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">{isES ? "Memoria" : "Memory"}</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">{isES ? "Contexto" : "Context"}</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">RAG</span>
                </div>
              </div>

              <div className="p-6 border border-border rounded-lg bg-background">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {isES ? "Infraestructura Distribuida" : "Distributed Infrastructure"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {isES 
                    ? "Explorando arquitecturas escalables para desplegar sistemas agenticos en producción."
                    : "Exploring scalable architectures for deploying agentic systems in production."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">{isES ? "Arquitectura" : "Architecture"}</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">{isES ? "Infraestructura" : "Infrastructure"}</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">{isES ? "Escalabilidad" : "Scalability"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isES ? "¿Interesado en colaborar?" : "Interested in collaborating?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {isES 
                ? "Exploramos nuevas ideas con universidades, centros de investigación y empresas innovadoras."
                : "We explore new ideas with universities, research centers, and innovative companies."}
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              {isES ? "Contáctanos" : "Contact Us"}
            </button>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
