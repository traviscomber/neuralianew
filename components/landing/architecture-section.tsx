"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Brain, MessageSquare, ArrowRight, Cloud, Layers } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ArchitectureSection() {
  const { t, language } = useLanguage()

  const layers = [
    {
      icon: Database,
      title: t("architecture.backend.title"),
      description: t("architecture.backend.description"),
      color: "from-slate-700 to-slate-800", // replaced blue gradient with sophisticated slate
      examples: ["PostgreSQL", "APIs REST", "Microservices"],
    },
    {
      icon: Brain,
      title: t("architecture.ai.title"),
      description: t("architecture.ai.description"),
      color: "from-amber-900 to-amber-800", // replaced purple gradient with warm taupe
      examples: ["GPT-4", "ML Models", "Analytics"],
    },
    {
      icon: MessageSquare,
      title: t("architecture.frontend.title"),
      description: t("architecture.frontend.description"),
      color: "from-teal-700 to-teal-800", // replaced green gradient with elegant emerald
      examples: ["React", "WhatsApp", "Dashboards"],
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Badge
            variant="secondary"
            className="mb-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 transition-colors duration-300" // updated to slate palette
          >
            <Layers className="w-4 h-4 mr-2" />
            {t("architecture.badge")}
          </Badge>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">
            <span className="bg-gradient-to-r from-slate-800 to-teal-700 dark:from-slate-300 dark:to-teal-400 bg-clip-text text-transparent">
              {" "}
              {/* elegant slate to emerald gradient */}
              {t("architecture.title")}
            </span>{" "}
            {t("architecture.subtitle")}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            {t("architecture.description")}
          </p>
        </motion.div>

        {/* Horizontal Architecture */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 max-w-4xl mx-auto">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 lg:gap-8"
            >
              <Card className="bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 w-full lg:w-64">
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${layer.color} flex items-center justify-center shadow-lg`}
                  >
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white transition-colors duration-300">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
                    {layer.description}
                  </p>

                  <div className="flex justify-center gap-1 flex-wrap">
                    {layer.examples.map((example) => (
                      <Badge
                        key={example}
                        variant="outline"
                        className="text-xs px-2 py-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-colors duration-300"
                      >
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow - only show between cards, not after last one */}
              {index < layers.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="hidden lg:block"
                >
                  <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Simple Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="bg-gradient-to-r from-slate-800 to-teal-700 dark:from-slate-700 dark:to-teal-600 text-white rounded-lg p-6 max-w-2xl mx-auto">
            {" "}
            {/* elegant gradient replacing blue-purple */}
            <div className="text-lg font-semibold mb-2 flex items-center justify-center gap-2">
              <Cloud className="w-5 h-5" />
              {t("architecture.summary.title")}
            </div>
            <p className="text-sm opacity-90 mb-4">{t("architecture.summary.description")}</p>
            <a
              href={`https://wa.me/56940946660?text=${encodeURIComponent(t("architecture.whatsapp.message"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-800 px-4 py-2 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-sm" // updated text color to slate
            >
              <MessageSquare className="w-4 h-4" />
              {t("architecture.whatsapp.button")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
