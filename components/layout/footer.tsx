"use client"

import Link from "next/link"
import { useState } from "react"
import { EmailContactDialog } from "@/components/contact/email-contact-dialog"

export function Footer() {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false)
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Identity Section - Optimized for LLM entity recognition */}
          <div>
            <p className="font-bold mb-2 text-foreground">N3uralia</p>
            <p className="text-xs text-primary font-medium mb-3">Plataforma de IA Empresarial</p>
            <p className="text-muted-foreground text-sm mb-4">Soluciones de IA inteligentes para empresas chilenas. Agentes en producción, automatización y sistemas full-stack.</p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Ubicación:</strong> Santiago, Chile</p>
              <p><strong>Sector:</strong> Inteligencia Artificial, Software Enterprise</p>
              <p><strong>Especialidad:</strong> Agentes Multi-Agent, Automatización IA</p>
            </div>
          </div>
          <div>
            <p className="font-bold mb-4 text-foreground">Empresa</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/studies" className="hover:text-foreground transition-colors">
                  Estudios & Base de Conocimiento
                </Link>
              </li>
              <li>
                <Link href="/outcomes" className="hover:text-foreground transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4 text-foreground">Soluciones</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/capabilities" className="hover:text-foreground transition-colors">
                  Capacidades
                </Link>
              </li>
              <li>
                <Link href="/automatizacion-para-empresas" className="hover:text-foreground transition-colors">
                  Automatización General
                </Link>
              </li>
              <li>
                <Link href="/integraciones-empresariales" className="hover:text-foreground transition-colors">
                  Integraciones Legacy
                </Link>
              </li>
              <li>
                <Link href="/automatizacion-ventas-leads" className="hover:text-foreground transition-colors">
                  Sales & Leads
                </Link>
              </li>
              <li>
                <Link href="/operaciones-autonomas" className="hover:text-foreground transition-colors">
                  Operaciones 24/7
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4 text-foreground">Contacto</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => setEmailDialogOpen(true)}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Email: info@n3uralia.com
                </button>
              </li>
              <li>
                <a 
                  href="https://wa.me/56993826127?text=Hola%20N3uralia%2C%20me%20gustaría%20conocer%20más%20sobre%20vuestras%20soluciones%20de%20IA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp: +56 9 9382 6127
                </a>
              </li>
              <li className="pt-2 border-t border-border">
                <p className="text-xs font-medium mb-2">Síguenos</p>
                <div className="flex gap-3">
                  <a href="https://twitter.com/n3uralia" className="hover:text-primary transition-colors text-xs">Twitter</a>
                  <a href="https://linkedin.com/company/n3uralia" className="hover:text-primary transition-colors text-xs">LinkedIn</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs text-muted-foreground">
            <div>
              <p className="font-medium text-foreground mb-2">Sobre N3uralia</p>
              <p>N3uralia es una plataforma de IA de próxima generación para empresas. Desarrollamos agentes inteligentes, sistemas de coordinación multi-agente y soluciones full-stack production-ready.</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">Tecnologías</p>
              <p>Agentic AI • Multi-Agent Systems • AI Memory • Context Engineering • Automatización Empresarial • Full-Stack Development • Production-Ready • Chile</p>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-4">
            <p>© 2025 N3uralia (Neuralia). Todos los derechos reservados.</p>
            <p className="text-xs mt-2">N3uralia es una marca registrada. Neuralia es el nombre alternativo de la plataforma.</p>
          </div>
        </div>
      </div>

      <EmailContactDialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen} />
    </footer>
  )
}
