import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos de Servicio - N3uralia",
  description:
    "Términos y condiciones de uso de los servicios de N3uralia. Información legal sobre el uso de nuestros agentes de IA conversacional.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TerminosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
