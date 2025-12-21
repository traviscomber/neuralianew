"use client"

import { motion } from "framer-motion"
import { CapabilitiesGrid } from "@/components/landing/capabilities-grid"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"

export default function CapabilitiesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "AI Capabilities",
      subtitle: "Everything you need to build, automate, and scale with AI",
      intro:
        "N3uralia provides five core capabilities that work together to deliver complete AI solutions for any business challenge.",
    },
    es: {
      title: "Capacidades de IA",
      subtitle: "Todo lo que necesitas para construir, automatizar y escalar con IA",
      intro:
        "N3uralia proporciona cinco capacidades principales que trabajan juntas para entregar soluciones completas de IA.",
    },
  }

  const t = content[language]

  return (
    <>
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
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
              className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-4"
            >
              {t.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              {t.intro}
            </motion.p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <CapabilitiesGrid />
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
