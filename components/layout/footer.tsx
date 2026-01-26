"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="font-bold mb-4 text-foreground">N3uralia</p>
            <p className="text-muted-foreground text-sm">Soluciones de IA inteligentes para empresas chilenas</p>
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
                <Link href="/studies" className="hover:text-foreground transition-colors">
                  Estudios
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
                <Link href="/coordination" className="hover:text-foreground transition-colors">
                  Coordinación
                </Link>
              </li>
              <li>
                <Link href="/outcomes" className="hover:text-foreground transition-colors">
                  Resultados
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4 text-foreground">Contacto</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@n3uralia.com" className="hover:text-foreground transition-colors">
                  hello@n3uralia.com
                </a>
              </li>
              <li>
                <a href="tel:+56993826127" className="hover:text-foreground transition-colors">
                  +56 9 9382 6127
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 N3uralia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
