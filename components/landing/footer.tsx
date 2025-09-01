"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MessageCircle, Mail, Phone, MapPin, Linkedin, Twitter, Github, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image src="/n3uralia-logo-new.png" alt="N3uralia" width={120} height={40} className="h-8 w-auto" />
            </div>
            <p className="text-slate-300 leading-relaxed">
              Transformamos empresas con agentes de IA conversacional que automatizan procesos y mejoran la experiencia
              del cliente.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#use-cases" className="text-slate-300 hover:text-white transition-colors">
                  Agentes de Atención al Cliente
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="text-slate-300 hover:text-white transition-colors">
                  Automatización de Ventas
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="text-slate-300 hover:text-white transition-colors">
                  Soporte Técnico IA
                </Link>
              </li>
              <li>
                <Link href="#technical-features" className="text-slate-300 hover:text-white transition-colors">
                  Integración de Sistemas
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-slate-300 hover:text-white transition-colors">
                  Consultoría Especializada
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#team" className="text-slate-300 hover:text-white transition-colors">
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-slate-300 hover:text-white transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-slate-300 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/terminos-de-servicio" className="text-slate-300 hover:text-white transition-colors">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="/politicas-de-privacidad" className="text-slate-300 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">+56 9 4094 6660</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">contacto@n3uralia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">Santiago, Chile</span>
              </div>
            </div>

            <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
              <a
                href="https://wa.me/56940946660?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20agentes%20de%20IA%20conversacional"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Newsletter */}
        <div className="mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Mantente actualizado</h3>
            <p className="text-slate-300 mb-4">Recibe las últimas noticias sobre IA y casos de éxito</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm">© {currentYear} N3uralia. Todos los derechos reservados.</div>
          <div className="flex space-x-6 text-sm">
            <Link href="/terminos-de-servicio" className="text-slate-400 hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="/politicas-de-privacidad" className="text-slate-400 hover:text-white transition-colors">
              Privacidad
            </Link>
            <span className="text-slate-400">Hecho con ❤️ en Chile</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
