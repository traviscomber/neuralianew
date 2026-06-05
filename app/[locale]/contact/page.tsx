import type { Metadata } from 'next'
import { ContactFormClient } from '@/components/contact/contact-form-client'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Contactar - N3uralia',
  description: 'Ponte en contacto con el equipo de N3uralia para consultas sobre nuestros sistemas agénticos, living agents y soluciones de IA.',
  alternates: {
    canonical: "https://n3uralia.com/es/contact",
    languages: {
      es: "https://n3uralia.com/es/contact",
      en: "https://n3uralia.com/en/contact",
    },
  },
  openGraph: {
    title: 'Contactar - N3uralia',
    description: 'Ponte en contacto con el equipo de N3uralia para consultas sobre sistemas agenticos.',
    url: "https://n3uralia.com/es/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      <Footer />
    </>
  )
}
