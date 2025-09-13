"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react"

export function ContactSection() {
  const { language } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      title: language === "en" ? "Email" : "Correo",
      value: "contact@n3uralia.com",
      href: "mailto:contact@n3uralia.com",
    },
    {
      icon: Phone,
      title: language === "en" ? "Phone" : "Teléfono",
      value: "+56 9 4094 6660",
      href: "tel:+56940946660",
    },
    {
      icon: MapPin,
      title: language === "en" ? "Location" : "Ubicación",
      value: "Santiago, Chile",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-gray-700 mb-8">{language === "en" ? "Contact" : "Contacto"}</h2>
          <p className="text-xl text-blue-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Ready to transform your business with AI? Get in touch with our team."
              : "¿Listo para transformar tu negocio con IA? Ponte en contacto con nuestro equipo."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border border-gray-200 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-gray-800 mb-8">
                  {language === "en" ? "Send us a message" : "Envíanos un mensaje"}
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                        {language === "en" ? "Name" : "Nombre"}
                      </Label>
                      <Input
                        id="name"
                        className="border-2 border-gray-200 focus:border-gray-400 rounded-xl h-12"
                        placeholder={language === "en" ? "Your name" : "Tu nombre"}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                        {language === "en" ? "Email" : "Correo"}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="border-2 border-gray-200 focus:border-gray-400 rounded-xl h-12"
                        placeholder={language === "en" ? "your@email.com" : "tu@correo.com"}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium mb-2 block">
                      {language === "en" ? "Subject" : "Asunto"}
                    </Label>
                    <Input
                      id="subject"
                      className="border-2 border-gray-200 focus:border-gray-400 rounded-xl h-12"
                      placeholder={language === "en" ? "How can we help?" : "¿Cómo podemos ayudar?"}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                      {language === "en" ? "Message" : "Mensaje"}
                    </Label>
                    <Textarea
                      id="message"
                      className="border-2 border-gray-200 focus:border-gray-400 rounded-xl min-h-[120px] resize-none"
                      placeholder={
                        language === "en" ? "Tell us about your project..." : "Cuéntanos sobre tu proyecto..."
                      }
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-xl h-12"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {language === "en" ? "Send Message" : "Enviar Mensaje"}
                    </Button>
                    <Button
                      type="button"
                      onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                      className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl h-12"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-8">
                {language === "en" ? "Get in touch" : "Ponte en contacto"}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                      <info.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.title}</p>
                      <a href={info.href} className="text-gray-800 font-medium hover:text-gray-600 transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h4 className="text-xl font-medium text-gray-800 mb-4">
                {language === "en" ? "Office Hours" : "Horario de Oficina"}
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">{language === "en" ? "Monday - Friday:" : "Lunes - Viernes:"}</span>{" "}
                  9:00 AM - 6:00 PM (CLT)
                </p>
                <p>
                  <span className="font-medium">{language === "en" ? "Saturday:" : "Sábado:"}</span> 10:00 AM - 2:00 PM
                  (CLT)
                </p>
                <p>
                  <span className="font-medium">{language === "en" ? "Sunday:" : "Domingo:"}</span>{" "}
                  {language === "en" ? "Closed" : "Cerrado"}
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-medium mb-4">
                {language === "en" ? "Emergency Support" : "Soporte de Emergencia"}
              </h4>
              <p className="text-gray-300 mb-4 font-light">
                {language === "en"
                  ? "Need urgent assistance? Our emergency support is available 24/7 for critical issues."
                  : "¿Necesitas asistencia urgente? Nuestro soporte de emergencia está disponible 24/7 para problemas críticos."}
              </p>
              <Button
                onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                className="bg-white text-gray-800 hover:bg-gray-100 font-medium px-6 py-2 rounded-xl"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {language === "en" ? "Emergency Contact" : "Contacto de Emergencia"}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
