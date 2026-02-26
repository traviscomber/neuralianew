import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import { AboutPageClient } from "@/components/about/about-page-client"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'

  const titles = {
    es: "Acerca de N3uralia | Visión, Misión, Valores",
    en: "About N3uralia | Vision, Mission, Values",
  }

  const descriptions = {
    es: "N3uralia: plataforma de sistemas agenticos que amplifican capacidades humanas. Ingeniería rigurosa, responsabilidad radical, resultados medibles.",
    en: "N3uralia: agentic systems platform that amplifies human capabilities. Rigorous engineering, radical responsibility, measurable results.",
  }

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
  }
}

export default function AboutPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return <AboutPageClient locale={locale as 'es' | 'en'} />
}
        </div>
      </section>
      </SectionBackground>

      <SectionBackground section="workflow" className="border-b border-border">
      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-20">
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
              Nuestro Por Qué
            </p>
            <h2 className="h2 text-foreground mb-8 leading-tight">La Visión Que Nos Guía</h2>
            <p className="body text-muted-foreground leading-relaxed mb-6">
              Creemos que la IA debería ser diferente. No más chatbots respondiendo preguntas aisladas. No más herramientas que requieren supervisión constante. No más sistemas que reemplazan humanos.
            </p>
            <p className="body text-muted-foreground leading-relaxed mb-6">
              Imaginamos sistemas inteligentes que coordinan autonomía con gobernanza. Agentes que son especializados pero colaborativos. Arquitectura que escala sin complejidad exponencial.
            </p>
            <p className="body text-muted-foreground leading-relaxed">
              Existimos para que eso sea posible. Arquitectura que funciona. Ingeniería rigurosa. Responsabilidad radical. Sistema vivo que aprende y evoluciona.
            </p>
          </div>
        </div>
      </section>
      </SectionBackground>

      <SectionBackground section="solutions" className="border-b border-border">
      {/* Philosophy Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-20">
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
              Nuestra Filosofía
            </p>
            <h2 className="h2 text-foreground mb-8 leading-tight">Cómo Pensamos Diferente</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">1. Tecnología Grounded</h3>
                <p className="body text-muted-foreground">
                  La IA no es magia. Es ingeniería. Sistemas que son predecibles, rastreables, y completamente gobernados. Sin hype, solo arquitectura que funciona en el mundo real.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">2. Expansión, No Reemplazo</h3>
                <p className="body text-muted-foreground">
                  La IA que vale la pena expande capacidades humanas. Permite que equipos hagan más, no menos. No construimos para reemplazar—construimos para amplificar.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">3. Arquitectura sobre Herramientas</h3>
                <p className="body text-muted-foreground">
                  Los chatbots responden preguntas. Los sistemas agenticos construyen infraestructura organizacional. Hay una diferencia fundamental entre una herramienta y una arquitectura.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">4. Responsabilidad Radical</h3>
                <p className="body text-muted-foreground">
                  Cada decisión de cada agente debe ser rastreable, explicable, y auditable. Gobernanza no es fricción—es un requisito no-negociable de sistemas responsables.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">5. Evolución Continua</h3>
                <p className="body text-muted-foreground">
                  Los sistemas vivos aprenden. Living Agents no son estáticos. Mejoran con cada interacción, adaptándose a contexto, retroalimentación y experiencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </SectionBackground>

      <SectionBackground section="capabilities" className="border-t border-border">
      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
              Nuestro Enfoque
            </p>
            <h2 className="h2 text-foreground mb-6">Cómo Trabajamos</h2>
            <p className="body text-muted-foreground">
              Estas no son solo palabras en una pared. Es cómo operamos, todos los días.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="group">
                  <div className="bg-card border border-border rounded-lg p-8 h-full hover:border-primary/40 transition-colors">
                    <Icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      </SectionBackground>

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            No somos perfectos, pero estamos comprometidos. Comprometidos con tu éxito, con construir con integridad, y con hacer la IA accesible. Ese es N3uralia.
          </p>
        </div>
      </section>
      </main>

      <AboutPageClient />
    </>
  )
}
