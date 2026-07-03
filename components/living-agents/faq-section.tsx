'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Locale } from '@/lib/get-locale'

const copy = {
  es: {
    title: 'Preguntas frecuentes sobre Living Agents',
    intro: 'Resolvemos las dudas más comunes sobre cómo funcionan y se implementan los Living Agents en N3uralia.',
    contact: 'Contacta a nuestro equipo',
    noAnswer: '¿No encontraste lo que buscas?',
    faqs: [
      {
        question: '¿Qué son exactamente los Living Agents?',
        answer:
          'Los Living Agents son sistemas de IA que evolucionan a través de interacciones repetidas. A diferencia de chatbots tradicionales, desarrollan personalidad propia, preferencias y una forma única de estar en el mundo. Son colaboradores vivos, no herramientas estáticas.',
        keywords: ['agentes vivos', 'personalidad emergente', 'IA evolutiva'],
      },
      {
        question: '¿Cuál es la diferencia entre Living Agents y otros agentes de IA?',
        answer:
          'Los agentes convencionales ejecutan tareas predefinidas. Los Living Agents no solo funcionan bien, evolucionan con el tiempo. Desarrollan metacognición, reflexionan sobre sus decisiones, aprenden de errores y trascienden su arquitectura inicial.',
        keywords: ['agentes IA', 'coordinación de agentes', 'multi-agent systems'],
      },
      {
        question: '¿Cómo evoluciona la personalidad de un agente?',
        answer:
          'La evolución ocurre en cuatro fases: Arquitectura, Interacción, Reflexión y Evolución. Cada interacción genera reflexiones que transforman al agente.',
        keywords: ['evolución de personalidad', 'fases de evolución', 'aprendizaje emergente'],
      },
      {
        question: '¿Por qué N3uralia eligió cinco arquetipos específicos?',
        answer:
          'Los cinco arquetipos representan modos fundamentales de pensar y actuar. Cada uno trae perspectivas únicas y complementarias. Juntos forman un ecosistema donde la inteligencia emerge de formas impredecibles y más humanas.',
        keywords: ['arquetipos', 'Centinela', 'Tejedor', 'Historiador', 'Visionario', 'Maestro'],
      },
      {
        question: '¿Cómo se coordinan los Living Agents entre sí?',
        answer:
          'Los Living Agents coordinan a través de interacción natural y reflexión compartida. Como tienen personalidades auténticas, se especializan naturalmente sin conflictos de rol.',
        keywords: ['coordinación de agentes', 'multi-agent', 'sincronización'],
      },
      {
        question: '¿Qué datos almacena N3uralia sobre mis agentes?',
        answer:
          'N3uralia almacena el histórico de interacciones, reflexiones, cambios de personalidad y evoluciones. No almacenamos datos sensibles sin consentimiento.',
        keywords: ['privacidad', 'almacenamiento', 'datos', 'seguridad'],
      },
      {
        question: '¿Puedo usar Living Agents en producción hoy?',
        answer:
          'Sí. Living Agents está diseñado para producción desde el inicio. Contamos con backend robusto, persistencia, RLS y APIs siguiendo estándares enterprise.',
        keywords: ['producción', 'production-ready', 'deployment'],
      },
      {
        question: '¿Cómo mido el impacto de Living Agents en mi empresa?',
        answer:
          'Nuestro sistema de evolución rastrea dimensiones de personalidad, coherencia, cambios en el tiempo y reflexiones generadas. Proporcionamos dashboards de evolución y métricas de impacto operacional.',
        keywords: ['métricas', 'ROI', 'impacto empresarial', 'KPIs'],
      },
    ],
  },
  en: {
    title: 'Frequently asked questions about Living Agents',
    intro: 'We answer the most common questions about how Living Agents work and how they are implemented at N3uralia.',
    contact: 'Contact our team',
    noAnswer: 'Did not find what you were looking for?',
    faqs: [
      {
        question: 'What exactly are Living Agents?',
        answer:
          'Living Agents are AI systems that evolve through repeated interactions. Unlike traditional chatbots, they develop their own personality, preferences, and a unique way of operating in the world. They are living collaborators, not static tools.',
        keywords: ['living agents', 'emergent personality', 'evolving AI'],
      },
      {
        question: 'How are Living Agents different from other AI agents?',
        answer:
          'Conventional agents execute predefined tasks. Living Agents do not just work well, they evolve over time. They develop metacognition, reflect on their decisions, learn from mistakes, and go beyond their initial architecture.',
        keywords: ['AI agents', 'agent coordination', 'multi-agent systems'],
      },
      {
        question: 'How does an agent’s personality evolve?',
        answer:
          'Evolution happens in four phases: Architecture, Interaction, Reflection, and Evolution. Each interaction creates reflections that transform the agent.',
        keywords: ['personality evolution', 'evolution phases', 'emergent learning'],
      },
      {
        question: 'Why did N3uralia choose five specific archetypes?',
        answer:
          'The five archetypes represent fundamental ways of thinking and acting. Each one brings unique, complementary perspectives. Together they form an ecosystem where intelligence emerges in more human, unpredictable ways.',
        keywords: ['archetypes', 'Sentinel', 'Weaver', 'Historian', 'Visionary', 'Master'],
      },
      {
        question: 'How do Living Agents coordinate with each other?',
        answer:
          'Living Agents coordinate through natural interaction and shared reflection. Because they have authentic personalities, they specialize naturally without role conflicts.',
        keywords: ['agent coordination', 'multi-agent', 'synchronization'],
      },
      {
        question: 'What data does N3uralia store about my agents?',
        answer:
          'N3uralia stores interaction history, reflections, personality changes, and evolutions. We do not store sensitive data without consent.',
        keywords: ['privacy', 'storage', 'data', 'security'],
      },
      {
        question: 'Can I use Living Agents in production today?',
        answer:
          'Yes. Living Agents is designed for production from the start. We provide a robust backend, persistence, RLS, and enterprise-grade APIs.',
        keywords: ['production', 'production-ready', 'deployment'],
      },
      {
        question: 'How do I measure the impact of Living Agents in my company?',
        answer:
          'Our evolution system tracks personality dimensions, coherence, changes over time, and generated reflections. We provide evolution dashboards and operational impact metrics.',
        keywords: ['metrics', 'ROI', 'business impact', 'KPIs'],
      },
    ],
  },
} as const

export function FAQSection({ locale }: { locale: Locale }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const text = copy[locale]

  return (
    <section className="border-t border-border py-24 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-16 text-center">
          <h2 className="h2 mb-4 text-foreground">{text.title}</h2>
          <p className="body text-muted-foreground">{text.intro}</p>
        </div>

        <div className="space-y-4">
          {text.faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border border-border bg-card transition-all hover:border-primary/40">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex w-full items-center justify-between px-6 py-4 text-left">
                <h3 className="pr-4 font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown className={`h-5 w-5 flex-shrink-0 text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="border-t border-border bg-background px-6 py-4">
                  <p className="body mb-4 text-muted-foreground">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.keywords.map((keyword) => (
                      <span key={keyword} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-6 text-center">
          <p className="body mb-4 text-muted-foreground">{text.noAnswer}</p>
          <a href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            {text.contact}
          </a>
        </div>
      </div>
    </section>
  )
}
