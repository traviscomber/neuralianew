"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, User, Bot, Clock, CheckCircle } from "lucide-react"

export default function UseCasesSection() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const useCases = [
    {
      id: "parrotfy",
      title: "ParrotfyIA - Aprendizaje de Idiomas",
      description: "Agente especializado en enseñanza de inglés conversacional",
      industry: "Educación",
      metrics: {
        satisfaction: "98%",
        responseTime: "1.2s",
        accuracy: "96%",
      },
      demo: [
        { type: "user", message: "Hi! I want to practice my English conversation skills" },
        {
          type: "bot",
          message:
            "Hello! I'm excited to help you practice English! 🎉 What's your current level, and what would you like to focus on today?",
        },
        { type: "user", message: "I'm intermediate level. I want to practice job interview conversations" },
        {
          type: "bot",
          message:
            "Perfect! Job interviews are great practice. Let's start with a common question: 'Tell me about yourself.' Take your time and answer as if I'm the interviewer. I'll provide feedback on your grammar and pronunciation! 💼",
        },
      ],
    },
    {
      id: "ecosuelo",
      title: "EcosueloLab - Análisis Agrícola",
      description: "IA especializada en análisis de suelos y recomendaciones agrícolas",
      industry: "Agricultura",
      metrics: {
        satisfaction: "94%",
        responseTime: "2.1s",
        accuracy: "92%",
      },
      demo: [
        { type: "user", message: "Necesito analizar el pH de mi suelo para cultivo de tomates" },
        {
          type: "bot",
          message:
            "¡Perfecto! Para el cultivo de tomates necesitamos un pH entre 6.0-6.8. 🍅 ¿Podrías contarme qué tipo de suelo tienes y en qué región te encuentras?",
        },
        { type: "user", message: "Tengo suelo arcilloso en la región de Valparaíso, Chile" },
        {
          type: "bot",
          message:
            "Excelente información. Los suelos arcillosos de Valparaíso suelen tener pH alcalino. Te recomiendo: 1) Aplicar azufre elemental (150g/m²) 2) Incorporar compost orgánico 3) Realizar análisis cada 3 meses. ¿Quieres que te envíe el protocolo completo? 📊",
        },
      ],
    },
    {
      id: "despega",
      title: "Despega Tu Carrera - Coaching Profesional",
      description: "Agente de coaching personalizado para desarrollo profesional",
      industry: "Recursos Humanos",
      metrics: {
        satisfaction: "97%",
        responseTime: "1.8s",
        accuracy: "95%",
      },
      demo: [
        { type: "user", message: "Me siento estancado en mi carrera profesional, no sé cómo avanzar" },
        {
          type: "bot",
          message:
            "Entiendo perfectamente esa sensación. Es más común de lo que piensas y tiene solución. 💪 Cuéntame: ¿en qué área trabajas actualmente y cuáles son tus principales fortalezas?",
        },
        { type: "user", message: "Trabajo en marketing digital, soy bueno con redes sociales pero me falta liderazgo" },
        {
          type: "bot",
          message:
            "¡Excelente autoconocimiento! El marketing digital + liderazgo es una combinación poderosa. Te sugiero: 1) Buscar proyectos donde puedas liderar campañas 2) Tomar un curso de gestión de equipos 3) Solicitar mentoría interna. ¿Cuál de estas opciones resuena más contigo? 🚀",
        },
      ],
    },
    {
      id: "crm",
      title: "CRM Inteligente - Gestión de Clientes",
      description: "Agente que gestiona leads, seguimientos y cierre de ventas",
      industry: "Ventas",
      metrics: {
        satisfaction: "96%",
        responseTime: "1.5s",
        accuracy: "94%",
      },
      demo: [
        { type: "user", message: "Tengo un lead interesado en nuestro software, ¿cómo hago seguimiento?" },
        {
          type: "bot",
          message:
            "¡Excelente! Un lead caliente necesita seguimiento estratégico. 🎯 Primero, cuéntame: ¿cuál fue su nivel de interés del 1-10 y qué objeciones mencionó?",
        },
        { type: "user", message: "Interés nivel 8, pero le preocupa el precio y la implementación" },
        {
          type: "bot",
          message:
            "Perfecto, lead muy calificado. Para precio: enfócate en ROI y casos de éxito similares. Para implementación: ofrece demo personalizada y plan de onboarding. Te programo seguimiento en 48hrs y preparo propuesta con descuento por decisión rápida. ¿Procedo? 💼",
        },
      ],
    },
  ]

  const startDemo = (caseId: string) => {
    setActiveDemo(caseId)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 border-green-500/30">
            Casos de Éxito
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Agentes especializados en acción
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestros agentes de IA transforman diferentes industrias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8 border-b border-border">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {useCase.industry}
                    </Badge>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                        {useCase.metrics.satisfaction}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-blue-500" />
                        {useCase.metrics.responseTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>

                  <Button onClick={() => startDemo(useCase.id)} className="w-full bg-primary hover:bg-primary/90">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ver Demo Interactivo
                  </Button>
                </div>

                {/* Chat Demo */}
                <div className="bg-muted/50 p-6 h-80 overflow-y-auto">
                  {activeDemo === useCase.id ? (
                    <div className="space-y-4">
                      {useCase.demo.map((message, msgIndex) => (
                        <div
                          key={msgIndex}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.type === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-background text-foreground border"
                            }`}
                          >
                            <div className="flex items-center mb-1">
                              {message.type === "user" ? (
                                <User className="w-4 h-4 mr-2" />
                              ) : (
                                <Bot className="w-4 h-4 mr-2" />
                              )}
                              <span className="text-xs font-medium">
                                {message.type === "user" ? "Usuario" : "Agente IA"}
                              </span>
                            </div>
                            <p className="text-sm">{message.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      <div className="text-center">
                        <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Haz clic en "Ver Demo Interactivo" para comenzar</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
