"use client"

import { motion } from "framer-motion"
import { PricingCards } from "@/components/landing/pricing-cards"
import { FaqChileSection } from "@/components/landing/faq-chile-section"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"

export default function PricingPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Transparent Pricing for Every Stage",
      subtitle:
        "Start small and scale as your business grows. No hidden fees, no surprises. All plans include our core platform features.",
    },
    es: {
      title: "Precios Transparentes para Cada Etapa",
      subtitle:
        "Comienza pequeño y escala a medida que crece tu negocio. Sin cuotas ocultas, sin sorpresas. Todos los planes incluyen características principales.",
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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <PricingCards />
        </div>
      </section>

      <FaqChileSection />

      <Footer />
    </main>
  )
}
