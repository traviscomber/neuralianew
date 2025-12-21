"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { AlertCircle, TrendingUp } from "lucide-react"

export function HeroProblemSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      subtitle: "The Challenge",
      title: "AI systems are fragmented",
      problems: [
        "Agents, workflows, and data live in separate silos",
        "Integration complexity slows deployment from months to weeks",
        "No unified visibility into what's actually happening",
      ],
      solution: "N3uralia orchestrates it all",
    },
    es: {
      subtitle: "El Desafío",
      title: "Los sistemas de IA están fragmentados",
      problems: [
        "Agentes, flujos de trabajo y datos en silos separados",
        "Complejidad de integración ralentiza despliegues",
        "Sin visibilidad unificada del sistema",
      ],
      solution: "N3uralia lo orquesta todo",
    },
  }

  const t = content[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{t.subtitle}</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            {t.title}
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-4 mb-12">
            {t.problems.map((problem, i) => (
              <motion.div
                key={i}
                className="flex gap-4 items-start p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
                whileHover={{ x: 4 }}
              >
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300 text-lg">{problem}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-700/50"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex gap-3 items-start">
              <TrendingUp className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-emerald-300 mb-2">{t.solution}</h3>
                <p className="text-slate-300">One unified platform for all AI orchestration needs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
