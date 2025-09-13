"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sprout,
  GraduationCap,
  Building2,
  MessageCircle,
  Bot,
  User,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Code,
  Database,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const [isAnimationPaused, setIsAnimationPaused] = useState(false)
  const { t, language } = useLanguage()

  // Define use cases with translations
  const useCases = [
    {
      id: "ecosuelo",
      title: t("usecases.ecosuelo.title"),
      subtitle:
        language === "en" ? "Full Stack Agricultural Analysis Platform" : "Plataforma Full Stack de Análisis Agrícola",
      icon: Sprout,
      industry: t("usecases.ecosuelo.industry"),
      status: t("usecases.status.delivered"),
      deliveryItems: [
        language === "en" ? "• Complete web dashboard with analysis" : "• Dashboard web completo con análisis",
        language === "en" ? "• REST API for laboratories" : "• API REST para laboratorios",
        language === "en" ? "• Specialized WhatsApp AI agent" : "• Agente WhatsApp IA especializado",
      ],
      liveUrl: "ecosuelolab.com",
      description: t("usecases.ecosuelo.description"),
      challenge:
        language === "en"
          ? "Farmers needed a comprehensive solution that connected laboratories, analysis and recommendations in a single platform"
          : "Los agricultores necesitaban una solución integral que conectara laboratorios, análisis y recomendaciones en una sola plataforma",
      solution:
        language === "en"
          ? "We developed a complete full stack solution: web frontend, backend with APIs, PostgreSQL database, WhatsApp Business API integration and specialized AI agents"
          : "Desarrollamos una solución full stack completa: frontend web, backend con APIs, base de datos PostgreSQL, integración WhatsApp Business API y agentes de IA especializados",
      results: [
        language === "en"
          ? "✅ Complete web platform with dashboard working"
          : "✅ Plataforma web completa con dashboard funcionando",
        language === "en"
          ? "✅ REST API for laboratory integration active"
          : "✅ API REST para integración con laboratorios activa",
        language === "en"
          ? "✅ Real-time database processing analysis"
          : "✅ Base de datos en tiempo real procesando análisis",
        language === "en"
          ? "✅ WhatsApp conversational agent operational"
          : "✅ Agente conversacional por WhatsApp operativo",
        language === "en"
          ? "✅ 90% reduction in processing time proven"
          : "✅ Reducción 90% en tiempo de procesamiento comprobada",
      ],
      techStack: ["Next.js", "PostgreSQL", "WhatsApp Business API", "OpenAI GPT-4", "Vercel", "Supabase"],
      chat:
        language === "en"
          ? [
              { type: "user", message: "Hello, I need the results of the analysis of my plot #1247", time: "14:32" },
              {
                type: "bot",
                message:
                  "Hello! I'm your AI assistant specialized in soil analysis. Consulting the results of your plot #1247 in our database... ✅",
                time: "14:32",
              },
              {
                type: "bot",
                message:
                  "📊 **Plot #1247 Results:**\n\n🌱 **Nitrogen:** 45 ppm (Optimal)\n💧 **Phosphorus:** 12 ppm (Low - requires fertilization)\n🌿 **Potassium:** 180 ppm (Good)\n📈 **pH:** 6.8 (Ideal for crops)\n\n**AI Recommendation:** Apply phosphoric fertilizer 50kg/ha\n\n📱 You can also see the complete report on your web dashboard",
                time: "14:33",
              },
              { type: "user", message: "What crop do you recommend for this plot?", time: "14:35" },
              {
                type: "bot",
                message:
                  "Based on my AI analysis and historical data from our platform:\n\n🌽 **Corn:** 95% compatibility\n🥔 **Potato:** 88% compatibility\n🌾 **Wheat:** 82% compatibility\n\nI recommend **corn** for optimal conditions. The system has already updated your profile with this recommendation.",
                time: "14:35",
              },
            ]
          : [
              {
                type: "user",
                message: "Hola, necesito los resultados del análisis de mi parcela #1247",
                time: "14:32",
              },
              {
                type: "bot",
                message:
                  "¡Hola! Soy tu asistente de IA especializado en análisis de suelo. Consultando los resultados de tu parcela #1247 en nuestra base de datos... ✅",
                time: "14:32",
              },
              {
                type: "bot",
                message:
                  "📊 **Resultados Parcela #1247:**\n\n🌱 **Nitrógeno:** 45 ppm (Óptimo)\n💧 **Fósforo:** 12 ppm (Bajo - requiere fertilización)\n🌿 **Potasio:** 180 ppm (Bueno)\n📈 **pH:** 6.8 (Ideal para cultivos)\n\n**Recomendación IA:** Aplicar fertilizante fosfórico 50kg/ha\n\n📱 También puedes ver el reporte completo en tu dashboard web",
                time: "14:33",
              },
              { type: "user", message: "¿Qué cultivo me recomiendas para esta parcela?", time: "14:35" },
              {
                type: "bot",
                message:
                  "Basado en mi análisis de IA y datos históricos de nuestra plataforma:\n\n🌽 **Maíz:** 95% compatibilidad\n🥔 **Papa:** 88% compatibilidad\n🌾 **Trigo:** 82% compatibilidad\n\nRecomiendo **maíz** por condiciones óptimas. El sistema ya actualizó tu perfil con esta recomendación.",
                time: "14:35",
              },
            ],
    },
    {
      id: "despega",
      title: t("usecases.despega.title"),
      subtitle:
        language === "en"
          ? "Full Stack Professional Coaching Ecosystem"
          : "Ecosistema Full Stack de Coaching Profesional",
      icon: GraduationCap,
      industry: t("usecases.despega.industry"),
      status: t("usecases.status.delivered"),
      deliveryItems: [
        language === "en" ? "• Web portal with AI matching" : "• Portal web con matching IA",
        language === "en" ? "• Complete coaching system" : "• Sistema de coaching completo",
        language === "en" ? "• Advanced professional analytics" : "• Analytics profesionales avanzados",
      ],
      liveUrl: "despegacarrera.com",
      description:
        language === "en"
          ? "Complete professional development platform with AI, web portal, matching system and advanced analytics - THE MOST COMPLETE FULL STACK SOLUTION TO DATE"
          : "Plataforma completa de desarrollo profesional con IA, portal web, sistema de matching y analytics avanzados - LA SOLUCIÓN FULL STACK MÁS COMPLETA HASTA HOY",
      challenge:
        language === "en"
          ? "Create a complete ecosystem that connects professionals, companies and opportunities with personalized coaching"
          : "Crear un ecosistema completo que conecte profesionales, empresas y oportunidades con coaching personalizado",
      solution:
        language === "en"
          ? "We developed a full stack platform: React web application, Node.js backend, database with professional profiles, AI-powered matching system and specialized conversational agents"
          : "Desarrollamos una plataforma full stack: aplicación web React, backend Node.js, base de datos con perfiles profesionales, sistema de matching con IA y agentes conversacionales especializados",
      results: [
        language === "en"
          ? "✅ Complete web portal with profiles working"
          : "✅ Portal web completo con perfiles funcionando",
        language === "en" ? "✅ AI-powered matching system active" : "✅ Sistema de matching IA-powered activo",
        language === "en"
          ? "✅ Real-time professional progress analytics"
          : "✅ Analytics de progreso profesional en tiempo real",
        language === "en"
          ? "✅ Conversational coaching agent operational"
          : "✅ Agente de coaching conversacional operativo",
        language === "en"
          ? "✅ 85% improvement in job placements proven"
          : "✅ 85% mejora en colocaciones laborales comprobada",
      ],
      techStack: ["React", "Node.js", "MongoDB", "OpenAI GPT-4", "WhatsApp API", "AWS"],
      chat:
        language === "en"
          ? [
              {
                type: "user",
                message:
                  "Hello, I'm an engineer with 3 years of experience but I feel like I'm not advancing in my career",
                time: "10:15",
              },
              {
                type: "bot",
                message:
                  "Hello! I'm your AI coach. I've reviewed your profile on our platform and understand your situation. Tell me, what specific area do you work in and what type of growth are you looking for?",
                time: "10:15",
              },
              {
                type: "user",
                message: "I work in software development, but I want to lead bigger projects",
                time: "10:17",
              },
              {
                type: "bot",
                message:
                  "Excellent goal! 🚀 Based on your profile and our market analysis:\n\n👥 **Technical leadership:** Start mentoring juniors\n📊 **Project management:** Learn agile methodologies\n🗣️ **Communication:** Practice presenting ideas\n\n✅ I've updated your development plan in the portal. Which area should we prioritize?",
                time: "10:17",
              },
              {
                type: "user",
                message: "Definitely communication with stakeholders is difficult for me",
                time: "10:19",
              },
              {
                type: "bot",
                message:
                  "Perfect! 💡 I've created a personalized plan:\n\n📅 **This week:** Technical communication course (already added to your dashboard)\n🎯 **This month:** 3 presentation opportunities identified\n👨‍💼 **Next 3 months:** Connected you with 2 senior mentors\n\nShall we start with the online course?",
                time: "10:19",
              },
            ]
          : [
              {
                type: "user",
                message: "Hola, soy ingeniero con 3 años de experiencia pero siento que no avanzo en mi carrera",
                time: "10:15",
              },
              {
                type: "bot",
                message:
                  "¡Hola! Soy tu coach de IA. He revisado tu perfil en nuestra plataforma y entiendo tu situación. Cuéntame, ¿en qué área específica trabajas y qué tipo de crecimiento buscas?",
                time: "10:15",
              },
              {
                type: "user",
                message: "Trabajo en desarrollo de software, pero quiero liderar proyectos más grandes",
                time: "10:17",
              },
              {
                type: "bot",
                message:
                  "¡Excelente objetivo! 🚀 Basado en tu perfil y nuestro análisis de mercado:\n\n👥 **Liderazgo técnico:** Comienza mentoreando juniors\n📊 **Gestión de proyectos:** Aprende metodologías ágiles\n🗣️ **Comunicación:** Practica presentar ideas\n\n✅ He actualizado tu plan de desarrollo en el portal. ¿Cuál área priorizamos?",
                time: "10:17",
              },
              { type: "user", message: "Definitivamente la comunicación con stakeholders me cuesta", time: "10:19" },
              {
                type: "bot",
                message:
                  "Perfecto! 💡 He creado un plan personalizado:\n\n📅 **Esta semana:** Curso de comunicación técnica (ya agregado a tu dashboard)\n🎯 **Este mes:** 3 oportunidades de presentación identificadas\n👨‍💼 **Próximos 3 meses:** Te conecté con 2 mentores senior\n\n¿Empezamos con el curso online?",
                time: "10:19",
              },
            ],
    },
    {
      id: "parrotfy",
      title: t("usecases.parrotfy.title"),
      subtitle:
        language === "en" ? "Full Stack Business Intelligence Suite" : "Suite Full Stack de Business Intelligence",
      icon: Building2,
      industry: t("usecases.parrotfy.industry"),
      status: t("usecases.status.delivered"),
      deliveryItems: [
        language === "en" ? "• Interactive BI dashboards" : "• Dashboards BI interactivos",
        language === "en" ? "• Multiple ERP integrations" : "• Integraciones ERP múltiples",
        language === "en" ? "• Enterprise conversational agent" : "• Agente conversacional empresarial",
      ],
      liveUrl: "parrotfy.com",
      description:
        language === "en"
          ? "Complete BI system with conversational AI, interactive dashboards, integration APIs and automated reporting - REAL PROJECT DELIVERED 1 MONTH AGO AFTER 2 MONTHS OF DEVELOPMENT"
          : "Sistema completo de BI con IA conversacional, dashboards interactivos, APIs de integración y reportería automática - PROYECTO REAL ENTREGADO HACE 1 MES TRAS 2 MESES DE DESARROLLO",
      challenge:
        language === "en"
          ? "Companies needed a comprehensive solution that unified ERP, CRM and analytics data with conversational access"
          : "Las empresas necesitaban una solución integral que unificara datos ERP, CRM y analytics con acceso conversacional",
      solution:
        language === "en"
          ? "We built a complete suite: frontend with React dashboards, backend with microservices, integration with multiple ERPs, analytical database and specialized conversational agents"
          : "Construimos una suite completa: frontend con dashboards React, backend con microservicios, integración con múltiples ERPs, base de datos analítica y agentes conversacionales especializados",
      results: [
        language === "en"
          ? "✅ Real-time interactive dashboards working"
          : "✅ Dashboards interactivos en tiempo real funcionando",
        language === "en" ? "✅ Integration APIs with 15+ ERPs active" : "✅ APIs de integración con 15+ ERPs activas",
        language === "en"
          ? "✅ Unified analytical database processing data"
          : "✅ Base de datos analítica unificada procesando datos",
        language === "en"
          ? "✅ Multi-channel conversational agent operational"
          : "✅ Agente conversacional multicanal operativo",
        language === "en" ? "✅ 300% ROI in first year proven" : "✅ ROI 300% en primer año comprobado",
      ],
      techStack: ["React", "Python", "PostgreSQL", "OpenAI GPT-4", "Docker", "Kubernetes"],
      chat:
        language === "en"
          ? [
              { type: "user", message: "What were last month's sales by region?", time: "09:45" },
              {
                type: "bot",
                message: "Consulting real-time data from our data warehouse... 📊",
                time: "09:45",
              },
              {
                type: "bot",
                message:
                  "**📈 December 2023 Sales:**\n\n🏙️ **Metropolitan Region:** $2,450,000\n🌊 **Valparaíso:** $1,230,000\n🏔️ **Biobío:** $890,000\n🌵 **Norte Grande:** $1,100,000\n\n**Total:** $5,670,000 (+12% vs nov)\n\n📊 Dashboard updated with interactive charts",
                time: "09:46",
              },
              { type: "user", message: "Yes, show me the detail of the Metropolitan Region", time: "09:47" },
              {
                type: "bot",
                message:
                  "**🏙️ Metropolitan Region - Complete Analysis:**\n\n👤 **Top Sellers:**\n• María González: $580,000\n• Carlos Ruiz: $520,000\n• Ana López: $490,000\n\n🏢 **By Branch:**\n• Las Condes: $980,000\n• Providencia: $750,000\n• Maipú: $720,000\n\n📈 Complete report sent to your email and available on the web portal",
                time: "09:47",
              },
            ]
          : [
              { type: "user", message: "¿Cuáles fueron las ventas del mes pasado por región?", time: "09:45" },
              {
                type: "bot",
                message: "Consultando datos en tiempo real desde nuestro data warehouse... 📊",
                time: "09:45",
              },
              {
                type: "bot",
                message:
                  "**📈 Ventas Diciembre 2023:**\n\n🏙️ **Región Metropolitana:** $2,450,000\n🌊 **Valparaíso:** $1,230,000\n🏔️ **Biobío:** $890,000\n🌵 **Norte Grande:** $1,100,000\n\n**Total:** $5,670,000 (+12% vs nov)\n\n📊 Dashboard actualizado con gráficos interactivos",
                time: "09:46",
              },
              { type: "user", message: "Sí, muéstrame el detalle de la Región Metropolitana", time: "09:47" },
              {
                type: "bot",
                message:
                  "**🏙️ Región Metropolitana - Análisis Completo:**\n\n👤 **Top Vendedores:**\n• María González: $580,000\n• Carlos Ruiz: $520,000\n• Ana López: $490,000\n\n🏢 **Por Sucursal:**\n• Las Condes: $980,000\n• Providencia: $750,000\n• Maipú: $720,000\n\n📈 Reporte completo enviado a tu email y disponible en el portal web",
                time: "09:47",
              },
            ],
    },
  ]

  const activeCase = useCases.find((useCase) => useCase.id === activeTab)

  // Enhanced animation logic with better tab switching
  useEffect(() => {
    if (!activeCase || isAnimationPaused) return

    const animateMessages = () => {
      if (currentMessageIndex < activeCase.chat.length - 1) {
        // Show typing indicator
        setIsTyping(true)

        // After typing delay, show next message
        const typingTimer = setTimeout(() => {
          setCurrentMessageIndex((prev) => prev + 1)
          setIsTyping(false)
        }, 1500) // Increased typing duration for better UX

        return typingTimer
      } else {
        // Reset animation after showing all messages
        const resetTimer = setTimeout(() => {
          setCurrentMessageIndex(0)
          setAnimationKey((prev) => prev + 1) // Force re-render for smooth restart
        }, 4000) // Longer pause before restart

        return resetTimer
      }
    }

    const timer = setTimeout(animateMessages, 2000) // Consistent delay between messages

    return () => {
      clearTimeout(timer)
    }
  }, [activeCase, currentMessageIndex, isAnimationPaused])

  // Enhanced tab change handler with immediate reset
  useEffect(() => {
    // Pause animation briefly during tab change
    setIsAnimationPaused(true)

    // Reset all animation states
    setCurrentMessageIndex(0)
    setIsTyping(false)
    setAnimationKey((prev) => prev + 1)

    // Resume animation after brief pause
    const resumeTimer = setTimeout(() => {
      setIsAnimationPaused(false)
    }, 300) // Brief pause for smooth transition

    return () => clearTimeout(resumeTimer)
  }, [activeTab])

  if (!activeCase) return null

  return (
    <section
      id="use-cases"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 text-white border-0 text-lg px-6 py-2 font-semibold transition-colors duration-300">
            <CheckCircle className="w-4 h-4 mr-2" />
            {language === "en" ? "Real Projects Delivered and Working" : "Proyectos Reales Entregados y Funcionando"}
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
            {t("usecases.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            {t("usecases.subtitle")}
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-1 shadow-sm transition-colors duration-300">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.id}
                value={useCase.id}
                className="flex items-center gap-2 data-[state=active]:bg-slate-900 data-[state=active]:text-white dark:data-[state=active]:bg-slate-700 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700 data-[state=active]:hover:bg-slate-800 dark:data-[state=active]:hover:bg-slate-600 text-slate-700 dark:text-slate-300"
              >
                <useCase.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{useCase.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid lg:grid-cols-2 gap-12 items-start"
                >
                  {/* Left Column - Case Details */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-slate-900 dark:bg-slate-700 rounded-xl flex items-center justify-center transition-colors duration-300">
                        <useCase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                          {useCase.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
                          {useCase.subtitle}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="ml-auto border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                      >
                        {useCase.industry}
                      </Badge>
                    </div>

                    {/* Status and Delivery Info */}
                    <div className="mb-6">
                      <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700 transition-colors duration-300 mb-3">
                        {useCase.status}
                      </Badge>
                      <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        {useCase.deliveryItems.map((item, index) => (
                          <div key={index} className="font-medium">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed transition-colors duration-300">
                      {useCase.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2 text-lg transition-colors duration-300">
                          <Clock className="w-5 h-5 text-red-500 dark:text-red-400" />
                          {language === "en" ? "Real Business Challenge" : "Desafío Empresarial Real"}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                          {useCase.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2 text-lg transition-colors duration-300">
                          <Code className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                          {language === "en" ? "Full Stack Solution Delivered" : "Solución Full Stack Entregada"}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                          {useCase.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 text-lg transition-colors duration-300">
                          <TrendingUp className="w-5 h-5 text-green-500 dark:text-green-400" />
                          {language === "en" ? "Real Proven Results" : "Resultados Reales Comprobados"}
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {useCase.results.map((result, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 transition-colors duration-300" />
                              <span className="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300">
                                {result}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 text-lg transition-colors duration-300">
                          <Database className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                          {language === "en" ? "Implemented Technology Stack" : "Stack Tecnológico Implementado"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {useCase.techStack.map((tech, index) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                            >
                              <Badge className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 font-medium transition-colors duration-300">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Column - Interactive Chat Demo */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="sticky top-8"
                  >
                    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl overflow-hidden transition-colors duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
                          <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                          <span className="font-bold text-slate-900 dark:text-white transition-colors duration-300">
                            {useCase.title} - {language === "en" ? "Real System" : "Sistema Real"}
                          </span>
                          <Badge className="ml-auto bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700 font-medium transition-colors duration-300">
                            <Bot className="w-3 h-3 mr-1" />
                            {language === "en" ? "In Production" : "En Producción"}
                          </Badge>
                        </div>

                        <div
                          className="space-y-4 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-slate-100 dark:scrollbar-track-slate-800"
                          key={`${activeTab}-${animationKey}`}
                        >
                          <AnimatePresence mode="sync">
                            {!isAnimationPaused &&
                              useCase.chat.slice(0, currentMessageIndex + 1).map((msg, index) => (
                                <motion.div
                                  key={`${activeTab}-${index}-${animationKey}`}
                                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                  }}
                                  className={`flex gap-3 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                                >
                                  {msg.type === "bot" && (
                                    <Avatar className="w-8 h-8 flex-shrink-0">
                                      <AvatarFallback className="bg-slate-900 dark:bg-slate-700 text-white transition-colors duration-300">
                                        <Bot className="w-4 h-4" />
                                      </AvatarFallback>
                                    </Avatar>
                                  )}
                                  <motion.div
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className={`max-w-[85%] p-3 rounded-2xl shadow-sm ${
                                      msg.type === "user"
                                        ? "bg-slate-900 dark:bg-slate-700 text-white"
                                        : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
                                    } transition-colors duration-300`}
                                  >
                                    <p className="text-sm whitespace-pre-line font-medium leading-relaxed">
                                      {msg.message}
                                    </p>
                                    <p className="text-xs opacity-70 mt-2 font-medium">{msg.time}</p>
                                  </motion.div>
                                  {msg.type === "user" && (
                                    <Avatar className="w-8 h-8">
                                      <AvatarFallback className="bg-slate-600 dark:bg-slate-500 text-white transition-colors duration-300">
                                        <User className="w-4 h-4" />
                                      </AvatarFallback>
                                    </Avatar>
                                  )}
                                </motion.div>
                              ))}
                          </AnimatePresence>

                          {isTyping && !isAnimationPaused && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.4 }}
                              className="flex gap-3 justify-start"
                            >
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-slate-900 dark:bg-slate-700 text-white transition-colors duration-300">
                                  <Bot className="w-4 h-4" />
                                </AvatarFallback>
                              </Avatar>
                              <div className="bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 p-3 rounded-2xl shadow-sm transition-colors duration-300">
                                <div className="flex space-x-1">
                                  <motion.div
                                    className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                                  />
                                  <motion.div
                                    className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                                  />
                                  <motion.div
                                    className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Real Project Status */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <Card className="mt-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl transition-colors duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 transition-colors duration-300" />
                            <span className="font-bold text-green-800 dark:text-green-200 text-sm transition-colors duration-300">
                              {language === "en"
                                ? "Real Project Delivered and Working"
                                : "Proyecto Real Entregado y Funcionando"}
                            </span>
                          </div>
                          <p className="text-xs text-green-700 dark:text-green-300 font-medium transition-colors duration-300">
                            {language === "en"
                              ? "Complete system developed, delivered and operational in production"
                              : "Sistema completo desarrollado, entregado y operativo en producción"}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
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
          <Button
            size="lg"
            className="bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20una%20solución%20full%20stack%20con%20IA%20como%20los%20proyectos%20reales%20que%20han%20entregado"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {language === "en" ? "Create my real project like these" : "Crear mi proyecto real como estos"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
