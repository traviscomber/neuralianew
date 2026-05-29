import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { isValidLocale, DEFAULT_LOCALE } from '@/lib/get-locale'
import type { Locale } from '@/content/dictionaries'
import { Footer } from '@/components/layout/footer'

interface PageProps { params: { locale: string } }

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"
  return {
    title: isES ? "5 Industrias en Chile que Usan Agentes de IA | Casos Reales" : "5 Industries in Chile Using AI Agents | Real Cases",
    description: isES ? "Descubre cómo minería, retail, logística, manufactura y turismo en Chile están usando agentes IA. Casos reales con resultados medibles." : "Discover how mining, retail, logistics, manufacturing, and tourism in Chile are using AI agents. Real cases with measurable results.",
    keywords: isES ? "agentes ia minería, agentes ia retail, agentes ia logística Chile" : "AI agents mining, retail, logistics Chile",
  }
}

export default function IndustriasAgentesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <article className="py-20 px-4 pt-32">
        <div className="max-w-2xl mx-auto">
          <Link href={`/${locale}/blog`} className="flex items-center gap-2 text-primary hover:underline mb-8">
            <ChevronLeft className="w-4 h-4" />
            {isES ? "Volver al blog" : "Back to blog"}
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">
            {isES ? "5 Industrias en Chile que Usan Agentes de IA" : "5 Industries in Chile Using AI Agents"}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {isES ? "Publicado: 29 de Mayo, 2026 • 6 min lectura" : "Published: May 29, 2026 • 6 min read"}
          </p>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            {[
              {
                titleES: "1. Minería",
                titleEN: "1. Mining",
                descES: "Predictive maintenance, análisis de datos en tiempo real, optimización de operaciones. Ejemplo: Empresa en Antofagasta redujo downtime 50%.",
              },
              {
                titleES: "2. Retail",
                titleEN: "2. Retail",
                descES: "Atención 24/7, procesamiento de órdenes, gestión de inventario. Ejemplo: Cadena Santiago pasó de 50 empleados a 8 staff estratégico.",
              },
              {
                titleES: "3. Logística",
                titleEN: "3. Logistics",
                descES: "Optimización de rutas, tracking de flota, predicción de entregas. Ejemplo: Empresa Valparaíso ahorró 40% en combustible.",
              },
              {
                titleES: "4. Manufactura",
                titleEN: "4. Manufacturing",
                descES: "Control de calidad automático, predictive maintenance. Ejemplo: Planta Concepción redujo defectos de 3% a 0.5%.",
              },
              {
                titleES: "5. Turismo",
                titleEN: "5. Tourism",
                descES: "Reservas inteligentes, atención multiidioma 24/7. Ejemplo: Hotel en Puerto Montt aumentó ocupación de 60% a 82%.",
              },
            ].map((item, i) => (
              <section key={i}>
                <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? item.titleES : item.titleEN}</h2>
                <p>{item.descES}</p>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "¿Y tu industria?" : "What about your industry?"}</h2>
              <p>{isES ? "Si no ves tu industria aquí, no te preocupes. Agentes IA funcionan para prácticamente cualquier negocio. Lo importante es identificar los procesos que pueden automatizarse." : "If you don't see your industry here, don't worry. AI agents work for virtually any business. The key is identifying which processes can be automated."}</p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href={`/${locale}/contact`} className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-block">
              {isES ? "Consultar para mi industria" : "Consult for my industry"}
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
