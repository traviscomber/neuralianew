"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Network, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: User,
      title: t("services.agents.title"),
      link: "#agents",
    },
    {
      icon: Network,
      title: t("services.multitask.title"),
      link: "#systems",
    },
    {
      icon: Wrench,
      title: t("services.fullstack.title"),
      link: "#projects",
    },
  ]

  return (
    <section id="services" className="bg-[#e8e8e8] py-20 sm:py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header - Proper typography hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <Badge className="bg-black text-white border-0 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full mb-6 lg:mb-8 font-medium">
            {t("services.badge")}
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            {t("services.title")}
            <br />
            <span className="font-bold">{t("services.titleBold")}</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Services Grid - Proper spacing and responsive design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-white border border-gray-300 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8 sm:p-10 lg:p-12 text-center flex flex-col h-full">
                  {/* Icon - Proper sizing and spacing */}
                  <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-8 lg:mb-10 flex items-center justify-center">
                    <service.icon className="w-14 h-14 lg:w-16 lg:h-16 text-gray-400 stroke-1" />
                  </div>

                  {/* Title - Proper typography */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-gray-600 mb-8 lg:mb-10 leading-relaxed whitespace-pre-line flex-grow">
                    {service.title}
                  </h3>

                  {/* Read more link - Proper spacing */}
                  <a
                    href={service.link}
                    className="text-gray-500 hover:text-gray-700 text-sm lg:text-base underline transition-colors duration-300 mt-auto"
                  >
                    {t("services.readmore")}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
