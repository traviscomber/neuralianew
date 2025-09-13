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
      title: language === "en" ? "24/7 Support" : "Soporte 24/7",
    },
    {
      icon: Shield,
      title: language === "en" ? "Enterprise Security" : "Seguridad Empresarial",
      subtitle: "ISO",
    },
    {
      icon: Wrench,
      title: language === "en" ? ">100 Projects Deployed" : ">100 Proyectos Desplegados",
    },
  ]

  const techLogos = [
    { name: "Redis", color: "text-red-600" },
    { name: "Node.js", color: "text-green-600" },
    { name: "API", color: "text-pink-500" },
    { name: "Next.js", color: "text-black" },
    { name: "Python", color: "text-blue-600" },
    { name: "Deploy", color: "text-green-500" },
  ]

  return (
    <section id="trust" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Stack Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {techLogos.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <span className={`text-2xl font-bold ${tech.color}`}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Trust Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-gray-700 mb-8">
            {language === "en" ? "Why Trust?" : "¿Por Qué Confiar?"}
          </h2>
        </motion.div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-200 rounded-2xl h-full">
                <CardContent className="p-12 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-8">
                    {item.subtitle === "ISO" ? (
                      <div className="w-full h-full rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <span className="text-blue-500 font-bold text-sm">ISO</span>
                      </div>
                    ) : (
                      <item.icon className="w-full h-full text-gray-400" strokeWidth={1} />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-light text-gray-600">{item.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
