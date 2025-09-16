"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Mail, Phone, Calendar, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ContactsPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Contact Us",
      title: "Get in Touch with N3uralia",
      subtitle: "Ready to transform your business with AI? Our team is here to help you get started.",
      contactInfo: {
        address: "Santiago, Chile",
        email: "hello@n3uralia.com",
        phone: "+56 9 4444 4649",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM (CLT)",
      },
      contactMethods: [
        {
          icon: MessageCircle,
          title: "WhatsApp",
          description: "Get instant support and start your consultation",
          action: "Chat Now",
          primary: true,
        },
        {
          icon: Calendar,
          title: "Schedule Demo",
          description: "Book a personalized demo of our AI agents",
          action: "Book Now",
        },
        {
          icon: Mail,
          title: "Email Us",
          description: "Send us your questions and requirements",
          action: "Send Email",
        },
        {
          icon: Phone,
          title: "Call Us",
          description: "Speak directly with our AI specialists",
          action: "Call Now",
        },
      ],
    },
    es: {
      badge: "Contáctanos",
      title: "Ponte en Contacto con N3uralia",
      subtitle: "¿Listo para transformar tu negocio con IA? Nuestro equipo está aquí para ayudarte a comenzar.",
      contactInfo: {
        address: "Santiago, Chile",
        email: "hello@n3uralia.com",
        phone: "+56 9 4444 4649",
        hours: "Lunes - Viernes: 9:00 AM - 6:00 PM (CLT)",
      },
      contactMethods: [
        {
          icon: MessageCircle,
          title: "WhatsApp",
          description: "Obtén soporte instantáneo e inicia tu consulta",
          action: "Chatear Ahora",
          primary: true,
        },
        {
          icon: Calendar,
          title: "Programar Demo",
          description: "Reserva una demo personalizada de nuestros agentes de IA",
          action: "Reservar Ahora",
        },
        {
          icon: Mail,
          title: "Envíanos Email",
          description: "Envíanos tus preguntas y requerimientos",
          action: "Enviar Email",
        },
        {
          icon: Phone,
          title: "Llámanos",
          description: "Habla directamente con nuestros especialistas en IA",
          action: "Llamar Ahora",
        },
      ],
    },
  }

  const t = content[language]

  const whatsappMessage =
    language === "es"
      ? "Hola, me interesa conocer más sobre las soluciones de IA de N3uralia"
      : "Hello, I'm interested in learning more about N3uralia's AI solutions"

  const whatsappUrl = `https://wa.me/56944444649?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 border-gray-200"
              >
                {t.badge}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t.title}</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {language === "es" ? "Formas de Contacto" : "Contact Methods"}
                </h2>
                <div className="grid gap-6">
                  {t.contactMethods.map((method, index) => (
                    <Card
                      key={index}
                      className={`border-2 transition-all duration-300 hover:shadow-lg ${
                        method.primary ? "border-blue-200 bg-blue-50" : "border-gray-100 hover:border-blue-200"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              method.primary ? "bg-blue-600" : "bg-gray-100"
                            }`}
                          >
                            <method.icon className={`h-6 w-6 ${method.primary ? "text-white" : "text-gray-600"}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                            <p className="text-gray-600 mb-4">{method.description}</p>
                            <Button
                              variant={method.primary ? "default" : "outline"}
                              size="sm"
                              className={method.primary ? "bg-blue-600 hover:bg-blue-700" : ""}
                              asChild
                            >
                              {method.title === "WhatsApp" ? (
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                  {method.action}
                                </a>
                              ) : (
                                <button>{method.action}</button>
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {language === "es" ? "Información de Contacto" : "Contact Information"}
                </h2>
                <Card className="border-0 shadow-sm bg-gray-50">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-gray-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {language === "es" ? "Dirección" : "Address"}
                          </h3>
                          <p className="text-gray-600">{t.contactInfo.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-gray-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                          <a href={`mailto:${t.contactInfo.email}`} className="text-blue-600 hover:text-blue-700">
                            {t.contactInfo.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-gray-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {language === "es" ? "Teléfono" : "Phone"}
                          </h3>
                          <a href={`tel:${t.contactInfo.phone}`} className="text-blue-600 hover:text-blue-700">
                            {t.contactInfo.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-gray-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {language === "es" ? "Horarios" : "Business Hours"}
                          </h3>
                          <p className="text-gray-600">{t.contactInfo.hours}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
