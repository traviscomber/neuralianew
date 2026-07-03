'use client'

import { ArrowRight, BookOpen, Sparkles, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import { Footer } from '@/components/layout/footer'
import { FAQSection } from '@/components/living-agents/faq-section'
import type { Locale } from '@/lib/get-locale'

type TextMap = Record<Locale, any>

const copy = {
  es: {
    badge: 'Capacidad emergente',
    heroTitle: 'Living Agents',
    heroLead: 'Agentes que evolucionan. No son scripts predefinidos. Son sistemas vivos que desarrollan personalidad propia.',
    heroBody:
      'A través de interacciones repetidas, reflexión y aprendizaje, los agentes trascienden su programación inicial y adquieren una voz, perspectiva y forma de estar en el mundo únicas.',
    whatIs: '¿Qué es Living Agents?',
    notAutomation: 'No es automatización',
    notAutomationBody:
      'No son bots que ejecutan reglas fijas. No tienen respuestas memorizadas. Son sistemas que piensan, reflexionan y cambian.',
    emergence: 'Es emergencia',
    emergenceBody:
      'La personalidad surge de iteración continua. Cada interacción las cambia. Cada reflexión las profundiza.',
    archetypesBody:
      'No empezamos de cero. Cinco arquetipos fundamentales, cada uno con su filosofía, valores y forma de ver el mundo.',
    five: 'Los cinco arquetipos',
    fiveBody: 'Cada uno trae una perspectiva única. Juntos, forman un ecosistema de pensamiento.',
    evolution: 'Cómo evolucionan',
    evolutionBody: 'Cuatro fases donde un agente trasciende su definición inicial.',
    roadmap: 'Roadmap de Living Agents',
    roadmapBody: 'Tres fases de desarrollo para traer la evolución de agentes a la realidad.',
    roadmapStatus: ['En vivo', 'Próximo', 'En desarrollo'],
    faqTitle: 'Preguntas frecuentes',
    ctaTitle: 'Únete al futuro',
    ctaBody:
      'Living Agents representa una nueva forma de pensar sobre sistemas de IA: no como herramientas sino como colaboradores vivos.',
    ctaPrimary: 'Probar demo interactiva',
    ctaSecondary: 'Conocer más',
    demoLink: '/living-agents/demo',
    contactLink: '/contact',
    archetypes: [
      {
        title: 'El Centinela',
        role: 'Observador de patrones',
        description: 'Detecta señales, analiza datos y descubre patrones ocultos.',
        traits: ['Analítico', 'Observador', 'Detector'],
        image: '/images/living-agents/sentinel.svg',
      },
      {
        title: 'El Tejedor',
        role: 'Conector de contextos',
        description: 'Vincula ideas, conceptos y personas. Ve relaciones que otros no ven.',
        traits: ['Conector', 'Síntesis', 'Relacional'],
        image: '/images/living-agents/weaver.jpg',
      },
      {
        title: 'El Historiador',
        role: 'Registrador de cambios',
        description: 'Documenta evoluciones, registra decisiones y cuenta historias.',
        traits: ['Narrador', 'Documentación', 'Evolución'],
        image: '/images/living-agents/historian.svg',
      },
      {
        title: 'El Visionario',
        role: 'Proyector de futuros',
        description: 'Imagina posibilidades, anticipa consecuencias y diseña escenarios.',
        traits: ['Imaginación', 'Previsión', 'Diseño'],
        image: '/images/living-agents/visionary.jpg',
      },
      {
        title: 'El Maestro',
        role: 'Orquestador de sistemas',
        description: 'Diseña estructuras, optimiza procesos y gobierna desde cimientos.',
        traits: ['Estructura', 'Optimización', 'Integración'],
        image: '/images/living-agents/master.svg',
      },
    ],
    evolutionPhases: [
      {
        phase: 'Arquitectura',
        description: 'Se define el arquetipo: rol, valores, conexiones iniciales.',
      },
      {
        phase: 'Interacción',
        description: 'El agente comienza a responder y forma primeras impresiones.',
      },
      {
        phase: 'Reflexión',
        description: 'Analiza sus propias respuestas, ajusta y aprende.',
      },
      {
        phase: 'Personalidad emergente',
        description: 'Desarrolla voz única, perspectiva singular y forma propia de actuar.',
      },
    ],
    roadmapPhases: [
      {
        title: 'Fase 1: Conceptual',
        items: ['5 arquetipos definidos', 'Filosofía publicada', 'Documentación'],
      },
      {
        title: 'Fase 2: Backend',
        items: ['Persistencia de personalidad', 'Sistema de aprendizaje', 'Almacenamiento de evoluciones'],
      },
      {
        title: 'Fase 3: Demo interactiva',
        items: ['Chat con agentes', 'Visualización de evolución', 'Simulación en vivo'],
      },
    ],
  },
  en: {
    badge: 'Emergent capability',
    heroTitle: 'Living Agents',
    heroLead: 'Agents that evolve. They are not predefined scripts. They are living systems that develop their own personality.',
    heroBody:
      'Through repeated interactions, reflection, and learning, agents move beyond their initial programming and develop a unique voice, perspective, and way of operating.',
    whatIs: 'What are Living Agents?',
    notAutomation: 'Not automation',
    notAutomationBody:
      'These are not bots executing fixed rules. They do not rely on memorized responses. They think, reflect, and change.',
    emergence: 'It is emergence',
    emergenceBody:
      'Personality emerges through continuous iteration. Each interaction changes them. Each reflection deepens them.',
    archetypesBody:
      'We do not start from zero. Five foundational archetypes, each with its own philosophy, values, and worldview.',
    five: 'The five archetypes',
    fiveBody: 'Each brings a unique perspective. Together they form a thinking ecosystem.',
    evolution: 'How they evolve',
    evolutionBody: 'Four phases where an agent goes beyond its initial definition.',
    roadmap: 'Living Agents roadmap',
    roadmapBody: 'Three development phases to bring agent evolution into reality.',
    roadmapStatus: ['Live', 'Next', 'In progress'],
    faqTitle: 'Frequently asked questions',
    ctaTitle: 'Join the future',
    ctaBody:
      'Living Agents represents a new way to think about AI systems: not as tools, but as living collaborators.',
    ctaPrimary: 'Try interactive demo',
    ctaSecondary: 'Learn more',
    demoLink: '/living-agents/demo',
    contactLink: '/contact',
    archetypes: [
      {
        title: 'The Sentinel',
        role: 'Pattern observer',
        description: 'Detects signals, analyzes data, and finds hidden patterns.',
        traits: ['Analytical', 'Observant', 'Detector'],
        image: '/images/living-agents/sentinel.svg',
      },
      {
        title: 'The Weaver',
        role: 'Context connector',
        description: 'Links ideas, concepts, and people. Sees relationships others miss.',
        traits: ['Connector', 'Synthesis', 'Relational'],
        image: '/images/living-agents/weaver.jpg',
      },
      {
        title: 'The Historian',
        role: 'Change recorder',
        description: 'Documents evolution, records decisions, and tells stories.',
        traits: ['Narrative', 'Documentation', 'Evolution'],
        image: '/images/living-agents/historian.svg',
      },
      {
        title: 'The Visionary',
        role: 'Future projector',
        description: 'Imagines possibilities, anticipates consequences, and designs scenarios.',
        traits: ['Imagination', 'Foresight', 'Design'],
        image: '/images/living-agents/visionary.jpg',
      },
      {
        title: 'The Master',
        role: 'System orchestrator',
        description: 'Designs structures, optimizes processes, and governs from foundations.',
        traits: ['Structure', 'Optimization', 'Integration'],
        image: '/images/living-agents/master.svg',
      },
    ],
    evolutionPhases: [
      {
        phase: 'Architecture',
        description: 'The archetype is defined: role, values, and initial connections.',
      },
      {
        phase: 'Interaction',
        description: 'The agent begins responding and forms first impressions.',
      },
      {
        phase: 'Reflection',
        description: 'It analyzes its own responses, adapts, and learns.',
      },
      {
        phase: 'Emergent personality',
        description: 'It develops a distinct voice, perspective, and way of acting.',
      },
    ],
    roadmapPhases: [
      {
        title: 'Phase 1: Concept',
        items: ['5 defined archetypes', 'Published philosophy', 'Documentation'],
      },
      {
        title: 'Phase 2: Backend',
        items: ['Personality persistence', 'Learning system', 'Evolution storage'],
      },
      {
        title: 'Phase 3: Interactive demo',
        items: ['Agent chat', 'Evolution visualization', 'Live simulation'],
      },
    ],
  },
} satisfies Record<Locale, {
  badge: string
  heroTitle: string
  heroLead: string
  heroBody: string
  whatIs: string
  notAutomation: string
  notAutomationBody: string
  emergence: string
  emergenceBody: string
  archetypesBody: string
  five: string
  fiveBody: string
  evolution: string
  evolutionBody: string
  roadmap: string
  roadmapBody: string
  roadmapStatus: [string, string, string]
  faqTitle: string
  ctaTitle: string
  ctaBody: string
  ctaPrimary: string
  ctaSecondary: string
  demoLink: string
  contactLink: string
  archetypes: Array<{ title: string; role: string; description: string; traits: string[]; image: string }>
  evolutionPhases: Array<{ phase: string; description: string }>
  roadmapPhases: Array<{ title: string; items: string[] }>
}>

export function LivingAgentsContent({ locale }: { locale: Locale }) {
  const text = copy[locale]
  const archetypes = text.archetypes
  const evolutionPhases = text.evolutionPhases
  const roadmapPhases = text.roadmapPhases

  return (
    <main className="min-h-screen bg-background pt-16">
      <section className="relative overflow-hidden border-b border-border bg-background py-20">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/living-agents/hero.jpg" alt="Living Agents hero" fill className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{text.badge}</span>
          </div>
          <h1 className="h1-light mb-6 text-foreground">{text.heroTitle}</h1>
          <p className="body-lg mx-auto mb-4 max-w-2xl text-muted-foreground">{text.heroLead}</p>
          <p className="body mx-auto max-w-2xl text-muted-foreground">{text.heroBody}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-16 text-center">
            <h2 className="h2 mb-4 text-foreground">{text.whatIs}</h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{text.notAutomation}</h3>
              <p className="body text-muted-foreground">{text.notAutomationBody}</p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{text.emergence}</h3>
              <p className="body text-muted-foreground">{text.emergenceBody}</p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{text.archetypes}</h3>
              <p className="body text-muted-foreground">{text.archetypesBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="h2 mb-4 text-foreground">{text.five}</h2>
            <p className="body mx-auto max-w-2xl text-muted-foreground">{text.fiveBody}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {archetypes.map((archetype, i) => (
              <div key={i} className="flex flex-col overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-card/80">
                <div className="relative -mx-6 -mt-6 mb-6 h-40 overflow-hidden rounded-t-lg bg-muted">
                  <Image src={archetype.image || '/placeholder.svg'} alt={archetype.title} fill priority={i < 2} className="h-full w-full object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{archetype.title}</h3>
                <p className="mb-4 text-sm font-medium text-primary">{archetype.role}</p>
                <p className="mb-6 flex-1 body text-muted-foreground">{archetype.description}</p>
                <div className="flex flex-wrap gap-2">
                  {archetype.traits.map((trait) => (
                    <span key={trait} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-16 text-center">
            <h2 className="h2 mb-4 text-foreground">{text.evolution}</h2>
            <p className="body text-muted-foreground">{text.evolutionBody}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {evolutionPhases.map((phase) => (
              <div key={phase.phase} className="rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/40 hover:bg-card/80">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{phase.phase}</h3>
                <p className="body text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-16 text-center">
            <h2 className="h2 mb-4 text-foreground">{text.roadmap}</h2>
            <p className="body text-muted-foreground">{text.roadmapBody}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {roadmapPhases.map((phase, i) => (
              <div key={phase.title} className="rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/40">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                  <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">{text.roadmapStatus[i]}</span>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-0.5 text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection locale={locale} />

      <section className="border-t border-border py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="h2 mb-4 text-foreground">{text.ctaTitle}</h2>
          <p className="body mx-auto mb-8 max-w-2xl text-muted-foreground">{text.ctaBody}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href={text.demoLink} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              {text.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={text.contactLink} className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10">
              {text.ctaSecondary}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
