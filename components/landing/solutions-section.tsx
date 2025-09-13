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
      backDescription:
        language === "en"
          ? "Advanced AI algorithms analyze and extract meaningful data from multiple sources, transforming raw information into actionable business intelligence."
          : "Algoritmos de IA avanzados analizan y extraen datos significativos de múltiples fuentes, transformando información cruda en inteligencia empresarial procesable.",
      icon: Monitor,
    },
    {
      title: language === "en" ? "Customer\nSupport" : "Soporte\nal Cliente",
      description: language === "en" ? "Automated\ninteractions" : "Interacciones\nautomatizadas",
      backDescription:
        language === "en"
          ? "Intelligent chatbots and virtual assistants provide 24/7 customer support, handling inquiries, resolving issues, and improving customer satisfaction."
          : "Chatbots inteligentes y asistentes virtuales brindan soporte al cliente 24/7, manejando consultas, resolviendo problemas y mejorando la satisfacción del cliente.",
      icon: Users,
    },
    {
      title: language === "en" ? "Output\nAutomation" : "Automatización\nde Salida",
      description: language === "en" ? "Report generation" : "Generación de reportes",
      backDescription:
        language === "en"
          ? "Streamline your workflow with automated report generation, document creation, and data visualization that saves time and reduces errors."
          : "Optimiza tu flujo de trabajo con generación automatizada de reportes, creación de documentos y visualización de datos que ahorra tiempo y reduce errores.",
      icon: Cloud,
    },
    {
      title: language === "en" ? "Knowledge\nManagement" : "Gestión del\nConocimiento",
      description: language === "en" ? "Organize\ninformation" : "Organizar\ninformación",
      backDescription:
        language === "en"
          ? "Centralize and organize your company's knowledge base with AI-powered categorization, search, and retrieval systems for instant access to information."
          : "Centraliza y organiza la base de conocimientos de tu empresa con categorización, búsqueda y sistemas de recuperación impulsados por IA para acceso instantáneo a la información.",
      icon: FolderOpen,
    },
    {
      title: language === "en" ? "Scheduling" : "Programación",
      description: language === "en" ? "Optimize your\ncalendars" : "Optimizar tus\ncalendarios",
      backDescription:
        language === "en"
          ? "Smart scheduling systems that automatically coordinate meetings, appointments, and resources while considering preferences, availability, and priorities."
          : "Sistemas de programación inteligentes que coordinan automáticamente reuniones, citas y recursos considerando preferencias, disponibilidad y prioridades.",
      icon: Calendar,
    },
    {
      title: language === "en" ? "Output" : "Salida",
      description: language === "en" ? "Streamline your\nprocesses" : "Optimizar tus\nprocesos",
      backDescription:
        language === "en"
          ? "Comprehensive output management that handles data processing, formatting, distribution, and delivery across multiple channels and formats."
          : "Gestión integral de salida que maneja procesamiento de datos, formateo, distribución y entrega a través de múltiples canales y formatos.",
      icon: Network,
    },
  ]

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light text-gray-800 mb-4">{language === "en" ? "Solutions" : "Soluciones"}</h2>
          <p className="text-xl text-gray-600 font-light">
            {language === "en" ? "AI-Powered Solutions" : "Soluciones Impulsadas por IA"}
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
              className="group perspective-1000"
            >
              <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front Card */}
                <Card className="absolute inset-0 w-full h-full bg-white border-0 rounded-2xl shadow-lg backface-hidden group-hover:bg-black group-hover:text-white transition-colors duration-700">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                    {/* Title */}
                    <h3 className="text-xl font-light text-gray-700 group-hover:text-white mb-8 whitespace-pre-line leading-tight transition-colors duration-700">
                      {solution.title}
                    </h3>

                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                      <solution.icon className="w-16 h-16 text-gray-600 group-hover:text-white stroke-1 transition-colors duration-700" />
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 group-hover:text-gray-300 font-light whitespace-pre-line leading-relaxed transition-colors duration-700">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Back Card */}
                <Card className="absolute inset-0 w-full h-full bg-gray-900 text-white border-0 rounded-2xl shadow-lg backface-hidden rotate-y-180">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <solution.icon className="w-12 h-12 text-white stroke-1" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-medium text-white mb-6 whitespace-pre-line leading-tight">
                      {solution.title}
                    </h3>

                    {/* Detailed Description */}
                    <p className="text-gray-300 font-light text-sm leading-relaxed">{solution.backDescription}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}
