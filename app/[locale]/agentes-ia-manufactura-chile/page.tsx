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

      {/* OPERATIONAL PAIN POINTS */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{isES ? "Los dolores de la manufactura hoy en Chile" : "Current manufacturing pain points in Chile"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "📉 Variabilidad en cumplimiento" : "📉 Production variability"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Producción no es predecible. Un día cumples 100%, otro 75%. Clientes no saben si recibirán a tiempo. Inventarios crecen para compensar incertidumbre. Costos de almacenamiento se disparan." : "Production is unpredictable. One day 100%, next day 75%. Customers unsure of delivery dates. Inventory grows to compensate. Storage costs skyrocket."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -$XXX/mes en almacenamiento, clientes insatisfechos" : "Result: -$XXX/month storage, unhappy customers"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "🔧 Calidad inconsistente" : "🔧 Inconsistent quality"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Sin monitoreo en tiempo real de procesos. Defectos se descubren al final de la línea. Reproceso, rechazo, devoluciones. Merma se come el margen." : "No real-time process monitoring. Defects discovered end-of-line. Rework, rejection, returns. Waste erodes margin."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -5-10% en margen por merma + devoluciones" : "Result: -5-10% margin from waste + returns"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "📦 Planificación manual = retraso" : "📦 Manual planning = delay"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Planificación de producción se hace por planilla. Cambios de orden inesperados crean caos. No hay visibilidad de cuellos de botella hasta que la producción se paraliza. Reacción = horas o días." : "Production planning via spreadsheet. Unexpected order changes create chaos. Bottlenecks invisible until production stalls. Reaction = hours or days."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -20-30% en velocidad de respuesta a cambios" : "Result: -20-30% change response speed"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "💰 Inventario muerto" : "💰 Dead inventory"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Materias primas compradas sin coordinación clara con demanda. Productos terminados que no se venden. Capital atrapado. Sin visibilidad de rotación." : "Raw materials purchased without clear demand coordination. Finished goods that don't sell. Capital trapped. No rotation visibility."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -$XXX en capital inmovilizado, rotación <4 veces/año" : "Result: -$XXX tied-up capital, <4x/year turnover"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW N3URALIA SOLVES IT */}
      <section className="py-16 px-4 bg-primary/5 border-t border-primary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{isES ? "Cómo lo resolvemos en N3uralia" : "How N3uralia solves it"}</h2>
          <div className="space-y-8">
            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Planificación dinámica real-time" : "Real-time dynamic planning"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Sistema que replanifica producción cada 15 minutos basado en cambios reales. Cambios de orden se incorporan sin caos. Cuellos de botella se detectan automáticamente y se sugieren reasignaciones. Oportunidades de optimización en tiempo real." : "System replans production every 15 minutes based on real changes. Order changes integrate without chaos. Bottlenecks auto-detected with suggested reassignments. Real-time optimization opportunities."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: +25-30% en cumplimiento | -40% en urgencias/cambios" : "Impact: +25-30% fulfillment | -40% in rush changes"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Control de calidad automático" : "Automated quality control"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Monitoreo continuo de parámetros de proceso (temperatura, presión, tiempo). Desviaciones detectadas en SEGUNDOS. Alertas antes de que se genere material defectuoso. Trazabilidad 100%." : "Continuous monitoring of process parameters (temperature, pressure, time). Deviations detected in SECONDS. Alerts before defective material. 100% traceability."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -80% defectos | -50% reproceso | +8-12% margen" : "Impact: -80% defects | -50% rework | +8-12% margin"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Sincronización planta-compras-logística" : "Plant-supply-logistics sync"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Un sistema central que conecta demanda real con compras y logística. Materias primas llegan justo a tiempo, no antes. Productos terminados se envían minimizando almacenaje. Capital circulante optimizado." : "Central system connects real demand with supply and logistics. Raw materials arrive just-in-time. Finished goods ship with minimal storage. Optimized working capital."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -30% inventario | +4-6x rotación | +$XXX en capital liberado" : "Impact: -30% inventory | +4-6x turnover | +$XXX capital freed"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Análisis predictivo + automatización" : "Predictive analytics + automation"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Modelos que predicen cuellos de botella horas antes. Alertas que permiten acción preventiva. Reportes diarios con tendencias y oportunidades. Decisiones que se ejecutan automáticamente dentro de parámetros." : "Models predict bottlenecks hours ahead. Alerts enable preventive action. Daily reports with trends and opportunities. Auto-executed decisions within parameters."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -60% análisis manual | +50% en velocidad decisión | -15% en costos operacionales" : "Impact: -60% manual analysis | +50% decision speed | -15% operational costs"}</p>
                </div>
              </div>
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
