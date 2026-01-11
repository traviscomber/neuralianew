"use client"

import { useLanguage } from "@/lib/language-context"
import { FlaskConical, GitMerge, Rocket, RotateCw } from "lucide-react"

export function ResearchProductionFlow() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "From Research to Production",
      subtitle: "Continuous evolution. Every experiment becomes reusable knowledge.",
      steps: [
        {
          icon: FlaskConical,
          title: "Prototype",
          description: "Rapid experimentation with new AI models and approaches",
        },
        {
          icon: GitMerge,
          title: "Refine",
          description: "Test, validate, and optimize with real data",
        },
        {
          icon: Rocket,
          title: "Deploy",
          description: "Seamlessly promote experiments to production",
        },
        {
          icon: RotateCw,
          title: "Improve",
          description: "Agents learn and adapt based on real-world usage",
        },
      ],
      note: "Unlike static automation platforms, N3uralia treats every deployment as a learning opportunity",
    },
    es: {
      title: "De Investigación a Producción",
      subtitle: "Evolución continua. Cada experimento se convierte en conocimiento reutilizable.",
      steps: [
        {
          icon: FlaskConical,
          title: "Prototipo",
          description: "Experimentación rápida con nuevos modelos y enfoques de IA",
        },
        {
          icon: GitMerge,
          title: "Refinar",
          description: "Probar, validar y optimizar con datos reales",
        },
        {
          icon: Rocket,
          title: "Desplegar",
          description: "Promociona experimentos a producción sin fricciones",
        },
        {
          icon: RotateCw,
          title: "Mejorar",
          description: "Los agentes aprenden y se adaptan según el uso real",
        },
      ],
      note: "A diferencia de las plataformas de automatización estáticas, N3uralia trata cada despliegue como una oportunidad de aprendizaje",
    },
  }

  const t = content[language]

  return (
    <section className="py-24 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Flow Steps */}
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {t.steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center relative">
                {/* Connector Line */}
                {index < t.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gray-300" />
                )}

                {/* Step Content */}
                <div className="relative z-10 bg-white">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-black flex items-center justify-center bg-white">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Note */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-600 italic">{t.note}</p>
        </div>
      </div>
    </section>
  )
}
