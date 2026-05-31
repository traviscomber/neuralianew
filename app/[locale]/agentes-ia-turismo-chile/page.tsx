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
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16 relative overflow-hidden">
        <SectionBackground />
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">{isES ? "Turismo" : "Tourism"}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            {isES ? "Agentes de IA para Turismo en Chile" : "AI Agents for Tourism in Chile"}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {isES ? "Atención de reservas 24/7, gestión revenue inteligente, automatización de confirmaciones y cobros. Mejora ocupabilidad, aumenta ingresos por huésped." : "24/7 reservation support, intelligent revenue management, confirmation and payment automation. Improve occupancy, increase revenue per guest."}
          </p>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            {isES ? "Consultar para turismo" : "Consult for tourism"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* OPERATIONAL PAIN POINTS */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{isES ? "Los dolores del turismo hoy en Chile" : "Current tourism pain points in Chile"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "📞 Atención lenta = clientes perdidos" : "📞 Slow support = lost customers"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Consultas de reserva por email toman 12-24 horas en responder. WhatsApp se pierde entre mensajes personales. Clientes desisten y se van a la competencia. Pérdida de ventas por falta de velocidad." : "Booking inquiries via email take 12-24 hours to answer. WhatsApp messages get lost. Customers give up and go to competitors. Lost sales due to slow response."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -20-30% en tasa conversión de consultas" : "Result: -20-30% inquiry conversion rate"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "🌍 Multiidioma manual" : "🌍 Manual multilingual"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Turnistas responden en 1-2 idiomas. Consulta en francés o alemán requiere buscar traductor o rechazar cliente. Experiencia pobre para turistas internacionales. Reputación online daña." : "Staff speak 1-2 languages. Inquiry in French or German requires translator or customer rejection. Poor experience for international tourists. Damages online reputation."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -40-50% en reservas de turismo internacional" : "Result: -40-50% international tourism bookings"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "💰 Ocupación subóptima" : "💰 Suboptimal occupancy"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Sin recomendaciones personalizadas, clientes no saben qué comprar. Sin gestión dinámica de precios, se vende a precio fijo incluso en baja demanda. Sin bundling inteligente, no se maximiza valor por reserva." : "Without personalized recommendations, guests don't know what to add. Without dynamic pricing, fixed rates even in low demand. No intelligent bundling, low average value per booking."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -15-25% en RevPAR, -30-40% en servicios adicionales" : "Result: -15-25% RevPAR, -30-40% add-on services"}</p>
            </div>
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{isES ? "🎫 Operaciones fragmentadas" : "🎫 Fragmented operations"}</h3>
              <p className="text-sm text-muted-foreground mb-3">{isES ? "Reservas en un sistema, housekeeping en otro, check-in manual. Una habitación se limpia lentamente, se retrasa el siguiente check-in. Cambios de plan se comunican manualmente, se pierden. Experiencia del huésped se degrada." : "Reservations in one system, housekeeping in another, manual check-in. Room cleaned slowly, delays next check-in. Plan changes communicated manually, get lost. Guest experience suffers."}</p>
              <p className="text-xs text-destructive font-semibold">{isES ? "Resultado: -1-2 puntos en NPS, 40% más tiempo operacional" : "Result: -1-2 NPS points, 40% more operational time"}</p>
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
                  <h3 className="font-bold text-lg mb-2">{isES ? "Asistente multiidioma 24/7 instantáneo" : "24/7 instant multilingual assistant"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Agentes IA responden INMEDIATAMENTE a cualquier consulta, en 12+ idiomas. Entienden contexto de disponibilidad, fechas, preferencias. Cierran reservas sin intervención humana. Disponibilidad 24/7 sin personal on-call." : "AI agents respond INSTANTLY to any inquiry in 12+ languages. Understand availability context, dates, preferences. Close bookings with no human intervention. 24/7 availability without on-call staff."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: +40-50% conversión consultas | +60% satisfacción internacional" : "Impact: +40-50% inquiry conversion | +60% international satisfaction"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Revenue optimization inteligente" : "Intelligent revenue optimization"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Precios dinámicos según demanda, ocupación, competencia. Recomendaciones personalizadas: tours, restaurants, servicios. Bundling automático: habitación + cena + tour al precio óptimo. Cada interacción maximiza valor." : "Dynamic pricing by demand, occupancy, competition. Personalized recommendations: tours, restaurants, services. Auto-bundling: room + dinner + tour at optimal price. Every interaction maximizes value."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: +20-30% RevPAR | +50-70% en servicios adicionales | +$XXX/reserva promedio" : "Impact: +20-30% RevPAR | +50-70% add-on services | +$XXX/booking average"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Orquestación operacional sincronizada" : "Synchronized operations orchestration"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Un sistema central conecta reservas, housekeeping, front-desk, restaurants. Cambios automáticos se propagan. Habitación lista = siguiente huésped check-in inmediato. Cambios de plan se comunican en tiempo real. Cero fricción." : "Central system connects reservations, housekeeping, front desk, restaurants. Changes auto-propagate. Room ready = immediate next check-in. Plan changes communicated in real-time. Zero friction."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: +2-3 puntos NPS | -40% tiempo operacional | -50% cambios de último minuto" : "Impact: +2-3 NPS points | -40% operational time | -50% last-minute changes"}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{isES ? "Experiencia del huésped automatizada" : "Automated guest experience"}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{isES ? "Pre-check-in automático con confirmación. Recordatorios personalizados (cena, tours, checkout). Soporte post-reserva: cambios, solicitudes especiales. Feedback recopilado automáticamente. Cada interacción mejora NPS." : "Automated pre-check-in with confirmation. Personalized reminders (dinner, tours, checkout). Post-booking support: changes, special requests. Feedback auto-collected. Each interaction improves NPS."}</p>
                  <p className="text-xs text-primary font-semibold">{isES ? "Impacto: +3-4 puntos NPS | +60% recomendaciones | +Repeat bookings" : "Impact: +3-4 NPS points | +60% referrals | +Repeat bookings"}</p>
                </div>
              </div>
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

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/20">
            <h2 className="text-2xl font-bold mb-8">{isES ? "Datos Chile - Contexto del Turismo" : "Chile Data - Tourism Context"}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">+5M</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Turistas 2025" : "Tourists 2025"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "+40.4% vs 2024 (Sernatur)" : "+40.4% vs 2024 (Sernatur)"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">63.7%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Ocupabilidad Alta Temp." : "Peak Occupancy"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "Sernatur, 2025" : "Sernatur, 2025"}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">+3.0%</p>
                <p className="font-semibold text-foreground mb-1">{isES ? "Pernoctaciones" : "Overnight Stays"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "INE, dic 2025" : "INE, Dec 2025"}</p>
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
