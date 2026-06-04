import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, Zap, Users, BarChart3, Workflow, Shield, TrendingUp } from "lucide-react"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  const canonical = `https://n3uralia.com/${locale}/conversational-intelligence`

  return {
    title: "Conversational Intelligence Systems | N3uralia - Revenue + Operations + Agents",
    description:
      "N3uralia Conversational Intelligence Systems transforman conversaciones en infraestructura operativa. Agentes conversacionales integrados en adquisición, operaciones y revenue con atribución real. B2B, Turismo, Eventos, Manufactura.",
    keywords:
      "conversational intelligence, conversational agents, sistemas conversacionales, revenue operations, customer intelligence, conversational AI, B2B automation, turismo, eventos, glamping, agentes conversacionales, n3uralia",
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
      type: 'website',
    },
  }
}

export default function ConversationalIntelligencePage() {
  return (
    <>
      <main className="min-h-screen bg-background">





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
                Agendar diagnóstico (30 min) <ArrowRight className="w-4 h-4 ml-2" />
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
