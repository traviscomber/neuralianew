import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/Section"

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
      <main style={{ minHeight: "100vh" }}>
        <Section 
          title={isES ? "N3uralia Agent Matrix" : "N3uralia Agent Matrix"}
          subtitle={isES ? "Capa de Control Visual para Inteligencia Multi-Agente" : "Visual Control Layer for Multi-Agent Intelligence"}
        >
          <p style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: "24px" }}>
            {isES 
              ? "N3uralia Agent Matrix es el sistema visual que permite observar, coordinar y operar redes de agentes de inteligencia artificial en producción."
              : "N3uralia Agent Matrix is the visual system that enables observing, coordinating and operating networks of artificial intelligence agents in production."}
          </p>
          <p style={{ opacity: 0.75, fontSize: "14px" }}>
            {isES
              ? "No es un chatbot. Es infraestructura viva de agentes especializados que ejecutan tareas reales dentro de sistemas empresariales."
              : "It is not a chatbot. It is a living infrastructure of specialized agents executing real tasks within enterprise systems."}
          </p>
        </Section>

        <Section 
          title={isES ? "Una Red de Agentes Inteligentes" : "A Network of Intelligent Agents"}
          subtitle={isES ? "Sistemas modernos de IA funcionan como redes coordinadas de agentes especializados" : "Modern AI systems work as coordinated networks of specialized agents"}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "24px" }}>
            {[
              { titleES: "Research Agent", titleEN: "Research Agent" },
              { titleES: "Brand Intelligence Agent", titleEN: "Brand Intelligence Agent" },
              { titleES: "Workflow Automation Agent", titleEN: "Workflow Automation Agent" },
              { titleES: "Data Processing Agent", titleEN: "Data Processing Agent" },
              { titleES: "Infrastructure Agent", titleEN: "Infrastructure Agent" },
              { titleES: "Knowledge Retrieval Agent", titleEN: "Knowledge Retrieval Agent" },
              { titleES: "Content Generation Agent", titleEN: "Content Generation Agent" },
              { titleES: "Integration Agent", titleEN: "Integration Agent" },
            ].map((agent, idx) => (
              <div key={idx} style={{ padding: "16px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px" }}>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: 500 }}>
                  {isES ? agent.titleES : agent.titleEN}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section 
          title={isES ? "Visibilidad en Tiempo Real" : "Real-Time Agent Visibility"}
          subtitle={isES ? "Observa exactamente qué está sucediendo dentro de tu sistema de IA" : "Observe exactly what is happening inside your AI system"}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginTop: "24px" }}>
            {[
              { titleES: "Qué agente está activo", titleEN: "Which agent is active" },
              { titleES: "Qué tarea ejecuta", titleEN: "What task is running" },
              { titleES: "Qué datos utiliza", titleEN: "What data it uses" },
              { titleES: "Qué resultado genera", titleEN: "What output is generated" },
              { titleES: "Qué agentes dependen", titleEN: "What agents depend on it" },
              { titleES: "Estado en tiempo real", titleEN: "Real-time status" },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: "16px", background: "rgba(255,255,255,0.02)", borderRadius: "6px" }}>
                <p style={{ margin: 0, fontSize: "13px", opacity: 0.9 }}>
                  {isES ? item.titleES : item.titleEN}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section 
          title={isES ? "Orquestación de Workflows Multi-Agente" : "Multi-Agent Workflow Orchestration"}
          subtitle={isES ? "Los agentes no operan aislados. Funcionan dentro de pipelines coordinados." : "Agents don't operate in isolation. They work within coordinated pipelines."}
        >
          <div style={{ padding: "24px", background: "rgba(255,255,255,0.03)", borderRadius: "8px", marginTop: "24px" }}>
            <p style={{ opacity: 0.85, lineHeight: 1.8, margin: 0, fontSize: "14px" }}>
              {isES
                ? "Brief → Research Agent → Strategy Agent → Data Processing Agent → Content Generation Agent → Integration Agent → Deployment"
                : "Brief → Research Agent → Strategy Agent → Data Processing Agent → Content Generation Agent → Integration Agent → Deployment"}
            </p>
            <p style={{ opacity: 0.75, marginTop: "16px", fontSize: "13px" }}>
              {isES
                ? "La Matrix muestra cómo fluye información entre agentes, detectando cuellos de botella y oportunidades de optimización."
                : "The Matrix shows how information flows between agents, detecting bottlenecks and optimization opportunities."}
            </p>
          </div>
        </Section>

        <Section 
          title={isES ? "IA como Infraestructura" : "Infrastructure-Level AI"}
          subtitle={isES ? "N3uralia construye IA como infraestructura, no como herramienta aislada" : "N3uralia builds AI as infrastructure, not as an isolated tool"}
        >
          <p style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: "20px" }}>
            {isES
              ? "Cada agente se conecta a bases de datos, APIs empresariales, repositorios de código, sistemas internos y herramientas de análisis."
              : "Each agent connects to databases, enterprise APIs, code repositories, internal systems, and analysis tools."}
          </p>
          <div style={{ padding: "16px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px" }}>
            <p style={{ margin: 0, fontSize: "13px", opacity: 0.9 }}>
              {isES
                ? "Sin capas artificiales. Sin dependencias innecesarias. El resultado: sistemas donde los agentes operan directamente dentro del stack de la empresa."
                : "No artificial layers. No unnecessary dependencies. The result: systems where agents operate directly within your company stack."}
            </p>
          </div>
        </Section>

        <Section 
          title={isES ? "Sistemas IA Observables" : "Observable AI Systems"}
          subtitle={isES ? "Seguridad, auditoría y escalabilidad desde el inicio" : "Security, auditability and scalability from day one"}
        >
          <p style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: "20px" }}>
            {isES
              ? "El principal problema de los sistemas IA es la falta de observabilidad. La Agent Matrix resuelve esto mostrando estado, ejecución, fuentes de datos, contexto de memoria, generación de outputs y dependencias del sistema."
              : "The main problem with AI systems is lack of observability. The Agent Matrix solves this by showing status, execution, data sources, memory context, output generation and system dependencies."}
          </p>
        </Section>

        <Section 
          title={isES ? "Diseñado para Producción" : "Designed for Production Environments"}
          subtitle={isES ? "No es experimental. Es control real para sistemas reales." : "Not experimental. Real control for real systems."}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginTop: "24px" }}>
            {[
              { titleES: "Enterprise Automation", titleEN: "Enterprise Automation" },
              { titleES: "Operational Intelligence", titleEN: "Operational Intelligence" },
              { titleES: "Data Processing Pipelines", titleEN: "Data Processing Pipelines" },
              { titleES: "Customer Support Automation", titleEN: "Customer Support Automation" },
              { titleES: "Research Systems", titleEN: "Research Systems" },
              { titleES: "Knowledge Engines", titleEN: "Knowledge Engines" },
            ].map((use, idx) => (
              <div key={idx} style={{ padding: "14px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px" }}>
                <p style={{ margin: 0, fontSize: "13px" }}>
                  {use.titleES}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section 
          title={isES ? "Integración con Infraestructura Existente" : "Integration with Existing Infrastructure"}
          subtitle={isES ? "La Matrix no reemplaza tu stack. Se integra con él." : "The Matrix doesn't replace your stack. It integrates with it."}
        >
          <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
            {isES
              ? "Se conecta a bases de datos, APIs internas, infraestructura cloud, sistemas de monitoreo y pipelines DevOps. Permite desplegar agentes que trabajan directamente dentro de los sistemas existentes de la empresa."
              : "Connects to databases, internal APIs, cloud infrastructure, monitoring systems and DevOps pipelines. Enables deploying agents that work directly within your existing company systems."}
          </p>
        </Section>

        <Section 
          title={isES ? "Construido por N3uralia" : "Built by N3uralia"}
          subtitle={isES ? "Sistemas de inteligencia artificial diseñados para operar en producción" : "AI systems designed to operate in production"}
        >
          <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
            {isES
              ? "N3uralia desarrolla sistemas que funcionan dentro de infraestructuras reales. No demostraciones. No prototipos. Sistemas vivos que trabajan dentro de tu empresa."
              : "N3uralia develops systems that work within real infrastructure. Not demos. Not prototypes. Living systems that work inside your company."}
          </p>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
