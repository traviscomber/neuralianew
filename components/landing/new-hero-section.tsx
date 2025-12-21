"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react"

export function NewHeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-20 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/3 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-slate-100 to-transparent rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 17,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Section - Compact */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6"
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-emerald-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="text-sm font-medium text-slate-700">{t("hero.badge")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-medium"
          >
            <div className="flex items-center gap-2 text-slate-700">
              <Shield className="w-5 h-5 text-emerald-600" />
              {t("hero.benefit1")}
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Zap className="w-5 h-5 text-emerald-600" />
              {t("hero.benefit2")}
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Cpu className="w-5 h-5 text-emerald-600" />
              {t("hero.benefit3")}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="px-8 bg-slate-900 hover:bg-slate-800 text-white gap-2 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              {t("hero.cta1")}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-slate-300 text-slate-900 hover:bg-slate-50 bg-white transition-all"
            >
              {t("hero.cta2")}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-2xl">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="p-8 md:p-12 bg-white">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {/* Stat cards with animation */}
                {[
                  { label: "hero.stat1_label", value: "hero.stat1_value", icon: "🤖" },
                  { label: "hero.stat2_label", value: "hero.stat2_value", icon: "⚡" },
                  { label: "hero.stat3_label", value: "hero.stat3_value", icon: "✓" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="rounded-lg border border-slate-200 p-4 text-center hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-slate-900">{t(stat.value)}</div>
                    <div className="text-xs text-slate-500 mt-1">{t(stat.label)}</div>
                  </motion.div>
                ))}
              </div>

              {/* Workflow visualization */}
              <div className="space-y-3">
                {["Extract Data", "Validate Input", "Generate Response", "Store Result"].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-700">{step}</span>
                    {i < 3 && <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg blur-2xl -z-10 opacity-0"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </div>
    </section>
  )
}
