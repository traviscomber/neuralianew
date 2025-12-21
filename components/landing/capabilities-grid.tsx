"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Cog, Palette, Settings, Database } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CapabilitiesGrid() {
  const { language } = useLanguage()

  const capabilities = {
    en: [
      {
        icon: Brain,
        title: "Agent Systems",
        description: "Multi-agent orchestration with advanced reasoning and tool integration",
        features: ["Multi-agent workflows", "Tool integration", "Real-time reasoning"],
      },
      {
        icon: Cog,
        title: "AI Platforms",
        description: "Custom backends with authentication, multi-tenant, and admin systems",
        features: ["Custom backends", "Multi-tenant", "Admin dashboards"],
      },
      {
        icon: Palette,
        title: "Creative Engines",
        description: "360° content generation pipelines with QA and delivery automation",
        features: ["Content generation", "Quality assurance", "Automation"],
      },
      {
        icon: Settings,
        title: "Automation for Business",
        description: "WhatsApp, Telegram, and operational automation for enterprises",
        features: ["WhatsApp/Telegram", "Process automation", "Integration"],
      },
      {
        icon: Database,
        title: "Data & Memory",
        description: "Vector databases, knowledge management, and intelligent decisions",
        features: ["Vector memory", "Knowledge graph", "Decision engine"],
      },
    ],
    es: [
      {
        icon: Brain,
        title: "Sistemas de Agentes",
        description: "Orquestación multi-agente con razonamiento avanzado e integración",
        features: ["Workflows multi-agente", "Integración de herramientas", "Razonamiento en tiempo real"],
      },
      {
        icon: Cog,
        title: "Plataformas IA",
        description: "Backends personalizados con autenticación, multi-inquilino y admin",
        features: ["Backends personalizados", "Multi-inquilino", "Dashboards"],
      },
      {
        icon: Palette,
        title: "Motores Creativos",
        description: "Pipelines de generación 360° con QA y automatización",
        features: ["Generación de contenido", "Aseguramiento de calidad", "Automatización"],
      },
      {
        icon: Settings,
        title: "Automatización Empresarial",
        description: "WhatsApp, Telegram y automatización operacional para empresas",
        features: ["WhatsApp/Telegram", "Automatización de procesos", "Integración"],
      },
      {
        icon: Database,
        title: "Datos y Memoria",
        description: "Bases de datos vectoriales, gestión del conocimiento y decisiones",
        features: ["Memoria vectorial", "Grafo de conocimiento", "Motor de decisiones"],
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {t.map((capability, i) => (
        <motion.div key={i} variants={itemVariants} whileHover={{ y: -4, transition: { duration: 0.3 } }}>
          <Card className="h-full border-slate-300 hover:border-slate-400 hover:shadow-md transition-all duration-300 bg-white hover:bg-slate-50 group">
            <CardHeader>
              <motion.div
                className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center mb-4 group-hover:bg-slate-300 transition-colors duration-300"
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.8 }}>
                  <capability.icon className="w-6 h-6 text-slate-700" />
                </motion.div>
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-800 transition-colors">
                {capability.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 group-hover:text-slate-700 transition-colors font-light">
                {capability.description}
              </p>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <ul className="space-y-2">
                {capability.features.map((feature, j) => (
                  <motion.li
                    key={j}
                    className="flex items-center text-sm text-slate-600 group-hover:text-slate-800"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.08 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2 flex-shrink-0"
                      whileInView={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: j * 0.08, duration: 0.5 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <Button
                  variant="outline"
                  className="w-full justify-between bg-transparent hover:bg-slate-100 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 transition-all text-sm"
                >
                  {language === "en" ? "Learn More" : "Más Información"}
                  <motion.div animate={{ x: [0, 2, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
