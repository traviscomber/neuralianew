import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { isValidLocale, DEFAULT_LOCALE } from '@/lib/get-locale'
import type { Locale } from '@/content/dictionaries'
import { Footer } from '@/components/layout/footer'

interface PageProps { params: { locale: string } }

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"
  return {
    title: isES ? "¿Qué son los Agentes de IA? Guía Completa para Empresarios | N3uralia" : "What are AI Agents? Complete Guide for Business Owners | N3uralia",
    description: isES ? "Guía completa sobre qué son los agentes de IA, cómo funcionan, y por qué tu empresa chilena los necesita. Diferencias con chatbots y RPA." : "Complete guide on what AI agents are, how they work, and why your Chilean business needs them. Differences with chatbots and RPA.",
    keywords: isES ? "qué son agentes ia, agentes inteligencia artificial, definición agentes ia" : "what are AI agents, AI agent definition",
  }
}

export default function QueSonAgentesIAPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <article className="py-20 px-4 pt-32">
        <div className="max-w-2xl mx-auto">
          <Link href={`/${locale}/blog`} className="flex items-center gap-2 text-primary hover:underline mb-8">
            <ChevronLeft className="w-4 h-4" />
            {isES ? "Volver al blog" : "Back to blog"}
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">
            {isES ? "¿Qué son los Agentes de IA? Guía Completa para Empresarios" : "What are AI Agents? Complete Guide for Business Owners"}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {isES ? "Publicado: 29 de Mayo, 2026 • 5 min lectura" : "Published: May 29, 2026 • 5 min read"}
          </p>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "Definición simple" : "Simple definition"}</h2>
              <p>
                {isES
                  ? "Un agente de IA es un sistema inteligente que puede tomar decisiones y ejecutar tareas de forma autónoma, sin necesidad de que un humano le diga exactamente qué hacer en cada momento. Los agentes pueden percibir su entorno, analizar información, planificar acciones y aprender de la experiencia."
                  : "An AI agent is an intelligent system that can make decisions and execute tasks autonomously, without needing a human to tell it exactly what to do at each moment. Agents can perceive their environment, analyze information, plan actions, and learn from experience."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "Diferencias clave" : "Key differences"}</h2>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <h3 className="font-bold text-foreground mb-2">{isES ? "Chatbots" : "Chatbots"}</h3>
                  <p>{isES ? "Responden preguntas basadas en patrones. Limitados a conversación. Sin autonomía real." : "Answer questions based on patterns. Limited to conversation. No real autonomy."}</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <h3 className="font-bold text-foreground mb-2">{isES ? "Agentes IA" : "AI Agents"}</h3>
                  <p>{isES ? "Toman decisiones, ejecutan acciones, usan herramientas. Pueden trabajar 24/7 sin supervisión. Aprenden y mejoran con el tiempo." : "Make decisions, execute actions, use tools. Can work 24/7 without supervision. Learn and improve over time."}</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <h3 className="font-bold text-foreground mb-2">{isES ? "RPA (Automatización)" : "RPA (Automation)"}</h3>
                  <p>{isES ? "Automatiza tareas repetitivas siguiendo reglas predefinidas. Inflexible. No aprende. Bueno para procesos muy estructurados." : "Automates repetitive tasks following rules. Inflexible. Doesn't learn. Good for structured processes."}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "Cómo funcionan en la práctica" : "How they work in practice"}</h2>
              <p>
                {isES
                  ? "Supongamos que tu empresa tiene un agente de IA para servicio al cliente. Un cliente escribe: 'Quiero cambiar mi orden'. El agente:"
                  : "Suppose your company has an AI agent for customer service. A customer writes: 'I want to change my order'. The agent:"}
              </p>
              <ol className="list-decimal list-inside space-y-2 mt-3">
                {(isES
                  ? [
                    "Lee el mensaje y entiende la intención",
                    "Busca el orden en tu base de datos",
                    "Verifica si el cambio es posible",
                    "Ejecuta el cambio automáticamente",
                    "Confirma al cliente y registra la acción"
                  ]
                  : [
                    "Reads the message and understands the intent",
                    "Looks up the order in your database",
                    "Verifies if the change is possible",
                    "Executes the change automatically",
                    "Confirms to the customer and logs the action"
                  ]
                ).map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "Beneficios para empresas chilenas" : "Benefits for Chilean companies"}</h2>
              <ul className="space-y-2">
                {(isES
                  ? [
                    "Operación 24/7 sin supervisión humana",
                    "Reducción de costos operativos 40-70%",
                    "Velocidad: respuestas en segundos, no días",
                    "Escalabilidad: maneja miles de solicitudes simultáneamente",
                    "Mejora continua: el sistema aprende y se optimiza"
                  ]
                  : [
                    "24/7 operation without human supervision",
                    "40-70% reduction in operating costs",
                    "Speed: responses in seconds, not days",
                    "Scalability: handles thousands of requests simultaneously",
                    "Continuous improvement: system learns and optimizes"
                  ]
                ).map((benefit, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "¿Para qué industrias?" : "For which industries?"}</h2>
              <p>
                {isES
                  ? "Agentes IA funcionan para prácticamente cualquier industria. Los casos más exitosos en Chile son:"
                  : "AI agents work for virtually any industry. The most successful cases in Chile are:"}
              </p>
              <ul className="space-y-2 mt-3">
                {(isES
                  ? ["Retail: atención 24/7, gestión de órdenes", "Minería: predictive maintenance, análisis de datos", "Logística: optimización de rutas, tracking", "Turismo: reservas, atención multiidioma", "Finanzas: procesamiento de solicitudes"]
                  : ["Retail: 24/7 support, order management", "Mining: predictive maintenance, data analysis", "Logistics: route optimization, tracking", "Tourism: reservations, multilingual support", "Finance: request processing"]
                ).map((industry, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "Siguientes pasos" : "Next steps"}</h2>
              <p>
                {isES
                  ? "Si crees que agentes IA pueden ayudar a tu empresa, el siguiente paso es diagnosticar qué procesos puedes automatizar y calcular el ROI específico para tu negocio."
                  : "If you think AI agents can help your business, the next step is to diagnose which processes you can automate and calculate the specific ROI for your business."}
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href={`/${locale}/agentes-ia-chile`}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-block"
            >
              {isES ? "Ver soluciones para tu empresa" : "See solutions for your company"}
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
