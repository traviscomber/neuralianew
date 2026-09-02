import Link from 'next/link'
import { BrandWordmark } from '@/components/brand'
import type { Locale } from '@/lib/get-locale'

const footerCopy = {
  en: {
    tagline: 'We build AI systems and intelligent workflows for more clarity, speed and control.',
    solutions: 'Solutions',
    products: 'Products',
    company: 'Company',
    resources: 'Resources',
    contact: 'Contact',
    rights: 'All rights reserved.',
    recognition: 'Recognition',
    sectorSolutions: 'Solutions by sector',
    diagnosis: 'Diagnosis',
    projects: 'Projects',
    platform: 'Platform',
    integrations: 'Integrations',
    about: 'About us',
    careers: 'Careers',
    news: 'News',
    useCases: 'Use cases',
    library: 'Library',
    faq: 'FAQ',
  },
  es: {
    tagline: 'Construimos sistemas de IA y flujos inteligentes para operar con más claridad, velocidad y control.',
    solutions: 'Soluciones',
    products: 'Productos',
    company: 'Empresa',
    resources: 'Recursos',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
    recognition: 'Reconocimiento',
    sectorSolutions: 'Soluciones por sector',
    diagnosis: 'Diagnóstico',
    projects: 'Proyectos',
    platform: 'Plataforma',
    integrations: 'Integraciones',
    about: 'Nosotros',
    careers: 'Carreras',
    news: 'Noticias',
    useCases: 'Casos de uso',
    library: 'Biblioteca',
    faq: 'Preguntas frecuentes',
  },
} as const

export function RecognitionFooter({ locale }: { locale: Locale }) {
  const t = footerCopy[locale]
  const recognitionPath = locale === 'es' ? 'reconocimiento' : 'recognition'
  const projectsPath = locale === 'es' ? 'proyectos' : 'projects'
  const productsPath = locale === 'es' ? 'productos' : 'products'

  return (
    <footer className="retro-footer">
      <div className="retro-shell footer-grid">
        <div>
          <Link href={`/${locale}`} aria-label="N3uralia">
            <BrandWordmark className="h-[52px] w-[190px]" priority sizes="190px" />
          </Link>
          <p>{t.tagline}</p>
        </div>

        <div>
          <small>{t.solutions}</small>
          <Link href={`/${locale}/${recognitionPath}`}>{t.recognition}</Link>
          <Link href={`/${locale}/soluciones`}>{t.sectorSolutions}</Link>
          <Link href={`/${locale}/diagnostico`}>{t.diagnosis}</Link>
        </div>

        <div>
          <small>{t.products}</small>
          <Link href={`/${locale}/${productsPath}`}>{t.products}</Link>
          <Link href={`/${locale}/${projectsPath}`}>{t.projects}</Link>
          <Link href={`/${locale}/legal-intelligence`}>{t.platform}</Link>
        </div>

        <div>
          <small>{t.company}</small>
          <Link href={`/${locale}/about`}>{t.about}</Link>
          <Link href={`/${locale}/careers`}>{t.careers}</Link>
          <Link href={`/${locale}/blog`}>{t.news}</Link>
        </div>

        <div>
          <small>{t.resources}</small>
          <Link href={`/${locale}/case-studies`}>{t.useCases}</Link>
          <Link href={`/${locale}/blog`}>{t.library}</Link>
          <Link href={`/${locale}/faq`}>{t.faq}</Link>
        </div>

        <div>
          <small>{t.contact}</small>
          <a href="mailto:info@n3uralia.com">info@n3uralia.com</a>
          <a href="tel:+56993826127">+56 9 9382 6127</a>
          <span>Santiago, Chile</span>
          <a href="https://linkedin.com/company/n3uralia" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="retro-shell footer-bottom">© {new Date().getFullYear()} N3uralia. {t.rights}</div>
    </footer>
  )
}
