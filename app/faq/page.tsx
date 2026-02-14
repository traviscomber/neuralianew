import type { Metadata } from 'next';
import { FaqPageClient } from '@/components/faq/faq-page-client'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: "FAQ N3uralia | Neuralia - Preguntas sobre AI Agents, Sistemas Agenticos Fullstack",
  description:
    "Preguntas frecuentes sobre N3uralia (Neuralia): qué son sistemas agenticos, AI agents, living agents, arquitectura fullstack, implementación y integración con tu empresa.",
  keywords:
    "FAQ n3uralia, neuralia, preguntas, AI agents, agentes IA, sistemas agenticos, living agents, fullstack, implementación",
}

export default function FaqPage() {
  return (
    <>
      <main className="min-h-screen pt-20 pb-20 px-4 md:px-6 lg:px-8 bg-background">
        <FaqPageClient />
      </main>
      <Footer />
    </>
  )
}
