"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamic import with ssr: false is now allowed in client component
const Footer = dynamic(() => import("@/components/landing/footer"), {
  loading: () => <div className="h-32 bg-muted animate-pulse" />,
  ssr: false,
})

// Main content component
function PrivacyContent() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-foreground mb-8">Políticas de Privacidad</h1>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-muted-foreground mb-8">
          <strong>Última actualización:</strong> 1 de septiembre de 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introducción</h2>
          <p className="text-muted-foreground mb-4">
            En N3uralia, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta Política de
            Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos su información cuando utiliza
            nuestros servicios de agentes de IA conversacional.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">2. Información que Recopilamos</h2>
          <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Información Personal</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Información de la empresa</li>
            <li>Cargo o posición</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Información Técnica</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Dirección IP</li>
            <li>Tipo de navegador y versión</li>
            <li>Sistema operativo</li>
            <li>Páginas visitadas y tiempo de permanencia</li>
            <li>Cookies y tecnologías similares</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Datos de Conversación</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Mensajes intercambiados con nuestros chatbots</li>
            <li>Consultas y respuestas</li>
            <li>Preferencias de usuario</li>
            <li>Historial de interacciones</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cómo Utilizamos su Información</h2>
          <p className="text-muted-foreground mb-4">Utilizamos su información para:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Proporcionar y mejorar nuestros servicios de IA conversacional</li>
            <li>Personalizar su experiencia de usuario</li>
            <li>Comunicarnos con usted sobre nuestros servicios</li>
            <li>Procesar pagos y gestionar cuentas</li>
            <li>Cumplir con obligaciones legales</li>
            <li>Entrenar y mejorar nuestros modelos de IA</li>
            <li>Realizar análisis y generar estadísticas agregadas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. Base Legal para el Procesamiento</h2>
          <p className="text-muted-foreground mb-4">Procesamos sus datos personales basándose en:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>
              <strong>Consentimiento:</strong> Cuando nos ha dado permiso explícito
            </li>
            <li>
              <strong>Contrato:</strong> Para cumplir con nuestros servicios
            </li>
            <li>
              <strong>Interés legítimo:</strong> Para mejorar nuestros servicios
            </li>
            <li>
              <strong>Obligación legal:</strong> Para cumplir con la ley
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. Compartir Información</h2>
          <p className="text-muted-foreground mb-4">
            No vendemos sus datos personales. Podemos compartir información con:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>
              <strong>Proveedores de servicios:</strong> Para operaciones comerciales
            </li>
            <li>
              <strong>Socios tecnológicos:</strong> Para integración de servicios
            </li>
            <li>
              <strong>Autoridades legales:</strong> Cuando sea requerido por ley
            </li>
            <li>
              <strong>Empresas del grupo:</strong> Entre nuestras oficinas globales
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Transferencias Internacionales</h2>
          <p className="text-muted-foreground mb-4">
            Dado que operamos en Chile y Singapur, sus datos pueden ser transferidos entre estas jurisdicciones.
            Implementamos salvaguardas apropiadas para proteger sus datos durante estas transferencias, incluyendo:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Cláusulas contractuales estándar</li>
            <li>Certificaciones de adecuación</li>
            <li>Medidas de seguridad técnicas y organizacionales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">7. Seguridad de Datos</h2>
          <p className="text-muted-foreground mb-4">
            Implementamos medidas de seguridad técnicas y organizacionales para proteger sus datos, incluyendo:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Encriptación de datos en tránsito y en reposo</li>
            <li>Controles de acceso estrictos</li>
            <li>Monitoreo continuo de seguridad</li>
            <li>Auditorías regulares de seguridad</li>
            <li>Capacitación del personal en protección de datos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">8. Retención de Datos</h2>
          <p className="text-muted-foreground mb-4">
            Conservamos sus datos personales solo durante el tiempo necesario para:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Proporcionar nuestros servicios</li>
            <li>Cumplir con obligaciones legales</li>
            <li>Resolver disputas</li>
            <li>Hacer cumplir nuestros acuerdos</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            Los períodos específicos de retención varían según el tipo de datos y el propósito del procesamiento.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">9. Sus Derechos</h2>
          <p className="text-muted-foreground mb-4">
            Dependiendo de su ubicación, puede tener los siguientes derechos:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>
              <strong>Acceso:</strong> Solicitar una copia de sus datos personales
            </li>
            <li>
              <strong>Rectificación:</strong> Corregir datos inexactos o incompletos
            </li>
            <li>
              <strong>Eliminación:</strong> Solicitar la eliminación de sus datos
            </li>
            <li>
              <strong>Restricción:</strong> Limitar el procesamiento de sus datos
            </li>
            <li>
              <strong>Portabilidad:</strong> Recibir sus datos en formato estructurado
            </li>
            <li>
              <strong>Oposición:</strong> Oponerse al procesamiento de sus datos
            </li>
            <li>
              <strong>Retirar consentimiento:</strong> En cualquier momento
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">10. Cookies y Tecnologías Similares</h2>
          <p className="text-muted-foreground mb-4">Utilizamos cookies y tecnologías similares para:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Mejorar la funcionalidad del sitio web</li>
            <li>Analizar el uso del sitio</li>
            <li>Personalizar contenido</li>
            <li>Recordar preferencias</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            Puede gestionar las cookies a través de la configuración de su navegador.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">11. Menores de Edad</h2>
          <p className="text-muted-foreground mb-4">
            Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información
            personal de menores sin el consentimiento parental apropiado.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">12. Cambios a esta Política</h2>
          <p className="text-muted-foreground mb-4">
            Podemos actualizar esta Política de Privacidad periódicamente. Los cambios significativos se notificarán con
            al menos 30 días de anticipación a través de nuestro sitio web o por correo electrónico.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contacto y Quejas</h2>
          <p className="text-muted-foreground mb-4">
            Para ejercer sus derechos o hacer consultas sobre privacidad, contáctenos:
          </p>
          <ul className="list-none text-muted-foreground mb-4">
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
          <p className="text-muted-foreground mb-4">
            También puede presentar una queja ante las autoridades de protección de datos correspondientes:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>
              <strong>Chile:</strong> Servicio Nacional del Consumidor (SERNAC)
            </li>
            <li>
              <strong>Singapur:</strong> Personal Data Protection Commission (PDPC)
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default function PrivacyClientWrapper() {
  return (
    <>
      <PrivacyContent />
      <Suspense fallback={<div className="h-32 bg-muted animate-pulse" />}>
        <Footer />
      </Suspense>
    </>
  )
}
