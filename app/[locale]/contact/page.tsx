import type { Metadata } from 'next'
import { ContactFormClient } from '@/components/contact/contact-form-client'
import { Footer } from '@/components/layout/footer'
import { isValidLocale, DEFAULT_LOCALE } from '@/lib/get-locale'
import type { Locale } from '@/content/dictionaries'
import { getDict } from '@/content/dictionaries'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === 'es'

  return {
    title: isES ? 'Contactar - N3uralia' : 'Contact - N3uralia',
    description: isES 
      ? 'Ponte en contacto con el equipo de N3uralia para consultas sobre nuestros sistemas agénticos, living agents y soluciones de IA.'
      : 'Get in touch with N3uralia team for inquiries about our agentic systems, living agents and AI solutions.',
    alternates: {
      canonical: `https://n3uralia.com/${locale}/contact`,
      languages: {
        es: 'https://n3uralia.com/es/contact',
        en: 'https://n3uralia.com/en/contact',
      },
    },
    openGraph: {
      title: isES ? 'Contactar - N3uralia' : 'Contact - N3uralia',
      description: isES 
        ? 'Ponte en contacto con el equipo de N3uralia para consultas sobre sistemas agenticos.'
        : 'Get in touch with N3uralia team for agentic systems inquiries.',
      url: `https://n3uralia.com/${locale}/contact`,
      type: 'website',
    },
  }
}

export default function ContactPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const d = getDict(locale)
  const isES = locale === 'es'

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 pt-32 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {isES ? '¿Hablamos sobre tu operación?' : 'Let\'s talk about your operations'}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {isES 
                ? 'Conecta con nuestro equipo para explorar cómo N3uralia puede transformar tus procesos críticos.'
                : 'Connect with our team to explore how N3uralia can transform your critical processes.'}
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {isES ? 'Cuéntanos tu caso' : 'Tell us your case'}
              </h2>
              <ContactFormClient locale={locale} />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {isES ? 'Información de contacto' : 'Contact information'}
                </h3>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {isES ? 'Correo electrónico' : 'Email'}
                  </h4>
                  <a href="mailto:contacto@n3uralia.com" className="text-primary hover:underline">
                    contacto@n3uralia.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {isES ? 'Teléfono' : 'Phone'}
                  </h4>
                  <a href="tel:+56995826127" className="text-primary hover:underline">
                    +56 9 9582 6127
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {isES ? 'Ubicación' : 'Location'}
                  </h4>
                  <p className="text-muted-foreground">
                    {isES ? 'Santiago, Chile' : 'Santiago, Chile'}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {isES ? 'Atendemos empresas en LATAM' : 'Serving enterprises across LATAM'}
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {isES ? 'Tiempo de respuesta' : 'Response time'}
                  </h4>
                  <p className="text-muted-foreground">
                    {isES ? 'Respondemos en 24 horas' : 'We respond within 24 hours'}
                  </p>
                </div>
              </div>

              {/* CTA Box */}
              <div className="mt-12 p-6 border border-primary/30 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-foreground mb-2">
                  {isES ? '¿Emergencia operacional?' : 'Operational emergency?'}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {isES 
                    ? 'Contáctanos directamente si necesitas soporte urgente.'
                    : 'Contact us directly if you need urgent support.'}
                </p>
                <a href="tel:+56995826127" className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition">
                  {isES ? 'Llamar ahora' : 'Call now'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us */}
        <section className="py-24 px-4 bg-background border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              {isES ? '¿Por qué hablar con nosotros?' : 'Why talk to us?'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">12+</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {isES ? 'Años implementando' : 'Years implementing'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isES 
                    ? 'Experiencia en arquitectura de sistemas agenticos'
                    : 'Experience in agentic systems architecture'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">50+</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {isES ? 'Empresas en producción' : 'Companies in production'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isES 
                    ? 'Desde retail hasta finanzas'
                    : 'From retail to finance'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">100%</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {isES ? 'Auditable' : 'Auditable'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isES 
                    ? 'Cada decisión es verificable y reversible'
                    : 'Every decision is verifiable and reversible'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
