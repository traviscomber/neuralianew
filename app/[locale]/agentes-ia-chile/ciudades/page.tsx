import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { chileCityPages, cityRouteSlug } from '@/lib/chile-city-pages'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'

interface PageProps {
  params: Promise<{ locale: string }>
}

const zoneLabels = {
  'norte-grande': { es: 'Norte Grande', en: 'Far North' },
  'norte-chico': { es: 'Norte Chico', en: 'Near North' },
  central: { es: 'Zona Central', en: 'Central Chile' },
  'centro-sur': { es: 'Centro Sur', en: 'South-Central Chile' },
  patagonia: { es: 'Patagonia', en: 'Patagonia' },
} as const

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'
  return buildLocalizedMetadata({
    locale,
    path: '/agentes-ia-chile/ciudades',
    title: isES ? 'Agentes de IA por ciudad en Chile | N3uralia' : 'AI agents by city in Chile | N3uralia',
    description: isES
      ? 'Cobertura de N3uralia para proyectos de IA, automatización y software en los principales centros operacionales de Chile.'
      : 'N3uralia coverage for AI, automation and software projects across Chile’s principal operational centers.',
  })
}

export default async function ChileCitiesPage(props: PageProps) {
  const params = await props.params
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'
  const zones = ['norte-grande', 'norte-chico', 'central', 'centro-sur', 'patagonia'] as const

  return (
    <main className="bg-[#030606] text-[#d8e0df]">
      <section className="border-b border-[#739694]/20">
        <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:px-5 lg:py-28">
          <p className="font-[var(--font-rajdhani)] text-[11px] uppercase tracking-[0.2em] text-[#739694]">
            N3uralia / Chile
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {isES ? 'IA y automatización para operaciones ' : 'AI and automation for operations '}
            <span className="text-[#8fb2af]">{isES ? 'en Chile.' : 'across Chile.'}</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[#9eaaaa] sm:text-lg">
            {isES
              ? 'Trabajamos con organizaciones en Chile. Estas páginas organizan contextos operacionales por ciudad; no representan oficinas físicas ni soluciones prediseñadas. Cada proyecto parte del proceso, sistemas, datos y controles reales de la organización.'
              : 'We work with organizations across Chile. These pages organize operational contexts by city; they do not represent physical offices or prebuilt solutions. Every project starts from the organization’s real process, systems, data and controls.'}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={`/${locale}/diagnostico`} className="inline-flex items-center gap-2 border border-[#739694] bg-[#739694] px-5 py-3 font-[var(--font-rajdhani)] text-xs uppercase tracking-[0.15em] text-[#030606]">
              {isES ? 'Agendar diagnóstico' : 'Book a diagnosis'} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/${locale}/agentes-ia-chile`} className="inline-flex items-center border border-[#739694]/45 px-5 py-3 font-[var(--font-rajdhani)] text-xs uppercase tracking-[0.15em] text-[#d8e0df]">
              {isES ? 'Ver agentes de IA en Chile' : 'AI agents in Chile'}
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-5">
          {zones.map((zone, zoneIndex) => {
            const cities = chileCityPages.filter((city) => city.zone === zone)
            return (
              <section key={zone} className="border-t border-[#739694]/20 py-12 first:border-t-0 first:pt-0">
                <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
                  <div>
                    <p className="font-[var(--font-rajdhani)] text-[10px] uppercase tracking-[0.2em] text-[#667573]">0{zoneIndex + 1}</p>
                    <h2 className="mt-3 text-2xl font-medium">{zoneLabels[zone][locale]}</h2>
                  </div>
                  <div className="grid gap-px border border-[#739694]/15 bg-[#739694]/15 md:grid-cols-2 xl:grid-cols-3">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/${locale}/${cityRouteSlug(city)}`}
                        className="group min-h-[180px] bg-[#050908] p-6 transition-colors hover:bg-[#091311] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8fb2af]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <MapPin className="h-4 w-4 text-[#739694]" aria-hidden />
                          <ArrowRight className="h-4 w-4 text-[#667573] transition-transform group-hover:translate-x-1" aria-hidden />
                        </div>
                        <h3 className="mt-8 text-xl font-medium">{city.city}</h3>
                        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#667573]">{city.region}</p>
                        <p className="mt-4 text-sm leading-6 text-[#8f9d9b]">
                          {isES ? city.focusEs : city.focusEn}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )
          })}
        </div>
      </section>
    </main>
  )
}
