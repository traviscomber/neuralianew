'use client';

import Link from "next/link";
import type { Locale } from "@/content/dictionaries";
import type { CaseStudy } from "@/content/caseStudies";
import { t2 } from "@/content/caseStudies";

export function CaseStudyCard({ caseStudy, locale }: { caseStudy: CaseStudy; locale: Locale }) {
  return (
    <Link
      href={`/${locale}/case-studies/${caseStudy.slug}`}
      style={{
        display: "block",
        padding: "24px",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "8px",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = "rgba(255,255,255,0.02)";
        el.style.borderColor = "rgba(255,255,255,0.16)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = "transparent";
        el.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      <div style={{ marginBottom: "12px" }}>
        <span style={{ fontSize: "12px", opacity: 0.6 }}>{t2(locale, caseStudy.verticalTag)}</span>
      </div>
      <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 8px 0" }}>
        {t2(locale, caseStudy.title)}
      </h3>
      <p style={{ opacity: 0.8, lineHeight: 1.6, fontSize: "14px", margin: "0 0 16px 0" }}>
        {t2(locale, caseStudy.summary)}
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {caseStudy.highlights.slice(0, 2).map((h) => (
          <div key={h.label.es} style={{ fontSize: "13px", opacity: 0.7 }}>
            <div style={{ opacity: 0.5 }}>{t2(locale, h.label)}</div>
            <div style={{ fontWeight: 600, marginTop: "4px" }}>{t2(locale, h.value)}</div>
          </div>
        ))}
      </div>
    </Link>
  );
}
