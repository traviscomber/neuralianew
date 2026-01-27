"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "retail-automation",
      title: "Automatización de Cadena Retail",
      client: "Cadena Retail Principal",
      industry: "Retail",
      challenge:
        "Gestión manual de inventario causando 40% de desabastecimiento y $2.3M en pérdidas anuales",
      solution:
        "Sistema de predicción de inventario con IA y reordenamiento automatizado",
      results: [
        {
          metric: "85%",
          label: "Reducción en desabastecimiento",
        },
        {
          metric: "$2.3M",
          label: "Ahorro anual",
        },
        {
          metric: "24/7",
          label: "Monitoreo automatizado",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Retail+Automation",
    },
    {
      id: "banking-ai",
      title: "IA de Servicio al Cliente Bancario",
      client: "Banco Regional",
      industry: "Servicios Financieros",
      challenge:
        "Altos costos de call center y 60% de consultas requiriendo intervención humana",
      solution:
        "Asistente de IA multilingüe con conocimiento bancario y procesamiento seguro de transacciones",
      results: [
        {
          metric: "92%",
          label: "Tasa de resolución de consultas",
        },
        {
          metric: "70%",
          label: "Reducción de costos",
        },
        {
          metric: "24/7",
          label: "Disponibilidad del servicio",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Banking+AI",
    },
    {
      id: "manufacturing-optimization",
      title: "Optimización de Procesos de Manufactura",
      client: "Manufacturero Industrial",
      industry: "Manufactura",
      challenge:
        "Ineficiencias de producción y 22% de tasa de defectos causando problemas de calidad",
      solution:
        "Control de calidad impulsado por IA y sistema de mantenimiento predictivo",
      results: [
        {
          metric: "35%",
          label: "Aumento de eficiencia",
        },
        {
          metric: "78%",
          label: "Reducción de defectos",
        },
        {
          metric: "$1.8M",
          label: "Ahorro anual",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Manufacturing+AI",
    },
    {
      id: "healthcare-diagnostics",
      title: "Diagnósticos de IA en Salud",
      client: "Centro Médico",
      industry: "Salud",
      challenge:
        "Retrasos en diagnósticos y 15% de tasa de diagnósticos erróneos afectando resultados de pacientes",
      solution:
        "Asistente de diagnóstico con IA y análisis de imágenes médicas",
      results: [
        {
          metric: "94%",
          label: "Precisión diagnóstica",
        },
        {
          metric: "60%",
          label: "Diagnóstico más rápido",
        },
        {
          metric: "500+",
          label: "Pacientes ayudados diariamente",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Healthcare+AI",
    },
    {
      id: "logistics-optimization",
      title: "Optimización de Rutas Logísticas",
      client: "Empresa Logística",
      industry: "Logística",
      challenge:
        "Enrutamiento ineficiente causando 30% más costos de combustible y retrasos en entregas",
      solution:
        "Optimización de rutas con IA usando datos de tráfico y clima en tiempo real",
      results: [
        {
          metric: "42%",
          label: "Reducción de costos de combustible",
        },
        {
          metric: "25%",
          label: "Entregas más rápidas",
        },
        {
          metric: "98%",
          label: "Tasa de entrega a tiempo",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Logistics+AI",
    },
    {
      id: "education-platform",
      title: "Plataforma de Aprendizaje Personalizado",
      client: "Institución Educativa",
      industry: "Educación",
      challenge:
        "Enfoque único para todos resultando en 40% de desvinculación estudiantil",
      solution:
        "Rutas de aprendizaje personalizadas con IA y entrega de contenido adaptativo",
      results: [
        {
          metric: "67%",
          label: "Mejora en calificaciones",
        },
        {
          metric: "85%",
          label: "Participación estudiantil",
        },
        {
          metric: "50%",
          label: "Aprendizaje más rápido",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Education+AI",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="bg-white/10 text-white border-white/20 mb-6">
                Historias de Éxito
              </Badge>

              <h1 className="text-6xl font-light text-white mb-6">
                Casos de Estudio
                <br />
                <span className="font-bold">Resultados Reales</span>
              </h1>

              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                Descubre cómo nuestras soluciones de IA han transformado negocios en diversas industrias, entregando resultados medibles e impulsando el crecimiento.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                        <img
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {study.industry}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {study.client}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-light text-gray-900 mb-3">{study.title}</h3>
                        <p className="text-gray-600 font-light text-sm mb-4 line-clamp-2">{study.challenge}</p>

                        {/* Results */}
                        <div className="grid grid-cols-3 gap-2 mb-6">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-lg font-light text-black">{result.metric}</div>
                              <div className="text-xs text-gray-600 font-light">{result.label}</div>
                            </div>
                          ))}
                        </div>

                        <Link href={`/case-studies/${study.id}`}>
                          <Button
                            variant="outline"
                            className="w-full group-hover:bg-black group-hover:text-white transition-colors bg-transparent"
                          >
                            Leer Caso Completo
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
