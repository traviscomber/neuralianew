import ClientWrapper from "./client-wrapper"

export default function TerminosDeServicioPage() {
  return (
    <ClientWrapper>
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Términos de Servicio</h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Aceptación de los Términos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Al acceder y utilizar los servicios de N3uralia, usted acepta estar sujeto a estos Términos de
                  Servicio y todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos
                  términos, no debe utilizar nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Descripción del Servicio</h2>
                <p className="text-muted-foreground leading-relaxed">
                  N3uralia proporciona servicios de inteligencia artificial conversacional, incluyendo pero no limitado
                  a:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                  <li>Desarrollo de agentes de IA conversacional personalizados</li>
                  <li>Integración de chatbots en plataformas existentes</li>
                  <li>Servicios de consultoría en automatización de procesos</li>
                  <li>Soporte técnico y mantenimiento de sistemas de IA</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Uso Aceptable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Usted se compromete a utilizar nuestros servicios únicamente para fines legales y de acuerdo con estos
                  términos. Está prohibido:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                  <li>Utilizar los servicios para actividades ilegales o no autorizadas</li>
                  <li>Intentar acceder a sistemas o datos sin autorización</li>
                  <li>Interferir con el funcionamiento normal de los servicios</li>
                  <li>Reproducir, duplicar o copiar los servicios sin autorización</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Privacidad y Protección de Datos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La privacidad de sus datos es fundamental para nosotros. Nos comprometemos a:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                  <li>Proteger la confidencialidad de la información del cliente</li>
                  <li>Cumplir con las regulaciones de protección de datos aplicables</li>
                  <li>Implementar medidas de seguridad apropiadas</li>
                  <li>No compartir datos con terceros sin consentimiento explícito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Propiedad Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todos los derechos de propiedad intelectual relacionados con nuestros servicios, incluyendo software,
                  algoritmos, y metodologías, permanecen como propiedad exclusiva de N3uralia. Los clientes mantienen la
                  propiedad de sus datos y contenido proporcionado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Limitación de Responsabilidad</h2>
                <p className="text-muted-foreground leading-relaxed">
                  N3uralia no será responsable por daños indirectos, incidentales, especiales o consecuenciales que
                  resulten del uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad total no
                  excederá el monto pagado por los servicios en los últimos 12 meses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Modificaciones</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones
                  entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Es su responsabilidad
                  revisar periódicamente estos términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Terminación</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cualquiera de las partes puede terminar el acuerdo de servicio con un aviso previo de 30 días. En caso
                  de violación de estos términos, N3uralia se reserva el derecho de terminar los servicios
                  inmediatamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Ley Aplicable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estos términos se regirán e interpretarán de acuerdo con las leyes de Chile. Cualquier disputa será
                  resuelta en los tribunales competentes de Santiago, Chile.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si tiene preguntas sobre estos Términos de Servicio, puede contactarnos a través de:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p>
                    <strong>Email:</strong> legal@n3uralia.com
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> +56 9 4094 6660
                  </p>
                  <p>
                    <strong>Dirección:</strong> Santiago, Chile
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">Última actualización: Enero 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientWrapper>
  )
}
