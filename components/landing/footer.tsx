"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Twitter, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/n3uralia-logo.png" alt="N3uralia Logo" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold">N3uralia</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Transformamos empresas con agentes de IA conversacional avanzados. Automatización inteligente para el
              futuro de tu negocio.
            </p>
            <div className="flex gap-3">
              <Button
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Agentes de IA
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Integración WhatsApp
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  APIs Personalizadas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Consultoría IA
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Soporte 24/7
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Industrias</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Finanzas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Salud
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Educación
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Agricultura
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contacto@n3uralia.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+56 9 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>WhatsApp Business</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Newsletter */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Mantente actualizado</h3>
            <p className="text-slate-300">Recibe las últimas noticias sobre IA conversacional y casos de éxito</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Tu email"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">Suscribirse</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <div className="flex flex-wrap gap-6">
            <Link href="/politicas-de-privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos-de-servicio" className="hover:text-white transition-colors">
              Términos de Servicio
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
          <p>© {currentYear} N3uralia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
