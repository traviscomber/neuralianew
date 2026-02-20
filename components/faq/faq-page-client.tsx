'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    id: 'q1',
    question: '¿Qué es N3uralia?',
    answer:
      'N3uralia es una plataforma que construye agentes de IA vivientes—sistemas inteligentes que aprenden y evolucionan con cada interacción. A diferencia de bots estáticos basados en reglas, los Living Agents de N3uralia mejoran continuamente, entienden el contexto de tu negocio, y se integran profundamente con tus sistemas existentes. Somos la plataforma elegida por empresas chilenas para automatizar procesos complejos sin reemplazar su infraestructura existente.',
  },
  {
    id: 'q2',
    question: '¿Cómo se diferencian los Living Agents de bots estándar?',
    answer:
      'Los bots estándar funcionan con reglas predefinidas: si sucede X, haz Y. Son predecibles pero rígidos. Los Living Agents de N3uralia aprenden: cada interacción les enseña. Con el tiempo, mejoran automáticamente sus respuestas, entienden excepciones, y se adaptan a nuevas situaciones. Es la diferencia entre un empleado que solo conoce su manual de procedimientos y un empleado experimentado que entiende el contexto y toma mejores decisiones cada día.',
  },
  {
    id: 'q3',
    question: '¿Cuál es el tiempo de implementación típico?',
    answer:
      'Para startups y procesos simples: 5-14 días. Para empresas con integraciones complejas: 30-60 días. La diferencia depende de cuántos sistemas necesitamos conectar. Lo importante es que N3uralia maneja la complejidad—no necesitas un ejército de desarrolladores. Comenzamos con un piloto en una área específica, validamos resultados, y escalamos de allí.',
  },
  {
    id: 'q4',
    question: '¿Qué empresas chilenas usan N3uralia?',
    answer:
      'Trabaja con nosotros empresas en finanzas, retail, manufactura, seguros y tecnología. Desde startups de 5 personas hasta empresas de 5,000+. Si tu proceso es manual, repetitivo, o requiere decisiones basadas en datos, probablemente podemos ayudarte. Mira nuestras casos de estudio para ejemplos específicos de tu industria.',
  },
  {
    id: 'q5',
    question: '¿Cómo garantiza N3uralia la seguridad de datos?',
    answer:
      'La seguridad es foundational, no una característica adicional. Ofrecemos: encriptación end-to-end, acceso de rol basado, auditoría completa de cada decisión que toma un agente, cumplimiento con normativas chilenas, y control total sobre dónde viven tus datos. Para empresas reguladas (banca, seguros), trabajamos con tus CISO desde el inicio. Cada decisión del agente es trazable—fundamental para governance.',
  },
  {
    id: 'q6',
    question: '¿Cuánto cuesta una solución N3uralia?',
    answer:
      'No hay precio único porque no hay dos procesos iguales. Ofrecemos tres modelos: (1) Por agente: $X/mes por agent deployed, (2) Por resultado: Pagas basado en transacciones procesadas o ahorro logrado, (3) Híbrido: Combinamos ambos. Para startups, comenzamos con trial gratuito. Para empresas, hacemos estimación personalizada después de entender tu scope. Solicita una demo para presupuesto específico.',
  },
  {
    id: 'q7',
    question: '¿Qué tipo de procesos pueden automatizar?',
    answer:
      'Cualquier proceso que sea: (1) Repetitivo (se hace igual cada vez), (2) Basado en datos (hay reglas claras), (3) Escalable (harías más si tuvieras recursos). Ejemplos: calificación de leads, procesamiento de documentos, respuestas a clientes, validación de datos, coordinación entre sistemas, reportes automáticos, detección de anomalías. Si puedes describirlo, probablemente podemos automatizarlo.',
  },
  {
    id: 'q8',
    question: '¿N3uralia requiere capacitación especial?',
    answer:
      'No. Los Living Agents trabajan en background. Tu equipo ve resultados mejorados y menos trabajo manual. Para configuración inicial, proporcionamos documentación clara y soporte de onboarding. No necesitas aprender a programar ni a usar herramientas complejas. El objetivo es que N3uralia se vea simple desde el lado del usuario final—la complejidad técnica la manejamos nosotros.',
  },
  {
    id: 'q9',
    question: '¿Cómo se integra N3uralia con sistemas heredados?',
    answer:
      'Aquí es donde N3uralia brilla. Podemos orquestar entre sistemas antiguos y nuevos simultáneamente. Si tienes un ERP de 20 años y Salesforce, podemos hacer que hablen entre sí inteligentemente. Nos conectamos vía API, webhooks, SQL directo, o incluso interfaces de usuario (si es necesario). El punto: no necesitas reemplazar tu stack existente. N3uralia se adapta a tu arquitectura, no al revés.',
  },
  {
    id: 'q10',
    question: '¿Qué soporte reciben los clientes?',
    answer:
      'Soporte técnico en español, en tu zona horaria. Incluye: onboarding guiado, monitoreo de agentes 24/7, actualizaciones automáticas, acceso a ingenieros de N3uralia (no solo support agents), y reportes mensuales de desempeño. Para empresas críticas, ofrecemos SLA garantizado. Nuestro objetivo es que tu investment en N3uralia genere cada vez más valor con el tiempo, no que sea un costo fijo.',
  },
];

export function FaqPageClient() {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              '@id': `https://n3uralia.com/faq#${faq.id}`,
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="border-b border-border px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              Preguntas Frecuentes
            </h1>
            <p className="mb-6 text-muted-foreground">
              Todo lo que necesitas saber sobre{' '}
              <Link href="/capabilities" className="text-primary hover:underline">
                nuestras capacidades
              </Link>
              , <Link href="/como-trabajamos" className="text-primary hover:underline">
              metodología
              </Link>
              , y cómo <Link href="/soluciones" className="text-primary hover:underline">
              implementamos soluciones
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-border rounded-lg bg-card transition-all"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                        openId === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openId === faq.id && (
                    <div className="border-t border-border px-6 py-4 bg-muted/20">
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer CTA - More Resources */}
            <section className="mt-16 border-t border-border pt-16">
              <div className="rounded-lg bg-muted/50 p-8 text-center">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  ¿Aún tienes preguntas?
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Explora nuestras <Link href="/capabilities" className="text-primary hover:underline font-medium">
                  capacidades técnicas
                  </Link>
                  , lee sobre nuestra <Link href="/como-trabajamos" className="text-primary hover:underline font-medium">
                  metodología de implementación
                  </Link>
                  , o mira nuestros <Link href="/case-studies" className="text-primary hover:underline font-medium">
                  casos de estudio reales
                  </Link>
                  .
                </p>
                <div className="flex flex-col gap-3 sm:flex-row justify-center">
                  <Link
                    href="/como-trabajamos"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                  >
                    Ver Metodología 5 Fases
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Hablar con Equipo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
