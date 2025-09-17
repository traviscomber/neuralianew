"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  Send,
  CheckCircle,
  Zap,
  Users,
  Building,
  X,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const translations = {
  en: {
    title: "Ready to Transform Your Business?",
    subtitle: "Get in touch with our global team of AI and full-stack experts",
    formTitle: "Send us a message",
    name: "Full Name",
    email: "Email Address",
    company: "Company Name",
    message: "Tell us about your project",
    send: "Send Message",
    sending: "Sending...",
    whatsappButton: "WhatsApp Business",
    callButton: "Schedule Call",
    emailButton: "Send Email",
    contactInfo: "Contact Information",
    phone: "Phone",
    email: "Email",
    address: "Address",
    hours: "Business Hours",
    response: "Response Time",
    coverage: "Global Coverage",
    team: "Expert Team",
    locations: {
      chile: "Santiago, Chile",
      singapore: "Singapore",
      russia: "Moscow, Russia",
    },
    features: {
      response: "< 1 hour response",
      coverage: "24/7 global support",
      team: "35+ specialists",
    },
    success: "Message sent successfully! We'll get back to you within 1 hour.",
    error: "Failed to send message. Please try WhatsApp instead.",
  },
  es: {
    title: "¿Listo para Transformar tu Negocio?",
    subtitle: "Conecta con nuestro equipo global de expertos en IA y desarrollo full-stack",
    formTitle: "Envíanos un mensaje",
    name: "Nombre Completo",
    email: "Correo Electrónico",
    company: "Nombre de la Empresa",
    message: "Cuéntanos sobre tu proyecto",
    send: "Enviar Mensaje",
    sending: "Enviando...",
    whatsappButton: "WhatsApp Business",
    callButton: "Programar Llamada",
    emailButton: "Enviar Email",
    contactInfo: "Información de Contacto",
    phone: "Teléfono",
    email: "Email",
    address: "Dirección",
    hours: "Horario de Atención",
    response: "Tiempo de Respuesta",
    coverage: "Cobertura Global",
    team: "Equipo Experto",
    locations: {
      chile: "Santiago, Chile",
      singapore: "Singapur",
      russia: "Moscú, Rusia",
    },
    features: {
      response: "Respuesta < 1 hora",
      coverage: "Soporte global 24/7",
      team: "35+ especialistas",
    },
    success: "¡Mensaje enviado exitosamente! Te responderemos en menos de 1 hora.",
    error: "Error al enviar mensaje. Por favor intenta por WhatsApp.",
  },
}

export function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", company: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === "es"
        ? `Hola N3uralia, me interesa conocer más sobre sus soluciones de IA y desarrollo full-stack para mi empresa ${formData.company || "[Empresa]"}.`
        : `Hello N3uralia, I'm interested in learning more about your AI and full-stack development solutions for my company ${formData.company || "[Company]"}.`,
    )
    window.open(`https://wa.me/56940946660?text=${message}`, "_blank")
  }

  const handleCallClick = () => {
    window.open("tel:+56940946660", "_self")
  }

  const handleEmailClick = () => {
    const subject = encodeURIComponent(
      language === "es" ? "Consulta sobre soluciones N3uralia" : "Inquiry about N3uralia solutions",
    )
    const body = encodeURIComponent(
      `${language === "es" ? "Hola," : "Hello,"}\n\n${language === "es" ? "Me interesa conocer más sobre sus soluciones." : "I'm interested in learning more about your solutions."}\n\n${language === "es" ? "Saludos," : "Best regards,"}\n${formData.name || "[Your Name]"}`,
    )
    window.open(`mailto:hello@n3uralia.com?subject=${subject}&body=${body}`, "_self")
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-slate-600 border-slate-300">
            <Globe className="w-4 h-4 mr-2" />
            {language === "es" ? "Contacto Global" : "Global Contact"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">{t.title}</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-2 border-slate-200 dark:border-slate-700">
              <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  {t.formTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {t.name}
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {t.email}
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-slate-300 dark:border-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t.company}
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-slate-300 dark:border-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t.message}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="border-slate-300 dark:border-slate-600"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-4 h-4 mr-2"
                        >
                          <Zap className="w-4 h-4" />
                        </motion.div>
                        {t.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t.send}
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5" />
                      {t.success}
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"
                    >
                      <X className="w-5 h-5" />
                      {t.error}
                    </motion.div>
                  )}
                </form>

                {/* Quick Contact Buttons */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {t.whatsappButton}
                    </Button>
                    <Button
                      onClick={handleCallClick}
                      variant="outline"
                      className="border-slate-300 dark:border-slate-600 bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {t.callButton}
                    </Button>
                    <Button
                      onClick={handleEmailClick}
                      variant="outline"
                      className="border-slate-300 dark:border-slate-600 bg-transparent"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {t.emailButton}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="shadow-xl border-2 border-slate-200 dark:border-slate-700">
              <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  {t.contactInfo}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{t.phone}</h3>
                    <p className="text-slate-600 dark:text-slate-300">+56 9 4094 6660</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{t.email}</h3>
                    <p className="text-slate-600 dark:text-slate-300">hello@n3uralia.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{t.address}</h3>
                    <div className="text-slate-600 dark:text-slate-300 space-y-1">
                      <p>{t.locations.chile}</p>
                      <p>{t.locations.singapore}</p>
                      <p>{t.locations.russia}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="text-center p-4 border-2 border-slate-200 dark:border-slate-700">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{t.response}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">{t.features.response}</p>
              </Card>

              <Card className="text-center p-4 border-2 border-slate-200 dark:border-slate-700">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{t.coverage}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">{t.features.coverage}</p>
              </Card>

              <Card className="text-center p-4 border-2 border-slate-200 dark:border-slate-700">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{t.team}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">{t.features.team}</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
