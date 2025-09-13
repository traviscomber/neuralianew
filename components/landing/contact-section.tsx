"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, Mail, Phone, MapPin, Clock, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t, language } = useLanguage()

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Instant messaging support",
      value: "+56 9 4094 6660",
      action: () => window.open("https://wa.me/56940946660", "_blank"),
      primary: true,
    },
    {
      icon: Mail,
      title: "Email",
      description: "Professional inquiries",
      value: "contact@n3uralia.com",
      action: () => window.open("mailto:contact@n3uralia.com", "_blank"),
      primary: false,
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Direct consultation",
      value: "+56 9 4094 6660",
      action: () => window.open("tel:+56940946660", "_blank"),
      primary: false,
    },
  ]

  const offices = [
    {
      city: "Santiago",
      country: "Chile",
      role: "Headquarters",
      timezone: "CLT (UTC-3)",
      icon: MapPin,
    },
    {
      city: "Singapore",
      country: "Singapore",
      role: "Asia-Pacific",
      timezone: "SGT (UTC+8)",
      icon: Users,
    },
    {
      city: "Moscow",
      country: "Russia",
      role: "Development Center",
      timezone: "MSK (UTC+3)",
      icon: Clock,
    },
  ]

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            {language === "en" ? "Get In Touch" : "Ponte en Contacto"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-8">{language === "en" ? "Contact Us" : "Contáctanos"}</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Ready to transform your business with AI? Our global team is here to help you get started."
              : "¿Listo para transformar tu negocio con IA? Nuestro equipo global está aquí para ayudarte a comenzar."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black mb-8">
              {language === "en" ? "Contact Methods" : "Métodos de Contacto"}
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className={`border-2 transition-all duration-300 cursor-pointer rounded-2xl ${
                    method.primary
                      ? "border-black bg-black text-white hover:bg-gray-800"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
                  }`}
                  onClick={method.action}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          method.primary ? "bg-white/20" : "bg-gray-100"
                        }`}
                      >
                        <method.icon className={`w-6 h-6 ${method.primary ? "text-white" : "text-black"}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-lg ${method.primary ? "text-white" : "text-black"}`}>
                          {method.title}
                        </h4>
                        <p className={`text-sm ${method.primary ? "text-gray-300" : "text-gray-600"}`}>
                          {method.description}
                        </p>
                        <p className={`font-medium ${method.primary ? "text-white" : "text-black"}`}>{method.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Global Offices */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black mb-8">
              {language === "en" ? "Global Presence" : "Presencia Global"}
            </h3>
            <div className="space-y-4">
              {offices.map((office, index) => (
                <Card key={index} className="bg-gray-50 border border-gray-200 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                        <office.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-black">
                          {office.city}, {office.country}
                        </h4>
                        <p className="text-gray-600 text-sm">{office.role}</p>
                        <p className="text-gray-500 text-sm font-medium">{office.timezone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Support Hours */}
            <Card className="mt-6 bg-black text-white rounded-2xl">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">
                  {language === "en" ? "24/7 Support Available" : "Soporte 24/7 Disponible"}
                </h4>
                <p className="text-gray-300 text-sm font-light">
                  {language === "en"
                    ? "Our global team ensures round-the-clock assistance"
                    : "Nuestro equipo global garantiza asistencia las 24 horas"}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gray-50 border border-gray-200 rounded-2xl max-w-2xl mx-auto">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold text-black mb-4">
                {language === "en" ? "Start Your AI Journey Today" : "Comienza tu Viaje de IA Hoy"}
              </h3>
              <p className="text-gray-600 mb-8 font-light">
                {language === "en"
                  ? "Schedule a free consultation to discuss your AI project requirements and get a custom proposal."
                  : "Programa una consulta gratuita para discutir los requisitos de tu proyecto de IA y obtener una propuesta personalizada."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                  className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {language === "en" ? "Free Consultation" : "Consulta Gratuita"}
                </Button>
                <Button
                  onClick={() => window.open("mailto:contact@n3uralia.com", "_blank")}
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-4 rounded-xl transition-all"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {language === "en" ? "Send Email" : "Enviar Email"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
