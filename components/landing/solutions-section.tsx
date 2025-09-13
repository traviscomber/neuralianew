"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, HeadphonesIcon, FileText, BookOpen, Calendar, Workflow } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function SolutionsSection() {
  const { t, language } = useLanguage()

  const solutions = [
    {
      icon: Database,
      title: "Data Extraction",
      description: "Extract actionable insights",
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "Automated interactions",
    },
    {
      icon: FileText,
      title: "Output Automation",
      description: "Report generation",
    },
    {
      icon: BookOpen,
      title: "Knowledge Management",
      description: "Organize information",
    },
    {
      icon: Calendar,
      title: "Scheduling",
      description: "Optimize your calendars",
    },
    {
      icon: Workflow,
      title: "Output",
      description: "Streamline your processes",
    },
  ]

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimalist Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            {language === "en" ? "AI Solutions" : "Soluciones IA"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-4">{language === "en" ? "Solutions" : "Soluciones"}</h2>
          <p className="text-2xl font-medium text-gray-600">
            {language === "en" ? "Popular AI Agents" : "Agentes de IA Populares"}
          </p>
        </motion.div>

        {/* Minimalist Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full rounded-2xl">
                <CardContent className="p-8 text-center">
                  {/* Minimalist Icon */}
                  <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gray-100 group-hover:bg-black transition-colors duration-300 p-4">
                    <solution.icon className="w-full h-full text-black group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Clean Typography */}
                  <h3 className="text-xl font-bold text-black mb-4">{solution.title}</h3>

                  <p className="text-gray-600 leading-relaxed font-light">{solution.description}</p>
                </CardContent>

                {/* Subtle Bottom Accent */}
                <div className="h-1 bg-gray-200 group-hover:bg-black transition-colors duration-300 rounded-b-2xl"></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
