"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Get Started Today",
      subtitle: "Ready to transform your business with AI? Let's talk.",
      description:
        "Schedule a free consultation to discuss your specific needs and discover how our AI solutions can drive your business forward.",
      contact: {
        whatsapp: "WhatsApp",
        phone: "Call Us",
        email: "Email Us",
      },
      office: {
        title: "Our Office",
        address: "Santiago, Chile",
        hours: "Mon - Fri: 9:00 AM - 6:00 PM (CLT)",
      },
    },
    es: {
      title: "Comienza Hoy",
      subtitle: "¿Listo para transformar tu negocio con IA? Hablemos.",
      description:
        "Agenda una consulta gratuita para discutir tus necesidades específicas y descubrir cómo nuestras soluciones de IA pueden impulsar tu negocio.",
      contact: {
        whatsapp: "WhatsApp",
        phone: "Llamar",
        email: "Email",
      },
      office: {
        title: "Nuestra Oficina",
        address: "Santiago, Chile",
        hours: "Lun - Vie: 9:00 AM - 6:00 PM (CLT)",
      },
    },
  }

  const t = content[language]

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t.subtitle}</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Contact Methods</h3>

            <Button className="w-full bg-black hover:bg-gray-800 text-white p-6 h-auto justify-start" asChild>
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20agendar%20una%20consulta%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-4" />
                <div className="text-left">
                  <div className="font-semibold">{t.contact.whatsapp}</div>
                  <div className="text-sm opacity-80">+56 9 4094 6660</div>
                </div>
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full border-2 border-black text-black hover:bg-black hover:text-white p-6 h-auto justify-start bg-transparent"
              asChild
            >
              <a href="tel:+56940946660">
                <Phone className="w-6 h-6 mr-4" />
                <div className="text-left">
                  <div className="font-semibold">{t.contact.phone}</div>
                  <div className="text-sm opacity-80">+56 9 4094 6660</div>
                </div>
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full border-2 border-black text-black hover:bg-black hover:text-white p-6 h-auto justify-start bg-transparent"
              asChild
            >
              <a href="mailto:contacto@n3uralia.com?subject=Consulta%20sobre%20soluciones%20de%20IA">
                <Mail className="w-6 h-6 mr-4" />
                <div className="text-left">
                  <div className="font-semibold">{t.contact.email}</div>
                  <div className="text-sm opacity-80">contacto@n3uralia.com</div>
                </div>
              </a>
            </Button>
          </div>

          {/* Office Info */}
          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-black mb-6">{t.office.title}</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <div className="font-semibold text-black">Address</div>
                  <div className="text-gray-600">{t.office.address}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <div className="font-semibold text-black">Business Hours</div>
                  <div className="text-gray-600">{t.office.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
