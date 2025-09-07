import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Users, Clock } from "lucide-react"

export default function TerminosDeServicioPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navigation />
      <main className="pt-20 pb-16 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Términos de Servicio</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Condiciones de uso de los servicios de N3uralia
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Última actualización: 1 de enero de 2024</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                  <Users className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  1. Aceptación de los Términos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>
                  Al acceder y utilizar los servicios de N3uralia ("nosotros", "nuestro" o "la empresa"), usted acepta
                  estar sujeto a estos Términos de Servicio y todas las leyes y regulaciones aplicables.
                </p>
                <p>
                  Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio y
                  nuestros servicios.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                  <Shield className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                  2. Descripción del Servicio
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>
                  N3uralia proporciona servicios de desarrollo e implementación de agentes conversacionales inteligentes
                  y sistemas de inteligencia artificial para empresas.
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Nuestros servicios incluyen:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                    <li>Desarrollo de agentes conversacionales personalizados</li>
                    <li>Integración con plataformas de mensajería (WhatsApp, etc.)</li>
                    <li>Consultoría en inteligencia artificial</li>
                    <li>Soporte técnico y mantenimiento</li>
                    <li>Capacitación y documentación</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                  <Clock className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  3. Condiciones de Uso
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <h4 className="font-semibold text-slate-900 dark:text-white">3.1 Uso Permitido</h4>
                <p>
                  Usted puede usar nuestros servicios únicamente para fines comerciales legítimos y de acuerdo con estos
                  términos.
                </p>

                <h4 className="font-semibold text-slate-900 dark:text-white">3.2 Restricciones</h4>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-red-800 dark:text-red-300 font-medium mb-2">Está prohibido:</p>
                  <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-400">
                    <li>Usar los servicios para actividades ilegales o no autorizadas</li>
                    <li>Intentar acceder a sistemas o datos no autorizados</li>
                    <li>Interferir con el funcionamiento de nuestros servicios</li>
                    <li>Reproducir, duplicar o copiar nuestros servicios sin autorización</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">4. Propiedad Intelectual</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>
                  Los servicios y su contenido original, características y funcionalidad son y seguirán siendo propiedad
                  exclusiva de N3uralia y sus licenciantes.
                </p>
                <p>
                  Los servicios están protegidos por derechos de autor, marcas comerciales, patentes, secretos
                  comerciales y otras leyes de propiedad intelectual.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">5. Privacidad y Datos</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>
                  Su privacidad es importante para nosotros. Consulte nuestra Política de Privacidad para obtener
                  información sobre cómo recopilamos, usamos y protegemos su información.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-300">
                    <strong>Compromiso de Seguridad:</strong> Implementamos medidas de seguridad técnicas y
                    organizacionales apropiadas para proteger sus datos personales.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">6. Limitación de Responsabilidad</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>
                  En ningún caso N3uralia, sus directores, empleados, socios, agentes, proveedores o afiliados serán
                  responsables de daños indirectos, incidentales, especiales, consecuenciales o punitivos.
                </p>
                <p>
                  Nuestra responsabilidad total hacia usted por todas las reclamaciones relacionadas con los servicios
                  no excederá el monto pagado por usted a N3uralia en los 12 meses anteriores a la reclamación.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">7. Modificaciones</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>
                  Nos reservamos el derecho de modificar o reemplazar estos términos en cualquier momento. Si una
                  revisión es material, intentaremos proporcionar un aviso de al menos 30 días antes de que entren en
                  vigencia los nuevos términos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">8. Contacto</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 dark:text-slate-300 space-y-4">
                <p>Si tiene preguntas sobre estos Términos de Servicio, puede contactarnos:</p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li>
                      <strong>Email:</strong> legal@n3uralia.com
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> +56 9 4094 6660
                    </li>
                    <li>
                      <strong>Dirección:</strong> Santiago, Chile
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
