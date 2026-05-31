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
      <section className="py-20 px-4 bg-background relative overflow-hidden pt-32">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            {isES ? "Agentes de IA para Retail en Chile" : "AI Agents for Retail in Chile"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            {isES ? "Atención al cliente 24/7, gestión inteligente de inventario, análisis predictivo de demanda. Aumenta conversión, reduce costos operativos." : "24/7 customer service, intelligent inventory management, demand forecasting. Increase conversion, reduce operating costs."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
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
                <p className="text-xs text-muted-foreground">{isES ? "CCS, 2024" : "CCS, 2024"}</p>
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
