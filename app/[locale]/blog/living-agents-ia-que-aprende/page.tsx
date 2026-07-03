import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react"
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
  section4Title: string
  section4Body: string
  metricsTitle: string
  metricsItems: Array<{ title: string; body: string }>
  challengesTitle: string
  challengesItems: Array<{ title: string; body: string }>
  closingTitle: string
  closingBody: string
  ctaText: string
}

const pageCopy: Record<Locale, Copy> = {
  es: {
    title: "Living Agents: IA que aprende continuamente | N3uralia Blog",
    description: "Sistemas que evolucionan en produccion con memoria y control.",
    backLabel: "Volver al blog",
    badge: "Innovacion",
    heading: "Living Agents: IA que aprende continuamente",
    intro: "Los agentes tradicionales se entrenan una vez y se congelan. Los Living Agents evolucionan con cada interaccion.",
    date: "9 de febrero, 2026",
    readTime: "10 min lectura",
    section1Title: "Que es un Living Agent",
    section1Body: "Un sistema que observa su desempeño, identifica mejoras y se reentrena con control.",
    section2Title: "La diferencia",
    section2Body: "Los agentes estaticos se degradan; los Living Agents aprenden y se adaptan.",
    section3Title: "Arquitectura",
    section3Body: "Observacion, evaluacion y aprendizaje forman el ciclo central.",
    section4Title: "Validacion",
    section4Body: "Antes de promover cambios, el nuevo modelo se prueba contra casos relevantes.",
    metricsTitle: "Metricas clave",
    metricsItems: [
      { title: "Learning Velocity", body: "Que tan rapido mejora." },
      { title: "Drift Resistance", body: "Que tan bien resiste cambios." },
      { title: "Audit Trail", body: "Cada decision debe ser rastreable." },
    ],
    challengesTitle: "Desafios",
    challengesItems: [
      { title: "Feedback loops", body: "Hay que evitar que el sistema aprenda mal." },
      { title: "Gobernanza", body: "No todo puede cambiar sin revisiones." },
      { title: "Calidad de datos", body: "El feedback debe ser confiable." },
    ],
    closingTitle: "Conclusión",
    closingBody: "Estos sistemas mejoran con uso real, no con promesas.",
    ctaText: "Explorar Living Agents",
  },
  en: {
    title: "Living Agents: AI that learns continuously | N3uralia Blog",
    description: "Systems that evolve in production with memory and control.",
    backLabel: "Back to blog",
    badge: "Innovation",
    heading: "Living Agents: AI that learns continuously",
    intro: "Traditional agents are trained once and frozen. Living Agents evolve with every interaction.",
    date: "February 9, 2026",
    readTime: "10 min read",
    section1Title: "What is a Living Agent",
    section1Body: "A system that observes performance, identifies improvements, and retrains under control.",
    section2Title: "The difference",
    section2Body: "Static agents degrade; Living Agents learn and adapt.",
    section3Title: "Architecture",
    section3Body: "Observation, evaluation, and learning form the core loop.",
    section4Title: "Validation",
    section4Body: "Before promotion, the new model is tested against relevant cases.",
    metricsTitle: "Key metrics",
    metricsItems: [
      { title: "Learning Velocity", body: "How fast it improves." },
      { title: "Drift Resistance", body: "How well it handles change." },
      { title: "Audit Trail", body: "Every decision must be traceable." },
    ],
    challengesTitle: "Challenges",
    challengesItems: [
      { title: "Feedback loops", body: "The system must not learn the wrong thing." },
      { title: "Governance", body: "Not everything can change without review." },
      { title: "Data quality", body: "The feedback must be reliable." },
    ],
    closingTitle: "Takeaway",
    closingBody: "These systems improve through real use, not promises.",
    ctaText: "Explore Living Agents",
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]
  return buildLocalizedMetadata({ locale, path: "/blog/living-agents-ia-que-aprende", type: "article", title: copy.title, description: copy.description })
}

export default function BlogPost({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]
  const href = (path: string) => `/${locale}${path}`

  return (
    <SectionBackground section="blog">
      <main className="min-h-screen bg-background">
        <article className="mx-auto max-w-3xl px-4 py-16">
          <Link href={href("/blog")} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"><ArrowLeft className="h-4 w-4" />{copy.backLabel}</Link>
          <div className="mb-8">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1"><span className="text-xs font-semibold text-primary">{copy.badge}</span></div>
            <h1 className="mb-4 text-4xl font-light tracking-tight text-foreground md:text-5xl">{copy.heading}</h1>
            <div className="flex items-center gap-6 border-t border-border/50 pt-6 text-sm text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{copy.date}</span><span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />N3uralia Team</span><span>{copy.readTime}</span></div>
          </div>
          <div className="space-y-8 text-base leading-7 text-muted-foreground">
            <p>{copy.intro}</p>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.section1Title}</h2><p>{copy.section1Body}</p></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.section2Title}</h2><p>{copy.section2Body}</p></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.section3Title}</h2><p>{copy.section3Body}</p></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.section4Title}</h2><p>{copy.section4Body}</p></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.metricsTitle}</h2><div className="grid gap-4 md:grid-cols-3">{copy.metricsItems.map((item) => <div key={item.title} className="rounded-lg border border-border bg-card/40 p-4"><h3 className="mb-1 text-base font-medium text-foreground">{item.title}</h3><p>{item.body}</p></div>)}</div></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.challengesTitle}</h2><div className="space-y-4">{copy.challengesItems.map((item) => <div key={item.title} className="rounded-lg border border-border bg-card/40 p-5"><h3 className="mb-1 text-lg font-light text-foreground">{item.title}</h3><p>{item.body}</p></div>)}</div></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.closingTitle}</h2><p>{copy.closingBody}</p></section>
          </div>
          <div className="mt-12 border-t border-border pt-8"><Link href={href("/contact")} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">{copy.ctaText}<ArrowRight className="h-4 w-4" /></Link></div>
        </article>
      </main>
    </SectionBackground>
  )
}
