"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Get in Touch",
      title: "Ready to Transform Your Business with AI?",
      subtitle: "Contact our team of AI experts to discuss your project and get a personalized solution.",
      whatsappTitle: "WhatsApp",
      whatsappDesc: "Get instant support and quick answers",
      whatsappButton: "Chat on WhatsApp",
      phoneTitle: "Phone",
      phoneDesc: "Speak directly with our AI specialists",
      phoneButton: "Call Now",
      emailTitle: "Email",
      emailDesc: "Send us your detailed requirements",
      emailButton: "Send Email",
      officeTitle: "Office",
      officeDesc: "Visit our headquarters in Santiago",
      officeAddress: "Santiago, Chile",
      hoursTitle: "Business Hours",
      hoursDesc: "Monday to Friday, 9:00 AM - 6:00 PM (CLT)",
      consultationButton: "Schedule Free Consultation",
    },
    es: {
      badge: "Contáctanos",
      title: "¿Listo para Transformar Tu Negocio con IA?",
      subtitle:
        "Contacta a nuestro equipo de expertos en IA para discutir tu proyecto y obtener una solución personalizada.",
      whatsappTitle: "WhatsApp",
      whatsappDesc: "Obtén soporte instantáneo y respuestas rápidas",
      whatsappButton: "Chatear en WhatsApp",
      phoneTitle: "Teléfono",
      phoneDesc: "Habla directamente con nuestros especialistas en IA",
      phoneButton: "Llamar Ahora",
      emailTitle: "Email",
      emailDesc: "Envíanos tus requerimientos detallados",
      emailButton: "Enviar Email",
      officeTitle: "Oficina",
      officeDesc: "Visita nuestra sede en Santiago",
      officeAddress: "Santiago, Chile",
      hoursTitle: "Horario de Atención",
      hoursDesc: "Lunes a Viernes, 9:00 AM - 6:00 PM (CLT)",
      consultationButton: "Agendar Consulta Gratuita",
    },
  }

  const t = content[language]

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      language === "es"
        ? "Hola N3uralia, me interesa conocer más sobre sus soluciones de IA para mi empresa"
        : "Hello N3uralia, I'm interested in learning more about your AI solutions for my business",
    )
    window.open(`https://wa.me/56940946660?text=${message}`, "_blank")
  }

  const handlePhone = () => {
    window.open("tel:+56940946660", "_self")
  }

  const handleEmail = () => {
    const subject = encodeURIComponent(
      language === "es" ? "Consulta sobre Soluciones de IA" : "Inquiry about AI Solutions",
    )
    const body = encodeURIComponent(
      language === "es"
        ? "Hola, me interesa conocer más sobre las soluciones de IA de N3uralia para mi empresa."
        : "Hello, I'm interested in learning more about N3uralia's AI solutions for my business.",
    )
    window.open(`mailto:info@n3uralia.com?subject=${subject}&body=${body}`, "_self")
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* WhatsApp */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-green-50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.whatsappTitle}</h3>
              <p className="text-sm text-gray-600 mb-4">{t.whatsappDesc}</p>
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 text-white w-full">
                {t.whatsappButton}
              </Button>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-blue-50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.phoneTitle}</h3>
              <p className="text-sm text-gray-600 mb-4">{t.phoneDesc}</p>
              <Button onClick={handlePhone} className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                {t.phoneButton}
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-purple-50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.emailTitle}</h3>
              <p className="text-sm text-gray-600 mb-4">{t.emailDesc}</p>
              <Button onClick={handleEmail} className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                {t.emailButton}
              </Button>
            </CardContent>
          </Card>

          {/* Office */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.officeTitle}</h3>
              <p className="text-sm text-gray-600 mb-4">{t.officeDesc}</p>
              <p className="text-sm font-medium text-orange-600">{t.officeAddress}</p>
            </CardContent>
          </Card>
        </div>

        {/* Business Hours */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-3">
            <Clock className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">{t.hoursTitle}:</span>
            <span className="text-gray-600">{t.hoursDesc}</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t.consultationButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
