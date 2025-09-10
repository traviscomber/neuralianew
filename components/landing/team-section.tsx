"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MapPin, Clock, MessageSquare, ArrowRight, Bot, Brain, Code, Database, Zap, Globe } from "lucide-react"

const humanTeam = [
  {
    name: "Rafael Vial",
    role: "Frontend Engineer",
    location: "Santiago, Chile",
    timezone: "CLT (UTC-3)",
    image: "/placeholder-user.jpg",
    expertise: ["React", "Next.js", "TypeScript", "UI/UX"],
    description: "Especialista en interfaces de usuario modernas y experiencias conversacionales intuitivas.",
    availability: "Lun-Vie 9:00-18:00 CLT",
  },
  {
    name: "Juan Vial",
    role: "Fullstack AI Engineer",
    location: "Santiago, Chile",
    timezone: "CLT (UTC-3)",
    image: "/placeholder-user.jpg",
    expertise: ["Python", "OpenAI", "Node.js", "PostgreSQL"],
    description: "Arquitecto de sistemas IA y desarrollador full-stack con experiencia en soluciones empresariales.",
    availability: "Lun-Vie 9:00-18:00 CLT",
  },
]

const aiAgents = [
  {
    name: "CodeMaster",
    role: "Senior Developer",
    specialty: "Full-stack Development",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    availability: "24/7",
  },
  {
    name: "DataWiz",
    role: "Database Architect",
    specialty: "Data Engineering",
    icon: Database,
    color: "from-green-500 to-green-600",
    availability: "24/7",
  },
  {
    name: "AICore",
    role: "ML Engineer",
    specialty: "Machine Learning",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
    availability: "24/7",
  },
  {
    name: "SpeedBot",
    role: "Performance Expert",
    specialty: "Optimization",
    icon: Zap,
    color: "from-yellow-500 to-yellow-600",
    availability: "24/7",
  },
  {
    name: "GlobalSync",
    role: "Integration Specialist",
    specialty: "API Development",
    icon: Globe,
    color: "from-indigo-500 to-indigo-600",
    availability: "24/7",
  },
  {
    name: "QualityGuard",
    role: "QA Engineer",
    specialty: "Testing & Security",
    icon: Bot,
    color: "from-red-500 to-red-600",
    availability: "24/7",
  },
]

const teamStats = [
  { number: "2+6", label: "Equipo Híbrido", icon: Users },
  { number: "3", label: "Países", icon: MapPin },
  { number: "24/7", label: "Disponibilidad", icon: Clock },
  { number: "15min", label: "SLA Respuesta", icon: MessageSquare },
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
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white border-0 text-lg px-6 py-2 transition-colors duration-300">
            <Users className="w-4 h-4 mr-2" />
            Equipo Global Híbrido
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-colors duration-300">
            Humanos + IA trabajando{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
              en perfecta sincronía
            </span>
          </h2>
          <p className="text-xl text-muted-foreground dark:text-slate-300 max-w-4xl mx-auto transition-colors duration-300">
            Metodología "Human in the Middle": Combinamos la creatividad humana con la eficiencia de la IA para entregar
            soluciones excepcionales con cobertura global 24/7.
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
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 rounded-2xl"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-slate-700 dark:text-slate-300 mx-auto mb-3 transition-colors duration-300" />
                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold transition-colors duration-300">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Human Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white transition-colors duration-300">
            👥 Equipo Humano Core
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {humanTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 h-full rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-lg font-bold transition-colors duration-300">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 transition-colors duration-300">
                          {member.role}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                          <MapPin className="w-4 h-4" />
                          <span>{member.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed transition-colors duration-300">
                      {member.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                          Especialidades:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
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

        {/* AI Agents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white transition-colors duration-300">
            🤖 Agentes IA Especializados
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiAgents.map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 h-full rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center`}
                      >
                        <agent.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 dark:text-white transition-colors duration-300">
                          {agent.name}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                          {agent.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
                      {agent.specialty}
                    </p>

                    <div className="flex items-center justify-between">
                      <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700 transition-colors duration-300">
                        {agent.availability}
                      </Badge>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white border-0 rounded-2xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Metodología "Human in the Middle"</h3>
              <p className="text-lg mb-6 opacity-90">
                👥 <strong>2 Humanos Core</strong> supervisan y dirigen • 🤖 <strong>6 Agentes IA</strong> ejecutan
                tareas especializadas • 🌍 <strong>Cobertura Global</strong> 24/7 sin interrupciones
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20más%20sobre%20su%20metodología%20Human%20in%20the%20Middle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Conocer la Metodología
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
