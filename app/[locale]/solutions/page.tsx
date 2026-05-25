import type { Metadata } from "next"

// /solutions redirects to the canonical Spanish path /soluciones
// Both EN and ES should have self-referencing canonicals
export const metadata: Metadata = {
  title: "Agentic Systems Solutions - Automation for Every Industry",
  description:
    "Industry-specific agentic system solutions: retail & e-commerce, manufacturing, hospitality & tourism, financial services, government. Living agents, multi-agent orchestration, production-ready automation.",
  keywords:
    "agentic systems solutions, living agents, retail automation, intelligent manufacturing, tourism AI, finance automation, e-commerce, intelligent agents, n3uralia",
  alternates: {
    canonical: `https://n3uralia.com/en/solutions`,
    languages: {
      "es": "https://n3uralia.com/es/soluciones",
      "en": "https://n3uralia.com/en/solutions",
    },
  },
  openGraph: {
    title: "Agentic Systems Solutions - Automation for Every Industry",
    description: "Industry-specific solutions for intelligent automation.",
    url: "https://n3uralia.com/en/solutions",
    type: 'website',
  },
}

export { default } from "../soluciones/page"
