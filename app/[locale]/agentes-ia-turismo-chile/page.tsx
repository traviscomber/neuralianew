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
    title: isES ? "Agentes de IA para Turismo en Chile | Experiencia 24/7" : "AI Agents for Tourism in Chile | 24/7 Experience",
    description: isES ? "Automatización para turismo: reservas inteligentes, atención multiidioma 24/7, recomendaciones personalizadas. Aumenta ocupación, mejora NPS." : "Automation for tourism: smart reservations, multilingual 24/7 support, personalized recommendations. Increase occupancy, improve NPS.",
    keywords: isES ? "agentes IA turismo, chatbot turismo Chile, automatización hoteles" : "AI agents tourism, tourism chatbot Chile",
    alternates: { canonical: `https://n3uralia.com/${locale}/agentes-ia-turismo-chile` },
  }
}

export default function AgentesIATurismoPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 bg-background relative overflow-hidden pt-32">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            {isES ? "Agentes de IA para Turismo en Chile" : "AI Agents for Tourism in Chile"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            {isES ? "Reservas inteligentes, atención en múltiples idiomas 24/7, recomendaciones personalizadas. Aumenta ocupación hotelera, mejora experiencia de cliente." : "Smart reservations, multilingual 24/7 support, personalized recommendations. Increase hotel occupancy, improve customer experience."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Consultar para turismo" : "Consult for tourism"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/20">
            <h2 className="text-2xl font-bold mb-8">{isES ? "Datos Chile - Contexto del Turismo" : "Chile Data - Tourism Context"}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">+5M</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Turistas 2024" : "Tourists 2024"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "+40.4% vs 2023 (Sernatur)" : "+40.4% vs 2023 (Sernatur)"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">63.7%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Ocupabilidad Alta Temp." : "Peak Occupancy"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "Sernatur, 2025" : "Sernatur, 2025"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">+3.0%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Pernoctaciones" : "Overnight Stays"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "INE, dic 2024" : "INE, Dec 2024"}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "Dónde impacta IA en 90 días" : "Where AI impacts in 90 days"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Agentes atención reservas pre check-in" : "Reservation and pre check-in agents"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Revenue support priorización disponibilidad" : "Revenue support for availability"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Automatización confirmaciones y cobros" : "Confirmation and payment automation"}
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">{isES ? "KPIs esperables" : "Expected KPIs"}</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menor tiempo respuesta al huésped" : "Reduced guest response time"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Mayor conversión reservas directas" : "Higher direct booking conversion"}
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {isES ? "Menor carga manual por solicitud" : "Lower manual effort per request"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{isES ? "Soluciones para turismo" : "Tourism solutions"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titleES: "Reservas Inteligentes", titleEN: "Smart Reservations", descES: "Sistema de reservas automático, gestión de disponibilidad, precios dinámicos" },
              { titleES: "Atención Multiidioma", titleEN: "Multilingual Support", descES: "Agentes conversacionales en español, inglés, portugués, chino. 24/7." },
              { titleES: "Recomendaciones", titleEN: "Recommendations", descES: "Sugerencias personalizadas de tours, restaurantes, actividades basadas en preferencias" },
              { titleES: "Gestión de Comentarios", titleEN: "Review Management", descES: "Monitoreo automático de reviews, respuestas inteligentes, análisis de sentimiento" },
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
          <h2 className="text-3xl font-bold mb-6">{isES ? "Potencia tu turismo" : "Power your tourism"}</h2>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            {isES ? "Agendar consulta turismo" : "Schedule tourism consultation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
