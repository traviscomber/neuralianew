"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Check } from "lucide-react"

export function ComparisonSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Why N3uralia",
      subtitle: "How we compare to traditional approaches",
      comparison: [
        {
          feature: "Time to Deploy",
          traditional: "6+ months",
          neuralia: "2-4 weeks",
          advantage: true,
        },
        {
          feature: "System Integration",
          traditional: "Complex, fragmented",
          neuralia: "Unified orchestration",
          advantage: true,
        },
        {
          feature: "Operational Cost",
          traditional: "$500K+/year",
          neuralia: "Scalable pricing",
          advantage: true,
        },
        {
          feature: "Team Training",
          traditional: "Weeks of training",
          neuralia: "Intuitive interface",
          advantage: true,
        },
        {
          feature: "Real-time Monitoring",
          traditional: "Limited visibility",
          neuralia: "Complete observability",
          advantage: true,
        },
        {
          feature: "Update & Maintenance",
          traditional: "Downtime required",
          neuralia: "Zero-downtime updates",
          advantage: true,
        },
      ],
    },
    es: {
      title: "Por Qué N3uralia",
      subtitle: "Cómo nos comparamos con enfoques tradicionales",
      comparison: [
        {
          feature: "Tiempo de Despliegue",
          traditional: "6+ meses",
          neuralia: "2-4 semanas",
          advantage: true,
        },
        {
          feature: "Integración de Sistemas",
          traditional: "Compleja, fragmentada",
          neuralia: "Orquestación unificada",
          advantage: true,
        },
        {
          feature: "Costo Operacional",
          traditional: "$500K+/año",
          neuralia: "Precios escalables",
          advantage: true,
        },
        {
          feature: "Entrenamiento de Equipo",
          traditional: "Semanas de capacitación",
          neuralia: "Interfaz intuitiva",
          advantage: true,
        },
        {
          feature: "Monitoreo en Tiempo Real",
          traditional: "Visibilidad limitada",
          neuralia: "Observabilidad completa",
          advantage: true,
        },
        {
          feature: "Actualizaciones y Mantenimiento",
          traditional: "Requiere downtime",
          neuralia: "Actualizaciones sin downtime",
          advantage: true,
        },
      ],
    },
  }

  const t = content[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-xl text-slate-600">{t.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-4xl mx-auto overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-4 px-4 font-semibold text-slate-900">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-slate-600">Traditional</th>
                <th className="text-center py-4 px-4 font-semibold text-emerald-700">N3uralia</th>
              </tr>
            </thead>
            <tbody>
              {t.comparison.map((row, i) => (
                <motion.tr
                  key={i}
                  variants={itemVariants}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-4 font-medium text-slate-900">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-slate-600">{row.traditional}</td>
                  <td className="py-4 px-4 text-center">
                    <motion.div className="flex justify-center" whileHover={{ scale: 1.1 }}>
                      <div className="flex items-center justify-center gap-2 text-emerald-600 font-medium">
                        <Check className="w-5 h-5" />
                        {row.neuralia}
                      </div>
                    </motion.div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
