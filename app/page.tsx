"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Brain,
  MessageSquare,
  Zap,
  Shield,
  Users,
  BarChart3,
  Star,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  TrendingUp,
} from "lucide-react"

export default function LandingPage() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const demos = [
    {
      name: "EcosueloLab",
      description: "Análisis de suelos con IA",
      color: "from-green-500 to-emerald-600",
      messages: [
        { role: "user", content: "Hola, necesito analizar mi suelo para cultivo de tomates" },
        {
          role: "assistant",
          content:
            "¡Perfecto! Te ayudo con el análisis de suelo para tomates. ¿Podrías contarme sobre la ubicación de tu terreno?",
        },
        { role: "user", content: "Está en la región de Valparaíso, Chile" },
        {
          role: "assistant",
          content:
            "Excelente. Para tomates en Valparaíso recomiendo:\n\n• pH entre 6.0-6.8\n• Materia orgánica >3%\n• Buen drenaje\n• Análisis de NPK\n\n¿Has hecho algún análisis previo?",
        },
      ],
    },
    {
      name: "Despega tu Carrera",
      description: "Coaching profesional personalizado",
      color: "from-blue-500 to-cyan-600",
      messages: [
        { role: "user", content: "Quiero cambiar de carrera pero no sé por dónde empezar" },
        {
          role: "assistant",
          content:
            "Te entiendo perfectamente. Cambiar de carrera es una decisión importante. Cuéntame, ¿qué te motiva a hacer este cambio?",
        },
        { role: "user", content: "Trabajo en contabilidad pero me apasiona la tecnología" },
        {
          role: "assistant",
          content:
            "¡Fantástico! La transición de contabilidad a tech es muy viable. Tienes ventajas:\n\n✅ Pensamiento analítico\n✅ Atención al detalle\n✅ Experiencia con datos\n\n¿Qué área tech te interesa más?",
        },
      ],
    },
    {
      name: "ParrotfyIA",
      description: "Aprendizaje de idiomas con IA",
      color: "from-purple-500 to-pink-600",
      messages: [
        { role: "user", content: "I want to practice my English conversation skills" },
        {
          role: "assistant",
          content:
            "Great! I'm here to help you improve your English. Let's start with a casual conversation. How was your day today?",
        },
        { role: "user", content: "It was good, I studied for my exam" },
        {
          role: "assistant",
          content:
            "That sounds productive! What subject are you studying? Also, I noticed you could say 'I've been studying' to show ongoing action. Keep up the great work! 🎉",
        },
      ],
    },
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        const currentDemoMessages = demos[currentDemo].messages
        if (prev >= currentDemoMessages.length - 1) {
          // Move to next demo
          setCurrentDemo((prevDemo) => (prevDemo + 1) % demos.length)
          return 0
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying, currentDemo, demos])

  const features = [
    {
      icon: Brain,
      title: "IA Avanzada",
      description: "Modelos de última generación para conversaciones naturales y análisis profundo",
    },
    {
      icon: MessageSquare,
      title: "Chat Inteligente",
      description: "Interfaz conversacional intuitiva que se adapta a tu estilo de comunicación",
    },
    {
      icon: Zap,
      title: "Respuestas Instantáneas",
      description: "Procesamiento en tiempo real para una experiencia fluida y eficiente",
    },
    {
      icon: Shield,
      title: "Seguridad Total",
      description: "Encriptación end-to-end y protección completa de tus datos personales",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Herramientas para trabajar en equipo y compartir conocimientos",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Métricas detalladas y insights para optimizar tu experiencia",
    },
  ]

  const useCases = [
    {
      title: "EcosueloLab",
      description: "Análisis inteligente de suelos para agricultura de precisión",
      features: [
        "Análisis químico automatizado",
        "Recomendaciones de cultivos",
        "Monitoreo continuo",
        "Reportes detallados",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Despega tu Carrera",
      description: "Coaching profesional personalizado con IA",
      features: [
        "Evaluación de habilidades",
        "Plan de carrera personalizado",
        "Preparación para entrevistas",
        "Networking estratégico",
      ],
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "ParrotfyIA",
      description: "Aprendizaje de idiomas conversacional",
      features: [
        "Conversaciones naturales",
        "Corrección en tiempo real",
        "Pronunciación perfecta",
        "Progreso personalizado",
      ],
      color: "from-purple-500 to-pink-600",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Agricultora",
      content: "EcosueloLab revolucionó mi forma de trabajar. Ahora tengo análisis precisos en minutos.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Carlos Ruiz",
      role: "Desarrollador",
      content: "Gracias a Despega tu Carrera conseguí mi trabajo soñado en tech. El coaching fue increíble.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Ana Silva",
      role: "Estudiante",
      content: "ParrotfyIA me ayudó a dominar el inglés. Las conversaciones se sienten completamente naturales.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const faqs = [
    {
      question: "¿Cómo funciona la IA de Neuralia?",
      answer:
        "Nuestra IA utiliza modelos de lenguaje avanzados entrenados específicamente para cada dominio, garantizando respuestas precisas y contextualmente relevantes.",
    },
    {
      question: "¿Es seguro usar Neuralia?",
      answer:
        "Absolutamente. Implementamos encriptación end-to-end, cumplimos con GDPR y nunca compartimos tus datos con terceros.",
    },
    {
      question: "¿Puedo usar Neuralia en mi empresa?",
      answer:
        "Sí, ofrecemos planes empresariales con funciones avanzadas de administración, integración API y soporte dedicado.",
    },
    {
      question: "¿Qué idiomas soporta?",
      answer: "Actualmente soportamos español, inglés, portugués y francés, con más idiomas en desarrollo.",
    },
    {
      question: "¿Hay una versión gratuita?",
      answer:
        "Sí, ofrecemos un plan gratuito con funcionalidades básicas. Los planes premium incluyen características avanzadas.",
    },
    {
      question: "¿Cómo puedo integrar Neuralia en mi aplicación?",
      answer:
        "Proporcionamos APIs REST y SDKs para las principales plataformas, junto con documentación completa y ejemplos.",
    },
    {
      question: "¿Qué soporte técnico ofrecen?",
      answer: "Ofrecemos soporte 24/7 por chat, email y teléfono para todos nuestros usuarios premium.",
    },
    {
      question: "¿Puedo personalizar los agentes de IA?",
      answer:
        "Sí, nuestros planes empresariales incluyen herramientas para entrenar y personalizar agentes según tus necesidades específicas.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neuralia
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Características
              </a>
              <a href="#use-cases" className="text-gray-600 hover:text-blue-600 transition-colors">
                Casos de Uso
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                Testimonios
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                FAQ
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Iniciar Sesión</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Comenzar Gratis
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              El Futuro de la IA Conversacional
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Ecosistema completo de agentes de IA especializados para transformar tu negocio, carrera y aprendizaje con
              conversaciones naturales y análisis inteligente.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-gray-600">Usuarios Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">50+</div>
                <div className="text-gray-600">Integraciones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600">Soporte</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
              >
                Comenzar Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                Ver Demo
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Live Demo */}
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold">Demo en Vivo</h3>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <div className="flex gap-2">
                    {demos.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentDemo ? "bg-blue-600" : "bg-gray-300"
                        }`}
                        onClick={() => {
                          setCurrentDemo(index)
                          setCurrentMessageIndex(0)
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <Card className="overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${demos[currentDemo].color} text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">{demos[currentDemo].name}</CardTitle>
                      <CardDescription className="text-white/90">{demos[currentDemo].description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      En Vivo
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-80 overflow-y-auto p-6 space-y-4">
                    {demos[currentDemo].messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                      <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Características Poderosas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología de vanguardia que impulsa cada conversación y análisis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white mr-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Casos de Uso Especializados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agentes de IA diseñados para dominios específicos con expertise profundo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${useCase.color}`} />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {useCase.title}
                    <Badge variant="secondary">Especializado</Badge>
                  </CardTitle>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-transparent" variant="outline">
                    Explorar {useCase.title}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Lo Que Dicen Nuestros Usuarios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Historias reales de transformación con Neuralia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">Encuentra respuestas a las preguntas más comunes sobre Neuralia</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para Transformar tu Negocio?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya están aprovechando el poder de la IA conversacional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Comenzar Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 bg-transparent"
            >
              Contactar Ventas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Neuralia</span>
              </div>
              <p className="text-gray-400 mb-4">
                Ecosistema de IA conversacional que transforma la manera en que trabajas, aprendes y creces.
              </p>
              <div className="flex space-x-4">
                <Globe className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Smartphone className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <TrendingUp className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Productos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    EcosueloLab
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Despega tu Carrera
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ParrotfyIA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Enterprise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentación
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guías
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Comunidad
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Neuralia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
