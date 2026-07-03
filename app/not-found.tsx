import Link from 'next/link'
import { headers } from 'next/headers'
import { BrandMark, BrandWordmark } from '@/components/brand'

const copy = {
  es: {
    title: 'Esta ruta no existe.',
    description: 'Puede que el enlace haya cambiado o que estás buscando una sección antigua. Volvamos a la landing principal.',
    home: 'Ir al inicio',
    contact: 'Agendar diagnóstico',
    switchLabel: 'Cambiar a inglés',
    switchText: 'EN',
  },
  en: {
    title: 'This route does not exist.',
    description: 'The link may have changed, or you may be looking for an older section. Let us get back to the main landing page.',
    home: 'Go home',
    contact: 'Book diagnosis',
    switchLabel: 'Switch to Spanish',
    switchText: 'ES',
  },
} as const

export default async function NotFound() {
  const headerStore = await headers()
  const locale = headerStore.get('x-n3uralia-locale') === 'en' ? 'en' : 'es'
  const text = copy[locale]
  const alternateLocale = locale === 'es' ? 'en' : 'es'

  return (
    <main className='grid min-h-screen place-items-center bg-[radial-gradient(circle_at_18%_16%,#ffffff_0,transparent_30%),linear-gradient(135deg,#fbfbfa_0%,#edf4f1_52%,#fbfbfa_100%)] px-6 text-[#173634]'>
      <section className='w-full max-w-2xl rounded-[2.4rem] border border-[#d8e5e2] bg-white/86 p-8 text-center shadow-[0_38px_120px_-86px_#173634] backdrop-blur md:p-12'>
        <BrandMark className='mx-auto h-16 w-16 rounded-2xl text-[#789b96]' />
        <BrandWordmark className='mx-auto mt-7 text-4xl text-[#789b96]' />
        <p className='mt-9 text-xs font-semibold uppercase tracking-[0.28em] text-[#789b96]'>404</p>
        <h1 className='mt-4 text-4xl font-light leading-tight text-[#173634] md:text-6xl'>{text.title}</h1>
        <p className='mx-auto mt-5 max-w-lg text-base leading-8 text-[#65706d]'>{text.description}</p>
        <div className='mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center'>
          <Link href={`/${locale}`} className='inline-flex items-center justify-center rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]'>
            {text.home}
          </Link>
          <Link href={`/${locale}/contact`} className='inline-flex items-center justify-center rounded-full border border-[#b9d0cb] bg-white px-6 py-3 text-sm font-semibold text-[#526e69] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789b96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]'>
            {text.contact}
          </Link>
          <Link href={`/${alternateLocale}`} aria-label={text.switchLabel} className='inline-flex items-center justify-center rounded-full border border-[#d8e5e2] bg-[#fbfbfa] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789b96] hover:text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]'>
            {text.switchText}
          </Link>
        </div>
      </section>
    </main>
  )
}
