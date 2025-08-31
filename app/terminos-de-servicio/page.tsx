import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"

export default function TerminosDeServicio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos de Servicio</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 mb-4">
              Al acceder y utilizar los servicios de Neuralia ("nosotros", "nuestro" o "la empresa"), usted acepta estar
              sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no debe
              utilizar nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-700 mb-4">
              Neuralia proporciona servicios de inteligencia artificial conversacional, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Desarrollo de chatbots y asistentes virtuales</li>
              <li>Integración de IA en sistemas existentes</li>
              <li>Consultoría en automatización de atención al cliente</li>
              <li>Plataformas especializadas como EcosueloLab y Parrotfy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Registro y Cuentas de Usuario</h2>
            <p className="text-gray-700 mb-4">
              Para acceder a ciertos servicios, puede ser necesario crear una cuenta. Usted es responsable de mantener
              la confidencialidad de su información de cuenta y de todas las actividades que ocurran bajo su cuenta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Uso Aceptable</h2>
            <p className="text-gray-700 mb-4">
              Usted se compromete a utilizar nuestros servicios únicamente para fines legales y de acuerdo con estos
              términos. Está prohibido:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Usar los servicios para actividades ilegales o no autorizadas</li>
              <li>Intentar acceder a sistemas o datos sin autorización</li>
              <li>Interferir con el funcionamiento de nuestros servicios</li>
              <li>Transmitir contenido malicioso o dañino</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
            <p className="text-gray-700 mb-4">
              Todos los derechos de propiedad intelectual en nuestros servicios y tecnología pertenecen a Neuralia. Los
              clientes mantienen la propiedad de sus datos, pero nos otorgan una licencia para procesarlos según sea
              necesario para proporcionar nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacidad y Protección de Datos</h2>
            <p className="text-gray-700 mb-4">
              El manejo de sus datos personales se rige por nuestra Política de Privacidad, que forma parte integral de
              estos términos. Cumplimos con las regulaciones aplicables de protección de datos en Chile, Singapur y
              otras jurisdicciones donde operamos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Pagos y Facturación</h2>
            <p className="text-gray-700 mb-4">
              Los términos de pago se especifican en los contratos individuales de servicio. Los pagos vencidos pueden
              resultar en la suspensión del servicio. Todos los precios están sujetos a los impuestos aplicables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 mb-4">
              En la máxima medida permitida por la ley, Neuralia no será responsable por daños indirectos, incidentales,
              especiales o consecuentes que resulten del uso de nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Terminación</h2>
            <p className="text-gray-700 mb-4">
              Cualquiera de las partes puede terminar el servicio con previo aviso. Nos reservamos el derecho de
              suspender o terminar cuentas que violen estos términos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Ley Aplicable</h2>
            <p className="text-gray-700 mb-4">
              Estos términos se rigen por las leyes de Chile para clientes en América Latina y por las leyes de Singapur
              para clientes en Asia-Pacífico. Las disputas se resolverán en la jurisdicción correspondiente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modificaciones</h2>
            <p className="text-gray-700 mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos se
              notificarán con al menos 30 días de anticipación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contacto</h2>
            <p className="text-gray-700 mb-4">Para preguntas sobre estos términos, contáctenos en:</p>
            <ul className="list-none text-gray-700">
              <li>
                <strong>Email:</strong> hello@n3uralia.com
              </li>
              <li>
                <strong>WhatsApp:</strong> +56940946660
              </li>
              <li>
                <strong>Oficinas:</strong> Santiago, Chile | Singapur
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
