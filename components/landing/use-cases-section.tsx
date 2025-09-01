"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sprout,
  GraduationCap,
  Users,
  ExternalLink,
  BarChart3,
  MessageSquare,
  Zap,
  Globe,
  Database,
  TrendingUp,
  CheckCircle,
} from "lucide-react"

const useCases = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    subtitle: "Revolución Agrícola con IA",
    icon: Sprout,
    category: "AgTech + IA",
    description:
      "Plataforma completa que combina análisis de suelo con IA conversacional vía WhatsApp. Los agricultores obtienen recomendaciones personalizadas en tiempo real.",
    challenge:
      "Los agricultores necesitaban análisis de suelo rápidos y recomendaciones expertas accesibles desde cualquier lugar.",
    solution:
      "Desarrollamos una API inteligente que procesa datos de sensores y un chatbot de WhatsApp que interpreta resultados y da recomendaciones personalizadas.",
    results: [
      "85% reducción en tiempo de análisis",
      "300+ agricultores usando la plataforma",
      "40% mejora en rendimiento de cultivos",
      "Disponible 24/7 vía WhatsApp",
    ],
    technologies: ["OpenAI GPT-4o", "WhatsApp Business API", "Sensores IoT", "Python Analytics", "React Dashboard"],
    metrics: {
      users: "300+",
      efficiency: "85%",
      improvement: "40%",
      availability: "24/7",
    },
    color: "from-green-500 to-emerald-600",
    link: "ecosuelolab.com",
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    subtitle: "Educación Inteligente Personalizada",
    icon: GraduationCap,
    category: "EdTech + IA",
    description:
      "Plataforma de aprendizaje de idiomas con IA conversacional que se adapta al nivel y estilo de cada estudiante. Conversaciones naturales que enseñan de verdad.",
    challenge:
      "Los métodos tradicionales de enseñanza de idiomas son rígidos y no se adaptan al ritmo individual de cada estudiante.",
    solution:
      "Creamos una IA conversacional que mantiene diálogos naturales, corrige errores en tiempo real y personaliza el contenido según el progreso del estudiante.",
    results: [
      "92% de estudiantes mejoran fluidez",
      "500+ horas de conversación diaria",
      "Personalización automática por nivel",
      "Corrección inteligente en tiempo real",
    ],
    technologies: ["OpenAI GPT-4o", "Speech Recognition", "Next.js", "Supabase", "Real-time Analytics"],
    metrics: {
      users: "1,200+",
      fluency: "92%",
      conversations: "500h/día",
      retention: "89%",
    },
    color: "from-blue-500 to-purple-600",
    link: "parrotfy.com",
  },
  {
    id: "crm",
    title: "CRM Inteligente",
    subtitle: "Ventas Automatizadas que Convierten",
    icon: Users,
    category: "Sales + IA",
    description:
      "Sistema CRM con IA que califica leads automáticamente, programa seguimientos inteligentes y predice probabilidades de cierre. Ventas que funcionan solas.",
    challenge:
      "Los equipos de ventas perdían tiempo en leads fríos y no tenían seguimiento sistemático de oportunidades calientes.",
    solution:
      "Desarrollamos un CRM con IA que analiza comportamiento, califica leads automáticamente y ejecuta secuencias de seguimiento personalizadas.",
    results: [
      "200% aumento en conversión de leads",
      "75% reducción en tiempo de calificación",
      "Seguimiento automático 100% efectivo",
      "Predicción de cierre con 90% precisión",
    ],
    technologies: ["OpenAI GPT-4o", "Predictive Analytics", "WhatsApp Integration", "Email Automation", "Custom API"],
    metrics: {
      conversion: "200%",
      efficiency: "75%",
      accuracy: "90%",
      automation: "100%",
    },
    color: "from-orange-500 to-red-600",
    link: "Proyecto confidencial",
  },
]

export function UseCasesSection() {
  const [activeCase, setActiveCase] = useState("ecosuelo")
  const currentCase = useCases.find((useCase) => useCase.id === activeCase) || useCases[0]

  return (
    <section id="casos-de-uso" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <BarChart3 className="w-4 h-4 mr-2" />
            Casos de Éxito Reales
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Proyectos que</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              transformaron industrias
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No son demos ni prototipos. Son plataformas reales, funcionando en producción,
            <strong className="text-foreground"> generando resultados medibles todos los días.</strong>
          </p>
        </motion.div>

        <Tabs value={activeCase} onValueChange={setActiveCase} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-muted/50 p-1 rounded-xl">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.id}
                value={useCase.id}
                className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg py-3"
              >
                <useCase.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{useCase.title}</span>
                <span className="sm:hidden">{useCase.icon.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center`}
                          >
                            <useCase.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Badge className="mb-2 bg-primary/10 text-primary">{useCase.category}</Badge>
                            <h3 className="text-3xl font-bold">{useCase.title}</h3>
                            <p className="text-lg text-muted-foreground">{useCase.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{useCase.description}</p>

                        {useCase.link !== "Proyecto confidencial" && (
                          <Button variant="outline" className="mb-6 bg-transparent">
                            <Globe className="w-4 h-4 mr-2" />
                            Visitar {useCase.link}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        )}
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(useCase.metrics).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="text-center p-4 rounded-lg bg-muted/50"
                          >
                            <div
                              className={`text-2xl font-bold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}
                            >
                              {value}
                            </div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Tecnologías utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {useCase.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Card className="border-2 border-primary/20">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-primary" />
                            El Desafío
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{useCase.challenge}</p>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-green-500/20">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-green-600" />
                            Nuestra Solución
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{useCase.solution}</p>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-blue-500/20">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            Resultados Medibles
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {useCase.results.map((result, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-foreground font-medium">{result}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                ¿Tu proyecto será el próximo caso de éxito?
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada proyecto que desarrollamos está diseñado para generar resultados medibles y transformar industrias.
              Tu idea puede ser la próxima revolución.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-6"
            >
              <Database className="w-5 h-5 mr-2" />
              Desarrollar Mi Plataforma
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
