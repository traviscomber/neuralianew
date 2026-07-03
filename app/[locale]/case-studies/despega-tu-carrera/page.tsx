import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle2, Gauge, Layers, Rocket, Users, Workflow } from "lucide-react"
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
    metadataTitle: "Caso Despega Tu Carrera | N3uralia",
    metadataDescription:
      "Cómo N3uralia construyó una plataforma full-stack de orientación profesional con tests, biblioteca y coach IA para miles de usuarios.",
    badge: "Educación + producto digital",
    title: "Una plataforma de coaching profesional desde cero hasta producción",
    subtitle:
      "Despega Tu Carrera necesitaba pasar de una visión a un producto real: tests, contenidos, perfiles, experiencia guiada y una base lista para crecer. N3uralia diseñó y construyó el sistema full-stack completo.",
    back: "Volver a casos",
    facts: [
      { label: "Industria", value: "Educación" },
      { label: "Alcance", value: "Idea a producción" },
      { label: "Base", value: "Escalable" },
    ],
    challengeTitle: "La oportunidad era clara, pero todavía no existía el sistema.",
    challenge:
      "El proyecto requería transformar conocimiento, metodología y contenido en una experiencia digital simple para usuarios finales, con arquitectura suficiente para crecer sin rehacer todo al primer aumento de demanda.",
    pains: [
      { icon: Rocket, title: "Partida desde cero", text: "No había plataforma, backend ni base de datos: había visión y necesidad de ejecución." },
      { icon: BookOpen, title: "Contenido estructurado", text: "La biblioteca y los tests necesitaban orden, navegación y experiencia clara." },
      { icon: Users, title: "Usuarios reales", text: "La experiencia debía ser usable, estable y preparada para miles de interacciones." },
    ],
    solutionTitle: "Lo que construimos",
    solution:
      "Un producto full-stack con frontend, backend, base de datos, tests, biblioteca de recursos y una capa de IA preparada para guiar al usuario con contexto.",
    flow: [
      "Arquitectura de producto y definición de módulos principales.",
      "Experiencia de usuario para tests, perfiles, biblioteca y navegación guiada.",
      "Backend y base de datos para usuarios, resultados y contenido estructurado.",
      "Base preparada para incorporar coach IA, recomendaciones y mejora progresiva.",
    ],
    impactTitle: "Base lista para crecer",
    metrics: [
      { value: "10k+", label: "usuarios proyectados sobre una arquitectura preparada para escala" },
      { value: "120+", label: "recursos y contenidos organizables dentro de la plataforma" },
      { value: "1", label: "producto conectado de punta a punta" },
    ],
    ctaTitle: "Si tienes una idea con valor, el salto importante es convertirla en sistema usable.",
    primaryCta: "Agendar diagnóstico",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "Despega Tu Carrera case study | N3uralia",
    metadataDescription:
      "How N3uralia built a full-stack career coaching platform with assessments, a content library, and AI guidance for thousands of users.",
    badge: "Education + digital product",
    title: "A career coaching platform from zero to production",
    subtitle:
      "Despega Tu Carrera needed to move from a vision to a real product: assessments, content, profiles, guided experience, and a base ready to grow. N3uralia designed and built the full-stack system.",
    back: "Back to cases",
    facts: [
      { label: "Industry", value: "Education" },
      { label: "Scope", value: "Idea to production" },
      { label: "Base", value: "Scalable" },
    ],
    challengeTitle: "The opportunity was clear, but the system did not exist yet.",
    challenge:
      "The project required turning knowledge, methodology, and content into a simple digital experience for end users, with enough architecture to grow without rebuilding everything after demand increased.",
    pains: [
      { icon: Rocket, title: "Starting from zero", text: "There was no platform, backend, or database: there was vision and a need for execution." },
      { icon: BookOpen, title: "Structured content", text: "The library and assessments needed order, navigation, and a clear experience." },
      { icon: Users, title: "Real users", text: "The experience had to be usable, stable, and ready for thousands of interactions." },
    ],
    solutionTitle: "What we built",
    solution:
      "A full-stack product with frontend, backend, database, assessments, resource library, and an AI layer prepared to guide users with context.",
    flow: [
      "Product architecture and definition of core modules.",
      "User experience for assessments, profiles, library, and guided navigation.",
      "Backend and database for users, results, and structured content.",
      "Base prepared for AI coaching, recommendations, and progressive improvement.",
    ],
    impactTitle: "A base ready to grow",
    metrics: [
      { value: "10k+", label: "projected users on an architecture prepared for scale" },
      { value: "120+", label: "resources and content organized inside the platform" },
      { value: "1", label: "connected product from end to end" },
    ],
    ctaTitle: "If you have an idea with value, the important leap is turning it into a usable system.",
    primaryCta: "Book diagnosis",
    secondaryCta: "View solutions",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/case-studies/despega-tu-carrera",
    type: "article",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function DespegaTuCarreraCaseStudy({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="hero" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <Link href={href(locale, "/case-studies")} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#789b96] transition-colors hover:text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#789b96]">
                <ArrowRight className="h-4 w-4 rotate-180" />
                {page.back}
              </Link>

              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cfe0dc] bg-white/75 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#789b96]" />
                    <span className="text-sm font-semibold text-[#526e69]">{page.badge}</span>
                  </div>
                  <h1 className="max-w-5xl text-balance text-5xl font-light leading-[0.98] tracking-[-0.04em] text-[#173634] md:text-7xl">{page.title}</h1>
                  <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-[#65706d]">{page.subtitle}</p>
                </div>

                <div className="rounded-[2rem] border border-[#d8e5e2] bg-white/80 p-5 shadow-[0_34px_110px_-82px_#173634] backdrop-blur">
                  <div className="grid gap-3">
                    {page.facts.map((fact) => (
                      <div key={fact.label} className="rounded-[1.15rem] bg-[#eef5f2] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">{fact.label}</p>
                        <p className="mt-2 text-lg font-semibold text-[#173634]">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-[#d8e5e2] px-4 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">Challenge</p>
              <h2 className="text-balance text-4xl font-light leading-tight text-[#243331] md:text-5xl">{page.challengeTitle}</h2>
              <p className="mt-6 text-base leading-8 text-[#65706d]">{page.challenge}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {page.pains.map((pain) => {
                const Icon = pain.icon
                return (
                  <div key={pain.title} className="rounded-[1.5rem] border border-[#d8e5e2] bg-white p-6 shadow-[0_24px_80px_-72px_#173634]">
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#243331]">{pain.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#65706d]">{pain.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="rounded-[2rem] bg-[#173634] p-7 text-white shadow-[0_44px_130px_-82px_#173634] md:p-9">
                <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10">
                  <Layers className="h-6 w-6 text-[#dbe8e4]" />
                </div>
                <h2 className="text-balance text-4xl font-light leading-tight text-white md:text-5xl">{page.solutionTitle}</h2>
                <p className="mt-6 text-base leading-8 text-[#d7e4e1]">{page.solution}</p>
              </div>

              <div className="space-y-4">
                {page.flow.map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-[1.4rem] border border-[#d8e5e2] bg-white p-5 shadow-[0_24px_80px_-72px_#173634]">
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[#eef5f2] text-sm font-semibold text-[#789b96]">{index + 1}</span>
                    <p className="text-sm leading-7 text-[#65706d]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-[#d8e5e2] px-4 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">Impacto</p>
              <h2 className="text-balance text-4xl font-light leading-tight text-[#243331] md:text-5xl">{page.impactTitle}</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {page.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.6rem] border border-[#d8e5e2] bg-white p-7 text-center shadow-[0_24px_80px_-72px_#173634]">
                  <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96]">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <p className="text-5xl font-light leading-none text-[#173634]">{metric.value}</p>
                  <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-[#65706d]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#d8e5e2] bg-white/85 p-8 text-center shadow-[0_34px_110px_-82px_#173634] md:p-12">
            <Workflow className="mx-auto mb-6 h-7 w-7 text-[#789b96]" />
            <h2 className="text-balance text-4xl font-light leading-tight text-[#173634] md:text-5xl">{page.ctaTitle}</h2>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={href(locale, "/contact")} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]">
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href(locale, "/soluciones")} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b9d0cb] bg-white px-6 py-3 text-sm font-semibold text-[#526e69] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789b96] hover:bg-[#f7faf8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]">
                {page.secondaryCta}
                <CheckCircle2 className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
