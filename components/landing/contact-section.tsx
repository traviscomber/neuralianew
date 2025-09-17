"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Get Started Today",
      title: "Ready to Transform Your Business with AI?",
      subtitle:
        "Join hundreds of companies already using N3uralia to automate processes, enhance customer experience, and drive growth.",
      startButton: "Start Your AI Journey",
      contactButton: "Contact Our Experts",
      whatsapp: "WhatsApp Support",
      email: "Email Us",
      call: "Call Us",
      visit: "Visit Our Office",
      phone: "+56 9 4444 4649",
      emailAddress: "hello@n3uralia.com",
      location: "Santiago, Chile",
    },
    es: {
      badge: "Comienza Hoy",
      title: "¿Listo para Transformar tu Negocio con IA?",
      subtitle:
        "Únete a cientos de empresas que ya usan N3uralia para automatizar procesos, mejorar la experiencia del cliente e impulsar el crecimiento.",
      startButton: "Inicia tu Viaje con IA",
      contactButton: "Contacta a Nuestros Expertos",
      whatsapp: "Soporte WhatsApp",
      email: "Envíanos un Email",
      call: "Llámanos",
      visit: "Visita Nuestra Oficina",
      phone: "+56 9 4444 4649",
      emailAddress: "hello@n3uralia.com",
      location: "Santiago, Chile",
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded-full mb-6">
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">{t.subtitle}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              <MessageCircle className="mr-2 h-5 w-5" />
              {t.startButton}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t.contactButton}
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* WhatsApp Support */}
          <div className="flex flex-col items-center">
            <MessageCircle className="h-8 w-8 text-gray-400 mb-3" />
            <h3 className="text-white font-semibold mb-2">{t.whatsapp}</h3>
            <p className="text-gray-400">{t.phone}</p>
          </div>

          {/* Email Us */}
          <div className="flex flex-col items-center">
            <Mail className="h-8 w-8 text-gray-400 mb-3" />
            <h3 className="text-white font-semibold mb-2">{t.email}</h3>
            <p className="text-gray-400">{t.emailAddress}</p>
          </div>

          {/* Call Us */}
          <div className="flex flex-col items-center">
            <Phone className="h-8 w-8 text-gray-400 mb-3" />
            <h3 className="text-white font-semibold mb-2">{t.call}</h3>
            <p className="text-gray-400">{t.phone}</p>
          </div>

          {/* Visit Our Office */}
          <div className="flex flex-col items-center">
            <MapPin className="h-8 w-8 text-gray-400 mb-3" />
            <h3 className="text-white font-semibold mb-2">{t.visit}</h3>
            <p className="text-gray-400">{t.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
