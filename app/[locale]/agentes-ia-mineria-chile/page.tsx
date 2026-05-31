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
    title: isES ? "Agentes de IA para Minería en Chile | Casos de Éxito" : "AI Agents for Mining in Chile | Success Cases",
    description: isES ? "Automatización inteligente para minería chilena. Optimización de procesos, predicción de fallos, análisis de datos en tiempo real. ROI garantizado." : "Intelligent automation for Chilean mining. Process optimization, predictive maintenance, real-time data analysis. Guaranteed ROI.",
    keywords: isES ? "agentes IA minería, automatización minería Chile, IA en minería" : "AI agents mining, mining automation Chile",
    alternates: {
      canonical: `https://n3uralia.com/${locale}/agentes-ia-mineria-chile`,
      languages: {
        es: 'https://n3uralia.com/es/agentes-ia-mineria-chile',
        en: 'https://n3uralia.com/en/agentes-ia-mineria-chile',
      },
    },
  }
}

export default function AgentesIAMineriaPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">{isES ? "Minería" : "Mining"}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground text-balance">
            {isES ? "Agentes de IA para Minería en Chile" : "AI Agents for Mining in Chile"}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {isES ? "Planificación inteligente de operaciones, predictibilidad en mantención, optimización de recursos. Mejora disponibilidad, reduce costos y riesgos operacionales." : "Intelligent operations planning, maintenance predictability, resource optimization. Improve uptime, reduce costs and operational risks."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            {isES ? "Consultar para minería" : "Consult for mining"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* OPERATIONAL PAIN POINTS */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-center">{isES ? "Los dolores de la minería hoy en Chile" : "Current mining pain points in Chile"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "⏹️ Downtime no planificado" : "⏹️ Unplanned downtime"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Fallas en equipamiento se detectan tarde. Una máquina fuera de servicio por horas = pérdida de producción, costos de oportunidad enormes. Sin visibilidad predictiva, reaccionas cuando ya ocurrió el daño." : "Equipment failures detected too late. One machine down for hours = massive production loss and opportunity cost. Without predictive visibility, you react after damage occurs."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -$280-450K/hora en producción perdida" : "Result: -$280-450K/hour in lost production"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "💡 Energía descontrolada" : "💡 Uncontrolled energy"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Consumo energético fluctúa sin patrón claro. Sin optimización en tiempo real, pagas más de lo necesario. Oportunidades de ahorro se pierden por falta de visibilidad." : "Energy consumption fluctuates with no clear pattern. Without real-time optimization, you overpay. Savings opportunities are lost through lack of visibility."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -15-25% en margen por costo energía" : "Result: -15-25% margin due to energy cost"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "👥 Coordin ación manual" : "👥 Manual coordination"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Decisiones de operación se toman en reuniones, se comunican manualmente, se ejecutan con lag. Faena tiene múltiples sistemas sin hablar entre sí. Una decisión crítica tarda horas en cascada." : "Operations decisions made in meetings, communicated manually, executed with lag. Multiple disconnected systems on site. Critical decisions cascade over hours."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -20-30% en velocidad operacional" : "Result: -20-30% in operational speed"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "📊 Análisis sin acción" : "📊 Analysis without action"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Reportes que se generan al final de turno/semana. Datos viejos que no sirven para tomar decisiones hoy. KPIs que no se cumplen porque se descubren el problema después." : "Reports generated end-of-shift/week. Old data that doesn't help today's decisions. KPIs missed because problems discovered afterwards."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: oportunidades perdidas, reactividad vs proactividad" : "Result: lost opportunities, reactive not proactive"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW N3URALIA SOLVES IT */}
      <section className="py-16 px-4 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-center">{isES ? "Cómo lo resolvemos en N3uralia" : "How N3uralia solves it"}</h2>
          <div className="space-y-8">
            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Mantenimiento predictivo automático" : "Automated predictive maintenance"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Monitoreo 24/7 de todos los equipos. Patrones de fallo detectados antes de ocurrir. Alertas inteligentes al equipo correcto. Mantenimiento programado = cero downtime sorpresa." : "24/7 monitoring of all equipment. Failure patterns detected before they occur. Smart alerts to the right team. Scheduled maintenance = no surprise downtime."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -50% downtime no planificado | -40% costos mantención" : "Impact: -50% unplanned downtime | -40% maintenance costs"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Optimización energética en tiempo real" : "Real-time energy optimization"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Análisis continuo del consumo por proceso. Identificación de oportunidades de ahorro. Decisiones automáticas que reducen consumo sin perder producción. Reportes diarios que muestran el impacto." : "Continuous analysis of consumption by process. Savings opportunities identified. Automatic decisions reduce consumption without production loss. Daily reports show impact."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -15-20% en costo energético | +$95-140K/mes en margen" : "Impact: -15-20% energy cost | +$95-140K/month margin"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Orquestación operacional centralizada" : "Centralized operations orchestration"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Un sistema central que coordina decisiones entre faena, procesamiento, logística. Cambios en un área se replican automáticamente. Cuellos de botella se detectan y alertan antes de afectar producción." : "One central system coordinating decisions across pit, processing, logistics. Changes ripple automatically. Bottlenecks detected and alerted before production impact."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: +25-30% en velocidad operacional | -10% en costos coordinación" : "Impact: +25-30% operational speed | -10% coordination costs"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Intelligence 24/7 accionable" : "24/7 actionable intelligence"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Dashboard en vivo de toda la operación. Alertas inteligentes cuando algo anómalo sucede. Decisiones automáticas en segundos, no horas. Reportes que se generan continuamente, no al final del turno." : "Live operations dashboard. Smart alerts for anomalies. Automatic decisions in seconds, not hours. Reports generated continuously, not end-of-shift."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -70% horas análisis manual | +40% en capacidad de decisión" : "Impact: -70% manual analysis hours | +40% decision capacity"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Soluciones para minería" : "Solutions for mining"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titleES: "Optimización de Operaciones", titleEN: "Operations Optimization", descES: "Análisis en tiempo real, predicción de producción, detección de anomalías" },
              { titleES: "Predictive Maintenance", titleEN: "Predictive Maintenance", descES: "Predicción de fallos, programación de mantención, reducción de downtime" },
              { titleES: "Gestión de Seguridad", titleEN: "Safety Management", descES: "Monitoreo de seguridad, alertas de riesgos, compliance automático" },
              { titleES: "Análisis de Datos", titleEN: "Data Analysis", descES: "Procesamiento de millones de datos, insights accionables, reportes automáticos" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-bold mb-2">{isES ? item.titleES : item.titleEN}</h3>
                <p className="text-sm text-muted-foreground">{item.descES}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-6">{isES ? "ROI en minería" : "ROI in mining"}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: "30%", descES: "Reducción costos operativos", descEN: "Operational cost reduction" },
              { metric: "50%", descES: "Menos downtime", descEN: "Less downtime" },
              { metric: "300%", descES: "ROI anual", descEN: "Annual ROI" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-muted/50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                <p className="text-sm text-muted-foreground">{isES ? item.descES : item.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 px-4 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            {isES ? "¿Por qué AHORA?" : "Why NOW?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {isES
              ? "Tres razones por las que el momento es exactamente AHORA para implementar agentes IA en Minería"
              : "Three reasons why NOW is exactly the right time to implement AI agents in Minería"}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-background border border-primary/20 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {isES ? "La crisis de talento es REAL" : "The talent crisis is REAL"}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {isES
                  ? "Ingenieros de minas, especialistas en datos y sistemas: imposible encontrar. Salarios disparados. Automatización predictiva vs hiring: diferencia es 10x."
                  : "Mining engineers and data specialists: impossible to find. Soaring salaries. Predictive automation vs hiring: 10x difference."}
              </p>
              <div className="p-3 bg-primary/10 rounded text-sm font-semibold text-primary">
                {isES ? "ROI: 8-12 meses" : "ROI: 8-12 months"}
              </div>
            </div>

            <div className="p-6 bg-background border border-primary/20 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {isES ? "Paradas no planificadas = pérdida de millones" : "Unplanned downtime = millions lost"}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {isES
                  ? "1 parada imprevista = $500K perdidos. El mercado de cobre necesita 99.8% uptime. Sin predictivo, tus márgenes caen."
                  : "1 unplanned downtime = $500K lost. Copper market needs 99.8% uptime. Without predictive maintenance, margins drop."}
              </p>
              <div className="p-3 bg-primary/10 rounded text-sm font-semibold text-primary">
                {isES ? "Pérdidas evitadas: $1.8M+" : "Losses prevented: $1.8M+"}
              </div>
            </div>

            <div className="p-6 bg-background border border-primary/20 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {isES ? "Los presupuestos de transformación están DISPONIBLES" : "Digital transformation budgets AVAILABLE"}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {isES
                  ? "Gobierno impulsa automatización en minería como prioridad. Subsidios para digitales. Competidores lo hacen ya."
                  : "Government pushing mining automation as priority. Digital subsidies available. Competitors doing it now."}
              </p>
              <div className="p-3 bg-primary/10 rounded text-sm font-semibold text-primary">
                {isES ? "Hasta 70% de subsidio" : "Up to 70% subsidy"}
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-foreground text-background rounded-lg text-center">
            <p className="text-lg font-semibold">
              {isES
                ? "Los minerales que implementan IA AHORA van a tener 10x mejor EBITDA en 2027."
                : "Mining companies implementing AI NOW will have 10x better EBITDA by 2027."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto w-full">
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/20">
            <h2 className="text-2xl font-bold mb-8">{isES ? "Datos Chile - Contexto de Minería" : "Chile Data - Mining Context"}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">5.5 Mt</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Producción Cobre" : "Copper Production"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "Cochilco, 2025" : "Cochilco, 2025"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">+4.1%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Consumo Energía" : "Energy Consumption"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "Cochilco, 2025" : "Cochilco, 2025"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">-9.0%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Producción Minera" : "Mining Production"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "INE, abril 2026" : "INE, April 2026"}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "Dónde impacta IA en 90 días" : "Where AI impacts in 90 days"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Priorización inteligente de mantención" : "Intelligent maintenance prioritization"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Copilotos sala de control" : "Control room copilots"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Optimización planificación diaria" : "Daily planning optimization"}
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "KPIs esperables" : "Expected KPIs"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menos horas de detención no planificada" : "Fewer unplanned downtime hours"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Mejor uso energía por tonelada" : "Better energy per ton"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Mayor estabilidad operacional" : "Higher operational stability"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">{isES ? "¿Listo para transformar tu minería?" : "Ready to transform your mining?"}</h2>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Agendar consulta minería" : "Schedule mining consultation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
