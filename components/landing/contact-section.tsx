"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { Mail, Phone, MessageCircle, Calendar, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const { language } = useLanguage()

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: language === "en" ? "Instant messaging" : "Mensajería instantánea",
      action: language === "en" ? "Chat Now" : "Chatear Ahora",
      onClick: () => window.open("https://wa.me/56931234567", "_blank"),
      color: "hover:bg-gray-900",
    },
    {
      icon: Mail,
      title: "Email",
      description: language === "en" ? "Send us a message" : "Envíanos un mensaje",
      action: language === "en" ? "Send Email" : "Enviar Email",
      onClick: () => window.open("mailto:contact@neuralia.ai", "_blank"),
      color: "hover:bg-gray-900",
    },
    {
      icon: Phone,
      title: language === "en" ? "Phone" : "Teléfono",
      description: language === "en" ? "Direct consultation" : "Consulta directa",
      action: language === "en" ? "Call Now" : "Llamar Ahora",
      onClick: () => window.open("tel:+56931234567", "_blank"),
      color: "hover:bg-gray-900",
    },
    {
      icon: Calendar,
      title: language === "en" ? "Schedule Meeting" : "Agendar Reunión",
      description: language === "en" ? "Book a consultation" : "Reservar una consulta",
      action: language === "en" ? "Schedule" : "Agendar",
      onClick: () => window.open("https://calendly.com/neuralia", "_blank"),
      color: "hover:bg-gray-900",
    },
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: language === "en" ? "Location" : "Ubicación",
      content: "Santiago, Chile",
    },
    {
      icon: Clock,
      title: language === "en" ? "Business Hours" : "Horario de Atención",
      content: language === "en" ? "Mon-Fri: 9:00 AM - 6:00 PM (CLT)" : "Lun-Vie: 9:00 AM - 6:00 PM (CLT)",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light text-gray-900 mb-4">
            {language === "en" ? "Get in Touch" : "Ponte en Contacto"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Ready to transform your business with AI? Let's discuss your project and explore the possibilities."
              : "¿Listo para transformar tu negocio con IA? Hablemos de tu proyecto y exploremos las posibilidades."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer">
                    <CardContent className="p-8" onClick={method.onClick}>
                      {/* Icon */}
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300`}
                        >
                          <method.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-light text-gray-900 mb-2">{method.title}</h3>

                      {/* Description */}
                      <p className="text-gray-600 font-light mb-6">{method.description}</p>

                      {/* Action Button */}
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 bg-transparent"
                      >
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Office Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                {language === "en" ? "Office Information" : "Información de Oficina"}
              </h3>

              <div className="space-y-6">
                {officeInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600 font-light">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h4 className="text-xl font-light text-gray-900 mb-4">
                {language === "en" ? "Ready to Start?" : "¿Listo para Comenzar?"}
              </h4>
              <p className="text-gray-600 font-light mb-6">
                {language === "en"
                  ? "Get a free consultation and discover how AI can transform your business."
                  : "Obtén una consulta gratuita y descubre cómo la IA puede transformar tu negocio."}
              </p>
              <Button
                onClick={() => window.open("https://wa.me/56931234567", "_blank")}
                className="w-full bg-black text-white hover:bg-gray-800 transition-colors duration-300"
              >
                {language === "en" ? "Start Free Consultation" : "Iniciar Consulta Gratuita"}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
