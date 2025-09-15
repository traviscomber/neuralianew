"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Get Started Today",
      title: "Ready to Transform Your Business with AI?",
      subtitle:
        "Join hundreds of companies already using N3uralia to automate processes, enhance customer experience, and drive growth.",
      cta: "Start Your AI Journey",
      contact: "Contact Our Experts",
      contactInfo: {
        whatsapp: "WhatsApp Support",
        email: "Email Us",
        phone: "Call Us",
        address: "Visit Our Office",
      },
      details: {
        email: "hello@n3uralia.com",
        phone: "+56 9 4444 4649",
        address: "Santiago, Chile",
      },
    },
    es: {
      badge: "Comienza Hoy",
      title: "¿Listo para Transformar Tu Negocio con IA?",
      subtitle:
        "Únete a cientos de empresas que ya usan N3uralia para automatizar procesos, mejorar la experiencia del cliente e impulsar el crecimiento.",
      cta: "Inicia Tu Viaje con IA",
      contact: "Contacta Nuestros Expertos",
      contactInfo: {
        whatsapp: "Soporte WhatsApp",
        email: "Envíanos un Email",
        phone: "Llámanos",
        address: "Visita Nuestra Oficina",
      },
      details: {
        email: "hello@n3uralia.com",
        phone: "+56 9 4444 4649",
        address: "Santiago, Chile",
      },
    },
  }

  const t = content[language]

  const whatsappMessage =
    language === "es"
      ? "Hola, me interesa conocer más sobre las soluciones de IA de N3uralia"
      : "Hello, I'm interested in learning more about N3uralia's AI solutions"

  const whatsappUrl = `https://wa.me/56944444649?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-white/10 text-white border-white/20"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.title}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">{t.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.cta}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <a href={`mailto:${t.details.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                {t.contact}
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">{t.contactInfo.whatsapp}</h3>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.details.phone}
            </a>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">{t.contactInfo.email}</h3>
            <a href={`mailto:${t.details.email}`} className="text-gray-300 hover:text-white transition-colors">
              {t.details.email}
            </a>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">{t.contactInfo.phone}</h3>
            <a href={`tel:${t.details.phone}`} className="text-gray-300 hover:text-white transition-colors">
              {t.details.phone}
            </a>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">{t.contactInfo.address}</h3>
            <span className="text-gray-300">{t.details.address}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
