import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, Network, ShieldCheck } from "lucide-react"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"
import { absoluteUrl } from "@/lib/site"

interface PageProps {
  params: Promise<{ locale: string }>
}

const content = {
  es: {
    metadataTitle: "Neuralia Chile | Entidad legal detrás de N3uralia",
    metadataDescription:
      "Neuralia es la entidad legal chilena que opera N3uralia, marca tecnológica que construye sistemas operativos verticales con IA para operaciones reales.",
    eyebrow: "ENTIDAD LEGAL",
    title: "Neuralia, Chile, es la entidad legal detrás de N3uralia.",
    intro:
      "Neuralia es la empresa chilena que opera N3uralia, nuestra marca tecnológica y comercial para sistemas operativos verticales con IA orientados a operaciones reales.",
    relationshipTitle: "Una empresa, una marca tecnológica.",
    relationshipBody:
      "Neuralia concentra la entidad legal. N3uralia concentra la identidad de mercado, la tecnología, los productos, los proyectos y la relación comercial visible en n3uralia.com.",
    operatingTitle: "Qué desarrolla Neuralia a través de N3uralia",
    operatingBody:
      "Construimos sistemas operativos por vertical que integran inteligencia operacional, automatización de flujos, agentes de IA, inteligencia documental, reconocimiento, plataformas internas e integraciones de datos.",
    evidenceTitle: "Dónde verificar nuestro trabajo",
    evidenceBody:
      "La evidencia pública de capacidades, implementaciones y productos se mantiene en las páginas canónicas de N3uralia.",
    projects: "Ver proyectos",
    products: "Ver productos",
    solutions: "Ver capacidades",
    contact: "Contactar",
    ecosystemEyebrow: "ECOSISTEMA PÚBLICO",
    ecosystemTitle: "Productos de N3uralia con presencia propia.",
    ecosystemBody: "Estas plataformas públicas mantienen su propia identidad y dominio, y declaran su relación de desarrollo o tecnología con N3uralia.",
    visitProduct: "Visitar producto",
    legalLabel: "Relación corporativa",
    legalPoints: [
      "Entidad legal: Neuralia.",
      "Marca tecnológica y comercial: N3uralia.",
      "Sitio web canonical: n3uralia.com.",
      "Base: Santiago, Chile.",
      "Mercado principal: Chile y Latinoamérica.",
    ],
  },
  en: {
    metadataTitle: "Neuralia Chile | Legal entity behind N3uralia",
    metadataDescription:
      "Neuralia is the Chilean legal entity operating N3uralia, the technology brand building AI-native vertical operating systems for real operations.",
    eyebrow: "LEGAL ENTITY",
    title: "Neuralia, Chile, is the legal entity behind N3uralia.",
    intro:
      "Neuralia is the Chilean company operating N3uralia, our technology and commercial brand for AI-native vertical operating systems built for real operations.",
    relationshipTitle: "One company, one technology brand.",
    relationshipBody:
      "Neuralia holds the legal entity. N3uralia carries the market identity, technology, products, projects and commercial presence represented on n3uralia.com.",
    operatingTitle: "What Neuralia builds through N3uralia",
    operatingBody:
      "We build vertical operating systems that integrate operational intelligence, workflow automation, AI agents, document intelligence, recognition systems, internal platforms and data integrations.",
    evidenceTitle: "Where to verify our work",
    evidenceBody:
      "Public evidence of capabilities, implementations and products is maintained on N3uralia's canonical pages.",
    projects: "View projects",
    products: "View products",
    solutions: "Explore capabilities",
    contact: "Contact",
    ecosystemEyebrow: "PUBLIC ECOSYSTEM",
    ecosystemTitle: "N3uralia products with their own public presence.",
    ecosystemBody: "These public platforms keep their own identity and domain while declaring their development or technology relationship with N3uralia.",
    visitProduct: "Visit product",
    legalLabel: "Corporate relationship",
    legalPoints: [
      "Legal entity: Neuralia.",
      "Technology and commercial brand: N3uralia.",
      "Canonical website: n3uralia.com.",
      "Base: Santiago, Chile.",
      "Primary market: Chile and Latin America.",
    ],
  },
} as const

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/neuralia",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default async function NeuraliaPage(props: PageProps) {
  const params = await props.params
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]
  const url = absoluteUrl(`/${locale}/neuralia`)
  const projectsPath = locale === "es" ? "proyectos" : "projects"
  const productsPath = locale === "es" ? "productos" : "products"
  const solutionsPath = locale === "es" ? "soluciones" : "solutions"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${url}#page`,
        url,
        name: page.metadataTitle,
        description: page.metadataDescription,
        about: { "@id": "https://www.n3uralia.com/#organization" },
        isPartOf: { "@id": "https://www.n3uralia.com/#website" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "N3uralia", item: absoluteUrl(`/${locale}`) },
          { "@type": "ListItem", position: 2, name: "Neuralia Chile", item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="retro-page min-h-screen pt-20">
        <section className="retro-dark border-b border-[rgba(118,214,214,.16)]">
          <div className="retro-shell grid gap-14 py-24 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <small>{page.eyebrow}</small>
              <h1 className="mt-6 max-w-4xl text-[clamp(44px,5.5vw,78px)]">{page.title}</h1>
              <p className="mt-7 max-w-3xl text-[16px] text-[var(--n3-text-muted)]">{page.intro}</p>
            </div>
            <div className="relative border border-[rgba(168,217,216,.22)] bg-[var(--n3-deep)] p-7">
              <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
              <div className="mb-8 flex items-center justify-between">
                <span className="telemetry">{page.legalLabel}</span>
                <Building2 className="h-6 w-6 text-[var(--n3-teal-soft)]" aria-hidden />
              </div>
              <div className="border-t border-[rgba(118,214,214,.16)]">
                {page.legalPoints.map((item, index) => (
                  <div key={item} className="grid grid-cols-[48px_1fr] gap-4 border-b border-[rgba(118,214,214,.16)] py-4">
                    <span className="telemetry">0{index + 1}</span>
                    <p className="text-[13px] text-[var(--n3-text-muted)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[rgba(118,214,214,.16)] py-20">
          <div className="retro-shell grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-3">
            {[
              [Network, page.relationshipTitle, page.relationshipBody],
              [ShieldCheck, page.operatingTitle, page.operatingBody],
              [Building2, page.evidenceTitle, page.evidenceBody],
            ].map(([Icon, title, body], index) => {
              const Component = Icon as typeof Network
              return (
                <article key={String(title)} className="min-h-[320px] bg-[var(--n3-dark-surface)] p-7">
                  <div className="mb-12 flex items-center justify-between">
                    <Component className="h-7 w-7 text-[var(--n3-teal-soft)]" aria-hidden />
                    <span className="telemetry">0{index + 1}</span>
                  </div>
                  <h2 className="text-[26px] text-[var(--n3-text-light)]">{String(title)}</h2>
                  <p className="mt-5 text-[14px] leading-7 text-[var(--n3-text-muted)]">{String(body)}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="border-b border-[rgba(118,214,214,.16)] py-20">
          <div className="retro-shell">
            <small>{page.ecosystemEyebrow}</small>
            <div className="mt-5 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <h2 className="max-w-xl text-[clamp(32px,4vw,52px)]">{page.ecosystemTitle}</h2>
                <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.ecosystemBody}</p>
              </div>
              <div className="grid gap-px bg-[rgba(118,214,214,.16)] sm:grid-cols-2">
                {[
                  ["Kumplio", "https://www.kumplio.app"],
                  ["VIDENTIA", "https://videntia.app"],
                  ["Clar1ty", "https://www.clar1ty.art"],
                  ["LicitRadar", "https://www.licitradar.app"],
                ].map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--n3-dark-surface)] p-6 transition-colors hover:bg-[var(--n3-deep)]"
                  >
                    <span className="telemetry">{name}</span>
                    <p className="mt-8 text-[12px] uppercase tracking-[.12em] text-[var(--n3-teal-soft)]">
                      {page.visitProduct} ↗
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="retro-shell relative border-y border-[rgba(118,214,214,.2)] py-16">
            <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
            <small>N3URALIA / NEURALIA</small>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/${locale}/${projectsPath}`} className="retro-button">{page.projects}</Link>
              <Link href={`/${locale}/${productsPath}`} className="retro-button">{page.products}</Link>
              <Link href={`/${locale}/${solutionsPath}`} className="retro-button">{page.solutions}</Link>
              <Link href={`/${locale}/contact`} className="retro-button retro-button-primary gap-2">
                {page.contact}<ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
