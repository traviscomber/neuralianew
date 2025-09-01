"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MapPin, Users, MessageCircle, ExternalLink } from "lucide-react"

const team = [
  {
    name: "Equipo N3uralia",
    role: "Full Stack IA Developers",
    location: "Santiago, Chile & Singapore",
    avatar: "/placeholder-user.jpg",
    description:
      "Desarrolladores especializados en sistemas completos de IA, desde frontend hasta backend, con experiencia en proyectos reales para empresas chilenas y asiáticas.",
    skills: ["OpenAI GPT-4o", "Node.js", "React", "Python", "WhatsApp API", "Supabase", "AWS"],
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-muted/10">
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
            className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
          >
            <Users className="w-4 h-4 mr-2" />
            Quiénes Somos
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            El equipo detrás de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              N3uralia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desarrolladores full stack especializados en IA, con experiencia real construyendo sistemas que funcionan en
            producción.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-border hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-purple-500/10 transition-all duration-300 bg-card">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    {/* Avatar and Basic Info */}
                    <div className="flex flex-col items-center text-center lg:text-left">
                      <Avatar className="w-32 h-32 mb-4">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 text-white text-2xl">
                          N3
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-2xl font-bold mb-2 text-card-foreground">{member.name}</h3>
                      <p className="text-lg text-muted-foreground mb-3">{member.role}</p>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{member.location}</span>
                      </div>
                    </div>

                    {/* Description and Skills */}
                    <div className="flex-1">
                      <p className="text-card-foreground leading-relaxed mb-6 text-center lg:text-left">
                        {member.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-card-foreground mb-3 text-center lg:text-left">
                          Stack Tecnológico:
                        </h4>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                          {member.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="bg-muted/50 dark:bg-muted/30 text-card-foreground border-border"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                          asChild
                        >
                          <a
                            href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20más%20sobre%20sus%20servicios%20de%20IA"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Conversar por WhatsApp
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          className="border-2 hover:bg-muted/50 dark:hover:bg-muted/30 bg-transparent"
                          onClick={() => document.getElementById("use-cases")?.scrollIntoView({ behavior: "smooth" })}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ver Proyectos
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Por qué elegir N3uralia?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-purple-100 dark:text-purple-200">Proyectos Exitosos</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-purple-100 dark:text-purple-200">Soporte Técnico</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2 Países</div>
                <div className="text-purple-100 dark:text-purple-200">Experiencia Global</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
