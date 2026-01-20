"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Ready to Transform Your Business with AI?",
      subtitle:
        "Join hundreds of companies already using N3uralia to automate processes, enhance customer experience, and drive growth.",
      primaryButton: "Start Your AI Journey",
      secondaryButton: "Contact Our Experts",
      contacts: [
        {
          icon: MessageCircle,
          title: "WhatsApp Support",
          value: "+56 9 9382 6127",
          link: "https://wa.me/56993826127",
        },
        {
          icon: Mail,
          title: "Email Us",
          value: "hello@n3uralia.com",
          link: "mailto:hello@n3uralia.com",
        },
        {
          icon: Phone,
          title: "Call Us",
          value: "+56 9 9382 6127",
          link: "tel:+56993826127",
        },
        {
          icon: MapPin,
          title: "Visit Our Office",
          value: "Santiago, Chile",
          link: "https://maps.google.com/?q=Santiago,Chile",
        },
      ],
    },
    es: {
      title: "¿Listo para Transformar tu Negocio con IA?",
      subtitle:
        "Únete a cientos de empresas que ya usan N3uralia para automatizar procesos, mejorar la experiencia del cliente e impulsar el crecimiento.",
      primaryButton: "Comenzar tu Viaje con IA",
      secondaryButton: "Contactar Nuestros Expertos",
      contacts: [
        {
          icon: MessageCircle,
          title: "Soporte WhatsApp",
          value: "+56 9 9382 6127",
          link: "https://wa.me/56993826127",
        },
        {
          icon: Mail,
          title: "Envíanos un Email",
          value: "hello@n3uralia.com",
          link: "mailto:hello@n3uralia.com",
        },
        {
          icon: Phone,
          title: "Llámanos",
          value: "+56 9 9382 6127",
          link: "tel:+56993826127",
        },
        {
          icon: MapPin,
          title: "Visita Nuestra Oficina",
          value: "Santiago, Chile",
          link: "https://maps.google.com/?q=Santiago,Chile",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="bg-background py-20 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{t.title}</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">{t.subtitle}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              onClick={() => (window.location.href = "/dashboard")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.primaryButton}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
              onClick={() => (window.location.href = "/contacts")}
            >
              <Mail className="w-5 h-5 mr-2" />
              {t.secondaryButton}
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {t.contacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <div key={index} className="text-center group">
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-card border border-border rounded-full group-hover:bg-muted transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {contact.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {contact.value}
                  </p>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
