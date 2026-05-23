import type { Metadata } from 'next'
import { ContactFormClient } from '@/components/contact/contact-form-client'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: 'Contactar - N3uralia',
  description: 'Ponte en contacto con el equipo de N3uralia para consultas sobre nuestros sistemas agénticos, living agents y soluciones de IA.',
}

export default function ContactPage() {
  return (
    <>
      <SectionBackground />
      <main className="pt-20 min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Ponte en contacto con nosotros
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuéntanos sobre tu proyecto y te ayudaremos a transformarlo con sistemas agenticos inteligentes.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactFormClient />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
