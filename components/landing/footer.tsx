"use client"
import { Separator } from "@/components/ui/separator"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Vibe Coding</span>
              </div>
              <p className="text-purple-200 mb-6 max-w-md">
                Creamos portales neuronales que conectan de verdad contigo. IA con alma, diseñada para entender tu vibe.
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>en Chile</span>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold mb-4">Productos</h3>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    EcosueloLab
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Despega Tu Carrera
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Parrotfy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <a href="mailto:hola@vibecoding.com" className="hover:text-white transition-colors">
                    hola@vibecoding.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Copyright */}
        <div className="py-6 text-center text-purple-300 text-sm">
          <p>&copy; 2024 Vibe Coding. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
