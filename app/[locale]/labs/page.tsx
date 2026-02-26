import Link from "next/link"
import { ArrowRight, Beaker, Lightbulb, Rocket } from "lucide-react"
import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'

  const titles = {
    es: "N3uralia Labs | Investigación e Innovación en IA",
    en: "N3uralia Labs | AI Research & Innovation",
  }

  const descriptions = {
    es: "Investigación de vanguardia en sistemas agenticos, orquestación multi-agente, y IA en producción.",
    en: "Cutting-edge research in agentic systems, multi-agent orchestration, and AI in production.",
  }

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
  }
}

export default function LabsPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'
  const href = (path: string) => `/${locale}${path}`

  const research = {
    es: [
      { title: "Investigación en IA Agentica", desc: "Explorando la frontera de sistemas multi-agente y arquitecturas agenticas", icon: Beaker },
      { title: "Memoria y Aprendizaje", desc: "Sistemas avanzados de memoria para retención de conocimiento y evolución de agentes", icon: Lightbulb },
      { title: "Orquestación en Producción", desc: "Llevando sistemas agenticos de investigación a producción empresarial", icon: Rocket },
    ],
    en: [
      { title: "Agentic AI Research", desc: "Exploring the frontier of multi-agent systems and agentic architectures", icon: Beaker },
      { title: "Memory & Learning", desc: "Advanced memory systems for agent knowledge retention and evolution", icon: Lightbulb },
      { title: "Production Orchestration", desc: "Bringing agentic systems from research to enterprise production", icon: Rocket },
    ],
  }

  const researchAreas = {
    es: [
      "Coordinación y orquestación multi-agente",
      "Sistemas de memoria persistente para agentes",
      "Toma de decisiones distribuida y consenso",
      "Integración con sistemas empresariales legacy",
      "Seguridad y gobernanza en sistemas autónomos",
    ],
    en: [
      "Multi-agent coordination and orchestration",
      "Persistent memory systems for agents",
      "Distributed decision-making and consensus",
      "Integration with enterprise legacy systems",
      "Security and governance in autonomous systems",
    ],
  }

  const labels = {
    research: isES ? "Investigación e Innovación" : "Research & Innovation",
    title: isES ? "N3uralia Labs" : "N3uralia Labs",
    subtitle: isES 
      ? "Investigación de vanguardia en sistemas agenticos, desafiando los límites de lo posible con IA en producción."
      : "Cutting-edge research in agentic systems, pushing the boundaries of what's possible with AI in production.",
    areas: isES ? "Áreas de Investigación Actual" : "Current Research Areas",
    cta: isES ? "Contactar" : "Contact",
  }

  const currentResearch = isES ? research.es : research.en
  const currentAreas = isES ? researchAreas.es : researchAreas.en

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <Beaker className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{labels.research}</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">{labels.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {labels.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {currentResearch.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-colors">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">{labels.areas}</h2>
            <div className="space-y-4">
              {currentAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-card/50 hover:border-primary/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-border text-center">
            <Link href={href("/contact")} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              {labels.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
                "Emergent behavior in agentic systems",
                "Long-term memory and knowledge persistence",
                "Safe agent deployment and governance",
                "Real-time adaptation and learning",
              ].map((area, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border border-border/50 rounded-lg bg-card">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join our research initiatives</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            Collaborate with Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
