import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FlaskConical, Lightbulb, Shield, Wrench } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

function href(locale: Locale, path: string) {
  return `/${locale}${path}`
}

const content = {
  es: {
    metadataTitle: "Labs | N3uralia",
    metadataDescription:
      "Labs de N3uralia: exploracion aplicada de IA, workflows, interfaces y componentes antes de llevarlos a produccion.",
    title: "Labs es donde probamos ideas antes de pedirle a una operacion que confie en ellas",
    subtitle:
      "No todo experimento merece llegar a produccion. En Labs validamos piezas, patrones e interfaces hasta que tienen suficiente sentido tecnico y operacional.",
    blocks: [
      {
        title: "Exploracion aplicada",
        description: "Probamos nuevos enfoques de agentes, memoria, interfaces y automatizacion con un criterio claro de utilidad.",
        icon: Lightbulb,
      },
      {
        title: "Prototipos revisables",
        description: "Armamos demostraciones y pruebas que nos ayudan a aprender rapido sin vender humo antes de tiempo.",
        icon: FlaskConical,
      },
      {
        title: "Criterio de produccion",
        description: "Solo empujamos hacia producto lo que demuestra valor, control y sostenibilidad tecnica.",
        icon: Shield,
      },
    ],
    ctaTitle: "Si quieres ver como pensamos antes de construir, este es un buen punto de entrada",
    primaryCta: "Ver estudios",
    secondaryCta: "Hablar con el equipo",
  },
  en: {
    metadataTitle: "Labs | N3uralia",
    metadataDescription:
      "N3uralia Labs: applied exploration of AI, workflows, interfaces, and components before they move into production.",
    title: "Labs is where we test ideas before asking an operation to trust them",
    subtitle:
      "Not every experiment deserves production. In Labs we validate components, patterns, and interfaces until they make enough technical and operational sense.",
    blocks: [
      {
        title: "Applied exploration",
        description: "We test new approaches to agents, memory, interfaces, and automation with a clear utility filter.",
        icon: Lightbulb,
      },
      {
        title: "Reviewable prototypes",
        description: "We build demos and experiments that help us learn fast without overselling too early.",
        icon: FlaskConical,
      },
      {
        title: "Production judgment",
        description: "We only push toward product what shows value, control, and technical sustainability.",
        icon: Shield,
      },
    ],
    ctaTitle: "If you want to see how we think before we build, this is a good entry point",
    primaryCta: "View studies",
    secondaryCta: "Talk to the team",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/labs`,
      languages: {
        es: "https://n3uralia.com/es/labs",
        en: "https://n3uralia.com/en/labs",
      },
    },
  }
}

export default function LabsPage({ params }: PageProps) {
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
              {page.blocks.map((block) => {
                const Icon = block.icon
                return (
                  <div key={block.title} className="rounded-lg border border-border bg-card p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">{block.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{block.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-8">{page.ctaTitle}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={href(locale, "/studies")}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
              >
                {page.primaryCta}
              </Link>
              <Link
                href={href(locale, "/contact")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                {page.secondaryCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
