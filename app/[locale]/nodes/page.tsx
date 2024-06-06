import type { Metadata } from "next"
import { CheckCircle2, Network, Shield, Zap } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

const content = {
  es: {
    metadataTitle: "Nodos | N3uralia",
    metadataDescription:
      "Nodos especializados para sistemas de IA distribuidos: coordinacion, resiliencia y responsabilidades claras por componente.",
    title: "Nodos especializados para sistemas que necesitan repartir trabajo con criterio",
    subtitle:
      "Un nodo no es solo otra pieza tecnica. Es una unidad con una responsabilidad clara, una interfaz comprensible y una forma concreta de fallar o escalar.",
    cards: [
      {
        title: "Responsabilidad clara",
        description: "Cada nodo existe para una tarea especifica, con inputs, outputs y limites definidos.",
        icon: Network,
      },
      {
        title: "Escala por demanda",
        description: "Se replica o se ajusta donde el volumen realmente lo necesita, sin inflar toda la arquitectura.",
        icon: Zap,
      },
      {
        title: "Resiliencia operacional",
        description: "Los fallos se contienen mejor cuando el sistema reparte funciones en componentes entendibles.",
        icon: Shield,
      },
    ],
    rulesTitle: "Lo importante no es tener muchos nodos",
    rules: [
      "Lo importante es que cada uno tenga un rol claro.",
      "Lo importante es que la coordinacion entre nodos sea visible y medible.",
      "Lo importante es que el sistema siga siendo operable para el equipo humano.",
    ],
  },
  en: {
    metadataTitle: "Nodes | N3uralia",
    metadataDescription:
      "Specialized nodes for distributed AI systems: coordination, resilience, and clear responsibilities per component.",
    title: "Specialized nodes for systems that need to distribute work with discipline",
    subtitle:
      "A node is not just another technical piece. It is a unit with a clear responsibility, an understandable interface, and a concrete way to fail or scale.",
    cards: [
      {
        title: "Clear responsibility",
        description: "Each node exists for a specific task, with defined inputs, outputs, and limits.",
        icon: Network,
      },
      {
        title: "Scale by demand",
        description: "It replicates or adjusts where volume actually needs it instead of inflating the entire architecture.",
        icon: Zap,
      },
      {
        title: "Operational resilience",
        description: "Failures are easier to contain when the system distributes functions across understandable components.",
        icon: Shield,
      },
    ],
    rulesTitle: "The point is not to have many nodes",
    rules: [
      "The point is for each one to have a clear role.",
      "The point is for coordination between nodes to stay visible and measurable.",
      "The point is for the system to remain operable for the human team.",
    ],
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/nodes`,
      languages: {
        es: "https://n3uralia.com/es/nodes",
        en: "https://n3uralia.com/en/nodes",
      },
    },
  }
}

export default function NodesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">{page.title}</h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.cards.map((card) => {
                const Icon = card.icon
                return (
                  <div key={card.title} className="rounded-lg border border-border bg-card p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">{card.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow">
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-10 text-center">{page.rulesTitle}</h2>
              <div className="space-y-4">
                {page.rules.map((item) => (
                  <div key={item} className="rounded-lg border border-border bg-background p-6 flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>
      </main>

      <Footer />
    </>
  )
}
