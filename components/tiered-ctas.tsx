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
      color: "primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/30",
      textColor: "text-primary",
    },
    {
      title: isES ? "Aprender" : "Learn",
      subtitle: isES ? "Métodos y casos reales" : "Methods and real cases",
      description: isES
        ? "Explore nuestra metodología de implementación y casos de éxito con resultados medibles."
        : "Explore our implementation methodology and real case studies with measurable results.",
      icon: Zap,
      href: `/${locale}/case-studies`,
      buttonText: isES ? "Ver Casos de Éxito" : "View Case Studies",
      color: "amber",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
      borderColor: "border-amber-300/50 dark:border-amber-700/50",
      textColor: "text-amber-600 dark:text-amber-400",
    },
    {
      title: isES ? "Demostrativo" : "Demo",
      subtitle: isES ? "Hablemos de tu proyecto" : "Let's talk about your project",
      description: isES
        ? "Acciona hoy con una demostración personalizada y un plan de implementación realista."
        : "Take action with a personalized demo and a realistic implementation roadmap.",
      icon: Calendar,
      href: `/${locale}/contact`,
      buttonText: isES ? "Solicitar Demo" : "Request Demo",
      color: "green",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-300/50 dark:border-green-700/50",
      textColor: "text-green-600 dark:text-green-400",
    },
  ]

  return (
    <section className="py-20 px-4 border-t border-border bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {isES ? "Elige tu próximo paso" : "Choose your next step"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isES
              ? "Sea cual sea tu nivel de conocimiento, tenemos el recurso que necesitas para avanzar."
              : "Whatever your knowledge level, we have the resource you need to move forward."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ctaData.map((cta, index) => {
            const Icon = cta.icon
            return (
              <div
                key={index}
                className={`p-8 rounded-lg border transition-all hover:shadow-lg hover:-translate-y-1 ${cta.bgColor} ${cta.borderColor}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${cta.textColor}`} />
                  <div>
                    <div className={`text-sm font-semibold ${cta.textColor}`}>{cta.subtitle}</div>
                    <h3 className="text-xl font-bold text-foreground">{cta.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {cta.description}
                </p>

                <Link
                  href={cta.href}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all w-full border
                    ${index === 2
                      ? `bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-600/50 hover:shadow-lg hover:from-green-600 hover:to-emerald-700`
                      : index === 1
                      ? `bg-amber-500 text-white border-amber-600/50 hover:bg-amber-600 hover:shadow-lg`
                      : `border-primary text-primary hover:bg-primary/10`
                    }
                  `}
                >
                  {cta.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="mt-4 pt-4 border-t border-border/30">
                  <p className="text-xs text-muted-foreground text-center">
                    {isES ? "Paso " : "Step "} {index + 1} {isES ? "de" : "of"} 3
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
