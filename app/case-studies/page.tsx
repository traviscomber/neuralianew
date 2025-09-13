"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  const { language } = useLanguage()

  const caseStudies = [
    {
      id: "retail-automation",
      title: language === "en" ? "Retail Chain Automation" : "Automatización de Cadena Retail",
      client: language === "en" ? "Major Retail Chain" : "Cadena Retail Principal",
      industry: language === "en" ? "Retail" : "Retail",
      challenge:
        language === "en"
          ? "Manual inventory management causing 40% stockouts and $2.3M annual losses"
          : "Gestión manual de inventario causando 40% de desabastecimiento y $2.3M en pérdidas anuales",
      solution:
        language === "en"
          ? "AI-powered inventory prediction and automated reordering system"
          : "Sistema de predicción de inventario con IA y reordenamiento automatizado",
      results: [
        {
          metric: "85%",
          label: language === "en" ? "Reduction in stockouts" : "Reducción en desabastecimiento",
        },
        {
          metric: "$2.3M",
          label: language === "en" ? "Annual savings" : "Ahorro anual",
        },
        {
          metric: "24/7",
          label: language === "en" ? "Automated monitoring" : "Monitoreo automatizado",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Retail+Automation",
    },
    {
      id: "banking-ai",
      title: language === "en" ? "Banking Customer Service AI" : "IA de Servicio al Cliente Bancario",
      client: language === "en" ? "Regional Bank" : "Banco Regional",
      industry: language === "en" ? "Financial Services" : "Servicios Financieros",
      challenge:
        language === "en"
          ? "High call center costs and 60% of queries requiring human intervention"
          : "Altos costos de call center y 60% de consultas requiriendo intervención humana",
      solution:
        language === "en"
          ? "Multilingual AI assistant with banking knowledge and secure transaction processing"
          : "Asistente de IA multilingüe con conocimiento bancario y procesamiento seguro de transacciones",
      results: [
        {
          metric: "92%",
          label: language === "en" ? "Query resolution rate" : "Tasa de resolución de consultas",
        },
        {
          metric: "70%",
          label: language === "en" ? "Cost reduction" : "Reducción de costos",
        },
        {
          metric: "24/7",
          label: language === "en" ? "Service availability" : "Disponibilidad del servicio",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Banking+AI",
    },
    {
      id: "manufacturing-optimization",
      title: language === "en" ? "Manufacturing Process Optimization" : "Optimización de Procesos de Manufactura",
      client: language === "en" ? "Industrial Manufacturer" : "Manufacturero Industrial",
      industry: language === "en" ? "Manufacturing" : "Manufactura",
      challenge:
        language === "en"
          ? "Production inefficiencies and 22% defect rate causing quality issues"
          : "Ineficiencias de producción y 22% de tasa de defectos causando problemas de calidad",
      solution:
        language === "en"
          ? "AI-driven quality control and predictive maintenance system"
          : "Control de calidad impulsado por IA y sistema de mantenimiento predictivo",
      results: [
        {
          metric: "35%",
          label: language === "en" ? "Efficiency increase" : "Aumento de eficiencia",
        },
        {
          metric: "78%",
          label: language === "en" ? "Defect reduction" : "Reducción de defectos",
        },
        {
          metric: "$1.8M",
          label: language === "en" ? "Annual savings" : "Ahorro anual",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Manufacturing+AI",
    },
    {
      id: "healthcare-diagnostics",
      title: language === "en" ? "Healthcare AI Diagnostics" : "Diagnósticos de IA en Salud",
      client: language === "en" ? "Medical Center" : "Centro Médico",
      industry: language === "en" ? "Healthcare" : "Salud",
      challenge:
        language === "en"
          ? "Diagnostic delays and 15% misdiagnosis rate affecting patient outcomes"
          : "Retrasos en diagnósticos y 15% de tasa de diagnósticos erróneos afectando resultados de pacientes",
      solution:
        language === "en"
          ? "AI-powered diagnostic assistant with medical imaging analysis"
          : "Asistente de diagnóstico con IA y análisis de imágenes médicas",
      results: [
        {
          metric: "94%",
          label: language === "en" ? "Diagnostic accuracy" : "Precisión diagnóstica",
        },
        {
          metric: "60%",
          label: language === "en" ? "Faster diagnosis" : "Diagnóstico más rápido",
        },
        {
          metric: "500+",
          label: language === "en" ? "Patients helped daily" : "Pacientes ayudados diariamente",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Healthcare+AI",
    },
    {
      id: "logistics-optimization",
      title: language === "en" ? "Logistics Route Optimization" : "Optimización de Rutas Logísticas",
      client: language === "en" ? "Logistics Company" : "Empresa Logística",
      industry: language === "en" ? "Logistics" : "Logística",
      challenge:
        language === "en"
          ? "Inefficient routing causing 30% higher fuel costs and delivery delays"
          : "Enrutamiento ineficiente causando 30% más costos de combustible y retrasos en entregas",
      solution:
        language === "en"
          ? "AI-powered route optimization with real-time traffic and weather data"
          : "Optimización de rutas con IA usando datos de tráfico y clima en tiempo real",
      results: [
        {
          metric: "42%",
          label: language === "en" ? "Fuel cost reduction" : "Reducción de costos de combustible",
        },
        {
          metric: "25%",
          label: language === "en" ? "Faster deliveries" : "Entregas más rápidas",
        },
        {
          metric: "98%",
          label: language === "en" ? "On-time delivery rate" : "Tasa de entrega a tiempo",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Logistics+AI",
    },
    {
      id: "education-platform",
      title: language === "en" ? "Personalized Learning Platform" : "Plataforma de Aprendizaje Personalizado",
      client: language === "en" ? "Educational Institution" : "Institución Educativa",
      industry: language === "en" ? "Education" : "Educación",
      challenge:
        language === "en"
          ? "One-size-fits-all approach resulting in 40% student disengagement"
          : "Enfoque único para todos resultando en 40% de desvinculación estudiantil",
      solution:
        language === "en"
          ? "AI-driven personalized learning paths with adaptive content delivery"
          : "Rutas de aprendizaje personalizadas con IA y entrega de contenido adaptativo",
      results: [
        {
          metric: "67%",
          label: language === "en" ? "Improvement in test scores" : "Mejora en calificaciones",
        },
        {
          metric: "85%",
          label: language === "en" ? "Student engagement" : "Participación estudiantil",
        },
        {
          metric: "50%",
          label: language === "en" ? "Faster learning" : "Aprendizaje más rápido",
        },
      ],
      image: "/placeholder.svg?height=300&width=500&text=Education+AI",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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
                {language === "en" ? "Success Stories" : "Historias de Éxito"}
              </Badge>

              <h1 className="text-6xl font-light text-white mb-6">
                {language === "en" ? "Case Studies" : "Casos de Estudio"}
                <br />
                <span className="font-bold">{language === "en" ? "Real Results" : "Resultados Reales"}</span>
              </h1>

              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                {language === "en"
                  ? "Discover how our AI solutions have transformed businesses across industries, delivering measurable results and driving growth."
                  : "Descubre cómo nuestras soluciones de IA han transformado negocios en diversas industrias, entregando resultados medibles e impulsando el crecimiento."}
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
                            {language === "en" ? "Read Full Case Study" : "Leer Caso Completo"}
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

        {/* Stats Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-light text-gray-900 mb-4">
                {language === "en" ? "Proven Impact" : "Impacto Comprobado"}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {language === "en"
                  ? "Aggregate results across all our AI implementations"
                  : "Resultados agregados de todas nuestras implementaciones de IA"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: TrendingUp,
                  metric: "73%",
                  label: language === "en" ? "Average Efficiency Gain" : "Ganancia Promedio de Eficiencia",
                },
                {
                  icon: DollarSign,
                  metric: "$12.4M",
                  label: language === "en" ? "Total Client Savings" : "Ahorro Total de Clientes",
                },
                {
                  icon: Users,
                  metric: "50+",
                  label: language === "en" ? "Successful Projects" : "Proyectos Exitosos",
                },
                {
                  icon: Clock,
                  metric: "99.9%",
                  label: language === "en" ? "System Uptime" : "Tiempo de Actividad del Sistema",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <div className="text-4xl font-light text-black mb-2">{stat.metric}</div>
                  <div className="text-gray-600 font-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-light text-white mb-6">
                {language === "en" ? "Ready to Join" : "Listo para Unirte"}
                <br />
                <span className="font-bold">
                  {language === "en" ? "Our Success Stories?" : "A Nuestras Historias de Éxito?"}
                </span>
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                {language === "en"
                  ? "Let's discuss how AI can transform your business and deliver measurable results"
                  : "Hablemos sobre cómo la IA puede transformar tu negocio y entregar resultados medibles"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  {language === "en" ? "Start Your Project" : "Iniciar Tu Proyecto"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  {language === "en" ? "Schedule Consultation" : "Agendar Consulta"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
