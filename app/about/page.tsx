"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"
import { Zap, Shield, Users, Target } from "lucide-react"

export default function AboutPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About N3uralia",
      subtitle: "Building the AI development gateway for the future",
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
      subtitle: "Construyendo la puerta de entrada al desarrollo de IA del futuro",
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
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.mission}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{t.missionText}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.vision}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{t.visionText}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-slate-200">
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
