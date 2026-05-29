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
    title: isES ? "Costo de Agentes de IA: Qué Esperar en 2026 | N3uralia" : "Cost of AI Agents: What to Expect in 2026 | N3uralia",
    description: isES ? "Precios reales de agentes IA en Chile. Desde $50K USD para startups hasta $500K+. Incluye ROI breakdown y payment options." : "Real AI agent prices in Chile. From $50K USD for startups to $500K+. Includes ROI breakdown and payment options.",
    keywords: isES ? "costo agentes ia, precio agentes ia Chile, cuánto cuesta IA" : "cost AI agents, price AI agents Chile",
  }
}

export default function CostoAgentesIAPage({ params }: PageProps) {
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
            {isES ? "Costo de Agentes de IA: Qué Esperar en 2026" : "Cost of AI Agents: What to Expect in 2026"}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {isES ? "Publicado: 29 de Mayo, 2026 • Transparencia de precios" : "Published: May 29, 2026 • Pricing transparency"}
          </p>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "Rango de precios" : "Price range"}</h2>
              <div className="space-y-3">
                {(isES
                  ? [
                    { size: "Startup (1-50 personas)", price: "$50K-100K USD", desc: "1-2 agentes simples, integración básica" },
                    { size: "PyME (51-500 personas)", price: "$100K-250K USD", desc: "3-5 agentes, integraciones medias, capacitación" },
                    { size: "Empresa (501-5,000 personas)", price: "$250K-500K USD", desc: "5-10 agentes, arquitectura compleja, soporte dedicado" },
                  ]
                  : [
                    { size: "Startup (1-50 people)", price: "$50K-100K USD", desc: "1-2 simple agents, basic integration" },
                    { size: "SME (51-500 people)", price: "$100K-250K USD", desc: "3-5 agents, mid-level integrations, training" },
                    { size: "Enterprise (501-5,000 people)", price: "$250K-500K USD", desc: "5-10 agents, complex architecture, dedicated support" },
                  ]
                ).map((tier, i) => (
                  <div key={i} className="p-4 bg-muted/50 rounded-lg border border-border">
                    <h3 className="font-bold text-foreground">{tier.size}</h3>
                    <p className="text-primary font-semibold">{tier.price}</p>
                    <p className="text-sm mt-1">{tier.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "¿Por qué este rango?" : "Why this range?"}</h2>
              <ul className="space-y-2">
                {(isES
                  ? [
                    "Complejidad del proyecto: 1 agente simple ≠ arquitectura multi-agente",
                    "Integraciones: Conectar a tus sistemas existentes toma tiempo",
                    "Datos: Recopilar y limpiar datos es crítico",
                    "Capacitación: Entrenar a tu equipo no es gratis",
                    "Soporte: Post-launch monitoring y optimización",
                  ]
                  : [
                    "Project complexity: 1 simple agent ≠ multi-agent architecture",
                    "Integrations: Connecting to existing systems takes time",
                    "Data: Collecting and cleaning data is critical",
                    "Training: Training your team isn't free",
                    "Support: Post-launch monitoring and optimization",
                  ]
                ).map((reason, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isES ? "ROI Guarantee" : "ROI Guarantee"}</h2>
              <p>{isES ? "En N3uralia, ofrecemos garantía de ROI positivo en 6 meses. Si no cumplimos, devolvemos la inversión. Eso es confianza basada en resultados reales." : "At N3uralia, we offer a positive ROI guarantee in 6 months. If we don't deliver, we return your investment. That's confidence based on real results."}</p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href={`/${locale}/contact`} className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-block">
              {isES ? "Solicitar presupuesto personalizado" : "Request custom quote"}
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
