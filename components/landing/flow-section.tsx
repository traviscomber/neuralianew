"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Zap, Brain, Cog, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FlowSection() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: MessageCircle,
      title: t("flow.step1.title"),
      description: t("flow.step1.desc"),
      duration: t("flow.step1.duration"),
    },
    {
      icon: Brain,
      title: t("flow.step2.title"),
      description: t("flow.step2.desc"),
      duration: t("flow.step2.duration"),
    },
    {
      icon: Cog,
      title: t("flow.step3.title"),
      description: t("flow.step3.desc"),
      duration: t("flow.step3.duration"),
    },
    {
      icon: Zap,
      title: t("flow.step4.title"),
      description: t("flow.step4.desc"),
      duration: t("flow.step4.duration"),
    },
  ]

  return (
    <section id="flow" className="bg-white py-20 sm:py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <Badge className="bg-gray-100 text-gray-700 border-0 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full mb-6 lg:mb-8 font-medium">
            {t("flow.badge")}
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            {t("flow.title")}
            <br />
            <span className="font-bold text-black">{t("flow.titleBold")}</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {t("flow.subtitle")}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 lg:mb-8 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 lg:mb-6">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 lg:mb-6">{step.description}</p>

                  {/* Duration */}
                  <Badge className="bg-white text-gray-700 border border-gray-300 text-xs sm:text-sm font-medium">
                    {step.duration}
                  </Badge>
                </CardContent>
              </Card>

              {/* Arrow connector (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto">
            <CheckCircle className="w-16 h-16 lg:w-20 lg:h-20 text-green-500 mx-auto mb-6 lg:mb-8" />

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 mb-4 lg:mb-6">
              {t("flow.cta.title")}
            </h3>

            <p className="text-lg sm:text-xl text-gray-600 font-light mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("flow.cta.subtitle")}
            </p>

            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-medium px-10 py-5 rounded-full text-lg sm:text-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://wa.me/56940946660", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              {t("flow.cta.button")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
