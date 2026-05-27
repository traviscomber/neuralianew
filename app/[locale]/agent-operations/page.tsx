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
  const title = isES ? "Operaciones Agénticas | N3uralia" : "Agent Operations | N3uralia"
  const description = isES
    ? "Automatización gobernable con human-in-the-loop, permisos, trazabilidad y control en producción."
    : "Governed automation with human-in-the-loop, permissions, traceability, and production control."

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

  return (
    <>
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <Section 
          title={isES ? "Operaciones Agénticas" : "Agent Operations"}
          subtitle={isES ? "Automatización Gobernable para Empresas" : "Governed Automation for Enterprises"}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {isES 
              ? "Los agentes no son máquinas negras. Son sistemas que operan dentro de políticas, permisos y auditoría completa."
              : "Agents aren't black boxes. They are systems that operate within policies, permissions, and complete audit trails."}
          </p>
          <p className="text-base text-muted-foreground/80">
            {isES
              ? "En N3uralia, cada acción de agente es gobernable, auditable y reversible. Automatización que las empresas pueden confiar y controlar."
              : "At N3uralia, every agent action is governable, auditable, and reversible. Automation that enterprises can trust and control."}
          </p>
        </Section>

        {/* Core Principles */}
        <Section 
          title={isES ? "Principios Fundamentales" : "Core Principles"}
          subtitle={isES ? "Cómo operamos los agentes en producción" : "How we operate agents in production"}
        >
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              {
                titleES: "Human-in-the-Loop",
                titleEN: "Human-in-the-Loop",
                descES: "Los agentes proponen. Los humanos deciden. Ninguna decisión crítica sin aprobación.",
                descEN: "Agents propose. Humans decide. No critical decision without approval.",
              },
              {
                titleES: "Gobernanza Total",
                titleEN: "Total Governance",
                descES: "Permisos granulares. Políticas por agente. Límites claros de operación.",
                descEN: "Granular permissions. Policies per agent. Clear operational boundaries.",
              },
              {
                titleES: "Auditoría Completa",
                titleEN: "Complete Audit Trail",
                descES: "Cada acción registrada. Contexto almacenado. Trazabilidad total.",
                descEN: "Every action logged. Context stored. Full traceability.",
              },
              {
                titleES: "Reversibilidad",
                titleEN: "Reversibility",
                descES: "Las operaciones pueden deshacerse. Sin estado permanente hasta confirmación.",
                descEN: "Operations can be undone. No permanent state until confirmation.",
              },
              {
                titleES: "Transparencia Radical",
                titleEN: "Radical Transparency",
                descES: "El sistema explica cada decisión. Razonamiento visible. Fuentes auditables.",
                descEN: "System explains every decision. Visible reasoning. Auditable sources.",
              },
              {
                titleES: "Escalas de Confianza",
                titleEN: "Trust Levels",
                descES: "Agentes con más historia tienen más autonomía. Confianza ganada, no dada.",
                descEN: "Agents with more history get more autonomy. Trust earned, not given.",
              },
            ].map((principle, idx) => (
              <div key={idx} className="p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {isES ? principle.titleES : principle.titleEN}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isES ? principle.descES : principle.descEN}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Operational Model */}
        <Section 
          title={isES ? "Modelo Operacional" : "Operational Model"}
          subtitle={isES ? "De la automatización sin control al control con automatización" : "From automation without control to control with automation"}
        >
          <div className="space-y-6 mt-8">
            {[
              {
                numES: "Fase 1: Propuesta",
                numEN: "Phase 1: Proposal",
                descES: "El agente analiza la tarea y propone un plan de acción.",
                descEN: "Agent analyzes task and proposes action plan.",
              },
              {
                numES: "Fase 2: Revisión",
                numEN: "Phase 2: Review",
                descES: "Un humano revisa la propuesta, valida contexto, verifica permisos.",
                descEN: "Human reviews proposal, validates context, verifies permissions.",
              },
              {
                numES: "Fase 3: Autorización",
                numEN: "Phase 3: Authorization",
                descES: "Se autoriza solo si cumple políticas de seguridad y gobernanza.",
                descEN: "Authorization only if security and governance policies met.",
              },
              {
                numES: "Fase 4: Ejecución",
                numEN: "Phase 4: Execution",
                descES: "El agente ejecuta dentro de límites autorizados. Cada paso auditado.",
                descEN: "Agent executes within authorized limits. Every step audited.",
              },
              {
                numES: "Fase 5: Validación",
                numEN: "Phase 5: Validation",
                descES: "Resultado validado. Efectos secundarios verificados. Auditoría completada.",
                descEN: "Result validated. Side effects verified. Audit completed.",
              },
            ].map((phase, idx) => (
              <div key={idx} className="p-4 border border-border rounded-lg bg-card/50">
                <h4 className="font-semibold text-foreground mb-2">
                  {isES ? phase.numES : phase.numEN}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {isES ? phase.descES : phase.descEN}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Permission Framework */}
        <Section 
          title={isES ? "Marco de Permisos" : "Permission Framework"}
          subtitle={isES ? "Granularidad total en lo que cada agente puede hacer" : "Complete granularity in what each agent can do"}
        >
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {[
              {
                titleES: "Permisos por Recurso",
                titleEN: "Resource Permissions",
                descES: "Qué bases de datos, APIs y sistemas puede acceder.",
                descEN: "Which databases, APIs, and systems it can access.",
              },
              {
                titleES: "Límites de Acción",
                titleEN: "Action Limits",
                descES: "Qué operaciones puede hacer (lectura, escritura, modificación).",
                descEN: "What operations it can perform (read, write, modify).",
              },
              {
                titleES: "Límites Económicos",
                titleEN: "Economic Limits",
                descES: "Presupuesto máximo por operación. Costos acumulados.",
                descEN: "Maximum budget per operation. Cumulative costs.",
              },
              {
                titleES: "Restricciones Temporales",
                titleEN: "Time Restrictions",
                descES: "Horarios de operación. Frecuencia máxima de acciones.",
                descEN: "Operating hours. Maximum action frequency.",
              },
            ].map((perm, idx) => (
              <div key={idx} className="p-4 border border-border rounded-lg bg-card">
                <h4 className="font-semibold text-foreground mb-2 text-sm">
                  {isES ? perm.titleES : perm.titleEN}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {isES ? perm.descES : perm.descEN}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Escalation Workflows */}
        <Section 
          title={isES ? "Escalamiento Inteligente" : "Intelligent Escalation"}
          subtitle={isES ? "El sistema escala a humanos cuando la confianza no es suficiente" : "System escalates to humans when confidence isn't sufficient"}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mt-8">
            {isES
              ? "Cuando un agente se enfrenta a una decisión fuera de su dominio de confianza, escala automáticamente a un humano. No hay daño potencial. Hay visibilidad total."
              : "When an agent faces a decision outside its confidence domain, it automatically escalates to a human. No potential damage. Complete visibility."}
          </p>
        </Section>

        {/* Real Examples */}
        <Section 
          title={isES ? "Ejemplos Reales de Operación" : "Real Operation Examples"}
          subtitle={isES ? "Cómo operan los agentes en empresas de verdad" : "How agents operate in real companies"}
        >
          <div className="space-y-4 mt-8">
            {[
              {
                titleES: "Análisis de Datos",
                titleEN: "Data Analysis",
                descES: "El agente accede solo a tablas autorizadas. Ejecuta queries pre-validadas. Reporta resultados auditados.",
                descEN: "Agent accesses only authorized tables. Executes pre-validated queries. Reports audited results.",
              },
              {
                titleES: "Automatización de Marketing",
                titleEN: "Marketing Automation",
                descES: "El agente crea campañas dentro de presupuesto. Un humano aprueba antes de enviar. Todas las métricas registradas.",
                descEN: "Agent creates campaigns within budget. Human approves before sending. All metrics logged.",
              },
              {
                titleES: "Soporte al Cliente",
                titleEN: "Customer Support",
                descES: "El agente responde preguntas comunes. Escala a humano si ve frustración. Mantiene contexto de conversación.",
                descEN: "Agent answers common questions. Escalates to human if frustrated. Maintains conversation context.",
              },
            ].map((example, idx) => (
              <div key={idx} className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">
                  {isES ? example.titleES : example.titleEN}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {isES ? example.descES : example.descEN}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <section className="py-20 px-4 border-t border-border bg-background">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {isES ? "¿Listo para operaciones agénticas en tu empresa?" : "Ready for agent operations in your enterprise?"}
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
