'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react';

export default function OperationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'N3uralia',
            description: 'Optimización de procesos operacionales con IA',
            areaServed: {
              '@type': 'Place',
              name: 'Chile',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              ratingCount: '28',
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="border-b border-border px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
              <p className="text-sm font-semibold text-primary">Para COOs & Líderes Operacionales</p>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              Automatiza tu Fricción. Mide tu Impacto.
            </h1>
            <p className="mb-8 text-xl text-muted-foreground leading-relaxed">
              N3uralia identifica procesos ineficientes y los automatiza inteligentemente. Resultado: menos trabajo manual, decisiones más rápidas, clientes más felices. Todo medible.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?utm_source=ops-page&utm_medium=cta"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors gap-2"
              >
                Calcular Tu ROI <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Ver Casos de Estudio
              </Link>
            </div>
          </div>
        </section>

        {/* Operational Challenges */}
        <section className="border-b border-border px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              Los Desafíos Operacionales que Resolvemos
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'Procesos Manuales que No Escalan',
                  description:
                    'Tus equipos pasan 30-40% del tiempo en tareas repetitivas. Contratar más gente es costoso y lento.',
                  metric: 'Típicamente 15-20 hrs/semana de trabajo manual',
                },
                {
                  title: 'Falta de Visibilidad',
                  description:
                    'No sabes cuál es el cuello de botella real. Decisiones basadas en intuición, no datos.',
                  metric: '70% de empresas desconoce su fricción real',
                },
                {
                  title: 'Ciclos Lentos',
                  description:
                    'Procesos que deberían tomar 1 hora toman 2 días por coordinación manual.',
                  metric: '2-3x de tiempo normal',
                },
                {
                  title: 'Adopción de Cambios',
                  description:
                    'Los empleados resisten nuevos sistemas. Capacitación es costosa. Adoption rate es baja.',
                  metric: 'Típicamente <50% adoption en mes 1',
                },
              ].map((challenge, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-3 font-semibold text-foreground">{challenge.title}</h3>
                  <p className="mb-3 text-muted-foreground">{challenge.description}</p>
                  <p className="text-sm font-semibold text-primary">{challenge.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Benefits */}
        <section className="border-b border-border px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              Cómo N3uralia Genera Impacto
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: 'Automatización Inteligente',
                  description:
                    'Los Living Agents entienden contexto y mejoran automáticamente. No son bots estáticos—son sistemas que evolucionan.',
                  results: ['40-60% reducción de trabajo manual', 'Mejora automática sin intervención', 'Decisiones más inteligentes cada día'],
                },
                {
                  icon: <Target className="h-6 w-6" />,
                  title: 'Medición de Impacto',
                  description:
                    'Dashboard ejecutivo con KPIs claros. Ves exactamente cuánto ahorro genera cada agente.',
                  results: ['Tiempo ahorrado/mes', 'Costo evitado', 'Satisfacción de cliente (si aplica)'],
                },
                {
                  icon: <BarChart3 className="h-6 w-6" />,
                  title: 'Adopción Facilitada',
                  description:
                    'Tus empleados ven mejoras inmediatas. Menos trabajo manual = más tiempo en tareas estratégicas.',
                  results: [
                    '80%+ adoption en semana 1',
                    'Mayor engagement de equipo',
                    'Menos resistencia al cambio',
                  ],
                },
              ].map((benefit, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-8">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="mt-1 text-primary">{benefit.icon}</div>
                    <div className="flex-1">
                      <h3 className="mb-2 font-semibold text-foreground text-lg">{benefit.title}</h3>
                      <p className="mb-4 text-muted-foreground">{benefit.description}</p>
                      <ul className="space-y-2">
                        {benefit.results.map((result, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Timeline */}
        <section className="border-b border-border px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground">Timeline de ROI</h2>
            <div className="grid gap-4 sm:grid-cols-4">
              {[
                {
                  phase: '0-30 días',
                  title: 'Piloto',
                  roi: 'Break-even típicamente',
                },
                {
                  phase: '30-60 días',
                  title: 'Escala',
                  roi: '3-5x ROI',
                },
                {
                  phase: '3 meses',
                  title: 'Optimización',
                  roi: '5-10x ROI',
                },
                {
                  phase: '6+ meses',
                  title: 'Expansión',
                  roi: '10x+ ROI',
                },
              ].map((timeline, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-6 text-center">
                  <p className="text-sm font-semibold text-primary mb-2">{timeline.phase}</p>
                  <h3 className="font-semibold text-foreground mb-2">{timeline.title}</h3>
                  <p className="text-lg font-bold text-primary">{timeline.roi}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="border-b border-border px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              Implementación de Bajo Riesgo
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '1. Identificación',
                  description: 'Analizamos tus procesos. Identificamos top 3 oportunidades de automatización.',
                  timeline: '1 semana',
                },
                {
                  step: '2. Piloto Limitado',
                  description: 'Implementamos en un área pequeña. Medimos impacto real. Cero disruption.',
                  timeline: '2-3 semanas',
                },
                {
                  step: '3. Validación',
                  description: 'Si resultados superan threshold, pasamos a escala. Si no, ajustamos sin costo.',
                  timeline: '1-2 semanas',
                },
                {
                  step: '4. Expansión',
                  description: 'Extendemos a otros procesos. El equipo ya está familiarizado.',
                  timeline: 'Continuidad',
                },
              ].map((phase, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-6 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{phase.step}</h3>
                      <p className="mt-1 text-muted-foreground">{phase.description}</p>
                    </div>
                    <div className="text-sm font-semibold text-primary whitespace-nowrap">
                      {phase.timeline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              ¿Cuánto Puedes Ahorrar?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Hagamos un cálculo rápido de ROI basado en tu situación específica.
            </p>
            <Link
              href="/contact?utm_source=ops-roi&utm_medium=cta"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors gap-2"
            >
              Calcular Impacto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
