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
  Globe,
  Users,
  BarChart3,
  Sparkles,
  ArrowRight,
  Star,
  ChevronRight,
  Target,
} from "lucide-react"

export default function HomePage() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)

  const demos = [
    {
      name: "EcosueloLab",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      messages: [
        { role: "user", content: "¿Cómo puedo mejorar la retención de agua en mi suelo?" },
        {
          role: "assistant",
          content:
            "Para mejorar la retención de agua, te recomiendo: 1) Añadir materia orgánica como compost, 2) Implementar cultivos de cobertura, 3) Reducir la labranza. ¿Qué tipo de cultivo tienes?",
        },
        { role: "user", content: "Tengo cultivos de maíz en 50 hectáreas" },
        {
          role: "assistant",
          content:
            "Perfecto. Para maíz en 50 hectáreas, sugiero aplicar 2-3 toneladas de compost por hectárea antes de la siembra. También considera plantar centeno como cultivo de cobertura en invierno.",
        },
      ],
    },
    {
      name: "Despega tu Carrera",
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      messages: [
        { role: "user", content: "Quiero cambiar de carrera pero no sé por dónde empezar" },
        {
          role: "assistant",
          content:
            "¡Excelente decisión! Primero, identifiquemos tus fortalezas y pasiones. ¿Qué actividades te energizan más en tu trabajo actual?",
        },
        { role: "user", content: "Me gusta resolver problemas y trabajar con datos" },
        {
          role: "assistant",
          content:
            "Perfecto! Con esas habilidades, podrías considerar: Análisis de Datos, Ciencia de Datos, o Consultoría. Te ayudo a crear un plan de transición paso a paso. ¿Te interesa alguna de estas áreas?",
        },
      ],
    },
    {
      name: "ParrotfyIA",
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      messages: [
        { role: "user", content: "I want to improve my pronunciation in English" },
        {
          role: "assistant",
          content:
            "Great! I'll help you with pronunciation. Let's start with common problem sounds. Can you say 'The weather is beautiful today'?",
        },
        { role: "user", content: "Ze wezer is byutiful today" },
        {
          role: "assistant",
          content:
            "Good effort! Focus on 'th' sounds: put your tongue between your teeth for 'The' and 'weather'. Try again: 'THE weather'. Also, 'beautiful' has 3 syllables: beau-ti-ful.",
        },
      ],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        const nextMessage = prev + 1
        if (nextMessage >= demos[currentDemo].messages.length) {
          setCurrentDemo((prevDemo) => (prevDemo + 1) % demos.length)
          return 0
        }
        return nextMessage
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [currentDemo, demos])

  const features = [
    {
      icon: Brain,
      title: "IA Conversacional Avanzada",
      description: "Agentes inteligentes que comprenden contexto y mantienen conversaciones naturales",
    },
    {
      icon: Zap,
      title: "Implementación Rápida",
      description: "Despliega agentes de IA en minutos, no meses. Integración sin código",
    },
    {
      icon: Shield,
      title: "Seguridad Empresarial",
      description: "Cumplimiento SOC2, encriptación end-to-end y controles de acceso granulares",
    },
    {
      icon: Globe,
      title: "Multiidioma Nativo",
      description: "Soporte para 50+ idiomas con comprensión cultural y contextual",
    },
    {
      icon: BarChart3,
      title: "Analytics en Tiempo Real",
      description: "Métricas detalladas de rendimiento, satisfacción y ROI de tus agentes",
    },
    {
      icon: Users,
      title: "Colaboración de Equipo",
      description: "Herramientas para que múltiples equipos gestionen y mejoren agentes juntos",
    },
    {
      icon: MessageSquare,
      title: "Omnicanalidad",
      description: "Despliega en web, móvil, WhatsApp, Slack y más plataformas",
    },
    {
      icon: Sparkles,
      title: "Aprendizaje Continuo",
      description: "Los agentes mejoran automáticamente con cada interacción",
    },
    {
      icon: Target,
      title: "Personalización Profunda",
      description: "Adapta personalidad, tono y conocimiento específico de tu industria",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Directora de Innovación",
      company: "AgroTech Chile",
      content:
        "EcosueloLab transformó cómo nuestros agricultores acceden a conocimiento técnico. 40% menos consultas al equipo técnico.",
      rating: 5,
      metric: "40% reducción en consultas",
    },
    {
      name: "Carlos Mendoza",
      role: "Head of HR",
      company: "TechCorp México",
      content:
        "Despega tu Carrera mejoró nuestro programa de desarrollo interno. Los empleados están 60% más comprometidos.",
      rating: 5,
      metric: "60% más engagement",
    },
    {
      name: "Ana Silva",
      role: "Learning Director",
      company: "Global English Institute",
      content:
        "ParrotfyIA revolucionó nuestras clases de pronunciación. Los estudiantes practican 3x más fuera del aula.",
      rating: 5,
      metric: "3x más práctica",
    },
    {
      name: "Roberto Jiménez",
      role: "CTO",
      company: "FinanceAI",
      content:
        "La implementación fue increíblemente rápida. En 2 semanas teníamos nuestro agente de soporte funcionando.",
      rating: 5,
      metric: "2 semanas implementación",
    },
    {
      name: "Laura Martín",
      role: "Customer Success",
      company: "EduTech España",
      content: "Nuestros estudiantes aman la experiencia personalizada. 85% de satisfacción en las encuestas.",
      rating: 5,
      metric: "85% satisfacción",
    },
    {
      name: "Diego Herrera",
      role: "Operations Manager",
      company: "RetailPlus",
      content: "El ROI fue evidente desde el primer mes. Redujimos costos de soporte en 50% manteniendo calidad.",
      rating: 5,
      metric: "50% reducción costos",
    },
  ]

  const faqs = [
    {
      question: "¿Qué hace diferente a Neuralia de otros chatbots?",
      answer:
        "Neuralia no son chatbots simples. Son agentes de IA especializados que comprenden contexto profundo, mantienen memoria conversacional y se adaptan al dominio específico de tu industria. Cada agente es como tener un experto disponible 24/7.",
    },
    {
      question: "¿Cuánto tiempo toma implementar un agente?",
      answer:
        "Con nuestra plataforma no-code, puedes tener un agente básico funcionando en minutos. Para implementaciones empresariales con integraciones personalizadas, típicamente toma 1-2 semanas.",
    },
    {
      question: "¿Los agentes pueden integrarse con nuestros sistemas existentes?",
      answer:
        "Sí, ofrecemos APIs robustas y conectores pre-construidos para CRM, ERP, bases de datos y más de 100 herramientas empresariales. También soportamos webhooks y integraciones personalizadas.",
    },
    {
      question: "¿Qué nivel de personalización es posible?",
      answer:
        "Completa. Puedes personalizar personalidad, tono, base de conocimiento, flujos conversacionales, integraciones y hasta la interfaz visual. Cada agente puede ser único para tu marca y necesidades.",
    },
    {
      question: "¿Cómo manejan la seguridad y privacidad de datos?",
      answer:
        "Cumplimos con SOC2, GDPR y estándares internacionales. Todos los datos están encriptados en tránsito y reposo. Ofrecemos despliegues on-premise y cloud privado para máxima seguridad.",
    },
    {
      question: "¿Qué idiomas soportan?",
      answer:
        "Soportamos 50+ idiomas con comprensión cultural nativa. Nuestros agentes pueden cambiar de idioma dinámicamente en la misma conversación y mantener contexto.",
    },
    {
      question: "¿Cómo se mide el ROI de los agentes?",
      answer:
        "Proporcionamos dashboards detallados con métricas como reducción de tickets de soporte, tiempo de resolución, satisfacción del cliente, conversiones y más. La mayoría de clientes ve ROI positivo en 30-60 días.",
    },
    {
      question: "¿Ofrecen soporte y entrenamiento?",
      answer:
        "Sí, incluimos onboarding completo, entrenamiento del equipo, soporte técnico 24/7 y un Customer Success Manager dedicado para cuentas empresariales.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Neuralia</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Características
              </a>
              <a href="#use-cases" className="text-gray-600 hover:text-gray-900">
                Casos de Uso
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
                Testimonios
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">
                FAQ
              </a>
              <Button>Comenzar Gratis</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              🚀 Plataforma de IA Conversacional Líder en LATAM
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Agentes de IA que
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                transforman{" "}
              </span>
              tu negocio
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Crea agentes de IA especializados que comprenden tu industria, hablan tu idioma y escalan tu expertise
              24/7. Sin código, máxima personalización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Crear Mi Primer Agente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Demo en Vivo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10,000+</div>
                <div className="text-gray-600">Agentes Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Idiomas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Soporte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Características que marcan la diferencia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología de vanguardia diseñada para empresas que buscan resultados reales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de uso reales, resultados comprobados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo empresas líderes están transformando sus operaciones con Neuralia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg overflow-hidden ${currentDemo === index ? "ring-2 ring-blue-500" : ""}`}
              >
                <CardHeader className={`bg-gradient-to-r ${demo.gradient} text-white`}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">{demo.name}</CardTitle>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      En Vivo
                    </Badge>
                  </div>
                  <CardDescription className="text-white/90">
                    {demo.name === "EcosueloLab" && "Consultoría agrícola especializada"}
                    {demo.name === "Despega tu Carrera" && "Coaching profesional personalizado"}
                    {demo.name === "ParrotfyIA" && "Entrenamiento de pronunciación"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-80 bg-gray-50 p-4 overflow-y-auto">
                    <div className="space-y-4">
                      {demo.messages
                        .slice(0, currentDemo === index ? currentMessage + 1 : demo.messages.length)
                        .map((message, msgIndex) => (
                          <div
                            key={msgIndex}
                            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-xs px-4 py-2 rounded-lg ${
                                message.role === "user"
                                  ? "bg-blue-500 text-white"
                                  : `bg-${demo.color}-100 text-${demo.color}-800 border border-${demo.color}-200`
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                            </div>
                          </div>
                        ))}
                      {currentDemo === index && currentMessage < demo.messages.length - 1 && (
                        <div className="flex justify-start">
                          <div className={`bg-${demo.color}-100 border border-${demo.color}-200 px-4 py-2 rounded-lg`}>
                            <div className="flex space-x-1">
                              <div className={`w-2 h-2 bg-${demo.color}-400 rounded-full animate-bounce`}></div>
                              <div
                                className={`w-2 h-2 bg-${demo.color}-400 rounded-full animate-bounce`}
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className={`w-2 h-2 bg-${demo.color}-400 rounded-full animate-bounce`}
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Explorar Más Casos de Uso
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados reales de empresas que confían en Neuralia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {testimonial.metric}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-700 text-base">"{testimonial.content}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas saber sobre Neuralia</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de empresas que ya están usando Neuralia para automatizar, escalar y mejorar sus operaciones
            con IA conversacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Comenzar Gratis Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Agendar Demo Personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Neuralia</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                La plataforma de IA conversacional más avanzada de LATAM. Crea agentes inteligentes que transforman tu
                negocio.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  GitHub
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Integraciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Neuralia. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Términos
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
