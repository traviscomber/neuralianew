'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/dictionaries";
import { getDict } from "@/content/dictionaries";
import { buildLocalizedPath } from "@/lib/get-locale";

export function Footer({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const pathname = usePathname() || `/${locale}`;
  const languageLinks = [
    { href: buildLocalizedPath(pathname, "es"), label: "ES" },
    { href: buildLocalizedPath(pathname, "en"), label: "EN" },
  ];

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
            <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, opacity: 0.65, textTransform: "uppercase", letterSpacing: "0.14em" }}>
                {locale === "es" ? "Idioma" : "Language"}
              </span>
              {languageLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: 999,
                    padding: "6px 10px",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gap: 8 }}>
            <div style={{ fontWeight: 700 }}>{locale === "es" ? "Empresa" : "Company"}</div>
            <Link href={`/${locale}/case-studies`} style={{ color: "white", textDecoration: "none", opacity: 0.85 }}>
              {d.nav.caseStudies}
            </Link>
            <Link href={`/${locale}/security`} style={{ color: "white", textDecoration: "none", opacity: 0.85 }}>
              {d.nav.security}
            </Link>
            <Link href={`/${locale}/nodes`} style={{ color: "white", textDecoration: "none", opacity: 0.85 }}>
              {d.nav.nodes}
            </Link>
            <Link href={`/${locale}/patterns`} style={{ color: "white", textDecoration: "none", opacity: 0.85 }}>
              {d.nav.patterns}
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
