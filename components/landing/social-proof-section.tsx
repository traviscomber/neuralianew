"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

export function SocialProofSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Trusted by Leading Chilean & Global Organizations",
      testimonials: [
        {
          quote:
            "The real estate AI assistant N3uralia developed helps us match properties with clients more effectively and efficiently.",
          author: "Juan Navarro",
          role: "Owner, Sur-Realista",
          company: "Sur-Realista",
          image: "/testimonials/juan-navarro.jpg",
        },
        {
          quote:
            "N3uralia's AI system streamlined our environmental consulting processes. The automated analysis saves us hours of manual work every day.",
          author: "Sebastian Puelma",
          role: "Owner, Ecosuelolab",
          company: "Ecosuelolab",
          image: "/testimonials/sebastian-puelma.jpg",
        },
        {
          quote:
            "The career coaching automation system N3uralia built helps us provide personalized guidance to our clients 24/7.",
          author: "Joaquín Covarrubias",
          role: "Founder, Despega Tu Carrera",
          company: "Despega Tu Carrera",
          image: "/testimonials/juan-francisco-pumpkin.jpg",
        },
      ],
      metrics: [
        { number: "10x", label: "Faster Deployments" },
        { number: "80%", label: "Cost Reduction" },
        { number: "99.99%", label: "Uptime" },
        { number: "50+", label: "Enterprise Clients" },
      ],
    },
    es: {
      title: "Confiado por Organizaciones Líderes de Chile y el Mundo",
      testimonials: [
        {
          quote:
            "El asistente de IA inmobiliaria que N3uralia desarrolló nos ayuda a conectar propiedades con clientes de manera más efectiva y eficiente.",
          author: "Juan Navarro",
          role: "Propietario, Sur-Realista",
          company: "Sur-Realista",
          image: "/testimonials/juan-navarro.jpg",
        },
        {
          quote:
            "El sistema de IA de N3uralia optimizó nuestros procesos de consultoría ambiental. El análisis automatizado nos ahorra horas de trabajo manual cada día.",
          author: "Sebastian Puelma",
          role: "Propietario, Ecosuelolab",
          company: "Ecosuelolab",
          image: "/testimonials/sebastian-puelma.jpg",
        },
        {
          quote:
            "El sistema de automatización de coaching profesional que N3uralia construyó nos ayuda a proporcionar orientación personalizada 24/7.",
          author: "Joaquín Covarrubias",
          role: "Fundador, Despega Tu Carrera",
          company: "Despega Tu Carrera",
          image: "/testimonials/juan-francisco-pumpkin.jpg",
        },
      ],
      metrics: [
        { number: "10x", label: "Despliegues Más Rápidos" },
        { number: "80%", label: "Reducción de Costos" },
        { number: "99.99%", label: "Disponibilidad" },
        { number: "50+", label: "Clientes Empresariales" },
      ],
    },
  }

  const t = content[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center text-slate-900 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {t.title}
        </motion.h2>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {t.testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-slate-300 mb-4" />
              <p className="text-slate-700 mb-6 italic">{testimonial.quote}</p>
              <div className="pt-6 border-t border-slate-200 flex items-center gap-3">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{testimonial.author}</p>
                  <p className="text-xs text-slate-600">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {t.metrics.map((metric, i) => (
            <motion.div key={i} variants={itemVariants} className="text-center">
              <motion.div
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: i * 0.1 }}
              >
                {metric.number}
              </motion.div>
              <p className="text-slate-600 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
