"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Play, MessageCircle, Mail, Brain, Zap, Shield } from "lucide-react"

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Enterprise AI Solutions",
      title: "Transform Your Business with",
      titleHighlight: "Intelligent AI Agents",
      subtitle:
        "Automate customer service, streamline operations, and scale your business with our advanced AI technology.",
      description:
        "Join 50+ companies that have revolutionized their operations with our custom AI agents. Available 24/7 in Spanish and English.",
      cta: {
        whatsapp: "Start with WhatsApp",
        email: "Contact Sales",
        demo: "Watch Demo",
      },
      stats: [
        { number: "95%", label: "Customer Satisfaction" },
        { number: "70%", label: "Cost Reduction" },
        { number: "24/7", label: "Availability" },
      ],
      features: [
        { icon: Brain, text: "Advanced AI Training" },
        { icon: Zap, text: "Real-time Processing" },
        { icon: Shield, text: "Enterprise Security" },
      ],
    },
    es: {
      badge: "Soluciones de IA Empresarial",
      title: "Transforma Tu Negocio con",
      titleHighlight: "Agentes de IA Inteligentes",
      subtitle:
        "Automatiza el servicio al cliente, optimiza operaciones y escala tu negocio con nuestra tecnología de IA avanzada.",
      description:
        "Únete a 50+ empresas que han revolucionado sus operaciones con nuestros agentes de IA personalizados. Disponible 24/7 en español e inglés.",
      cta: {
        whatsapp: "Comenzar con WhatsApp",
        email: "Contactar Ventas",
        demo: "Ver Demo",
      },
      stats: [
        { number: "95%", label: "Satisfacción del Cliente" },
        { number: "70%", label: "Reducción de Costos" },
        { number: "24/7", label: "Disponibilidad" },
      ],
      features: [
        { icon: Brain, text: "Entrenamiento Avanzado de IA" },
        { icon: Zap, text: "Procesamiento en Tiempo Real" },
        { icon: Shield, text: "Seguridad Empresarial" },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <Badge className="bg-black text-white border-0 mb-6 text-sm font-medium">{t.badge}</Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
                {t.title}
                <br />
                <span className="font-bold">{t.titleHighlight}</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 leading-relaxed">{t.subtitle}</p>

              <p className="text-lg text-gray-500 font-light mb-10 leading-relaxed">{t.description}</p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-semibold" asChild>
                  <a
                    href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20comenzar%20con%20sus%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t.cta.whatsapp}
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold bg-transparent"
                  asChild
                >
                  <a href="mailto:contact@n3uralia.com">
                    <Mail className="w-5 h-5 mr-2" />
                    {t.cta.email}
                  </a>
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                {t.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Video/Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                        <DialogTrigger asChild>
                          <Button
                            size="lg"
                            className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                            variant="outline"
                          >
                            <Play className="w-6 h-6 mr-2" />
                            {t.cta.demo}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                            <p className="text-white text-lg">Demo video would be embedded here</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="absolute top-4 left-10 w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="absolute top-4 left-16 w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 pt-16 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {t.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-light text-black mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
