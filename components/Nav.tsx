'use client';

import Link from "next/link";
import type { Locale } from "@/content/dictionaries";
import { getDict } from "@/content/dictionaries";

export function Nav({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "rgba(10,10,12,0.7)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link href={`/${locale}`} style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
          N3uralia
        </Link>

        <nav style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <Link href={`/${locale}/platform`} style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            {d.nav.platform}
          </Link>
          <Link href={`/${locale}/agentic-systems`} style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            {d.nav.agentic}
          </Link>
          <Link href={`/${locale}/ai-infrastructure`} style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            {d.nav.infra}
          </Link>
          <Link href={`/${locale}/playbooks`} style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            {d.nav.playbooks}
          </Link>
          <Link href={`/${locale}/case-studies`} style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            {d.nav.caseStudies}
          </Link>
          <Link href={`/${locale}/labs`} style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            {d.nav.labs}
          </Link>

          <span style={{ opacity: 0.35 }}>|</span>
          <Link href={`/es`} style={{ color: "white", textDecoration: "none", opacity: locale === "es" ? 1 : 0.6 }}>
            ES
          </Link>
          <Link href={`/en`} style={{ color: "white", textDecoration: "none", opacity: locale === "en" ? 1 : 0.6 }}>
            EN
          </Link>
        </nav>
      </div>
    </header>
  );
}
