"use client"
import { Users, Globe, Clock, Zap } from "lucide-react"

const advantages = [
  {
    title: "Soporte 24/7 Real",
    description: "Siempre hay un humano o IA disponible para ayudarte",
    icon: Clock,
    badge: "Ventaja Clave",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Coding 24 Horas",
    description: "Desarrollo continuo mientras tu competencia duerme",
    icon: Users,
    badge: "Productividad x3",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Cobertura Global",
    description: "3 zonas horarias = proyecto nunca se detiene",
    icon: Globe,
    badge: "3 Continentes",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Respuesta Inmediata",
    description: "Tu proyecto avanza 24/7, sin interrupciones",
    icon: Zap,
    badge: "Sin Parar",
    color: "from-orange-500 to-red-600",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">{/* Team section content was removed as requested */}</div>
    </section>
  )
}
