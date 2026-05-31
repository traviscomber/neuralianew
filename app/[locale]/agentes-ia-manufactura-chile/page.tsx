import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { isValidLocale, DEFAULT_LOCALE } from '@/lib/get-locale'
import type { Locale } from '@/content/dictionaries'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

interface PageProps { params: { locale: string } }

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"
  return {
    title: isES ? "Agentes de IA para Manufactura en Chile | Control de Calidad" : "AI Agents for Manufacturing in Chile | Quality Control",
    description: isES ? "Automatización para manufactura: control de calidad, predictive maintenance, optimización de producción. Aumenta productividad, reduce defectos." : "Automation for manufacturing: quality control, predictive maintenance, production optimization. Increase productivity, reduce defects.",
    keywords: isES ? "agentes IA manufactura, IA industria 4.0 Chile, control calidad IA" : "AI agents manufacturing, AI industry 4.0 Chile",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-manufactura-chile` },
  }
}

export default function AgentesIAManufacturaPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 bg-background relative overflow-hidden pt-32">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            {isES ? "Agentes de IA para Manufactura en Chile" : "AI Agents for Manufacturing in Chile"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            {isES ? "Control de calidad automático, mantenimiento predictivo, optimización de producción. Implementa Industria 4.0 sin reemplazar tu infraestructura." : "Automated quality control, predictive maintenance, production optimization. Implement Industry 4.0 without replacing infrastructure."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Consultar para manufactura" : "Consult for manufacturing"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/20">
            <h2 className="text-2xl font-bold mb-8">{isES ? "Datos Chile - Contexto de Manufactura" : "Chile Data - Manufacturing Context"}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">-2.5%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Producción Manufacturera" : "Manufacturing Production"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "INE, abril 2026" : "INE, April 2026"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">+5.9%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Inventarios Manufactureros" : "Manufacturing Inventories"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "INE, marzo 2026" : "INE, March 2026"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">10/18</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Divisiones en Alza" : "Divisions Growing"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "INE, sectores" : "INE, sectors"}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "Dónde impacta IA en 90 días" : "Where AI impacts in 90 days"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Planificación dinámica de producción" : "Dynamic production planning"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Detección temprana de anomalías" : "Early anomaly detection"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Coordinación inventarios críticos" : "Critical inventory coordination"}
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "KPIs esperables" : "Expected KPIs"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menor variabilidad cumplimiento" : "Lower compliance variability"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Reducción merma y reproceso" : "Lower waste and rework"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Mejor rotación de inventario" : "Better inventory turnover"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Soluciones para manufactura" : "Manufacturing solutions"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titleES: "Control de Calidad", titleEN: "Quality Control", descES: "Inspección visual automática con IA, detección de defectos en tiempo real" },
              { titleES: "Mantenimiento Predictivo", titleEN: "Predictive Maintenance", descES: "Anticipación de fallos, programación automática de mantención" },
              { titleES: "Optimización Producción", titleEN: "Production Optimization", descES: "Ajuste dinámico de parámetros, reducción de desperdicios, aumento de eficiencia" },
              { titleES: "Trazabilidad", titleEN: "Traceability", descES: "Seguimiento completo de productos, cumplimiento normativo automático" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-bold mb-2">{isES ? item.titleES : item.titleEN}</h3>
                <p className="text-sm text-muted-foreground">{item.descES}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Industria 4.0 en Chile" : "Industry 4.0 in Chile"}</h2>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Agendar consulta manufactura" : "Schedule manufacturing consultation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
