import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, Lock, Eye, Database, Clock } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border-green-500/30">
              <Shield className="w-4 h-4 mr-2" />
              Protección de Datos
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Política de Privacidad
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Cómo recopilamos, utilizamos y protegemos su información personal
            </p>
            <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-2" />
              Última actualización: 1 de septiembre de 2025
            </div>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-primary" />
                  1. Introducción
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  En N3uralia, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta
                  Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos su información
                  cuando utiliza nuestros servicios de agentes de IA conversacional.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Esta política se aplica a todos los usuarios de nuestros servicios, incluyendo visitantes del sitio
                  web, clientes actuales y potenciales, y usuarios finales de nuestros agentes de IA.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-primary" />
                  2. Información que Recopilamos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold text-foreground">2.1 Información Personal</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Nombre completo y información de contacto</li>
                  <li>Dirección de correo electrónico y número de teléfono</li>
                  <li>Información de la empresa y cargo</li>
                  <li>Dirección de facturación y datos de pago</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-6">2.2 Datos de Uso</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Conversaciones con nuestros agentes de IA</li>
                  <li>Métricas de rendimiento y análisis de uso</li>
                  <li>Logs de sistema y datos técnicos</li>
                  <li>Información del dispositivo y navegador</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-6">2.3 Datos Técnicos</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Direcciones IP y ubicación geográfica aproximada</li>
                  <li>Cookies y tecnologías de seguimiento similares</li>
                  <li>Datos de integración con sistemas de terceros</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle>3. Cómo Utilizamos su Información</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos la información recopilada para los siguientes propósitos:
                </p>

                <h4 className="font-semibold text-foreground">3.1 Prestación de Servicios</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Desarrollar y personalizar agentes de IA según sus necesidades</li>
                  <li>Procesar y responder a consultas de usuarios</li>
                  <li>Mantener y mejorar el rendimiento de nuestros servicios</li>
                  <li>Proporcionar soporte técnico y atención al cliente</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-6">3.2 Mejora y Análisis</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Analizar patrones de uso para optimizar nuestros algoritmos</li>
                  <li>Generar informes de rendimiento y métricas</li>
                  <li>Investigar y desarrollar nuevas funcionalidades</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-6">3.3 Comunicación</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Enviar actualizaciones sobre nuestros servicios</li>
                  <li>Notificar cambios importantes en términos o políticas</li>
                  <li>Responder a consultas y solicitudes de soporte</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>4. Compartir Información</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  N3uralia no vende, alquila o comparte su información personal con terceros, excepto en las siguientes
                  circunstancias:
                </p>

                <h4 className="font-semibold text-foreground">4.1 Proveedores de Servicios</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Compartimos información con proveedores de confianza que nos ayudan a operar nuestros servicios, como
                  proveedores de hosting, procesamiento de pagos y análisis de datos. Estos proveedores están
                  contractualmente obligados a proteger su información.
                </p>

                <h4 className="font-semibold text-foreground mt-6">4.2 Requisitos Legales</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos divulgar información cuando sea requerido por ley, orden judicial, o para proteger nuestros
                  derechos legales y los de nuestros usuarios.
                </p>

                <h4 className="font-semibold text-foreground mt-6">4.3 Consentimiento</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Con su consentimiento explícito, podemos compartir información para propósitos específicos que usted
                  haya autorizado.
                </p>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-primary" />
                  5. Seguridad de los Datos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos múltiples capas de seguridad para proteger su información:
                </p>

                <h4 className="font-semibold text-foreground">5.1 Medidas Técnicas</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Encriptación AES-256 para datos en reposo y en tránsito</li>
                  <li>Autenticación multifactor para acceso a sistemas</li>
                  <li>Firewalls y sistemas de detección de intrusiones</li>
                  <li>Monitoreo continuo de seguridad 24/7</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-6">5.2 Medidas Organizacionales</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Acceso limitado basado en principio de menor privilegio</li>
                  <li>Capacitación regular en seguridad para empleados</li>
                  <li>Auditorías de seguridad periódicas</li>
                  <li>Planes de respuesta a incidentes</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-6">5.3 Cumplimiento</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Cumplimiento con GDPR y regulaciones locales</li>
                  <li>Certificaciones ISO 27001 y SOC 2</li>
                  <li>Evaluaciones de seguridad de terceros</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle>6. Retención de Datos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos
                  descritos en esta política:
                </p>

                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <strong>Datos de cuenta:</strong> Mientras mantenga una cuenta activa con nosotros
                  </li>
                  <li>
                    <strong>Datos de conversación:</strong> Hasta 3 años para mejora de servicios
                  </li>
                  <li>
                    <strong>Datos de facturación:</strong> 7 años según requisitos fiscales
                  </li>
                  <li>
                    <strong>Logs técnicos:</strong> 12 meses para análisis de seguridad
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  Después de estos períodos, eliminamos o anonimizamos los datos de forma segura.
                </p>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardHeader>
                <CardTitle>7. Sus Derechos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Usted tiene los siguientes derechos respecto a su información personal:
                </p>

                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <strong>Acceso:</strong> Solicitar una copia de los datos que tenemos sobre usted
                  </li>
                  <li>
                    <strong>Rectificación:</strong> Corregir información inexacta o incompleta
                  </li>
                  <li>
                    <strong>Eliminación:</strong> Solicitar la eliminación de sus datos personales
                  </li>
                  <li>
                    <strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado
                  </li>
                  <li>
                    <strong>Restricción:</strong> Limitar el procesamiento de sus datos
                  </li>
                  <li>
                    <strong>Oposición:</strong> Oponerse al procesamiento de sus datos
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  Para ejercer estos derechos, contáctenos en privacy@n3uralia.com. Responderemos a su solicitud dentro
                  de 30 días.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>8. Cookies y Tecnologías de Seguimiento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies y tecnologías similares para mejorar su experiencia:
                </p>

                <h4 className="font-semibold text-foreground">8.1 Tipos de Cookies</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <strong>Esenciales:</strong> Necesarias para el funcionamiento del sitio
                  </li>
                  <li>
                    <strong>Funcionales:</strong> Mejoran la funcionalidad y personalización
                  </li>
                  <li>
                    <strong>Analíticas:</strong> Nos ayudan a entender cómo usa nuestros servicios
                  </li>
                  <li>
                    <strong>Marketing:</strong> Utilizadas para mostrar contenido relevante
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  Puede gestionar sus preferencias de cookies a través de la configuración de su navegador o nuestro
                  centro de preferencias.
                </p>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card>
              <CardHeader>
                <CardTitle>9. Transferencias Internacionales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Sus datos pueden ser procesados en países fuera de su jurisdicción. Cuando esto ocurra, implementamos
                  salvaguardas apropiadas:
                </p>

                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Cláusulas contractuales estándar aprobadas por la UE</li>
                  <li>Certificaciones de adecuación de protección de datos</li>
                  <li>Medidas de seguridad técnicas y organizacionales adicionales</li>
                </ul>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card>
              <CardHeader>
                <CardTitle>10. Cambios a esta Política</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Cuando hagamos cambios significativos,
                  le notificaremos por:
                </p>

                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Correo electrónico a la dirección registrada en su cuenta</li>
                  <li>Aviso prominente en nuestro sitio web</li>
                  <li>Notificación dentro de nuestros servicios</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  La versión actualizada entrará en vigor 30 días después de la notificación.
                </p>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            {/* Contact */}
            <Card className="bg-muted/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">¿Preguntas sobre privacidad?</h3>
                <p className="text-muted-foreground mb-6">
                  Si tiene preguntas sobre esta Política de Privacidad o cómo manejamos sus datos, nuestro equipo de
                  privacidad está aquí para ayudarle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-sm text-muted-foreground">📧 privacy@n3uralia.com</div>
                  <div className="text-sm text-muted-foreground">📞 +56 9 4094 6660</div>
                  <div className="text-sm text-muted-foreground">📍 Santiago, Chile</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
