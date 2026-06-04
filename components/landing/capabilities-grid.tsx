"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Cog, Palette, Settings, Database, Zap, X } from "lucide-react"

export function CapabilitiesGrid() {
  const [selectedCapability, setSelectedCapability] = useState<number | null>(null)

  const capabilities = [
    {
      icon: Brain,
      title: "Arquitecturas Multi-Agente",
      description: "Agentes especializados coordinados por resultado. Cada uno hace lo suyo, en paralelo, sin interferencias.",
      features: ["Agentes paralelos", "Coordinación por resultado", "Escalable internamente"],
      detailedExplanation: "No es un chatbot. Son múltiples agentes especializados trabajando en paralelo—análisis, decisión, integración—cada uno dentro de tu stack. Se coordinan automáticamente por objetivo, sin orquestación manual. Escala internamente sin cambios de arquitectura.",
    },
    {
      icon: Cog,
      title: "Sistemas Inteligentes Integrados",
      description: "IA dentro de tu infraestructura. APIs, webhooks, bases de datos, autenticación—todo nativo, todo integrado.",
      features: ["Integración total", "APIs productivas", "Base de datos nativa"],
      detailedExplanation: "La IA debe vivir dentro de tu stack, no fuera. Construimos backends que hablan HTTP, conectan a tus DBs, respetan tu autenticación. Soporte multi-tenant, RLS, audit logs. Tu infraestructura empresarial + IA = potencia real.",
    },
    {
      icon: Palette,
      title: "Pipelines de Generación en Producción",
      description: "Contenido, datos, análisis—generados a escala, validados automáticamente, sin degradación de calidad.",
      features: ["Validación automática", "QA integrado", "Generación escalable"],
      detailedExplanation: "Generar a escala sin compromiso. Nuestros pipelines producen y validan: si algo falla el threshold, lo rechaza y reintenta. Textos, análisis, síntesis—todo dentro de márgenes de calidad que defines.",
    },
    {
      icon: Settings,
      title: "Automatización Operacional Real",
      description: "WhatsApp, Telegram, APIs—procesos que fluyen dentro de donde ya trabaja tu equipo. Cero fricción.",
      features: ["Multi-canal", "Procesos reales", "Integración fluida"],
      detailedExplanation: "Tu equipo ya usa WhatsApp y Telegram. Integra procesos ahí. Órdenes, seguimiento, escaladas—fluyen naturalmente dentro del canal que la gente ya usa. Automatización que no siente como automatización.",
    },
    {
      icon: Zap,
      title: "Sistemas Descentralizados + Web3",
      description: "Smart contracts, inmutabilidad, confianza sin intermediarios. Para quien necesita transparencia absoluta.",
      features: ["Smart contracts", "Trazabilidad inmutable", "Confianza programada"],
      detailedExplanation: "Cuando necesitas que el código sea ley, no promesas. Construimos sistemas donde cada decisión queda registrada en blockchain, auditable, imposible de cambiar. Transparencia y confianza programadas.",
    },
  ]

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
      },
    },
  } as any

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
              const IconComponent = capabilities[selectedCapability].icon
              return (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="h3 text-foreground mb-4">{capabilities[selectedCapability].title}</h2>
                        <p className="body text-muted-foreground mt-2">{capabilities[selectedCapability].description}</p>
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
                      Características Principales
                    </h3>
                    <ul className="space-y-2">
                      {capabilities[selectedCapability].features.map((feature, j) => (
                        <li key={j} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-muted rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed text-sm">
                      {capabilities[selectedCapability].detailedExplanation}
                    </p>
                  </div>

                  <Button
                    onClick={() => setSelectedCapability(null)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Cerrar
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
        {capabilities.map((capability, i) => (
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
                    Más Información
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
