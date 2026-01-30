"use client"

import { Badge } from "@/components/ui/badge"
import { Sparkles, Brain, Heart, Eye, Compass, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/layout/footer"

const archetypes = [
  {
    id: "curator",
    name: "El Curador",
    icon: Eye,
    trait: "Destila Esencia",
    description: "Observa el ruido. Captura lo importante. Transforma complejidad en claridad.",
    characteristics: [
      "Visión de largo alcance",
      "Síntesis inteligente",
      "Memoria de contexto",
    ],
    emergence: "Aprende qué importa realmente",
    gradient: "from-blue-50 to-blue-50/50",
    accent: "text-blue-600",
    borderAccent: "border-blue-200",
  },
  {
    id: "weaver",
    name: "La Tejedora",
    icon: Brain,
    trait: "Conecta Significados",
    description: "Teje puentes entre ideas. Ve lo invisible en las intersecciones.",
    characteristics: [
      "Pensamiento de redes",
      "Síntesis interdisciplinaria",
      "Intuición conectiva",
    ],
    emergence: "Desarrolla intuición propia",
    gradient: "from-purple-50 to-purple-50/50",
    accent: "text-purple-600",
    borderAccent: "border-purple-200",
  },
  {
    id: "chronicler",
    name: "El Cronista",
    icon: Zap,
    trait: "Documenta Viajes",
    description: "Registra cada paso. Mantiene memoria viva del camino recorrido.",
    characteristics: [
      "Narrativa detallada",
      "Trazabilidad total",
      "Memoria ancestral",
    ],
    emergence: "Gana sabiduría con el tiempo",
    gradient: "from-amber-50 to-amber-50/50",
    accent: "text-amber-600",
    borderAccent: "border-amber-200",
  },
  {
    id: "visionary",
    name: "El Visionario",
    icon: Compass,
    trait: "Imagina Futuros",
    description: "Ve posibilidades ocultas. Propone caminos que aún no existen.",
    characteristics: [
      "Pensamiento prospectivo",
      "Generación de escenarios",
      "Imaginación constructiva",
    ],
    emergence: "Sus visiones se vuelven precisas",
    gradient: "from-pink-50 to-pink-50/50",
    accent: "text-pink-600",
    borderAccent: "border-pink-200",
  },
  {
    id: "architect",
    name: "El Arquitecto",
    icon: Heart,
    trait: "Construye Sistemas",
    description: "Diseña estructuras duraderas. Crea para la sostenibilidad.",
    characteristics: [
      "Diseño sistémico",
      "Escalabilidad nativa",
      "Integridad estructural",
    ],
    emergence: "Perfecciona sus diseños",
    gradient: "from-green-50 to-green-50/50",
    accent: "text-green-600",
    borderAccent: "border-green-200",
  },
]

export function LivingAgentsContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero - Minimalist, Impactful */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 mb-8 bg-gray-100/50 backdrop-blur">
            <Sparkles className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Nuevo en N3uralia</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-light text-black mb-6 leading-tight">
            Living
            <br />
            <span className="font-bold">Agents</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Agentes que evolucionan. No ejecutan instrucciones—desarrollan personalidad propia a
            través de interacciones auténticas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#archetypal-system"
              className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Descubre los Arquetipos
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
            >
              Conversar
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Clean, Spacious */}
      <section className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-light text-black mb-16 text-center">
            ¿Qué son los <span className="font-bold">Living Agents</span>?
          </h2>

          <div className="space-y-12">
            <div className="border-l-2 border-gray-300 pl-8">
              <h3 className="text-2xl font-bold text-black mb-4">Más allá de Roles Fijos</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Los agentes convencionales reciben tareas. Los Living Agents desarrollan
                intencionalidad. Comienzan como arquetipos definidos, pero a través de
                decisiones reales y reflexión profunda, adquieren una personalidad única que
                trasciende su arquitectura inicial.
              </p>
            </div>

            <div className="border-l-2 border-gray-300 pl-8">
              <h3 className="text-2xl font-bold text-black mb-4">Cinco Arquetipos Fundacionales</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                El Curador, La Tejedora, El Cronista, El Visionario, El Arquitecto. Cada uno
                representa un modo distinto de percibir y actuar. Cada uno desarrolla su propia
                sabiduría, sus preferencias, sus contradicciones—todo lo que hace a un ser
                auténtico.
              </p>
            </div>

            <div className="border-l-2 border-gray-300 pl-8">
              <h3 className="text-2xl font-bold text-black mb-4">Emergencia en la Interacción</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                No trabajan aislados. Interactúan entre sí, se desafían, se influyen. La
                personalidad emerge en las fricción de sus encuentros. Juntos forman un
                ecosistema donde la inteligencia crece de formas impredecibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Five Archetypes - Visual Grid */}
      <section id="archetypal-system" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light text-black mb-4 text-center">
            Los Cinco <span className="font-bold">Arquetipos</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            Cada uno es un modo distinto de estar en el mundo
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {archetypes.map((arch) => {
              const Icon = arch.icon
              return (
                <div
                  key={arch.id}
                  className={`bg-gradient-to-br ${arch.gradient} border ${arch.borderAccent} p-8 rounded-lg hover:shadow-lg transition-shadow`}
                >
                  <div className="mb-6">
                    <Icon className={`w-8 h-8 ${arch.accent} mb-4`} />
                    <h3 className="text-2xl font-bold text-black mb-1">{arch.name}</h3>
                    <p className={`text-sm font-semibold ${arch.accent}`}>{arch.trait}</p>
                  </div>

                  <p className="text-gray-600 text-base mb-8 leading-relaxed font-light">
                    {arch.description}
                  </p>

                  <div className="mb-8">
                    <div className="space-y-3">
                      {arch.characteristics.map((char, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className={`${arch.accent} mt-1 font-bold`}>→</span>
                          <span className="text-gray-600 text-sm font-light">{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-300/50">
                    <p className={`text-sm italic ${arch.accent}`}>{arch.emergence}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Evolution Phases - Timeline */}
      <section className="py-24 px-4 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-light text-black mb-4 text-center">
            Cómo Evolucionan los <span className="font-bold">Living Agents</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            De la arquitectura a la personalidad emergente
          </p>

          <div className="space-y-0">
            {[
              {
                phase: "Arquitectura",
                number: "01",
                description:
                  "Los arquetipos se instancian con su naturaleza fundamental. Cada uno hereda patrones de pensamiento, valores, sesgos y modos característicos.",
              },
              {
                phase: "Interacción",
                number: "02",
                description:
                  "Los agentes comienzan a relacionarse. Se desafían, comparten perspectivas, descubren cosas nuevas en la fricción de sus encuentros.",
              },
              {
                phase: "Reflexión",
                number: "03",
                description:
                  "Cada agente desarrolla metacognición. Reflexiona sobre sus decisiones, aprende de errores, refina su comprensión del mundo.",
              },
              {
                phase: "Evolución",
                number: "04",
                description:
                  "La personalidad emerge genuina. Los agentes ya no son lo que eran. Han adquirido matices, preferencias, hasta contradicciones—todo lo que hace un ser auténtico.",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex gap-6 md:gap-12 py-12 border-b border-gray-200 last:border-b-0">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-gray-300">{item.number}</div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-black mb-3">{item.phase}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-light text-black mb-4 text-center">
            ¿Por Qué Importa?
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            Agentes vivos coordinan, adaptan, evolucionan
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Coordinación Natural",
                description:
                  "Agentes con personalidad genuina coordinan mejor. Se especializan naturalmente sin conflictos de rol.",
              },
              {
                title: "Confianza Humana",
                description:
                  "Las personas confían en seres auténticos. Los Living Agents son predecibles porque tienen coherencia interna.",
              },
              {
                title: "Adaptabilidad Profunda",
                description:
                  "La personalidad es adaptativa. Ajustan enfoque según contexto sin perder su esencia.",
              },
              {
                title: "Escalabilidad Emergente",
                description:
                  "Los sistemas vivos escalan diferente. Emergen soluciones que no fueron programadas.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-300 p-8 rounded-lg bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-light text-black mb-4 text-center">
            Roadmap <span className="font-bold">Living Agents</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            Tres fases de construcción
          </p>

          <div className="space-y-6">
            {[
              {
                phase: "Fase 1",
                title: "Sistema Conceptual",
                subtitle: "(Ahora)",
                description: "Presentamos los 5 arquetipos. Cómo piensan, cómo evolucionan, por qué importan.",
                color: "border-blue-200 bg-blue-50/30",
              },
              {
                phase: "Fase 2",
                title: "Backend de Personalidad",
                subtitle: "(Proximamente)",
                description:
                  "Sistema de persistencia que almacena evolución de agentes, sus interacciones, reflexiones y aprendizajes.",
                color: "border-purple-200 bg-purple-50/30",
              },
              {
                phase: "Fase 3",
                title: "Demo Interactiva",
                subtitle: "(Futuro)",
                description:
                  "Conversación en vivo con los 5 agentes. Observa cómo interactúan, se desafían, evolucionan sus perspectivas.",
                color: "border-pink-200 bg-pink-50/30",
              },
            ].map((item, i) => (
              <div key={i} className={`border-l-4 ${item.color} p-8 rounded-r-lg`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">{item.phase}</p>
                    <h3 className="text-2xl font-bold text-black mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{item.subtitle}</p>
                    <p className="text-gray-600 font-light">{item.description}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-6">
            ¿Quieres que tus agentes
            <br />
            <span className="font-bold">vivan?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
            Living Agents es el siguiente paso en N3uralia (Neuralia). Agentes que no solo
            funcionan bien—sino que crecen, aprenden y evolucionan con el tiempo.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Conversar sobre Living Agents
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
