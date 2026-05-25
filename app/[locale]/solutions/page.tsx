import type { Metadata } from "next"

type Props = {
  params: Promise<{ locale: string }>
}

// Dynamic metadata based on locale - /es/solutions points to /es/soluciones canonical
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isES = locale === 'es'
  
  // Spanish users accessing /es/solutions should be canonicalized to /es/soluciones
  const canonical = isES 
    ? 'https://n3uralia.com/es/soluciones'
    : 'https://n3uralia.com/en/solutions'
  
  return {
    title: isES 
      ? "Soluciones de Sistemas Agenticos - Automatización para Múltiples Industrias"
      : "Agentic Systems Solutions - Automation for Every Industry",
    description: isES
      ? "Soluciones especializadas de sistemas agenticos para cada industria: retail, manufactura, turismo, finanzas, gobierno."
      : "Industry-specific agentic system solutions: retail & e-commerce, manufacturing, hospitality & tourism, financial services, government.",
    alternates: {
      canonical,
      languages: {
        "es": "https://n3uralia.com/es/soluciones",
        "en": "https://n3uralia.com/en/solutions",
      },
    },
    openGraph: {
      title: isES 
        ? "Soluciones de Sistemas Agenticos"
        : "Agentic Systems Solutions",
      description: isES
        ? "Soluciones especializadas para automatización inteligente."
        : "Industry-specific solutions for intelligent automation.",
      url: canonical,
      type: 'website',
    },
  }
}

export { default } from "../soluciones/page"
