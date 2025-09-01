"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, MessageCircle, Code, Brain, Rocket, Users, ArrowRight } from "lucide-react"

const team = [
  {
    name: "Sebastián Morales",
    role: "Fundador & CEO",
    bio: "Ingeniero en Informática especializado en IA conversacional. 5+ años desarrollando soluciones empresariales.",
    avatar: "/placeholder-user.jpg",
    skills: ["IA Conversacional", "Arquitectura de Software", "Liderazgo Técnico"],
    social: {
      linkedin: "https://linkedin.com/in/sebastian-morales",
      github: "https://github.com/sebastian-morales",
    },
  },
]

const stats = [
  { number: "50+", label: "Proyectos completados", icon: Rocket },
  { number: "98%", label: "Satisfacción del cliente", icon: Users },
  { number: "48h", label: "Tiempo promedio de implementación", icon: Code },
  { number: "24/7", label: "Soporte técnico", icon: Brain },
]

const values = [
  {
    title: "Implementación Rápida",
    description: "Tu IA funcionando en 48 horas, no en meses",
    icon: Rocket,
  },
  {
    title: "Tecnología Probada",
    description: "Usamos las mejores herramientas: OpenAI, Supabase, Next.js",
    icon: Code,
  },
  {
    title: "Soporte Continuo",
    description: "Te acompañamos después del lanzamiento",
    icon: Users,
  },
  {
    title: "Resultados Medibles",
    description: "Métricas claras desde el primer día",
    icon: Brain,
  },
]

export function TeamSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700"
          >
            <Users className="w-4 h-4 mr-2" />
            Conoce al equipo
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            El equipo detrás de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              N3uralia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertos en IA conversacional comprometidos con transformar tu negocio a través de la tecnología.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-16 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-border hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-purple-500/10 transition-all duration-300 bg-card">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-6">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-bold text-card-foreground mb-2">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="border-2 border-border hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-purple-500/10 transition-all duration-300 bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-card-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">¿Por qué elegir N3uralia?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-border hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-purple-500/10 transition-all duration-300 h-full bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-card-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20IA%20en%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablar con el equipo
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
