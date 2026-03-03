import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Gavel, Radar, AlertTriangle, Sprout, TrendingUp, Sparkles } from "lucide-react"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { SolucionesPageClient } from "@/components/soluciones/soluciones-page-client"

interface PageProps {
  params: { locale: string }
}

export const metadata: Metadata = {
  title: "Soluciones de Sistemas Agenticos | Para B2B, Turismo, Eventos, Manufactura",
  description:
    "Soluciones especializadas de sistemas agenticos para cada industria. B2B: operaciones de ingresos. Turismo: inteligencia conversacional. Eventos: automatización inmersiva. Manufactura: procesos autónomos. Listo para producción, recuperación en 6 meses.",
  keywords:
    "sistemas agenticos soluciones, B2B automatización, turismo IA, eventos inteligentes, manufactura automatizada, operaciones de ingresos, inteligencia conversacional, agentes inteligentes, n3uralia",
  alternates: {
    canonical: "https://n3uralia.com/soluciones",
  },
}

export default function SolucionesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const d = getDict(locale)
  const isES = locale === "es"
    <>
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-20 bg-background px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">{d.solutions.hero.badge}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
              {d.solutions.hero.heading}
            </h1>
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {d.solutions.hero.subheading}
            </p>
          </div>
        </section>

        {/* Why Choose Each */}
        <section className="py-24 bg-muted/30 border-t border-border px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-16 text-center">
              {d.solutions.whyChoose.title}
            </h2>

            <div className="space-y-12">
              {/* Enterprises */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">{d.solutions.whyChoose.enterprises}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {d.solutions.whyChoose.benefits.enterprises.map((benefit, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Startups */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">{d.solutions.whyChoose.startups}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {d.solutions.whyChoose.benefits.startups.map((benefit, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developers */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">{d.solutions.whyChoose.developers}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {d.solutions.whyChoose.benefits.developers.map((benefit, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Projects by Industry */}
        <section className="py-24 bg-background border-t border-border px-4" id="desarrollos-reales">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {d.solutions.realProjects.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {d.solutions.realProjects.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Legal */}
              <div id="abogados" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Gavel className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{d.solutions.realProjects.projects.legal.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {d.solutions.realProjects.projects.legal.desc}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "OCR + NLP especializado" : "OCR + specialized NLP"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Integración Dropbox" : "Dropbox integration"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Reportes automáticos" : "Automated reports"}</span>
                  </div>
                </div>
              </div>

              {/* Mining */}
              <div id="mineria" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Radar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{d.solutions.realProjects.projects.mining.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {d.solutions.realProjects.projects.mining.desc}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "IoT + ML predictivo" : "IoT + predictive ML"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Alertas en tiempo real" : "Real-time alerts"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Dashboard integrado" : "Integrated dashboard"}</span>
                  </div>
                </div>
              </div>

              {/* Security */}
              <div id="seguridad" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{d.solutions.realProjects.projects.security.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {d.solutions.realProjects.projects.security.desc}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Análisis en tiempo real" : "Real-time analysis"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Machine learning adaptativo" : "Adaptive machine learning"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Escalable a millones" : "Scalable to millions"}</span>
                  </div>
                </div>
              </div>

              {/* Agriculture */}
              <div id="agricola" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sprout className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{d.solutions.realProjects.projects.agriculture.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {d.solutions.realProjects.projects.agriculture.desc}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "APIs satelitales" : "Satellite APIs"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Integración WhatsApp" : "WhatsApp integration"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "100% automatizado" : "100% automated"}</span>
                  </div>
                </div>
              </div>

              {/* Retail */}
              <div id="retail" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{d.solutions.realProjects.projects.retail.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {d.solutions.realProjects.projects.retail.desc}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Comportamiento del cliente" : "Customer behavior"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Predicción de demanda" : "Demand prediction"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Cross-selling inteligente" : "Intelligent cross-selling"}</span>
                  </div>
                </div>
              </div>

              {/* Art */}
              <div id="arte" className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-all group scroll-mt-24">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{d.solutions.realProjects.projects.art.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {d.solutions.realProjects.projects.art.desc}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Análisis de imagen IA" : "AI image analysis"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Valoración automática" : "Automatic valuation"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{isES ? "Matching inteligente" : "Intelligent matching"}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                {d.solutions.realProjects.noIndustry}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                {d.solutions.realProjects.customSolution}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="py-20 bg-background border-t border-border px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {d.solutions.nextSteps.title}
            </h2>
            <p className="body text-muted-foreground mb-10">
              {d.solutions.nextSteps.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/learning-hub`}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
              >
                {d.solutions.nextSteps.learnMore}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                {d.solutions.nextSteps.scheduleDemo}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SolucionesPageClient />
    </>
  )
}
