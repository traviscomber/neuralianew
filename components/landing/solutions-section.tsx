"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { Monitor, Users, Cloud, FolderOpen, Calendar, Network } from "lucide-react"

export function SolutionsSection() {
  const { language } = useLanguage()

  const solutions = [
    {
      title: language === "en" ? "Data\nExtraction" : "Extracción\nde Datos",
      description: language === "en" ? "Extract\nactionable insights" : "Extraer\ninformación procesable",
      icon: Monitor,
    },
    {
      title: language === "en" ? "Customer\nSupport" : "Soporte\nal Cliente",
      description: language === "en" ? "Automated\ninteractions" : "Interacciones\nautomatizadas",
      icon: Users,
    },
    {
      title: language === "en" ? "Output\nAutomation" : "Automatización\nde Salida",
      description: language === "en" ? "Report generation" : "Generación de reportes",
      icon: Cloud,
    },
    {
      title: language === "en" ? "Knowledge\nManagement" : "Gestión del\nConocimiento",
      description: language === "en" ? "Organize\ninformation" : "Organizar\ninformación",
      icon: FolderOpen,
    },
    {
      title: language === "en" ? "Scheduling" : "Programación",
      description: language === "en" ? "Optimize your\ncalendars" : "Optimizar tus\ncalendarios",
      icon: Calendar,
    },
    {
      title: language === "en" ? "Output" : "Salida",
      description: language === "en" ? "Streamline your\nprocesses" : "Optimizar tus\nprocesos",
      icon: Network,
    },
  ]

  return (
    <section id="solutions" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light text-gray-700 mb-4">{language === "en" ? "Solutions" : "Soluciones"}</h2>
          <p className="text-xl text-blue-600 font-light">
            {language === "en" ? "Popular AI Agents" : "Agentes de IA Populares"}
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-0 rounded-2xl h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  {/* Title */}
                  <h3 className="text-xl font-light text-gray-600 mb-8 whitespace-pre-line leading-tight">
                    {solution.title}
                  </h3>

                  {/* Icon */}
                  <div className="mb-8 flex justify-center">
                    <solution.icon className="w-16 h-16 text-gray-600 stroke-1" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 font-light whitespace-pre-line leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
