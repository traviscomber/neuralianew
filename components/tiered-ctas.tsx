import Link from "next/link"
import { ArrowRight, BookOpen, Zap, Calendar } from "lucide-react"
import type { Locale } from "@/content/dictionaries"

interface TieredCtasProps {
  locale: Locale
}

export function TieredCtas({ locale }: TieredCtasProps) {
  const isES = locale === "es"

  const ctaData = [
    {
      title: isES ? "Explorar" : "Explore",
      subtitle: isES ? "Conoce nuestras capacidades" : "Discover our capabilities",
      description: isES 
        ? "Descubre cómo funcionan los sistemas agenticos y qué pueden hacer por tu empresa."
        : "Learn how agentic systems work and what they can do for your business.",
      icon: BookOpen,
      href: `/${locale}/capabilities`,
      buttonText: isES ? "Ver Capacidades" : "View Capabilities",
      step: 1,
    },
    {
      title: isES ? "Aprender" : "Learn",
      subtitle: isES ? "Métodos y casos reales" : "Methods and real cases",
      description: isES
        ? "Explora nuestra metodología de implementación y casos de éxito con resultados medibles."
        : "Explore our implementation methodology and real case studies with measurable results.",
      icon: Zap,
      href: `/${locale}/case-studies`,
      buttonText: isES ? "Ver Casos de Éxito" : "View Case Studies",
      step: 2,
    },
    {
      title: isES ? "Demostrativo" : "Demo",
      subtitle: isES ? "Hablemos de tu proyecto" : "Let's talk about your project",
      description: isES
        ? "Acciona hoy con una demostración personalizada y un plan de implementación realista."
        : "Take action with a personalized demo and a realistic implementation roadmap.",
      icon: Calendar,
      href: `/${locale}/contact`,
      buttonText: isES ? "Agendar diagnóstico (30 min)" : "Schedule diagnosis (30 min)",
      step: 3,
    },
  ]

  return (
    <section className="py-24 px-4 bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            {isES ? "Elige tu próximo paso" : "Choose your next step"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isES
              ? "Sea cual sea tu nivel de conocimiento, tenemos el recurso que necesitas para avanzar."
              : "Whatever your knowledge level, we have the resource you need to move forward."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ctaData.map((cta, index) => {
            const Icon = cta.icon
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card Background with gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Main card */}
                <div className="relative p-8 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg flex flex-col h-full">
                  
                  {/* Step indicator badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-semibold text-primary">
                      {isES ? "Paso" : "Step"} {cta.step} {isES ? "de" : "of"} 3
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">{cta.subtitle}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{cta.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                      {cta.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={cta.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full
                      bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5
                      border border-primary/40
                    "
                  >
                    {cta.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Visual connection line (desktop only) */}
        <div className="hidden md:flex justify-between mt-12 px-8">
          {[1, 2].map((i) => (
            <div key={i} className="flex-1 h-0.5 bg-gradient-to-r from-primary/20 to-transparent mx-2" />
          ))}
        </div>
      </div>
    </section>
  )
}
