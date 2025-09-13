"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { language } = useLanguage()

  const contactMethods = [
    {
      icon: Phone,
      title: language === "en" ? "Phone" : "Teléfono",
      value: "+56 9 4094 6660",
      action: () => window.open("tel:+56940946660"),
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@n3uralia.com",
      action: () => window.open("mailto:contact@n3uralia.com"),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: language === "en" ? "Chat with us" : "Chatea con nosotros",
      action: () => window.open("https://wa.me/56940946660"),
    },
    {
      icon: MapPin,
      title: language === "en" ? "Location" : "Ubicación",
      value: "Santiago, Chile",
      action: () => {},
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 px-4">
            {language === "en" ? "Contact" : "Contacto"}
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            {language === "en"
              ? "Ready to transform your business with AI? Get in touch with our team."
              : "¿Listo para transformar tu negocio con IA? Ponte en contacto con nuestro equipo."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Methods - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-300 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer touch-manipulation"
                onClick={method.action}
              >
                <CardContent className="p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base">{method.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base truncate">{method.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Contact Form - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border border-gray-300 rounded-2xl">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-900 font-medium text-sm sm:text-base">
                        {language === "en" ? "First Name" : "Nombre"}
                      </Label>
                      <Input
                        id="firstName"
                        className="mt-2 border-2 border-gray-300 focus:border-gray-700 rounded-lg h-11 sm:h-12 text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-900 font-medium text-sm sm:text-base">
                        {language === "en" ? "Last Name" : "Apellido"}
                      </Label>
                      <Input
                        id="lastName"
                        className="mt-2 border-2 border-gray-300 focus:border-gray-700 rounded-lg h-11 sm:h-12 text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-900 font-medium text-sm sm:text-base">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-2 border-2 border-gray-300 focus:border-gray-700 rounded-lg h-11 sm:h-12 text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-900 font-medium text-sm sm:text-base">
                      {language === "en" ? "Company" : "Empresa"}
                    </Label>
                    <Input
                      id="company"
                      className="mt-2 border-2 border-gray-300 focus:border-gray-700 rounded-lg h-11 sm:h-12 text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-900 font-medium text-sm sm:text-base">
                      {language === "en" ? "Message" : "Mensaje"}
                    </Label>
                    <Textarea
                      id="message"
                      className="mt-2 border-2 border-gray-300 focus:border-gray-700 rounded-lg min-h-[100px] sm:min-h-[120px] text-base resize-none"
                      placeholder={
                        language === "en" ? "Tell us about your project..." : "Cuéntanos sobre tu proyecto..."
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 sm:py-4 rounded-full border-0 min-h-[48px] sm:min-h-[56px] text-base"
                  >
                    {language === "en" ? "Send Message" : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
