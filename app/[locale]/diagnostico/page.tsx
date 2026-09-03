import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Database, Gauge, MessageCircle, Target, Workflow } from "lucide-react"
import { DiagnosisFunnelClient } from "@/components/diagnosis/diagnosis-funnel-client"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

const content = {
  es: {
    metadataTitle: "Diagnóstico | N3uralia",
    metadataDescription:
      "Diagnóstico operativo de N3uralia para identificar la primera oportunidad de IA, automatización o plataforma que vale la pena validar en 30 a 90 días.",
    badge: "Diagnóstico N3uralia",
    title: "Empieza por el problema. Sal con una dirección de sistema.",
    subtitle:
      "N3uralia revisa tu operación, datos, herramientas y flujos para identificar la primera oportunidad de IA, automatización o plataforma que vale la pena validar.",
    startCta: "Iniciar diagnóstico",
    whatsappCta: "Hablar por WhatsApp",
    consoleLabel: "N3 / CONSOLA DE DIAGNÓSTICO",
    consoleStatus: "CONTEXTO LISTO",
    consoleItems: [
      { title: "Proceso", text: "Fricción, cuellos de botella y traspasos." },
      { title: "Datos", text: "Sistemas, archivos, documentos y señales." },
      { title: "Impacto", text: "Qué cambio vale la pena validar primero." },
    ],
    diagnoseLabel: "02 / QUÉ DIAGNOSTICAMOS",
    diagnoseTitle: "Miramos la operación completa, no solo la herramienta.",
    diagnoseItems: [
      { title: "Operaciones", text: "Procesos, cuellos de botella, traspasos y trabajo manual." },
      { title: "Datos", text: "Planillas, sistemas, documentos, sensores e imágenes." },
      { title: "Workflow", text: "Aprobaciones, alertas, reportes, seguimiento y accountability." },
      { title: "Impacto", text: "Tiempo ahorrado, riesgo reducido, ingresos recuperados y visibilidad ganada." },
    ],
    receiveLabel: "03 / QUÉ RECIBES",
    receiveTitle: "El diagnóstico termina en una dirección concreta.",
    receiveText:
      "No entregamos una lista genérica de ideas. La salida está diseñada para decidir qué construir primero y qué dejar fuera.",
    deliverables: [
      { title: "Lectura operacional", text: "Dónde está la fricción y por qué importa." },
      {
        title: "Oportunidad de sistema",
        text: "Qué conviene construir primero: asistente de IA, dashboard, automatización, capa de reconocimiento, portal interno o integración.",
      },
      { title: "Ruta de piloto", text: "Qué se puede validar en 30–90 días con un alcance útil y controlado." },
    ],
    whoLabel: "06 / PARA QUIÉN ES",
    whoTitle: "Para empresas con complejidad operacional real.",
    whoText:
      "Datos dispersos, aprobaciones manuales, equipos en terreno, documentos, procesos productivos, evidencia visual o software desconectado: si el problema vive en la operación, el diagnóstico tiene sentido.",
    howLabel: "07 / CÓMO FUNCIONA",
    howTitle: "De un problema operativo a un piloto validable.",
    howSteps: [
      { title: "Entrega contexto", text: "Cuéntanos qué está trabado." },
      { title: "Recibe diagnóstico", text: "Identificamos la primera oportunidad de sistema." },
      { title: "Valida piloto", text: "Definimos la construcción útil más pequeña." },
    ],
    finalLabel: "08 / SIGUIENTE PASO",
    finalTitle: "Empieza con un problema operacional.",
    finalText:
      "No necesitas tener definida la solución. Si sabes dónde se pierde tiempo, control o visibilidad, ya tenemos un punto de partida.",
    finalCta: "Iniciar diagnóstico",
    finalWhatsapp: "WhatsApp +56 9 9382 6127",
  },
  en: {
    metadataTitle: "Diagnosis | N3uralia",
    metadataDescription:
      "N3uralia operational diagnosis to identify the first AI, automation, or platform opportunity worth validating in 30 to 90 days.",
    badge: "N3uralia diagnosis",
    title: "Start with the problem. Leave with a system direction.",
    subtitle:
      "N3uralia reviews your operation, data, tools and workflows to identify the first AI, automation or platform opportunity worth validating.",
    startCta: "Start diagnosis",
    whatsappCta: "Talk by WhatsApp",
    consoleLabel: "N3 / DIAGNOSTIC CONSOLE",
    consoleStatus: "CONTEXT READY",
    consoleItems: [
      { title: "Process", text: "Friction, bottlenecks, and handoffs." },
      { title: "Data", text: "Systems, files, documents, and signals." },
      { title: "Impact", text: "What change is worth validating first." },
    ],
    diagnoseLabel: "02 / WHAT WE DIAGNOSE",
    diagnoseTitle: "We look at the operation, not only the tool.",
    diagnoseItems: [
      { title: "Operations", text: "Processes, bottlenecks, handoffs and manual work." },
      { title: "Data", text: "Spreadsheets, systems, documents, sensors and images." },
      { title: "Workflow", text: "Approvals, alerts, reporting, follow-up and accountability." },
      { title: "Impact", text: "Time saved, risk reduced, revenue recovered and visibility gained." },
    ],
    receiveLabel: "03 / WHAT YOU RECEIVE",
    receiveTitle: "The diagnosis ends with a concrete direction.",
    receiveText:
      "We do not hand back a generic list of ideas. The output is designed to decide what should be built first and what should stay out of scope.",
    deliverables: [
      { title: "Operational read", text: "Where the friction is and why it matters." },
      {
        title: "System opportunity",
        text: "What should be built first: AI assistant, dashboard, automation, recognition layer, internal portal or integration.",
      },
      { title: "Pilot path", text: "What can be validated in 30–90 days with a useful, controlled scope." },
    ],
    whoLabel: "06 / WHO THIS IS FOR",
    whoTitle: "For companies with real operational complexity.",
    whoText:
      "Scattered data, manual approvals, field teams, documents, production processes, visual evidence or disconnected software: if the problem lives in the operation, the diagnosis is a fit.",
    howLabel: "07 / HOW IT WORKS",
    howTitle: "From one operational problem to a pilot you can validate.",
    howSteps: [
      { title: "Submit context", text: "Tell us what is stuck." },
      { title: "Receive diagnosis", text: "We identify the first system opportunity." },
      { title: "Validate pilot", text: "We define the smallest useful build." },
    ],
    finalLabel: "08 / NEXT MOVE",
    finalTitle: "Start with one operational problem.",
    finalText:
      "You do not need to know the solution yet. If you know where time, control or visibility is being lost, we have enough to start.",
    finalCta: "Start diagnosis",
    finalWhatsapp: "WhatsApp +56 9 9382 6127",
  },
} as const

const diagnosisIcons = [Workflow, Database, Gauge, Target] as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    title: page.metadataTitle,
    description: page.metadataDescription,
    path: "/diagnostico",
  })
}

export default function DiagnosisPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]
  const whatsappUrl = "https://wa.me/56993826127"

  return (
    <main className="retro-page min-h-screen pt-20">
      <section className="border-b border-[rgba(118,214,214,.16)]">
        <div className="retro-shell grid gap-12 py-16 md:py-24 lg:grid-cols-[1.03fr_.97fr] lg:items-center">
          <div>
            <small>{page.badge}</small>
            <h1 className="mt-6 max-w-5xl text-[clamp(44px,6vw,82px)]">{page.title}</h1>
            <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[var(--n3-text-muted)]">{page.subtitle}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#diagnosis-assistant" className="retro-button retro-button-primary w-full gap-2 sm:w-auto">
                {page.startCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="retro-button w-full gap-2 sm:w-auto">
                <MessageCircle className="h-4 w-4" />
                {page.whatsappCta}
              </a>
            </div>
          </div>

          <div className="relative border border-[rgba(168,217,216,.24)] bg-[var(--n3-deep)] p-5 md:p-7">
            <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
            <div className="flex items-center justify-between gap-4 border-b border-[rgba(118,214,214,.16)] pb-5">
              <span className="telemetry">{page.consoleLabel}</span>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--n3-teal)]" aria-hidden />
                <span className="telemetry">{page.consoleStatus}</span>
              </div>
            </div>

            <div className="mt-2">
              {page.consoleItems.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[48px_1fr] gap-4 border-b border-[rgba(118,214,214,.16)] py-6">
                  <span className="telemetry">0{index + 1}</span>
                  <div>
                    <h2 className="text-[22px]">{item.title}</h2>
                    <p className="mt-2 text-[13px] leading-6 text-[var(--n3-text-muted)]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20 md:py-24">
        <div className="retro-shell">
          <div className="grid gap-5 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <small>{page.diagnoseLabel}</small>
            <h2 className="max-w-4xl text-[clamp(34px,4.2vw,58px)]">{page.diagnoseTitle}</h2>
          </div>

          <div className="mt-12 grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2 lg:grid-cols-4">
            {page.diagnoseItems.map((item, index) => {
              const Icon = diagnosisIcons[index]
              return (
                <article key={item.title} className="min-h-[260px] bg-[var(--n3-dark-surface)] p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-[var(--n3-teal-soft)]" />
                    <span className="telemetry">0{index + 1}</span>
                  </div>
                  <h3 className="mt-12 text-[24px]">{item.title}</h3>
                  <p className="mt-5 text-[14px] leading-7 text-[var(--n3-text-muted)]">{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20 md:py-24">
        <div className="retro-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div>
            <small>{page.receiveLabel}</small>
            <h2 className="mt-5 max-w-xl text-[clamp(34px,4.2vw,58px)]">{page.receiveTitle}</h2>
            <p className="mt-6 max-w-lg text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.receiveText}</p>
          </div>

          <div className="border-t border-[rgba(118,214,214,.18)]">
            {page.deliverables.map((item, index) => (
              <div key={item.title} className="grid gap-5 border-b border-[rgba(118,214,214,.18)] py-7 md:grid-cols-[64px_.7fr_1.3fr] md:items-start">
                <span className="telemetry">0{index + 1}</span>
                <h3 className="text-[23px]">{item.title}</h3>
                <p className="text-[14px] leading-7 text-[var(--n3-text-muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiagnosisFunnelClient locale={locale as Locale} />

      <section className="border-b border-[rgba(118,214,214,.16)] py-20 md:py-24">
        <div className="retro-shell grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:items-start">
          <small>{page.whoLabel}</small>
          <div className="max-w-4xl">
            <h2 className="text-[clamp(34px,4vw,56px)]">{page.whoTitle}</h2>
            <p className="mt-6 text-[16px] leading-8 text-[var(--n3-text-muted)]">{page.whoText}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20 md:py-24">
        <div className="retro-shell">
          <div className="grid gap-5 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <small>{page.howLabel}</small>
            <h2 className="max-w-4xl text-[clamp(34px,4.2vw,58px)]">{page.howTitle}</h2>
          </div>

          <div className="mt-12 grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-3">
            {page.howSteps.map((step, index) => (
              <article key={step.title} className="min-h-[250px] bg-[var(--n3-black)] p-7">
                <div className="flex items-center justify-between">
                  <span className="telemetry">0{index + 1}</span>
                  <CheckCircle2 className="h-5 w-5 text-[var(--n3-teal-soft)]" />
                </div>
                <h3 className="mt-12 text-[25px]">{step.title}</h3>
                <p className="mt-5 text-[14px] leading-7 text-[var(--n3-text-muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="retro-shell border-y border-[rgba(118,214,214,.2)] py-12 md:py-16">
          <small>{page.finalLabel}</small>
          <div className="mt-5 grid gap-9 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-[clamp(36px,4.8vw,64px)]">{page.finalTitle}</h2>
              <p className="mt-6 max-w-2xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.finalText}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link href="#diagnosis-assistant" className="retro-button retro-button-primary w-full gap-2 sm:w-auto">
                {page.finalCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="retro-button w-full gap-2 sm:w-auto">
                <MessageCircle className="h-4 w-4" />
                {page.finalWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
