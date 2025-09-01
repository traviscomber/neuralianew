"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
    <section id="team" className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
          >
            <Users className="w-4 h-4 mr-2" />
            Equipo Global
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Equipo{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Multidisciplinario
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ingenieros reales de múltiples nacionalidades especializados en IA conversacional, trabajando 24/7 para tu
            proyecto.
          </p>
        </motion.div>

        {/* Team Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-card border-2 border-border shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold border-4 border-purple-200 dark:border-purple-700">
                    N3
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-card-foreground">Equipo N3uralia</h3>
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                      ONLINE 24/7
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Equipo multidisciplinario de ingenieros reales especializados en IA conversacional
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <span className="text-lg">🇨🇱</span>
                      <span>Chile</span>
                      <span className="text-xs text-muted-foreground">(UTC-3)</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <span className="text-lg">🇸🇬</span>
                      <span>Singapur</span>
                      <span className="text-xs text-muted-foreground">(UTC+8)</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <span className="text-lg">🇷🇺</span>
                      <span>Rusia</span>
                      <span className="text-xs text-muted-foreground">(UTC+3)</span>
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">24/7</div>
                      <div className="text-sm text-muted-foreground">Soporte Humano + IA</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</div>
                      <div className="text-sm text-muted-foreground">Continentes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24h</div>
                      <div className="text-sm text-muted-foreground">Coding Non-Stop</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                      <div className="text-sm text-muted-foreground">Ingenieros Reales</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Our Great Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700"
            >
              <Zap className="w-4 h-4 mr-2" />
              Nuestra Gran Ventaja
            </Badge>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Mientras tu competencia{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                duerme
              </span>
              , nosotros desarrollamos
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La distribución estratégica de nuestro equipo en 3 continentes nos permite ofrecer desarrollo y soporte
              continuo las 24 horas del día.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-border">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <div
                        className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${advantage.color} flex items-center justify-center`}
                      >
                        <advantage.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="absolute -top-2 -right-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 text-xs"
                      >
                        {advantage.badge}
                      </Badge>
                    </div>
                    <h4 className="font-bold text-card-foreground mb-2">{advantage.title}</h4>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-700">
            <div className="text-4xl mb-4">🌍⚡🚀</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">3 Continentes • 24/7 Coding • 100% Humanos + IA</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Aprovecha nuestra ventaja competitiva: desarrollo continuo, soporte real 24/7 y la experiencia de
              ingenieros especializados en IA conversacional.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20aprovechar%20su%20soporte%2024/7%20para%20mi%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="w-5 h-5 mr-2" />
                Aprovechar Soporte 24/7
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
