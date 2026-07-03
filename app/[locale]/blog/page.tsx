import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Clock, Layers, Sparkles } from "lucide-react"
import type { Metadata } from "next"

import { BrandMark } from "@/components/brand"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  const titles = {
    es: "Biblioteca N3uralia | IA, software y operaciones reales",
    en: "N3uralia Library | AI, software, and real operations",
  }

  const descriptions = {
    es: "Biblioteca N3uralia: guías y artículos sobre agentes IA, orquestación, sistemas en producción, gobernanza e integración con operaciones reales.",
    en: "N3uralia library: guides and articles on AI agents, orchestration, production systems, governance, and real operations integration.",
  }

  return buildLocalizedMetadata({
    locale,
    path: "/blog",
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
  })
}

export default function BlogPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === "es"
  const href = (path: string) => `/${locale}${path}`

  const blogPosts = [
    {
      slug: "orquestacion-agentes-produccion",
      titleES: "Orquestación de agentes en producción",
      titleEN: "Agent orchestration in production",
      excerptES:
        "Cómo coordinar múltiples agentes IA dentro de una operación empresarial sin perder control, trazabilidad ni criterio humano.",
      excerptEN:
        "How to coordinate multiple AI agents inside an enterprise operation without losing control, traceability, or human judgment.",
      categoryES: "Arquitectura",
      categoryEN: "Architecture",
      angleES: "Para entender la base técnica antes de construir.",
      angleEN: "For understanding the technical foundation before building.",
      date: "2026-02-10",
      readTime: "8 min",
      featured: true,
    },
    {
      slug: "living-agents-ia-que-aprende",
      titleES: "Living Agents: IA que aprende continuamente",
      titleEN: "Living Agents: AI that learns continuously",
      excerptES:
        "Sistemas que evolucionan con cada interacción: arquitectura, memoria, evaluación y mejora continua aplicada a procesos reales.",
      excerptEN:
        "Systems that evolve with every interaction: architecture, memory, evaluation, and continuous improvement for real processes.",
      categoryES: "Innovación",
      categoryEN: "Innovation",
      angleES: "Para equipos que quieren ir más allá del chatbot.",
      angleEN: "For teams that want to go beyond the chatbot.",
      date: "2026-02-09",
      readTime: "10 min",
      featured: false,
    },
    {
      slug: "integracion-ia-legacy-systems",
      titleES: "Integración IA con sistemas legacy",
      titleEN: "AI integration with legacy systems",
      excerptES:
        "Estrategias para modernizar sin romper lo que ya funciona: patrones progresivos, conectores y capas de operación.",
      excerptEN:
        "Strategies to modernize without breaking what already works: progressive patterns, connectors, and operating layers.",
      categoryES: "Integración",
      categoryEN: "Integration",
      angleES: "Para empresas con software existente y deuda operativa.",
      angleEN: "For companies with existing software and operational debt.",
      date: "2026-02-08",
      readTime: "7 min",
      featured: false,
    },
    {
      slug: "governance-ai-empresarial",
      titleES: "Gobernanza de IA empresarial",
      titleEN: "Enterprise AI governance",
      excerptES:
        "Un marco práctico para auditar, controlar y monitorear decisiones automáticas dentro de sistemas agénticos.",
      excerptEN:
        "A practical framework to audit, control, and monitor automated decisions inside agentic systems.",
      categoryES: "Gobernanza",
      categoryEN: "Governance",
      angleES: "Para operaciones donde seguridad y continuidad importan.",
      angleEN: "For operations where security and continuity matter.",
      date: "2026-02-07",
      readTime: "12 min",
      featured: false,
    },
  ]

  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0]
  const rest = featured ? blogPosts.filter((post) => post.slug !== featured.slug) : blogPosts

  const readingPath = isES
    ? ["1. Entiende la operación", "2. Diseña la arquitectura", "3. Integra con guardrails", "4. Mide y mejora"]
    : ["1. Understand the operation", "2. Design the architecture", "3. Integrate with guardrails", "4. Measure and improve"]

  return (
    <>
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="blog" className="border-b border-[#d8e5e2]" intensity="normal">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d8e5e2] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">
                  <BrandMark className="h-8 w-8 rounded-xl text-[#789b96]" />
                  {isES ? "Biblioteca operativa" : "Operating library"}
                </div>
                <h1 className="max-w-5xl text-balance text-5xl font-light leading-[0.98] tracking-[-0.04em] text-[#173634] md:text-7xl">
                  {isES ? "Ideas para construir IA que sí vive en producción." : "Ideas for building AI that actually lives in production."}
                </h1>
                <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-[#65706d]">
                  {isES
                    ? "Artículos cortos y accionables sobre arquitectura, automatización, agentes y gobernanza. La idea no es sonar futurista: es ayudarte a tomar mejores decisiones antes de construir."
                    : "Short, practical articles on architecture, automation, agents, and governance. The goal is not to sound futuristic: it is to help you make better decisions before building."}
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#d8e5e2] bg-white/80 p-6 shadow-[0_34px_110px_-82px_#173634] backdrop-blur">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96]">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">
                      {isES ? "Ruta sugerida" : "Suggested path"}
                    </p>
                    <p className="text-sm text-[#65706d]">
                      {isES ? "Si estás partiendo, lee en este orden." : "If you are starting, read in this order."}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {readingPath.map((item) => (
                    <div key={item} className="rounded-[1.1rem] border border-[#d8e5e2] bg-[#f7faf8] px-4 py-3 text-sm font-medium text-[#526e69]">
                      {item}
                    </div>
                  ))}
                </div>
            </div>
          </div>
          </section>

        {featured && (
          <section className="border-b border-[#d8e5e2] px-4 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <Link
                href={href(`/blog/${featured.slug}`)}
              className="group relative overflow-hidden rounded-[2rem] bg-[#173634] p-7 text-white shadow-[0_44px_130px_-82px_#173634] transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789b96] md:p-9"
            >
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#8fb2aa]/30 blur-3xl" />
              <div className="relative min-h-[26rem]">
                <div className="mb-10 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c6d7d3]">
                    {isES ? "Artículo destacado" : "Featured article"}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-[#dce8e5]">
                    {isES ? featured.categoryES : featured.categoryEN}
                  </span>
                </div>

                <div className="max-w-3xl">
                  <h2 className="text-balance text-4xl font-light leading-tight text-white md:text-6xl">
                    {isES ? featured.titleES : featured.titleEN}
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#d7e4e1]">
                    {isES ? featured.excerptES : featured.excerptEN}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 border-t border-white/12 pt-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-wrap gap-4 text-sm text-[#c6d7d3]">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(featured.date).toLocaleDateString(isES ? "es-CL" : "en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                    {isES ? "Leer guía" : "Read guide"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-[#d8e5e2] bg-white p-7 shadow-[0_24px_80px_-70px_#173634]">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96]">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-light leading-tight text-[#173634]">
                  {isES ? "Lee con intención, no por acumulación." : "Read with intent, not accumulation."}
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#65706d]">
                  {isES
                    ? "Cada artículo responde una pregunta de implementación: qué construir, qué evitar, cómo gobernarlo y cómo conectarlo con el negocio."
                    : "Each article answers an implementation question: what to build, what to avoid, how to govern it, and how to connect it to the business."}
                </p>
              </div>
              <Link
                href={href("/contact")}
                className="group rounded-[2rem] border border-[#d8e5e2] bg-[#eef5f2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8d1cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789b96]"
              >
                <Sparkles className="mb-5 h-6 w-6 text-[#789b96]" />
                <h3 className="text-2xl font-light text-[#173634]">
                  {isES ? "¿Quieres aplicar esto a tu operación?" : "Want to apply this to your operation?"}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#65706d]">
                  {isES ? "Partamos por mapear el sistema correcto." : "Let’s start by mapping the right system."}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#789b96]">
                  {isES ? "Agendar diagnóstico" : "Book diagnosis"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </section>
        )}
        </SectionBackground>

        <section className="px-4 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                  {isES ? "Más lecturas" : "More reading"}
                </p>
                <h2 className="text-balance text-4xl font-light leading-tight text-[#243331] md:text-5xl">
                  {isES ? "Guías para decidir mejor" : "Guides for better decisions"}
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#65706d]">
                {isES
                  ? "Pensadas para equipos que ya tienen presión operativa, sistemas existentes y poco margen para experimentos desconectados."
                  : "Designed for teams with operational pressure, existing systems, and little room for disconnected experiments."}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={href(`/blog/${post.slug}`)}
                  className="group rounded-[1.6rem] border border-[#d8e5e2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8d1cc] hover:shadow-[0_34px_110px_-82px_#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789b96]"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#eef5f2] px-3 py-1 text-xs font-semibold text-[#789b96]">
                      {isES ? post.categoryES : post.categoryEN}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#7b8582]">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-light leading-tight text-[#173634] transition-colors group-hover:text-[#526e69]">
                    {isES ? post.titleES : post.titleEN}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#65706d]">
                    {isES ? post.excerptES : post.excerptEN}
                  </p>
                  <div className="mt-6 rounded-[1rem] bg-[#f7faf8] p-4 text-sm leading-6 text-[#526e69]">
                    {isES ? post.angleES : post.angleEN}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#789b96]">
                    {isES ? "Leer artículo" : "Read article"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
