import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/Section"
import { Footer } from "@/components/layout/footer"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const isES = locale === "es"
  const title = isES ? "Operaciones Agénticas | N3uralia" : "Agent Operations | N3uralia"
  const description = isES
    ? "Plataforma de infraestructura multi-agente para operaciones reales. Ejecución, orquestación y control de agentes en producción."
    : "Multi-agent infrastructure platform for real business operations. Execution, orchestration, and agent control in production."

  return {
    title,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/agent-operations`,
      languages: {
        es: `https://n3uralia.com/es/agent-operations`,
        en: `https://n3uralia.com/en/agent-operations`,
      },
    },
  }
}

export default function AgentOperationsPage({ params }: PageProps) {
  const locale = params.locale as Locale
  const isES = locale === "es"

  const content = {
    title: isES ? "Plataforma de Operaciones Agénticas" : "Agent Operations Platform",
    subtitle: isES ? "Donde los agentes pasan de pensar a operar" : "Where agents transition from thinking to operating",
    ctaPrimary: isES ? "Hablar con N3uralia" : "Talk to N3uralia",
    ctaSecondary: isES ? "Ver Arquitectura" : "View Architecture",
    
    heroTitle: isES ? "Infraestructura de Agentes en Producción" : "Agent Infrastructure in Production",
    heroSubtitle: isES 
      ? "Sistemas multi-agente que ejecutan operaciones reales dentro de tu negocio"
      : "Multi-agent systems executing real operations within your business",
    heroDesc: isES
      ? "No es un chatbot de demostración. Es infraestructura viva de agentes especializados que manejan procesos críticos, generan ingresos y automatizan operaciones empresariales a escala."
      : "Not a demo chatbot. It is living infrastructure of specialized agents managing critical processes, generating revenue and automating business operations at scale.",

    problemTitle: isES ? "El Problema Real de los Agentes de IA" : "The Real Problem with AI Agents",
    problemSubtitle: isES ? "La mayoría de soluciones de IA no pueden operar en producción" : "Most AI agent solutions cannot operate in production",
    
    problem1: { 
      title: isES ? "Ejecución Manual" : "Manual Execution",
      desc: isES 
        ? "Los agentes generan insights pero requieren intervención humana para actuar. Cuellos de botella operacionales."
        : "Agents generate insights but require human intervention to act. Operational bottlenecks."
    },
    problem2: {
      title: isES ? "Sin Coordinación" : "No Orchestration",
      desc: isES
        ? "Múltiples agentes no pueden trabajar juntos de forma confiable. Sin gobernanza ni auditoría."
        : "Multiple agents cannot work together reliably. No governance or audit trails."
    },
    problem3: {
      title: isES ? "Infraestructura Frágil" : "Fragile Infrastructure",
      desc: isES
        ? "Sistemas que fallan bajo carga, pierden contexto, no escalan a procesos reales."
        : "Systems that fail under load, lose context, don't scale to real processes."
    },

    solutionTitle: isES ? "La Solución N3uralia" : "The N3uralia Solution",
    solutionSubtitle: isES 
      ? "Operaciones agénticas enterprise-grade con gobernanza completa"
      : "Enterprise-grade agent operations with full governance",
    
    archTitle: isES ? "Arquitectura de 4 Capas" : "4-Layer Architecture",
    archSubtitle: isES ? "Sistema diseñado para producción desde el inicio" : "System designed for production from day one",
    
    layer1: { title: isES ? "Capa Visual" : "Visual Layer", desc: isES ? "Agent Matrix - Control y monitoreo en tiempo real" : "Agent Matrix - Real-time control and monitoring" },
    layer2: { title: isES ? "Capa de Orquestación" : "Orchestration Layer", desc: isES ? "Coordinación de agentes, flujos de trabajo, gobernanza" : "Agent coordination, workflows, governance" },
    layer3: { title: isES ? "Capa de Agentes" : "Agent Layer", desc: isES ? "Agentes especializados, memoria persistente, contexto vivo" : "Specialized agents, persistent memory, live context" },
    layer4: { title: isES ? "Capa de Integración" : "Integration Layer", desc: isES ? "APIs empresariales, bases de datos, sistemas legacy" : "Enterprise APIs, databases, legacy systems" },

    useCasesTitle: isES ? "Casos de Uso" : "Use Cases",
    useCase1: { title: isES ? "Retail" : "Retail", desc: isES ? "Gestión de inventario y pedidos automática" : "Automated inventory and order management" },
    useCase2: { title: isES ? "Logística" : "Logistics", desc: isES ? "Optimización de rutas y seguimiento de envíos" : "Route optimization and shipment tracking" },
    useCase3: { title: isES ? "Real Estate" : "Real Estate", desc: isES ? "Calificación de leads y gestión de propiedades" : "Lead qualification and property management" },
    useCase4: { title: isES ? "Legal" : "Legal", desc: isES ? "Análisis de documentos y cumplimiento normativo" : "Document analysis and compliance" },
    useCase5: { title: isES ? "Operaciones" : "Operations", desc: isES ? "Automatización de procesos y RPA" : "Process automation and RPA" },
    useCase6: { title: isES ? "Ventas" : "Sales", desc: isES ? "Prospecting, pipeline y cierre automático" : "Prospecting, pipeline and auto-closing" },
  }

  return (
    <>
      <main style={{ minHeight: "100vh" }}>
        {/* Hero */}
        <Section 
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
        >
          <p style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: "24px", maxWidth: "800px" }}>
            {content.heroDesc}
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
            <Link href={`/${locale}/contact`} style={{ padding: "12px 24px", backgroundColor: "hsl(var(--primary))", color: "white", borderRadius: "6px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              {content.ctaPrimary}
              <ArrowRight style={{ width: "16px", height: "16px" }} />
            </Link>
            <Link href={`/${locale}/agent-matrix`} style={{ padding: "12px 24px", border: "1px solid hsl(var(--primary))", color: "hsl(var(--primary))", borderRadius: "6px", fontWeight: 600, textDecoration: "none" }}>
              {content.ctaSecondary}
            </Link>
          </div>
        </Section>

        {/* Problems */}
        <Section 
          title={content.problemTitle}
          subtitle={content.problemSubtitle}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "24px" }}>
            {[content.problem1, content.problem2, content.problem3].map((problem, idx) => (
              <div key={idx} style={{ padding: "24px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.02)" }}>
                <h3 style={{ margin: "0 0 12px 0", fontSize: "16px", fontWeight: 600 }}>{problem.title}</h3>
                <p style={{ margin: 0, fontSize: "14px", opacity: 0.75, lineHeight: 1.6 }}>{problem.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Solution */}
        <Section 
          title={content.solutionTitle}
          subtitle={content.solutionSubtitle}
        >
          <p style={{ opacity: 0.85, lineHeight: 1.6, marginTop: "16px", maxWidth: "800px" }}>
            {isES
              ? "N3uralia permite que los agentes ejecuten operaciones reales sin intervención humana. Con gobernanza completa, auditoría y escalabilidad empresarial."
              : "N3uralia enables agents to execute real operations without human intervention. With complete governance, audit trails and enterprise scalability."}
          </p>
        </Section>

        {/* Architecture */}
        <Section 
          title={content.archTitle}
          subtitle={content.archSubtitle}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginTop: "24px" }}>
            {[content.layer1, content.layer2, content.layer3, content.layer4].map((layer, idx) => (
              <div key={idx} style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.02)" }}>
                <h3 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: 600 }}>{layer.title}</h3>
                <p style={{ margin: 0, fontSize: "13px", opacity: 0.7, lineHeight: 1.5 }}>{layer.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Use Cases */}
        <Section 
          title={content.useCasesTitle}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginTop: "20px" }}>
            {[content.useCase1, content.useCase2, content.useCase3, content.useCase4, content.useCase5, content.useCase6].map((useCase, idx) => (
              <div key={idx} style={{ padding: "16px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", textAlign: "center" }}>
                <p style={{ margin: "0 0 6px 0", fontSize: "14px", fontWeight: 600 }}>{useCase.title}</p>
                <p style={{ margin: 0, fontSize: "12px", opacity: 0.7 }}>{useCase.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <Section>
          <div style={{ textAlign: "center", padding: "40px 20px", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h2 style={{ fontSize: "28px", margin: "0 0 16px 0" }}>
              {isES ? "¿Listo para Automatizar?" : "Ready to Automate?"}
            </h2>
            <p style={{ fontSize: "16px", opacity: 0.8, margin: "0 0 24px 0", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              {isES
                ? "Descubre cómo N3uralia puede transformar tus operaciones con agentes en producción."
                : "Discover how N3uralia can transform your operations with production-grade agents."}
            </p>
            <Link href={`/${locale}/contact`} style={{ padding: "12px 32px", backgroundColor: "hsl(var(--primary))", color: "white", borderRadius: "6px", fontWeight: 600, textDecoration: "none", display: "inline-block" }}>
              {content.ctaPrimary}
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
