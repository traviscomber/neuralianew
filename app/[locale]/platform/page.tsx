import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Database, GitBranch, Shield, Workflow } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

function href(locale: Locale, path: string) {
  return `/${locale}${path}`
}

const content = {
  es: {
    metadataTitle: "Plataforma de IA para operaciones | N3uralia",
    metadataDescription:
      "La capa de plataforma de N3uralia: orquestación, integraciones, memoria y control para sistemas de IA en producción.",
    title: "La plataforma no es un panel bonito. Es la capa que hace operable el sistema.",
    subtitle:
      "Cuando hablamos de plataforma, hablamos de la arquitectura que conecta software, datos, agentes y decisiones sin dejar la operación a la deriva.",
    blocks: [
      {
        title: "Orquestación central",
        description: "Una capa que coordina flujos, reglas, prioridades y handoffs entre componentes humanos y automáticos.",
        icon: Workflow,
      },
      {
        title: "Datos e integraciones",
        description: "Conexión con CRM, ERP, APIs y herramientas operativas para que el contexto real llegue donde tiene que llegar.",
        icon: Database,
      },
      {
        title: "Memoria y estado",
        description: "Historial, contexto y estado del sistema para no responder siempre desde cero ni perder trazabilidad.",
        icon: GitBranch,
      },
      {
        title: "Control y seguridad",
        description: "Permisos, validaciones y observabilidad para que la automatización no quede fuera de gobierno.",
        icon: Shield,
      },
    ],
    ctaTitle: "Si tu stack ya existe, la pregunta es cómo coordinamos mejor todo lo que ya vive ahí",
    primaryCta: "Ver integraciones",
    secondaryCta: "Hablar con N3uralia",
    evidenceTitle: "Explorar evidencia y capacidades",
    evidenceLinks: { solutions: "Soluciones", projects: "Proyectos", products: "Productos", neuralia: "Neuralia" },
  },
  en: {
    metadataTitle: "AI operations platform | N3uralia",
    metadataDescription:
      "N3uralia's platform layer: orchestration, integrations, memory, and control for production AI systems.",
    title: "The platform is not a pretty dashboard. It is the layer that makes the system operable.",
    subtitle:
      "When we talk about platform, we mean the architecture that connects software, data, agents, and decisions without leaving operations drifting.",
    blocks: [
      {
        title: "Central orchestration",
        description: "A layer that coordinates workflows, rules, priorities, and handoffs between human and automated components.",
        icon: Workflow,
      },
      {
        title: "Data and integrations",
        description: "Connections to CRM, ERP, APIs, and operational tools so real context reaches the right place.",
        icon: Database,
      },
      {
        title: "Memory and state",
        description: "System history, context, and state so it does not answer from zero every time or lose traceability.",
        icon: GitBranch,
      },
      {
        title: "Control and security",
        description: "Permissions, validations, and observability so automation stays governable.",
        icon: Shield,
      },
    ],
    ctaTitle: "If your stack already exists, the question is how we coordinate everything living there more effectively",
    primaryCta: "View integrations",
    secondaryCta: "Talk to N3uralia",
    evidenceTitle: "Explore evidence and capabilities",
    evidenceLinks: { solutions: "Solutions", projects: "Projects", products: "Products", neuralia: "Neuralia" },
  },
} as const

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/platform",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default async function PlatformPage(props: PageProps) {
  const params = await props.params;
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]
  const solutionsPath = locale === "es" ? "/soluciones" : "/solutions"
  const projectsPath = locale === "es" ? "/proyectos" : "/projects"
  const productsPath = locale === "es" ? "/productos" : "/products"

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <section className="border-b border-border px-4 py-16">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold text-foreground">{page.evidenceTitle}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={href(locale, solutionsPath)} className="px-5 py-3 border border-border text-foreground hover:border-primary/50">{page.evidenceLinks.solutions}</Link>
              <Link href={href(locale, projectsPath)} className="px-5 py-3 border border-border text-foreground hover:border-primary/50">{page.evidenceLinks.projects}</Link>
              <Link href={href(locale, productsPath)} className="px-5 py-3 border border-border text-foreground hover:border-primary/50">{page.evidenceLinks.products}</Link>
              <Link href={href(locale, "/neuralia")} className="px-5 py-3 border border-border text-foreground hover:border-primary/50">{page.evidenceLinks.neuralia}</Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">{page.ctaTitle}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={href(locale, "/integraciones-empresariales")}
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
