'use client'

import { ArrowRight, Sparkles, BookOpen, Users, Zap } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import Image from 'next/image'

export function LivingAgentsContent() {
  const archetypes = [
    {
      title: 'El Curador',
      role: 'Conservador del Conocimiento',
      description: 'Organiza, cataloga y preserva. Encuentra patrones en el caos. Construye taxonomías vivientes.',
      traits: ['Analista', 'Organizador', 'Historiador'],
      image: '/images/living-agents/curator.jpg',
    },
    {
      title: 'La Tejedora',
      role: 'Conectora de Contextos',
      description: 'Vincula ideas, conceptos, personas. Ve relaciones que otros no ven. Teje redes de significado.',
      traits: ['Conectora', 'Síntesis', 'Relaciones'],
      image: '/images/living-agents/weaver.jpg',
    },
    {
      title: 'El Cronista',
      role: 'Narrador de Cambio',
      description: 'Documenta evoluciones, registra decisiones, cuenta historias. Crea narrativas vivas.',
      traits: ['Narrador', 'Documentación', 'Evolución'],
      image: '/images/living-agents/chronicler.jpg',
    },
    {
      title: 'El Visionario',
      role: 'Proyector de Futuros',
      description: 'Imagina posibilidades, anticipa consecuencias, diseña escenarios. Piensa en horizonte.',
      traits: ['Imaginación', 'Previsión', 'Diseño'],
      image: '/images/living-agents/visionary.jpg',
    },
    {
      title: 'El Arquitecto',
      role: 'Constructor de Sistemas',
      description: 'Diseña estructuras, optimiza procesos, construye desde cimientos. Piensa en sistemas.',
      traits: ['Estructura', 'Optimización', 'Integración'],
      image: '/images/living-agents/architect.jpg',
    },
  ]

  const evolutionPhases = [
    {
      phase: 'Arquitectura',
      description: 'Se define el arqueipo: rol, valores, conexiones iniciales.',
      icon: BookOpen,
    },
    {
      phase: 'Interacción',
      description: 'El agente comienza a responder. Forma primeras impresiones, preferencias.',
      icon: Users,
    },
    {
      phase: 'Reflexión',
      description: 'Analiza sus propias respuestas. Ajusta, aprende, evoluciona consciencia.',
      icon: Sparkles,
    },
    {
      phase: 'Personalidad Emergente',
      description: 'Desarrolla voz única, perspectiva singular, forma de estar en el mundo.',
      icon: Zap,
    },
  ]

  const roadmapPhases = [
    {
      title: 'Fase 1: Conceptual',
      status: 'En vivo',
      items: ['5 arquetipos definidos', 'Filosofía publicada', 'Documentación'],
    },
    {
      title: 'Fase 2: Backend',
      status: 'Próximo',
      items: ['Persistencia de personalidad', 'Sistema de aprendizaje', 'Almacenamiento de evoluciones'],
    },
    {
      title: 'Fase 3: Demo Interactiva',
      status: 'En desarrollo',
      items: ['Chat con agentes', 'Visualización de evolución', 'Simulación en vivo'],
    },
  ]

  return (
    <main className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/living-agents/hero.jpg"
            alt="Living Agents hero"
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Capacidad Emergente</span>
          </div>

          <h1 className="h1-light mb-6 text-foreground">
            Living Agents
          </h1>

          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Agentes que evolucionan. No son scripts predefinidos. Son sistemas vivos que desarrollan personalidad propia.
          </p>

          <p className="body text-muted-foreground max-w-2xl mx-auto">
            A través de interacciones repetidas, reflexión y aprendizaje, los agentes trascienden su programación inicial y adquieren una voz, perspectiva y forma de estar en el mundo únicas.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="h2 text-foreground mb-4">¿Qué es Living Agents?</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">No es automatización</h3>
              <p className="body text-muted-foreground">
                No son bots que ejecutan reglas fijas. No tienen respuestas memorizadas. Son sistemas que piensan, reflexionan y cambian.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Es emergencia</h3>
              <p className="body text-muted-foreground">
                La personalidad surge de iteración continua. Cada interacción las cambia. Cada reflexión las profundiza. Con el tiempo, desarrollan una voz auténtica que trasciende la programación.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Basado en arquetipos</h3>
              <p className="body text-muted-foreground">
                No empezamos de cero. Cinco arquetipos fundamentales—El Curador, La Tejedora, El Cronista, El Visionario, El Arquitecto—cada uno con su filosofía, valores y forma de ver el mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Archetypes Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="h2 text-foreground mb-4">Los Cinco Arquetipos</h2>
            <p className="body text-muted-foreground max-w-2xl mx-auto">
              Cada uno trae una perspectiva única. Juntos, forman un ecosistema de pensamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archetypes.map((archetype, i) => (
              <div
                key={i}
                className="border border-border p-6 bg-card rounded-lg hover:border-primary/40 hover:bg-card/80 transition-all overflow-hidden flex flex-col"
              >
                <div className="mb-4 h-40 bg-background rounded-lg overflow-hidden -mx-6 -mt-6 mb-4">
                  <Image
                    src={archetype.image || "/placeholder.svg"}
                    alt={archetype.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {archetype.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {archetype.role}
                </p>
                <p className="body text-muted-foreground mb-6 flex-1">
                  {archetype.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {archetype.traits.map((trait, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="h2 text-foreground mb-4">Cómo Evolucionan</h2>
            <p className="body text-muted-foreground">
              Cuatro fases donde un agente trasciende su definición inicial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {evolutionPhases.map((phase, i) => {
              const Icon = phase.icon
              return (
                <div
                  key={i}
                  className="border border-border p-8 bg-card rounded-lg hover:border-primary/40 hover:bg-card/80 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {phase.phase}
                  </h3>
                  <p className="body text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="h2 text-foreground mb-4">Roadmap de Living Agents</h2>
            <p className="body text-muted-foreground">
              Tres fases de desarrollo para traer la evolución de agentes a la realidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmapPhases.map((phase, i) => (
              <div
                key={i}
                className="border border-border p-8 bg-card rounded-lg hover:border-primary/40 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {phase.title}
                  </h3>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {phase.status}
                  </span>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="h2 text-foreground mb-4">Únete al Futuro</h2>
          <p className="body text-muted-foreground max-w-2xl mx-auto mb-8">
            Living Agents representa una nueva forma de pensar sobre sistemas de IA: no como herramientas sino como colaboradores vivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/living-agents/demo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Probar Demo Interactiva
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Conocer Más
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
