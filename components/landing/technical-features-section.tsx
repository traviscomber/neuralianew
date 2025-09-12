"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  GitBranch,
  Server,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TechnicalFeaturesSection() {
  const [currentTech, setCurrentTech] = useState(0)
  const { language } = useLanguage()

  const techStack = [
    { name: "React/Next.js", icon: Code, color: "text-blue-500" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-600" },
    { name: "AWS/Vercel", icon: Cloud, color: "text-orange-500" },
    { name: "OpenAI GPT-4", icon: Zap, color: "text-purple-500" },
    { name: "WhatsApp API", icon: Smartphone, color: "text-green-600" },
  ]

  const features = [
    {
      icon: Shield,
      title: language === "en" ? "Enterprise Security" : "Seguridad Empresarial",
      description:
        language === "en"
          ? "ISO 27001 certified infrastructure with end-to-end encryption"
          : "Infraestructura certificada ISO 27001 con encriptación extremo a extremo",
      metrics: ["99.9% Uptime", "256-bit Encryption", "SOC 2 Compliant"],
    },
    {
      icon: Zap,
      title: language === "en" ? "High Performance" : "Alto Rendimiento",
      description:
        language === "en"
          ? "Optimized systems delivering sub-second response times"
          : "Sistemas optimizados que entregan tiempos de respuesta sub-segundo",
      metrics: ["Less than 200ms Response", "Auto-scaling", "CDN Optimized"],
    },
    {
      icon: GitBranch,
      title: language === "en" ? "Scalable Architecture" : "Arquitectura Escalable",
      description:
        language === "en"
          ? "Microservices architecture designed to grow with your business"
          : "Arquitectura de microservicios diseñada para crecer con tu negocio",
      metrics: ["Microservices", "Container-based", "Load Balanced"],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="technical" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-black text-white border-0 text-sm px-6 py-2 rounded-full">
            {language === "en" ? "Technical Excellence" : "Excelencia Técnica"}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
            {language === "en" ? "Built for Scale" : "Construido para Escalar"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Enterprise-grade technology stack powering mission-critical applications"
              : "Stack tecnológico de nivel empresarial potenciando aplicaciones críticas"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Tech Stack Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">
                {language === "en" ? "Technology Stack" : "Stack Tecnológico"}
              </h3>

              {/* Current Tech Display */}
              <motion.div
                key={currentTech}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-2xl p-6 mb-4">
                  {React.createElement(techStack[currentTech].icon, {
                    className: `w-full h-full ${techStack[currentTech].color}`,
                  })}
                </div>
                <h4 className="text-xl font-bold text-black">{techStack[currentTech].name}</h4>
              </motion.div>

              {/* Tech Grid */}
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: index === currentTech ? 1.1 : 1,
                      opacity: index === currentTech ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-center p-3 rounded-xl bg-gray-50 cursor-pointer"
                    onClick={() => setCurrentTech(index)}
                  >
                    <tech.icon className={`w-8 h-8 mx-auto mb-2 ${tech.color}`} />
                    <div className="text-xs font-medium text-gray-700">{tech.name}</div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {techStack.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentTech ? "bg-black w-8" : "bg-gray-300 w-2"
                    }`}
                  />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-black mb-2">{feature.title}</h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {feature.metrics.map((metric, idx) => (
                            <Badge key={idx} className="bg-gray-100 text-gray-700 border-gray-200 font-medium">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            {language === "en" ? "Production-Ready Performance" : "Rendimiento Listo para Producción"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 font-medium">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Less than 200ms</div>
              <div className="text-gray-400 font-medium">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-400 font-medium">Daily Requests</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 font-medium">Monitoring</div>
            </div>
          </div>
          <Button
            size="lg"
            className="mt-8 bg-white hover:bg-gray-100 text-black font-medium px-8 py-4 rounded-xl"
            onClick={() => window.open("https://wa.me/56940946660", "_blank")}
          >
            {language === "en" ? "Discuss Architecture" : "Discutir Arquitectura"}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
