"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"
import { Zap, Shield, Users, Target } from "lucide-react"

export default function AboutPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About N3uralia",
      subtitle: "Orchestrating AI for the future",
      mission: "Our Mission",
      missionText:
        "We orchestrate AI complexity. From multi-agent systems to creative pipelines, N3uralia connects every part of your AI infrastructure into one seamless platform.",
      vision: "Our Vision",
      visionText: "A world where AI development is accessible, secure, and integrated into every business operation.",
      values: [
        { icon: Zap, title: "Performance", description: "Lightning-fast deployment and execution" },
        { icon: Shield, title: "Security", description: "Enterprise-grade security and compliance" },
        { icon: Users, title: "Collaboration", description: "Teams working seamlessly together" },
        { icon: Target, title: "Impact", description: "Measurable results for your business" },
      ],
    },
    es: {
      title: "Acerca de N3uralia",
      subtitle: "Orquestando IA para el futuro",
      mission: "Nuestra Misión",
      missionText:
        "Orquestamos la complejidad de la IA. Desde sistemas multi-agente hasta pipelines creativos, N3uralia conecta cada parte de tu infraestructura de IA.",
      vision: "Nuestra Visión",
      visionText: "Un mundo donde el desarrollo de IA es accesible, seguro e integrado en cada operación empresarial.",
      values: [
        { icon: Zap, title: "Rendimiento", description: "Despliegue y ejecución ultrarrápidos" },
        { icon: Shield, title: "Seguridad", description: "Seguridad empresarial y cumplimiento" },
        { icon: Users, title: "Colaboración", description: "Equipos trabajando sin problemas" },
        { icon: Target, title: "Impacto", description: "Resultados medibles para tu negocio" },
      ],
    },
  }

  const t = content[language]

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">{t.title}</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">{t.mission}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{t.missionText}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">{t.vision}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{t.visionText}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            {language === "en" ? "Our Values" : "Nuestros Valores"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((value, i) => (
              <div key={i}>
                <Card className="h-full border-gray-200 bg-white">
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-8 h-8 text-black mx-auto mb-4" />
                    <h3 className="font-semibold text-black mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
