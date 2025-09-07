import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Database, Users, Globe, FileText, AlertTriangle } from "lucide-react"

export default function PoliticasDePrivacidadPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navigation />
      <main className="pt-20 pb-16 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Política de Privacidad</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Cómo protegemos y manejamos su información personal
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Última actualización: 1 de enero de 2024</p>

            {/* Compliance Badges */}
            <div className="flex justify-center gap-2 mt-4">
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">GDPR Compliant</Badge>
              <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">ISO 27001</Badge>
              <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                SOC 2 Type II
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                  <Eye className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  1. Información que Recopilamos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>
                  En N3uralia, recopilamos información para proporcionar mejores servicios a nuestros usuarios. La
                  información que recopilamos incluye:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                      Información Personal
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      <li>Nombre y apellidos</li>
                      <li>Dirección de correo electrónico</li>
                      <li>Número de teléfono</li>
                      <li>Información de la empresa</li>
                      <li>Cargo o posición</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                      Información Técnica
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      <li>Dirección IP</li>
                      <li>Tipo de navegador</li>
                      <li>Páginas visitadas</li>
                      <li>Tiempo de permanencia</li>
                      <li>Datos de uso del servicio</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                  <FileText className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  2. Cómo Utilizamos su Información
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>Utilizamos la información recopilada para los siguientes propósitos:</p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Prestación de Servicios</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Para desarrollar, implementar y mantener agentes conversacionales personalizados
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Comunicación</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Para responder consultas, proporcionar soporte técnico y enviar actualizaciones
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Mejora de Servicios</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Para analizar el uso y mejorar la calidad de nuestros servicios
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                  <Lock className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                  3. Protección de Datos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>Implementamos medidas de seguridad técnicas y organizacionales para proteger su información:</p>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Medidas de Seguridad</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-green-700 dark:text-green-400">
                      <li>• Cifrado SSL/TLS en tránsito</li>
                      <li>• Cifrado AES-256 en reposo</li>
                      <li>• Autenticación multifactor</li>
                      <li>• Auditorías de seguridad regulares</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-green-700 dark:text-green-400">
                      <li>• Acceso basado en roles</li>
                      <li>• Monitoreo 24/7</li>
                      <li>• Respaldo automático</li>
                      <li>• Certificación ISO 27001</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                  <Globe className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  4. Transferencias Internacionales
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>
                  Dado que operamos globalmente con oficinas en Chile, Singapur y Rusia, su información puede ser
                  transferida y procesada en estos países.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Garantías de Protección</h4>
                  <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-400">
                    <li>• Cláusulas contractuales estándar aprobadas por la UE</li>
                    <li>• Evaluaciones de impacto de transferencia</li>
                    <li>• Medidas de seguridad adicionales según sea necesario</li>
                    <li>• Cumplimiento con regulaciones locales de protección de datos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                  <Users className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  5. Sus Derechos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>Usted tiene los siguientes derechos respecto a su información personal:</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"></div>
                      <span className="font-medium text-slate-900 dark:text-white">Derecho de Acceso</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"></div>
                      <span className="font-medium text-slate-900 dark:text-white">Derecho de Rectificación</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"></div>
                      <span className="font-medium text-slate-900 dark:text-white">Derecho de Supresión</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"></div>
                      <span className="font-medium text-slate-900 dark:text-white">Derecho de Portabilidad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"></div>
                      <span className="font-medium text-slate-900 dark:text-white">Derecho de Oposición</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"></div>
                      <span className="font-medium text-slate-900 dark:text-white">Derecho de Limitación</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                  6. Retención de Datos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>
                  Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos
                  descritos en esta política.
                </p>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Períodos de Retención</h4>
                  <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-400">
                    <li>• Datos de contacto: Mientras mantenga una relación comercial con nosotros</li>
                    <li>• Datos de uso del servicio: 3 años después del último uso</li>
                    <li>• Datos de facturación: 7 años por requisitos legales</li>
                    <li>• Logs de seguridad: 1 año para fines de auditoría</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">7. Contacto y Ejercicio de Derechos</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>Para ejercer sus derechos o si tiene preguntas sobre esta política, puede contactarnos:</p>

                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Oficial de Protección de Datos</h4>
                  <ul className="space-y-2">
                    <li>
                      <strong>Email:</strong> privacy@n3uralia.com
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> +56 9 4094 6660
                    </li>
                    <li>
                      <strong>Dirección:</strong> Santiago, Chile
                    </li>
                    <li>
                      <strong>Tiempo de respuesta:</strong> 30 días calendario
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  También tiene derecho a presentar una queja ante la autoridad de protección de datos de su
                  jurisdicción si considera que hemos procesado su información personal de manera incorrecta.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
