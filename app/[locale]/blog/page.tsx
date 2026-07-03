import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Clock, Layers, Sparkles } from "lucide-react"
import type { Metadata } from "next"

import { BrandMark } from "@/components/brand"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

type BlogPost = {
  slug: string
  title: Record<Locale, string>
  excerpt: Record<Locale, string>
  category: Record<Locale, string>
  angle: Record<Locale, string>
  date: string
  readTime: string
  featured?: boolean
}

const pageCopy = {
  es: {
    title: "Biblioteca N3uralia | IA, software y operaciones reales",
    description: "Biblioteca N3uralia: guias y articulos sobre IA, software y operaciones reales.",
    badge: "Biblioteca operativa",
    heading: "Ideas para construir IA que vive en produccion.",
    intro: "Articulos cortos para apoyar diseño y decision.",
    pathTitle: "Ruta sugerida",
    pathSubtitle: "Si estas partiendo, lee en este orden.",
    featuredLabel: "Articulo destacado",
    readGuide: "Leer guia",
    readWithIntent: "Lee con intencion, no por acumulacion.",
    guidance: "Cada articulo responde una sola pregunta de implementacion.",
    ctaTitle: "Quieres aplicar esto a tu operacion?",
    ctaBody: "Partamos por mapear el sistema correcto.",
    ctaAction: "Agendar diagnostico",
    moreLabel: "Mas lecturas",
    moreTitle: "Guias para decidir mejor",
    moreBody: "Para equipos que necesitan claridad rapida.",
    sectionLink: "seccion de Capacidades",
    sectionPrefix: "Para aplicaciones practicas de estos conceptos, visita nuestra",
  },
  en: {
    title: "N3uralia Library | AI, software and real operations",
    description: "N3uralia library: guides and articles on AI, software, and real operations.",
    badge: "Operating library",
    heading: "Ideas for building AI that actually lives in production.",
    intro: "Short articles to support design and decision-making.",
    pathTitle: "Suggested path",
    pathSubtitle: "If you are starting, read in this order.",
    featuredLabel: "Featured article",
    readGuide: "Read guide",
    readWithIntent: "Read with intent, not accumulation.",
    guidance: "Each article answers one implementation question.",
    ctaTitle: "Want to apply this to your operation?",
    ctaBody: "Let’s start by mapping the right system.",
    ctaAction: "Book diagnosis",
    moreLabel: "More reading",
    moreTitle: "Guides for better decisions",
    moreBody: "For teams that need clarity fast.",
    sectionLink: "Capabilities section",
    sectionPrefix: "For practical applications of these concepts, visit our",
  },
} as const

const blogPosts: BlogPost[] = [
  {
    slug: "orquestacion-agentes-produccion",
    title: { es: "Orquestacion de agentes en produccion", en: "Agent orchestration in production" },
    excerpt: { es: "Como coordinar varios agentes sin perder control.", en: "How to coordinate several agents without losing control." },
    category: { es: "Arquitectura", en: "Architecture" },
    angle: { es: "Base tecnica antes de construir.", en: "Technical foundation before building." },
    date: "2026-02-10",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "living-agents-ia-que-aprende",
    title: { es: "Living Agents: IA que aprende continuamente", en: "Living Agents: AI that learns continuously" },
    excerpt: { es: "Sistemas que evolucionan con cada interaccion.", en: "Systems that evolve with every interaction." },
    category: { es: "Innovacion", en: "Innovation" },
    angle: { es: "Mas alla del chatbot.", en: "Beyond the chatbot." },
    date: "2026-02-09",
    readTime: "10 min",
  },
  {
    slug: "integracion-ia-legacy-systems",
    title: { es: "Integracion IA con sistemas legacy", en: "AI integration with legacy systems" },
    excerpt: { es: "Modernizar sin romper lo que ya funciona.", en: "Modernize without breaking what works." },
    category: { es: "Integracion", en: "Integration" },
    angle: { es: "Sistemas existentes y deuda operativa.", en: "Existing systems and operational debt." },
    date: "2026-02-08",
    readTime: "7 min",
  },
  {
    slug: "governance-ai-empresarial",
    title: { es: "Gobernanza de IA empresarial", en: "Enterprise AI governance" },
    excerpt: { es: "Auditar y controlar decisiones automaticas.", en: "Audit and control automated decisions." },
    category: { es: "Gobernanza", en: "Governance" },
    angle: { es: "Seguridad y continuidad.", en: "Security and continuity." },
    date: "2026-02-07",
    readTime: "12 min",
  },
]

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: "/blog",
    title: pageCopy[locale].title,
    description: pageCopy[locale].description,
  })
}

export default function BlogPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0]
  const rest = blogPosts.filter((post) => post.slug !== featured.slug)
  const readingPath = locale === "es"
    ? ["1. Entiende la operacion", "2. Disena la arquitectura", "3. Integra con guardrails", "4. Mide y mejora"]
    : ["1. Understand the operation", "2. Design the architecture", "3. Integrate with guardrails", "4. Measure and improve"]
  const href = (path: string) => `/${locale}${path}`

  return (
    <>
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="blog" className="border-b border-[#d8e5e2]" intensity="normal">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d8e5e2] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">
                  <BrandMark className="h-8 w-8 rounded-xl text-[#789b96]" />
                  {copy.badge}
                </div>
                <h1 className="max-w-5xl text-balance text-5xl font-light leading-[0.98] tracking-[-0.04em] text-[#173634] md:text-7xl">{copy.heading}</h1>
                <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-[#65706d]">{copy.intro}</p>
              </div>

              <div className="rounded-[2rem] border border-[#d8e5e2] bg-white/80 p-6 shadow-[0_34px_110px_-82px_#173634] backdrop-blur">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96]">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">{copy.pathTitle}</p>
                    <p className="text-sm text-[#65706d]">{copy.pathSubtitle}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {readingPath.map((item) => (
                    <div key={item} className="rounded-[1.1rem] border border-[#d8e5e2] bg-[#f7faf8] px-4 py-3 text-sm font-medium text-[#526e69]">{item}</div>
                  ))}
                </div>
                <div className="mt-6 rounded-[1.1rem] bg-[#173634] p-4 text-sm leading-7 text-white/82">{copy.guidance}</div>
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-[#d8e5e2] px-4 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{copy.moreLabel}</p>
                <h2 className="mt-3 text-4xl font-light tracking-[-0.04em] text-[#173634] md:text-6xl">{copy.moreTitle}</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#65706d]">{copy.moreBody}</p>
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-[#d8e5e2] bg-white px-4 py-2 text-sm font-medium text-[#526e69] lg:flex">
                <Clock className="h-4 w-4" />
                {copy.readWithIntent}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <Link href={href(`/blog/${featured.slug}`)} className="rounded-[1.8rem] border border-[#d8e5e2] bg-white p-7 shadow-[0_24px_80px_-72px_#173634] transition-transform hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fb2aa]">{copy.featuredLabel}</p>
                <h3 className="mt-3 text-3xl font-semibold text-[#173634]">{featured.title[locale]}</h3>
                <p className="mt-4 text-sm leading-7 text-[#65706d]">{featured.excerpt[locale]}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#173634]"><ArrowRight className="h-4 w-4" />{copy.readGuide}</div>
              </Link>

              <div className="grid gap-4">
                {rest.map((post) => (
                  <Link key={post.slug} href={href(`/blog/${post.slug}`)} className="rounded-[1.4rem] border border-[#d8e5e2] bg-white/90 p-5 transition-colors hover:border-[#b8d1cc]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fb2aa]">{post.category[locale]}</p>
                        <h3 className="mt-2 text-xl font-semibold text-[#173634]">{post.title[locale]}</h3>
                      </div>
                      <span className="rounded-full bg-[#eef5f2] px-3 py-1 text-xs font-semibold text-[#526e69]">{post.readTime}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#65706d]">{post.angle[locale]}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d8e5e2] bg-[#edf4f1] p-8 text-center">
            <h2 className="text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">{copy.ctaTitle}</h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#65706d]">{copy.ctaBody}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href={href("/contact")} className="inline-flex items-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244946]">
                {copy.ctaAction}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href("/capabilities")} className="inline-flex items-center gap-2 rounded-full border border-[#d8e5e2] bg-white px-6 py-3 text-sm font-semibold text-[#173634] transition-colors hover:border-[#b8d1cc] hover:bg-[#f5faf8]">
                {copy.sectionPrefix} {copy.sectionLink}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
