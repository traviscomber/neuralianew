"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Shield, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TrustSection() {
  const { language } = useLanguage()

  const trustItems = [
    {
      icon: Settings,
      title: "24/7 Support",
      description: language === "en" ? "Round-the-clock assistance" : "Asistencia las 24 horas",
    },
    {
      icon: Shield,
      title: language === "en" ? "Enterprise Security" : "Seguridad Empresarial",
      description: language === "en" ? "ISO certified security protocols" : "Protocolos de seguridad certificados ISO",
    },
    {
      icon: Wrench,
      title: language === "en" ? ">100 Projects Deployed" : ">100 Proyectos Desplegados",
      description: language === "en" ? "Proven track record" : "Historial comprobado",
    },
  ]

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-gray-700 mb-8">
            {language === "en" ? "Why Trust?" : "¿Por qué Confiar?"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-300 rounded-2xl h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
