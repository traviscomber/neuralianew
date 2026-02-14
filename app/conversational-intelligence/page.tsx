import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, Zap, Users, BarChart3, Workflow, Shield, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Conversational Intelligence Systems | N3uralia - Revenue + Operations + Agents",
  description:
    "N3uralia Conversational Intelligence Systems transforman conversaciones en infraestructura operativa. Agentes conversacionales integrados en adquisición, operaciones y revenue con atribución real. B2B, Turismo, Eventos, Manufactura.",
  keywords:
    "conversational intelligence, conversational agents, sistemas conversacionales, revenue operations, customer intelligence, conversational AI, B2B automation, turismo, eventos, glamping, agentes conversacionales, n3uralia",
  alternates: {
    canonical: "https://n3uralia.com/conversational-intelligence",
  },
}

export default function ConversationalIntelligencePage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 border-b border-border px-4 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Conversational Intelligence</span>
            </div>
            <h1 className="h1-light mb-6">
              Conversaciones que Generan Revenue & Operación
            </h1>
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              N3uralia Conversational Intelligence Systems transforman conversaciones en infraestructura operativa. 
              No automatizamos respuestas. Integramos agentes conversacionales dentro de tus flujos reales de adquisición, 
              operación y revenue, con memoria persistente, atribución completa y control empresarial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Solicitar Demo
              </Link>
              <Link href="/capabilities" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Ver Arquitectura
              </Link>
            </div>
          </div>
        </section>

        {/* What Makes It Different */}
        <section className="py-24 bg-background px-4 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="h2-light mb-12 text-center">Por Qué Es Diferente</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Not Just Channel */}
              <div className="border border-border rounded-lg p-8 bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Workflow className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">No es un canal</h3>
                <p className="text-muted-foreground mb-6">
                  Es capa de inteligencia conectada a tu CRM, ERP, dashboards, agentes internos y operaciones. 
                  Cada conversación alimenta tu infraestructura completa.
                </p>
              </div>

              {/* Revenue Attribution */}
              <div className="border border-border rounded-lg p-8 bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Atribución Real de Revenue</h3>
                <p className="text-muted-foreground mb-6">
                  Cada conversación se convierte en: lead calificado, pipeline entry, evento de negocio, métrica. 
                  Sabes exactamente qué conversa genera qué resultado.
                </p>
              </div>

              {/* Human + Agent */}
              <div className="border border-border rounded-lg p-8 bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Modo Híbrido: Humano + Agente</h3>
                <p className="text-muted-foreground mb-6">
                  No reemplazamos equipos. Los amplificamos. El agente maneja lo rutinario, escalea lo estratégico, 
                  tu equipo cierra. Mejor conversión, mejor experiencia, mejor rentabilidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases by Vertical */}
        <section className="py-24 bg-muted/30 px-4 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="h2-light mb-12 text-center">Diseñado para Multi-Vertical con Playbooks Reales</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* B2B Mediano */}
              <div className="border border-border rounded-lg p-8 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">B2B Mediano (Core)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Lead qualification automatizada + handoff a sales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Propostas automáticas basadas en perfil del cliente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Seguimiento post-reunión y pipeline management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Integración total con CRM + ERP existentes</span>
                  </li>
                </ul>
              </div>

              {/* Turismo / Glamping */}
              <div className="border border-border rounded-lg p-8 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">Turismo & Glamping</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Consultas 24/7 con información en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Reservas directas desde chat (conexión a booking engine)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Upsell inteligente de experiencias + servicios adicionales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Post-reserva: confirmaciones, tips, coordenadas de llegada</span>
                  </li>
                </ul>
              </div>

              {/* Eventos Inmersivos */}
              <div className="border border-border rounded-lg p-8 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">Eventos Inmersivos</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Venta de entradas con personalización (VIP, grupos, pases)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Experiencias complementarias (afterparty, merchandise, transport)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Engagement durante evento (chats en tiempo real)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Post-evento: feedback, invitación a futuras ediciones</span>
                  </li>
                </ul>
              </div>

              {/* Manufactura / Operaciones */}
              <div className="border border-border rounded-lg p-8 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">Manufactura & Supply Chain</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Órdenes de compra + confirmaciones automáticas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Status de producción en tiempo real vía chat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Alertas de problemas + escalado a equipos correctos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Coordinación cross-team: logística, calidad, entregas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Flow */}
        <section className="py-24 bg-background px-4 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="h2-light mb-12 text-center">Arquitectura: De Conversación a Acción</h2>
            <div className="bg-muted/30 border border-border rounded-lg p-8 md:p-12">
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-primary">1</div>
                  <div>
                    <p className="font-semibold text-foreground">Cliente escribe</p>
                    <p className="text-sm">(WhatsApp, web, email, SMS)</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div>
                    <p className="font-semibold text-foreground">Conversational Agent entiende</p>
                    <p className="text-sm">(Procesamiento de lenguaje natural + contexto)</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div>
                    <p className="font-semibold text-foreground">Intention Detection + Routing</p>
                    <p className="text-sm">¿Es venta? ¿Support? ¿Operación? ¿Escalado?</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div>
                    <p className="font-semibold text-foreground">Acciones automáticas en tus sistemas</p>
                    <p className="text-sm">CRM update → Pipeline entry → Order creation → Automation trigger</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div>
                    <p className="font-semibold text-foreground">Data stored + Feedback loop</p>
                    <p className="text-sm">Cada decisión queda registrada. El agente aprende. Tu equipo optimiza.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-24 bg-muted/30 px-4 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="h2-light mb-12 text-center">Capacidades Core</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border border-border rounded-lg p-6 bg-card">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Conversaciones Inteligentes</h3>
                <p className="text-sm text-muted-foreground">Entiende contexto, mantiene memoria, personaliza respuestas. No templates.</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Revenue Attribution</h3>
                <p className="text-sm text-muted-foreground">Sigue cada conversación de inicio a cierre. Sabes qué genera revenue.</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <Workflow className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Integración Total</h3>
                <p className="text-sm text-muted-foreground">Conecta con CRM, ERP, webhooks, APIs. Tu stack funciona unificado.</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Modo Híbrido</h3>
                <p className="text-sm text-muted-foreground">Agent maneja lo rutinario. Humanos manejan lo estratégico. Mejor UX.</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Optimización Continua</h3>
                <p className="text-sm text-muted-foreground">Machine learning feedback. El agente mejora cada día. Tú defines el goal.</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Control Total</h3>
                <p className="text-sm text-muted-foreground">Auditoría completa. Cada decisión del agente queda registrada. Governance asegurado.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="h2-light mb-6">¿Listo para transformar tus conversaciones?</h2>
            <p className="body-lg text-muted-foreground mb-8">
              Conversational Intelligence Systems no es una herramienta. Es infraestructura. 
              Comienza con un piloto en una vertical, valida resultados, escala a operaciones completas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/como-trabajamos" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Ver Metodología
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
