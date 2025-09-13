"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 lg:space-y-10"
        >
          {/* Badge */}
          <Badge className="bg-black text-white border-0 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full">
            {t("hero.badge")}
          </Badge>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-gray-800 leading-[1.1] tracking-tight">
            {t("hero.title")}
            <br />
            <span className="font-bold text-black">{t("hero.titleBold")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed px-4">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-6 lg:pt-8">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              {t("hero.cta.primary")}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 text-white border-gray-800 hover:border-gray-900 font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://wa.me/56940946660", "_blank")}
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              {t("hero.cta.secondary")}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-gray-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
