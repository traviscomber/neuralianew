import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Lock, Shield, CheckCircle2 } from "lucide-react"
import { buildLocalizedMetadata } from "@/lib/page-metadata"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

function href(locale: Locale, path: string) {
  return `/${locale}${path}`
}

const content = {
  es: {
    metadataTitle: "Seguridad y gobierno | N3uralia",
    metadataDescription:
      "Seguridad y gobierno empresarial para sistemas agenticos: auditoria, control de acceso, cumplimiento y trazabilidad operacional.",
    badge: "Seguridad empresarial",
    title: "Seguridad y gobierno",
    subtitle: "Seguridad de nivel empresarial con gobierno, cumplimiento y auditoria incorporados desde la arquitectura.",
    features: [
      { title: "Control de acceso", desc: "Acceso basado en roles con permisos granulares.", icon: Lock },
      { title: "Trazas de auditoria", desc: "Registros completos para todas las operaciones de agentes.", icon: Shield },
      { title: "Listo para cumplimiento", desc: "Disenado para SOC 2, GDPR y estandares empresariales.", icon: CheckCircle2 },
    ],
    standardsTitle: "Cumplimiento y estandares",
    ctaTitle: "Seguridad lista para empresa",
    cta: "Hablar con ventas",
  },
  en: {
    metadataTitle: "Security and governance | N3uralia",
    metadataDescription:
      "Enterprise-grade security and governance for agentic systems with audit trails, access control, compliance, and operational traceability.",
    badge: "Enterprise security",
    title: "Security and governance",
    subtitle: "Enterprise-grade security with built-in governance, compliance, and audit capabilities.",
    features: [
      { title: "Access control", desc: "Role-based access with fine-grained permissions.", icon: Lock },
      { title: "Audit trails", desc: "Complete audit logs for all agent operations.", icon: Shield },
      { title: "Compliance ready", desc: "Built for SOC 2, GDPR, and enterprise standards.", icon: CheckCircle2 },
    ],
    standardsTitle: "Compliance and standards",
    ctaTitle: "Enterprise-ready security",
    cta: "Talk to sales",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/platform/security",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function SecurityPage({ params }: PageProps) {
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {page.subtitle}
          </p>
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
            <div className="grid md:grid-cols-2 gap-4">
              {["SOC 2 Type II", "GDPR", "HIPAA", "ISO 27001"].map((standard) => (
                <div key={standard} className="flex items-center gap-3 p-4 border border-border/50 rounded-lg bg-card">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{page.ctaTitle}</h2>
          <Link
            href={href(locale, "/contact")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            {page.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
