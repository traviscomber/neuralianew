"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, Mail, Phone, MapPin, Clock, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { language } = useLanguage()

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: language === "en" ? "Instant messaging support" : "Soporte por mensajería instantánea",
      action: language === "en" ? "Chat Now" : "Chatear Ahora",
      href: "https://wa.me/56940946660",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      icon: Mail,
      title: language === "en" ? "Email" : "Correo",
      description: language === "en" ? "Send us a detailed message" : "Envíanos un mensaje detallado",
      action: language === "en" ? "Send Email" : "Enviar Correo",
      href: "mailto:contact@n3uralia.com",
      color: "bg-gray-700 hover:bg-gray-800",
    },
    {
      icon: Phone,
      title: language === "en" ? "Phone" : "Teléfono",
      description: language === "en" ? "Direct phone consultation" : "Consulta telefónica directa",
      action: language === "en" ? "Call Now" : "Llamar Ahora",
      href: "tel:+56940946660",
      color: "bg-gray-600 hover:bg-gray-700",
    },
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: language === "en" ? "Headquarters" : "Sede Principal",
      details: "Santiago, Chile",
    },
    {
      icon: Clock,
      title: language === "en" ? "Business Hours" : "Horario Comercial",
      details: language === "en" ? "24/7 Support Available" : "Soporte 24/7 Disponible",
    },
    {
      icon: Users,
      title: language === "en" ? "Response Time" : "Tiempo de Respuesta",
      details: language === "en" ? "< 2 hours" : "< 2 horas",
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge className="bg-gray-100 text-gray-700 border-0 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 lg:mb-8 font-medium">
            {language === "en" ? "Contact Us" : "Contáctanos"}
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            {language === "en" ? "Ready to Start" : "Listo para Comenzar"}
            <br />
            <span className="font-bold text-black">{language === "en" ? "Your Project?" : "Tu Proyecto?"}</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {language === "en"
              ? "Get in touch with our team to discuss your AI project and receive a custom solution proposal."
              : "Ponte en contacto con nuestro equipo para discutir tu proyecto de IA y recibir una propuesta de solución personalizada."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10">
              {language === "en" ? "Get in Touch" : "Ponte en Contacto"}
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 sm:gap-6">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                            <method.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                          </div>
                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                              {method.title}
                            </h4>
                            <p className="text-sm sm:text-base text-gray-600">{method.description}</p>
                          </div>
                        </div>
                        <Button
                          onClick={() => window.open(method.href, "_blank")}
                          className={`${method.color} text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base transition-all duration-300 hover:scale-105`}
                        >
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10">
              {language === "en" ? "Office Information" : "Información de Oficina"}
            </h3>

            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              {officeInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 sm:gap-6"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">{info.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl">
              <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6">
                  {language === "en" ? "Start Your AI Journey" : "Comienza Tu Viaje de IA"}
                </h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  {language === "en"
                    ? "Join hundreds of businesses that have transformed their operations with our AI solutions."
                    : "Únete a cientos de empresas que han transformado sus operaciones con nuestras soluciones de IA."}
                </p>
                <Button
                  size="lg"
                  onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                  className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  {language === "en" ? "Get Started Today" : "Comenzar Hoy"}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
