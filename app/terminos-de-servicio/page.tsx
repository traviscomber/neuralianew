import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Scale, Shield, FileText, Clock } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30">
              <Scale className="w-4 h-4 mr-2" />
              Términos Legales
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Términos de Servicio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Condiciones que rigen el uso de nuestros servicios de IA conversacional
            </p>
            <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-2" />
              Última actualización: 1 de septiembre de 2025
            </div>
          </div>

          <div className="space-y-8">
            {/* Acceptance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  1. Aceptación de los Términos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Al acceder y utilizar los servicios de N3uralia ("nosotros", "nuestro" o "la empresa"), usted
                  ("usuario" o "cliente") acepta estar sujeto a estos Términos de Servicio y todas las leyes y
                  regulaciones aplicables.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a nuestros
                  servicios. Los materiales contenidos en este sitio web están protegidos por las leyes de derechos de
                  autor y marcas comerciales aplicables.
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  2. Descripción de los Servicios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  N3uralia proporciona servicios de desarrollo, implementación y mantenimiento de agentes de
                  inteligencia artificial conversacional, incluyendo pero no limitado a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Desarrollo de chatbots y agentes virtuales personalizados</li>
                  <li>Integración con sistemas existentes (CRM, ERP, bases de datos)</li>
                  <li>Servicios de consultoría en inteligencia artificial</li>
                  <li>Soporte técnico y mantenimiento continuo</li>
                  <li>Análisis y optimización de rendimiento</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de nuestros
                  servicios en cualquier momento, con o sin previo aviso.
                </p>
              </CardContent>
            </Card>

            {/* User Obligations */}
            <Card>
              <CardHeader>
                <CardTitle>3. Obligaciones del Usuario</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Al utilizar nuestros servicios, usted se compromete a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Proporcionar información precisa y actualizada durante el proceso de contratación</li>
                  <li>Utilizar los servicios únicamente para fines legales y éticos</li>
                  <li>No intentar acceder, alterar o dañar nuestros sistemas o infraestructura</li>
                  <li>Mantener la confidencialidad de las credenciales de acceso proporcionadas</li>
                  <li>Cumplir con todas las leyes y regulaciones aplicables en su jurisdicción</li>
                  <li>No utilizar los servicios para actividades fraudulentas, ilegales o dañinas</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardHeader>
                <CardTitle>4. Términos de Pago</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Los términos de pago se establecerán en el contrato específico de servicios. Generalmente incluyen:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Pago inicial del 50% al firmar el contrato</li>
                  <li>Pagos parciales según hitos del proyecto</li>
                  <li>Pago final al completar la implementación</li>
                  <li>Pagos mensuales para servicios de mantenimiento y soporte continuo</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Los pagos vencidos después de 30 días estarán sujetos a cargos por mora. N3uralia se reserva el
                  derecho de suspender los servicios en caso de falta de pago.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>5. Propiedad Intelectual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  N3uralia retiene todos los derechos de propiedad intelectual sobre:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Tecnología base y algoritmos de inteligencia artificial</li>
                  <li>Plataformas y herramientas de desarrollo propietarias</li>
                  <li>Metodologías y procesos de implementación</li>
                  <li>Documentación técnica y materiales de capacitación</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  El cliente retiene la propiedad de sus datos y contenido específico. Los agentes desarrollados
                  específicamente para el cliente serán de su propiedad, pero utilizando nuestra tecnología base bajo
                  licencia.
                </p>
              </CardContent>
            </Card>

            {/* Data Privacy */}
            <Card>
              <CardHeader>
                <CardTitle>6. Privacidad y Protección de Datos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  N3uralia se compromete a proteger la privacidad y seguridad de los datos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Implementamos encriptación end-to-end para todas las comunicaciones</li>
                  <li>Cumplimos con GDPR, CCPA y regulaciones locales de protección de datos</li>
                  <li>No compartimos datos del cliente con terceros sin consentimiento explícito</li>
                  <li>Realizamos auditorías de seguridad regulares</li>
                  <li>Mantenemos registros de acceso y procesamiento de datos</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Para más detalles, consulte nuestra Política de Privacidad.
                </p>
              </CardContent>
            </Card>

            {/* Limitations */}
            <Card>
              <CardHeader>
                <CardTitle>7. Limitaciones de Responsabilidad</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">N3uralia no será responsable por:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Daños indirectos, incidentales o consecuenciales</li>
                  <li>Pérdida de beneficios, datos o oportunidades comerciales</li>
                  <li>Interrupciones del servicio debido a mantenimiento programado</li>
                  <li>Fallas causadas por sistemas de terceros o infraestructura externa</li>
                  <li>Uso indebido de los servicios por parte del cliente</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestra responsabilidad total no excederá el monto pagado por los servicios en los 12 meses anteriores
                  al evento que dio lugar al reclamo.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle>8. Terminación del Servicio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Cualquiera de las partes puede terminar el acuerdo de servicios:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Con 30 días de aviso previo por escrito</li>
                  <li>Inmediatamente en caso de incumplimiento material</li>
                  <li>En caso de insolvencia o quiebra de cualquiera de las partes</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Al terminar el servicio, proporcionaremos una transición ordenada y la entrega de todos los materiales
                  del cliente dentro de los 30 días posteriores.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle>9. Ley Aplicable y Jurisdicción</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Estos términos se rigen por las leyes de Chile. Cualquier disputa será resuelta en los tribunales
                  competentes de Santiago, Chile.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Las partes acuerdan intentar resolver cualquier disputa mediante mediación antes de recurrir a
                  procedimientos judiciales.
                </p>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card>
              <CardHeader>
                <CardTitle>10. Modificaciones a los Términos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  N3uralia se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán
                  notificados con al menos 30 días de anticipación y entrarán en vigor para nuevos contratos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  El uso continuado de nuestros servicios después de la notificación constituye la aceptación de los
                  términos modificados.
                </p>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            {/* Contact */}
            <Card className="bg-muted/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">¿Preguntas sobre estos términos?</h3>
                <p className="text-muted-foreground mb-6">
                  Si tiene alguna pregunta sobre estos Términos de Servicio, no dude en contactarnos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-sm text-muted-foreground">📧 legal@n3uralia.com</div>
                  <div className="text-sm text-muted-foreground">📞 +56 9 4094 6660</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
