"use client"
import { CapabilitiesGrid } from "@/components/landing/capabilities-grid"
import { CouncilVoting } from "@/components/landing/council-voting"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"

export default function CapabilitiesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Capabilities",
      subtitle: "Everything you need to build and automate with AI",
      intro: "N3uralia provides the core capabilities to orchestrate AI across your business.",
      councilTitle: "Expert Council in Action",
      councilScenario: "Decision support system analyzing multi-domain complexity for enterprise automation workflows",
    },
    es: {
      title: "Capacidades",
      subtitle: "Todo lo que necesitas para construir y automatizar con IA",
      intro: "N3uralia proporciona las capacidades principales para orquestar IA en tu negocio.",
      councilTitle: "Expert Council en Acción",
      councilScenario: "Sistema de soporte de decisiones analizando complejidad multi-dominio para flujos de automatización empresarial",
    },
  }

  const t = content[language]

  const councilAgents = [
    {
      name: "Domain",
      role: "Análisis Empresarial",
      vote: "approve" as const,
      reasoning: "Alineado con objetivos",
      color: "#739696",
    },
    {
      name: "Logic",
      role: "Validación Lógica",
      vote: "approve" as const,
      reasoning: "Coherencia verificada",
      color: "#739696",
    },
    {
      name: "Risk",
      role: "Gestión de Riesgos",
      vote: "caution" as const,
      reasoning: "Requiere validación",
      color: "#739696",
    },
    {
      name: "Compliance",
      role: "Normativas",
      vote: "approve" as const,
      reasoning: "Conforme regulaciones",
      color: "#739696",
    },
    {
      name: "Performance",
      role: "Optimización",
      vote: "approve" as const,
      reasoning: "Dentro de límites",
      color: "#739696",
    },
  ]

  return (
    <>
      <main className="min-h-screen pt-16">
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">{t.title}</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-4">{t.subtitle}</p>
            <p className="text-gray-500 max-w-2xl mx-auto">{t.intro}</p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <CapabilitiesGrid />
          </div>
        </section>

        {/* Expert Council Section */}
        <section className="py-24 bg-gradient-to-b from-white to-primary/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">{t.councilTitle}</h2>
            </div>
            <CouncilVoting
              title={t.councilTitle}
              scenario={t.councilScenario}
              agents={councilAgents}
              decision={language === "es" ? "Proceder con Implementación" : "Proceed with Implementation"}
              confidence={88}
            />
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
