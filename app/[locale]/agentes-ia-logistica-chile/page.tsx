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
    title: isES ? "Agentes de IA para Logística en Chile | Optimización de Rutas" : "AI Agents for Logistics in Chile | Route Optimization",
    description: isES ? "Automatización para logística: optimización de rutas, predicción de entregas, gestión de flota. Reduce tiempo y costos de distribución." : "Automation for logistics: route optimization, delivery forecasting, fleet management. Reduce delivery time and costs.",
    keywords: isES ? "agentes IA logística, IA supply chain Chile, optimización rutas" : "AI agents logistics, AI supply chain Chile",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-logistica-chile` },
  }
}

export default function AgentesIALogisticaPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 relative overflow-hidden">
        <SectionBackground />
        <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16">
          <div className="max-w-4xl w-full flex items-center gap-12">
            {/* Content on left */}
            <div className="flex-1 text-center md:text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">{isES ? "Logística" : "Logistics"}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
                {isES ? "Agentes de IA para Logística en Chile" : "AI Agents for Logistics in Chile"}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {isES ? "Torre de control con alertas tempranas, priorización de despachos por SLA, automatización documental. Mejora OTIF, reduce costos, resuelve incidencias más rápido." : "Control tower with early alerts, dispatch prioritization by SLA, document automation. Improve OTIF, reduce costs, resolve incidents faster."}
              </p>
              <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
                {isES ? "Consultar para logística" : "Consult for logistics"}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Decorative placeholder on right */}
            <div className="flex-1 hidden lg:flex items-center justify-center">
              <div className="w-full aspect-square bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-6xl mb-4">📦</div>
                  <p className="text-sm">{isES ? "Visualización de datos" : "Data Visualization"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-center">{isES ? "Los dolores de la logística hoy en Chile" : "Current logistics pain points in Chile"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "🗺️ Rutas ineficientes" : "🗺️ Inefficient routes"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Las rutas se planifican manualmente o con criterios viejos. No consideran tráfico real, cambios de última hora, o nuevos pedidos. Kilómetros recorridos = dinero gastado en combustible + tiempo + desgaste. Ineficiencia en 20-30% de rutas." : "Routes planned manually or with outdated criteria. Don't account for real traffic, last-minute changes, new orders. Miles driven = wasted fuel + time + wear. 20-30% route inefficiency."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -20-30% en eficiencia, +$XXX/mes en combustible" : "Result: -20-30% efficiency, +$XXX/month fuel waste"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "❌ Entregas incumplidas" : "❌ Missed deliveries"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Sin visibilidad real de entregas hasta que ocurren. Clientes no saben cuándo llegará su paquete. Cambios por no poder entregar en horario prometido. Pago de multas por incumplimiento. NPS degrada." : "No real-time delivery visibility until it happens. Customers don't know when their package arrives. Rescheduling when can't deliver on time. Fines for missed commitments. NPS suffers."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -5-15% OTIF, -2-3 puntos NPS, -$XXX en multas" : "Result: -5-15% OTIF, -2-3 NPS points, -$XXX penalties"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "📋 Documentación manual" : "📋 Manual documentation"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Guías, comprobantes, recibos se llenan a mano. Errores de tipeo, pérdida de datos, inconsistencias. No hay trazabilidad clara si hay reclamo. Horas de trabajo en procesamiento administrativo." : "Waybills, receipts, confirmations filled by hand. Typos, lost data, inconsistencies. No clear traceability if claim occurs. Hours spent on admin processing."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -100+ horas/mes en admin, -50% en capacidad de resolver reclamos" : "Result: -100+ hours/month admin, -50% claim resolution capacity"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "🚚 Flota descontrolada" : "🚚 Uncontrolled fleet"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Sin visibilidad de dónde está cada vehículo. Mantenimiento reactivo: avería = detención. Combustible se gasta más de lo budgetado. Chofer puede tomar rutas ineficientes o personales. Sin datos para optimizar." : "No visibility where each vehicle is. Reactive maintenance: breakdown = stoppage. Fuel spending exceeds budget. Driver can take inefficient or personal routes. No data to optimize."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: +30-40% combustible, -40% disponibilidad, +$XXX mantenimiento" : "Result: +30-40% fuel, -40% availability, +$XXX maintenance"}</p>
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
                  <h3 className="font-bold text-lg mb-2">{isES ? "Optimización de rutas real-time" : "Real-time route optimization"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Sistema que replanifica rutas cada 5 minutos considerando: tráfico real, nuevos pedidos, restricciones de horario, capacidad de vehículos. Cada ruta optimizada = menos km, menos tiempo, menos costo. Decisiones automáticas, no manual." : "System replans routes every 5 minutes considering: real traffic, new orders, time windows, vehicle capacity. Each optimized route = fewer miles, less time, lower cost. Auto-decisions, not manual."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -20-25% en km recorridos | -15-20% combustible | +$XXX/mes ahorrado" : "Impact: -20-25% miles | -15-20% fuel | +$XXX/month saved"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Visibilidad 100% de entregas" : "100% delivery visibility"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Tracking en tiempo real de cada paquete. Clientes saben exactamente cuándo llega (ventana ±15 min). Alertas automáticas de desviaciones. Predicción de atrasos horas antes. Anticipación = cero sorpresas." : "Real-time tracking of every package. Customers know exactly when it arrives (±15 min window). Auto-alerts for deviations. Forecast delays hours ahead. Anticipation = zero surprises."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: +20-25% OTIF | +3-4 puntos NPS | -80% reclamos" : "Impact: +20-25% OTIF | +3-4 NPS points | -80% complaints"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Documentación 100% automática" : "100% automated documentation"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Guías y comprobantes se generan automáticamente. Datos capturados en tiempo real (foto de entrega, firma digital). Trazabilidad completa y auditable. Cero errores de tipeo. Resolución de reclamos en minutos, no días." : "Waybills and receipts auto-generated. Data captured in real-time (delivery photo, digital signature). Complete and auditable traceability. Zero typos. Claim resolution in minutes, not days."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -100+ horas/mes admin | +80% capacidad reclamos | +trazabilidad 100%" : "Impact: -100+ hours/month admin | +80% claims capacity | +100% traceability"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Control de flota inteligente" : "Intelligent fleet control"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "GPS + telemetría en cada vehículo. Visibilidad 100% de ubicación, comportamiento de conducción, consumo de combustible. Alertas de mantenimiento predictivo. Optimización de utilización: cuáles vehículos usar para cada ruta. Consumo controlado, disponibilidad maximizada." : "GPS + telematics on every vehicle. 100% visibility of location, driving behavior, fuel consumption. Predictive maintenance alerts. Utilization optimization: which vehicles for each route. Fuel controlled, availability maximized."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -30-35% combustible | +50% disponibilidad | -40% mantenimiento emergencia" : "Impact: -30-35% fuel | +50% availability | -40% emergency maintenance"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Soluciones logísticas" : "Logistics solutions"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titleES: "Optimización de Rutas", titleEN: "Route Optimization", descES: "Algoritmos inteligentes que minimizan distancia, tiempo y combustible" },
              { titleES: "Predicción de Entregas", titleEN: "Delivery Forecasting", descES: "Estimación exacta de tiempos, alertas de retaso, notificaciones a clientes" },
              { titleES: "Gestión de Flota", titleEN: "Fleet Management", descES: "Monitoreo en tiempo real, mantenimiento predictivo, análisis de rendimiento" },
              { titleES: "Supply Chain", titleEN: "Supply Chain", descES: "Visibilidad end-to-end, predicción de demanda, optimización de inventario" },
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
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/20">
            <h2 className="text-2xl font-bold mb-8">{isES ? "Datos Chile - Contexto de Logística" : "Chile Data - Logistics Context"}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">23.9 Mt</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Transferencia 2025" : "Transfer 2025"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "+10.5% (Puerto San Antonio)" : "+10.5% (Puerto San Antonio)"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">2.06M</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "TEU Contenedores" : "Container TEU"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "Puerto San Antonio, 2025" : "Puerto San Antonio, 2025"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">18.2 Mt</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Carga Contenedorizada" : "Containerized Cargo"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "Puerto San Antonio" : "Puerto San Antonio"}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "Dónde impacta IA en 90 días" : "Where AI impacts in 90 days"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Torre de control alertas tempranas" : "Control tower for early alerts"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Priorización despacho por SLA" : "Dispatch prioritization by SLA"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Automatización gestión documental" : "Document management automation"}
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "KPIs esperables" : "Expected KPIs"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Mayor cumplimiento OTIF" : "Higher OTIF compliance"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menor costo por orden y movimiento" : "Lower cost per order and movement"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menor tiempo resolución incidencias" : "Reduced incident resolution time"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Optimiza tu logística" : "Optimize your logistics"}</h2>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Agendar consulta logística" : "Schedule logistics consultation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
