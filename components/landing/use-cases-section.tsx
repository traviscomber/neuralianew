"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageSquare,
  TrendingUp,
  Users,
  ShoppingCart,
  BookOpen,
  Zap,
  CheckCircle,
  ArrowRight,
  Bot,
  Globe,
  Clock,
} from "lucide-react"

export function UseCasesSection() {
  const [activeCase, setActiveCase] = useState("parrotfy")

  const useCases = [
    {
      id: "parrotfy",
      title: "ParrotfyIA - Aprendizaje de Idiomas",
      category: "Educación",
      description: "Plataforma de aprendizaje de inglés con IA conversacional",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      metrics: {
        users: "10,000+",
        retention: "85%",
        satisfaction: "4.8/5",
        growth: "+300%",
      },
      features: [
        "Conversaciones naturales en inglés",
        "Corrección de pronunciación en tiempo real",
        "Planes de estudio personalizados",
        "Integración con WhatsApp Business",
        "Analytics de progreso detallados",
      ],
      results: [
        "300% aumento en engagement",
        "85% retención de usuarios",
        "Reducción 60% en costos de soporte",
        "Escalabilidad a 10,000+ usuarios",
      ],
    },
    {
      id: "ecosuelo",
      title: "EcosueloLab - Coaching Profesional",
      category: "Recursos Humanos",
      description: "Agente de coaching profesional y desarrollo de carrera",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      metrics: {
        users: "5,000+",
        retention: "92%",
        satisfaction: "4.9/5",
        growth: "+250%",
      },
      features: [
        "Evaluación de competencias profesionales",
        "Planes de desarrollo personalizados",
        "Matching con oportunidades laborales",
        "Simulación de entrevistas",
        "Seguimiento de progreso profesional",
      ],
      results: [
        "92% satisfacción en coaching",
        "250% aumento en colocaciones",
        "Reducción 70% en tiempo de proceso",
        "ROI 400% para empresas cliente",
      ],
    },
    {
      id: "crm",
      title: "CRM Inteligente - Ventas",
      category: "Ventas y Marketing",
      description: "Automatización completa del proceso de ventas",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      metrics: {
        users: "2,500+",
        retention: "88%",
        satisfaction: "4.7/5",
        growth: "+180%",
      },
      features: [
        "Calificación automática de leads",
        "Seguimiento inteligente de prospectos",
        "Integración con WhatsApp y email",
        "Predicción de probabilidad de cierre",
        "Reportes automáticos de ventas",
      ],
      results: [
        "180% aumento en conversiones",
        "Reducción 50% en ciclo de ventas",
        "88% precisión en predicciones",
        "ROI 320% en primer año",
      ],
    },
    {
      id: "ecommerce",
      title: "E-commerce Assistant",
      category: "Comercio Electrónico",
      description: "Asistente de ventas y soporte para tiendas online",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
      metrics: {
        users: "15,000+",
        retention: "79%",
        satisfaction: "4.6/5",
        growth: "+220%",
      },
      features: [
        "Recomendaciones personalizadas",
        "Soporte 24/7 automatizado",
        "Gestión de devoluciones",
        "Upselling y cross-selling inteligente",
        "Integración con inventario",
      ],
      results: [
        "220% aumento en ventas",
        "Reducción 65% en abandono de carrito",
        "79% satisfacción del cliente",
        "ROI 280% en 6 meses",
      ],
    },
  ]

  const currentCase = useCases.find((c) => c.id === activeCase) || useCases[0]
  const Icon = currentCase.icon

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <Zap className="w-4 h-4 mr-2" />
            Casos de Éxito Reales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transformando Negocios con{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              IA Conversacional
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Descubre cómo nuestros agentes inteligentes han revolucionado diferentes industrias, generando resultados
            medibles y ROI comprobado.
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="mb-12">
          <Tabs value={activeCase} onValueChange={setActiveCase} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-800/50 border border-slate-700/50">
              {useCases.map((useCase) => {
                const TabIcon = useCase.icon
                return (
                  <TabsTrigger
                    key={useCase.id}
                    value={useCase.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    <TabIcon className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">{useCase.category}</span>
                    <span className="sm:hidden">{useCase.title.split(" ")[0]}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Case Study Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Case Details */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${currentCase.color} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">{currentCase.title}</CardTitle>
                    <Badge className="mt-1 bg-slate-700/50 text-slate-300">{currentCase.category}</Badge>
                  </div>
                </div>
                <p className="text-slate-300 text-lg">{currentCase.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-white">{currentCase.metrics.users}</div>
                    <div className="text-sm text-slate-400">Usuarios Activos</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{currentCase.metrics.retention}</div>
                    <div className="text-sm text-slate-400">Retención</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{currentCase.metrics.satisfaction}</div>
                    <div className="text-sm text-slate-400">Satisfacción</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{currentCase.metrics.growth}</div>
                    <div className="text-sm text-slate-400">Crecimiento</div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Características Principales</h4>
                  <div className="space-y-2">
                    {currentCase.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                onClick={() => window.open("https://wa.me/56940946660", "_blank")}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Solicitar Demo Personalizada
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent">
                <Globe className="w-4 h-4 mr-2" />
                Ver Caso Completo
              </Button>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  Resultados Obtenidos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentCase.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-300">{result}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Implementation Timeline */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  Proceso de Implementación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <div className="text-white font-medium">Análisis y Diseño</div>
                      <div className="text-sm text-slate-400">Semana 1-2</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <div className="text-white font-medium">Desarrollo y Entrenamiento</div>
                      <div className="text-sm text-slate-400">Semana 3-6</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <div className="text-white font-medium">Pruebas y Optimización</div>
                      <div className="text-sm text-slate-400">Semana 7-8</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 font-semibold text-sm">
                      4
                    </div>
                    <div>
                      <div className="text-white font-medium">Lanzamiento y Soporte</div>
                      <div className="text-sm text-slate-400">Semana 9+</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-purple-400" />
                  Stack Tecnológico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["OpenAI GPT-4", "WhatsApp Business API", "Next.js", "Supabase", "Vercel", "TypeScript"].map(
                    (tech) => (
                      <Badge key={tech} className="bg-slate-700/50 text-slate-300 hover:bg-slate-700">
                        {tech}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
