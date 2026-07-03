import type { Metadata } from "next"
import { CheckCircle2, Clock, MessageCircle } from "lucide-react"
import { BrandMark } from "@/components/brand"
import { ContactPageClient } from "@/components/contact/contact-page-client"
import { ContactPageFooter } from "@/components/contact/contact-page-footer"
import { SectionBackground } from "@/components/section-background"
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
    ],
    response: "Respuesta habitual dentro de 1 día hábil.",
    formTitle: "Diagnóstico guiado",
    formText: "El asistente recoge lo esencial para responder con contexto.",
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
      "Qué proceso consume más tiempo o genera más riesgo.",
      "Qué datos, herramientas y personas ya participan.",
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
    <>
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="faq" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d8e5e2] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">
                  <BrandMark className="h-8 w-8 rounded-xl text-[#789b96]" />
                  {page.badge}
                </div>
                <h1 className="max-w-4xl text-balance text-5xl font-light leading-[0.98] tracking-[-0.04em] text-[#173634] md:text-7xl">
                  {page.title}
                </h1>
                <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#65706d]">
                  {page.subtitle}
                </p>

                <div className="mt-8 rounded-[1.6rem] border border-[#d8e5e2] bg-white/80 p-6 shadow-[0_34px_110px_-82px_#173634] backdrop-blur">
                  <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-[#526e69]">
                    <MessageCircle className="h-5 w-5 text-[#789b96]" />
                    {page.promise}
                  </div>
                  <div className="space-y-3">
                    {page.checks.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-[1.1rem] bg-[#f7faf8] p-4 text-sm leading-6 text-[#65706d]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#789b96]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 flex items-center gap-2 text-sm text-[#7b8582]">
                    <Clock className="h-4 w-4 text-[#789b96]" />
                    {page.response}
                  </p>
                </div>
              </div>

              <section className="rounded-[2rem] border border-[#cfe0dc] bg-white p-4 shadow-[0_34px_110px_-82px_#173634] md:p-5" aria-labelledby="contact-form-title">
                <div className="rounded-[1.6rem] border border-[#d8e5e2] bg-[#fbfbfa] p-5 md:p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#789b96]">{page.formTitle}</p>
                  <h2 id="contact-form-title" className="text-3xl font-light leading-tight text-[#173634]">
                    {page.formText}
                  </h2>
                </div>
                <div className="mt-4 overflow-hidden rounded-[1.6rem] border border-[#d8e5e2] bg-white">
                  <ContactPageClient locale={locale as Locale} />
                </div>
              </section>
            </div>
          </section>
        </SectionBackground>
      </main>

      <ContactPageFooter />
    </>
  )
}
