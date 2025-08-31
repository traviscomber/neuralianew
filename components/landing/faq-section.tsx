import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, CheckCircle } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Qué tan rápido puedo tener mi agente IA funcionando?",
      answer:
        "Con Neuralia, puedes tener tu agente IA completamente operativo en menos de 48 horas. Nuestro proceso incluye configuración inicial, entrenamiento personalizado y pruebas de calidad antes del lanzamiento.",
      category: "Implementación",
    },
    {
      question: "¿Necesito conocimientos técnicos para usar la plataforma?",
      answer:
        "No necesitas ser programador. Neuralia está diseñado con una interfaz no-code que permite a cualquier persona crear y gestionar agentes IA. Ofrecemos tutoriales paso a paso y soporte técnico completo.",
      category: "Facilidad de uso",
    },
    {
      question: "¿Cómo se integra con mis sistemas existentes?",
      answer:
        "Neuralia se conecta fácilmente con más de 50 plataformas populares incluyendo CRM, WhatsApp Business, Slack, email marketing, y sistemas ERP. También ofrecemos APIs REST para integraciones personalizadas.",
      category: "Integraciones",
    },
    {
      question: "¿Qué nivel de personalización ofrecen?",
      answer:
        "Personalización completa: desde la personalidad y tono de voz del agente, hasta workflows específicos de tu industria. Puedes entrenar al agente con tu base de conocimiento y adaptar respuestas a tu marca.",
      category: "Personalización",
    },
    {
      question: "¿Cómo garantizan la seguridad de mis datos?",
      answer:
        "Implementamos seguridad de nivel bancario con encriptación end-to-end, certificación ISO 27001, compliance GDPR, y servidores en la nube con respaldo 24/7. Tus datos nunca se comparten con terceros.",
      category: "Seguridad",
    },
    {
      question: "¿Cuál es el ROI típico de implementar Neuralia?",
      answer:
        "Nuestros clientes ven un ROI promedio de 300% en los primeros 6 meses. Esto incluye reducción de costos operativos (60%), aumento en conversiones (40%), y mejora en satisfacción del cliente (35%).",
      category: "ROI",
    },
    {
      question: "¿Ofrecen soporte en español y para Latinoamérica?",
      answer:
        "Sí, tenemos soporte completo en español con un equipo dedicado para Latinoamérica. Ofrecemos onboarding personalizado, training sessions, y soporte técnico 24/7 en tu zona horaria.",
      category: "Soporte",
    },
    {
      question: "¿Qué pasa si mi volumen de conversaciones crece mucho?",
      answer:
        "Neuralia escala automáticamente según tu demanda. Nuestra infraestructura cloud maneja desde 100 hasta 1 millón de conversaciones diarias sin degradación de performance. Pagas solo por lo que usas.",
      category: "Escalabilidad",
    },
  ]

  const categories = [
    "Implementación",
    "Facilidad de uso",
    "Integraciones",
    "Personalización",
    "Seguridad",
    "ROI",
    "Soporte",
    "Escalabilidad",
  ]
  const categoryColors = {
    Implementación: "bg-blue-100 text-blue-800",
    "Facilidad de uso": "bg-green-100 text-green-800",
    Integraciones: "bg-purple-100 text-purple-800",
    Personalización: "bg-orange-100 text-orange-800",
    Seguridad: "bg-red-100 text-red-800",
    ROI: "bg-yellow-100 text-yellow-800",
    Soporte: "bg-indigo-100 text-indigo-800",
    Escalabilidad: "bg-pink-100 text-pink-800",
  }

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Preguntas frecuentes</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Resolvemos las dudas más comunes sobre nuestra plataforma de agentes IA
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <HelpCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <Badge
                      className={`mb-2 ${categoryColors[faq.category as keyof typeof categoryColors]}`}
                      variant="secondary"
                    >
                      {faq.category}
                    </Badge>
                    <CardTitle className="text-lg leading-tight">{faq.question}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <CardDescription className="text-base text-gray-700">{faq.answer}</CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">¿No encuentras la respuesta que buscas?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:soporte@neuralia.ai"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Contactar Soporte
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Agendar Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
