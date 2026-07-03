import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import type { Metadata } from "next"

import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: { locale: string }
}

type Copy = {
  title: string
  description: string
  backLabel: string
  badge: string
  heading: string
  intro: string
  date: string
  readTime: string
  section1Title: string
  section1Body: string
  section2Title: string
  section2Body: string
  section3Title: string
  section3Body: string
  caseTitle: string
  caseIntro: string
  caseSystem: string
  caseSolution: string
  caseResult: string
  errorTitle: string
  errorItems: string[]
  closingTitle: string
  closingBody: string
  ctaText: string
}

const pageCopy: Record<Locale, Copy> = {
  es: {
    title: "Integracion IA con sistemas legacy | N3uralia Blog",
    description: "Modernizar sin romper lo que ya funciona.",
    backLabel: "Volver al blog",
    badge: "Integracion",
    heading: "Integracion IA con sistemas legacy",
    intro: "La mayoria de las empresas no parte desde cero. El reto es modernizar sin romper lo que ya funciona.",
    date: "8 de febrero, 2026",
    readTime: "7 min lectura",
    section1Title: "El problema real",
    section1Body: "Migrar todo no suele ser viable. La respuesta practica es integrar IA con el stack existente.",
    section2Title: "Tres capas",
    section2Body: "Adaptadores, orquestacion asincrona y una capa espejo de datos.",
    section3Title: "Como se implementa",
    section3Body: "Mapeamos, priorizamos flujos, pilotamos y luego escalamos con control.",
    caseTitle: "Caso real: seguros",
    caseIntro: "Una aseguradora con COBOL, DB2 y documentos escaneados necesitaba automatizar reclamos.",
    caseSystem: "Sistema",
    caseSolution: "Solucion N3uralia",
    caseResult: "Resultado en 3 meses",
    errorTitle: "Errores comunes",
    errorItems: [
      "Conectar directo al mainframe sin una capa intermedia.",
      "Confiar en APIs viejas sin validar cada respuesta.",
      "Reescribir el sistema antiguo en vez de construir encima.",
      "Ignorar la calidad de datos y la trazabilidad.",
    ],
    closingTitle: "Integrar no es invadir",
    closingBody: "La mejor arquitectura vuelve utilizable el legado sin sacrificar estabilidad.",
    ctaText: "Conversar sobre tu infraestructura",
  },
  en: {
    title: "AI integration with legacy systems | N3uralia Blog",
    description: "Modernize without breaking what already works.",
    backLabel: "Back to blog",
    badge: "Integration",
    heading: "AI integration with legacy systems",
    intro: "Most companies do not start from zero. The challenge is modernizing without breaking what works.",
    date: "February 8, 2026",
    readTime: "7 min read",
    section1Title: "The real problem",
    section1Body: "Migrating everything is usually not viable. The practical answer is to integrate AI with the existing stack.",
    section2Title: "Three layers",
    section2Body: "Adapters, asynchronous orchestration, and a mirror data layer.",
    section3Title: "How it is implemented",
    section3Body: "Map, prioritize workflows, pilot, and then scale with control.",
    caseTitle: "Real case: insurance",
    caseIntro: "An insurer with COBOL, DB2, and scanned documents needed to automate claims.",
    caseSystem: "System",
    caseSolution: "N3uralia solution",
    caseResult: "3-month result",
    errorTitle: "Common mistakes",
    errorItems: [
      "Connecting directly to the mainframe without an intermediate layer.",
      "Trusting old APIs without validating each response.",
      "Rewriting the old system instead of building on top of it.",
      "Ignoring data quality and traceability.",
    ],
    closingTitle: "Integration is not invasion",
    closingBody: "The best architecture makes legacy usable without sacrificing stability.",
    ctaText: "Discuss your infrastructure",
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]
  return buildLocalizedMetadata({ locale, path: "/blog/integracion-ia-legacy-systems", type: "article", title: copy.title, description: copy.description })
}

export default function BlogPost({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]
  const href = (path: string) => `/${locale}${path}`

  return (
    <SectionBackground section="blog">
      <main className="min-h-screen bg-background pt-32 pb-20">
        <article className="mx-auto max-w-3xl px-4">
          <Link href={href("/blog")} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"><ArrowLeft className="h-4 w-4" />{copy.backLabel}</Link>
          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"><span className="font-semibold">{copy.badge}</span></div>
            <h1 className="mb-4 text-4xl font-light tracking-tight text-foreground md:text-5xl">{copy.heading}</h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{copy.date}</span>
              <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />N3uralia Team</span>
              <span>{copy.readTime}</span>
            </div>
          </div>
          <div className="space-y-8 text-base leading-7 text-muted-foreground">
            <p>{copy.intro}</p>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.section1Title}</h2><p>{copy.section1Body}</p></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.section2Title}</h2><p>{copy.section2Body}</p></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.section3Title}</h2><p>{copy.section3Body}</p></section>
            <section className="space-y-4">
              <h2 className="text-2xl font-light text-foreground">{copy.caseTitle}</h2>
              <p>{copy.caseIntro}</p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-border bg-card p-4"><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.caseSystem}</p><p className="mt-2 text-sm text-foreground">{locale === "es" ? "COBOL + DB2 + TIFF escaneados" : "COBOL + DB2 + scanned TIFF files"}</p></div>
                <div className="rounded-lg border border-border bg-card p-4"><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.caseSolution}</p><p className="mt-2 text-sm text-foreground">{locale === "es" ? "Adaptadores, OCR, validacion y staging" : "Adapters, OCR, validation, and staging"}</p></div>
                <div className="rounded-lg border border-border bg-card p-4"><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.caseResult}</p><p className="mt-2 text-sm text-foreground">{locale === "es" ? "60% automatizado y sin disrupcion al core" : "60% automated with no core disruption"}</p></div>
              </div>
            </section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.errorTitle}</h2><ul className="space-y-2 pl-5">{copy.errorItems.map((item) => <li key={item} className="list-disc">{item}</li>)}</ul></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.closingTitle}</h2><p>{copy.closingBody}</p></section>
          </div>
          <div className="mt-12 border-t border-border pt-8"><Link href={href("/contact")} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">{copy.ctaText}<ArrowRight className="h-4 w-4" /></Link></div>
        </article>
      </main>
    </SectionBackground>
  )
}
