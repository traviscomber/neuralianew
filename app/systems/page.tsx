"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Zap, Rocket, Settings, Globe, Shield, BarChart3 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const translations = {
  en: {
    title: "N3uralia Full-Stack Development",
    subtitle: "From frontend finesse to backend power—built for speed, scale, and AI-native experiences.",

    // Core Services
    coreServices: "Core Services",

    // Service titles
    aiReadyFrontend: "AI-READY FRONTEND",
    scalableBackends: "SCALABLE BACKENDS",
    realtimeDatabases: "REAL-TIME DATABASES",
    workflowAutomation: "WORKFLOW AUTOMATION",
    secureAuth: "SECURE AUTH & ROLES",
    devopsDeployment: "DevOps & DEPLOYMENT",

    // Detailed descriptions (flip content)
    frontendDesc:
      "Fast, reactive, and stunning interfaces built with Next.js, React, and Tailwind—ready to integrate any LLM or AI feature.",
    backendDesc: "Lightning-fast APIs and logic layers using Node.js, Python, Supabase, and serverless functions.",
    databaseDesc: "Instant updates and real-time sync using PostgreSQL, Supabase, Firestore, or Neon for dynamic apps.",
    automationDesc: "Connect tools like Notion, Slack, WhatsApp, Stripe, and Zapier into seamless business flows.",
    authDesc: "OAuth, Auth0, and RBAC systems with custom user dashboards and access control.",
    deploymentDesc:
      "End-to-end deployment on Vercel, Render, or custom infrastructure with CI/CD, monitoring, and scaling.",

    // Key Features
    keyFeatures: "Key Features",
    aiFirstArchitecture: "AI-FIRST ARCHITECTURE",
    ultraFastDeployment: "ULTRA-FAST DEPLOYMENT",
    composableApis: "COMPOSABLE APIs",
    edgeServerlessReady: "EDGE & SERVERLESS READY",
    secureByDefault: "SECURE by DEFAULT",
    visualAdminTools: "VISUAL ADMIN TOOLS",
    whyItMatters: "Why it matters?",

    // Key Features detailed descriptions
    aiFirstDesc: "Designed from the ground up to plug into OpenAI, Claude, Gemini, and custom ML models.",
    ultraFastDesc: "One-click deploys to Vercel or Render—production-ready in hours, not weeks.",
    composableDesc: "Modular API endpoints for agents, automations, and user logic—easily reused and scaled.",
    edgeServerlessDesc: "Built with edge functions and serverless tech for global speed and minimal latency.",
    secureDefaultDesc: "Roles, auth, rate limiting, and secure API keys baked in—no extra work needed.",
    visualToolsDesc: "Built-in dashboards for monitoring workflows, users, performance, and custom actions.",

    // CTA
    getStarted: "Get Started",
    whatsappText: "Hello N3uralia, I'm interested in your Full-Stack Development services for my business",
  },
  es: {
    title: "Desarrollo Full-Stack N3uralia",
    subtitle:
      "Desde la elegancia del frontend hasta la potencia del backend—construido para velocidad, escala y experiencias nativas de IA.",

    // Core Services
    coreServices: "Servicios Principales",

    // Service titles
    aiReadyFrontend: "FRONTEND LISTO PARA IA",
    scalableBackends: "BACKENDS ESCALABLES",
    realtimeDatabases: "BASES DE DATOS EN TIEMPO REAL",
    workflowAutomation: "AUTOMATIZACIÓN DE FLUJOS",
    secureAuth: "AUTENTICACIÓN Y ROLES SEGUROS",
    devopsDeployment: "DevOps Y DESPLIEGUE",

    // Detailed descriptions (flip content)
    frontendDesc:
      "Interfaces rápidas, reactivas y sorprendentes construidas con Next.js, React y Tailwind—listas para integrar cualquier LLM o función de IA.",
    backendDesc: "APIs ultrarrápidas y capas de lógica usando Node.js, Python, Supabase y funciones serverless.",
    databaseDesc:
      "Actualizaciones instantáneas y sincronización en tiempo real usando PostgreSQL, Supabase, Firestore o Neon para aplicaciones dinámicas.",
    automationDesc:
      "Conecta herramientas como Notion, Slack, WhatsApp, Stripe y Zapier en flujos de negocio perfectos.",
    authDesc: "Sistemas OAuth, Auth0 y RBAC con dashboards de usuario personalizados y control de acceso.",
    deploymentDesc:
      "Despliegue end-to-end en Vercel, Render o infraestructura personalizada con CI/CD, monitoreo y escalado.",

    // Key Features
    keyFeatures: "Características Clave",
    aiFirstArchitecture: "ARQUITECTURA AI-FIRST",
    ultraFastDeployment: "DESPLIEGUE ULTRA-RÁPIDO",
    composableApis: "APIs COMPONIBLES",
    edgeServerlessReady: "EDGE & SERVERLESS READY",
    secureByDefault: "SEGURO POR DEFECTO",
    visualAdminTools: "HERRAMIENTAS VISUALES",
    whyItMatters: "¿Por qué importa?",

    // Key Features detailed descriptions
    aiFirstDesc: "Diseñado desde cero para conectar con OpenAI, Claude, Gemini y modelos ML personalizados.",
    ultraFastDesc: "Despliegues de un clic a Vercel o Render—listo para producción en horas, no semanas.",
    composableDesc:
      "Endpoints API modulares para agentes, automatizaciones y lógica de usuario—fácilmente reutilizables y escalables.",
    edgeServerlessDesc:
      "Construido con funciones edge y tecnología serverless para velocidad global y latencia mínima.",
    secureDefaultDesc:
      "Roles, autenticación, limitación de velocidad y claves API seguras incluidas—sin trabajo extra necesario.",
    visualToolsDesc:
      "Dashboards integrados para monitorear flujos de trabajo, usuarios, rendimiento y acciones personalizadas.",

    // CTA
    getStarted: "Comenzar",
    whatsappText: "Hola N3uralia, me interesan sus servicios de Desarrollo Full-Stack para mi empresa",
  },
}

export default function SystemsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredFeatureCard, setHoveredFeatureCard] = useState<number | null>(null)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t.whatsappText)
    window.open(`https://wa.me/56940946660?text=${message}`, "_blank")
  }

  const coreServices = [
    { title: t.aiReadyFrontend, description: t.frontendDesc },
    { title: t.scalableBackends, description: t.backendDesc },
    { title: t.realtimeDatabases, description: t.databaseDesc },
    { title: t.workflowAutomation, description: t.automationDesc },
    { title: t.secureAuth, description: t.authDesc },
    { title: t.devopsDeployment, description: t.deploymentDesc },
  ]

  const keyFeatures = [
    { title: t.aiFirstArchitecture, description: t.aiFirstDesc, icon: Zap },
    { title: t.ultraFastDeployment, description: t.ultraFastDesc, icon: Rocket },
    { title: t.composableApis, description: t.composableDesc, icon: Settings },
    { title: t.edgeServerlessReady, description: t.edgeServerlessDesc, icon: Globe },
    { title: t.secureByDefault, description: t.secureDefaultDesc, icon: Shield },
    { title: t.visualAdminTools, description: t.visualToolsDesc, icon: BarChart3 },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Systems1 */}
      <div className="bg-gray-200 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">{t.title}</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Core Services Section - Systems2 with cosmic background header and light background cards */}
      <div className="relative">
        {/* Cosmic background header */}
        <div
          className="py-16 relative"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Systems.png-p9QzmEarhA29HSLB3z2iE38G2E8OGH.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              {t.coreServices}
            </motion.h2>
          </div>
        </div>

        {/* Light background with cards */}
        <div className="bg-gray-200 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="perspective-1000"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`relative w-full h-[250px] transition-transform duration-700 transform-style-preserve-3d ${
                      hoveredCard === index ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* Front of card */}
                    <Card className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-2xl hover:bg-white/90 transition-all duration-300 backface-hidden shadow-lg">
                      <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                      </CardContent>
                    </Card>

                    {/* Back of card */}
                    <Card className="absolute inset-0 bg-black text-white rounded-2xl rotate-y-180 backface-hidden shadow-lg">
                      <CardContent className="p-8 h-full flex items-center justify-center">
                        <p className="text-lg leading-relaxed text-center">{service.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Key Features Section - Systems3 with cosmic background header and light background cards */}
      <div className="relative">
        {/* Cosmic background header */}
        <div
          className="py-16 relative"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Systems.png-p9QzmEarhA29HSLB3z2iE38G2E8OGH.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              {t.keyFeatures}
            </motion.h2>
          </div>
        </div>

        {/* Light background with cards */}
        <div className="bg-gray-200 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="perspective-1000"
                    onMouseEnter={() => setHoveredFeatureCard(index)}
                    onMouseLeave={() => setHoveredFeatureCard(null)}
                  >
                    <div
                      className={`relative w-full h-[250px] transition-transform duration-700 transform-style-preserve-3d ${
                        hoveredFeatureCard === index ? "rotate-y-180" : ""
                      }`}
                    >
                      {/* Front of card */}
                      <Card className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-2xl hover:bg-white/90 transition-all duration-300 backface-hidden shadow-lg">
                        <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                          <IconComponent className="w-12 h-12 text-gray-700 mb-4 mx-auto" />
                          <h3 className="text-lg font-bold text-gray-800 mb-4">{feature.title}</h3>
                          <button className="text-gray-600 hover:text-gray-800 underline transition-colors text-sm">
                            {t.whyItMatters}
                          </button>
                        </CardContent>
                      </Card>

                      {/* Back of card */}
                      <Card className="absolute inset-0 bg-black text-white rounded-2xl rotate-y-180 backface-hidden shadow-lg">
                        <CardContent className="p-8 h-full flex items-center justify-center">
                          <p className="text-lg leading-relaxed text-center">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Systems.png-p9QzmEarhA29HSLB3z2iE38G2E8OGH.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {language === "es" ? "¿Listo para construir el futuro?" : "Ready to build the future?"}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  {language === "es"
                    ? "Nuestros expertos en desarrollo full-stack te ayudarán a crear soluciones escalables y potenciadas por IA."
                    : "Our full-stack development experts will help you create scalable, AI-powered solutions."}
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.getStarted}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
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
      `}</style>
    </div>
  )
}
