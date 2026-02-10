'use client';

import Link from 'next/link';
import { ArrowRight, Rocket, Brain, DollarSign } from 'lucide-react';

export default function StartupsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'N3uralia',
            applicationCategory: 'BusinessApplication',
            description: 'Agentes IA para startups',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '42',
            },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'CLP',
              description: 'Free trial available',
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="border-b border-border px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
              <p className="text-sm font-semibold text-primary">Para Founders & Tech Leads</p>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              Agentes IA que Aprenden. Deploy en Días.
            </h1>
            <p className="mb-8 text-xl text-muted-foreground leading-relaxed">
              Automatiza sin código. Los Living Agents mejoran cada día. Tus usuarios ven respuestas más inteligentes. Tu equipo ahorra 15+ horas semanales. Sin necesidad de custom development.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?utm_source=startup-page&utm_medium=cta"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors gap-2"
              >
                Prueba Gratis (14 días) <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Ver Testimonios
              </Link>
            </div>
          </div>
        </section>

        {/* Why N3uralia Section */}
        <section className="border-b border-border px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              Por Qué N3uralia Para Startups
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: <Rocket className="h-8 w-8" />,
                  title: 'Deploy Rápido',
                  description:
                    'De 0 a producción en días. No esperes 6 meses por custom development.',
                  metric: '5-14 días',
                },
                {
                  icon: <Brain className="h-8 w-8" />,
                  title: 'Aprende Automáticamente',
                  description: 'Los agentes mejoran con cada interacción. Mejor experiencia para usuarios.',
                  metric: 'Mejora diaria',
                },
                {
                  icon: <DollarSign className="h-8 w-8" />,
                  title: 'Costo Predecible',
                  description:
                    'Sin sorpresas. Pricing transparente por agente. Escala según crecimiento.',
                  metric: 'Desde $X/mes',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-6 text-center">
                  <div className="mb-4 flex justify-center text-primary">{item.icon}</div>
                  <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{item.description}</p>
                  <p className="text-lg font-bold text-primary">{item.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="border-b border-border px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground">Usa Casos Comunes</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Calificación de Leads',
                  description:
                    'Automáticamente califica inbound leads basado en criterios. Tus vendedores solo hablan con prospects calificados.',
                  benefit: 'ROI en 2 semanas',
                },
                {
                  title: 'Respuestas a Clientes',
                  description:
                    'Agente responde preguntas comunes 24/7. Si es complejo, escala a humano automáticamente.',
                  benefit: '60% reducción en tickets',
                },
                {
                  title: 'Procesamiento de Datos',
                  description:
                    'Extrae info de emails, formularios, o archivos. Entra a tu DB automáticamente.',
                  benefit: '20 horas/mes ahorradas',
                },
                {
                  title: 'Integración de Plataformas',
                  description:
                    'Tus herramientas hablan entre sí. Stripe → CRM → Sheets. Sin Zapier overload.',
                  benefit: 'Flujos sin fricción',
                },
              ].map((useCase, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{useCase.title}</h3>
                      <p className="mt-1 text-muted-foreground">{useCase.description}</p>
                    </div>
                    <div className="text-sm font-semibold text-primary whitespace-nowrap">
                      {useCase.benefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-b border-border px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground">Cómo Comienza</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: 'Día 1',
                  title: 'Selecciona Caso de Uso',
                  description: 'Elige qué proceso automatizar primero',
                },
                {
                  step: 'Día 3-5',
                  title: 'Configuración & Deploy',
                  description: 'Nuestro equipo configura el agente (sin código tuyo)',
                },
                {
                  step: 'Día 7+',
                  title: 'Monitorea & Optimiza',
                  description: 'El agente mejora automáticamente. Tú ves resultados.',
                },
              ].map((step, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-6 text-center">
                  <p className="mb-2 text-sm font-semibold text-primary">{step.step}</p>
                  <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              ¿Listo para Escalar tu Startup?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              14 días de prueba gratuita. No se requiere tarjeta de crédito.
            </p>
            <Link
              href="/contact?utm_source=startup-trial&utm_medium=cta"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors gap-2"
            >
              Comienza Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
