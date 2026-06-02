"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, TrendingUp, Clock, Users } from "lucide-react"
import { Footer } from "@/components/layout/footer"

interface CapabilitiesPageClientProps {
  locale: 'es' | 'en'
}

export function CapabilitiesPageClient({ locale }: CapabilitiesPageClientProps) {
  const isES = locale === 'es'
  const href = (path: string) => `/${locale}${path}`

  const outcomes = [
    {
      titleES: "Operación Hotelera",
      titleEN: "Hotel Operations",
      problem: { es: "4 horas de espera en reservas", en: "4 hours booking wait time" },
      result: { es: "15 minutos", en: "15 minutes" },
      impact: { es: "Satisfacción de cliente: 40% mejor", en: "Customer satisfaction: 40% improvement" },
      metric: "-86%",
    },
    {
      titleES: "Retail & E-commerce",
      titleEN: "Retail & E-commerce",
      problem: { es: "Falta de reabastecimiento = pérdida de ventas", en: "Stockouts = lost sales" },
      result: { es: "Reabastecimiento automático", en: "Automated replenishment" },
      impact: { es: "Conversión: +14% | Costos: -8%", en: "Conversion: +14% | Costs: -8%" },
      metric: "+$2.1M",
    },
    {
      titleES: "Minería",
      titleEN: "Mining Operations",
      problem: { es: "Paradas no planificadas = pérdida de $500K/día", en: "Unplanned downtime = $500K/day loss" },
      result: { es: "Mantenimiento predictivo", en: "Predictive maintenance" },
      impact: { es: "Disponibilidad: 99.2% → 99.8%", en: "Uptime: 99.2% → 99.8%" },
      metric: "-$1.8M",
    },
    {
      titleES: "Logística",
      titleEN: "Supply Chain",
      problem: { es: "Incidencias de SLA sin visibilidad", en: "No visibility into SLA incidents" },
      result: { es: "Control tower con alertas",  en: "Control tower with alerts" },
      impact: { es: "OTIF mejorado | Costos operacionales: -12%", en: "OTIF improved | Operating costs: -12%" },
      metric: "-18.2%",
    },
  ]

  const capabilities = [
    {
      titleES: "Automatización Conversacional",
      titleEN: "Conversational Automation",
      descES: "Diálogos naturales que resuelven problemas sin intervención manual",
      descEN: "Natural conversations that solve problems without manual intervention",
      exampleES: "Cliente reserva sin llenar formularios. Sistema entiende necesidades, propone opciones.",
      exampleEN: "Customer books without forms. System understands needs, proposes options.",
      icon: Users,
    },
    {
      titleES: "Toma de Decisiones Inteligente",
      titleEN: "Intelligent Decision Making",
      descES: "Analiza contexto, datos históricos y predicciones para decidir en tiempo real",
      descEN: "Analyzes context, historical data and predictions to decide in real-time",
      exampleES: "Sistema decide: ¿Es cliente VIP? ¿Es primavera? ¿Hay stock? → Ofrece descuento dinámico.",
      exampleEN: "System decides: VIP customer? Spring season? Stock available? → Offers dynamic discount.",
      icon: TrendingUp,
    },
    {
      titleES: "Escalamiento Inteligente a Humanos",
      titleEN: "Smart Human Escalation",
      descES: "Solo llama a un humano cuando realmente es necesario, con contexto completo",
      descEN: "Only involves a human when truly necessary, with complete context",
      exampleES: "Cliente furioso requiere gerente: sistema prepara dossier, resuelve en 2 minutos.",
      exampleEN: "Angry customer needs manager: system prepares briefing, resolves in 2 minutes.",
      icon: Clock,
    },
    {
      titleES: "Aprendizaje Continuo",
      titleEN: "Continuous Learning",
      descES: "Cada interacción mejora el sistema. Se adapta a tu negocio específico.",
      descEN: "Every interaction improves the system. Adapts to your specific business.",
      exampleES: "Después de 1000 chats: entiende jerga local, detecta patrones ocultos, anticipa problemas.",
      exampleEN: "After 1000 chats: understands local language, detects hidden patterns, anticipates issues.",
      icon: CheckCircle2,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">{isES ? "Cómo Funcionamos" : "How We Work"}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance text-foreground">
            {isES 
              ? "Capacidades que Transforman tu Operación" 
              : "Capabilities That Transform Your Operations"}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {isES 
              ? "No es sobre tecnología. Es sobre resultados medibles: menos costos, más ingresos, clientes más felices."
              : "It's not about technology. It's about measurable results: lower costs, more revenue, happier customers."}
          </p>
          <Link href={href("/contact")} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            {isES ? "Ver caso de éxito" : "See success story"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isES ? "Lo Que Sucede en Producción" : "Real Results in Production"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isES 
                ? "Empresas chilenas que ya ven el impacto"
                : "Chilean companies already seeing the impact"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all">
                <h3 className="font-bold text-lg mb-6 text-foreground">{isES ? outcome.titleES : outcome.titleEN}</h3>
                
                {/* Before → After */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">{isES ? "Problema" : "Problem"}</p>
                    <p className="text-sm font-semibold text-foreground">{isES ? outcome.problem.es : outcome.problem.en}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">{isES ? "Resultado" : "Result"}</p>
                    <p className="text-sm font-semibold text-primary">{outcome.result.es || outcome.result.en}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-xs text-muted-foreground mb-2">{isES ? "Impacto" : "Impact"}</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-primary">{outcome.metric}</p>
                    <p className="text-sm text-foreground">{isES ? outcome.impact.es : outcome.impact.en}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-16 px-4 bg-primary/5 border-t border-primary/20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isES ? "4 Capacidades Clave" : "4 Core Capabilities"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isES 
                ? "Esto es lo que hace N3uralia diferente en Chile"
                : "This is what makes N3uralia different in Chile"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon
              return (
                <div key={idx} className="p-8 bg-background border border-primary/20 rounded-lg hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{isES ? cap.titleES : cap.titleEN}</h3>
                      <p className="text-sm text-muted-foreground">{isES ? cap.descES : cap.descEN}</p>
                    </div>
                  </div>
                  <div className="pl-10 pt-4 border-l-2 border-primary/20">
                    <p className="text-sm italic text-muted-foreground">
                      {isES ? cap.exampleES : cap.exampleEN}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why N3uralia for Chile */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {isES ? "¿Por Qué N3uralia en Chile?" : "Why N3uralia in Chile?"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-primary/20 bg-primary/5">
              <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold mb-2 text-foreground">
                {isES ? "Entiende el Contexto Local" : "Understands Local Context"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isES 
                  ? "Adaptado a regulaciones chilenas, horarios, comportamientos y jerga local"
                  : "Adapted to Chilean regulations, schedules, behaviors and local terminology"}
              </p>
            </div>

            <div className="p-6 rounded-lg border border-primary/20 bg-primary/5">
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold mb-2 text-foreground">
                {isES ? "Resultados Medibles" : "Measurable Results"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isES 
                  ? "No promesas. Vemos los números: costos, ingresos, satisfacción de clientes"
                  : "Not promises. We see the numbers: costs, revenue, customer satisfaction"}
              </p>
            </div>

            <div className="p-6 rounded-lg border border-primary/20 bg-primary/5">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold mb-2 text-foreground">
                {isES ? "4 Semanas en Producción" : "4 Weeks to Production"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isES 
                  ? "No años de implementación. Vemos valor en el mes 1, mejora continua después"
                  : "Not years of implementation. See value in month 1, continuous improvement after"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {isES ? "¿Tu operación es la próxima?" : "Could your operation be next?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {isES 
              ? "Descubre en 30 minutos cómo N3uralia puede transformar tu negocio" 
              : "Discover in 30 minutes how N3uralia can transform your business"}
          </p>
          <Link href={href("/contact")} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            {isES ? "Agendar llamada" : "Schedule call"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
