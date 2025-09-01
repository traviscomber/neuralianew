"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Users, Zap } from "lucide-react"

interface TimeZone {
  city: string
  timezone: string
  country: string
  flag: string
  coordinates: { x: number; y: number }
}

const timeZones: TimeZone[] = [
  {
    city: "Santiago",
    timezone: "America/Santiago",
    country: "Chile",
    flag: "🇨🇱",
    coordinates: { x: 25, y: 75 },
  },
  {
    city: "Singapur",
    timezone: "Asia/Singapore",
    country: "Singapur",
    flag: "🇸🇬",
    coordinates: { x: 75, y: 60 },
  },
  {
    city: "Moscú",
    timezone: "Europe/Moscow",
    country: "Rusia",
    flag: "🇷🇺",
    coordinates: { x: 60, y: 35 },
  },
]

export function TimezonesSection() {
  const [times, setTimes] = useState<{ [key: string]: string }>({})
  const [workingStatus, setWorkingStatus] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {}
      const newStatus: { [key: string]: boolean } = {}

      timeZones.forEach((tz) => {
        const now = new Date()
        const timeString = now.toLocaleTimeString("es-ES", {
          timeZone: tz.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
        newTimes[tz.city] = timeString

        // Working hours: 9 AM to 6 PM local time
        const hour = Number.parseInt(
          now.toLocaleTimeString("es-ES", {
            timeZone: tz.timezone,
            hour: "2-digit",
            hour12: false,
          }),
        )
        newStatus[tz.city] = hour >= 9 && hour < 18
      })

      setTimes(newTimes)
      setWorkingStatus(newStatus)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Clock, label: "Soporte 24/7", value: "Real", color: "text-green-500" },
    { icon: MapPin, label: "Continentes", value: "3", color: "text-blue-500" },
    { icon: Users, label: "Ingenieros", value: "100%", color: "text-purple-500" },
    { icon: Zap, label: "Downtime", value: "0%", color: "text-orange-500" },
  ]

  return (
    <section id="timezones" className="py-24 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            🌍 Soporte Global
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Equipo Distribuido 24/7
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo trabaja desde <span className="text-primary font-semibold">3 continentes diferentes</span>{" "}
            para brindarte soporte continuo y desarrollo sin interrupciones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* World Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
              <CardContent className="p-0">
                <div className="relative w-full h-80 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg overflow-hidden">
                  {/* Simplified World Map SVG */}
                  <svg viewBox="0 0 100 50" className="w-full h-full">
                    {/* Continents - simplified shapes */}
                    <path
                      d="M15 20 L35 18 L38 25 L35 30 L20 32 L15 28 Z"
                      fill="currentColor"
                      className="text-muted-foreground/20"
                    />
                    <path
                      d="M40 15 L85 12 L88 20 L85 25 L82 30 L75 32 L65 30 L55 25 L50 20 L45 18 Z"
                      fill="currentColor"
                      className="text-muted-foreground/20"
                    />
                    <path
                      d="M70 35 L85 33 L88 40 L85 45 L75 47 L70 42 Z"
                      fill="currentColor"
                      className="text-muted-foreground/20"
                    />

                    {/* Location pins */}
                    {timeZones.map((tz, index) => (
                      <g key={tz.city}>
                        <motion.circle
                          cx={tz.coordinates.x}
                          cy={tz.coordinates.y}
                          r="2"
                          fill={workingStatus[tz.city] ? "#10b981" : "#ef4444"}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.2 }}
                        />
                        <motion.circle
                          cx={tz.coordinates.x}
                          cy={tz.coordinates.y}
                          r="4"
                          fill="none"
                          stroke={workingStatus[tz.city] ? "#10b981" : "#ef4444"}
                          strokeWidth="0.5"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: index * 0.2 }}
                        />
                      </g>
                    ))}
                  </svg>

                  {/* Tooltips */}
                  {timeZones.map((tz, index) => (
                    <motion.div
                      key={`tooltip-${tz.city}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="absolute bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-2 text-xs shadow-lg"
                      style={{
                        left: `${tz.coordinates.x}%`,
                        top: `${tz.coordinates.y - 15}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <span>{tz.flag}</span>
                        <span className="font-semibold">{tz.city}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <div
                          className={`w-2 h-2 rounded-full ${workingStatus[tz.city] ? "bg-green-500" : "bg-red-500"}`}
                        />
                        <span className="text-muted-foreground">
                          {workingStatus[tz.city] ? "Trabajando" : "Descanso"}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Time Clocks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {timeZones.map((tz, index) => (
              <motion.div
                key={tz.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{tz.flag}</div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">{tz.city}</h3>
                          <p className="text-sm text-muted-foreground">{tz.country}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-mono font-bold text-foreground">
                          {times[tz.city] || "00:00:00"}
                        </div>
                        <div className="flex items-center justify-end space-x-2 mt-1">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              workingStatus[tz.city] ? "bg-green-500 animate-pulse" : "bg-red-500"
                            }`}
                          />
                          <span className="text-xs text-muted-foreground">
                            {workingStatus[tz.city] ? "Trabajando" : "Descanso"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30"
                >
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
