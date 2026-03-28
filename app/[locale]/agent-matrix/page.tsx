import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/Section"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const isES = locale === "es"
  const title = isES ? "Agent Matrix | N3uralia" : "Agent Matrix | N3uralia"
  const description = isES
    ? "Capa visual de control para redes de agentes IA operando en producción. Observable, coordinado, auditable."
    : "Visual control layer for AI agent networks operating in production. Observable, coordinated, auditable."

  return {
    title,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/agent-matrix`,
      languages: {
        es: `https://n3uralia.com/es/agent-matrix`,
        en: `https://n3uralia.com/en/agent-matrix`,
      },
    },
  }
}

export default function AgentMatrixPage({ params }: PageProps) {
  const locale = params.locale as Locale
  const isES = locale === "es"

  return (
    <>
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <Section 
          title={isES ? "N3uralia Agent Matrix" : "N3uralia Agent Matrix"}
          subtitle={isES ? "Capa de Control Visual para Inteligencia Multi-Agente" : "Visual Control Layer for Multi-Agent Intelligence"}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {isES 
              ? "N3uralia Agent Matrix es el sistema visual que permite observar, coordinar y operar redes de agentes de inteligencia artificial en producción."
              : "N3uralia Agent Matrix is the visual system that enables observing, coordinating and operating networks of artificial intelligence agents in production."}
          </p>
          <p className="text-base text-muted-foreground/80">
            {isES
              ? "No es un chatbot. Es infraestructura viva de agentes especializados que ejecutan tareas reales dentro de sistemas empresariales."
              : "It is not a chatbot. It is a living infrastructure of specialized agents executing real tasks within enterprise systems."}
          </p>
        </Section>

        {/* Agent Network Section */}
        <Section 
          title={isES ? "Una Red de Agentes Inteligentes" : "A Network of Intelligent Agents"}
          subtitle={isES ? "Sistemas modernos de IA funcionan como redes coordinadas de agentes especializados" : "Modern AI systems work as coordinated networks of specialized agents"}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              "Research Agent",
              "Brand Intelligence Agent",
              "Workflow Automation Agent",
              "Data Processing Agent",
              "Infrastructure Agent",
              "Knowledge Retrieval Agent",
              "Content Generation Agent",
              "Integration Agent",
            ].map((agent, idx) => (
              <div key={idx} className="p-4 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors">
                <p className="text-sm font-medium text-foreground">{agent}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Real-time Visibility */}
        <Section 
          title={isES ? "Visibilidad en Tiempo Real" : "Real-Time Agent Visibility"}
          subtitle={isES ? "Observa exactamente qué está sucediendo dentro de tu sistema de IA" : "Observe exactly what is happening inside your AI system"}
        >
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              { titleES: "Qué agente está activo", titleEN: "Which agent is active" },
              { titleES: "Qué tarea ejecuta", titleEN: "What task is running" },
              { titleES: "Qué datos utiliza", titleEN: "What data it uses" },
              { titleES: "Qué resultado genera", titleEN: "What output is generated" },
              { titleES: "Qué agentes dependen", titleEN: "What agents depend on it" },
              { titleES: "Estado en tiempo real", titleEN: "Real-time status" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-card/50 border border-border/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  {isES ? item.titleES : item.titleEN}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Multi-Agent Orchestration */}
        <Section 
          title={isES ? "Orquestación de Workflows Multi-Agente" : "Multi-Agent Workflow Orchestration"}
          subtitle={isES ? "Los agentes no operan aislados. Funcionan dentro de pipelines coordinados." : "Agents don't operate in isolation. They work within coordinated pipelines."}
        >
          <div className="p-6 bg-card border border-border rounded-lg mt-8">
            <p className="text-sm font-mono text-primary mb-4">
              Brief → Research Agent → Strategy Agent → Data Processing Agent → Content Generation Agent → Integration Agent → Deployment
            </p>
            <p className="text-sm text-muted-foreground">
              {isES
                ? "La Matrix muestra cómo fluye información entre agentes, detectando cuellos de botella y oportunidades de optimización."
                : "The Matrix shows how information flows between agents, detecting bottlenecks and optimization opportunities."}
            </p>
          </div>
        </Section>

        {/* Infrastructure Level AI */}
        <Section 
          title={isES ? "IA como Infraestructura" : "Infrastructure-Level AI"}
          subtitle={isES ? "N3uralia construye IA como infraestructura, no como herramienta aislada" : "N3uralia builds AI as infrastructure, not as an isolated tool"}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {isES
              ? "Cada agente se conecta a bases de datos, APIs empresariales, repositorios de código, sistemas internos y herramientas de análisis."
              : "Each agent connects to databases, enterprise APIs, code repositories, internal systems, and analysis tools."}
          </p>
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-foreground">
              {isES
                ? "Sin capas artificiales. Sin dependencias innecesarias. El resultado: sistemas donde los agentes operan directamente dentro del stack de la empresa."
                : "No artificial layers. No unnecessary dependencies. The result: systems where agents operate directly within your company stack."}
            </p>
          </div>
        </Section>

        {/* Observable Systems */}
        <Section 
          title={isES ? "Sistemas IA Observables" : "Observable AI Systems"}
          subtitle={isES ? "Seguridad, auditoría y escalabilidad desde el inicio" : "Security, auditability and scalability from day one"}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {isES
              ? "El principal problema de los sistemas IA es la falta de observabilidad. La Agent Matrix resuelve esto mostrando estado, ejecución, fuentes de datos, contexto de memoria, generación de outputs y dependencias del sistema."
              : "The main problem with AI systems is lack of observability. The Agent Matrix solves this by showing status, execution, data sources, memory context, output generation and system dependencies."}
          </p>
        </Section>

        {/* Use Cases */}
        <Section 
          title={isES ? "Diseñado para Producción" : "Designed for Production Environments"}
          subtitle={isES ? "No es experimental. Es control real para sistemas reales." : "Not experimental. Real control for real systems."}
        >
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              "Enterprise Automation",
              "Operational Intelligence",
              "Data Processing Pipelines",
              "Customer Support Automation",
              "Research Systems",
              "Knowledge Engines",
            ].map((useCase, idx) => (
              <div key={idx} className="p-4 border border-border rounded-lg bg-card">
                <p className="text-sm font-medium text-foreground">{useCase}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Integration */}
        <Section 
          title={isES ? "Integración con Infraestructura Existente" : "Integration with Existing Infrastructure"}
          subtitle={isES ? "La Matrix no reemplaza tu stack. Se integra con él." : "The Matrix doesn't replace your stack. It integrates with it."}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {isES
              ? "Se conecta a bases de datos, APIs internas, infraestructura cloud, sistemas de monitoreo y pipelines DevOps. Permite desplegar agentes que trabajan directamente dentro de los sistemas existentes de la empresa."
              : "Connects to databases, internal APIs, cloud infrastructure, monitoring systems and DevOps pipelines. Enables deploying agents that work directly within your existing company systems."}
          </p>
        </Section>

        {/* CTA Section */}
        <section className="py-20 px-4 border-t border-border bg-background">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {isES ? "¿Listo para desplegar Agent Matrix en tu empresa?" : "Ready to deploy Agent Matrix in your enterprise?"}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {isES ? "Contactar" : "Get in Touch"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
