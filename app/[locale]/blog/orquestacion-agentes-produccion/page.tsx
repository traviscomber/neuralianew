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
  problemTitle: string
  problemBody: string
  principlesTitle: string
  principles: Array<{ title: string; body: string }>
  monitoringTitle: string
  monitoringItems: string[]
  closingTitle: string
  closingBody: string
  ctaText: string
}

const pageCopy: Record<Locale, Copy> = {
  es: {
    title: "Orquestacion de agentes en produccion | N3uralia Blog",
    description: "Framework para coordinar sistemas multi-agente con gobernanza y trazabilidad.",
    backLabel: "Volver al blog",
    badge: "Tecnico",
    heading: "Orquestacion de agentes en produccion",
    intro: "La meta es coordinar decisiones sin perder control.",
    date: "10 de febrero, 2026",
    readTime: "8 min lectura",
    problemTitle: "El problema",
    problemBody: "En empresas reales necesitas varios agentes especializados, coordinacion sin conflictos y tolerancia a fallos.",
    principlesTitle: "Principios de diseno",
    principles: [
      { title: "1. Especializacion", body: "Cada agente tiene un proposito especifico." },
      { title: "2. Comunicacion asíncrona", body: "Se comunican via eventos o colas." },
      { title: "3. Decisiones consensuadas", body: "Lo critico pasa por validacion adicional." },
      { title: "4. Trazabilidad total", body: "Cada paso debe quedar registrado." },
    ],
    monitoringTitle: "Monitoreo",
    monitoringItems: ["Estado de cada agente", "Mensajes en transito", "Latencias y timeouts", "Errores y anomalias", "Audit trail completo"],
    closingTitle: "Conclusión",
    closingBody: "La orquestacion de agentes es un problema de arquitectura, no solo de codigo.",
    ctaText: "Comenzar conversacion",
  },
  en: {
    title: "Agent orchestration in production | N3uralia Blog",
    description: "Framework for coordinating multi-agent systems with governance and traceability.",
    backLabel: "Back to blog",
    badge: "Technical",
    heading: "Agent orchestration in production",
    intro: "The goal is to coordinate decisions without losing control.",
    date: "February 10, 2026",
    readTime: "8 min read",
    problemTitle: "The problem",
    problemBody: "Real companies need multiple specialized agents, conflict-free coordination, and fault tolerance.",
    principlesTitle: "Design principles",
    principles: [
      { title: "1. Specialization", body: "Each agent has a specific purpose." },
      { title: "2. Asynchronous communication", body: "They communicate through events or queues." },
      { title: "3. Consensus decisions", body: "Critical flows get extra validation." },
      { title: "4. Full traceability", body: "Every step must be logged." },
    ],
    monitoringTitle: "Monitoring",
    monitoringItems: ["Agent status", "Messages in transit", "Latencies and timeouts", "Errors and anomalies", "Complete audit trail"],
    closingTitle: "Takeaway",
    closingBody: "Agent orchestration is an architecture problem, not only a coding problem.",
    ctaText: "Start conversation",
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]
  return buildLocalizedMetadata({ locale, path: "/blog/orquestacion-agentes-produccion", type: "article", title: copy.title, description: copy.description })
}

export default function BlogPost({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]
  const href = (path: string) => `/${locale}${path}`

  return (
    <SectionBackground section="blog">
      <main className="min-h-screen bg-background">
        <article className="mx-auto max-w-3xl px-4 py-16">
          <Link href={href("/blog")} className="mb-8 inline-flex items-center gap-2 text-primary font-semibold transition-all hover:gap-3"><ArrowLeft className="w-4 h-4" />{copy.backLabel}</Link>
          <div className="mb-8">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1"><span className="text-xs font-semibold text-primary">{copy.badge}</span></div>
            <h1 className="mb-4 h1-light">{copy.heading}</h1>
            <div className="flex items-center gap-6 border-t border-border/50 pt-6 text-sm text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" />{copy.date}</span><span className="inline-flex items-center gap-1.5"><User className="w-4 h-4" />N3uralia Team</span><span>{copy.readTime}</span></div>
          </div>
          <div className="space-y-8 text-base leading-7 text-muted-foreground">
            <p>{copy.intro}</p>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.problemTitle}</h2><p>{copy.problemBody}</p></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.principlesTitle}</h2><div className="space-y-4">{copy.principles.map((item) => <div key={item.title} className="rounded-lg border border-border bg-card/40 p-5"><h3 className="mb-2 text-lg font-light text-foreground">{item.title}</h3><p>{item.body}</p></div>)}</div></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.monitoringTitle}</h2><ul className="space-y-2 pl-5">{copy.monitoringItems.map((item) => <li key={item} className="list-disc">{item}</li>)}</ul></section>
            <section className="space-y-4"><h2 className="text-2xl font-light text-foreground">{copy.closingTitle}</h2><p>{copy.closingBody}</p></section>
          </div>
          <div className="mt-12 border-t border-border pt-8"><Link href={href("/contact")} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">{copy.ctaText}<ArrowRight className="h-4 w-4" /></Link></div>
        </article>
      </main>
    </SectionBackground>
  )
}
