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
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Integraciones API",
    description: "Conectamos cualquier sistema existente: REST, GraphQL, WebSockets, gRPC",
    icon: Network,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Sistemas RAG",
    description: "Implementamos Retrieval-Augmented Generation para conocimiento empresarial",
    icon: Database,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Desarrollo Full-Stack",
    description: "Soluciones completas desde frontend hasta backend y base de datos",
    icon: Code,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Seguridad Enterprise",
    description: "Cumplimiento ISO 27001, encriptación end-to-end y auditorías de seguridad",
    icon: Shield,
    color: "from-red-500 to-red-600",
  },
  {
    title: "Automatización de Procesos",
    description: "Workflows automatizados que integran IA con sistemas empresariales existentes",
    icon: Workflow,
    color: "from-cyan-500 to-cyan-600",
  },
]

const teamStats = [
  { number: "2", label: "Ingenieros Core", icon: Users },
  { number: "50+", label: "Proyectos", icon: Code },
  { number: "24/7", label: "Soporte", icon: Clock },
  { number: "48h", label: "Setup", icon: MessageSquare },
]

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-slate-800 text-slate-200 border border-slate-700 text-lg px-6 py-2 font-semibold">
            <Users className="w-4 h-4 mr-2" />
            Equipo Técnico Especializado
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Ingenieros especializados en{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              soluciones IA empresariales
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            Equipo core de ingenieros con experiencia comprobada en desarrollo de sistemas IA complejos y soluciones
            empresariales escalables.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-slate-700 dark:text-slate-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Capacidades Técnicas Core
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${capability.color} rounded-xl flex items-center justify-center`}
                      >
                        <capability.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{capability.title}</h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Human Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-slate-900 dark:text-white">Equipo de Ingeniería</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {humanTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-lg font-bold">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{member.role}</p>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <MapPin className="w-4 h-4" />
                          <span>{member.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                        {member.experience}
                      </Badge>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{member.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-white mb-3">Especialidades:</h5>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">¿Necesita una solución IA empresarial?</h3>
              <p className="text-lg mb-6 opacity-90">
                Nuestro equipo de ingenieros especializados puede desarrollar la solución exacta que su empresa
                necesita, con tecnologías probadas y resultados medibles.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3" asChild>
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20necesito%20una%20consulta%20técnica%20para%20mi%20proyecto%20empresarial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Solicitar Consulta Técnica
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
