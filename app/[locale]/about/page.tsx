import { Zap, Shield, Users, Target } from "lucide-react"
import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { AboutPageClient } from "@/components/about/about-page-client"
import { SectionBackground } from "@/components/section-background"
import { Footer } from "@/components/Footer"

interface PageProps {
  params: { locale: string }
}

export const metadata: Metadata = {
  title: "Acerca de N3uralia | Neuralia - Visión, Misión, AI Agents, Sistemas Agenticos Fullstack",
  description: "N3uralia (Neuralia): por qué construimos una plataforma de sistemas agenticos y AI agents diferente. Filosofía, visión, valores. Inteligencia aumentada fullstack, no reemplazo. Cómo trabajamos con empresas chilenas.",
  keywords: "acerca de n3uralia, neuralia, misión, visión, AI agents, sistemas agenticos, fullstack, ingeniería, valores, filosofía",
}

export default function AboutPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const d = getDict(locale)
  const isES = locale === "es"

  const values = [
    {
      icon: Zap,
      titleES: "Ingeniería Rigurosa",
      titleEN: "Rigorous Engineering",
      descES: "La IA es ingeniería, no magia. Sistemas predecibles, rastreables, gobernados. Cada decisión es auditable.",
      descEN: "AI is engineering, not magic. Predictable, traceable, governed systems. Every decision is auditable.",
    },
    {
      icon: Users,
      titleES: "Expansión Humana",
      titleEN: "Human Expansion",
      descES: "Tecnología que amplifica capacidades humanas. Ayuda a equipos a hacer más, no menos. Colaboración, no reemplazo.",
      descEN: "Technology that amplifies human capabilities. Helps teams do more, not less. Collaboration, not replacement.",
    },
    {
      icon: Shield,
      titleES: "Responsabilidad Radical",
      titleEN: "Radical Accountability",
      descES: "Cada agente, cada decisión, completamente rastreable. Gobernanza no es fricción—es requisito no-negociable.",
      descEN: "Every agent, every decision, fully traceable. Governance is not friction—it's a non-negotiable requirement.",
    },
    {
      icon: Target,
      titleES: "Resultados Medibles",
      titleEN: "Measurable Results",
      descES: "No evangelizamos IA. Medimos impacto real: eficiencia, ingresos, satisfacción. Resultados concretos, no promesas.",
      descEN: "We don't evangelize AI. We measure real impact: efficiency, revenue, satisfaction. Concrete results, not promises.",
    },
  ]

  const philosophy = [
    {
      numES: "1. Tecnología Grounded",
      numEN: "1. Grounded Technology",
      descES: "La IA no es magia. Es ingeniería. Sistemas que son predecibles, rastreables, y completamente gobernados. Sin hype, solo arquitectura que funciona en el mundo real.",
      descEN: "AI is not magic. It's engineering. Systems that are predictable, traceable, and fully governed. No hype, just architecture that works in the real world.",
    },
    {
      numES: "2. Expansión, No Reemplazo",
      numEN: "2. Expansion, Not Replacement",
      descES: "La IA que vale la pena expande capacidades humanas. Permite que equipos hagan más, no menos. No construimos para reemplazar—construimos para amplificar.",
      descEN: "AI worth having expands human capabilities. It enables teams to do more, not less. We don't build to replace—we build to amplify.",
    },
    {
      numES: "3. Arquitectura sobre Herramientas",
      numEN: "3. Architecture Over Tools",
      descES: "Los chatbots responden preguntas. Los sistemas agenticos construyen infraestructura organizacional. Hay una diferencia fundamental entre una herramienta y una arquitectura.",
      descEN: "Chatbots answer questions. Agentic systems build organizational infrastructure. There's a fundamental difference between a tool and an architecture.",
    },
    {
      numES: "4. Responsabilidad Radical",
      numEN: "4. Radical Responsibility",
      descES: "Cada decisión de cada agente debe ser rastreable, explicable, y auditable. Gobernanza no es fricción—es un requisito no-negociable de sistemas responsables.",
      descEN: "Every decision of every agent must be traceable, explainable, and auditable. Governance isn't friction—it's a non-negotiable requirement of responsible systems.",
    },
    {
      numES: "5. Evolución Continua",
      numEN: "5. Continuous Evolution",
      descES: "Los sistemas vivos aprenden. Living Agents no son estáticos. Mejoran con cada interacción, adaptándose a contexto, retroalimentación y experiencia.",
      descEN: "Living systems learn. Living Agents aren't static. They improve with every interaction, adapting to context, feedback, and experience.",
    },
  ]

  return (
    <>
      <main className="min-h-screen pt-16 bg-background">
        <SectionBackground section="hero" className="border-b border-border">
          {/* Hero Section */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
                {isES ? "Quiénes Somos" : "Who We Are"}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">N3uralia</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isES
                  ? "Construimos arquitecturas de inteligencia autónoma que amplifican capacidades humanas. No es IA que reemplaza. Es IA que expande. Sistemas que funcionan con humanos, no contra ellos."
                  : "We build autonomous intelligence architectures that amplify human capabilities. Not AI that replaces. AI that expands. Systems that work with humans, not against them."}
              </p>
            </div>
          </section>
        </SectionBackground>

        <SectionBackground section="workflow" className="border-b border-border">
          {/* Mission Section */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="mb-20">
                <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
                  {isES ? "Nuestro Por Qué" : "Our Why"}
                </p>
                <h2 className="text-4xl font-bold text-foreground mb-8 leading-tight">
                  {isES ? "La Visión Que Nos Guía" : "The Vision That Guides Us"}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {isES
                    ? "Creemos que la IA debería ser diferente. No más chatbots respondiendo preguntas aisladas. No más herramientas que requieren supervisión constante. No más sistemas que reemplazan humanos."
                    : "We believe AI should be different. No more chatbots answering isolated questions. No more tools requiring constant oversight. No more systems that replace humans."}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {isES
                    ? "Imaginamos sistemas inteligentes que coordinan autonomía con gobernanza. Agentes que son especializados pero colaborativos. Arquitectura que escala sin complejidad exponencial."
                    : "We envision intelligent systems that coordinate autonomy with governance. Agents that are specialized yet collaborative. Architecture that scales without exponential complexity."}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {isES
                    ? "Existimos para que eso sea posible. Arquitectura que funciona. Ingeniería rigurosa. Responsabilidad radical. Sistema vivo que aprende y evoluciona."
                    : "We exist to make that possible. Architecture that works. Rigorous engineering. Radical accountability. Living systems that learn and evolve."}
                </p>
              </div>
            </div>
          </section>
        </SectionBackground>

        <SectionBackground section="solutions" className="border-b border-border">
          {/* Philosophy Section */}
          <section className="py-24">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="mb-20">
                <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
                  {isES ? "Nuestra Filosofía" : "Our Philosophy"}
                </p>
                <h2 className="text-4xl font-bold text-foreground mb-8 leading-tight">
                  {isES ? "Cómo Pensamos Diferente" : "How We Think Differently"}
                </h2>

                <div className="space-y-8">
                  {philosophy.map((item, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {isES ? item.numES : item.numEN}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {isES ? item.descES : item.descEN}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        <SectionBackground section="capabilities" className="border-t border-border">
          {/* Values Section */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
                  {isES ? "Nuestro Enfoque" : "Our Approach"}
                </p>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  {isES ? "Cómo Trabajamos" : "How We Work"}
                </h2>
                <p className="text-base text-muted-foreground">
                  {isES
                    ? "Estas no son solo palabras en una pared. Es cómo operamos, todos los días."
                    : "These aren't just words on a wall. It's how we operate, every single day."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, i) => {
                  const Icon = value.icon
                  return (
                    <div key={i} className="group">
                      <div className="bg-card border border-border rounded-lg p-8 h-full hover:border-primary/40 transition-colors">
                        <Icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {isES ? value.titleES : value.titleEN}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {isES ? value.descES : value.descEN}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isES
                ? "No somos perfectos, pero estamos comprometidos. Comprometidos con tu éxito, con construir con integridad, y con hacer la IA accesible. Ese es N3uralia."
                : "We're not perfect, but we're committed. Committed to your success, to building with integrity, and to making AI accessible. That's N3uralia."}
            </p>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  )
}
