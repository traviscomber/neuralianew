"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Network, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function SolutionsSection() {
  const { language } = useLanguage()

  const solutions = [
    {
      icon: User,
      title: language === "en" ? "AGENTS and AUTOMATIONS" : "AGENTES y AUTOMATIZACIONES",
      description:
        language === "en"
          ? "Intelligent agents that automate your workflows"
          : "Agentes inteligentes que automatizan tus flujos de trabajo",
    },
    {
      icon: Network,
      title: language === "en" ? "MULTITASK AGENTIC SYSTEMS" : "SISTEMAS AGÉNTICOS MULTITAREA",
      description:
        language === "en"
          ? "Complex systems handling multiple tasks simultaneously"
          : "Sistemas complejos que manejan múltiples tareas simultáneamente",
    },
    {
      icon: Wrench,
      title: language === "en" ? "FULL STACK PROJECTS" : "PROYECTOS FULL STACK",
      description: language === "en" ? "Complete end-to-end solutions" : "Soluciones completas de extremo a extremo",
    },
  ]

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-optimized grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-300 rounded-2xl h-full hover:shadow-lg transition-shadow duration-300 touch-manipulation">
                <CardContent className="p-6 sm:p-8 text-center">
                  {/* Mobile-optimized icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <solution.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700" />
                  </div>

                  {/* Mobile-optimized text */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Mobile-optimized button */}
                  <Button
                    variant="outline"
                    className="border-2 border-gray-600 text-gray-900 hover:bg-gray-50 bg-white rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base min-h-[44px] w-full sm:w-auto"
                  >
                    {language === "en" ? "Read more" : "Leer más"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
