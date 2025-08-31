"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Heart, Mail, MessageCircle, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 text-center"
        >
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            ¿Listo para empezar?
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Crea tu{" "}
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              portal neuronal
            </span>
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Hablemos sobre cómo podemos crear una IA que conecte de verdad con tus usuarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-purple-50 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablemos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg backdrop-blur-sm bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </Button>
          </div>
        </motion.div>

        <Separator className="bg-white/20" />

        {/* Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
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
