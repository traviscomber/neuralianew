import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, DollarSign, Clock, BarChart3 } from 'lucide-react'
import { isValidLocale, DEFAULT_LOCALE } from '@/lib/get-locale'
import type { Locale } from '@/content/dictionaries'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return {
    title: isES 
      ? "Automatización con IA para Empresas en Chile | ROI Garantizado"
      : "AI Automation for Businesses in Chile | Guaranteed ROI",
    description: isES
      ? "Automatización empresarial con IA para Chile. Reduce costos operativos, aumenta productividad, escala rápidamente. ROI garantizado en 6 meses. Implementación sin disrupciones."
      : "Enterprise AI automation for Chile. Reduce operating costs, increase productivity, scale quickly. Guaranteed ROI in 6 months. Disruption-free implementation.",
    keywords: isES
      ? "automatización IA empresas Chile, automatización procesos, ROI automatización, sistemas inteligentes Chile, infraestructura IA"
      : "AI enterprise automation Chile, process automation, ROI automation, intelligent systems",
    alternates: {
      canonical: `https://n3uralia.com/${locale}/automatizacion-ia-empresas-chile`,
      languages: {
        es: 'https://n3uralia.com/es/automatizacion-ia-empresas-chile',
        en: 'https://n3uralia.com/en/enterprise-automation-chile',
      },
    },
  }
}

export default function AutomatizacionIAPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">{isES ? "Transformación" : "Transformation"}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight text-balance">
            {isES ? "Automatización con IA para Empresas" : "AI Automation for Enterprises"}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            {isES
              ? "Transformación digital acelerada. Automatiza procesos complejos, reduce costos operativos, libera tu equipo para trabajo estratégico. ROI garantizado en 6 meses."
              : "Accelerated digital transformation. Automate complex processes, reduce operating costs, free your team for strategic work. Guaranteed ROI in 6 months."}
          </p>
          <p className="text-lg text-primary font-semibold mb-8">
            {isES ? "Implementación sin riesgos • Garantía de ROI • Soporte 24/7" : "Risk-free implementation • ROI guarantee • 24/7 support"}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
          >
            {isES ? "Solicitar evaluación gratis" : "Request free evaluation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {isES ? "Métricas de impacto comprobadas" : "Proven impact metrics"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "70%", descES: "Reducción de costos operativos", descEN: "Reduction in operating costs" },
              { value: "6-8w", descES: "Tiempo de implementación", descEN: "Implementation time" },
              { value: "300%", descES: "ROI promedio en 12 meses", descEN: "Average ROI in 12 months" },
              { value: "24/7", descES: "Soporte y monitoreo", descEN: "Support and monitoring" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-background rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                <p className="text-sm text-muted-foreground">{isES ? item.descES : item.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {isES ? "Qué automatizamos" : "What we automate"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: DollarSign,
                titleES: "Procesos Financieros",
                titleEN: "Financial Processes",
                descES: "Facturación, reportes, reconciliación, análisis de pagos",
                descEN: "Invoicing, reports, reconciliation, payment analysis",
              },
              {
                icon: Clock,
                titleES: "Gestión de Tiempo",
                titleEN: "Time Management",
                descES: "Scheduling, asignación de recursos, planificación de proyectos",
                descEN: "Scheduling, resource allocation, project planning",
              },
              {
                icon: BarChart3,
                titleES: "Análisis de Datos",
                titleEN: "Data Analytics",
                descES: "Procesamiento de big data, predicción, insights automáticos",
                descEN: "Big data processing, forecasting, automated insights",
              },
              {
                icon: Zap,
                titleES: "Procesos Operacionales",
                titleEN: "Operational Processes",
                descES: "Logística, cadena de suministro, gestión de inventario",
                descEN: "Logistics, supply chain, inventory management",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-muted/50 rounded-lg border border-border">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">{isES ? item.titleES : item.titleEN}</h3>
                <p className="text-sm text-muted-foreground">{isES ? item.descES : item.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {isES ? "Fases de implementación" : "Implementation phases"}
          </h2>
          <div className="space-y-6">
            {[
              {
                phase: "1",
                titleES: "Auditoría y diagnóstico (Semanas 1-2)",
                titleEN: "Audit and diagnosis (Weeks 1-2)",
                descES: "Análisis exhaustivo de procesos actuales, identificación de automatización, cálculo de ROI específico",
                descEN: "Exhaustive analysis of current processes, automation identification, specific ROI calculation",
              },
              {
                phase: "2",
                titleES: "Diseño de solución (Semanas 2-3)",
                titleEN: "Solution design (Weeks 2-3)",
                descES: "Arquitectura técnica, integraciones, flujos de trabajo, validación con tu equipo",
                descEN: "Technical architecture, integrations, workflows, validation with your team",
              },
              {
                phase: "3",
                titleES: "Piloto e iteración (Semanas 4-5)",
                titleEN: "Pilot and iteration (Weeks 4-5)",
                descES: "Implementación en ambiente controlado, testing, ajustes según feedback",
                descEN: "Implementation in controlled environment, testing, adjustments per feedback",
              },
              {
                phase: "4",
                titleES: "Producción y escalado (Semanas 6-8)",
                titleEN: "Production and scaling (Weeks 6-8)",
                descES: "Deploy en producción, monitoreo 24/7, optimización continua y capacitación del equipo",
                descEN: "Production deployment, 24/7 monitoring, continuous optimization and team training",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 p-6 bg-muted/50 rounded-lg border border-border">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground font-bold flex items-center justify-center">
                    {item.phase}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">{isES ? item.titleES : item.titleEN}</h3>
                  <p className="text-sm text-muted-foreground">{isES ? item.descES : item.descEN}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {isES ? "Transformación digital comienza aquí" : "Digital transformation starts here"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {isES
              ? "Nos comprometemos a ROI garantizado en 6 meses o devolvemos la inversión."
              : "We commit to guaranteed ROI in 6 months or we return your investment."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            {isES ? "Iniciar transformación" : "Start transformation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
