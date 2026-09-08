import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Layers3 } from 'lucide-react'
import type { Locale } from '@/lib/get-locale'

export type RetroCaseStudyContent = {
  eyebrow: string
  title: string
  subtitle: string
  back: string
  facts: { label: string; value: string }[]
  challengeEyebrow: string
  challengeTitle: string
  challenge: string
  signals: { title: string; text: string }[]
  solutionEyebrow: string
  solutionTitle: string
  solution: string
  flow: string[]
  evidenceEyebrow: string
  evidenceTitle: string
  evidence: { title: string; text: string }[]
  ctaEyebrow: string
  ctaTitle: string
  ctaBody: string
  primaryCta: string
  secondaryCta: string
}

function href(locale: Locale, path: string) {
  return `/${locale}${path}`
}

export function RetroCaseStudy({ locale, page }: { locale: Locale; page: RetroCaseStudyContent }) {
  return (
    <main className="retro-page min-h-screen pt-20">
      <section className="retro-dark border-b border-[rgba(118,214,214,.16)]">
        <div className="retro-shell py-20 md:py-24">
          <Link
            href={href(locale, '/case-studies')}
            className="mb-10 inline-flex items-center gap-2 font-[var(--font-rajdhani)] text-[12px] uppercase tracking-[.14em] text-[var(--n3-teal-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--n3-teal-soft)]"
          >
            <ArrowLeft className="h-4 w-4" />
            {page.back}
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <small>{page.eyebrow}</small>
              <h1 className="mt-6 max-w-5xl text-[clamp(44px,5.5vw,78px)]">{page.title}</h1>
              <p className="mt-7 max-w-3xl text-[16px] leading-8 text-[var(--n3-text-muted)]">{page.subtitle}</p>
            </div>

            <div className="border-y border-[rgba(118,214,214,.2)]">
              {page.facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-[.7fr_1.3fr] gap-4 border-b border-[rgba(118,214,214,.16)] py-5 last:border-b-0">
                  <span className="telemetry">{fact.label}</span>
                  <p className="text-[15px] text-[var(--n3-text-light)]">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20">
        <div className="retro-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <small>{page.challengeEyebrow}</small>
            <h2 className="mt-5 text-[clamp(34px,4vw,56px)]">{page.challengeTitle}</h2>
            <p className="mt-6 text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.challenge}</p>
          </div>
          <div className="border-t border-[rgba(118,214,214,.16)]">
            {page.signals.map((item, index) => (
              <div key={item.title} className="grid gap-3 border-b border-[rgba(118,214,214,.16)] py-6 md:grid-cols-[64px_1fr]">
                <span className="telemetry">0{index + 1}</span>
                <div>
                  <h3 className="text-[22px] text-[var(--n3-text-light)]">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[var(--n3-text-muted)]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="retro-dark border-b border-[rgba(118,214,214,.16)] py-20">
        <div className="retro-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <small>{page.solutionEyebrow}</small>
            <Layers3 className="mt-8 h-9 w-9 text-[var(--n3-teal-soft)]" />
            <h2 className="mt-6 text-[clamp(34px,4vw,56px)]">{page.solutionTitle}</h2>
            <p className="mt-6 text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.solution}</p>
          </div>
          <div className="border-t border-[rgba(118,214,214,.16)]">
            {page.flow.map((item, index) => (
              <div key={item} className="grid grid-cols-[64px_1fr] gap-3 border-b border-[rgba(118,214,214,.16)] py-6">
                <span className="telemetry">0{index + 1}</span>
                <p className="text-[14px] leading-7 text-[var(--n3-text-muted)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20">
        <div className="retro-shell">
          <div className="mb-12 grid gap-4 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <small>{page.evidenceEyebrow}</small>
            <h2 className="text-[clamp(34px,4vw,56px)]">{page.evidenceTitle}</h2>
          </div>
          <div className="grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-3">
            {page.evidence.map((item) => (
              <article key={item.title} className="min-h-[220px] bg-[var(--n3-dark-surface)] p-7">
                <CheckCircle2 className="h-6 w-6 text-[var(--n3-teal-soft)]" />
                <h3 className="mt-8 text-[22px] text-[var(--n3-text-light)]">{item.title}</h3>
                <p className="mt-4 text-[13px] leading-6 text-[var(--n3-text-muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="retro-dark py-24">
        <div className="retro-shell relative border-y border-[rgba(118,214,214,.2)] py-16">
          <small>{page.ctaEyebrow}</small>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-[clamp(36px,4.5vw,62px)]">{page.ctaTitle}</h2>
              <p className="mt-6 max-w-2xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.ctaBody}</p>
            </div>
            <div className="button-row lg:justify-end">
              <Link href={href(locale, '/diagnostico')} className="retro-button retro-button-primary gap-2">
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href(locale, '/soluciones')} className="retro-button">
                {page.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
