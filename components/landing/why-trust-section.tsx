"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { Settings, Wrench } from "lucide-react"

export function WhyTrustSection() {
  const { language } = useLanguage()

  const trustFeatures = [
    {
      icon: Settings,
      title: language === "en" ? "24/7 Support" : "Soporte 24/7",
      description: language === "en" ? "Round-the-clock assistance" : "Asistencia las 24 horas",
    },
    {
      title: language === "en" ? "Enterprise Security" : "Seguridad Empresarial",
      description: language === "en" ? "ISO certified security standards" : "Estándares de seguridad certificados ISO",
      hasISOLogo: true,
    },
    {
      icon: Wrench,
      title: language === "en" ? ">100 Projects Deployed" : ">100 Proyectos Desplegados",
      description: language === "en" ? "Proven track record" : "Historial comprobado",
    },
  ]

  const techStack = [
    { name: "Redis", logo: "/tech-icons/redis-new-logo.png" },
    { name: "JavaScript", logo: "/tech-icons/js-logo.png" },
    { name: "N8n", logo: "/tech-icons/n8n-new-logo.png" },
    { name: "Next.js", logo: "/tech-icons/nextjs-logo.png" },
    { name: "Python", logo: "/tech-icons/python-logo.png" },
    { name: "Supabase", logo: "/tech-icons/supabase-new-logo.png" },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Cosmic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/cosmic-background.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light text-white mb-4">
            {language === "en" ? "Why Trust?" : "¿Por Qué Confiar?"}
          </h2>
        </motion.div>

        {/* Trust Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {feature.hasISOLogo ? (
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src="/icons/iso-logo.png"
                      alt="ISO Certification Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <feature.icon className="w-16 h-16 text-gray-600" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mb-3 group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-white font-light opacity-80 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
