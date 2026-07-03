import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Brain, FileText, GraduationCap } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

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
    metadataTitle: "Learning hub | N3uralia",
    metadataDescription:
      "Centro de aprendizaje de N3uralia con estudios, artículos y recursos sobre IA y operación.",
    badge: "Centro de aprendizaje",
    title: "Recursos para entender cómo construimos IA en producción",
    subtitle: "Ideas, marcos y piezas técnicas para aprender con criterio.",
    areasTitle: "Tres formas de entrar",
    areas: [
      {
        title: "Estudios",
        description: "Marcos conceptuales sobre memoria, agentes, contexto y arquitectura.",
        href: "/studies",
        icon: Brain,
      },
      {
        title: "Articulos",
        description: "Piezas aplicadas sobre integraciones, workflows y orquestación.",
        href: "/blog",
        icon: FileText,
      },
      {
        title: "Casos y resultados",
        description: "Ejemplos de cómo estas ideas bajan a sistemas reales.",
        href: "/outcomes",
        icon: BookOpen,
      },
    ],
    pathTitle: "Cómo recorrerlo",
    path: [
      "Empieza por estudios para entender el marco general.",
      "Luego ve al blog si ya evalúas arquitectura o implementación.",
      "Termina en casos si quieres conectar ideas con negocio real.",
    ],
    ctaTitle: "Si quieres aterrizarlo en tu contexto, lo vemos contigo",
    ctaSubtitle: "Podemos traducir estas ideas en una hoja de ruta concreta.",
    primaryCta: "Hablar con N3uralia",
    secondaryCta: "Ver estudios",
  },
  en: {
    metadataTitle: "Learning hub | N3uralia",
    metadataDescription: "N3uralia learning hub with studies, articles, and resources on AI and operations.",
    badge: "Learning hub",
    title: "Resources to better understand how we build AI in production",
    subtitle: "Ideas, frameworks, and technical pieces for learning with judgment.",
    areasTitle: "Three ways in",
    areas: [
      {
        title: "Studies",
        description: "Conceptual frameworks on memory, agents, context, and architecture.",
        href: "/studies",
        icon: Brain,
      },
      {
        title: "Articles",
        description: "Applied pieces on integrations, workflows, and orchestration.",
        href: "/blog",
        icon: FileText,
      },
      {
        title: "Cases and outcomes",
        description: "Examples of how these ideas become real systems.",
        href: "/outcomes",
        icon: BookOpen,
      },
    ],
    pathTitle: "How to navigate it",
    path: [
      "Start with studies for the broader framework.",
      "Then move to the blog if you are evaluating architecture or implementation.",
      "Finish with cases if you need business context.",
    ],
    ctaTitle: "If you want to map this to your own context, we can help",
    ctaSubtitle: "We can translate these ideas into a concrete roadmap.",
    primaryCta: "Talk to N3uralia",
    secondaryCta: "View studies",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/learning-hub",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function LearningHubPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{page.badge}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">{page.title}</h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">{page.areasTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.areas.map((area) => {
                const Icon = area.icon
                return (
                  <Link
                    key={area.title}
                    href={href(locale, area.href)}
                    className="rounded-lg border border-border bg-card p-8 hover:border-primary/40 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{area.description}</p>
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                      {locale === "es" ? "Explorar" : "Explore"}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <SectionBackground section="blog" className="border-b border-border">
          <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-10 text-center">{page.pathTitle}</h2>
              <div className="space-y-4">
                {page.path.map((item) => (
                  <div key={item} className="rounded-lg border border-border bg-background p-6 flex gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">{page.ctaTitle}</h2>
            <p className="text-muted-foreground mb-10">{page.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={href(locale, "/contact")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                {page.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={href(locale, "/studies")}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
              >
                {page.secondaryCta}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
