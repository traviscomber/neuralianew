import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Lock, Shield, CheckCircle2 } from "lucide-react"
import { buildLocalizedMetadata } from "@/lib/page-metadata"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"

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
    metadataTitle: "Seguridad y gobierno | N3uralia",
    metadataDescription:
      "Seguridad y gobierno para sistemas agénticos: control de acceso, trazabilidad, auditoría y requisitos definidos por proyecto.",
    badge: "Seguridad operacional",
    title: "Seguridad y gobierno",
    subtitle: "Controles de acceso, trazabilidad, recuperación y requisitos de cumplimiento definidos según arquitectura, datos y riesgo.",
    features: [
      { title: "Control de acceso", desc: "Roles y permisos granulares definidos según responsabilidades y necesidad operacional.", icon: Lock },
      { title: "Trazas de auditoría", desc: "Acciones y evidencia relevantes pueden registrarse para revisión y atribución.", icon: Shield },
      { title: "Compliance por contexto", desc: "Los requisitos regulatorios y contractuales se mapean para cada proyecto y proveedor.", icon: CheckCircle2 },
    ],
    standardsTitle: "Cómo tratamos estándares y certificaciones",
    standardsBody: "SOC 2, ISO 27001, HIPAA, GDPR y otros marcos pueden ser requisitos o referencias de arquitectura, pero no los presentamos como certificaciones de N3uralia salvo que exista evidencia corporativa verificable. La aplicabilidad se determina por proyecto.",
    ctaTitle: "Revise los controles para su caso",
    cta: "Hablar con N3uralia",
    trust: "Ver política de confianza y evidencia",
  },
  en: {
    metadataTitle: "Security and governance | N3uralia",
    metadataDescription:
      "Security and governance for agentic systems with access control, traceability, auditing and project-specific requirements.",
    badge: "Operational security",
    title: "Security and governance",
    subtitle: "Access control, traceability, recovery and compliance requirements defined according to architecture, data and risk.",
    features: [
      { title: "Access control", desc: "Granular roles and permissions defined by responsibility and operational need.", icon: Lock },
      { title: "Audit trails", desc: "Relevant actions and evidence can be recorded for review and attribution.", icon: Shield },
      { title: "Context-specific compliance", desc: "Regulatory and contractual requirements are mapped for each project and provider.", icon: CheckCircle2 },
    ],
    standardsTitle: "How we handle standards and certifications",
    standardsBody: "SOC 2, ISO 27001, HIPAA, GDPR and other frameworks can be project requirements or architectural references, but we do not present them as N3uralia certifications unless there is verifiable corporate evidence. Applicability is determined per project.",
    ctaTitle: "Review controls for your use case",
    cta: "Talk to N3uralia",
    trust: "See our trust and evidence policy",
  },
} as const

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/platform/security",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default async function SecurityPage(props: PageProps) {
  const params = await props.params;
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{page.badge}</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">{page.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{page.subtitle}</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {page.features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="p-6 rounded-lg border border-border/50 bg-card">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{page.standardsTitle}</h2>
            <p className="text-muted-foreground">{page.standardsBody}</p>
            <Link href={href(locale, "/trust")} className="inline-flex items-center gap-2 text-primary font-medium">
              {page.trust}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{page.ctaTitle}</h2>
          <Link href={href(locale, "/contact")} className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
            {page.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
