"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Mail, Phone, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Get Started Today",
      title: "Ready to Transform Your Business with AI?",
      subtitle:
        "Join hundreds of companies already using N3uralia to automate their operations and boost customer satisfaction.",
      cta: "Start Your AI Journey",
      schedule: "Schedule a Demo",
      email: "Send Email",
      call: "Call Us",
      contactMethods: [
        {
          icon: MessageCircle,
          title: "WhatsApp",
          description: "Get instant support and start your consultation",
          action: "Chat Now",
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
      badge: "Comienza Hoy",
      title: "¿Listo para Transformar Tu Negocio con IA?",
      subtitle:
        "Únete a cientos de empresas que ya usan N3uralia para automatizar sus operaciones y mejorar la satisfacción del cliente.",
      cta: "Inicia Tu Viaje con IA",
      schedule: "Programar Demo",
      email: "Enviar Email",
      call: "Llamanos",
      contactMethods: [
        {
          icon: MessageCircle,
          title: "WhatsApp",
          description: "Obtén soporte instantáneo e inicia tu consulta",
          action: "Chatear Ahora",
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
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 border-blue-200"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">{t.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.cta}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Calendar className="mr-2 h-5 w-5" />
              {t.schedule}
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {t.contactMethods.map((method, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
