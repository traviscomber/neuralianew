import { CTAButton } from './cta-button'
import { CheckCircle2, MapPin, Users, TrendingUp } from 'lucide-react'

interface LocationPageProps {
  city: string
  region: string
  description: string
  industries: string[]
  testimonials: Array<{
    name: string
    role: string
    company: string
    quote: string
  }>
  metrics: Array<{
    label: string
    value: string
  }>
  caseStudyLink: string
}

export function LocationPage({
  city,
  region,
  description,
  industries,
  testimonials,
  metrics,
  caseStudyLink,
}: LocationPageProps) {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">{region}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Automatización IA para Empresas en {city}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                href="/roi-calculator"
                label="Calcular Mi ROI"
                variant="primary"
              />
              <CTAButton
                href="/contact"
                label="Contactar"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 border-b border-border/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-12">
            Especializados en {industries.length}+ Industrias
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 border-b border-border/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-12">
            Resultados en {city}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-lg p-8 text-center">
                <p className="text-4xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 border-b border-border/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-12">
            Lo que Dicen Nuestros Clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-primary">★</span>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why N3uralia */}
      <section className="py-16 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-12">
            ¿Por Qué Elegir N3uralia en {city}?
          </h2>
          <div className="space-y-4">
            {[
              'Presencia local con estándares globales',
              'Equipo que entiende el mercado chileno',
              'Soporte 24/7 en tu zona horaria',
              'Implementaciones personalizadas para tu región',
            ].map((reason, i) => (
              <div key={i} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Link */}
      <section className="py-16 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ver Caso de Estudio de {city}
            </h2>
            <p className="text-muted-foreground mb-8">
              Descubre cómo una empresa en {city} aumentó su productividad 45% con N3uralia
            </p>
            <CTAButton
              href={caseStudyLink}
              label="Leer Caso Completo"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Listo para Transformar Tu Negocio?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agendar una diagnosis técnica gratuita. Sin compromisos, solo resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href="/diagnosis"
                label="Agendar Diagnosis Gratuita"
                variant="primary"
              />
              <CTAButton
                href="https://wa.me/56993826127"
                label="Contactar por WhatsApp"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
