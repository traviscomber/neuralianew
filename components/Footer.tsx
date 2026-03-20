'use client'

import Link from 'next/link'

interface FooterProps {
  locale: string
}

export function Footer({ locale }: FooterProps) {
  const labels = {
    es: {
      company: 'Empresa',
      caseStudies: 'Casos de Éxito',
      security: 'Seguridad',
      nodes: 'Nodos',
      patterns: 'Patrones',
      copyright: 'Todos los derechos reservados.',
      description: 'Ingeniería de IA para operaciones reales. Sistemas agénticos en producción, automatización y plataformas enterprise.',
    },
    en: {
      company: 'Company',
      caseStudies: 'Case Studies',
      security: 'Security',
      nodes: 'Nodes',
      patterns: 'Patterns',
      copyright: 'All rights reserved.',
      description: 'AI engineering for real operations. Production agentic systems, automation, and enterprise platforms.',
    },
  }

  const t = locale === 'es' ? labels.es : labels.en
  const baseUrl = `/${locale}`

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '28px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', opacity: 0.9 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ fontWeight: 700 }}>N3uralia</div>
            <div style={{ marginTop: 8, opacity: 0.8, maxWidth: 520 }}>
              {t.description}
            </div>
          </div>

          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ fontWeight: 700 }}>{t.company}</div>
            <Link href={`${baseUrl}/case-studies`} style={{ color: 'white', textDecoration: 'none', opacity: 0.85 }}>
              {t.caseStudies}
            </Link>
            <Link href={`${baseUrl}/security`} style={{ color: 'white', textDecoration: 'none', opacity: 0.85 }}>
              {t.security}
            </Link>
            <Link href={`${baseUrl}/nodes`} style={{ color: 'white', textDecoration: 'none', opacity: 0.85 }}>
              {t.nodes}
            </Link>
            <Link href={`${baseUrl}/patterns`} style={{ color: 'white', textDecoration: 'none', opacity: 0.85 }}>
              {t.patterns}
            </Link>
          </div>
        </div>

        <div style={{ marginTop: 20, opacity: 0.55 }}>
          © {new Date().getFullYear()} N3uralia. {t.copyright}
        </div>
      </div>
    </footer>
  )
}
