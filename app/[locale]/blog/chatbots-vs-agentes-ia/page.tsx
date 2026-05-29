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
    title: isES ? "Chatbots vs Agentes IA: ¿Cuál Necesita tu Empresa? | N3uralia" : "Chatbots vs AI Agents: Which Does Your Business Need? | N3uralia",
    description: isES ? "Comparación completa: chatbots vs agentes IA vs RPA. Ventajas, costos, casos de uso. Descubre cuál es la solución correcta para tu empresa." : "Complete comparison: chatbots vs AI agents vs RPA. Advantages, costs, use cases. Discover the right solution for your business.",
    keywords: isES ? "chatbot vs agentes, diferencia chatbot agente, chatbot IA" : "chatbots vs agents, difference chatbot agent",
  }
}

export default function ChatbotsVsAgentesPage({ params }: PageProps) {
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
            {isES ? "Chatbots vs Agentes de IA: ¿Cuál Necesita tu Empresa?" : "Chatbots vs AI Agents: Which Does Your Business Need?"}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {isES ? "Publicado: 29 de Mayo, 2026 • 7 min lectura" : "Published: May 29, 2026 • 7 min read"}
          </p>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "La confusión común" : "The common confusion"}</h2>
              <p>{isES ? "Muchas empresas creen que 'chatbot' y 'agente IA' son lo mismo. No lo son. Es como confundir una calculadora con una computadora." : "Many companies think 'chatbot' and 'AI agent' are the same. They're not. It's like confusing a calculator with a computer."}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "Tabla comparativa" : "Comparison table"}</h2>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <h3 className="font-bold text-foreground mb-2">{isES ? "Chatbots" : "Chatbots"}</h3>
                  <p className="text-sm">{isES ? "• Responden preguntas\n• Conversación limitada\n• Sin decisiones reales\n• Costo: $5K-20K implementación" : "• Answer questions\n• Limited conversation\n• No real decisions\n• Cost: $5K-20K implementation"}</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <h3 className="font-bold text-foreground mb-2">{isES ? "Agentes IA" : "AI Agents"}</h3>
                  <p className="text-sm">{isES ? "• Toman decisiones autónomas\n• Ejecutan acciones\n• Aprenden continuamente\n• Costo: $30K-150K+ (ROI justificado)" : "• Make autonomous decisions\n• Execute actions\n• Learn continuously\n• Cost: $30K-150K+ (justified ROI)"}</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <h3 className="font-bold text-foreground mb-2">{isES ? "RPA" : "RPA"}</h3>
                  <p className="text-sm">{isES ? "• Automatiza tareas repetitivas\n• Sigue reglas predefinidas\n• Sin capacidad de aprender\n• Costo: $20K-100K (procesos estructurados)" : "• Automates repetitive tasks\n• Follows predefined rules\n• Cannot learn\n• Cost: $20K-100K (structured processes)"}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "¿Cuándo usar cada uno?" : "When to use each one?"}</h2>
              <p>{isES ? "Depende de tu caso de uso:" : "It depends on your use case:"}</p>
              <ul className="space-y-2 mt-3">
                {(isES
                  ? ["Chatbot: Solo responder FAQs, sin acciones", "Agente IA: Procesos complejos, decisiones autónomas, ROI > $100K", "RPA: Tareas muy estructuradas, procesos predefinidos"]
                  : ["Chatbot: Only answer FAQs, no actions", "AI Agent: Complex processes, autonomous decisions, ROI > $100K", "RPA: Very structured tasks, predefined processes"]
                ).map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "Caso real: Por qué elegimos agentes IA" : "Real case: Why we chose AI agents"}</h2>
              <p>{isES ? "Una empresa de retail en Santiago consideraba un chatbot para atención al cliente. Nuestro análisis mostró que necesitaban más que respuestas: necesitaban procesar cambios de órdenes, procesar devoluciones, y escalar a humanos cuando fuera necesario. Resultado: Agentes IA, 70% reducción de costos, ROI en 6 meses." : "A retail company in Santiago considered a chatbot for customer support. Our analysis showed they needed more than answers: they needed to process order changes, handle returns, and escalate to humans when needed. Result: AI agents, 70% cost reduction, ROI in 6 months."}</p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href={`/${locale}/agentes-ia-chile`} className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-block">
              {isES ? "Diagnosticar tu solución ideal" : "Diagnose your ideal solution"}
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
