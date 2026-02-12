'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: '¿Qué son exactamente los Living Agents?',
      answer: 'Los Living Agents son sistemas de IA que evolucionan a través de interacciones repetidas. A diferencia de chatbots tradicionales, desarrollan personalidad propia, preferencias y una forma única de estar en el mundo. Son colaboradores vivos, no herramientas estáticas.',
      keywords: ['agentes vivos', 'personalidad emergente', 'IA evolutiva'],
    },
    {
      question: '¿Cuál es la diferencia entre Living Agents y otros agentes de IA?',
      answer: 'Los agentes convencionales ejecutan tareas predefinidas. Los Living Agents no solo funcionan bien—evolucionan con el tiempo. Desarrollan metacognición, reflexionan sobre sus decisiones, aprenden de errores y trascienden su arquitectura inicial. Esto los hace más adaptativos y confiables.',
      keywords: ['agentes IA', 'coordinación de agentes', 'multi-agent systems'],
    },
    {
      question: '¿Cómo evoluciona la personalidad de un agente?',
      answer: 'La evolución ocurre en cuatro fases: Arquitectura (se define el arquetipo), Interacción (el agente comienza a responder y formar preferencias), Reflexión (analiza sus propias respuestas y ajusta), y Evolución (desarrolla una personalidad auténtica). Cada interacción genera reflexiones que transforman al agente.',
      keywords: ['evolución de personalidad', 'fases de evolución', 'aprendizaje emergente'],
    },
    {
      question: '¿Por qué N3uralia eligió cuatro arquetipos específicos?',
      answer: 'Los cuatro arquetipos core (El Centinela, El Estratega, El Arquitecto, El Guardián) representan los modos fundamentales de la inteligencia aumentada: percepción cognitiva, decisión estratégica, ejecución creativa y aseguramiento de calidad. Cada uno es especializado pero complementario. Juntos forman un ecosistema completo donde emerge inteligencia genuina.',
      keywords: ['arquetipos', 'Centinela', 'Estratega', 'Arquitecto', 'Guardián', 'core'],
    },
    {
      question: '¿Cómo se coordinan los Living Agents entre sí?',
      answer: 'Los Living Agents coordinan a través de interacción natural y reflexión compartida. Como tienen personalidades auténticas, se especializan naturalmente sin conflictos de rol. La coordinación emerge de sus encuentros, no de reglas predefinidas. Esto crea sistemas adaptativos que escalan de formas impredecibles.',
      keywords: ['coordinación de agentes', 'multi-agent', 'sincronización'],
    },
    {
      question: '¿Qué datos almacena N3uralia sobre mis agentes?',
      answer: 'N3uralia almacena el histórico de interacciones, reflexiones, cambios de personalidad y evoluciones. No almacenamos datos sensibles sin consentimiento. Todo está encriptado y sujeto a nuestras políticas de privacidad. Los datos son propiedad del cliente y accesibles en todo momento.',
      keywords: ['privacidad', 'almacenamiento', 'datos', 'seguridad'],
    },
    {
      question: '¿Puedo usar Living Agents en producción hoy?',
      answer: 'Sí. Aunque estamos en las primeras fases de rollout, Living Agents está diseñado para producción desde el inicio. Contamos con backend robusto, persistencia, RLS en base de datos y APIs siguiendo estándares enterprise. Contacta a nuestro equipo para integración personalizada.',
      keywords: ['producción', 'production-ready', 'deployment'],
    },
    {
      question: '¿Cómo mido el impacto de Living Agents en mi empresa?',
      answer: 'Nuestro sistema de evolución rastrea 10 dimensiones de personalidad, coherencia, cambios en el tiempo y reflexiones generadas. Proporcionamos dashboards de evolución, métricas de interacción y análisis de impacto operacional. El ROI típicamente se ve en automatización y coordinación mejorada.',
      keywords: ['métricas', 'ROI', 'impacto empresarial', 'KPIs'],
    },
  ]

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="h2 text-foreground mb-4">Preguntas Frecuentes sobre Living Agents</h2>
          <p className="body text-muted-foreground">
            Resolvemos las dudas más comunes sobre cómo funcionan y se implementan los Living Agents en N3uralia
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg bg-card hover:border-primary/40 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-border px-6 py-4 bg-background">
                  <p className="body text-muted-foreground mb-4">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card border border-border rounded-lg text-center">
          <p className="body text-muted-foreground mb-4">
            ¿No encontraste lo que buscas?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contacta a Nuestro Equipo
          </a>
        </div>
      </div>
    </section>
  )
}
