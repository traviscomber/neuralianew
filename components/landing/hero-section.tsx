"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, MessageSquare, ArrowRight, Play, GraduationCap, TrendingUp, Globe, Sparkles } from "lucide-react"

const heroExamples = [
  {
    title: "EcosueloLab",
    subtitle: "Coaching de Carrera",
    description: "IA que entiende tus metas profesionales y te guía hacia el éxito",
    color: "from-green-500 to-emerald-600",
    icon: GraduationCap,
    demo: "Descubre tu potencial profesional",
  },
  {
    title: "Despega Tu Carrera",
    subtitle: "Impulso Profesional",
    description: "Mentoring personalizado que acelera tu crecimiento profesional",
    color: "from-blue-500 to-cyan-600",
    icon: TrendingUp,
    demo: "Acelera tu crecimiento",
  },
  {
    title: "ParrotfyIA",
    subtitle: "Dominio de Idiomas",
    description: "Aprende idiomas conversando naturalmente con IA nativa",
    color: "from-purple-500 to-violet-600",
    icon: Globe,
    demo: "Habla con fluidez natural",
  },
]

export function HeroSection() {
  const [currentExample, setCurrentExample] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % heroExamples.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const currentHero = heroExamples[currentExample]

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div
        className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200 text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolución en IA Conversacional
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                Vibe Coding
              </span>
              <br />
              <span className="text-gray-900">IA que Conecta</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Creamos <strong>portales neuronales</strong> que no solo procesan información, sino que entienden
              emociones, personalidad y contexto para generar conexiones auténticas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg"
              >
                <Brain className="w-5 h-5 mr-2" />
                Crear Mi Portal Neuronal
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold px-8 py-4 text-lg bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demo en Vivo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-purple-100">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm text-gray-600 font-medium">Usuarios Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  94%
                </div>
                <div className="text-sm text-gray-600 font-medium">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                  3
                </div>
                <div className="text-sm text-gray-600 font-medium">Portales Activos</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dynamic Hero Examples */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExample}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-2 border-white/50 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${currentHero.color} p-6 text-white`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <currentHero.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{currentHero.title}</h3>
                          <p className="text-white/80">{currentHero.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-white/90 leading-relaxed">{currentHero.description}</p>
                    </div>

                    {/* Demo Content */}
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full bg-gradient-to-r ${currentHero.color} flex items-center justify-center`}
                          >
                            <MessageSquare className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-100 rounded-2xl px-4 py-3">
                              <p className="text-gray-800 font-medium">{currentHero.demo}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <div className="max-w-[80%]">
                            <div className={`bg-gradient-to-r ${currentHero.color} text-white rounded-2xl px-4 py-3`}>
                              <p className="font-medium">
                                {currentExample === 0 &&
                                  "¡Perfecto! He analizado tu perfil y veo un potencial increíble. ¿Te gustaría que creemos un plan personalizado para impulsar tu carrera? 🚀"}
                                {currentExample === 1 &&
                                  "¡Excelente decisión! Basándome en tus objetivos, he diseñado una estrategia de 90 días que maximizará tu crecimiento profesional. ¿Empezamos? 💪"}
                                {currentExample === 2 &&
                                  "Amazing! I can see you're ready to take your English to the next level. Let's start with a fun conversation about your goals! 🌟"}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center pt-4">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Portal neuronal activo
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {heroExamples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentExample(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentExample ? `bg-gradient-to-r ${heroExamples[index].color}` : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
