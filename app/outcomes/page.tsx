"use client"

import { motion } from "framer-motion"
import { OutcomesShowcase } from "@/components/landing/outcomes-showcase"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"

export default function OutcomesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Real Outcomes",
      subtitle: "Proven impact across industries",
      intro: "See how N3uralia transforms businesses and cities across Chile and beyond",
    },
    es: {
      title: "Resultados Reales",
      subtitle: "Impacto comprobado en múltiples industrias",
      intro: "Mira cómo N3uralia transforma empresas y ciudades en Chile y más allá",
    },
  }

  const t = content[language]

  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
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
          <OutcomesShowcase />
        </div>
      </section>

      <Footer />
    </main>
  )
}
