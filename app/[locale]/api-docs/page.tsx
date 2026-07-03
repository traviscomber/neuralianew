import type { Metadata } from "next"
import Link from "next/link"
import { API_ENDPOINTS } from "@/lib/api-schema"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"
import { SectionBackground } from "@/components/section-background"
import { Footer } from "@/components/layout/footer"
import Navigation from "@/components/navigation"

interface PageProps {
  params: {
    locale: string
  }
}

const copy = {
  es: {
    title: "Documentación API",
    subtitle: "Referencia breve para Living Agents y sistemas agénticos.",
    baseUrl: "URL base",
    version: "Versión",
    format: "Formato",
    auth: "Autenticación",
    endpoints: "Endpoints",
    selectHint: "Selecciona una ruta para ver su contrato.",
    schema: "Esquema OpenAPI",
    examples: "Ejemplos",
    health: "Health check",
    agents: "Listar Living Agents",
    chat: "Enviar mensaje al chat",
    note: "La documentación técnica se mantiene en inglés cuando corresponda.",
  },
  en: {
    title: "API Documentation",
    subtitle: "Brief endpoint reference for Living Agents and agentic systems.",
    baseUrl: "Base URL",
    version: "Version",
    format: "Format",
    auth: "Authentication",
    endpoints: "Endpoints",
    selectHint: "Select a route to inspect the contract.",
    schema: "OpenAPI schema",
    examples: "Examples",
    health: "Health check",
    agents: "List Living Agents",
    chat: "Send a chat message",
    note: "Technical documentation stays in English when needed.",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return buildLocalizedMetadata({
    locale,
    title: locale === "es" ? "Documentación API | N3uralia" : "API Documentation | N3uralia",
    description:
      locale === "es"
        ? "Referencia breve de endpoints para Living Agents y sistemas agénticos."
        : "Brief endpoint reference for Living Agents and agentic systems.",
    path: "/api-docs",
  })
}

export default function APIDocsPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = copy[locale]
  const endpointGroups = Object.entries(API_ENDPOINTS)

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="blog" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-16 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                  {locale === "es" ? "Referencia técnica" : "Technical reference"}
                </p>
                <h1 className="mt-4 text-5xl font-light leading-[0.98] tracking-[-0.05em] text-[#173634] md:text-7xl">
                  {page.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-[#65706d]">{page.subtitle}</p>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-[#65706d]">{page.note}</p>

              <div className="mt-8 rounded-[1.6rem] border border-[#d8e5e2] bg-[#edf4f1] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8aa39d]">{page.auth}</p>
                <code className="mt-3 block rounded-2xl border border-[#e5eeeb] bg-white px-4 py-3 text-sm text-[#173634]">
                  Authorization: Bearer YOUR_JWT_TOKEN
                </code>
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="px-4 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-semibold text-[#173634]">{page.endpoints}</h2>
                <p className="mt-3 text-sm leading-7 text-[#65706d]">{page.selectHint}</p>
              </div>

              <div className="space-y-6">
                {endpointGroups.map(([category, endpoints]) => (
                  <div key={category} className="rounded-[1.6rem] border border-[#d8e5e2] bg-white p-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#789b96]">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {Object.entries(endpoints).map(([name, endpoint]) => (
                        <div key={`${category}-${name}`} className="rounded-2xl border border-[#e5eeeb] bg-[#fbfbfa] p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8aa39d]">{endpoint.method}</p>
                          <p className="mt-2 text-sm font-semibold text-[#173634]">{endpoint.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8e5e2] bg-[#edf4f1] px-4 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-[#173634]">{page.examples}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <pre className="overflow-x-auto rounded-[1.4rem] border border-[#d8e5e2] bg-white p-5 text-sm text-[#173634]">
{`curl /api/v1/health`}
              </pre>
              <pre className="overflow-x-auto rounded-[1.4rem] border border-[#d8e5e2] bg-white p-5 text-sm text-[#173634]">
{`curl -H "Authorization: Bearer TOKEN" \\
  /api/v1/living-agents`}
              </pre>
              <pre className="overflow-x-auto rounded-[1.4rem] border border-[#d8e5e2] bg-white p-5 text-sm text-[#173634]">
{`curl -X POST /api/v1/chat \\
  -H "Content-Type: application/json" \\
  -d '{"messages":[{"role":"user","content":"Hola"}]}'`}
              </pre>
            </div>

            <div className="mt-8">
              <Link href="/docs/api/openapi.json" className="text-sm font-semibold text-[#173634] underline decoration-[#789b96]/40 underline-offset-4">
                {page.schema}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
