import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { buildSeo } from "@/lib/metadata-utils"

export const metadata: Metadata = buildSeo({
  locale: "es",
  path: "/es/blog/rpa-vs-agentes-ia-cual-elegir-chile",
  title: "RPA vs Agentes IA: ¿Cuál Elegir en Chile? | N3uralia Blog",
  description:
    "Comparativa técnica entre RPA tradicional y Living Agents. Ventajas, limitaciones y cuándo usar cada uno.",
  keywords:
    "RPA vs agentes IA, automatización robótica procesos, Living Agents comparación, cual es mejor",
})

export default function BlogPost() {
  return (
    <>
      <Footer />
    </>
  )
}
