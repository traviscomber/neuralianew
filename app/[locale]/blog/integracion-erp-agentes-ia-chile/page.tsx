import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { buildSeo } from "@/lib/metadata-utils"

export const metadata: Metadata = buildSeo({
  locale: "es",
  path: "/es/blog/integracion-erp-agentes-ia-chile",
  title: "Integración ERP + Agentes IA en Chile | N3uralia Blog",
  description:
    "Conecta SAP, Baan o ERP legacy con agentes inteligentes sin disrupciones. Casos reales de manufactura y retail chileno.",
  keywords:
    "integración ERP IA, SAP agentes, ERP automación, sistemas legacy, integración empresas chilenas",
})

export default function BlogPost() {
  return (
    <>
      <Footer />
    </>
  )
}
