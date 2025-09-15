"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Get in Touch",
      title: "Ready to Transform Your Business with AI?",
      subtitle: "Contact our team of AI experts to discuss your specific needs and get a customized solution proposal.",
      cta: {
        primary: "Start Your AI Journey",
        secondary: "Schedule a Demo",
      },
      methods: [
        {
          icon: MessageCircle,
          title: "WhatsApp",
          description: "Get instant support and quick answers",
          contact: "+56 9 4094 6660",
          action: "Chat Now",
        },
        {
          icon: Mail,
          title: "Email",
          description: "Detailed inquiries and business proposals",
          contact: "hello@n3uralia.com",
          action: "Send Email",
        },
        {
          icon: Phone,
          title: "Phone",
          description: "Direct consultation with our experts",
          contact: "+56 9 4094 6660",
          action: "Call Now",
        },
        {
          icon: MapPin,
          title: "Location",
          description: "Visit our office for in-person meetings",
          contact: "Santiago, Chile",
          action: "Get Directions",
        },
      ],
      availability: {
        title: "Business Hours",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM (CLT)",
        note: "AI agents available 24/7 for immediate assistance",
      },
    },
    es: {
      badge: "Contáctanos",
      title: "¿Listo para Transformar Tu Negocio con IA?",
      subtitle:
        "Contacta a nuestro equipo de expertos en IA para discutir tus necesidades específicas y obtener una propuesta de solución personalizada.",
      cta: {
        primary: "Inicia Tu Viaje con IA",
        secondary: "Agendar una Demo",
      },
      methods: [
        {
          icon: MessageCircle,
          title: "WhatsApp",
          description: "Obtén soporte instantáneo y respuestas rápidas",
          contact: "+56 9 4094 6660",
          action: "Chatear Ahora",
        },
        {
          icon: Mail,
          title: "Email",
          description: "Consultas detalladas y propuestas comerciales",
          contact: "hello@n3uralia.com",
          action: "Enviar Email",
        },
        {
          icon: Phone,
          title: "Teléfono",
          description: "Consulta directa con nuestros expertos",
          contact: "+56 9 4094 6660",
          action: "Llamar Ahora",
        },
        {
          icon: MapPin,
          title: "Ubicación",
          description: "Visita nuestra oficina para reuniones presenciales",
          contact: "Santiago, Chile",
          action: "Obtener Direcciones",
        },
      ],
      availability: {
        title: "Horarios de Atención",
        hours: "Lunes - Viernes: 9:00 AM - 6:00 PM (CLT)",
        note: "Agentes de IA disponibles 24/7 para asistencia inmediata",
      },
    },
  }

  const t = content[language]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">{t.subtitle}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold" asChild>
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20comenzar%20con%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.cta.primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold bg-transparent"
            >
              {t.cta.secondary}
            </Button>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.methods.map((method, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg bg-white"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-black">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                <p className="font-semibold text-black mb-4">{method.contact}</p>
                <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold" asChild>
                  {method.icon === MessageCircle ? (
                    <a
                      href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20más%20información"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.action}
                    </a>
                  ) : method.icon === Mail ? (
                    <a href="mailto:hello@n3uralia.com">{method.action}</a>
                  ) : method.icon === Phone ? (
                    <a href="tel:+56940946660">{method.action}</a>
                  ) : (
                    <a href="https://maps.google.com/?q=Santiago,Chile" target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </a>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Business Hours */}
        <Card className="max-w-md mx-auto border-gray-200 bg-white">
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-4 text-black" />
            <h3 className="text-lg font-bold text-black mb-2">{t.availability.title}</h3>
            <p className="text-gray-700 mb-2">{t.availability.hours}</p>
            <p className="text-sm text-gray-600">{t.availability.note}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
