"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Locale } from "@/content/dictionaries"
import { Brain, Cog, Zap, ArrowRight, X } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PlatformClientProps {
  locale: string
}

export function PlatformClient({ locale }: PlatformClientProps) {
  const isES = locale === "es"
  const [selectedCapability, setSelectedCapability] = useState<number | null>(null)

  const corePillars = [
    {
      icon: Cog,
      titleES: "Orquestación Central",
      titleEN: "Central Orchestration",
      descES: "Un orquestador que coordina múltiples agentes especializados en paralelo, sin interferencias.",
      descEN: "An orchestrator that coordinates multiple specialized agents in parallel, without interference.",
      features: isES 
        ? ["Coordinación por resultado", "Agentes paralelos", "Escalabilidad interna", "Cero configuración manual"]
        : ["Result-based coordination", "Parallel agents", "Internal scalability", "Zero manual configuration"],
    },
    {
      icon: Zap,
      titleES: "Integración Sin Fricción",
      titleEN: "Seamless Integration",
      descES: "IA dentro de tu infraestructura. APIs, webhooks, bases de datos, autenticación—todo nativo.",
      descEN: "AI within your infrastructure. APIs, webhooks, databases, authentication—all native.",
      features: isES 
        ? ["Integración total", "APIs productivas", "Base de datos nativa", "Multi-tenant RLS"]
        : ["Total integration", "Production APIs", "Native databases", "Multi-tenant RLS"],
    },
    {
      icon: Brain,
      titleES: "Escalabilidad Real",
      titleEN: "Real Scalability",
      descES: "Desde hoy hasta millones de transacciones. Pipelines validados, generación sin degradación.",
      descEN: "From today to millions of transactions. Validated pipelines, generation without degradation.",
      features: isES 
        ? ["Validación automática", "QA integrado", "Generación a escala", "Sin compromiso de calidad"]
        : ["Automatic validation", "Built-in QA", "Scale generation", "Quality guaranteed"],
    },
  ]

  const capabilities = [
    {
      icon: Brain,
      titleES: "Arquitecturas Multi-Agente",
      titleEN: "Multi-Agent Architecture",
      descES: "Agentes especializados coordinados por resultado. Cada uno hace lo suyo en paralelo.",
      descEN: "Specialized agents coordinated by result. Each one does its job in parallel.",
      features: isES 
        ? ["Agentes paralelos", "Coordinación por resultado", "Escalable internamente"]
        : ["Parallel agents", "Result coordination", "Internally scalable"],
      detailedES: "No es un chatbot. Son múltiples agentes especializados trabajando en paralelo—análisis, decisión, integración—cada uno dentro de tu stack. Se coordinan automáticamente por objetivo, sin orquestación manual.",
      detailedEN: "It's not a chatbot. Multiple specialized agents working in parallel—analysis, decision, integration—each within your stack. They automatically coordinate by objective, without manual orchestration.",
    },
    {
      icon: Cog,
      titleES: "Sistemas Inteligentes Integrados",
      titleEN: "Integrated Intelligent Systems",
      descES: "IA dentro de tu infraestructura. APIs, webhooks, bases de datos, autenticación—todo nativo.",
      descEN: "AI within your infrastructure. APIs, webhooks, databases, authentication—all native.",
      features: isES 
        ? ["Integración total", "APIs productivas", "Base de datos nativa"]
        : ["Total integration", "Production APIs", "Native databases"],
      detailedES: "La IA debe vivir dentro de tu stack, no fuera. Construimos backends que hablan HTTP, conectan a tus DBs, respetan tu autenticación. Soporte multi-tenant, RLS, audit logs.",
      detailedEN: "AI must live inside your stack, not outside. We build backends that speak HTTP, connect to your DBs, respect your authentication. Multi-tenant support, RLS, audit logs.",
    },
    {
      icon: Zap,
      titleES: "Pipelines de Generación en Producción",
      titleEN: "Production Generation Pipelines",
      descES: "Contenido, datos, análisis—generados a escala, validados automáticamente.",
      descEN: "Content, data, analysis—generated at scale, automatically validated.",
      features: isES 
        ? ["Validación automática", "QA integrado", "Generación escalable"]
        : ["Automatic validation", "Built-in QA", "Scalable generation"],
      detailedES: "Generar a escala sin compromiso. Nuestros pipelines producen y validan: si algo falla el threshold, lo rechaza y reintenta. Textos, análisis, síntesis—todo dentro de márgenes de calidad.",
      detailedEN: "Generate at scale without compromise. Our pipelines produce and validate: if something fails the threshold, it rejects and retries. Texts, analysis, synthesis—all within quality margins.",
    },
    {
      icon: Brain,
      titleES: "Automatización Operacional Real",
      titleEN: "Real Operational Automation",
      descES: "WhatsApp, Telegram, APIs—procesos que fluyen donde ya trabaja tu equipo.",
      descEN: "WhatsApp, Telegram, APIs—processes flowing where your team already works.",
      features: isES 
        ? ["Multi-canal", "Procesos reales", "Integración fluida"]
        : ["Multi-channel", "Real processes", "Fluid integration"],
      detailedES: "Tu equipo ya usa WhatsApp y Telegram. Integra procesos ahí. Órdenes, seguimiento, escaladas—fluyen naturalmente dentro del canal que la gente ya usa. Automatización que no siente como automatización.",
      detailedEN: "Your team already uses WhatsApp and Telegram. Integrate processes there. Orders, tracking, escalations—flow naturally within the channel people already use. Automation that doesn't feel like automation.",
    },
    {
      icon: Cog,
      titleES: "Sistemas Descentralizados + Web3",
      titleEN: "Decentralized Systems + Web3",
      descES: "Smart contracts, inmutabilidad, confianza sin intermediarios.",
      descEN: "Smart contracts, immutability, trust without intermediaries.",
      features: isES 
        ? ["Smart contracts", "Trazabilidad inmutable", "Confianza programada"]
        : ["Smart contracts", "Immutable traceability", "Programmed trust"],
      detailedES: "Cuando necesitas que el código sea ley, no promesas. Construimos sistemas donde cada decisión queda registrada en blockchain, auditable, imposible de cambiar. Transparencia programada.",
      detailedEN: "When you need code to be law, not promises. We build systems where every decision is recorded on blockchain, auditable, impossible to change. Programmed transparency.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.12, duration: 0.5 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  } as any

  const pillarVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  } as any

  return (
    <>
      {/* Core Pillars */}
      <section className="py-24 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">
            {isES ? "3 Pilares Fundamentales" : "3 Core Pillars"}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            {isES
              ? "La base técnica sobre la que construimos sistemas inteligentes en producción."
              : "The technical foundation on which we build intelligent systems in production."}
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {corePillars.map((pillar, i) => {
              const IconComponent = pillar.icon
              return (
                <motion.div key={i} variants={pillarVariants}>
                  <Card className="h-full border-border bg-card hover:border-primary/40 transition-all hover:shadow-lg group">
                    <CardHeader>
                      <motion.div
                        className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {isES ? pillar.titleES : pillar.titleEN}
                      </h3>
                      <p className="text-muted-foreground mt-3 group-hover:text-foreground transition-colors">
                        {isES ? pillar.descES : pillar.descEN}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {pillar.features.map((feature, j) => (
                          <motion.li
                            key={j}
                            className="flex items-center text-sm text-muted-foreground group-hover:text-foreground"
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.08 }}
                          >
                            <motion.div
                              className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"
                              whileInView={{ scale: [1, 1.2, 1] }}
                              transition={{ delay: j * 0.08, duration: 0.5 }}
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 px-4 bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">
            {isES ? "Capacidades Técnicas" : "Technical Capabilities"}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            {isES
              ? "Herramientas especializadas para resolver los desafíos más complejos."
              : "Specialized tools to solve the most complex challenges."}
          </p>

          {/* Modal */}
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
                  const cap = capabilities[selectedCapability]
                  const IconComponent = cap.icon
                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-foreground mb-3">
                              {isES ? cap.titleES : cap.titleEN}
                            </h2>
                            <p className="text-muted-foreground">{isES ? cap.descES : cap.descEN}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedCapability(null)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      <div className="mb-6 p-4 bg-muted rounded-lg border border-border">
                        <p className="text-foreground leading-relaxed text-sm">
                          {isES ? cap.detailedES : cap.detailedEN}
                        </p>
                      </div>

                      <Button
                        onClick={() => setSelectedCapability(null)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        {isES ? "Cerrar" : "Close"}
                      </Button>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((capability, i) => {
              const IconComponent = capability.icon
              return (
                <motion.div key={i} variants={itemVariants} whileHover={{ y: -4 }}>
                  <Card className="h-full border-border hover:border-primary/40 hover:shadow-lg transition-all bg-background hover:bg-background/80 group cursor-pointer">
                    <CardHeader>
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                        animate={{ rotate: [0, 3, -3, 0] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      >
                        <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.8 }}>
                          <IconComponent className="w-6 h-6 text-primary" />
                        </motion.div>
                      </motion.div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {isES ? capability.titleES : capability.titleEN}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                        {isES ? capability.descES : capability.descEN}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-4">
                      <ul className="space-y-2">
                        {capability.features.map((feature, j) => (
                          <motion.li
                            key={j}
                            className="flex items-center text-sm text-muted-foreground group-hover:text-foreground"
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
                      <motion.div whileHover={{ x: 2 }}>
                        <Button
                          onClick={() => setSelectedCapability(i)}
                          variant="outline"
                          className="w-full justify-between bg-transparent hover:bg-muted border-border hover:border-primary text-muted-foreground hover:text-foreground transition-all text-sm"
                        >
                          {isES ? "Más Información" : "Learn More"}
                          <motion.div animate={{ x: [0, 2, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {isES ? "¿Listo para implementar?" : "Ready to implement?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {isES
              ? "Descubre cómo N3uralia puede transformar tu arquitectura con agentes inteligentes."
              : "Discover how N3uralia can transform your architecture with intelligent agents."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            {isES ? "Contáctanos" : "Contact Us"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
