'use client';

import Link from "next/link";
import type { Locale } from "@/content/dictionaries";
import { getDict } from "@/content/dictionaries";

export function Footer({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  
  // Fallback labels in case dictionary is undefined
  const labels = {
    caseStudies: d?.nav?.caseStudies || (locale === "es" ? "Casos de Éxito" : "Case Studies"),
    security: d?.nav?.security || (locale === "es" ? "Seguridad" : "Security"),
    nodes: d?.nav?.nodes || (locale === "es" ? "Nodos" : "Nodes"),
    patterns: d?.nav?.patterns || (locale === "es" ? "Patrones" : "Patterns"),
  };

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "28px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", opacity: 0.9 }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontWeight: 700 }}>N3uralia</div>
            <div style={{ marginTop: 8, opacity: 0.8, maxWidth: 520 }}>
              {locale === "es"
                ? "Ingeniería de IA para operaciones reales. Sistemas agénticos en producción, automatización y plataformas enterprise."
                : "AI engineering for real operations. Production agentic systems, automation, and enterprise platforms."}
            </div>
          </div>

          <div style={{ display: "grid", gap: 8 }}>
            <div style={{ fontWeight: 700 }}>{locale === "es" ? "Empresa" : "Company"}</div>
            <Link href={`/${locale}/case-studies`} style={{ color: "white", textDecoration: "none", opacity: 0.85 }}>
              {labels.caseStudies}
            </Link>
            <Link href={`/${locale}/security`} style={{ color: "white", textDecoration: "none", opacity: 0.85 }}>
              {labels.security}
            </Link>
            <Link href={`/${locale}/nodes`} style={{ color: "white", textDecoration: "none", opacity: 0.85 }}>
              {labels.nodes}
            </Link>
            <Link href={`/${locale}/patterns`} style={{ color: "white", textDecoration: "none", opacity: 0.85 }}>
              {labels.patterns}
            </Link>
          </div>
        </div>

        <div style={{ marginTop: 20, opacity: 0.55 }}>
          © {new Date().getFullYear()} N3uralia. {locale === "es" ? "Todos los derechos reservados." : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
