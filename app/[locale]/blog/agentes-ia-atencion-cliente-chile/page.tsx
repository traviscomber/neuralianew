import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { buildSeo } from "@/lib/metadata-utils"

export const metadata: Metadata = buildSeo({
  locale: "es",
  path: "/es/blog/agentes-ia-atencion-cliente-chile",
  title: "Agentes IA para Atención al Cliente en Chile | N3uralia Blog",
  description:
    "Reduce tiempos de respuesta 24/7. Cómo empresas chilenas automatizan soporte con agentes IA que entienden contexto local y satisfacción del cliente.",
  keywords:
    "agentes IA atención cliente, customer service, automación soporte, chatbot inteligente chile, atencion cliente 24/7, agentes ia chile",
})

export default function BlogPost() {
  return (
    <>
      <Footer />
    </>
  )
}
