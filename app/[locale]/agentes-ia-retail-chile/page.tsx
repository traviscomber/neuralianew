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
    title: isES ? "Agentes de IA para Retail en Chile | Atención 24/7" : "AI Agents for Retail in Chile | 24/7 Support",
    description: isES ? "Automatización para retail: atención al cliente 24/7, gestión de inventario, análisis de ventas. Reduce costos, aumenta conversión." : "Automation for retail: 24/7 customer service, inventory management, sales analysis. Reduce costs, increase conversion.",
    keywords: isES ? "agentes IA retail, IA ecommerce Chile, atención cliente IA" : "AI agents retail, AI ecommerce Chile",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-retail-chile` },
  }
}

export default function AgentesIARetailPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16 relative overflow-hidden">
        <SectionBackground />
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">{isES ? "Retail" : "Retail"}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            {isES ? "Agentes de IA para Retail en Chile" : "AI Agents for Retail in Chile"}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {isES ? "Atención al cliente 24/7, gestión inteligente de inventario, análisis predictivo de demanda. Aumenta conversión, reduce costos operativos." : "24/7 customer service, intelligent inventory management, demand forecasting. Increase conversion, reduce operating costs."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            {isES ? "Consultar para retail" : "Consult for retail"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/20">
            <h2 className="text-2xl font-bold mb-8">{isES ? "Datos Chile - Contexto del Retail" : "Chile Data - Retail Context"}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">+3.2%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Actividad Comercio" : "Commerce Activity"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "INE, abril 2026" : "INE, April 2026"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">+14.2%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "E-commerce Interanual" : "E-commerce YoY"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "INE, abril 2026" : "INE, April 2026"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">$11.5B</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Proyección Mercado" : "Market Projection"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "CCS, 2025" : "CCS, 2025"}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "Dónde impacta IA en 90 días" : "Where AI impacts in 90 days"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Predicción de demanda y reposición para campañas" : "Demand forecasting and replenishment"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Atención postventa omnicanal" : "Omnichannel post-sales support"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Orquestación de pricing y promos" : "Pricing and promo orchestration"}
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "KPIs esperables" : "Expected KPIs"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menos quiebres y sobrestock" : "Fewer stockouts and overstock"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menor tiempo respuesta postventa" : "Reduced post-sales response time"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Mejor conversión en campañas" : "Better campaign conversion"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{isES ? "Los dolores del retail hoy en Chile" : "Current retail pain points in Chile"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "📞 Atención fragmentada" : "📞 Fragmented Support"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Clientes contactan por múltiples canales (email, WhatsApp, chat, phone) sin coordinación. Las respuestas se duplican, se pierden datos, los tiempos de respuesta se disparan." : "Customers contact via multiple channels (email, WhatsApp, chat, phone) with no coordination. Responses duplicate, data gets lost, response times explode."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: clientes frustrados, pérdida de ventas" : "Result: frustrated customers, lost sales"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "📦 Inventario descontrolado" : "📦 Uncontrolled Inventory"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Sin visión en tiempo real de stock. Quiebres cuando la demanda sube, sobrestock cuando baja. Reorden manual = decisiones lentas. Dinero atrapado en mercadería." : "No real-time stock visibility. Stockouts when demand spikes, overstock when it drops. Manual reordering = slow decisions. Cash locked in inventory."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: margen erosionado, capital inmovilizado" : "Result: eroded margins, tied-up capital"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "💰 Precios y promos desalineados" : "💰 Misaligned Pricing"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Ajustes de precio manual y descoordinados entre canales. Promociones que no generan el ROI esperado. Competidores se mueven más rápido." : "Manual, uncoordinated pricing across channels. Promotions that don't deliver expected ROI. Competitors move faster."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: pérdida de competitividad, erosión de margen" : "Result: lost competitiveness, margin erosion"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "📊 Análisis manual = retraso" : "📊 Manual analysis = delay"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Reportes que se generan semanalmente o mensualmente. Decisiones basadas en datos viejos. No hay insights en tiempo real sobre qué vende, por qué, y qué hace falta." : "Reports generated weekly or monthly. Decisions based on old data. No real-time insights on what sells, why, and what's missing."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: oportunidades perdidas, reactividad vs. proactividad" : "Result: missed opportunities, reactive not proactive"}</p>
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
                  <h3 className="font-bold text-lg mb-2">{isES ? "Orquestación omnicanal" : "Omnichannel orchestration"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Un único punto de entrada para todos los canales (email, WhatsApp, chat, phone). Los agentes IA de N3uralia responden en tiempo real, con contexto completo del cliente. Una conversación, un resultado." : "Single entry point for all channels (email, WhatsApp, chat, phone). N3uralia AI agents respond in real-time with complete customer context. One conversation, one outcome."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -80% en tiempo de respuesta | +40% en satisfacción" : "Impact: -80% response time | +40% satisfaction"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Motor de inventario inteligente" : "Smart inventory engine"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Visión 24/7 de stock en todos los canales. Predicción automática de demanda basada en histórico, seasonalidad, y tendencias. Reorden automático al punto óptimo. Alertas de quiebre antes de que suceda." : "24/7 stock visibility across all channels. Automatic demand forecasting based on history, seasonality, trends. Auto-reorder at optimal point. Break-prevention alerts."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -30% quiebres | -25% sobrestock | +20% capital efficiency" : "Impact: -30% stockouts | -25% overstock | +20% capital efficiency"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Automatización de pricing + promos" : "Pricing + promo automation"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Precios dinámicos que se ajustan según demanda, competencia, y margen objetivo. Promociones que se activan automáticamente basadas en inventario y oportunidad. Todo sincronizado en tiempo real en todos los canales." : "Dynamic pricing adjusts based on demand, competition, target margin. Promotions trigger automatically based on inventory and opportunity. Real-time sync across all channels."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: +15% AOV | +25% margen en promos | +10% conversión" : "Impact: +15% AOV | +25% promo margin | +10% conversion"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Análisis real-time + decisiones automatizadas" : "Real-time analysis + automated decisions"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Dashboard en vivo con todo lo que importa: qué vende, cuándo, por qué, qué falta. Alertas inteligentes cuando algo anómalo sucede. Reportes que se generan automáticamente. Decisiones que se ejecutan sin intervención." : "Live dashboard with everything that matters: what sells, when, why, what's missing. Smart alerts for anomalies. Auto-generated reports. Decisions execute without intervention."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: -200+ horas/mes en análisis manual | +40% en velocidad de decisión" : "Impact: -200+ hours/month manual analysis | +40% decision speed"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Beneficios para retail" : "Benefits for retail"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titleES: "Atención 24/7", titleEN: "24/7 Support", descES: "Agentes conversacionales que atienden clientes en cualquier hora, en español" },
              { titleES: "Gestión de Inventario", titleEN: "Inventory Management", descES: "Predicción automática, alertas de stock bajo, optimización de compras" },
              { titleES: "Análisis de Ventas", titleEN: "Sales Analysis", descES: "Predicción de demanda, recomendaciones de precio, insights de cliente" },
              { titleES: "Automatización Backend", titleEN: "Backend Automation", descES: "Procesamiento de órdenes, gestión de devoluciones, reportes automáticos" },
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
            <h2 className="text-2xl font-bold mb-8">{isES ? "Datos Chile - Contexto del Retail" : "Chile Data - Retail Context"}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">+3.2%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Actividad Comercio" : "Commerce Activity"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "INE, abril 2026" : "INE, April 2026"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">+14.2%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "E-commerce Interanual" : "E-commerce YoY"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "INE, abril 2026" : "INE, April 2026"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">$11.5B</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Proyección Mercado" : "Market Projection"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "CCS, 2025" : "CCS, 2025"}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "Dónde impacta IA en 90 días" : "Where AI impacts in 90 days"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Predicción de demanda y reposición para campañas" : "Demand forecasting and replenishment"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Atención postventa omnicanal" : "Omnichannel post-sales support"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Orquestación de pricing y promos" : "Pricing and promo orchestration"}
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "KPIs esperables" : "Expected KPIs"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menos quiebres y sobrestock" : "Fewer stockouts and overstock"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menor tiempo respuesta postventa" : "Reduced post-sales response time"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Mejor conversión en campañas" : "Better campaign conversion"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Transforma tu retail" : "Transform your retail"}</h2>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Agendar consulta retail" : "Schedule retail consultation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
