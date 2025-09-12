"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null)
  const { language } = useLanguage()

  const contactMethods = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: language === "en" ? "Instant Response" : "Respuesta Instantánea",
      description:
        language === "en" ? "Get immediate answers to your questions" : "Obtén respuestas inmediatas a tus preguntas",
      action: language === "en" ? "Chat Now" : "Chatear Ahora",
      href: "https://wa.me/56940946660",
      gradient: "from-green-500 to-green-600",
      response: "< 5 min",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email",
      subtitle: language === "en" ? "Detailed Consultation" : "Consulta Detallada",
      description:
        language === "en" ? "Send us your project requirements" : "Envíanos los requerimientos de tu proyecto",
      action: language === "en" ? "Send Email" : "Enviar Email",
      href: "mailto:contact@n3uralia.com",
      gradient: "from-blue-500 to-blue-600",
      response: "< 2 hours",
    },
    {
      id: "call",
      icon: Phone,
      title: language === "en" ? "Phone Call" : "Llamada",
      subtitle: language === "en" ? "Direct Consultation" : "Consulta Directa",
      description: language === "en" ? "Schedule a call with our experts" : "Agenda una llamada con nuestros expertos",
      action: language === "en" ? "Schedule Call" : "Agendar Llamada",
      href: "tel:+56940946660",
      gradient: "from-purple-500 to-purple-600",
      response: "Same day",
    },
  ]

  const companyInfo = [
    {
      icon: MapPin,
      label: language === "en" ? "Location" : "Ubicación",
      value: "Santiago, Chile",
    },
    {
      icon: Clock,
      label: language === "en" ? "Business Hours" : "Horario",
      value: "24/7 Support",
    },
    {
      icon: Zap,
      label: language === "en" ? "Response Time" : "Tiempo Respuesta",
      value: "< 5 minutes",
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 text-sm px-6 py-2 rounded-full">
            {language === "en" ? "Get Started Today" : "Comienza Hoy"}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            {language === "en" ? "Ready to Build?" : "¿Listo para Construir?"}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Let's discuss your project and create something amazing together"
              : "Hablemos de tu proyecto y creemos algo increíble juntos"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              {language === "en" ? "Choose Your Preferred Method" : "Elige tu Método Preferido"}
            </h3>

            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredMethod(method.id)}
                onHoverEnd={() => setHoveredMethod(null)}
              >
                <Card className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-6 relative">
                    {/* Gradient Background on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredMethod === method.id ? 0.1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-br ${method.gradient} rounded-2xl`}
                    />

                    <div className="flex items-start gap-4 relative z-10">
                      {/* Icon */}
                      <motion.div
                        animate={{
                          scale: hoveredMethod === method.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          hoveredMethod === method.id ? `bg-gradient-to-br ${method.gradient}` : "bg-slate-700"
                        } transition-all duration-300`}
                      >
                        <method.icon
                          className={`w-7 h-7 ${
                            hoveredMethod === method.id ? "text-white" : "text-slate-300"
                          } transition-colors duration-300`}
                        />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-white">{method.title}</h4>
                          <Badge className="bg-slate-700 text-slate-300 border-slate-600 text-xs">
                            {method.response}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-slate-400 mb-2">{method.subtitle}</p>
                        <p className="text-slate-300 mb-4 leading-relaxed">{method.description}</p>

                        <Button
                          className={`w-full font-medium transition-all duration-300 ${
                            hoveredMethod === method.id
                              ? `bg-gradient-to-r ${method.gradient} text-white hover:shadow-lg border-0`
                              : "bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600"
                          }`}
                          onClick={() => window.open(method.href, "_blank")}
                        >
                          {method.action}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Company Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Company Info Card */}
            <Card className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                {language === "en" ? "Company Information" : "Información de la Empresa"}
              </h3>
              <div className="space-y-4">
                {companyInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-slate-300" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 font-medium">{info.label}</div>
                      <div className="text-white font-semibold">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                {language === "en" ? "Why Choose N3uralia?" : "¿Por qué Elegir N3uralia?"}
              </h3>
              <div className="space-y-4">
                {[
                  language === "en" ? "50+ Projects Delivered" : "50+ Proyectos Entregados",
                  language === "en" ? "95% Client Satisfaction" : "95% Satisfacción del Cliente",
                  language === "en" ? "24/7 Technical Support" : "Soporte Técnico 24/7",
                  language === "en" ? "ISO 27001 Certified" : "Certificado ISO 27001",
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 font-medium">{stat}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-500/10 border border-red-500/30 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-bold text-white">
                  {language === "en" ? "Urgent Project?" : "¿Proyecto Urgente?"}
                </h4>
              </div>
              <p className="text-slate-300 mb-4 text-sm">
                {language === "en"
                  ? "Need immediate assistance? Our emergency line is available 24/7"
                  : "¿Necesitas asistencia inmediata? Nuestra línea de emergencia está disponible 24/7"}
              </p>
              <Button
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium"
                onClick={() => window.open("https://wa.me/56940946660?text=URGENT", "_blank")}
              >
                <Phone className="w-4 h-4 mr-2" />
                {language === "en" ? "Emergency Contact" : "Contacto de Emergencia"}
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
