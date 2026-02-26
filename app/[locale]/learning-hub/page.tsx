import Link from "next/link"
import { ArrowRight, Brain, BookOpen, Zap } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { SectionBackground } from "@/components/section-background"

export const metadata: Metadata = {
  title: "Centro de Aprendizaje - N3uralia | Conceptos y Guías de IA",
  description:
    "Centro de Aprendizaje de N3uralia: Conceptos fundamentales sobre Agentic AI, Living Agents, guías técnicas y casos de estudio sobre sistemas inteligentes en producción.",
  keywords:
    "learning hub, centro de aprendizaje, conceptos IA, agentes inteligentes, Living Agents, guías técnicas",
  openGraph: {
    title: "Centro de Aprendizaje - N3uralia",
    description: "Aprende sobre IA y sistemas inteligentes",
    type: "website",
    locale: "es_CL",
  },
}

export default function LearningHubPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <SectionBackground section="hero" className="border-b border-border">
        {/* Hero Section */}
        <section className="py-20 border-b border-border px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Centro de Aprendizaje</span>
            </div>

            <h1 className="h1-light mb-4">
              Domina Sistemas Inteligentes
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Desde conceptos fundamentales hasta implementación en producción. Aprende cómo construir agentes IA que escalan.
            </p>
          </div>
        </section>
        </SectionBackground>

        <SectionBackground section="blog" className="border-t border-border">
        {/* Main Resources */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="h2-light mb-12 text-center">Recursos de Aprendizaje</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Conceptos */}
              <Link href="/studies">
                <div className="group h-full p-8 rounded-lg border border-border bg-gradient-to-br from-primary/10 to-primary/5 hover:border-primary/40 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <Brain className="w-8 h-8 text-primary" />
                    <span className="text-xs font-semibold text-muted-foreground">5 Temas</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Conceptos Fundamentales</h3>
                  <p className="text-sm text-muted-foreground mb-6">Agentic AI, AI Memory, Context Engineering y más. Fundamentos de sistemas inteligentes.</p>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">Explorar Estudios</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Guías Técnicas */}
              <Link href="/blog">
                <div className="group h-full p-8 rounded-lg border border-border bg-gradient-to-br from-blue-500/10 to-blue-500/5 hover:border-primary/40 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                    <span className="text-xs font-semibold text-muted-foreground">6+ Artículos</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Guías Técnicas</h3>
                  <p className="text-sm text-muted-foreground mb-6">Artículos sobre orquestación, governance y patrones de implementación en producción.</p>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">Leer Blog</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Resultados */}
              <Link href="/outcomes">
                <div className="group h-full p-8 rounded-lg border border-border bg-gradient-to-br from-green-500/10 to-green-500/5 hover:border-primary/40 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                    <span className="text-xs font-semibold text-muted-foreground">Casos Reales</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Resultados y Recursos</h3>
                  <p className="text-sm text-muted-foreground mb-6">Ver casos de éxito, métricas de implementación y recursos técnicos disponibles.</p>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">Ver Resultados</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 px-4 border-t border-border bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="h2-light mb-8 text-center">Comienza tu Viaje de Aprendizaje</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-lg border border-border bg-card">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Aprende los Conceptos</h3>
                  <p className="text-sm text-muted-foreground">Comienza con los fundamentos de Agentic AI y Living Agents en nuestros estudios.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-4 rounded-lg border border-border bg-card">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Explora Guías Técnicas</h3>
                  <p className="text-sm text-muted-foreground">Profundiza con artículos sobre implementación, governance y patrones en producción.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-4 rounded-lg border border-border bg-card">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Contacta el Equipo</h3>
                  <p className="text-sm text-muted-foreground">¿Preguntas? Nuestro equipo está disponible para ayudarte a implementar.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Contactar con el Equipo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        </SectionBackground>

        <Footer />
      </main>
    </>
  )
}
