import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { buildSeo } from "@/lib/metadata-utils"

export const metadata: Metadata = buildSeo({
  locale: "es",
  path: "/es/blog/automatizacion-invoice-processing-chile",
  title: "Automatización de Facturación IA en Chile | N3uralia Blog",
  description:
    "Procesa 10.000+ facturas/mes sin errores. Integración con contabilidad local y normas tributarias chilenas.",
  keywords:
    "automatización facturación, invoice processing, OCR factura, contabilidad automática, automatización tributaria chile",
})

export default function BlogPost() {
  return (
    <>
      <Footer />
    </>
  )
}
