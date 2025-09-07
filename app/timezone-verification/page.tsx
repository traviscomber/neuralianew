"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Globe,
  CheckCircle,
  AlertTriangle,
  Users,
  Calendar,
  Sun,
  Moon,
  RefreshCw,
  MapPin,
  Zap,
  Shield,
} from "lucide-react"

interface TimezoneInfo {
  city: string
  country: string
  timezone: string
  currentTime: string
  offset: string
  isDaytime: boolean
  businessHours: boolean
  supportAvailable: boolean
  icon: any
  flag: string
}

export default function TimezoneVerificationPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [loading, setLoading] = useState(true)

  const timezones: TimezoneInfo[] = [
    {
      city: "Santiago",
      country: "Chile",
      timezone: "America/Santiago",
      currentTime: "",
      offset: "UTC-3",
      isDaytime: true,
      businessHours: true,
      supportAvailable: true,
      icon: Sun,
      flag: "🇨🇱",
    },
    {
      city: "Singapur",
      country: "Singapur",
      timezone: "Asia/Singapore",
      currentTime: "",
      offset: "UTC+8",
      isDaytime: false,
      businessHours: false,
      supportAvailable: true,
      icon: Moon,
      flag: "🇸🇬",
    },
    {
      city: "Moscú",
      country: "Rusia",
      timezone: "Europe/Moscow",
      currentTime: "",
      offset: "UTC+3",
      isDaytime: false,
      businessHours: false,
      supportAvailable: true,
      icon: Moon,
      flag: "🇷🇺",
    },
  ]

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date()
      setCurrentTime(now)

      timezones.forEach((tz) => {
        const timeInZone = new Intl.DateTimeFormat("es-CL", {
          timeZone: tz.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now)

        tz.currentTime = timeInZone

        const hour = Number.parseInt(timeInZone.split(":")[0])
        tz.isDaytime = hour >= 6 && hour < 20
        tz.businessHours = hour >= 9 && hour < 18
        tz.icon = tz.isDaytime ? Sun : Moon
      })
    }

    updateTimes()
    setLoading(false)

    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  const activeSupportCenters = timezones.filter((tz) => tz.supportAvailable).length
  const businessHoursCount = timezones.filter((tz) => tz.businessHours).length

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navigation />
      <main className="pt-20 pb-16 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Verificación de Zonas Horarias</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
              Monitoreo en tiempo real de nuestros centros de soporte global 24/7
            </p>
            <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
              <CheckCircle className="w-3 h-3 mr-1" />
              Cobertura Global Activa
            </Badge>
          </div>

          {/* Theme Toggle Demo */}
          <Card className="mb-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-900 dark:text-white">
                <Sun className="w-5 h-5 mr-2 text-yellow-500 dark:text-yellow-400" />
                Demostración de Tema
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-300 mb-2">
                    Prueba el cambio de tema para verificar la consistencia visual
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-600 rounded"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Fondo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-slate-900 dark:bg-white rounded"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Texto</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Acento</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Cambiar Tema:</span>
                  <ThemeToggle />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Global Coverage Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Centros Activos</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">{activeSupportCenters}/3</p>
                  </div>
                  <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Horario Comercial</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{businessHoursCount}/3</p>
                  </div>
                  <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Cobertura 24/7</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</p>
                  </div>
                  <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Tiempo Respuesta</p>
                    <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">&lt;15min</p>
                  </div>
                  <Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timezone Cards */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Centros de Soporte Global</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.reload()}
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Actualizar
              </Button>
            </div>

            <div className="grid gap-4">
              {timezones.map((tz, index) => {
                const TimeIcon = tz.icon

                return (
                  <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{tz.flag}</div>
                          <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center">
                              <MapPin className="w-4 h-4 mr-1 text-slate-500 dark:text-slate-400" />
                              {tz.city}, {tz.country}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {tz.timezone} ({tz.offset})
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <p className="text-sm text-slate-600 dark:text-slate-400">Hora Local</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                              {loading ? "--:--:--" : tz.currentTime}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-slate-600 dark:text-slate-400">Estado</p>
                            <div className="flex items-center space-x-2">
                              <TimeIcon
                                className={`w-5 h-5 ${
                                  tz.isDaytime
                                    ? "text-yellow-500 dark:text-yellow-400"
                                    : "text-blue-500 dark:text-blue-400"
                                }`}
                              />
                              <span className="text-sm font-medium text-slate-900 dark:text-white">
                                {tz.isDaytime ? "Día" : "Noche"}
                              </span>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-slate-600 dark:text-slate-400">Soporte</p>
                            <div className="flex items-center space-x-2">
                              {tz.supportAvailable ? (
                                <>
                                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                                    Activo
                                  </Badge>
                                </>
                              ) : (
                                <>
                                  <AlertTriangle className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
                                  <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
                                    Limitado
                                  </Badge>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-slate-600 dark:text-slate-400">Horario</p>
                            <Badge
                              className={
                                tz.businessHours
                                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                                  : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300"
                              }
                            >
                              {tz.businessHours ? "Comercial" : "Fuera de horario"}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Progress bar showing coverage */}
                      <div className="mt-4">
                        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                          <span>Cobertura de Soporte</span>
                          <span>24/7</span>
                        </div>
                        <Progress value={tz.supportAvailable ? 100 : 0} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Coverage Summary */}
          <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Resumen de Cobertura Global</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Garantías de Servicio</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                      Soporte técnico 24/7 en todos los centros
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                      Tiempo de respuesta &lt;15 minutos para issues críticos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                      Escalación automática entre centros
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                      Soporte multiidioma (Español, Inglés, Ruso)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Horarios de Atención Preferencial
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">🇨🇱 Santiago:</span>
                      <span className="text-slate-900 dark:text-white">09:00 - 18:00 CLT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">🇸🇬 Singapur:</span>
                      <span className="text-slate-900 dark:text-white">09:00 - 17:00 SGT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">🇷🇺 Moscú:</span>
                      <span className="text-slate-900 dark:text-white">09:00 - 18:00 MSK</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
