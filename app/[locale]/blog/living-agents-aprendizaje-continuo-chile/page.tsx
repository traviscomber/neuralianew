import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { buildSeo } from "@/lib/metadata-utils"

export const metadata: Metadata = buildSeo({
  locale: "es",
  path: "/es/blog/living-agents-aprendizaje-continuo-chile",
  title: "Living Agents: IA que Aprende tu Negocio Chileno | N3uralia",
  description:
    "Agentes que mejoran cada interacción. Descubre cómo adaptan decisiones al contexto específico de tu operación.",
  keywords:
    "living agents, agentes que aprenden, machine learning continuo, IA adaptativa, agentes inteligentes empresas",
})

export default function BlogPost() {
  return (
    <>
      <Footer />
    </>
  )
}
