import { Footer } from "@/components/layout/footer"
import { Zap, Shield, Users, Target } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acerca de Neuralia | Historia y Visión de la Plataforma IA",
  description: "Neuralia: por qué construimos una plataforma de IA diferente. Nuestra historia, misión y cómo trabajamos con empresas chilenas.",
}

const values = [
  {
    icon: Zap,
    title: "Velocidad",
    description: "Tu tiempo es precioso. Nos movemos rápido—deploy en días, no meses. Itera con velocidad.",
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Tus datos, tu seguridad, tu control. Infraestructura empresarial en la que puedes confiar, siempre.",
  },
  {
    icon: Users,
    title: "Asociación",
    description: "No somos un proveedor. Somos tu equipo. Tu éxito es nuestro éxito, y actuamos como tal.",
  },
  {
    icon: Target,
    title: "Impacto Real",
    description: "Medimos todo lo que importa. Ganancias de eficiencia, ingresos, satisfacción—resultados concretos.",
  },
]

export default function AboutPage() {

  return (
    <main className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
            Quiénes Somos
          </p>
          <h1 className="h1-light mb-8 text-foreground">N3uralia</h1>
          <p className="body-lg text-muted-foreground leading-relaxed">
            Empezamos porque vimos el mismo problema en todas partes: ideas brillantes de IA atrapadas en complejidad. Equipos de desarrollo ahogándose en infraestructura. Potencial dejado en el camino.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-20">
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
              El Por Qué
            </p>
            <h2 className="h2 text-foreground mb-8 leading-tight">Por Qué Hacemos Esto</h2>
            <p className="body text-muted-foreground leading-relaxed">
              Creemos que la IA no debería ser tan difícil. No deberías necesitar un PhD para orquestar agentes, ni pasar meses en infraestructura cuando podrías estar construyendo. Existimos para eliminar el ruido—para darte lo que realmente necesitas: simplicidad que escala, tecnología que funciona, resultados que importan. No estamos aquí para complicar tu mundo. Estamos aquí para simplificarlo.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-20">
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
              La Visión
            </p>
            <h2 className="h2 text-foreground mb-8 leading-tight">Hacia Dónde Vamos</h2>
            <p className="body text-muted-foreground leading-relaxed">
              Imaginamos un futuro donde cada empresa en Chile, Latinoamérica y más allá pueda construir con IA tan fácil como construye con código hoy. Donde tus ideas pasen de pizarra a producción en semanas, no años. Donde la barrera no sea la tecnología—sea la imaginación. Ese es el mundo que estamos construyendo, un cliente a la vez.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background border-t border-border">
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

      {/* Closing Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            No somos perfectos, pero estamos comprometidos. Comprometidos con tu éxito, con construir con integridad, y con hacer la IA accesible. Ese es N3uralia.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
