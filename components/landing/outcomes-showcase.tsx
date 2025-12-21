"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react"

export function OutcomesShowcase() {
  const { language } = useLanguage()

  const outcomes = {
    en: [
      {
        title: "Municipal Workflow Automation",
        description: "A Chilean city deployed AI agents for permit processing and citizen queries",
        impact: "80% reduction in processing time",
        icon: Zap,
      },
      {
        title: "Creative Content Pipeline",
        description: "Museum executed world engine with 360° content generation and QA",
        impact: "10x faster content production",
        icon: TrendingUp,
      },
      {
        title: "Enterprise Operations",
        description: "Enterprise automated customer service with multi-channel support",
        impact: "60% cost reduction",
        icon: Users,
      },
      {
        title: "AI-Powered Data Hub",
        description: "Knowledge platform with vector memory and intelligent decision engine",
        impact: "Real-time insights",
        icon: CheckCircle,
      },
    ],
    es: [
      {
        title: "Automatización de Procesos Municipales",
        description: "Una ciudad chilena desplegó agentes de IA para procesamiento de permisos",
        impact: "80% reducción en tiempo de procesamiento",
        icon: Zap,
      },
      {
        title: "Pipeline de Contenido Creativo",
        description: "Museo ejecutó world engine con generación 360° y QA",
        impact: "10x más rápido en producción",
        icon: TrendingUp,
      },
      {
        title: "Operaciones Empresariales",
        description: "Empresa automatizó servicio al cliente con soporte multicanal",
        impact: "60% reducción de costos",
        icon: Users,
      },
      {
        title: "Hub de Datos con IA",
        description: "Plataforma de conocimiento con memoria vectorial y motor de decisiones",
        impact: "Insights en tiempo real",
        icon: CheckCircle,
      },
    ],
  }

  const t = outcomes[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {t.map((outcome, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{
            y: -8,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
            transition: { duration: 0.3 },
          }}
          className="group"
        >
          <Card className="h-full border-slate-200 hover:border-blue-400 transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-white overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.4 }}
            />

            <CardHeader className="relative z-10">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-900 flex-1 group-hover:text-blue-600 transition-colors">
                  {outcome.title}
                </h3>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <outcome.icon className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                </motion.div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <motion.p
                className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {outcome.description}
              </motion.p>
              <motion.div
                className="pt-2 border-t border-slate-200"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                style={{ originX: 0 }}
              >
                <motion.p
                  className="text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {outcome.impact}
                </motion.p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
