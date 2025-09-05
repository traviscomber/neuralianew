"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, MapPin, Linkedin, Github, Mail, Code, Brain, Rocket, Globe, Award, BookOpen } from "lucide-react"
import Image from "next/image"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Carlos Mendoza",
      role: "CEO & AI Research Director",
      location: "Santiago, Chile",
      flag: "🇨🇱",
      image: "/placeholder-user.jpg",
      bio: "PhD en Machine Learning, ex-Google AI. 15+ años liderando proyectos de IA conversacional.",
      skills: ["Deep Learning", "NLP", "Strategic Leadership", "Research"],
      achievements: ["50+ papers publicados", "3 patentes en IA", "TEDx Speaker"],
      social: {
        linkedin: "https://linkedin.com/in/carlos-mendoza",
        github: "https://github.com/cmendoza",
        email: "carlos@n3uralia.com",
      },
    },
    {
      name: "Elena Volkov",
      role: "CTO & Full Stack Architect",
      location: "Moscow, Russia",
      flag: "🇷🇺",
      image: "/placeholder-user.jpg",
      bio: "Ex-Yandex Senior Engineer. Especialista en arquitecturas escalables y sistemas distribuidos.",
      skills: ["System Architecture", "DevOps", "Cloud Computing", "AI Integration"],
      achievements: ["Sistemas para 10M+ usuarios", "AWS Certified", "Open Source Contributor"],
      social: {
        linkedin: "https://linkedin.com/in/elena-volkov",
        github: "https://github.com/evolkov",
        email: "elena@n3uralia.com",
      },
    },
    {
      name: "Dr. Wei Chen",
      role: "Head of AI Engineering",
      location: "Singapore",
      flag: "🇸🇬",
      image: "/placeholder-user.jpg",
      bio: "PhD en Computer Science, ex-Microsoft Research. Experto en LLMs y sistemas conversacionales.",
      skills: ["LLM Fine-tuning", "Conversational AI", "MLOps", "Research"],
      achievements: ["20+ modelos en producción", "Microsoft MVP", "AI Conference Speaker"],
      social: {
        linkedin: "https://linkedin.com/in/wei-chen",
        github: "https://github.com/wchen",
        email: "wei@n3uralia.com",
      },
    },
    {
      name: "María González",
      role: "Lead Product Designer",
      location: "Santiago, Chile",
      flag: "🇨🇱",
      image: "/placeholder-user.jpg",
      bio: "10+ años diseñando experiencias conversacionales. Ex-Uber, especialista en UX para IA.",
      skills: ["UX/UI Design", "Conversational Design", "User Research", "Prototyping"],
      achievements: ["Productos usados por 5M+ usuarios", "Design Awards", "UX Mentor"],
      social: {
        linkedin: "https://linkedin.com/in/maria-gonzalez",
        github: "https://github.com/mgonzalez",
        email: "maria@n3uralia.com",
      },
    },
    {
      name: "Alex Thompson",
      role: "Senior DevOps Engineer",
      location: "Remote - Global",
      flag: "🌍",
      image: "/placeholder-user.jpg",
      bio: "Especialista en infraestructura cloud y CI/CD. Garantiza 99.9% uptime en todos nuestros sistemas.",
      skills: ["Kubernetes", "AWS/GCP", "Monitoring", "Security"],
      achievements: ["Zero-downtime deployments", "Cost optimization 40%", "Security Expert"],
      social: {
        linkedin: "https://linkedin.com/in/alex-thompson",
        github: "https://github.com/athompson",
        email: "alex@n3uralia.com",
      },
    },
    {
      name: "Dr. Priya Sharma",
      role: "AI Ethics & Safety Lead",
      location: "Singapore",
      flag: "🇸🇬",
      image: "/placeholder-user.jpg",
      bio: "PhD en AI Ethics, ex-OpenAI Safety Team. Garantiza que nuestros agentes sean seguros y éticos.",
      skills: ["AI Safety", "Ethics", "Bias Detection", "Compliance"],
      achievements: ["AI Ethics Framework", "Industry Standards", "Academic Publications"],
      social: {
        linkedin: "https://linkedin.com/in/priya-sharma",
        github: "https://github.com/psharma",
        email: "priya@n3uralia.com",
      },
    },
  ]

  const stats = [
    { icon: Users, value: "25+", label: "Ingenieros Expertos" },
    { icon: Globe, value: "3", label: "Continentes" },
    { icon: Award, value: "50+", label: "Proyectos Exitosos" },
    { icon: BookOpen, value: "100+", label: "Papers & Patents" },
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <Users className="w-4 h-4 mr-2" />
            Equipo de Clase Mundial
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Los Mejores Talentos en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              IA y Tecnología
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nuestro equipo multidisciplinario combina décadas de experiencia en IA, ingeniería de software y diseño de
            productos para crear soluciones que realmente transforman negocios.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="rounded-full border-2 border-slate-600"
                    />
                    <div className="absolute -bottom-1 -right-1 text-lg">{member.flag}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium">{member.role}</p>
                    <div className="flex items-center text-slate-400 text-sm mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {member.location}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-slate-700/50 text-slate-300 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Logros Destacados:</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs text-slate-400 flex items-center">
                        <Award className="w-3 h-3 mr-1 text-yellow-500 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3 pt-4 border-t border-slate-700">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-2 h-8 w-8 text-slate-400 hover:text-blue-400"
                    onClick={() => window.open(member.social.linkedin, "_blank")}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-2 h-8 w-8 text-slate-400 hover:text-purple-400"
                    onClick={() => window.open(member.social.github, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-2 h-8 w-8 text-slate-400 hover:text-green-400"
                    onClick={() => window.open(`mailto:${member.social.email}`, "_blank")}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Culture & Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-700/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Code className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Excelencia Técnica</h3>
              <p className="text-slate-300 text-sm">
                Nos comprometemos con los más altos estándares de calidad en código, arquitectura y mejores prácticas de
                la industria.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border-purple-700/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovación Continua</h3>
              <p className="text-slate-300 text-sm">
                Investigamos y adoptamos las últimas tecnologías en IA para mantener a nuestros clientes a la
                vanguardia.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-700/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Impacto Real</h3>
              <p className="text-slate-300 text-sm">
                Cada proyecto que desarrollamos está diseñado para generar valor medible y transformar realmente los
                negocios.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
