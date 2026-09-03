import type { Metadata } from "next"
import { CheckCircle2, Clock, MessageCircle } from "lucide-react"
import { BrandMark } from "@/components/brand"
import { ContactPageClient } from "@/components/contact/contact-page-client"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

const content = {
  es: {
    metadataTitle: "Contacto | N3uralia",
    metadataDescription:
      "Hablemos de tu proyecto de IA, automatización o software. N3uralia responde con una propuesta técnica clara para operaciones reales.",
    badge: "Diagnóstico operativo",
    title: "Cuéntanos dónde se tranca la operación",
    subtitle:
      "Partimos por entender el proceso, las herramientas y la decisión que quieres mejorar. Luego proponemos el primer sistema posible: piloto, integración o plataforma.",
    promise: "Respondemos con una lectura concreta, no con una demo genérica.",
    checks: [
      "Qué proceso consume más tiempo o genera más riesgo.",
      "Qué datos, herramientas y personas ya participan.",
      "Qué impacto se puede validar en 30 a 90 días.",
    ],
    response: "Respuesta habitual dentro de 1 día hábil.",
    formTitle: "Diagnóstico guiado",
    formText: "El asistente recoge lo esencial para que podamos responder con contexto.",
  },
  en: {
    metadataTitle: "Contact | N3uralia",
    metadataDescription:
      "Talk to N3uralia about your AI, automation, or software project. We reply with a clear technical proposal for real operations.",
    badge: "Operations diagnosis",
    title: "Tell us where the operation gets stuck",
    subtitle:
      "We start by understanding the process, tools, and decision you want to improve. Then we propose the first possible system: pilot, integration, or platform.",
    promise: "We reply with a concrete read, not a generic demo.",
    checks: [
      "Which process consumes the most time or creates the most risk.",
      "Which data, tools, and people are already involved.",
      "Which impact can be validated in 30 to 90 days.",
    ],
    response: "Typical response within 1 business day.",
    formTitle: "Guided diagnosis",
    formText: "The assistant gathers the essentials so we can respond with context.",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    title: page.metadataTitle,
    description: page.metadataDescription,
    path: "/contact",
  })
}

export default function ContactPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <main className="retro-page min-h-screen pt-20">
      <section className="border-b border-[rgba(118,214,214,.16)] py-24">
        <div className="retro-shell grid gap-14 lg:grid-cols-[.88fr_1.12fr] lg:items-start">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <BrandMark className="h-8 w-8 text-[var(--n3-teal-soft)]" />
              <small>{page.badge}</small>
            </div>

            <h1 className="max-w-4xl text-[clamp(44px,5.4vw,76px)]">{page.title}</h1>
            <p className="mt-7 max-w-2xl text-[16px] text-[var(--n3-text-muted)]">{page.subtitle}</p>

            <div className="relative mt-10 border border-[rgba(168,217,216,.22)] bg-[var(--n3-deep)] p-6">
              <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
              <div className="mb-6 flex items-start gap-3 text-[13px] text-[var(--n3-teal-soft)]">
                <MessageCircle className="mt-0.5 h-5 w-5 flex-none" />
                <span>{page.promise}</span>
              </div>

              <div className="border-t border-[rgba(118,214,214,.16)]">
                {page.checks.map((item, index) => (
                  <div key={item} className="grid grid-cols-[44px_20px_1fr] items-start gap-3 border-b border-[rgba(118,214,214,.16)] py-4">
                    <span className="telemetry">0{index + 1}</span>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--n3-teal-soft)]" />
                    <span className="text-[12px] leading-6 text-[var(--n3-text-muted)]">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 flex items-center gap-2 text-[12px] text-[var(--n3-text-muted)]">
                <Clock className="h-4 w-4 text-[var(--n3-teal-soft)]" />
                {page.response}
              </p>
            </div>
          </div>

          <section className="relative border border-[rgba(168,217,216,.22)] bg-[var(--n3-dark-surface)] p-4 md:p-5" aria-labelledby="contact-form-title">
            <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
            <div className="border-b border-[rgba(118,214,214,.16)] bg-[var(--n3-black)] p-5 md:p-6">
              <small>{page.formTitle}</small>
              <h2 id="contact-form-title" className="mt-4 text-[clamp(28px,3.4vw,42px)]">
                {page.formText}
              </h2>
            </div>
            <div className="mt-4 overflow-hidden border border-[rgba(118,214,214,.16)] bg-[var(--n3-black)]">
              <ContactPageClient locale={locale as Locale} />
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
