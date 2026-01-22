"use client"

export function MinimalistSolutions() {

  const solutions = [
    {
      name: "Mermasapp",
      description: "Optimizacion industrial: reduce desperdicio en plantas de alimentos con IA en tiempo real",
      link: "https://mermazero.vercel.app",
      category: "Industria",
    },
    {
      name: "EcosueloLab",
      description: "Agente conversacional para analisis de campos NPK. Inteligencia agricola avanzada.",
      link: "https://www.ecosuelolab.com",
      category: "AgriTech",
    },
    {
      name: "Blackswan Facility Core",
      description: "Sistema completo de gestion de campos productivos con IA",
      link: "https://blackswanfc.vercel.app",
      ceo: "Santiago Colvin",
      category: "AgriTech",
    },
    {
      name: "ZFSketch",
      description: "Plataforma de arte digital y visualizacion creativa potenciada por IA",
      link: null,
      category: "Arte Digital",
    },
    {
      name: "N3uralia360",
      description: "Experiencias inmersivas y visualizacion 3D con inteligencia artificial",
      link: "https://n3uralia360.art",
      category: "Arte Digital",
    },
    {
      name: "Despega Tu Carrera",
      description: "Plataforma de desarrollo profesional y networking",
      link: "https://despegatucarrera.com",
      category: "Desarrollo Profesional",
    },
    {
      name: "DoubleC Information",
      description: "Sistema de inteligencia de datos y analisis avanzado",
      link: "https://doublec.information",
      category: "Data Intelligence",
    },
  ]

  return (
    <section className="bg-background py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
          Nuestro Portafolio
        </p>
        <h2 className="h2 text-foreground mb-12">
          Productos que Desarrollamos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => {
            const CardWrapper = solution.link ? 'a' : 'div'
            const cardProps = solution.link ? {
              href: solution.link,
              target: "_blank",
              rel: "noopener noreferrer",
            } : {}
            
            return (
              <CardWrapper
                key={solution.name}
                {...cardProps}
                className={`border border-border p-6 bg-card hover:border-primary/40 transition-all rounded-lg ${solution.link ? 'cursor-pointer' : ''} ${solution.featured ? 'border-primary/30 bg-primary/5' : ''}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">{solution.category}</span>
                  {solution.featured && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Destacado</span>
                  )}
                </div>
                <p className="text-foreground font-semibold text-lg">{solution.name}</p>
                <p className="text-muted-foreground text-sm mt-2">{solution.description}</p>
                {solution.ceo && (
                  <p className="text-muted-foreground text-xs mt-3">
                    <span className="font-medium">CEO: </span>
                    {solution.ceo}
                  </p>
                )}
                {solution.link ? (
                  <p className="text-primary text-xs mt-4 hover:text-primary/80 transition-colors">
                    Visitar Sitio →
                  </p>
                ) : (
                  <p className="text-muted-foreground/60 text-xs mt-4">
                    Proximamente
                  </p>
                )}
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
