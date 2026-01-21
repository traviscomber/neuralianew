"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Cog, Palette, Settings, Database, Zap, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CapabilitiesGrid() {
  const { language } = useLanguage()
  const [selectedCapability, setSelectedCapability] = useState<number | null>(null)

  const capabilities = {
    en: [
      {
        icon: Brain,
        title: "Agent Systems",
        description: "Multi-agent orchestration with advanced reasoning and tool integration",
        features: ["Multi-agent workflows", "Tool integration", "Real-time reasoning"],
        detailedExplanation: "Imagina múltiples expertos conversando entre sí para resolver un problema. Eso es lo que hacen nuestros sistemas de agentes. Un agente maneja la comunicación, otro analiza datos, otro toma decisiones. Trabajan juntos en tiempo real, cada uno especializado en su tarea. Si algo cambia, se adaptan al instante. No es IA que responde preguntas—es IA que razona, coordina y resuelve.",
      },
      {
        icon: Cog,
        title: "AI Platforms",
        description: "Custom backends with authentication, multi-tenant, and admin systems",
        features: ["Custom backends", "Multi-tenant", "Admin dashboards"],
        detailedExplanation: "Necesitas más que solo una API. Necesitas una plataforma que soporte múltiples clientes, que controle quién accede qué, que te dé visibilidad completa. Construimos eso. Arquitectura empresarial con seguridad integrada. Escala desde 10 usuarios a 100 mil sin cambiar una línea de código. Tu dashboard central, tus datos protegidos, tu control total.",
      },
      {
        icon: Palette,
        title: "Creative Engines",
        description: "360° content generation pipelines with QA and delivery automation",
        features: ["Content generation", "Quality assurance", "Automation"],
        detailedExplanation: "Generar contenido a escala sin perder calidad. Nuestros motores creativos usan IA para producir textos, imágenes, videos—y los validan automáticamente. Si algo no cumple estándares, lo rechaza y lo intenta de nuevo. El resultado: contenido consistente, a la velocidad que necesitas, sin compromiso en la calidad.",
      },
      {
        icon: Settings,
        title: "Business Automation",
        description: "WhatsApp, Telegram, and operational automation for enterprises",
        features: ["WhatsApp/Telegram", "Process automation", "Integration"],
        detailedExplanation: "Tus clientes ya están en WhatsApp y Telegram. Ahora tus procesos también pueden estarlo. Ordenes, consultas, atención al cliente—todo integrado a donde tus usuarios ya están. Automatización que se siente natural, que fluye dentro del canal que la gente usa todos los días. Cero fricción, máximo impacto.",
      },
      {
        icon: Database,
        title: "Data & Memory",
        description: "Vector databases, knowledge management, and intelligent decisions",
        features: ["Vector memory", "Knowledge graph", "Decision engine"],
        detailedExplanation: "Una buena memoria es lo que distingue a un bot tonto de un experto. Guardamos contexto, aprendemos patrones, conectamos información de formas inteligentes. Cuando tu IA necesita tomar una decisión, no empieza de cero—accede a toda la sabiduría acumulada. Eso es poder real.",
      },
      {
        icon: Zap,
        title: "Blockchain Development",
        description: "Smart contracts, decentralized systems and Web3 integration",
        features: ["Smart contracts", "Decentralized systems", "Web3 integration"],
        detailedExplanation: "Web3 no es hype si lo usas bien. Construimos sistemas donde la confianza está en el código, no en intermediarios. Smart contracts que ejecutan automáticamente, registros inmutables que auditan solos. Para empresas que necesitan transparencia y seguridad más allá de lo tradicional.",
      },
    ],
    es: [
      {
        icon: Brain,
        title: "Sistemas de Agentes",
        description: "Orquestación multi-agente con razonamiento avanzado e integración",
        features: ["Workflows multi-agente", "Integración de herramientas", "Razonamiento en tiempo real"],
        detailedExplanation: "Imagina múltiples expertos conversando entre sí para resolver un problema. Eso es lo que hacen nuestros sistemas de agentes. Un agente maneja la comunicación, otro analiza datos, otro toma decisiones. Trabajan juntos en tiempo real, cada uno especializado en su tarea. Si algo cambia, se adaptan al instante. No es IA que responde preguntas—es IA que razona, coordina y resuelve.",
      },
      {
        icon: Cog,
        title: "Plataformas IA",
        description: "Backends personalizados con autenticación, multi-inquilino y admin",
        features: ["Backends personalizados", "Multi-inquilino", "Dashboards"],
        detailedExplanation: "Necesitas más que solo una API. Necesitas una plataforma que soporte múltiples clientes, que controle quién accede qué, que te dé visibilidad completa. Construimos eso. Arquitectura empresarial con seguridad integrada. Escala desde 10 usuarios a 100 mil sin cambiar una línea de código. Tu dashboard central, tus datos protegidos, tu control total.",
      },
      {
        icon: Palette,
        title: "Motores Creativos",
        description: "Pipelines de generación 360° con QA y automatización",
        features: ["Generación de contenido", "Aseguramiento de calidad", "Automatización"],
        detailedExplanation: "Generar contenido a escala sin perder calidad. Nuestros motores creativos usan IA para producir textos, imágenes, videos—y los validan automáticamente. Si algo no cumple estándares, lo rechaza y lo intenta de nuevo. El resultado: contenido consistente, a la velocidad que necesitas, sin compromiso en la calidad.",
      },
      {
        icon: Settings,
        title: "Automatización Empresarial",
        description: "WhatsApp, Telegram y automatización operacional para empresas",
        features: ["WhatsApp/Telegram", "Automatización de procesos", "Integración"],
        detailedExplanation: "Tus clientes ya están en WhatsApp y Telegram. Ahora tus procesos también pueden estarlo. Órdenes, consultas, atención al cliente—todo integrado a donde tus usuarios ya están. Automatización que se siente natural, que fluye dentro del canal que la gente usa todos los días. Cero fricción, máximo impacto.",
      },
      {
        icon: Database,
        title: "Datos y Memoria",
        description: "Bases de datos vectoriales, gestión del conocimiento y decisiones",
        features: ["Memoria vectorial", "Grafo de conocimiento", "Motor de decisiones"],
        detailedExplanation: "Una buena memoria es lo que distingue a un bot tonto de un experto. Guardamos contexto, aprendemos patrones, conectamos información de formas inteligentes. Cuando tu IA necesita tomar una decisión, no empieza de cero—accede a toda la sabiduría acumulada. Eso es poder real.",
      },
      {
        icon: Zap,
        title: "Desarrollos en Blockchain",
        description: "Smart contracts, sistemas descentralizados e integración Web3",
        features: ["Smart contracts", "Sistemas descentralizados", "Integración Web3"],
        detailedExplanation: "Web3 no es hype si lo usas bien. Construimos sistemas donde la confianza está en el código, no en intermediarios. Smart contracts que ejecutan automáticamente, registros inmutables que auditan solos. Para empresas que necesitan transparencia y seguridad más allá de lo tradicional.",
      },
    ],
  }

  const t = capabilities[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.12,
        duration: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      {selectedCapability !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCapability(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-card border border-border rounded-lg max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const IconComponent = t[selectedCapability].icon
              return (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    <div>
                      <h2 className="h3 text-foreground mb-4">{t[selectedCapability].title}</h2>
                      <p className="body text-muted-foreground mt-2">{t[selectedCapability].description}</p>
                    </div>
                    </div>
                    <button
                      onClick={() => setSelectedCapability(null)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-normal text-foreground mb-3">
                      {language === "en" ? "Key Features" : "Características Principales"}
                    </h3>
                    <ul className="space-y-2">
                      {t[selectedCapability].features.map((feature, j) => (
                        <li key={j} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-muted rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed text-sm">
                      {t[selectedCapability].detailedExplanation}
                    </p>
                  </div>

                  <Button
                    onClick={() => setSelectedCapability(null)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {language === "en" ? "Close" : "Cerrar"}
                  </Button>
                </>
              )
            })()}
          </motion.div>
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {t.map((capability, i) => (
          <motion.div key={i} variants={itemVariants} whileHover={{ y: -4, transition: { duration: 0.3 } }}>
            <Card className="h-full border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-card hover:bg-card/80 group">
              <CardHeader>
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.8 }}>
                    {capability.icon && <capability.icon className="w-6 h-6 text-primary" />}
                  </motion.div>
                </motion.div>
                <h3 className="h3 text-foreground group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>
                <p className="body text-muted-foreground mt-2 group-hover:text-foreground transition-colors">{capability.description}</p>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                <ul className="space-y-2">
                  {capability.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      className="flex items-center body text-muted-foreground group-hover:text-foreground"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.08 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"
                        whileInView={{ scale: [1, 1.2, 1] }}
                        transition={{ delay: j * 0.08, duration: 0.5 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                  <Button
                    onClick={() => setSelectedCapability(i)}
                    variant="outline"
                    className="w-full justify-between bg-transparent hover:bg-muted border-border hover:border-primary text-muted-foreground hover:text-foreground transition-all text-sm cursor-pointer"
                  >
                    {language === "en" ? "Learn More" : "Más Información"}
                    <motion.div
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
