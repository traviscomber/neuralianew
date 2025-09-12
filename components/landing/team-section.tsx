"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Code,
  Brain,
  Network,
  Database,
  Shield,
  Workflow,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const humanTeam = [
  {
    name: "Rafael Vial",
    role: "Frontend Engineer",
    education: "Ingeniero PuC UI",
    location: "Santiago, Chile",
    timezone: "CLT (UTC-3)",
    image: "/placeholder-user.jpg",
    expertise: ["React/Next.js", "TypeScript", "UI/UX Design", "Performance Optimization"],
    description:
      "Especialista en desarrollo frontend con enfoque en experiencias de usuario optimizadas y arquitecturas escalables.",
    availability: "Lun-Vie 9:00-18:00 CLT",
    experience: "5+ años",
  },
  {
    name: "Juan Vial",
    role: "Fullstack AI Engineer",
    education: "AI & Machine Learning Specialist",
    location: "Santiago, Chile",
    timezone: "CLT (UTC-3)",
    image: "/placeholder-user.jpg",
    expertise: ["Python", "OpenAI GPT-4", "Node.js", "PostgreSQL"],
    description:
      "Arquitecto de sistemas IA con experiencia en desarrollo full-stack y soluciones empresariales complejas.",
    availability: "Lun-Vie 9:00-18:00 CLT",
    experience: "7+ años",
  },
]

const coreCapabilities = [
  {
    title: "Agentes IA Personalizados",
    description: "Desarrollamos agentes conversacionales específicos para cada caso de uso empresarial",
    icon: Brain,
  },
  {
    title: "Integraciones API",
    description: "Conectamos cualquier sistema existente: REST, GraphQL, WebSockets, gRPC",
    icon: Network,
  },
  {
    title: "Sistemas RAG",
    description: "Implementamos Retrieval-Augmented Generation para conocimiento empresarial",
    icon: Database,
  },
  {
    title: "Desarrollo Full-Stack",
    description: "Soluciones completas desde frontend hasta backend y base de datos",
    icon: Code,
  },
  {
    title: "Seguridad Enterprise",
    description: "Cumplimiento ISO 27001, encriptación end-to-end y auditorías de seguridad",
    icon: Shield,
  },
  {
    title: "Automatización de Procesos",
    description: "Workflows automatizados que integran IA con sistemas empresariales existentes",
    icon: Workflow,
  },
]

const teamStats = [
  { number: "2", label: "Ingenieros Core", icon: Users },
  { number: "50+", label: "Proyectos", icon: Code },
  { number: "24/7", label: "Soporte", icon: Clock },
  { number: "48h", label: "Setup", icon: MessageSquare },
]

export function TeamSection() {
  const { language } = useLanguage()

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            <Users className="w-5 h-5 mr-2" />
            {language === "en" ? "Our Team" : "Nuestro Equipo"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-6">
            {language === "en" ? "Expert Engineers" : "Ingenieros Expertos"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto">
            {language === "en"
              ? "Specialized engineers with proven experience in complex AI systems and scalable enterprise solutions."
              : "Ingenieros especializados con experiencia comprobada en sistemas de IA complejos y soluciones empresariales escalables."}
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {teamStats.map((stat, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-black mx-auto mb-3" />
                <div className="text-3xl font-bold text-black mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-black">
            {language === "en" ? "Core Technical Capabilities" : "Capacidades Técnicas Core"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                        <capability.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-black">{capability.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-light">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Human Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-black">
            {language === "en" ? "Engineering Team" : "Equipo de Ingeniería"}
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {humanTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="bg-black text-white text-lg font-bold">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-black mb-1">{member.name}</h4>
                        <p className="text-gray-600 font-semibold mb-2">{member.role}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{member.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-gray-100 text-gray-700 font-medium border-0">{member.experience}</Badge>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed font-light">{member.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-black mb-3">
                          {language === "en" ? "Specialties:" : "Especialidades:"}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <Badge key={skill} className="bg-gray-100 text-gray-700 border-0 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{member.availability}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-black text-white border-0 max-w-4xl mx-auto rounded-2xl">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold mb-4">
                {language === "en" ? "Need an enterprise AI solution?" : "¿Necesitas una solución IA empresarial?"}
              </h3>
              <p className="text-lg mb-8 text-gray-300 font-light">
                {language === "en"
                  ? "Our team of specialized engineers can develop the exact solution your company needs, with proven technologies and measurable results."
                  : "Nuestro equipo de ingenieros especializados puede desarrollar la solución exacta que tu empresa necesita, con tecnologías probadas y resultados medibles."}
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-colors"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20necesito%20una%20consulta%20técnica%20para%20mi%20proyecto%20empresarial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {language === "en" ? "Request Technical Consultation" : "Solicitar Consulta Técnica"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
