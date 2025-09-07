"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Code,
  Palette,
  Brain,
  MessageCircle,
  ArrowRight,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react"

const teamMembers = [
  {
    name: "Rafael Vial",
    role: "Ingeniero Frontend",
    education: "Ingeniero PuC UI",
    location: "Santiago, Chile",
    flag: "🇨🇱",
    specialties: ["React/Next.js", "UI/UX Implementation", "Frontend Architecture", "Performance Optimization"],
    description: "Especialista en interfaces de usuario modernas y experiencias web optimizadas",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    experience: "5+ años",
    projects: "Frontend de EcosueloLab, Parrotfy UI, Despega Tu Carrera",
  },
  {
    name: "Irina Lebedeva",
    role: "UX Designer - Frontend",
    education: "Design Systems Specialist",
    location: "Moscú, Rusia",
    flag: "🇷🇺",
    specialties: ["UX Research", "Design Systems", "Frontend Design", "User Psychology"],
    description: "Diseñadora UX con enfoque en psicología del usuario y sistemas de diseño escalables",
    icon: Palette,
    color: "from-purple-500 to-purple-600",
    experience: "6+ años",
    projects: "Design System N3uralia, UX Research, Interface Design",
  },
  {
    name: "Juan Vial",
    role: "Fullstack AI Engineer",
    education: "AI & Machine Learning Specialist",
    location: "Santiago, Chile",
    flag: "🇨🇱",
    specialties: ["AI Development", "Backend Architecture", "Machine Learning", "System Integration"],
    description: "Ingeniero fullstack especializado en IA conversacional y arquitecturas escalables",
    icon: Brain,
    color: "from-green-500 to-green-600",
    experience: "7+ años",
    projects: "AI Engine N3uralia, Backend Systems, ML Models",
  },
]

const teamStats = [
  { icon: Users, label: "Equipo Global", value: "35+", description: "Especialistas distribuidos" },
  { icon: MapPin, label: "Países", value: "3", description: "Chile, Singapur, Rusia" },
  { icon: Award, label: "Experiencia", value: "15+", description: "Años promedio" },
  { icon: Briefcase, label: "Proyectos", value: "50+", description: "Casos de éxito" },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 text-lg px-6 py-2 font-semibold transition-colors duration-300">
            <Users className="w-4 h-4 mr-2" />
            Equipo Especializado
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
            Los expertos detrás de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              N3uralia
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Conoce al equipo de ingenieros, diseñadores y especialistas en IA que hacen posible la transformación
            digital de tu empresa.
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
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 rounded-2xl"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-slate-700 dark:text-slate-300 mx-auto mb-3 transition-colors duration-300" />
                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-900 dark:text-white font-bold mb-1 transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Core Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 group h-full rounded-2xl">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <member.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 font-semibold transition-colors duration-300">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl mb-1">{member.flag}</div>
                      <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 font-medium text-xs transition-colors duration-300">
                        {member.experience}
                      </Badge>
                    </div>
                  </div>

                  {/* Education & Location */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-slate-600 dark:text-slate-400 transition-colors duration-300" />
                      <span className="text-slate-600 dark:text-slate-400 font-medium text-sm transition-colors duration-300">
                        {member.education}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-600 dark:text-slate-400 transition-colors duration-300" />
                      <span className="text-slate-600 dark:text-slate-400 font-medium text-sm transition-colors duration-300">
                        {member.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 transition-colors duration-300">
                    {member.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3 transition-colors duration-300">
                      Especialidades:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge
                          key={specialtyIndex}
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 font-medium text-xs transition-colors duration-300"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 transition-colors duration-300">
                      Proyectos Destacados:
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors duration-300">
                      {member.projects}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Global Team Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white border-0 rounded-2xl transition-colors duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Equipo Global Distribuido</h3>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Más allá del equipo core, contamos con 35+ especialistas distribuidos en Chile, Singapur y Rusia.
                    Cada proyecto cuenta con expertos locales que entienden tu mercado y cultura empresarial.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-black mb-1">🇨🇱 15+</div>
                      <div className="text-blue-100 text-sm font-semibold">Chile</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black mb-1">🇸🇬 8+</div>
                      <div className="text-blue-100 text-sm font-semibold">Singapur</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black mb-1">🇷🇺 12+</div>
                      <div className="text-blue-100 text-sm font-semibold">Rusia</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Especialidades por Región</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        🇨🇱 <strong>Chile:</strong> IA en Español, Mercado Latinoamericano
                      </div>
                      <div>
                        🇸🇬 <strong>Singapur:</strong> Expansión Asia-Pacífico, Mercados en Inglés
                      </div>
                      <div>
                        🇷🇺 <strong>Rusia:</strong> I+D Avanzado, Desarrollo Técnico
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20más%20sobre%20el%20equipo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Conocer al equipo completo
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
