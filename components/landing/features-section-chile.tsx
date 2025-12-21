"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Zap, Shield, Globe, Clock, Brain, Users } from "lucide-react"

export function FeaturesChileSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Why Enterprise Teams in Chile Trust N3uralia",
      features: [
        {
          icon: Zap,
          title: "Deploy in Hours, Not Months",
          description: "Get your AI systems live faster than traditional development",
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "Certified security compliance and data residency in Chile",
        },
        {
          icon: Globe,
          title: "Bilingual & Multi-Channel",
          description: "Native Spanish support with WhatsApp integration for Chile market",
        },
        {
          icon: Clock,
          title: "24/7 Support in Spanish",
          description: "Local support team for Chilean business hours",
        },
        {
          icon: Brain,
          title: "AI That Understands Chile",
          description: "Custom training on Chilean business context and culture",
        },
        {
          icon: Users,
          title: "Local Success Stories",
          description: "Proven implementations with Chilean cities and enterprises",
        },
      ],
    },
    es: {
      title: "Por Qué Equipos Empresariales en Chile Confían en N3uralia",
      features: [
        {
          icon: Zap,
          title: "Despliega en Horas, No Meses",
          description: "Obtén tus sistemas de IA en vivo más rápido que el desarrollo tradicional",
        },
        {
          icon: Shield,
          title: "Seguridad Empresarial",
          description: "Cumplimiento certificado de seguridad y residencia de datos en Chile",
        },
        {
          icon: Globe,
          title: "Bilingüe y Multicanal",
          description: "Soporte nativo en español con integración WhatsApp para mercado chileno",
        },
        {
          icon: Clock,
          title: "Soporte 24/7 en Español",
          description: "Equipo de soporte local para horarios comerciales chilenos",
        },
        {
          icon: Brain,
          title: "IA que Entiende Chile",
          description: "Entrenamiento personalizado en contexto y cultura empresarial chilena",
        },
        {
          icon: Users,
          title: "Casos de Éxito Locales",
          description: "Implementaciones comprobadas con ciudades y empresas chilenas",
        },
      ],
    },
  }

  const t = content[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t.title}</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="h-full border-slate-200 hover:border-blue-400 transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-white overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.4 }}
                />

                <CardContent className="p-6 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "mirror",
                      delay: i * 0.2,
                    }}
                    className="w-8 h-8 text-blue-600 mb-4"
                  >
                    <feature.icon className="w-full h-full" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
