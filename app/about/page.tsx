"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/layout/footer"
import { useLanguage } from "@/lib/language-context"
import { Zap, Shield, Users, Target } from "lucide-react"

export default function AboutPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "N3uralia",
      subtitle: "Our Story",
      heroText: "We started because we saw the same problem everywhere: brilliant AI ideas getting stuck in complexity. Development teams drowning in infrastructure. Potential left on the table.",
      mission: "Why We Do This",
      missionText:
        "We believe AI shouldn't be this hard. You shouldn't need a PhD to orchestrate agents, or spend months on infrastructure when you could be building. We exist to cut through the noise—to give developers and companies what they actually need: simplicity that scales, tech that works, results that matter. We're not here to complicate your world. We're here to simplify it.",
      vision: "Where We're Going",
      visionText: "We imagine a future where every company in Chile, Latin America, and beyond can build with AI as easily as they build with code today. Where your ideas move from whiteboard to production in weeks, not years. Where the barrier isn't technology—it's imagination. That's the world we're building toward, one client at a time.",
      valuesTitle: "How We Work",
      values: [
        {
          icon: Zap,
          title: "Speed",
          description: "Your time is precious. We move fast—deployment in days, not months. Iterate with velocity.",
        },
        {
          icon: Shield,
          title: "Trust",
          description: "Your data, your security, your control. Enterprise-grade infrastructure you can rely on, always.",
        },
        {
          icon: Users,
          title: "Partnership",
          description: "We're not a vendor. We're your team. Your success is our success, and we act like it.",
        },
        {
          icon: Target,
          title: "Real Impact",
          description: "We measure everything that matters. Efficiency gains, revenue, customer satisfaction—concrete results.",
        },
      ],
    },
    es: {
      title: "N3uralia",
      subtitle: "Nuestra Historia",
      heroText: "Empezamos porque vimos el mismo problema en todas partes: ideas brillantes de IA atrapadas en complejidad. Equipos de desarrollo ahogándose en infraestructura. Potencial dejado en el camino.",
      mission: "Por Qué Hacemos Esto",
      missionText:
        "Creemos que la IA no debería ser tan difícil. No deberías necesitar un PhD para orquestar agentes, ni pasar meses en infraestructura cuando podrías estar construyendo. Existimos para eliminar el ruido—para darte lo que realmente necesitas: simplicidad que escala, tecnología que funciona, resultados que importan. No estamos aquí para complicar tu mundo. Estamos aquí para simplificarlo.",
      vision: "Hacia Dónde Vamos",
      visionText: "Imaginamos un futuro donde cada empresa en Chile, Latinoamérica y más allá pueda construir con IA tan fácil como construye con código hoy. Donde tus ideas pasen de pizarra a producción en semanas, no años. Donde la barrera no sea la tecnología—sea la imaginación. Ese es el mundo que estamos construyendo, un cliente a la vez.",
      valuesTitle: "Cómo Trabajamos",
      values: [
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
      ],
    },
  }

  const t = content[language]

  return (
    <main className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
            {language === "en" ? "Who We Are" : "Quiénes Somos"}
          </p>
          <h1 className="h1-light mb-8 text-foreground">{t.title}</h1>
          <p className="body-lg text-muted-foreground leading-relaxed">{t.heroText}</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-20">
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
              {language === "en" ? "The Why" : "El Por Qué"}
            </p>
            <h2 className="h2 text-foreground mb-8 leading-tight">{t.mission}</h2>
            <p className="body text-muted-foreground leading-relaxed">{t.missionText}</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-20">
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
              {language === "en" ? "The Vision" : "La Visión"}
            </p>
            <h2 className="h2 text-foreground mb-8 leading-tight">{t.vision}</h2>
            <p className="body text-muted-foreground leading-relaxed">{t.visionText}</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
              {language === "en" ? "Our Approach" : "Nuestro Enfoque"}
            </p>
            <h2 className="h2 text-foreground mb-6">{t.valuesTitle}</h2>
            <p className="body text-muted-foreground">
              {language === "en"
                ? "These aren't just words on a wall. They're how we operate, every single day."
                : "Estas no son solo palabras en una pared. Es cómo operamos, todos los días."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.map((value, i) => (
              <div key={i} className="group">
                <div className="bg-card border border-border rounded-lg p-8 h-full hover:border-primary/40 transition-colors">
                  <value.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === "en"
              ? "We're not perfect, but we're committed. Committed to your success, to building with integrity, and to making AI accessible. That's N3uralia."
              : "No somos perfectos, pero estamos comprometidos. Comprometidos con tu éxito, con construir con integridad, y con hacer la IA accesible. Ese es N3uralia."}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
