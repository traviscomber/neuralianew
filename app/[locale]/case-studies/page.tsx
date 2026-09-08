import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, FolderKanban } from "lucide-react"
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
    metadataTitle: "Casos de implementación | N3uralia",
    metadataDescription:
      "Casos seleccionados de N3uralia que muestran el problema operacional, el sistema construido y la evidencia que puede revisarse.",
    eyebrow: "Casos de implementación",
    title: "Sistemas construidos alrededor de operaciones reales.",
    subtitle:
      "Mostramos qué problema se modeló, qué sistema se construyó y qué evidencia puede revisarse. Sin proyecciones presentadas como resultados ni métricas sin una fuente asociada.",
    cases: [
      {
        title: "EcoSueloLab",
        sector: "Agtech · WhatsApp IA",
        summary:
          "Un agente acerca información agronómica y satelital al canal cotidiano del usuario para consultas operativas en lenguaje natural.",
        evidence:
          "La implementación conecta el canal conversacional con la información disponible sobre cultivo y predio, sin convertir WhatsApp en una fuente paralela de verdad.",
        points: ["Datos satelitales", "WhatsApp", "Consultas operativas"],
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        sector: "Desarrollo profesional · IA",
        summary:
          "Plataforma AI-first con Vera y una metodología en cuatro etapas para estructurar reflexión, diagnóstico y próximos pasos.",
        evidence:
          "El Perfil Vivo, los ejercicios y la ruta se construyen desde las respuestas del usuario y acumulan contexto dentro del mismo sistema.",
        points: ["Vera", "Perfil Vivo", "Ruta estructurada"],
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Black Swan Facility Core",
        sector: "Facility & Hospitality OS",
        summary:
          "Sistema operacional que conecta reservas, personas, activos, inventario, compras, mantenimiento, finanzas, eventos y administración.",
        evidence:
          "Objetos canónicos compartidos preservan identidad, evidencia e historial cuando una misma operación cruza entre áreas y flujos.",
        points: ["Facility OS", "Hospitality", "Trazabilidad"],
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    evidenceLabel: "Evidencia revisable",
    viewCase: "Ver caso",
    ctaEyebrow: "Próximo sistema",
    ctaTitle: "Partamos por el problema correcto.",
    ctaSubtitle:
      "Cuéntanos qué proceso hoy vive entre planillas, correos o software desconectado. Primero definimos qué puede validarse y cómo se medirá.",
    primaryCta: "Hablar con N3uralia",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "Implementation cases | N3uralia",
    metadataDescription:
      "Selected N3uralia cases showing the operational problem, the system built, and the evidence that can be reviewed.",
    eyebrow: "Implementation cases",
    title: "Systems built around real operations.",
    subtitle:
      "We show the problem that was modeled, the system that was built, and the evidence that can be reviewed. No projections presented as outcomes and no metrics without an associated source.",
    cases: [
      {
        title: "EcoSueloLab",
        sector: "Agtech · WhatsApp AI",
        summary:
          "An agent brings agronomic and satellite information into the user’s everyday channel for operational queries in natural language.",
        evidence:
          "The implementation connects the conversational channel to available crop and field information without turning WhatsApp into a parallel source of truth.",
        points: ["Satellite data", "WhatsApp", "Operational queries"],
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        sector: "Professional development · AI",
        summary:
          "An AI-first platform with Vera and a four-stage methodology for structuring reflection, diagnosis, and next actions.",
        evidence:
          "The Live Profile, exercises, and route are built from the user’s own answers and accumulate context inside the same system.",
        points: ["Vera", "Live Profile", "Structured route"],
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Black Swan Facility Core",
        sector: "Facility & Hospitality OS",
        summary:
          "An operational system connecting reservations, people, assets, inventory, procurement, maintenance, finance, events, and administration.",
        evidence:
          "Shared canonical objects preserve identity, evidence, and history as the same operation crosses functions and workflows.",
        points: ["Facility OS", "Hospitality", "Traceability"],
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    evidenceLabel: "Reviewable evidence",
    viewCase: "View case",
    ctaEyebrow: "Next system",
    ctaTitle: "Start with the right problem.",
    ctaSubtitle:
      "Tell us which process currently lives across spreadsheets, email, or disconnected software. We first define what can be validated and how it will be measured.",
    primaryCta: "Talk to N3uralia",
    secondaryCta: "View solutions",
  },
} as const

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    title: page.metadataTitle,
    description: page.metadataDescription,
    path: "/case-studies",
  })
}

export default async function CaseStudiesPage(props: PageProps) {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <main className="retro-page min-h-screen pt-20">
      <section className="retro-dark border-b border-[rgba(118,214,214,.16)]">
        <div className="retro-shell py-24">
          <small>{page.eyebrow}</small>
          <h1 className="mt-6 max-w-5xl text-[clamp(44px,5.5vw,78px)]">{page.title}</h1>
          <p className="mt-7 max-w-3xl text-[16px] text-[var(--n3-text-muted)]">{page.subtitle}</p>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20">
        <div className="retro-shell">
          <div className="grid gap-px bg-[rgba(118,214,214,.16)] lg:grid-cols-3">
            {page.cases.map((item, index) => (
              <Link
                key={item.title}
                href={href(locale, item.href)}
                className="group flex min-h-[430px] flex-col bg-[var(--n3-dark-surface)] p-7 transition-colors hover:bg-[rgba(10,28,28,.94)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--n3-teal-soft)]"
              >
                <div className="mb-10 flex items-center justify-between">
                  <FolderKanban className="h-7 w-7 text-[var(--n3-teal-soft)]" />
                  <span className="telemetry">0{index + 1}</span>
                </div>
                <small>{item.sector}</small>
                <h2 className="mt-5 text-[30px] text-[var(--n3-text-light)]">{item.title}</h2>
                <p className="mt-5 text-[14px] leading-7 text-[var(--n3-text-muted)]">{item.summary}</p>

                <div className="mt-8 border-t border-[rgba(118,214,214,.16)] pt-6">
                  <p className="telemetry">{page.evidenceLabel}</p>
                  <p className="mt-3 text-[13px] leading-6 text-[var(--n3-text-muted)]">{item.evidence}</p>
                </div>

                <div className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--n3-teal-soft)]" />
                      <span className="text-[13px] text-[var(--n3-text-muted)]">{point}</span>
                    </div>
                  ))}
                </div>

                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-[var(--font-rajdhani)] text-[12px] uppercase tracking-[.14em] text-[var(--n3-teal-soft)]">
                  {page.viewCase}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="retro-dark py-24">
        <div className="retro-shell relative border-y border-[rgba(118,214,214,.2)] py-16">
          <small>{page.ctaEyebrow}</small>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-[clamp(36px,4.5vw,62px)]">{page.ctaTitle}</h2>
              <p className="mt-6 max-w-2xl text-[14px] text-[var(--n3-text-muted)]">{page.ctaSubtitle}</p>
            </div>
            <div className="button-row lg:justify-end">
              <Link href={href(locale, "/contact")} className="retro-button retro-button-primary gap-2">
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href(locale, "/soluciones")} className="retro-button">
                {page.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
